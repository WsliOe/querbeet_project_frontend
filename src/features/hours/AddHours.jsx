import { lazy, Suspense } from "react";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";

const Button = lazy(() => import("../../ui/Button"));
const CreateHoursForm = lazy(() => import("./CreateHoursForm"));

function AddHours() {
  return (
    <Suspense fallback={<Spinner />}>
      <div>
        <Modal>
          <Modal.Open opens="hours-form">
            <Button>Stunden hinzufügen</Button>
          </Modal.Open>
          <Modal.Window name="hours-form">
            <CreateHoursForm />
          </Modal.Window>
        </Modal>
      </div>
    </Suspense>
  );
}

export default AddHours;
