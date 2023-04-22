package com.sf.frs.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sf.frs.bean.FlightBean;
import com.sf.frs.bean.RouteBean;
import com.sf.frs.bean.ScheduleBean;
import com.sf.frs.dao.AdministratorDao;


@Service
public class AdministratorService {
	@Autowired
	private AdministratorDao adao;
	
	//Add Flight
	public String addFlight(FlightBean flightBean) {
		return adao.addFlight(flightBean);
	}
	
	//View Flight By Id
	public FlightBean viewFlightById(int flightId)
	{
		return adao.viewFlightById(flightId);
	}
	
	//View ALL Flights
	public ArrayList<FlightBean> viewFlights()
	{
		return adao.viewFlights();
	}
	
	//Update Flight
	public String updateFlight(FlightBean flightBean)
	{
		return adao.updateFlight(flightBean);
	}
	
	//Delete Flight
	public String deleteFlight(int flightId)
	{
		return adao.deleteFlight(flightId);
	}
	
	//Add Schedule 
	public String addSchedule(ScheduleBean scheduleBean) {
		return adao.addSchedule(scheduleBean);
	}
	
	//View Schedule By Id
	public ScheduleBean viewScheduleById(int scheduleId)
	{
		return adao.viewScheduleById(scheduleId);
	}
	
	//View ALL Schedules
	public ArrayList<ScheduleBean> viewSchedules()
	{
		return adao.viewSchedules();
	}
	
	//Update Schedule
	public String updateSchedule(ScheduleBean scheduleBean)
	{
		return adao.updateSchedule(scheduleBean);
	}
	
	//Delete Schedule
	public String deleteschedule(int scheduleId)
	{
		return adao.deleteschedule(scheduleId);
	}
	
	//Add Route
	public String addRoute(RouteBean routeBean) {
		return adao.addRoute(routeBean);
	}
	
	//View Route By Id
	public RouteBean viewRouteById(int routeId)
	{
		return adao.viewRouteById(routeId);
	}
	
	//View ALL Routes
	public ArrayList<RouteBean> viewRoutes()
	{
		return adao.viewRoutes();
	}
	
	//Update Route
	public String updateRoute(RouteBean routeBean)
	{
		return adao.updateRoute(routeBean);
	}
	
	//Delete Route
	public String deleteRoute(int routeId)
	{
		return adao.deleteRoute(routeId);
	}

}
