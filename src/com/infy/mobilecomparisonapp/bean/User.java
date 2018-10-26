package com.infy.mobilecomparisonapp.bean;

import java.util.Calendar;

/**
 * Bean class to hold the user data
 * 
 * @author ETA
 */

public class User {

	private String userId;
	private String userName;
	private UserRole userRole;
	private String password;
	private String email;
	private String mobileNumber;
	private Calendar dateOfBirth;
	private Address address;
	private Gender gender;
	private UserType userType;
	private Character userStatus;
	// added
	private String choice;
	private String message;
	private Boolean isClicked;

	public String getChoice() {
		return choice;
	}

	public void setChoice(String choice) {
		this.choice = choice;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Boolean getIsClicked() {
		return isClicked;
	}

	public void setIsClicked(Boolean isClicked) {
		this.isClicked = isClicked;
	}

	public Character getUserStatus() {
		return userStatus;
	}

	public void setUserStatus(Character userStatus) {
		this.userStatus = userStatus;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public UserRole getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		switch (userRole.charAt(0)) {
		case 'A':
			this.userRole = UserRole.ADMIN;
			break;
		case 'S':
			this.userRole = UserRole.SUPPLIER;
			break;
		case 'C':
			this.userRole = UserRole.CUSTOMER;
			break;
		}
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public Calendar getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Calendar dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(String gender) {
		switch (gender.charAt(0)) {
		case 'F':
			this.gender = Gender.FEMALE;

			break;

		case 'M':
			this.gender = Gender.MALE;
			break;
		}
	}

	public UserType getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		switch (userType.charAt(0)) {
		case 'G':
			this.userType = UserType.GOLD;
			break;
		case 'S':
			this.userType = UserType.SILVER;
			break;
		case 'P':
			this.userType = UserType.PLATINUM;
			break;
		}
	}

	public void setUserRole(UserRole userRole) {
		this.userRole = userRole;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public void setUserType(UserType userType) {
		this.userType = userType;
	}
}
