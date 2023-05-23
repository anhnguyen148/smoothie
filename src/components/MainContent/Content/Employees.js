import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Employees() {
    const [employeesList, setEmployeesList] = useState([]);
    const [branchName, setBranchName] = useState([]);

    //axios JSON
    useEffect(() => {
        console.log("init");
        axios.get("http://localhost:8000/branch").then((res) => {
            setBranchName(res.data.data);
            axios.get("http://localhost:8000/employees").then((res) => {
                setEmployeesList(res.data.data);
            });
        });        
    }, []);

    const branchNameById = (id) => {
        return branchName.find((b) => b.branch_id == id).name;
    };

    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Employees List</h1>
            <p className="mb-4">This is a list of employees that automatically loaded from database. The shop owner can change or add new employees by simple buttons.</p>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <div className="row">
                        <div className="col">
                            <h6 className="m-0 font-weight-bold text-primary">Employees</h6>
                        </div>
                        <div className="col text-right">
                            <a href="#" className="btn btn-primary btn-icon-split">
                                <span className="text">Add new employee</span>
                            </a>
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
                                    <th>Branch</th>
                                    <th>Position</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employeesList.map((item, index) => {     
                                    return(                            
                                        <tr key={index}>
                                            <td>{item["employee_id"]}</td>
                                            <td>{item["name"]}</td>
                                            <td>{item["email"]}</td>
                                            <td>{item["phone"]}</td>                                      
                                            <td>{branchNameById(item["branch_id"])}</td>
                                            <td>{item["position"]}</td>
                                            <td>
                                                <a href="#" className="btn btn-primary btn-icon-split">
                                                    <span className="text">Edit</span>
                                                </a>
                                                <a href="#" className="btn btn-danger btn-icon-split mx-1">
                                                    <span className="text">Del</span>
                                                </a>
                                            </td>
                                        </tr>
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
                    </div>
                </div>
            </div>
        </div>                    
    )
}