import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

export default function DeleteFlightRoutes() {
  const [flightRoutes, setFlightRoutes] = useState([]);

  useEffect(() => {
    loadFlightRoutes();
  }, []);

  const loadFlightRoutes = async () => {
    const result = await axios.get("http://localhost:8080/admin/all/viewroutes")
    setFlightRoutes(result.data);
  };

  const deleteFlightRoute = async (id) => {
    await axios.delete(`http://localhost:8080/admin/deleteroute/${id}`);
    loadFlightRoutes();
  }

  return (
    <div className="q">
    <h1 className="display-6 text-center" style={{ textAlign: "center" }}>DELETE FLIGHT ROUTE</h1><br></br>
    
        <table className="table" style={{ margin: "0 auto", width: "50%" }}>
        

          <thead>
            <tr>
              <th scope="col">routeID</th>
              <th scope="col">source</th>
              <th scope="col">destination</th>
              <th scope="col">distance</th>
              <th scope="col">fare</th>
              <th scope="col">Button</th>
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
                <td>
                  <button className="btn btn-danger" onClick={() => deleteFlightRoute(flightroute.routeID)}>Delete Flight Route</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    
        </div>
  );
}
