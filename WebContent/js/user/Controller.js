

app.controller("LoginController", function($scope,$http, $cookies) {
	$scope.loginForm = {};
	$scope.user={};
	
	$scope.loginForm.submitTheForm = function() {
//		console.log($scope.loginForm.userName);
		
		var data = angular.toJson($scope.loginForm);
		
		$scope.loginForm.message = null;
		
//		alert(data);
		 $http.post(URI +"LoginChecking/Login",data).then(function(response) {
			 $cookies.put("name",
						response.data.userName);
			 $scope.username = $cookies.get('name');
	         //console.log($scope.username);
	        // console.log(response.data.userId[0]);
//         	console.log("hok");
         	//alert( $cookies.get('name'));
         	if(response.data.userId[0]=='C')
         		{window.location="partials/Homepage.html";}
         	else{
         		window.location="partials/Error.html";
         	}
//         	console.log($scope.loginForm.message);
         }, function(response) {
//         	 console.log("hnot");
             $scope.loginForm.message = response.data.message;
  
         	//console.log($scope.loginForm.message)
         });
		

	}
	
	$scope.reset = function(){
		
		$scope.loginForm.message=" ";
		
	}
	
	


 });




var uniqueItems = function (data, key) {
    var result = new Array();
   // console.log(data);
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
       // console.log(value);
 
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    
    }
    return result;
};



var uniqueItems1 = function (data, key) {
    
	//console.log(key);
	//console
	 
	var result = new Array();
 //  console.log(data.length);
    
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
        
        var funcc=value.split(';');
        //console.log(funcc[1]);
        var qwe=funcc[1].split(":");
        //console.log(qwe[1]);
        
        
        if (result.indexOf(qwe[1]) == -1) {
            result.push(qwe[1]);
        }
    
    }
    return result;
};








