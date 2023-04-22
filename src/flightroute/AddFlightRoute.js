import React, { useState } from "react";
import axios from "axios";

const AddFlightRoute = () => {
  const [flightRoutes, setFlightRoutes] = useState({
    routeID: "",
    source: "",
    destination: "",
    distance: "",
    fare:"",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFlightRoutes((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/admin/addRoute", flightRoutes);
      alert("Flight route added successfully!");
      setFlightRoutes({
        routeID: "",
        source: "",
        destination: "",
        distance: "",
        fare:"",
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
        <label htmlFor="flightName">SOURCE:</label>
        <input
          type="text"
          id="source"
          name="source"
          value={flightRoutes.source}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="seatingCapacity">DESTINATION:</label>
        <input
          type="text"
          id="destination"
          name="destination"
          value={flightRoutes.destination}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="reservationCapacity">DISTANCE:</label>
        <input
          type="number"
          id="distance"
          name="distance"
          value={flightRoutes.distance}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="reservationCapacity">FARE:</label>
        <input
          type="number"
          id="fare"
          name="fare"
          value={flightRoutes.fare}
          onChange={handleInputChange}
          required
        />
      </div>

      <button type="submit">Add Flight Route</button>
    </form>

    </div>
    
  );
};

export default AddFlightRoute;
