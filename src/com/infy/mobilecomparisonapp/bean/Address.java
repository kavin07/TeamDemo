package com.infy.mobilecomparisonapp.bean;

public class Address {
	private Integer addressId;
	private String doorNumber;
	private String street;
	private String city;
	private String state;
	private Integer pinCode;
	
	public Address(){
		super();
	}

	public Address(String doorNumber, String street, String city, String state,
			Integer pinCode) {
		super();
		this.doorNumber = doorNumber;
		this.street = street;
		this.city = city;
		this.state = state;
		this.pinCode = pinCode;
	}

	public Integer getAddressId() {
		return addressId;
	}

	public void setAddressId(Integer addressId) {
		this.addressId = addressId;
	}

	public String getDoorNumber() {
		return doorNumber;
	}

	public void setDoorNumber(String doorNumber) {
		this.doorNumber = doorNumber;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
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

	public Integer getPinCode() {
		return pinCode;
	}

	public void setPinCode(Integer pinCode) {
		this.pinCode = pinCode;
	}

	@Override
	public String toString() {
		return doorNumber + ", " + street + ", " + city + ", " + state + " - "
				+ pinCode;
	}
}
