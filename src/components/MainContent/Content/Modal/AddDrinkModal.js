import React, { useState } from "react";
import axios from "axios";

export default function AddDrinkModal() {
  const [drinkData, setDrinkData] = useState({
    name: "",
    description: "",
    price: "",
    image_name: "",
    type: ""
  });

  const modalBodyItems = [
    {
      label: "drinkNameInput",
      type: "text",
      text: "Drink Name",
      name: "name",
      value: drinkData.name
    },
    {
      label: "descInput",
      type: "text",
      text: "Description",
      name: "description",
      value: drinkData.description
    },
    {
      label: "priceInput",
      type: "text",
      text: "Price",
      name: "price",
      value: drinkData.price
    },
    {
      label: "typeInput",
      type: "text",
      text: "Type",
      name: "type",
      value: drinkData.type
    },

  ]

  const handleChange = (event) => {
    setDrinkData({ ...drinkData, [event.target.name]: event.target.value });
  };

  const addNewDrink = async (event) => {
    event.preventDefault();
    var regex = /^[0-9]+$/;
    if (
      drinkData.name === "" ||
      drinkData.description === "" ||
      drinkData.price === "" ||
      drinkData.type === ""
    ) {
      alert("Please fill in all fields");
      return;
    } else if (!drinkData.price.match(regex)) {
      alert("You must enter a valid price.")
    }
    try {
      await axios.post("http://localhost:8000/drinks", drinkData)
        .then((res) => { console.log(res) });
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div
      className="modal fade"
      id="addDrinkModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="addDrinkModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addDrinkModalLabel"><strong>Add a new drink</strong></h5>
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
                      <input required
                        type="text"
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
              onClick={addNewDrink}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}