import React, { useEffect, useState } from "react";
import axios from "axios";
import AddDrinkModal from "./Modal/AddDrinkModal";
import EditDrinkModal from "./Modal/EditDrinkModal";
import DeleteDrinkModal from "./Modal/DeleteDrinkModal";

export default function Menu() {
  const [drinksList, setDrinksList] = useState([]);
  const [chosenItem, setChosenItem] = useState();    
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [drinkType, setDrinkType] = useState("");

  //axios JSON
  useEffect(() => {
    console.log("init");
    try {
        axios.get("http://localhost:8000/drinks").then((res) => {
            setDrinksList(res.data.data);
        });
    } catch (error) {
        console.error('Error:', error);
    }
      
  }, []);

  const handleModal = (item) => {
    setChosenItem(item);
    setIsModalOpen(true)
    console.log(item);
  }

  return (
    <>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Drink Menu</h1>
        <p className="mb-4">
          This is a menu that automatically loaded from database. Staff can
          change, add or remove new drinks by simple buttons.
        </p>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <div className="row">
            <div className="col">
                <h6 className="m-0 font-weight-bold text-primary">
                    Drink Menu
                </h6>
            </div>
                <div className="col text-right">
                    <button
                        className="btn btn-primary btn-icon-split"
                        data-toggle="modal"
                        data-target="#addDrinkModal">
                        <span className="icon">
                            <i className="fas fa-plus-circle"></i>
                        </span>
                        <span className="text">Add new drinks</span>
                    </button>
                    <AddDrinkModal />
                </div>
            </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Drink Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>
                    <div className="dropdown">
                      <button 
                        className="btn dropdown-toggle" 
                        type="button" 
                        id="dropdownType" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="true">
                        <strong>Type</strong>
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownType">
                        <button 
                            className="btn dropdown-item"
                            onClick={() => setDrinkType("smoothie")}>Smoothie</button>
                        <button 
                            className="btn dropdown-item"
                            onClick={() => setDrinkType("juice")}>Juice</button>
                        <button 
                            className="btn dropdown-item"
                            onClick={() => setDrinkType("")}>All</button>
                      </div>
                    </div>
                  </th>
                  {/* <th>Type</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {drinksList.map((item, index) => {
                return (
                  (item["type"] + "").includes(drinkType) && (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item["name"]}</td>
                      <td>{item["description"]}</td>
                      <td>{item["price"]}</td>
                      <td>{item["type"]}</td>
                      <td>
                        {/* EDIT */}
                        <button 
                          className="btn btn-primary btn-icon-split"
                          data-toggle="modal"
                          data-target="#editDrinkModal">
                          <span className="text">
                              <i className="fas fa-edit"></i>
                          </span>
                        </button>
                        <EditDrinkModal />
                        {/* DEL */}
                        <button 
                          className="btn btn-danger btn-icon-split mx-1"
                          data-toggle="modal"
                          data-target="#deleteDrinkModal"
                          onClick={() => handleModal(item)}>
                          <span className="text">
                              <i className="fas fa-trash-alt"></i>
                          </span>
                          </button>                          
                            {isModalOpen && (
                                <DeleteDrinkModal name={chosenItem["name"]} id={chosenItem["drink_id"]} />
                            )}
                        </td>
                      </tr>
                    )
                  );
                })}
              </tbody>
                <tfoot>
                  <tr>
                    <th>No.</th>
                    <th>Drink</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
