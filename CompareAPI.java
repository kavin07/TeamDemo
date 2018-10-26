package com.infy.mobilecomparisonapp.api;

import java.util.List;


import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.infy.mobilecomparisonapp.bean.Message;
import com.infy.mobilecomparisonapp.bean.Product;
import com.infy.mobilecomparisonapp.business.service.CompareServiceImpl;
import com.infy.mobilecomparisonapp.resources.AppConfig;
import com.infy.mobilecomparisonapp.resources.JSONParser;

@Path("Compare")
public class CompareAPI {
	
	@Path("getMobiles")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMobiles() throws Exception{
		
		String returnValue = null;
		Response response = null;
		try {
			CompareServiceImpl compServ = new CompareServiceImpl();
			
			
			List<String> phoneList=compServ.getMobileList();
			
			returnValue = JSONParser.toJson(phoneList);

			response = Response.status(Status.OK).entity(returnValue).build();
			
		} 
		catch (Exception e) {
			String errorMessage = AppConfig.PROPERTIES.getProperty(e.getMessage());
			
			Product p=new Product();
			p.setMessage(errorMessage);
			
			String returnString = JSONParser.toJson(p);

			response = Response.status(Status.SERVICE_UNAVAILABLE)
					.entity(returnString).build();
		}
		return response;
	}
	
	@Path("getDetails/{name}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getDetails(@PathParam("name") String name) throws Exception{
		
		String returnValue = null;
		Response response = null;
		try {
			
			CompareServiceImpl compServ = new CompareServiceImpl();
			Product ret=compServ.getYourProductHere(name);
			ret.setMessage("success");
			returnValue = JSONParser.toJson(ret);
			response = Response.status(Status.OK).entity(returnValue).build();
						
		} 
		catch (Exception e) {
			String errorMessage = AppConfig.PROPERTIES.getProperty(e.getMessage());
			
			Product p=new Product();
			p.setMessage(errorMessage);
			
			String returnString = JSONParser.toJson(p);
			response = Response.status(Status.SERVICE_UNAVAILABLE)
					.entity(returnString).build();
		}
		
		return response;
	}
	

	
	@Path("getCompa")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
    public Response getCompDetails(String dataRecieved) throws Exception{
		
		String returnValue = null;
		Response response = null;
		try 
		{
			CompareServiceImpl compServ = new CompareServiceImpl();
			
			Message m = JSONParser.fromJson(dataRecieved,Message.class);
	           
			String ret=compServ.getComparisonDetails(m.getMessage());
			
			Message m1=new Message();
			m1.setMessage(ret);
			
			
			//System.out.println(m1.getMessage());
			
			returnValue =JSONParser.toJson(m1);
			//System.out.println("return>>> "+returnValue);
			response = Response.status(Status.OK).entity(returnValue).build();
			//System.out.println(response);
		}
		catch (Exception e) 
		{
			
			String errorMessage = AppConfig.PROPERTIES.getProperty(e.getMessage());
			
			Message p=new Message();
			p.setMessage(errorMessage);
			
			String returnString = JSONParser.toJson(p);

			response = Response.status(Status.SERVICE_UNAVAILABLE)
					.entity(returnString).build();
		
		}
		
		return response;
	}

	
	
	
	
	
}
