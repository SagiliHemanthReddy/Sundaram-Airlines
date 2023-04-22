import axios from "axios";
import React, { useState, useEffect } from "react";

const UpdateFlightSchedule = () => {
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

  const handleUpdateClick = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8080/admin/updateschedule/${selectedSchedule}`, scheduleDetails);
      alert("Flight schedule updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update flight schedule");
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

  const handleInputChange = (event) => {
    setScheduleDetails({
      ...scheduleDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className = "q">
      <h1 className="update-flight-heading">Update Flight Schedule</h1>
      <form onSubmit={handleUpdateClick}>
        <div>
          <label htmlFor="schedule">Select a Flight Schedule:</label>
          <select id="schedule" value={selectedSchedule} onChange={handleSelectChange}>
            <option value="">Select a flight schedule to update</option>
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
            <label htmlFor="travelDuration">Travel Duration:</label>
            <input
              type="text"
              id="travelDuration"
              name="travelDuration"
              value={scheduleDetails.travelDuration}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="availableDays">Available Days:</label>
            <input
              type="text"
              id="availableDays"
              name="availableDays"
              value={scheduleDetails.availableDays}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="departureTime">Departure Time:</label>
            <input
              type="text"
              id="departureTime"
              name="departureTime"
              value={scheduleDetails.departureTime}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="flightID">Flight ID:
            </label>
            <input
              type="text"
              id="flightID"
              name="flightID"
              value={scheduleDetails.flightID}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="routeID">Route ID:</label>
            <input
              type="text"
              id="routeID"
              name="routeID"
              value={scheduleDetails.routeID}
              onChange={handleInputChange}
            />
            <br />
            <button type="submit">Update Schedule</button>
          </div>
        )}
      </form>
    </div>
  );
};
export default UpdateFlightSchedule;