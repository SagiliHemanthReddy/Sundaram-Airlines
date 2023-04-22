package com.sf.frs.bean;

import jakarta.persistence.*;

@Entity
@Table(name="FRS_TBL_Schedule")

public class ScheduleBean {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)


private int scheduleID;
	
	
/*	@Column
*private String flightID;
	@Column
private String routeID;*/
	@ManyToOne
	@JoinColumn(name= "flightID",referencedColumnName = "flightID")
	private FlightBean flightBean;
	
	
	//@ManyToOne(cascade = CascadeType.ALL)
	@ManyToOne
	@JoinColumn(name= "routeID",referencedColumnName = "routeID")
	private RouteBean routeBean;
	
	@Column
	private String travelDuration;
	@Column
	private String availableDays;
	@Column
	private String departureTime;
	
	public  int getScheduleID() {
		return scheduleID;
	}
	public void setScheduleID(int scheduleID) {
		this.scheduleID = scheduleID;
	}
	public FlightBean getFlightBean() {
		return flightBean;
	}
	public void setFlightBean(FlightBean flightBean) {
		this.flightBean = flightBean;
	}
	public RouteBean getRouteBean() {
		return routeBean;
	}
	public void setRouteBean(RouteBean routeBean) {
		this.routeBean = routeBean;
	}
	public String getTravelDuration() {
		return travelDuration;
	}
	public void setTravelDuration(String travelDuration) {
		this.travelDuration = travelDuration;
	}
	public String getAvailableDays() {
		return availableDays;
	}
	public void setAvailableDays(String availableDays) {
		this.availableDays = availableDays;
	}
	public String getDepartureTime() {
		return departureTime;
	}
	public void setDepartureTime(String departureTime) {
		this.departureTime = departureTime;
	}



}
