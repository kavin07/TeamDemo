package com.infy.mobilecomparisonapp.client;

import java.util.List;


import javax.ws.rs.client.Client;

import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.infy.mobilecomparisonapp.bean.Product;



public class CompareClient {

	static String url="http://gmysfl3-052:8760/InfyRetailApp_V2.0/";
	static Client client = javax.ws.rs.client.ClientBuilder.newClient();
	
	
	public List<Product> getListOfPhones() 
	{
		Response response =  client.target(url)
				.path("api")
				.path("ProductAPI/productByCategory/MOBILE")
				.request()
				.accept(MediaType.APPLICATION_JSON)
				.get();
		
		GenericType<List<Product>> result = new GenericType<List<Product>>(){};
		if(response.getStatus()==200)
		{
			List<Product> lista=response.readEntity(result);
			return lista;
		}
		else
		{
			return null;
		
		}
	}
	
	public Product getPhone() 
	{
		Response response =  client.target(url)
				.path("api")
				.path("ProductAPI/productDetailsById")
				.request()
				.accept(MediaType.APPLICATION_JSON)
				.get();
		
//		GenericType<List<Product>> result = new GenericType<List<Product>>(){};
		if(response.getStatus()==200)
		{
			Product ret=response.readEntity(Product.class);
			return ret;
		}
		else
		{
			return null;
		
		}
	}
	
	
}
