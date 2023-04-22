import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });
  const nav = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = details;
    if (username && password) {
      if (username === "AD001" && password === "AD001") {
        nav("/addflight");
      }
      if (username === "AD002" && password === "AD002") {
        nav("/deleteflights");
      }
      if (username === "AD003" && password === "AD003") {
        nav("/flight");
      }
      if (username === "AD004" && password === "AD004") {
        nav("/updateflight");
      }
      if (username === "AD005" && password === "AD005") {
        nav("/addflightroute");
      }
      if (username === "AD006" && password === "AD006") {
        nav("/deleteflightroutes");
      }
      if (username === "AD007" && password === "AD007") {
        nav("/flightroute");
      }
      if (username === "AD008" && password === "AD008") {
        nav("/updateflightroute");
      }
      if (username === "AD009" && password === "AD009") {
        nav("/addflightschedule");
      }
      if (username === "AD010" && password === "AD010") {
        nav("/deleteflightschedule");
      }
      if (username === "AD011" && password === "AD011") {
        nav("/flightschedule");
      }
      if (username === "AD012" && password === "AD012") {
        nav("/updateflightschedule");
      }
      if (username === "AD013" && password === "AD013") {
        nav("/getRoute");
      }
    } else {
      alert("error");
    }
  };

  return (
    <div className="q">
      
      <h1 className="display-6" style={{ textAlign: "center" }}>Sundaram Airlines</h1><br></br>
      <h1 className="display-6" style={{ textAlign: "center" }}>Login</h1><br></br>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form className="form-group" onSubmit={handleSubmit}>
            <div >
              <label >User name:</label>
              <input
                type="text"
                name="username"
                value={details.username}
                placeholder="username"
                onChange={handleChange}
              ></input>
            </div>
            <div >
              <label >Password:</label>
              <input
                type="text"
                name="password"
                value={details.password}
                placeholder="password"
                onChange={handleChange}
              ></input>
            </div>
            <input  className="btn btn-primary" type="submit"></input>
          </form>
        </div>
      </div>
      </div>

    
  );
}

export default Login;