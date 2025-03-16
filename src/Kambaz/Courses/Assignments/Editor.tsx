import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const assignment =
    aid === "NewAssignment" ? null : assignments.find((a) => a._id === aid);
  const [assignmentName, setAssignmentName] = useState(
    assignment ? assignment.title : ""
  );
  const [assignmentDescription, setAssignmentDescription] = useState(
    assignment ? assignment.description : ""
  );
  const [assignmentPoints, setAssignmentPoints] = useState(
    assignment ? assignment.points : ""
  );
  const [assignmentAvailableFrom, setAssignmentAvailableFrom] = useState(
    assignment ? assignment.notAvailableUntil : ""
  );
  const [assignmentDue, setAssignmentDue] = useState(
    assignment ? assignment.due : ""
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };
  const handleSave = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
    const updatePayload = {
      _id: aid,
      title: assignmentName,
      course: cid,
      description: assignmentDescription,
      points: assignmentPoints,
      notAvailableUntil: assignmentAvailableFrom,
      due: assignmentDue,
    };
    const addPayload = {
      title: assignmentName,
      course: cid,
      description: assignmentDescription,
      points: assignmentPoints,
      notAvailableUntil: assignmentAvailableFrom,
      due: assignmentDue,
    };
    const action = assignment
      ? updateAssignment(updatePayload)
      : addAssignment(addPayload);

    dispatch(action);
  };

  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={assignmentName}
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            as="textarea"
            rows={12}
            placeholder={assignmentDescription}
            value={assignmentDescription}
            onChange={(e) => setAssignmentDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="4">
            Points
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder={assignmentPoints}
              value={assignmentPoints}
              onChange={(e) => setAssignmentPoints(e.target.value)}
            />
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
                <Form.Control
                  type="text"
                  placeholder={assignmentDue}
                  value={assignmentDue}
                  onChange={(e) => setAssignmentDue(e.target.value)}
                />
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
                    placeholder={assignmentAvailableFrom}
                    value={assignmentAvailableFrom}
                    onChange={(e) => setAssignmentAvailableFrom(e.target.value)}
                  />
                  <InputGroup.Text>
                    <FaRegCalendarAlt />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label className="fw-bold fs-6">Until</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder={assignmentDue}
                    value={assignmentDue}
                    onChange={(e) => setAssignmentDue(e.target.value)}
                  />
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
