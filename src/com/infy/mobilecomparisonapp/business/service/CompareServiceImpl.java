package com.infy.mobilecomparisonapp.business.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.infy.mobilecomparisonapp.bean.Product;
import com.infy.mobilecomparisonapp.client.CompareClient;


public class CompareServiceImpl
{
	public List<String> getMobileList()
	{
		CompareClient compcli=new CompareClient();
		List<Product> ret=compcli.getListOfPhones();
		List<String> nameList=new ArrayList<String>();
		if(ret!=null)
		{
			for(Product index : ret)
			{
				String name=index.getName();
				nameList.add(name);
			}
			return nameList;
		}
		return null;
	}
	
	public Product getYourProductHere(String productName)
	{
		CompareClient compcli=new CompareClient();
		
		List<Product> allProduct=compcli.getListOfPhones();
		
		for(Product index:allProduct)
		{
			if(index.getName().equalsIgnoreCase(productName))
			{
				return index;
			}
		}
		
		return null;
	}
	
	public String getComparisonDetails(String toCompare)
	{
		String finalMessage="";
		try
		{
		
//		String newLine = System.getProperty("line.separator");
		String splitarr[]=toCompare.split(":");
		
		Map<String,Double> priceList=new LinkedHashMap<String,Double>();
		Map<String,Float> discountList=new LinkedHashMap<String,Float>();
		Map<String,Integer> romList=new LinkedHashMap<String,Integer>();
		Map<String,Integer> batList=new LinkedHashMap<String,Integer>();
		Map<String,Integer> camList=new LinkedHashMap<String,Integer>();
		
		List<String> selectedList=new ArrayList<String>();
		for(String i:splitarr)//repetition 
		{
			selectedList.add(i);
			Product index=null;
			index=this.getYourProductHere(i);
			priceList.put(index.getName(),index.getSellingPrice());		// putting into map of selling price
			discountList.put(index.getName(),index.getDiscount());		// putting into map of discount
			String spec=index.getSpecification();
			String specarr[]=spec.split(",");
			for(String j:specarr)
			{
				String aaa[]=j.split(";");
				for(int k=0;k<4;k++)
				{
					String singlespec;
					singlespec=aaa[k];
					String newarr[]=singlespec.split(":");
					for(int r=0;r<newarr.length;r++)
					{
						
						if(k==1)
						{
							String qwer=newarr[1];
							String bnmarr[]=qwer.split(" ");
							romList.put(index.getName(),Integer.parseInt(bnmarr[0].trim()));
						}
						
						if(k==2)
						{
//							String qwer=newarr[1];
							batList.put(index.getName(),Integer.parseInt(newarr[1].trim()));
						}
						if(k==3)
						{
//							String qwer=newarr[1];
							camList.put(index.getName(),Integer.parseInt(newarr[1].trim()));
						}
					}
				}
			}
			
		}
		
		
		//
		Map<String,Double> pointsList=new HashMap<String,Double>();
		
		
		for(String inc:selectedList)
		{
			pointsList.put(inc,0.0);
		}
		
		
		
		/*System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
		System.out.println("======================================================================================");
		System.out.println("Prices List is >>>  "+priceList);*/
		//System.out.println("Its Values are >>> "+priceList.values());
		Collection<Double> priList=priceList.values();
		Double minprice=Collections.min(priList);
		//System.out.println("The minimum price is >>> "+minprice);
		//System.out.println("Its keySet is >>> "+priceList.keySet());
		//------------------------
		Set<String> prikeylist=priceList.keySet();
		for(String index:prikeylist)
		{
			if(priceList.get(index).equals(minprice))
			{
				Double newval=pointsList.get(index);		//Add 0.3 pts
				newval+=0.3;
				pointsList.put(index,newval);
				//System.out.println(index+" has minimum price with "+priceList.get(index)+"/-. So given 0.3 Points"+newLine);
				//finalMessage+=index+" has minimum price with "+priceList.get(index)+"/-. So given 0.3 Points"+newLine+"$ ";
			}
		}
		/*System.out.println("||||||||");
		System.out.println("Points List as of now is >>> "+pointsList);
		System.out.println("||||||||");
		System.out.println("======================================================================================");
		System.out.println("Discounts List is"+discountList);*/
		//System.out.println("Its Values are >>> "+discountList.values());
		Collection<Float> disList=discountList.values();
		Float maxdis=Collections.max(disList);
		//System.out.println("The maximum discount is >>> "+maxdis);
		//System.out.println("Its keySet is >>> "+discountList.keySet());
		//--------------------------
		Set<String> diskeylist=discountList.keySet();
		for(String index:diskeylist)
		{
			if(discountList.get(index).equals(maxdis))
			{
				Double newval=(double) pointsList.get(index);		//Add 0.2 pts
				newval+=0.2;
				pointsList.put(index,newval);
				//System.out.println(index+" has maximum discount with "+discountList.get(index)+". So given 0.2 Points"+newLine);
				//finalMessage+=index+" has maximum discount with "+discountList.get(index)+". So given 0.3 Points"+newLine+"$ ";
			}
		}
		/*System.out.println("||||||||");
		System.out.println("Points List as of now is >>> "+pointsList);
		System.out.println("||||||||");
		System.out.println("======================================================================================");
		System.out.println("ROM List is"+romList);*/
		//System.out.println("Its Values are >>> "+romList.values());
		Collection<Integer> readList=romList.values();
		Integer maxrom=Collections.max(readList);
		//System.out.println("The maximum ROM is >>> "+maxrom);
		//System.out.println("Its keySet is >>> "+romList.keySet());
		//--------------------------
		Set<String> romkeylist=romList.keySet();
		for(String index:romkeylist)
		{
			if(romList.get(index).equals(maxrom))
			{
				Double newval=(double) pointsList.get(index);		//Add 0.2 pts
				newval+=0.2;
				pointsList.put(index,newval);
				//finalMessage+=index+" has maximum ROM with "+romList.get(index)+". So given 0.2 Points"+newLine+"$ ";
				//System.out.println(index+" has maximum ROM with "+romList.get(index)+". So given 0.2 Points"+newLine);
			}
		}
		/*System.out.println("||||||||");
		System.out.println("Points List as of now is >>> "+pointsList);
		System.out.println("||||||||");
		System.out.println("======================================================================================");
		System.out.println("Battery List is"+batList);*/
		//System.out.println("Its Values are >>> "+batList.values());
		Collection<Integer> batteryList=batList.values();
		Integer maxbat=Collections.max(batteryList);
		//System.out.println("The maximum Battery is >>> "+maxbat);
		//System.out.println("Its keySet is >>> "+batList.keySet());
		//--------------------------
		Set<String> batkeylist=batList.keySet();
		for(String index:batkeylist)
		{
			if(batList.get(index).equals(maxbat))
			{
				Double newval= pointsList.get(index);		//Add 0.1 pts
				newval+=0.1;
				pointsList.put(index,newval);
				//finalMessage+=index+" has maximum Battery with "+batList.get(index)+"Mah. So given 0.2 Points"+newLine+"$ ";
				//System.out.println(index+" has maximum Battery with "+batList.get(index)+"Mah. So given 0.1 Points"+newLine);
			}
		}
		/*System.out.println("||||||||");
		System.out.println("Points List as of now is >>> "+pointsList);
		System.out.println("||||||||");
		System.out.println("======================================================================================");
		System.out.println("Camera List is"+camList);
		System.out.println("Its Values are >>> "+camList.values());*/
		Collection<Integer> cameraList=camList.values();
		Integer maxcam=Collections.max(cameraList);
		//System.out.println("The maximum Camera is >>> "+maxcam);
		//System.out.println("Its keySet is >>> "+camList.keySet());
		//--------------------------
		Set<String> camkeylist=camList.keySet();
		for(String index:camkeylist)
		{
			if(camList.get(index).equals(maxcam))
			{
				Double newval=(double) pointsList.get(index);		//Add 0.2 pts
				newval+=0.2;
				pointsList.put(index,newval);
				//finalMessage+=index+" has maximum Camera with "+camList.get(index)+"MP. So given 0.2 Points"+newLine+"$ ";
				//System.out.println(index+" has maximum Camera with "+camList.get(index)+"MP. So given 0.2 Points"+newLine);
			}
		}
		/*System.out.println("||||||||");
		System.out.println("Points List as of now is >>> "+pointsList);
		System.out.println("||||||||");
		System.out.println("======================================================================================");
		System.out.println();
		System.out.println();
		System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
		
		
		System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
		System.out.println("Points List is"+pointsList);
		*/
		//System.out.println("Its Values are >>> "+pointsList.values());
		Collection<Double> poilist=pointsList.values();
		Double maxpoi=Collections.max(poilist);
		//System.out.println("The maximum Points is >>> "+maxpoi);
		//System.out.println("Its keySet is >>> "+pointsList.keySet());
		//--------------------------
		Set<String> poikeylist=pointsList.keySet();
		int flag=0;
		for(String index:poikeylist)
		{
			if(pointsList.get(index).equals(maxpoi))
			{
				//finalMessage+=index+" has maximum Points with "+pointsList.get(index)+newLine;
				if(flag==0)
				{
					Double c =pointsList.get(index)*100;
					Double ret=Math.round(c * 100D) / 100D;
					finalMessage+=index+" is the Best mobile phone which has rating of "+ret+" %";
					flag=1;
				}
				else
				{
					finalMessage+=" and "+index+" is also best which has the same rating";
				}
			}
		}
		
		}
		catch(Exception e)
		{
			throw e;
		}
		return finalMessage;
	}
	

	
	
}
