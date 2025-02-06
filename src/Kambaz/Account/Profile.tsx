import { Link } from "react-router-dom";
import { Dropdown, Form, InputGroup } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control
        id="wd-username"
        defaultValue="alice"
        placeholder="username"
        className="mb-2"
      />
      <Form.Control
        id="wd-password"
        defaultValue="123"
        placeholder="password"
        type="password"
        className="mb-2"
      />
      <Form.Control
        id="wd-firstname"
        defaultValue="Alice"
        placeholder="First Name"
        className="mb-2"
      />
      <Form.Control
        id="wd-lastname"
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="mb-2"
      />
      <Form.Group className="mb-2">
        <InputGroup>
          <Form.Control defaultValue="2000-01-01" type="date" id="wd-dob" />
          <InputGroup.Text>
            <FaRegCalendarAlt />
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <Form.Control
        defaultValue="alice@wonderland"
        type="email"
        id="wd-email"
        className="mb-2"
      />
      <Dropdown>
        <Dropdown.Toggle className="bg-light text-dark">
          Faculty
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>User</Dropdown.Item>
          <Dropdown.Item>Admin</Dropdown.Item>
          <Dropdown.Item>Faculty</Dropdown.Item>
          <Dropdown.Item>Student</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <Link to="/Kambaz/Account/Signin">Sign out</Link>
    </div>
  );
}
