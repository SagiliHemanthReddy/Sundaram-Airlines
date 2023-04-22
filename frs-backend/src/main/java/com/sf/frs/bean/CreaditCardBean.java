package com.sf.frs.bean;

import jakarta.persistence.*;

@Entity
@Table(name="FRS_TBL_User_CreditCard")

public class CreaditCardBean {
	
	
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "userID" ,referencedColumnName = "userID")
	private CredentialsBean credentialsBean ;

	@Id
	@Column
private int creditCardNumber;
	@Column
private String validForm;
	@Column
private String validTo;
	@Column
private String creditBalance;
	
	

	public CredentialsBean getCredentialsBean() {
		return credentialsBean;
	}
	public void setCredentialsBean(CredentialsBean credentialsBean) {
		this.credentialsBean = credentialsBean;
	}
	public int getCreditCardNumber() {
		return creditCardNumber;
	}
	public void setCreditCardNumber(int creditCardNumber) {
		this.creditCardNumber = creditCardNumber;
	}
	public String getValidForm() {
		return validForm;
	}
	public void setValidForm(String validForm) {
		this.validForm = validForm;
	}
	public String getValidTo() {
		return validTo;
	}
	public void setValidTo(String validTo) {
		this.validTo = validTo;
	}
	public String getCreditBalance() {
		return creditBalance;
	}
	public void setCreditBalance(String creditBalance) {
		this.creditBalance = creditBalance;
	}


}
