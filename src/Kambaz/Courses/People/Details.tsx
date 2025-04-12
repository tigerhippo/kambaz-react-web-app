/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import * as client from "../../Account/client";
import FormControl from "react-bootstrap/esm/FormControl";

export default function PeopleDetails() {
  const { uid } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editingName, setEditingName] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingRole, setEditingRole] = useState(false);

  const updateUserName = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditingName(false);
    navigate(-1);
  };
  const updateUserEmail = async () => {
    const updatedUser = { ...user, email };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditingEmail(false);
    navigate(-1);
  };
  const updateUserRole = async () => {
    const updatedUser = { ...user, role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditingRole(false);
    navigate(-1);
  };

  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    navigate(-1);
  };

  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
  };
  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  if (!uid) return null;

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button
        onClick={() => navigate(-1)}
        className="btn position-fixed end-0 top-0 wd-close-details"
      >
        <IoCloseSharp className="fs-1" />{" "}
      </button>
      <div className="text-center mt-2">
        {" "}
        <FaUserCircle className="text-secondary me-2 fs-1" />{" "}
      </div>
      <hr />
      <div className="text-danger fs-4 wd-name">
        {!editingName && (
          <FaPencil
            onClick={() => setEditingName(true)}
            className="float-end fs-4 mt-2 wd-edit"
          />
        )}
        {editingName && (
          <FaCheck
            onClick={() => updateUserName()}
            className="float-end fs-4 mt-2 me-2 wd-save"
          />
        )}
        {!editingName && (
          <div className="wd-name" onClick={() => setEditingName(true)}>
            {user.firstName} {user.lastName}
          </div>
        )}
        {user && editingName && (
          <FormControl
            className="w-50 fs-5 wd-edit-name"
            defaultValue={`${user.firstName} ${user.lastName}`}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateUserName();
              }
            }}
          />
        )}
      </div>
      <b>Email:</b>{" "}
      {!editingEmail && (
        <FaPencil
          onClick={() => setEditingEmail(true)}
          className="float-end fs-5 mt-2 wd-edit"
        />
      )}
      {editingEmail && (
        <FaCheck
          onClick={() => updateUserEmail()}
          className="float-end fs-5 mt-2 me-2 wd-save"
        />
      )}
      {!editingEmail && (
        <div className="wd-email" onClick={() => setEditingEmail(true)}>
          {user.email}
        </div>
      )}
      {user && editingEmail && (
        <FormControl
          className="w-50 fs-7 wd-edit-email"
          type="email"
          defaultValue={`${user.email}`}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateUserEmail();
            }
          }}
        />
      )}
      <br />
      <b>Roles:</b>{" "}
      <div>
        {!editingRole && (
          <FaPencil
            onClick={() => setEditingRole(true)}
            className="float-end fs-5 mt-2 wd-edit"
          />
        )}
        {editingRole && (
          <FaCheck
            onClick={() => updateUserRole()}
            className="float-end fs-5 mt-2 me-2 wd-save"
          />
        )}
        {!editingRole && (
          <div className="wd-role" onClick={() => setEditingRole(true)}>
            {user.role}
          </div>
        )}
        {user && editingRole && (
          <select
            className="form-select float-start w-25 wd-edit-role"
            defaultValue={`${user.role}`}
            onChange={(e) => setRole(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateUserRole();
              }
            }}
          >
            <option value="STUDENT">Students</option>
            <option value="TA">Assistants</option>
            <option value="FACULTY">Faculty</option>
            <option value="ADMIN">Administrators</option>
          </select>
        )}
      </div>
      <br />
      <br />
      <b>Login ID:</b> <span className="wd-login-id"> {user.loginId} </span>{" "}
      <br />
      <b>Section:</b> <span className="wd-section"> {user.section} </span>{" "}
      <br />
      <b>Total Activity:</b>{" "}
      <span className="wd-total-activity">{user.totalActivity}</span> <hr />
      <button
        onClick={() => deleteUser(uid)}
        className="btn btn-danger float-end wd-delete"
      >
        {" "}
        Delete{" "}
      </button>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-secondary float-start float-end me-2 wd-cancel"
      >
        {" "}
        Cancel{" "}
      </button>
    </div>
  );
}
