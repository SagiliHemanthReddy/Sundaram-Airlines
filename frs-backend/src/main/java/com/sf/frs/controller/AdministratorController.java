 package com.sf.frs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sf.frs.bean.FlightBean;
import com.sf.frs.bean.RouteBean;
import com.sf.frs.bean.ScheduleBean;
import com.sf.frs.service.AdministratorService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/admin")
public class AdministratorController {
	@Autowired
	
	//Add Flight
	private AdministratorService adserv;
	@PostMapping("/addflight")
	public String meth1 (@RequestBody FlightBean fb) {
		adserv.addFlight(fb);
		return "Flight Added Sucessfully";
	}
	
	//View Flight By ID
	@GetMapping("/viewflight/{id}")
	public FlightBean meth2(@PathVariable(value = "id") int flightId)
	{
		return adserv.viewFlightById(flightId);
	}
	
	//View ALL Flights
	@GetMapping("/all/viewflights")
	public List<FlightBean> meth3()
	{	
		return adserv.viewFlights();
	}
	
	//Update Flight
	@PutMapping("/updateflight")
	public String meth4(@RequestBody FlightBean fb)
	{
		adserv.updateFlight(fb);
		return " Flight Updated successfully";
	}
	
	//Delete Flight
	@DeleteMapping("/deleteflight/{id}")
	public String meth5(@PathVariable(value="id") int flightId)
	{
		return "<h1>"+adserv.deleteFlight(flightId)+" record deleted successfully</h1>";
	}
	
	//Add Schedule
	@PostMapping("/addschedule")
	public String meth6 (@RequestBody ScheduleBean sb) {
		adserv.addSchedule(sb);
		return "Schedule Added Sucessfully";
	}
	
	//View Schedule By ID
	@GetMapping("/viewschedule/{id}")
	public ScheduleBean meth7(@PathVariable(value = "id") int scheduleId)
	{
		return adserv.viewScheduleById(scheduleId);
	}
	
	//View ALL Schedules
	@GetMapping("/all/viewschedules")
	public List<ScheduleBean> meth8()
	{	
		return adserv.viewSchedules();
	}
	
	//Update Schedule
	@PutMapping("/updateschedule")
	public String meth9(@RequestBody ScheduleBean sb)
	{
		adserv.updateSchedule(sb);
		return " Schedule Updated successfully";
	}
	
	//Delete Schedule
	@DeleteMapping("/deleteschedule/{id}")
	public String meth10(@PathVariable(value="id") int scheduleId)
	{
		return "<h1>"+adserv.deleteschedule(scheduleId)+" record deleted successfully</h1>";
	}
	
	//Add Route
	@PostMapping("/addRoute")
	public String meth11 (@RequestBody RouteBean rb) {
		adserv.addRoute(rb);
		return "Route Added Sucessfully";
	}
	
	//View Route By ID
	@GetMapping("/viewroute/{id}")
	public RouteBean meth12(@PathVariable(value = "id") int routeId)
	{
		return adserv.viewRouteById(routeId);
	}
	
	//View ALL Routes
	@GetMapping("/all/viewroutes")
	public List<RouteBean> meth13()
	{	
		return adserv.viewRoutes();
	}
	
	//Update Route
	@PutMapping("/updateroute")
	public String meth14(@RequestBody RouteBean rb)
	{
		adserv.updateRoute(rb);
		return " Route Updated successfully";
	}
	
	//Delete Route
	@DeleteMapping("/deleteroute/{id}")
	public String meth15(@PathVariable(value="id") int routeId)
	{
		return "<h1>"+adserv.deleteRoute(routeId)+" record deleted successfully</h1>";
	}

}
