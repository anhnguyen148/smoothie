import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteStaffModal from "./Modal/DeleteStaffModal";
import AddStaffModal from "./Modal/AddStaffModal";

export default function Employees() {
  const [employeesList, setEmployeesList] = useState([]);
  const [branchName, setBranchName] = useState([]);
  const [chosenItem, setChosenItem] = useState([]);  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [branchStaff, setBranchStaff] = useState("");

  // axios JSON
  useEffect(() => {
    axios.get("http://localhost:8000/branch").then((res) => {
      setBranchName(res.data.data);
      axios.get("http://localhost:8000/employees").then((res) => {
        setEmployeesList(res.data.data);
      });
    });        
  }, []);

  const handleModal = (item) => {
    setChosenItem(item);
    setIsModalOpen(true);
    console.log(item);
  }

  const branchNameById = (id) => {
    return branchName.find((b) => b.branch_id === id).name;
  };

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Employees List</h1>
      <p className="mb-4">This is a list of employees that automatically loaded from database. The shop owner can change, add or remove new employees by simple buttons.</p>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <div className="row">
            <div className="col">
              <h6 className="m-0 font-weight-bold text-primary">Employees</h6>
            </div>
            <div className="col text-right">
              <button
                className="btn btn-primary btn-icon-split"
                data-toggle="modal"
                data-target="#addStaffModal">
                <span className="icon">
                  <i className="fas fa-plus-circle"></i>
                </span>
                <span className="text">Add new staffs</span>
              </button>
              <AddStaffModal />
            </div>                        
          </div>                    
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Employee Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>
                  <div className="dropdown">
                      <button 
                        className="btn dropdown-toggle" 
                        type="button" 
                        id="dropdownBranch" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="true">
                        <strong>Branch</strong>
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownBranch">
                        <button 
                            className="btn dropdown-item"
                            onClick={() => setBranchStaff("1")}>Florence</button>
                        <button 
                            className="btn dropdown-item"
                            onClick={() => setBranchStaff("2")}>Saigon</button>
                        <button 
                            className="btn dropdown-item"
                            onClick={() => setBranchStaff("")}>All</button>
                      </div>
                    </div>
                  </th>
                  {/* <th>Branch</th> */}
                  <th>Position</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employeesList.map((item, index) => {     
                  return(
                    ((item["branch_id"]) + "").includes(branchStaff) && (                          
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item["name"]}</td>
                        <td>{item["email"]}</td>
                        <td>{item["phone"]}</td>                                      
                        <td>{branchNameById(item["branch_id"])}</td>
                        <td>{item["position"]}</td>
                        <td>
                          <button className="btn btn-primary btn-icon-split">
                            <span className="text">
                              <i className="fas fa-edit"></i>
                            </span>
                          </button>
                          <button 
                            className="btn btn-danger btn-icon-split mx-1"
                            data-toggle="modal"
                            data-target="#deleteStaffModal"
                            onClick={() => handleModal(item)}>
                            <span className="text">
                                <i className="fas fa-trash-alt"></i>
                            </span>
                          </button>
                        </td>
                      </tr>
                    )
                  )   
                })}                                
              </tbody>
              <tfoot>
                <tr>
                  <th>No.</th>
                  <th>Employee Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Brand</th>
                  <th>Position</th>
                  <th>Action</th>
                </tr>
              </tfoot>
            </table>
            {isModalOpen && (
              <DeleteStaffModal name={chosenItem["name"]} id={chosenItem["drink_id"]}/>
            )}
          </div>
        </div>
      </div>
    </div>                    
  )
}