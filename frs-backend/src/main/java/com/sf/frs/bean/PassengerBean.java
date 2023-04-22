package com.sf.frs.bean;

import jakarta.persistence.*;

@Entity
@Table(name="FRS_TBL_Passenger")

public class PassengerBean {
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int seatNo;
	
	/*@Column
	private int reservationID;*/
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name= "reservationID",referencedColumnName = "reservationID")
	private ReservationBean reservationBean;
	
	@Column
	private String name;
	@Column
	private String gender;
	@Column
	private String age;


	
	public ReservationBean getReservationBean() {
		return reservationBean;
	}
	public void setReservationBean(ReservationBean reservationBean) {
		this.reservationBean = reservationBean;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public int getSeatNo() {
		return seatNo;
	}
	public void setSeatNo(int seatNo) {
		this.seatNo = seatNo;
	}

}
