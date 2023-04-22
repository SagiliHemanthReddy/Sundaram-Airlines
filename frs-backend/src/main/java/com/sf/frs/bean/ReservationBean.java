package com.sf.frs.bean;

import jakarta.persistence.*;

@Entity
@Table(name="FRS_TBL_Reservation")

public class ReservationBean {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column

private int reservationID;
	/*@Column
private int userID;
	@Column
private String scheduleID;*/
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name= "userID",referencedColumnName = "userID")
	private CredentialsBean credentialsBean;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name= "scheduleID",referencedColumnName = "scheduleID")
	private ScheduleBean scheduleBean;
	
	@Column
private String reservationType;
	@Column
private String bookingDate;
	@Column
private String journeyDate;
	@Column
private String noOfSeats;
	@Column
private String totalFare;
	@Column
private String bookingstatus;
	public int getReservationID() {
		return reservationID;
	}
	public void setReservationID(int reservationID) {
		this.reservationID = reservationID;
	}
	public CredentialsBean getCredentialsBean() {
		return credentialsBean;
	}
	public void setCredentialsBean(CredentialsBean credentialsBean) {
		this.credentialsBean = credentialsBean;
	}
	public ScheduleBean getScheduleBean() {
		return scheduleBean;
	}
	public void setScheduleBean(ScheduleBean scheduleBean) {
		this.scheduleBean = scheduleBean;
	}
	public String getReservationType() {
		return reservationType;
	}
	public void setReservationType(String reservationType) {
		this.reservationType = reservationType;
	}
	public String getBookingDate() {
		return bookingDate;
	}
	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}
	public String getJourneyDate() {
		return journeyDate;
	}
	public void setJourneyDate(String journeyDate) {
		this.journeyDate = journeyDate;
	}
	public String getNoOfSeats() {
		return noOfSeats;
	}
	public void setNoOfSeats(String noOfSeats) {
		this.noOfSeats = noOfSeats;
	}
	public String getTotalFare() {
		return totalFare;
	}
	public void setTotalFare(String totalFare) {
		this.totalFare = totalFare;
	}
	public String getBookingstatus() {
		return bookingstatus;
	}
	public void setBookingstatus(String bookingstatus) {
		this.bookingstatus = bookingstatus;
	}

}
