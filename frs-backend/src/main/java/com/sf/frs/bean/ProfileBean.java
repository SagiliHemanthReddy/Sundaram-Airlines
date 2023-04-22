package com.sf.frs.bean;

import jakarta.persistence.*;

@Entity
@Table(name="FRS_TBL_User_Profile")

public class ProfileBean  {
	
	
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name= "userID",referencedColumnName = "userID")
	private CredentialsBean credentialsBean;
		@Column
	private String firstName;
		@Column
	private String lastName;
		@Column
	private String dateOfBirth;
		@Column
	private String gender;
		@Column
	private String street;
		@Column
	private String location;
		@Column
	private String city;	
		@Column
	private String state;
		@Column
	private String pinCode;
		@Id
		@Column
	private String mobileNo;
		@Column
	private String emailID;

		
		
		public CredentialsBean getCredentialsBean() {
			return credentialsBean;
		}
		public void setCredentialsBean(CredentialsBean credentialsBean) {
			this.credentialsBean = credentialsBean;
		}
		public String getFirstName() {
			return firstName;
		}
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		public String getLastName() {
			return lastName;
		}
		public void setLastName(String lastName) {
			this.lastName = lastName;
		}
		public String getDateOfBirth() {
			return dateOfBirth;
		}
		public void setDateOfBirth(String dateOfBirth) {
			this.dateOfBirth = dateOfBirth;
		}
		public String getGender() {
			return gender;
		}
		public void setGender(String gender) {
			this.gender = gender;
		}
		public String getStreet() {
			return street;
		}
		public void setStreet(String street) {
			this.street = street;
		}
		public String getLocation() {
			return location;
		}
		public void setLocation(String location) {
			this.location = location;
		}
		public String getCity() {
			return city;
		}
		public void setCity(String city) {
			this.city = city;
		}
		public String getState() {
			return state;
		}
		public void setState(String state) {
			this.state = state;
		}
		public String getPinCode() {
			return pinCode;
		}
		public void setPinCode(String pinCode) {
			this.pinCode = pinCode;
		}
		public String getMobileNo() {
			return mobileNo;
		}
		public void setMobileNo(String mobileNo) {
			this.mobileNo = mobileNo;
		}
		public String getEmailID() {
			return emailID;
		}
		public void setEmailID(String emailID) {
			this.emailID = emailID;
		}

}
