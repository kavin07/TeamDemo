package com.infy.mobilecomparisonapp.api;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.infy.mobilecomparisonapp.bean.Login;
import com.infy.mobilecomparisonapp.bean.MessageBean;
import com.infy.mobilecomparisonapp.bean.User;
import com.infy.mobilecomparisonapp.business.service.MobileService;

import com.infy.mobilecomparisonapp.resources.AppConfig;
import com.infy.mobilecomparisonapp.resources.JSONParser;


@Path("LoginChecking")
public class NewMobileAPI {
	@POST
	@Path("Login")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getUserDetails(String dataRecieved) throws Exception {
		Response response = null;

		Login login= JSONParser.fromJson(dataRecieved, Login.class);
		try {
			MobileService mobile=new MobileService();
			User returnValue = mobile.getUserDetails(login);
			if(returnValue.getMessage()==null){
				String returnString = JSONParser.toJson(returnValue);
				response = Response.status(Status.OK)
						.entity(returnString).build();
			}
			else{
				String returnString = returnValue.getMessage();
				response = Response.status(Status.SERVICE_UNAVAILABLE)
						.entity(returnString).build();
			}
		} catch (Exception e) {
			MessageBean beanForMessage = new MessageBean();
			beanForMessage.setMessage(AppConfig.PROPERTIES.getProperty(e
					.getMessage()));
			String returnString = JSONParser.toJson(beanForMessage);
			if (e.getMessage().contains("DAO")) {
				response = Response.status(Status.SERVICE_UNAVAILABLE)
						.entity(returnString).build();
			} else {
				response = Response.status(Status.BAD_REQUEST)
						.entity(returnString).build();
			}
		}
		return response;
	}

}