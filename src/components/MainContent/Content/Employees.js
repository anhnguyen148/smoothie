import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Employees() {
    const [employeesList, setEmployeesList] = useState([]);

    //axios JSON
    useEffect(() => {
        console.log("init");
        axios.get("http://localhost:8000/employees").then((res) => {
            setEmployeesList(res.data.data);
        });
    }, []);

    return (
        <div class="container-fluid">
            <h1 class="h3 mb-2 text-gray-800">Smoothie Shop Employees Manage Site</h1>
            <p class="mb-4">This is a list of employees that automatically loaded from database. The shop owner can change or add new employees by simple buttons.</p>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Employees List</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Employee Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Brand</th>
                                    <th>Position</th>
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
                                            <td>{item["branch_id"]}</td>
                                            <td>{item["position"]}</td>
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
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>                    
    )
}