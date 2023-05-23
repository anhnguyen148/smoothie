import React, { useEffect, useState } from "react";
import axios from "axios";
import AddNewDrinkModal from "./AddNewDrinkModal";

export default function Menu() {
  const [drinksList, setDrinksList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  //axios JSON
  useEffect(() => {
    console.log("init");
    axios.get("http://localhost:8000/drinks").then((res) => {
      setDrinksList(res.data.data);
    });
  }, []);

  const showAddModal = () => {
    console.log("Clicked!");
    setIsOpen(true);
  };

  const addNewDrink = () => {
    axios.post("http://localhost:8000/drinks", {
      name: "string 1111",
      description: "string",
      price: 0,
      image_name: "string",
      type: "string",
    }).then((res) => {
        console.log(res);
    });
  };

  return (
    <>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Drink Menu</h1>
        {isOpen && <AddNewDrinkModal />}
        <p className="mb-4">
          This is a menu that automatically loaded from database. Employee can
          change or add new drinks by simple buttons.
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
                  onClick={showAddModal}
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <span className="text">Add new drink</span>
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Drink Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Type</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {drinksList.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item["name"]}</td>
                        <td>{item["description"]}</td>
                        <td>{item["price"]}</td>
                        <td>{item["type"]}</td>
                        <td>
                          <a
                            href="#"
                            className="btn btn-primary btn-icon-split"
                          >
                            <span className="text">Edit</span>
                          </a>
                          <a
                            href="#"
                            className="btn btn-danger btn-icon-split mx-1"
                          >
                            <span className="text">Del</span>
                          </a>
                        </td>
                      </tr>
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

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={addNewDrink}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
