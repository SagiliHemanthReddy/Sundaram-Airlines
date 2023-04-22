package com.sf.frs.dao;

import java.util.ArrayList;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sf.frs.bean.FlightBean;
import com.sf.frs.bean.RouteBean;
import com.sf.frs.bean.ScheduleBean;


@Repository
public class AdministratorDao {

	@Autowired
	private SessionFactory sessionFactory;
	private Session session;
	private Transaction transaction;
	private Query<FlightBean> fb;
	private Query<ScheduleBean> sb;
	private Query<RouteBean> rb;
	
	//Add Flight
	public String addFlight (FlightBean flightBean) 
	{
		if(flightBean!=null) {
			session=sessionFactory.openSession();
			transaction = session.beginTransaction();
			session.save(flightBean);
			transaction.commit();
			session.close();
			return "SUCESS";
			}
		else if(flightBean==null) {
			return "ERROR";
		}
		else {
			return "FAIL";
		}	
	}
		
	//View Flight By Id
	public FlightBean viewFlightById(int flightId)
	{
		FlightBean flightBean=new FlightBean();
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
	Query<FlightBean> q2=session.createQuery("from FlightBean where flightID=:fid");
	q2.setParameter("fid", flightId);
	ArrayList<FlightBean> all=(ArrayList<FlightBean>) q2.getResultList();
	for(FlightBean e1:all)
	{
		flightBean=e1;
	}
	return flightBean;
	}
	
	//View ALL Flights
	public ArrayList<FlightBean> viewFlights()
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		fb=session.createQuery("from FlightBean");
		return (ArrayList<FlightBean>) fb.list();
	}
	
	
	//Update Flight 
	public String updateFlight(FlightBean flightBean)
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(flightBean!=null)
		{
		session.update(flightBean);
		transaction.commit();
		session.close();
		return "SUCCESS";
		}
		else if(flightBean==null)
		{
			return "FAIL";
		}
		else
		{
			return "ERROR";
		}
	}
	
	//Delete Flight
	public String deleteFlight(int flightId)
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(flightId>=0)
		{
		Query q1=session.createQuery("delete from FlightBean where flightID=:fid");
		q1.setParameter("fid", flightId);
		q1.executeUpdate();
		transaction.commit();
		session.close();
		return "SUCCESS";
		}
		else
		{
			return "FAIL";
		}
	}
	
	//Add Schedule
	public String addSchedule (ScheduleBean scheduleBean) 
	{
		if(scheduleBean!=null) {
			session=sessionFactory.openSession();
			transaction = session.beginTransaction();
			session.save(scheduleBean);
			transaction.commit();
			session.close();
			return "SUCESS";
			}
		else if(scheduleBean==null) {
			return "ERROR";
		}
		else {
			return "FAIL";
		}	
	}
	
	//View Schedule By Id
	public ScheduleBean viewScheduleById(int scheduleId)
	{
		ScheduleBean scheduleBean=new ScheduleBean();
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
	Query<ScheduleBean> q2=session.createQuery("from ScheduleBean where scheduleID=:sid");
	q2.setParameter("sid", scheduleId);
	ArrayList<ScheduleBean> all=(ArrayList<ScheduleBean>) q2.getResultList();
	for(ScheduleBean s1:all)
	{
		scheduleBean=s1;
	}
	return scheduleBean;
	}
	
	//View ALL Schedules
	public ArrayList<ScheduleBean> viewSchedules()
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		sb=session.createQuery("from ScheduleBean");
		return (ArrayList<ScheduleBean>) sb.list();
	}
	
	
	//Update Schedule 
	public String updateSchedule(ScheduleBean scheduleBean)
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(scheduleBean!=null)
		{
		session.update(scheduleBean);
		transaction.commit();
		session.close();
		return "SUCCESS";
		}
		else if(scheduleBean==null)
		{
			return "FAIL";
		}
		else
		{
			return "ERROR";
		}
	}
	
	//Delete Schedule
	public String deleteschedule(int scheduleId)
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(scheduleId>=0)
		{
		Query q1=session.createQuery("delete from ScheduleBean where scheduleID=:sid");
		q1.setParameter("sid", scheduleId);
		q1.executeUpdate();
		transaction.commit();
		session.close();
		return "SUCCESS";
		}
		else
		{
			return "FAIL";
		}
	}
	
	//Add Route
	public String addRoute (RouteBean routeBean) 
	{
		if(routeBean!=null) {
			session=sessionFactory.openSession();
			transaction = session.beginTransaction();
			session.save(routeBean);
			transaction.commit();
			session.close();
			return "SUCESS";
			}
		else if(routeBean==null) {
			return "ERROR";
		}
		else {
			return "FAIL";
		}	
	}
		
	//View Route By Id
	public RouteBean viewRouteById(int routeId)
	{
		RouteBean routeBean=new RouteBean();
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
	Query<RouteBean> q2=session.createQuery("from RouteBean where routeID=:rid");
	q2.setParameter("rid", routeId);
	ArrayList<RouteBean> all=(ArrayList<RouteBean>) q2.getResultList();
	for(RouteBean e1:all)
	{
		routeBean=e1;
	}
	return routeBean;
	}
	
	//View ALL Routes
	public ArrayList<RouteBean> viewRoutes()
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		rb=session.createQuery("from RouteBean");
		return (ArrayList<RouteBean>) rb.list();
	}
	
	
	//Update Route 
	public String updateRoute(RouteBean routeBean)
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(routeBean!=null)
		{
		session.update(routeBean);
		transaction.commit();
		session.close();
		return "SUCCESS";
		}
		else if(routeBean==null)
		{
			return "FAIL";
		}
		else
		{
			return "ERROR";
		}
	}
	
	//Delete Route
	public String deleteRoute(int routeId)
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(routeId>=0)
		{
		Query q1=session.createQuery("delete from RouteBean where routeID=:rid");
		q1.setParameter("rid", routeId);
		q1.executeUpdate();
		transaction.commit();
		session.close();
		return "SUCCESS";
		}
		else
		{
			return "FAIL";
		}
	}
	
}
