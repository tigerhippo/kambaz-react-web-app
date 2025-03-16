import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import AssignmentDeleteModal from "./AssignmentDeleteModal";
export default function AssignmentControlButtons({
  assignmentId,
  assignmentName,
  deleteAssignment,
}: {
  assignmentId: string;
  assignmentName: string;
  deleteAssignment: (id: string) => void;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={handleShow} />
      <AssignmentDeleteModal
        assignmentId={assignmentId}
        show={show}
        handleClose={handleClose}
        dialogTitle="Delete Assignment"
        assignmentName={assignmentName}
        deleteAssignment={deleteAssignment}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
