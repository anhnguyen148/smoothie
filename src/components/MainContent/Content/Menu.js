import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Menu() {
    const [drinksList, setDrinksList] = useState([]);

    //axios JSON
    useEffect(() => {
        console.log("init");
        axios.get("http://localhost:8000/drinks").then((res) => {
            setDrinksList(res.data.data);
        });
    }, []);

    return (
        <div class="container-fluid">
            <h1 class="h3 mb-2 text-gray-800">Smoothie Shop Drink Menu</h1>
            <p class="mb-4">This is a menu that automatically loaded from database. Employee can change or add new drinks by simple buttons.</p>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Current Menu</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Drink Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {drinksList.map((item, index) => {     
                                    return(                            
                                        <tr key={index}>
                                            <td>{item["drink_id"]}</td>
                                            <td>{item["name"]}</td>
                                            <td>{item["description"]}</td>
                                            <td>{item["price"]}</td>
                                            <td>{item["type"]}</td>
                                        </tr>
                                    )   
                                })}                                
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>No.</th>
                                    <th>Drink</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>                    
    )
}