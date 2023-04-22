import React, { useState } from "react";
import axios from "axios";
import "./AddFlight.css"

const AddFlight = () => {
  const [flightDetails, setFlightDetails] = useState({
    flightID: "",
    flightName: "",
    seatingCapacity: "",
    reservationCapacity: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFlightDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/admin/addflight", flightDetails);
      alert("Flight added successfully!");
      setFlightDetails({
        flightID: "",
        flightName: "",
        seatingCapacity: "",
        reservationCapacity: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error adding flight!");
    }
  };

  return (
    
      <div className="q">
       
    
    <form onSubmit={handleFormSubmit}>
      <h1 className="add-flight-heading">Add Flight Details</h1>

      <div>
        <label htmlFor="flightName">Flight Name:</label>
        <input
          type="text"
          id="flightName"
          name="flightName"
          value={flightDetails.flightName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="seatingCapacity">Seating Capacity:</label>
        <input
          type="text"
          id="seatingCapacity"
          name="seatingCapacity"
          value={flightDetails.seatingCapacity}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="reservationCapacity">Reservation Capacity:</label>
        <input
          type="number"
          id="reservationCapacity"
          name="reservationCapacity"
          value={flightDetails.reservationCapacity}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Add Flight</button>
    </form>
    </div>
  );
};

export default AddFlight;
