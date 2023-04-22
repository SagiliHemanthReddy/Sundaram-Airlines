package com.sf.frs.bean;

import jakarta.persistence.*;

@Entity
@Table(name="FRS_TBL_User_Credentials")

public class CredentialsBean {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int userID;
	@Column
	private String password;
	@Column
	private String userType;
	@Column
	private String loginStatus;
	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public String getLoginStatus() {
		return loginStatus;
	}
	public void setLoginStatus(String loginStatus) {
		this.loginStatus = loginStatus;
	}
	
	



}
