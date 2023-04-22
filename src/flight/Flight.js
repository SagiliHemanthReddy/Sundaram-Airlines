import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Flight.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Flight() {

  const [flights,setFlights]=useState([]);

  useEffect(() => {
    loadFlights();
  },[]);

  const loadFlights=async()=>{
    const result =await axios.get("http://localhost:8080/admin/all/viewflights")
    setFlights(result.data);
  };

  return (
    <div className="q">
   
      <div className="text-center">
        <h1 className="display-6">ALL FLIGHTS</h1>

        <div className="py-4" style={{ display: "flex", marginLeft: "20px" }}>
           <table className="table " style={{ width: "50%", float: "left" }}>
   
            <thead>
              <tr>
                <th>Flight ID</th>
                <th>Flight Name</th>
                <th>Seating Capacity</th>
                <th>Reservation Capacity</th>
              </tr>
            </thead>
            <tbody>
              {flights.map((flight) => (
                <tr scope="row" key={flight.id}>
                  <td>{flight.flightID}</td>
                  <td>{flight.flightName}</td>
                  <td>{flight.seatingCapacity}</td>
                  <td>{flight.reservationCapacity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    
  );
}
