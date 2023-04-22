import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './UpdateFlight.css';


export default function UpdateFlight(props) {
  // Initialize state variables for the flight details and success message
  const [flight, setFlight] = useState({
    flightID: "",
    flightName: "",
    seatingCapacity: "",
    reservationCapacity: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Get the flight ID from the URL using useParams hook
  const { id } = useParams();

  // Load the flight details from the server when the component mounts
  useEffect(() => {
    loadFlight();
  }, []);

  const loadFlight = async () => {
    try {
      // Make a GET request to the server to get the flight details
      const response = await axios.get(`http://localhost:8080/admin/all/viewflights`);
      // Update the flight state with the retrieved data
      setFlight(response.data);
    } catch (error) {
      console.error(error);
      
    }
  };

  const handleChange = (event) => {
    // Update the flight state with the new input value
    const { name, value } = event.target;
    setFlight({ ...flight, [name]: value });
  };
  
  /*const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make a PUT request to the server to update the flight details
      await axios.put(`http://localhost:8080/admin/updateflight`, {
        flightID: flight.flightID,
        flightName: flight.flightName,
        seatingCapacity: flight.seatingCapacity,
        reservationCapacity: flight.reservationCapacity
      });
    } catch (error) {
      console.error(error);
      alert("Error updating flight!");
    }
  };*/
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make a PUT request to the server to update the flight details
      await axios.put(`http://localhost:8080/admin/updateflight`, {
        flightID: flight.flightID,
        flightName: flight.flightName,
        seatingCapacity: flight.seatingCapacity,
        reservationCapacity: flight.reservationCapacity
      });
      setIsSuccess(true); // Set isSuccess to true after successful update
    } catch (error) {
      console.error(error);
      alert("Error updating flight!");
    }
  };
  

  return (
    <div className="q">
        <form onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Update Flight</h2>

          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Flight ID"
              name="flightID"
              value={flight.flightID}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Flight Name"
              name="flightName"
              value={flight.flightName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter seating capacity"
              name="seatingCapacity"
              value={flight.seatingCapacity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter reservation capacity"
              name="reservationCapacity"
              value={flight.reservationCapacity}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-warning btn-block">Update Flight</button>
        </form>
      </div>
    
  );
}
