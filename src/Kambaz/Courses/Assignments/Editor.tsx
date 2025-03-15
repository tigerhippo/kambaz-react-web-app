import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router";
import * as db from "../../Database";
import { useNavigate } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  const assignment = assignments.find((assignment) => assignment._id === aid);
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };
  const handleSave = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };
  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" placeholder={`${assignment?.title}`} />
          <Form.Control
            className="mt-3"
            as="textarea"
            rows={12}
            placeholder={`${assignment?.description}`}
          />
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="4">
            Points
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" placeholder={`${assignment?.points}`} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="4">
            Assign
          </Form.Label>
          <Col sm={8}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold fs-6">Due</Form.Label>
              <InputGroup>
                <Form.Control type="text" placeholder={`${assignment?.due}`} />
                <InputGroup.Text>
                  <FaRegCalendarAlt />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <div className="d-flex mb-3">
              <Form.Group className="me-2">
                <Form.Label className="fw-bold fs-6">Available From</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder={`${assignment?.notAvailableUntil}`}
                  />
                  <InputGroup.Text>
                    <FaRegCalendarAlt />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label className="fw-bold fs-6">Until</Form.Label>
                <InputGroup>
                  <Form.Control type="text" />
                  <InputGroup.Text>
                    <FaRegCalendarAlt />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </div>
          </Col>
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button
            variant="secondary"
            size="lg"
            className="me-2"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            size="lg"
            className="me-2"
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
