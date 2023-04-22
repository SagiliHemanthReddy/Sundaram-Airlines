package com.sf.frs.bean;

import jakarta.persistence.*;

@Entity
@Table(name="FRS_TBL_FLIGHT")

public class FlightBean {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
private int flightID;
	@Column
private String flightName;
	@Column
private String seatingCapacity;
	@Column
private String reservationCapacity;
	public int getFlightID() {
		return flightID;
	}
	public void setFlightID(int flightID) {
		this.flightID = flightID;
	}
	public String getFlightName() {
		return flightName;
	}
	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}
	public String getSeatingCapacity() {
		return seatingCapacity;
	}
	public void setSeatingCapacity(String seatingCapacity) {
		this.seatingCapacity = seatingCapacity;
	}
	public String getReservationCapacity() {
		return reservationCapacity;
	}
	public void setReservationCapacity(String reservationCapacity) {
		this.reservationCapacity = reservationCapacity;
	}
	
	@Override
	public String toString() {
		return "FlightBean [flightID=" + flightID + ", flightName=" + flightName + ", seatingCapacity="
				+ seatingCapacity + ", reservationCapacity=" + reservationCapacity + "]";
	}


}
