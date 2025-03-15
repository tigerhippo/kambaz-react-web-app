import { FaPlus } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function AssignmentsControls() {
  const { cid, aid } = useParams();
  console.log(aid);
  const navigate = useNavigate();
  const goToEditor = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments/NewAssignment`);
  };
  return (
    <div
      id="wd-assignments-controls"
      className="d-flex justify-content-between"
    >
      <Form>
        <InputGroup>
          <InputGroup.Text>
            <FaMagnifyingGlass />
          </InputGroup.Text>
          <Form.Control
            id="wd-search-assignment"
            size="lg"
            type="text"
            placeholder="Search ..."
          />
        </InputGroup>
      </Form>

      <div
        id="wd-assignments-controls-buttons"
        className="d-flex justify-content-end text-nowrap"
      >
        <Button
          variant="secondary"
          size="lg"
          className="me-2"
          id="wd-add-assignment-group"
        >
          <FaPlus className="position-relative me-2" />
          Group
        </Button>

        <Button
          variant="danger"
          size="lg"
          className="me-2"
          id="wd-add-assignment"
          onClick={goToEditor}
        >
          <FaPlus className="position-relative me-2" />
          Assignment
        </Button>
      </div>
    </div>
  );
}
