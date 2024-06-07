import { useEffect, lazy, Suspense } from "react";
import { useForm, Controller } from "react-hook-form";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

import { useCreateHours } from "./useCreateHours";
import { useEditHours } from "./useEditHours";
import Spinner from "../../ui/Spinner";

const Button = lazy(() => import("../../ui/Button"));
const Form = lazy(() => import("../../ui/Form"));
const Input = lazy(() => import("../../ui/Input"));
const FormRowVertical = lazy(() => import("../../ui/FormRowVertical"));

const CustomDatePickerWrapper = styled.div`
  .react-datepicker {
    font-family: "Nunito", sans-serif;
    font-size: 1.5rem;
  }
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle {
    fill: #fff;
    color: #fff;
  }

  .react-datepicker__header {
    background-color: #fff;
  }

  .react-datepicker-year-header {
    color: #fff;
  }

  .react-datepicker__year-wrapper {
    margin: 10px 60px;
    flex-direction: column;
  }

  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range,
  .react-datepicker__year-text--keyboard-selected {
    background-color: var(--color-lime-700);
    color: #fff;
  }
`;

function CreateHoursForm({ hoursToEdit = {}, onCloseModal }) {
  const { isCreating, createHours } = useCreateHours();
  const { isEditing, editHours } = useEditHours();

  const isWorking = isCreating || isEditing;

  const { _id: editId, ...editValues } = hoursToEdit;
  const isEditSession = Boolean(editId);

  useEffect(() => {
    if (editValues.year && typeof editValues.year === "number") {
      editValues.year = new Date(editValues.year, 0, 1);
    }
  }, [editValues.year, editValues]);

  const defaultValues = isEditSession
    ? { ...editValues }
    : { year: new Date(), Q1: "", Q2: "", Q3: "", Q4: "" };

  const { register, handleSubmit, reset, control, formState } = useForm({
    defaultValues,
  });

  const { errors } = formState;

  const calculateTotal = (data) => {
    const totalHoursYear =
      (parseFloat(data.Q1) || 0) +
      (parseFloat(data.Q2) || 0) +
      (parseFloat(data.Q3) || 0) +
      (parseFloat(data.Q4) || 0);

    return totalHoursYear;
  };

  function onSubmit(data) {
    const year = data.year instanceof Date ? data.year.getFullYear() : null;

    const totalHoursYear = calculateTotal(data);

    const newData = { ...data, year, totalHoursYear };

    if (isEditSession) {
      editHours(
        { newHoursData: newData, _id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createHours(newData, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
    }
  }

  return (
    <Suspense fallback={<Spinner />}>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        type={onCloseModal ? "modal" : "regular"}
      >
        <FormRowVertical label="Jahr" error={errors?.year?.message}>
          <Controller
            control={control}
            name="year"
            rules={{ required: "zwingend" }}
            render={({ field }) => (
              <CustomDatePickerWrapper>
                <DatePicker
                  {...field}
                  selected={field.value || new Date()}
                  onChange={(date) => field.onChange(date)}
                  showYearPicker
                  dateFormat="yyyy"
                  yearItemNumber={3}
                  minDate={new Date("2017-01-01")}
                  maxDate={new Date("2100-12-31")}
                  disabled={isWorking}
                  customInput={
                    <Input
                      id="year"
                      style={{ width: "105.5%" }}
                      autoComplete="off"
                      aria-label="Jahr"
                    />
                  }
                />
              </CustomDatePickerWrapper>
            )}
          />
        </FormRowVertical>

        {[1, 2, 3, 4].map((quarter) => (
          <FormRowVertical
            key={quarter}
            label={`${quarter}. Quartal`}
            error={errors[`Q${quarter}`]?.message}
          >
            <Input
              type="number"
              id={`Q${quarter}`}
              disabled={isWorking}
              defaultValue=""
              min={0}
              {...register(`Q${quarter}`, {
                min: {
                  value: 0,
                  message: "Mind. 0.",
                },
              })}
            />
          </FormRowVertical>
        ))}

        <FormRowVertical>
          <Button disabled={isWorking}>
            {isEditSession ? "Anpassen" : "Senden"}
          </Button>
          <Button
            variation="secondary"
            type="reset"
            onClick={() => onCloseModal?.()}
          >
            Abbrechen
          </Button>
        </FormRowVertical>
      </Form>
    </Suspense>
  );
}

export default CreateHoursForm;
