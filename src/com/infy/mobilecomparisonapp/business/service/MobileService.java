package com.infy.mobilecomparisonapp.business.service;




import com.infy.mobilecomparisonapp.bean.Login;
import com.infy.mobilecomparisonapp.bean.User;
import com.infy.mobilecomparisonapp.client.ProductClient;

public class MobileService {
	public User getUserDetails(Login u) throws Exception{
		
		//System.out.println(u.getuserName + password);
		
		ProductClient pc=new ProductClient();
		User m=pc.getUserDetails(u);
		
		

  return m;
        

	}
	
	
 }

	
	
	
	
	

