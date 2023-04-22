import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Flight from "./flight/Flight";
import DeleteFlights from "./flight/DeleteFlights";
import UpdateFlight from "./flight/UpdateFlight";
import AddFlight from "./flight/AddFlight";

import FlightRoute from "./flightroute/FlightRoute";
import DeleteFlightRoutes from "./flightroute/DeleteFlightRoute";
import UpdateFlightRoute from "./flightroute/UpdateFlightRoute";
import AddFlightRoute from "./flightroute/AddFlightRoute";

import AddFlightSchedule from "./flightschedule/AddFlightSchedule";
import FlightSchedule from "./flightschedule/FlightSchedule";
import DeleteFlightSchedule from "./flightschedule/DeleteFlightSchedule";
import UpdateFlightSchedule from "./flightschedule/UpdateFlightSchedule";
import Login from "./Login";


function App() {
  return (
    <div className="App">
      
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} /> 


        <Route exact path="/flight" element={<Flight />} /> 
        <Route exact path="/addflight" element={<AddFlight />} />    
        <Route exact path="/deleteflights" element={<DeleteFlights />} />   
        <Route exact path="/updateflight" element={<UpdateFlight />} />

        <Route exact path="/flightroute" element={<FlightRoute />} /> 
        <Route exact path="/addflightroute" element={<AddFlightRoute />} />  
        <Route exact path="/deleteflightroutes" element={<DeleteFlightRoutes />} /> 
        <Route exact path="/updateflightroute" element={<UpdateFlightRoute />} />
  
        <Route exact path="/addflightschedule" element={<AddFlightSchedule />} />  
        <Route exact path="/flightschedule" element={<FlightSchedule />} /> 
        <Route exact path="/deleteflightschedule" element={<DeleteFlightSchedule />} /> 
        <Route exact path="/updateflightschedule" element={<UpdateFlightSchedule />} />
                
      </Routes>
    </Router>
  </div>
  );
}

export default App;

/*import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from "./component/pages/Home";
import View from './component/student/View'
import Edit from './component/student/Edit'
import '../src/App.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/view/:id' component={View} />
          <Route exact path='/edit/:id' component={Edit} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App; */
