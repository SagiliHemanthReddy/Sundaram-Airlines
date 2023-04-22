import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import "./DeleteFlights.css"

export default function DeleteFlights() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    loadFlights();
  }, []);

  const loadFlights = async () => {
    const result = await axios.get("http://localhost:8080/admin/all/viewflights")
    setFlights(result.data);
  };

  const deleteFlight = async (id) => {
    await axios.delete(`http://localhost:8080/admin/deleteflight/${id}`);
    loadFlights();
  }

  return (
    <div className="q">
      
      <div className="table-container">
      <h1 className="display-6 text-center "> DELETE FLIGHT </h1><br></br>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Flight ID</th>
              <th scope="col">Flight Name</th>
              <th scope="col">Seating Capacity</th>
              <th scope="col">Reservation Capacity</th>
              <th scope="col">Button</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight.flightID}>
                <td>{flight.flightID}</td>
                <td>{flight.flightName}</td>
                <td>{flight.seatingCapacity}</td>
                <td>{flight.reservationCapacity}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteFlight(flight.flightID)}>Delete Flight</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
