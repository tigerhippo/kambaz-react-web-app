import { Button, Col, Dropdown, Form, InputGroup, Row } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" placeholder="A1" />
          <Form.Control
            className="mt-3"
            as="textarea"
            rows={12}
            placeholder={`The assignment is available online\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n\nYour full name and section\nLinks to each of the lab assignments\nLink to the Kanbas application\nLinks to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page`}
          />
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="4">
            Points
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="4">
            Assignment Group
          </Form.Label>
          <Col sm={8}>
            <Dropdown>
              <Dropdown.Toggle className="bg-light text-dark">
                ASSIGNMENTS
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>ASSIGNMENTS</Dropdown.Item>
                <Dropdown.Item>QUIZZES</Dropdown.Item>
                <Dropdown.Item>PROJECTS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="4">
            Display Grade as
          </Form.Label>
          <Col sm={8}>
            <Dropdown>
              <Dropdown.Toggle className="bg-light text-dark">
                Percentage
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Percentage</Dropdown.Item>
                <Dropdown.Item>Letter</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="4">
            Submission Type
          </Form.Label>
          <Col sm={8}>
            <Dropdown className="mb-3">
              <Dropdown.Toggle className="bg-light text-dark">
                Online
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Online</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Group>
              <Form.Label className="fw-bold fs-6">
                Online Entry Options
              </Form.Label>
              <Form.Check type="checkbox" label="Text Entry" />
              <Form.Check type="checkbox" label="Website URL" />
              <Form.Check type="checkbox" label="Media Recordings" />
              <Form.Check type="checkbox" label="Student Annotation" />
              <Form.Check type="checkbox" label="File Uploads" />
            </Form.Group>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="4">
            Assign
          </Form.Label>
          <Col sm={8}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold fs-6">Assign To</Form.Label>
              <Form.Control type="text" placeholder="Everyone" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold fs-6">Due</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="May 13, 2024, 11:59 PM"
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
                    placeholder="May 6, 2024, 11:59 PM"
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
          <Button variant="secondary" size="lg" className="me-2">
            Cancel
          </Button>
          <Button variant="danger" size="lg" className="me-2">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
