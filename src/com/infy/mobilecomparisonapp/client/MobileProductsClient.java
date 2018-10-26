package com.infy.mobilecomparisonapp.client;


import java.util.List;

import javax.ws.rs.client.Client;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.infy.mobilecomparisonapp.bean.Product;


public class MobileProductsClient {
	String url = "http://gmysfl3-052:8760/InfyRetailApp_V2.0/";
	// Creating a new client to access the target(URI)
	Client client = javax.ws.rs.client.ClientBuilder.newClient();

	public List<Product> getDetails() throws Exception {
		Response response = client.target(url)
				.path("api")
				.path("ProductAPI/allProductsList")
				.request()
				.accept(MediaType.APPLICATION_JSON)
				.get();

		//System.out.println(response);

		List<Product> l1 =null;
		GenericType<List<Product>> pd=new GenericType<List<Product>>(){};
		//System.out.println(response.getEntity());
		if (response.getStatus() == 200) {
			
			l1 = response.readEntity(pd);
		} else {
			
			throw new Exception("NO_MOBILES");
		}
		//System.out.println(l1);
		return l1;

	}
}
