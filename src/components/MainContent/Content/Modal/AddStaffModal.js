import React, { useState } from "react";
import axios from "axios";

export default function AddStaffModal() {
  const [staffData, setStaffData] = useState({
    name: "",
    email: "",
    address: "",
    username: "",
    password: "",
    phone: "",
    branch_id: "",
    position: ""
  });

  const modalBodyItems = [
    {
      label: "employeeNameInput",
      type: "text",
      text: "Name",
      name: "name",
      value: staffData.name
    },
    {
      label: "emailInput",
      type: "text",
      text: "Email",
      name: "email",
      value: staffData.email
    },
    {
      label: "addressInput",
      type: "text",
      text: "Address",
      name: "address",
      value: staffData.address
    },
    {
      label: "phoneInput",
      type: "text",
      text: "Phone",
      name: "phone",
      value: staffData.phone
    },
    {
      label: "usernameInput",
      type: "text",
      text: "Username",
      name: "username",
      value: staffData.username
    },
    {
      label: "pwInput",
      type: "password",
      text: "Password",
      name: "password",
      value: staffData.password
    },
    {
      label: "branchInput",
      type: "text",
      text: "Branch",
      name: "branch_id",
      value: staffData.branch_id
    },
    {
      label: "position",
      type: "text",
      text: "Position",
      name: "position",
      value: staffData.position
    }
  ]

  const handleChange = (event) => {
    setStaffData({ ...staffData, [event.target.name]: event.target.value });
  };

  const addNewStaff = async (event) => {
    event.preventDefault();
    var regex = /^[0-9]+$/;
    if (
      staffData.name === "" ||
      staffData.email === "" ||
      staffData.address === "" ||
      staffData.username === "" ||
      staffData.password === "" ||
      staffData.phone === "" ||
      staffData.branch_id === "" ||
      staffData.position === ""
    ) {
      alert("Please fill in all fields");
      return;
    } else if (!staffData.phone.match(regex)) {
      alert("You must enter a valid phone number.")
    }
    try {
      await axios.post("http://localhost:8000/employees/signup", staffData)
        .then((res) => { console.log(res) });
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div
      className="modal fade"
      id="addStaffModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="addStaffModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addStaffModalLabel"><strong>Add new staff account</strong></h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              {modalBodyItems.map((item, index) => {
                return (
                  <div key={index} className="form-group row">
                    <label htmlFor={item.label} className="col-sm-3 col-form-label">{item.text}</label>
                    <div className="col-sm-9">
                      <input
                        type={item.type}
                        className="form-control"
                        id={item.label}
                        name={item.name}
                        value={item.value}
                        onChange={handleChange} />
                    </div>
                  </div>
                )
              })}
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal">
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={addNewStaff}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}