import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";

export default function AssignmentDeleteModal({
  assignmentId,
  show,
  handleClose,
  dialogTitle,
  assignmentName,
  deleteAssignment,
}: {
  assignmentId: string;
  show: boolean;
  handleClose: () => void;
  dialogTitle: string;
  assignmentName: string;
  deleteAssignment: (id: string) => void;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {`Are you sure you want to delete ${assignmentName}?`}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {" "}
          No{" "}
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            deleteAssignment(assignmentId);
            handleClose();
          }}
        >
          {" "}
          Yes{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
