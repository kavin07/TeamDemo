package com.infy.mobilecomparisonapp.business.service;

import java.util.ArrayList;
import java.util.List;



import com.infy.mobilecomparisonapp.bean.Product;
import com.infy.mobilecomparisonapp.client.MobileProductsClient;


public class ProductsServiceImpl {

	public List<Product> getAllProducts() throws Exception{
		MobileProductsClient client= new MobileProductsClient();
		List<Product> l= client.getDetails();
		List<Product> mobile=new ArrayList<>();
		
	
			for(Product p:l)
			{		
				if(p.getCategory().equals("MOBILE"))
				{			
					mobile.add(p);
				}
			}
			if(mobile.isEmpty())
				throw new Exception("Service.FETCH_FAILED");
			else{
				
				return mobile;}
		
	}	
}
