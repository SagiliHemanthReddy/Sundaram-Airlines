import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function UpdateFlightRoute(props) {
  // Initialize state variables for the flight details and success message
  const [flightroute, setFlightRoute] = useState({
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
    loadFlightRoute();
  }, []);

  const loadFlightRoute = async () => {
    try {
      // Make a GET request to the server to get the flight details
      const response = await axios.get(`http://localhost:8080/admin/all/viewroutes`);
      // Update the flight state with the retrieved data
      setFlightRoute(response.data);
    } catch (error) {
      console.error(error);
      
    }
  };

  const handleChange = (event) => {
    // Update the flight state with the new input value
    const { name, value } = event.target;
    setFlightRoute({ ...flightroute, [name]: value });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make a PUT request to the server to update the flight details
      await axios.put(`http://localhost:8080/admin/updateroute`, {
        routeID: flightroute.routeID,
        source: flightroute.source,
        destination: flightroute.destination,
        distance: flightroute.distance,
        fare: flightroute.fare,

      });
      setIsSuccess(true); // Set isSuccess to true after successful update
    } catch (error) {
      console.error(error);
      alert("Error updating flight!");
    }
  };
  

  return (
    <div className="q">
    <div className="container">
        <form onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Update Flight Route</h2>

          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Route ID"
              name="routeID"
              value={flightroute.routeID}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter source"
              name="source"
              value={flightroute.source}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter destination"
              name="destination"
              value={flightroute.destination}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter distance"
              name="distance"
              value={flightroute.distance}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter fare"
              name="fare"
              value={flightroute.fare}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-warning btn-block">Update Flight Route</button>
        </form>
      </div>
      </div>
  );
}
