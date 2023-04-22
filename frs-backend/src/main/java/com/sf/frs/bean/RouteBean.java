package com.sf.frs.bean;

import jakarta.persistence.*;

@Entity
@Table(name="FRS_TBL_Route")


public class RouteBean {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	

private int routeID;
	@Column
private String source;
	@Column
private String destination;
	@Column
private String distance;
	@Column
private String fare;
	public int getRouteID() {
		return routeID;
	}
	public void setRouteID(int routeID) {
		this.routeID = routeID;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getDistance() {
		return distance;
	}
	public void setDistance(String distance) {
		this.distance = distance;
	}
	public String getFare() {
		return fare;
	}
	public void setFare(String fare) {
		this.fare = fare;
	}
	
	
}
