app.controller("ViewController", function($scope,$http, $cookies) {
	
	
	var mobiles=[];
	
	 $scope.getAllMobiles = function(){
		 	//console.log("lango");
		 	$http.get(URI + "ProductsAPI").then(
		 			function(response){
//		 				console.log("qwerty");
		 				$scope.allMobilesList=response.data;
		 				
		 				mobiles=response.data;
		 				
		 				
//		 				alert(mobiles);
		 				
		 				
		 				
		 
			 				});
		 					
		 				}
	
		 			
	 
	 
	 $scope.costFilter = function(amount1){
		 
	
//		 console.log(amount1);
		 
		 
		 var amount = parseInt(amount1);
		 
		 //console.log(amount);
		 
	
		 
		 
		 
	        $scope.listToFilter = mobiles;
	        $scope.priceFilterList = [];

//	        alert(amount);
//	        alert(amount-1000);
//	        alert($scope.listToFilter[0].sellingPrice)
	        
	        for(var i=0;i<$scope.listToFilter.length;i++){
	        	
	               if(($scope.listToFilter[i].sellingPrice>=amount-1000) && ($scope.listToFilter[i].sellingPrice<=amount+1000)){
	                      $scope.priceFilterList.push($scope.listToFilter[i]);
	               }
	               
	               
	        }
	        
	        
	    }
	 $scope.logout= function(){
		 	var Backlen=history.length;   
		 	history.go(-Backlen);   
		 	
			window.location="../Login.html"
	};
	 
	 
		 			
		 			
	 
	
});