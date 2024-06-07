import { lazy } from "react";
import { useDeleteHours } from "./useDeleteHours";
import { HiPencil } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import styled from "styled-components";

const CreateHoursForm = lazy(() => import("./CreateHoursForm"));

const Hours = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-lime-800);
`;

const BoldCell = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--color-lime-800);
`;

function HoursRow({ hours }) {
  const { isDeleting, deleteHours } = useDeleteHours();

  const { _id: hoursId, year, Q1, Q2, Q3, Q4 } = hours;

  const isValidNumber = (value) => typeof value === "number" && !isNaN(value);

  const totalHoursYear =
    (isValidNumber(Q1) ? Q1 : 0) +
    (isValidNumber(Q2) ? Q2 : 0) +
    (isValidNumber(Q3) ? Q3 : 0) +
    (isValidNumber(Q4) ? Q4 : 0);

  return (
    <Table.Row>
      <BoldCell data-label="Jahr">{year}</BoldCell>
      <Hours data-label="Q1">{Q1}</Hours>
      <Hours data-label="Q2">{Q2}</Hours>
      <Hours data-label="Q3">{Q3}</Hours>
      <Hours data-label="Q4">{Q4}</Hours>
      <BoldCell data-label="Total">{totalHoursYear}</BoldCell>

      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle _id={hoursId} />

            <Menus.List _id={hoursId}>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />} label="Bearbeiten">
                  Bearbeiten
                </Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />} label="Löschen">
                  Löschen
                </Menus.Button>
              </Modal.Open>
            </Menus.List>
            <Modal.Window name="edit">
              <CreateHoursForm hoursToEdit={hours} />
            </Modal.Window>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="hours"
                disabled={isDeleting}
                onConfirm={() => deleteHours(hoursId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default HoursRow;
