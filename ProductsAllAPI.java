package com.infy.mobilecomparisonapp.api;

import java.util.List;

import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.infy.mobilecomparisonapp.bean.MessageBean;
import com.infy.mobilecomparisonapp.bean.Product;
import com.infy.mobilecomparisonapp.business.service.ProductsServiceImpl;
import com.infy.mobilecomparisonapp.resources.AppConfig;
import com.infy.mobilecomparisonapp.resources.JSONParser;

@Path("ProductsAPI")
public class ProductsAllAPI {


		@GET
		@Produces(MediaType.APPLICATION_JSON)
		public Response getProductDetails(String dataRecieved) throws Exception {
			String returnValue=null;
	        Response response = null;
	        try {
	        	  
	               ProductsServiceImpl productService=new ProductsServiceImpl();
	               List<Product> products=productService.getAllProducts();
	               
	               returnValue=JSONParser.toJson(products);
	        	   response = Response.status(Status.OK).entity(returnValue).build();
	               
	        } catch (Exception e) {
	           MessageBean beanForMessage = new MessageBean();
	            beanForMessage.setMessage(AppConfig.PROPERTIES.getProperty(e.getMessage()));
	            String returnString = JSONParser.toJson(beanForMessage);
		           if (e.getMessage().contains("DAO")) {
		        	   response = Response.status(Status.SERVICE_UNAVAILABLE).entity(returnString).build();
		           }
		           else {
		        	   response = Response.status(Status.BAD_REQUEST).entity(returnString).build();
		           }
	        }
	        
	        return response;
	 
	
}
		
		}
