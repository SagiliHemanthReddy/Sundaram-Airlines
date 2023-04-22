import axios from "axios";
import React, { useState, useEffect } from "react";

const FlightSchedule = () => {
  const [flightSchedules, setFlightSchedules] = useState([]);
  const [flights, setFlights] = useState([]);
  const [routes, setRoutes] = useState([]);

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

    const fetchFlightSchedules = async () => {
      try {
        const response = await axios.get("http://localhost:8080/admin/all/viewschedules");
        setFlightSchedules(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFlights();
    fetchRoutes();
    fetchFlightSchedules();
  }, []);

  return (
    <div className="q">
      <h1 className="display-6" style={{ textAlign: "center" }}>
        View Flight Schedule
      </h1>

      <table className="table" style={{ margin: "0 auto", width: "50%" }}>
        <thead>
          <tr>
            <th>Schedule ID</th>
            <th>Travel Duration</th>
            <th>Available Days</th>
            <th>Departure Time</th>
            <th>Flight ID</th>
            <th>Route ID</th>
          </tr>
        </thead>

        <tbody>
          {flightSchedules.map((flightSchedule) => (
            <tr key={flightSchedule.scheduleID}>
              <td>{flightSchedule.scheduleID}</td>
              <td>{flightSchedule.travelDuration}</td>
              <td>{flightSchedule.availableDays}</td>
              <td>{flightSchedule.departureTime}</td>
              <td>{flightSchedule.flightID}</td>
              <td>{flightSchedule.routeID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightSchedule;
