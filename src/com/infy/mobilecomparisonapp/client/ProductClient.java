package com.infy.mobilecomparisonapp.client;



import javax.ws.rs.client.Client;
import javax.ws.rs.client.Entity;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.infy.mobilecomparisonapp.bean.Login;

import com.infy.mobilecomparisonapp.bean.User;

public class ProductClient {
       
       String url="http://gmysfl3-052:8760/InfyRetailApp_V2.0/";
       // Creating a new client to access the target(URI)
       Client client = javax.ws.rs.client.ClientBuilder.newClient();
       
       public User getUserDetails(Login u){
              Response response = client.target(url)
                           .path("api")
                           .path("LoginAPI")
                           .request(MediaType.APPLICATION_JSON)
                           .accept(MediaType.APPLICATION_JSON)
                           .post(Entity.json(u),Response.class);
     

              User m1=new User();

              
              if(response.getStatus()==200){
                     m1=response.readEntity(User.class);
                     
              }
              else{
            	  m1.setMessage(response.readEntity(String.class));
              }
                    
              return m1;
       }
       
       
       
       
}

