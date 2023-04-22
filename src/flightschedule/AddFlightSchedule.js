import axios from "axios";
import React, { useState, useEffect } from "react";


const AddFlightSchedule = () => {
  const [flightSchedules, setFlightSchedules] = useState({
    scheduleID: "",
    travelDuration: "",
    availableDays: "",
    departureTime: "",
    flightBean: {
      flightID: 0,
      flightName: "",
      seatingCapacity: 0,
      reservationCapacity: 0,
    },
    routeBean: {
      routeID: 0,
      source: "",
      destination: "",
      distance: 0,
      fare: 0,
    }

  });
  
 const [flights, setFlights] = useState([
  {
    flightID: "",
    flightName: "",
  },
]);

const [routes, setRoutes] = useState([
  {
    routeID: "",
    source: "",
  },
]);



useEffect(() => {
  const fetchFlights = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/all/viewflights");
      setFlights(response.data);
    } catch (error) {
      console.error(error);
    
    }
  };

  const fetchRoutes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/all/viewroutes");
      setRoutes(response.data);
    } catch (error) {
      console.error(error);
     
    }
  };

  fetchFlights();
  fetchRoutes();
}, []);



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFlightSchedules((prevState) => ({ ...prevState, [name]: value }));
  };
  

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/admin/addschedule", flightSchedules);
      
      setFlightSchedules({
        scheduleID: "",
        travelDuration: "",
        availableDays: "",
        depatureTime: "",
        flightBean: {
          flightID: 0,
          flightName: "",
          seatingCapacity: 0,
          reservationCapacity: 0,
        },
        routeBean: {
          routeID: 0,
          source: "",
          destination: "",
          distance: 0,
          fare: 0,
        }

      });
    } catch (error) {
      console.error(error);
     
    }
  };

  return (
    <div className ="q" >
    <form onSubmit={handleFormSubmit}>
      <h1 className="add-flight-heading">Add Flight Schedule</h1>

      <div>
        <label htmlFor="seatingCapacity">travelDuration:</label>
        <input
          type="text"
          id="travelDuration"
          name="travelDuration"
          value={flightSchedules.travelDuration}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="reservationCapacity">availableDays:</label>
        <input
          type="number"
          id="availableDays"
          name="availableDays"
          value={flightSchedules.availableDays}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="reservationCapacity">departureTime:</label>
        <input
          type="number"
          id="departureTime"
          name="departureTime"
          value={flightSchedules.departureTime}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
  <label htmlFor="flightID" style={{ fontSize: "1.2em" }}>Flight ID:</label>
  <select
    id="flightID"
    name="flightID"
    value={flights.flightID}
    onChange={handleInputChange}
    required
    style={{ fontSize: "1.2em", height: "2em", width: "10em", borderRadius: "10px" }}
  >
    <option value="">Select a flight ID</option>
    {flights.map((flight) => (
      <option key={flight.flightID} value={flight.flightID}>
        {flight.flightID}
      </option>
    ))}
  </select>
</div>

<div>
  <label htmlFor="routeID" style={{ fontSize: "1.2em" }}>Route ID:</label>
  <select
    id="routeID"
    name="routeID"
    value={flightSchedules.routeID}
    onChange={handleInputChange}
    required
    style={{ fontSize: "1.2em", height: "2em", width: "10em", borderRadius: "10px" }}
  >
    <option value="">Select a route ID</option>
    {routes.map((route) => (
      <option key={route.routeID} value={route.routeID}>
        {route.routeID}
      </option>
    ))}
  </select>
</div>


      <button onSubmit={handleFormSubmit} type="submit">Add Flight Schedule</button>
    </form>
    </div>
  );
};

export default AddFlightSchedule;