var mobiles=[];
var dupliMobilesList=[];
var dupliMobilesList2=[];
app.controller("HomeController", function($scope,$http, $cookies) {
	 $scope.username = $cookies.get('name');
	
	 
	 $scope.logout= function(){
		 	var Backlen=history.length;   
		 	history.go(-Backlen);   
		 	
			window.location="../Login.html"
		}
	 
	 

		 $scope.allMobilesList = [];
		 $scope.ascendingList=[];
		 $scope.descendingList=[];
		// $scope.mobiles=[];
		 
		 $scope.getAllMobiles = function(){
//		 	console.log("lango");
		 	$http.get(URI + "ProductsAPI").then(
		 			function(response){
//		 				console.log("qwert");
		 				$scope.allMobilesList=response.data;
		 				
		 				mobiles=response.data;
		 				
		 				
		 				//console.log($scope.ascendingList);
		 				
		 			  /* $scope.players = [
		 			                    {name: 'Apple6s', brand: 'Apple', cost: '70000', ROM: '64GB'},
		 			                   {name: 'Motorola2', brand: 'Motorola', cost: '70000', ROM: '32GB'},
		 			                   {name: 'HTC4', brand: 'HTC', cost: '15000', ROM: '128GB'},
		 			                   {name: 'Redmi5', brand: 'Redmi', cost: '18000', ROM: '256GB'},
		 			                   
		 			               ]; 
		 				
		 			   
		 			  $scope.players1 = [
		 			                    {name: 'Apple6s', brand: 'Apple', cost: '70000', ROM: '64GB'},
		 			                   {name: 'Motorola2', brand: 'Motorola', cost: '70000', ROM: '32GB'},
		 			                   {name: 'HTC4', brand: 'HTC', cost: '15000', ROM: '128GB'},
		 			                   {name: 'Redmi5', brand: 'Redmi', cost: '18000', ROM: '256GB'},
		 			                   
		 			               ]; 
		 			  	alert("going");*/
		 			 	
		 				
		 				$scope.ascending=function(){
		 					
		 					$scope.filteredPlayers.sort(function(a, b) {
			 					
			 				    return a.sellingPrice - b.sellingPrice;
			 				});
		 					
		 				}
		 				
		 				
		 					$scope.descending=function(){
		 					
		 					$scope.filteredPlayers.sort(function(a, b) {
			 					
			 				    return a.sellingPrice - b.sellingPrice;
			 				});
		 					
		 				}
		 				
		 				
		 				$scope.filteredPlayers.sort(function(c, d) {
		 					//console.log("qwe");
		 				    return d.sellingPrice - c.sellingPrice;
		 				});
		 				
		 				
		 				/*$scope.filteredPlayers.sort(function(a, b) {
		 					//console.log("qwe");
		 				    return a.sellingPrice - b.sellingPrice;
		 				});*/
		 				
		 				
		 				
		 				//console.log($scope.ascendingList);
		 				
		 			}, 
		 			function(response) {

//		 				console.log("here");
		 				//$scope.loginForm.message = response.data.message;
		 				
		 				
		 				
		 				 $scope.players = [{"brand":"Apple","category":"MOBILE","cost":52599,"discount":10,"name":"IPHONE 6","productId":1000,"quantity":5,"sellingPrice":54599,"specification":"Color:Space Gray; ROM:64 GB; Battery:1810; Primary Camera:8","supplier":{"userId":"S101"}},{"brand":"Microsoft","category":"MOBILE","cost":15000,"discount":8,"name":"Microsoft Lumia 640 XL LTE","productId":1001,"quantity":7,"sellingPrice":16762,"specification":"Color:Cyan; ROM:8 GB; Battery:3000; Primary Camera:13; OS:Windows v8.1","supplier":{"userId":"S101"}},{"brand":"Microsoft","category":"MOBILE","cost":3500,"discount":8,"name":"Microsoft Lumia 430","productId":1004,"quantity":5,"sellingPrice":4890,"specification":"Color:Black; ROM:8 GB; Battery:1500; Primary Camera:2; OS:Windows v8.1","supplier":{"userId":"S101"}},{"brand":"Apple","category":"MOBILE","cost":80000,"discount":9,"name":"IPHONE 6S PLUS","productId":1005,"quantity":5,"sellingPrice":85000,"specification":"Color:Gold; ROM:128 GB; Battery:2750; Primary Camera:12; OS:iOS 9","supplier":{"userId":"S101"}},{"brand":"HTC","category":"MOBILE","cost":7000,"discount":7.5,"name":"HTC Desire 526G Plus","productId":1006,"quantity":5,"sellingPrice":7999,"specification":"Color:Glossy Black; ROM:16 GB; Battery:2000; Primary Camera:8; OS:Android v4.4.8 KitKat ","supplier":{"userId":"S102"}},{"brand":"HTC","category":"MOBILE","cost":16000,"discount":8,"name":"HTC Desire 820S","productId":1007,"quantity":5,"sellingPrice":17699,"specification":"Color:Santorini White; ROM:16 GB; Battery:2600; Primary Camera:13; OS:Android v4.4.4 KitKat","supplier":{"userId":"S102"}},{"brand":"Samsung","category":"MOBILE","cost":9500,"discount":8,"name":"Samsung Galaxy On7","productId":1008,"quantity":5,"sellingPrice":10990,"specification":"Color:Gold; ROM:8 GB; Battery:3000 ; Primary Camera:13; OS:Android v5.1 Lollipop","supplier":{"userId":"S102"}},{"brand":"Samsung","category":"MOBILE","cost":20000,"discount":9.5,"name":"Samsung Galaxy Note 3","productId":1009,"quantity":8,"sellingPrice":21999,"specification":"Color:Jet Black; ROM:32 GB; Battery:3200; Primary Camera:13; OS:Android v4.3 Jelly Bean","supplier":{"userId":"S102"}},{"brand":"Lenovo","category":"MOBILE","cost":9000,"discount":6.5,"name":"Lenovo K3 Note","productId":1010,"quantity":12,"sellingPrice":9999,"specification":"Color:Black; ROM:16 GB; Battery:3000; Primary Camera:13; OS:Android v5 Lollipop","supplier":{"userId":"S102"}},{"brand":"Lenovo","category":"MOBILE","cost":4300,"discount":9.5,"name":"Lenovo A2010","productId":1011,"quantity":8,"sellingPrice":4990,"specification":"Color:White; ROM:8 GB; Battery:2000; Primary Camera:5; OS:Android v5.1 Lollipop","supplier":{"userId":"S102"}},{"brand":"Lenovo","category":"MOBILE","cost":5300,"discount":9.5,"name":"Lenovo A2011","productId":1012,"quantity":8,"sellingPrice":5990,"specification":"Color:Black; ROM:8 GB; Battery:2500; Primary Camera:8; OS:Android v5.1 Lollipop","supplier":{"userId":"S102"}},{"brand":"Motorola","category":"MOBILE","cost":10999,"discount":5,"name":"Moto G 3rd generation","productId":1013,"quantity":6,"sellingPrice":11499,"specification":"Color:Black; ROM:32 GB; Battery:2470; Primary Camera:13; OS:Android v5.1.1 Lollipop","supplier":{"userId":"S101"}},{"brand":"Motorola","category":"MOBILE","cost":8252,"discount":10,"name":"Moto G 2nd generation","productId":1014,"quantity":8,"sellingPrice":9999,"specification":"Color:White; ROM:16 GB; Battery:2070; Primary Camera:8; OS:Android v38081 Kitkat","supplier":{"userId":"S102"}},{"brand":"Motorola","category":"MOBILE","cost":31999,"discount":6,"name":"Moto Turbo","productId":1015,"quantity":4,"sellingPrice":32999,"specification":"Color:Black; ROM:16 GB; Battery:3900; Primary Camera:21; OS:Android v5.0.2 Lollipop","supplier":{"userId":"S101"}},{"brand":"Asus","category":"MOBILE","cost":17999,"discount":4,"name":"Asus Zenfone 2 Laser ZE601KL","productId":1016,"quantity":7,"sellingPrice":18499,"specification":"Color:Gold; ROM:32 GB; Battery:3000; Primary Camera:13; OS:Android v5 Lollipop","supplier":{"userId":"S101"}},{"brand":"Asus","category":"MOBILE","cost":12999,"discount":2,"name":"Asus Zenfone 2 Laser 5.5","productId":1017,"quantity":6,"sellingPrice":13499,"specification":"Color:Black; ROM:16 GB; Battery:3000; Primary Camera:13; OS:Android v5 Lollipop","supplier":{"userId":"S101"}},{"brand":"Asus","category":"MOBILE","cost":9199,"discount":5,"name":"Asus Zenfone 2 Laser ZE550KL","productId":1018,"quantity":8,"sellingPrice":9999,"specification":"Color:White; ROM:16 GB; Battery:3000; Primary Camera:13; OS:Android v5 Lollipop","supplier":{"userId":"S102"}},{"brand":"Micromax","category":"MOBILE","cost":6530,"discount":4,"name":"Micromax Canvas Juice 2","productId":1019,"quantity":4,"sellingPrice":7199,"specification":"Color:Silver; ROM:8 GB; Battery:3000; Primary Camera:8; OS:Android v5 Lollipop","supplier":{"userId":"S102"}},{"brand":"Micromax","category":"MOBILE","cost":7999,"discount":6,"name":"Micromax Canvas Nitro 2","productId":1020,"quantity":7,"sellingPrice":8999,"specification":"Color:Gold; ROM:16 GB; Battery:2400 ; Primary Camera:13; OS:Android v4.4.2 KitKat","supplier":{"userId":"S102"}},{"brand":"Micromax","category":"MOBILE","cost":10599,"discount":5,"name":"Micromax Canvas 5","productId":1021,"quantity":8,"sellingPrice":11499,"specification":"Color:Slate Grey; ROM:16 GB; Battery:2900; Primary Camera:13; OS:Android v5.1 Lollipop","supplier":{"userId":"S102"}}]; 
			 				
			 			   
			 			  $scope.players1 = [{"brand":"Apple","category":"MOBILE","cost":52599,"discount":10,"name":"IPHONE 6","productId":1000,"quantity":5,"sellingPrice":54599,"specification":"Color:Space Gray; ROM:64 GB; Battery:1810; Primary Camera:8","supplier":{"userId":"S101"}},{"brand":"Microsoft","category":"MOBILE","cost":15000,"discount":8,"name":"Microsoft Lumia 640 XL LTE","productId":1001,"quantity":7,"sellingPrice":16762,"specification":"Color:Cyan; ROM:8 GB; Battery:3000; Primary Camera:13; OS:Windows v8.1","supplier":{"userId":"S101"}},{"brand":"Microsoft","category":"MOBILE","cost":3500,"discount":8,"name":"Microsoft Lumia 430","productId":1004,"quantity":5,"sellingPrice":4890,"specification":"Color:Black; ROM:8 GB; Battery:1500; Primary Camera:2; OS:Windows v8.1","supplier":{"userId":"S101"}},{"brand":"Apple","category":"MOBILE","cost":80000,"discount":9,"name":"IPHONE 6S PLUS","productId":1005,"quantity":5,"sellingPrice":85000,"specification":"Color:Gold; ROM:128 GB; Battery:2750; Primary Camera:12; OS:iOS 9","supplier":{"userId":"S101"}},{"brand":"HTC","category":"MOBILE","cost":7000,"discount":7.5,"name":"HTC Desire 526G Plus","productId":1006,"quantity":5,"sellingPrice":7999,"specification":"Color:Glossy Black; ROM:16 GB; Battery:2000; Primary Camera:8; OS:Android v4.4.8 KitKat ","supplier":{"userId":"S102"}},{"brand":"HTC","category":"MOBILE","cost":16000,"discount":8,"name":"HTC Desire 820S","productId":1007,"quantity":5,"sellingPrice":17699,"specification":"Color:Santorini White; ROM:16 GB; Battery:2600; Primary Camera:13; OS:Android v4.4.4 KitKat","supplier":{"userId":"S102"}},{"brand":"Samsung","category":"MOBILE","cost":9500,"discount":8,"name":"Samsung Galaxy On7","productId":1008,"quantity":5,"sellingPrice":10990,"specification":"Color:Gold; ROM:8 GB; Battery:3000 ; Primary Camera:13; OS:Android v5.1 Lollipop","supplier":{"userId":"S102"}},{"brand":"Samsung","category":"MOBILE","cost":20000,"discount":9.5,"name":"Samsung Galaxy Note 3","productId":1009,"quantity":8,"sellingPrice":21999,"specification":"Color:Jet Black; ROM:32 GB; Battery:3200; Primary Camera:13; OS:Android v4.3 Jelly Bean","supplier":{"userId":"S102"}},{"brand":"Lenovo","category":"MOBILE","cost":9000,"discount":6.5,"name":"Lenovo K3 Note","productId":1010,"quantity":12,"sellingPrice":9999,"specification":"Color:Black; ROM:16 GB; Battery:3000; Primary Camera:13; OS:Android v5 Lollipop","supplier":{"userId":"S102"}},{"brand":"Lenovo","category":"MOBILE","cost":4300,"discount":9.5,"name":"Lenovo A2010","productId":1011,"quantity":8,"sellingPrice":4990,"specification":"Color:White; ROM:8 GB; Battery:2000; Primary Camera:5; OS:Android v5.1 Lollipop","supplier":{"userId":"S102"}},{"brand":"Lenovo","category":"MOBILE","cost":5300,"discount":9.5,"name":"Lenovo A2011","productId":1012,"quantity":8,"sellingPrice":5990,"specification":"Color:Black; ROM:8 GB; Battery:2500; Primary Camera:8; OS:Android v5.1 Lollipop","supplier":{"userId":"S102"}},{"brand":"Motorola","category":"MOBILE","cost":10999,"discount":5,"name":"Moto G 3rd generation","productId":1013,"quantity":6,"sellingPrice":11499,"specification":"Color:Black; ROM:32 GB; Battery:2470; Primary Camera:13; OS:Android v5.1.1 Lollipop","supplier":{"userId":"S101"}},{"brand":"Motorola","category":"MOBILE","cost":8252,"discount":10,"name":"Moto G 2nd generation","productId":1014,"quantity":8,"sellingPrice":9999,"specification":"Color:White; ROM:16 GB; Battery:2070; Primary Camera:8; OS:Android v38081 Kitkat","supplier":{"userId":"S102"}},{"brand":"Motorola","category":"MOBILE","cost":31999,"discount":6,"name":"Moto Turbo","productId":1015,"quantity":4,"sellingPrice":32999,"specification":"Color:Black; ROM:16 GB; Battery:3900; Primary Camera:21; OS:Android v5.0.2 Lollipop","supplier":{"userId":"S101"}},{"brand":"Asus","category":"MOBILE","cost":17999,"discount":4,"name":"Asus Zenfone 2 Laser ZE601KL","productId":1016,"quantity":7,"sellingPrice":18499,"specification":"Color:Gold; ROM:32 GB; Battery:3000; Primary Camera:13; OS:Android v5 Lollipop","supplier":{"userId":"S101"}},{"brand":"Asus","category":"MOBILE","cost":12999,"discount":2,"name":"Asus Zenfone 2 Laser 5.5","productId":1017,"quantity":6,"sellingPrice":13499,"specification":"Color:Black; ROM:16 GB; Battery:3000; Primary Camera:13; OS:Android v5 Lollipop","supplier":{"userId":"S101"}},{"brand":"Asus","category":"MOBILE","cost":9199,"discount":5,"name":"Asus Zenfone 2 Laser ZE550KL","productId":1018,"quantity":8,"sellingPrice":9999,"specification":"Color:White; ROM:16 GB; Battery:3000; Primary Camera:13; OS:Android v5 Lollipop","supplier":{"userId":"S102"}},{"brand":"Micromax","category":"MOBILE","cost":6530,"discount":4,"name":"Micromax Canvas Juice 2","productId":1019,"quantity":4,"sellingPrice":7199,"specification":"Color:Silver; ROM:8 GB; Battery:3000; Primary Camera:8; OS:Android v5 Lollipop","supplier":{"userId":"S102"}},{"brand":"Micromax","category":"MOBILE","cost":7999,"discount":6,"name":"Micromax Canvas Nitro 2","productId":1020,"quantity":7,"sellingPrice":8999,"specification":"Color:Gold; ROM:16 GB; Battery:2400 ; Primary Camera:13; OS:Android v4.4.2 KitKat","supplier":{"userId":"S102"}},{"brand":"Micromax","category":"MOBILE","cost":10599,"discount":5,"name":"Micromax Canvas 5","productId":1021,"quantity":8,"sellingPrice":11499,"specification":"Color:Slate Grey; ROM:16 GB; Battery:2900; Primary Camera:13; OS:Android v5.1 Lollipop","supplier":{"userId":"S102"}}];
			 			  
			 			/* var clonedNodesArray = $scope.players1.clone();*/
			 			 
			 			 
			 			  	
			 			 	
			 				$scope.filteredPlayers.sort(function(a, b) {
			 					//console.log("qwe Asc");
			 					
			 				    return a.cost - b.cost;
			 				});
			 				
			 				/*alert($scope.filteredPlayers[0].name);
			 				alert($scope.filteredPlayers1[0].name);*/
			 				
			 				
			 				$scope.filteredPlayers1.sort(function(c, d) {
			 					//console.log("qwe Desc");
			 					
			 				    return d.cost - c.cost;
			 				});
			 				
			 				
			 				/*alert($scope.filteredPlayers[0].name);
			 				alert($scope.filteredPlayers1[0].name);*/
		 				
		 			});
		 	

		 }	 


//		alert("also");
		 $scope.usePants = {};
		    $scope.useShirts = {};
		    $scope.useShoes = {};
		        
		    $scope.players = [{"brand":"Apple","category":"MOBILE","cost":52599,"discount":10,"name":"IPHONE 6","productId":1000,"quantity":5,"sellingPrice":54599,"specification":"Color:Space Gray; ROM:64 GB; Battery:1810; Primary Camera:8","supplier":{"userId":"S101"}},{"brand":"Microsoft","category":"MOBILE","cost":15000,"discount":8,"name":"Microsoft Lumia 640 XL LTE","productId":1001,"quantity":7,"sellingPrice":16762,"specification":"Color:Cyan; ROM:8 GB; Battery:3000; Primary Camera:13; OS:Windows v8.1","supplier":{"userId":"S101"}},{"brand":"Microsoft","category":"MOBILE","cost":3500,"discount":8,"name":"Microsoft Lumia 430","productId":1004,"quantity":5,"sellingPrice":4890,"specification":"Color:Black; ROM:8 GB; Battery:1500; Primary Camera:2; OS:Windows v8.1","supplier":{"userId":"S101"}},{"brand":"Apple","category":"MOBILE","cost":80000,"discount":9,"name":"IPHONE 6S PLUS","productId":1005,"quantity":5,"sellingPrice":85000,"specification":"Color:Gold; ROM:128 GB; Battery:2750; Primary Camera:12; OS:iOS 9","supplier":{"userId":"S101"}},{"brand":"HTC","category":"MOBILE","cost":7000,"discount":7.5,"name":"HTC Desire 526G Plus","productId":1006,"quantity":5,"sellingPrice":7999,"specification":"Color:Glossy Black; ROM:16 GB; Battery:2000; Primary Camera:8; OS:Android v4.4.8 KitKat ","supplier":{"userId":"S102"}},{"brand":"HTC","category":"MOBILE","cost":16000,"discount":8,"name":"HTC Desire 820S","productId":1007,"quantity":5,"sellingPrice":17699,"specification":"Color:Santorini White; ROM:16 GB; Battery:2600; Primary Camera:13; OS:Android v4.4.4 KitKat","supplier":{"userId":"S102"}},{"brand":"Samsung","category":"MOBILE","cost":9500,"discount":8,"name":"Samsung Galaxy On7","productId":1008,"quantity":5,"sellingPrice":10990,"specification":"Color:Gold; ROM:8 GB; Battery:3000 ; Primary Camera:13; OS:Android v5.1 Lollipop","supplier":{"userId":"S102"}},{"brand":"Samsung","category":"MOBILE","cost":20000,"discount":9.5,"name":"Samsung Galaxy Note 3","productId":1009,"quantity":8,"sellingPrice":21999,"specification":"Color:Jet Black; ROM:32 GB; Battery:3200; Primary Camera:13; OS:Android v4.3 Jelly Bean","supplier":{"userId":"S102"}},{"brand":"Lenovo","category":"MOBILE","cost":9000,"discount":6.5,"name":"Lenovo K3 Note","productId":1010,"quantity":12,"sellingPrice":9999,"specification":"Color:Black; ROM:16 GB; Battery:3000; Primary Camera:13; OS:Android v5 Lollipop","supplier":{"userId":"S102"}},{"brand":"Lenovo","category":"MOBILE","cost":4300,"discount":9.5,"name":"Lenovo A2010","productId":1011,"quantity":8,"sellingPrice":4990,"specification":"Color:White; ROM:8 GB; Battery:2000; Primary Camera:5; OS:Android v5.1 Lollipop","supplier":{"userId":"S102"}},{"brand":"Lenovo","category":"MOBILE","cost":5300,"discount":9.5,"name":"Lenovo A2011","productId":1012,"quantity":8,"sellingPrice":5990,"specification":"Color:Black; ROM:8 GB; Battery:2500; Primary Camera:8; OS:Android v5.1 Lollipop","supplier":{"userId":"S102"}},{"brand":"Motorola","category":"MOBILE","cost":10999,"discount":5,"name":"Moto G 3rd generation","productId":1013,"quantity":6,"sellingPrice":11499,"specification":"Color:Black; ROM:32 GB; Battery:2470; Primary Camera:13; OS:Android v5.1.1 Lollipop","supplier":{"userId":"S101"}},{"brand":"Motorola","category":"MOBILE","cost":8252,"discount":10,"name":"Moto G 2nd generation","productId":1014,"quantity":8,"sellingPrice":9999,"specification":"Color:White; ROM:16 GB; Battery:2070; Primary Camera:8; OS:Android v38081 Kitkat","supplier":{"userId":"S102"}},{"brand":"Motorola","category":"MOBILE","cost":31999,"discount":6,"name":"Moto Turbo","productId":1015,"quantity":4,"sellingPrice":32999,"specification":"Color:Black; ROM:16 GB; Battery:3900; Primary Camera:21; OS:Android v5.0.2 Lollipop","supplier":{"userId":"S101"}},{"brand":"Asus","category":"MOBILE","cost":17999,"discount":4,"name":"Asus Zenfone 2 Laser ZE601KL","productId":1016,"quantity":7,"sellingPrice":18499,"specification":"Color:Gold; ROM:32 GB; Battery:3000; Primary Camera:13; OS:Android v5 Lollipop","supplier":{"userId":"S101"}},{"brand":"Asus","category":"MOBILE","cost":12999,"discount":2,"name":"Asus Zenfone 2 Laser 5.5","productId":1017,"quantity":6,"sellingPrice":13499,"specification":"Color:Black; ROM:16 GB; Battery:3000; Primary Camera:13; OS:Android v5 Lollipop","supplier":{"userId":"S101"}},{"brand":"Asus","category":"MOBILE","cost":9199,"discount":5,"name":"Asus Zenfone 2 Laser ZE550KL","productId":1018,"quantity":8,"sellingPrice":9999,"specification":"Color:White; ROM:16 GB; Battery:3000; Primary Camera:13; OS:Android v5 Lollipop","supplier":{"userId":"S102"}},{"brand":"Micromax","category":"MOBILE","cost":6530,"discount":4,"name":"Micromax Canvas Juice 2","productId":1019,"quantity":4,"sellingPrice":7199,"specification":"Color:Silver; ROM:8 GB; Battery:3000; Primary Camera:8; OS:Android v5 Lollipop","supplier":{"userId":"S102"}},{"brand":"Micromax","category":"MOBILE","cost":7999,"discount":6,"name":"Micromax Canvas Nitro 2","productId":1020,"quantity":7,"sellingPrice":8999,"specification":"Color:Gold; ROM:16 GB; Battery:2400 ; Primary Camera:13; OS:Android v4.4.2 KitKat","supplier":{"userId":"S102"}},{"brand":"Micromax","category":"MOBILE","cost":10599,"discount":5,"name":"Micromax Canvas 5","productId":1021,"quantity":8,"sellingPrice":11499,"specification":"Color:Slate Grey; ROM:16 GB; Battery:2900; Primary Camera:13; OS:Android v5.1 Lollipop","supplier":{"userId":"S102"}}];
		    
		    
		    // Watch the pants that are selected
		    $scope.$watch(function () {
		        return {
		            players: mobiles,
		            
		            usePants: $scope.usePants,
		            useShirts: $scope.useShirts,
		            useShoes: $scope.useShoes
		        }
		    }, function (value) {
		        var selected;
		      
		        $scope.pantsGroup = uniqueItems($scope.players, 'brand');
		        var filterAfterPants = [];    

		        selected = false;
		        for (var j in $scope.players) {
		            var p = $scope.players[j];
		            for (var i in $scope.usePants) {
		                if ($scope.usePants[i]) {
		                    selected = true;
		                    if (i == p.brand) {
		                        filterAfterPants.push(p);
		                        break;
		                    }
		                }
		            }        
		        }
		        if (!selected) {
		            filterAfterPants = $scope.players;
		            
		           
		        }
		        
		        
		        $scope.shirtsGroup = uniqueItems1(filterAfterPants, 'specification');
		        var filterAfterShirts = [];        
		        selected = false;
		        
		       
		        
		        for (var j in filterAfterPants) {
		            var p = filterAfterPants[j];
		            //console.log(p);
		            
		            var splitt=filterAfterPants[j]['specification'].split(';');
		           
		            //console.log(splitt[1]);
		            
		            var qwe=splitt[1].split(':');
		            
//		            console.log(qwe[1]);
		            
		            for (var i in $scope.useShirts) {
		                if ($scope.useShirts[i]) {
		                    selected = true;
		                   // console.log(i);
		                    if (i == qwe[1]) {
		            //            console.log(p);
		                    	filterAfterShirts.push(p);
		                    	//console.log(filterAfterShirts);
		                        break;
		                    }
		                }
		            }       
		        }
		        if (!selected) {
		            filterAfterShirts = filterAfterPants;
		        }
		        
		       
		        
		        
		        $scope.shoesGroup = uniqueItems(filterAfterShirts, 'sellingPrice');
		        var filterAfterShoes = [];        
		        selected = false;
		        for (var j in filterAfterShirts) {
		            var p = filterAfterShirts[j];
		            for (var i in $scope.useShoes) {
		                if ($scope.useShoes[i]) {
		                    selected = true;
		                    if (i == p.sellingPrice ) {
		                        filterAfterShoes.push(p);
		                        break;
		                    }
		                    
		                    	
		                    	
		                    
		                    
		                }
		            }    
		        }
		        if (!selected) {
		            filterAfterShoes = filterAfterShirts;
		        }    
		        
		        $scope.filteredPlayers = filterAfterShoes; 
		        $scope.filteredPlayers1 = filterAfterShoes;
		        
		    }, true);
		    
		    
		    $scope.$watch('filtered', function (newValue) {
		        if (angular.isArray(newValue)) {
		            console.log(newValue.length);
		        }
		    }, true);    
		    
		    
		    
		   
		    
		    
		 				 
});


app.filter('count', function() {
    return function(collection, key) {
      var out = "test";
      for (var i = 0; i < collection.length; i++) {
          //console.log(collection[i].pants);
          //var out = myApp.filter('filter')(collection[i].pants, "42", true);
      }
      return out;
    }
});



app.filter('groupBy',
            function () {
                return function (collection, key) {
                    if (collection === null) return;
                    return uniqueItems(collection, key);
        };
    });











