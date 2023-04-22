import axios from "axios";
import React, { useState, useEffect } from "react";

const DeleteFlightSchedule = () => {
  const [flightSchedules, setFlightSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState("");
  const [scheduleDetails, setScheduleDetails] = useState({
    travelDuration: "",
    availableDays: "",
    departureTime: "",
    flightID: "",
    routeID: "",
  });

  useEffect(() => {
    const fetchFlightSchedules = async () => {
      try {
        const response = await axios.get("http://localhost:8080/admin/all/viewschedules");
        setFlightSchedules(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFlightSchedules();
  }, []);

  const handleDeleteClick = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:8080/admin/deleteschedule/${selectedSchedule}`);
      setSelectedSchedule("");
      setScheduleDetails({
        travelDuration: "",
        availableDays: "",
        departureTime: "",
        flightID: "",
        routeID: "",
      });
      alert("Flight schedule deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete flight schedule");
    }
  };

  const handleSelectChange = async (event) => {
    const selectedId = event.target.value;
    setSelectedSchedule(selectedId);
    try {
      const response = await axios.get(`http://localhost:8080/admin/viewschedule/${selectedId}`);
      const selectedScheduleDetails = response.data;
      setScheduleDetails({
        travelDuration: selectedScheduleDetails.travelDuration,
        availableDays: selectedScheduleDetails.availableDays,
        departureTime: selectedScheduleDetails.departureTime,
        flightID: selectedScheduleDetails.flightID,
        routeID: selectedScheduleDetails.routeID,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className ="q">
      <h1 className="delete-flight-heading">Delete Flight Schedule</h1>
      <form onSubmit={handleDeleteClick}>
        <div>
          <label htmlFor="schedule">Select a Flight Schedule:</label>
          <select id="schedule" value={selectedSchedule} onChange={handleSelectChange}>
            <option value="">Select a flight schedule to delete</option>
            {flightSchedules.map((schedule) => (
              <option key={schedule.scheduleID} value={schedule.scheduleID}>
                {schedule.scheduleID} - {schedule.flightID} - {schedule.routeID}
              </option>
            ))}
          </select>
        </div>
        {selectedSchedule && (
          <div>
            <p>Selected Schedule Details:</p>
            <p>Travel Duration: {scheduleDetails.travelDuration}</p>
            <p>Available Days: {scheduleDetails.availableDays}</p>
            <p>Departure Time: {scheduleDetails.departureTime  }</p>
            <p>Flight ID: {scheduleDetails.flightID}</p>
            <p>Route ID: {scheduleDetails.routeID}</p>
          </div>
        )}
        <button type="submit" disabled={!selectedSchedule}>
          Delete Flight Schedule
        </button>
      </form>
    </div>
  );
};

export default DeleteFlightSchedule;
