import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function FlightRoute() {

  const [flightRoutes,setFlightRoutes]=useState([]);

  useEffect(() => {
    loadFlightRoutes();
  },[]);

  const loadFlightRoutes=async()=>{
    const result =await axios.get("http://localhost:8080/admin/all/viewroutes")
    setFlightRoutes(result.data);
  };

  return (
    <div className="q">
     <div className="text-center">
        <h1 className="display-6" style={{ textAlign: "center" }} >ALL FLIGHT ROUTES</h1>

        <div className="py-4" style={{ display: "flex", marginLeft: "20px" }}>
         <table className="table" style={{ margin: "0 auto", width: "50%" }}>
   
         <thead>
            <tr>
              <th scope="col">routeID</th>
              <th scope="col">source</th>
              <th scope="col">destination</th>
              <th scope="col">distance</th>
              <th scope="col">fare</th>
            </tr>
          </thead>
            <tbody>
            {flightRoutes.map((flightroute) => (
              <tr key={flightroute.routeID}>
                <td>{flightroute.routeID}</td>
                <td>{flightroute.source}</td>
                <td>{flightroute.destination}</td>
                <td>{flightroute.distance}</td>
                <td>{flightroute.fare}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    
  );
}
