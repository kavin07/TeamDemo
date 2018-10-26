app.controller("CompareController",
		function($scope, $http, $cookies) {
//				alert("a");
				
				$scope.compareForm1 = {};
				$scope.compareForm1.name = null
				
				$scope.compareForm2 = {};
				$scope.compareForm2.name = null
				
				$scope.compareForm3 = {};
				$scope.compareForm3.name = null
				
				
				$scope.compareForm4 = {};
				$scope.compareForm4.name = null
				
				$scope.compare={};
				$scope.compare.message=null;
				
				$scope.message=null;		// for return message final one
				
				
				$scope.phoneList=null;
				
				$scope.generateList = function() {
//					console.log(URI);
					$http.get(URI + "Compare/getMobiles").then(
							function(response) {
//								alert("a");
								$scope.phoneList = response.data;
							}, function(response) {
//								alert("b");
								$scope.phoneList = null;
							});
				};
				
				
				$scope.getPhoneDetails1=function() {
					
					$http.get(URI + "Compare/getDetails/"+$scope.compareForm1.name).then(
							function(response) {	
								$scope.compareForm1 = response.data;
							}, function(response) {
								$scope.compareForm1 = null;
							});
				};
				
				
				$scope.getPhoneDetails2=function() {
					
					$http.get(URI + "Compare/getDetails/"+$scope.compareForm2.name).then(
							function(response) {	
								$scope.compareForm2 = response.data;
							}, function(response) {
								$scope.compareForm2 = null;
							});
				};
				
				$scope.getPhoneDetails3=function() {
					$http.get(URI + "Compare/getDetails/"+$scope.compareForm3.name).then(
							function(response) {	
								$scope.compareForm3 = response.data;
							}, function(response) {
								$scope.compareForm3 = null;
							});
				};
				
				$scope.getPhoneDetails4=function() {
					$http.get(URI + "Compare/getDetails/"+$scope.compareForm4.name).then(
							function(response) {
								$scope.compareForm4 = response.data;
							}, function(response) {
								$scope.compareForm4 = null;
							});
				};
				
				 
				
				
				$scope.getCompare=function() {
					var str="";
					var count=0;
					if($scope.compareForm1.name!=null)
					{
						str+=$scope.compareForm1.name;
						str+=':';
						count+=1;
					}
					if($scope.compareForm2.name!=null)
					{
						str+=$scope.compareForm2.name;
						str+=':';
						count+=1;
					}
					if($scope.compareForm3.name!=null)
					{
						str+=$scope.compareForm3.name;
						str+=':';
						count+=1;
					}
					if($scope.compareForm4.name!=null)
					{
						str+=$scope.compareForm4.name;
						count+=1;
					}
					
					if(count>=2)
					{
						$scope.compare.message=str;
						
						var data=angular.toJson($scope.compare);
						
						
						$http.post(URI+"Compare/getCompa",data).then(
								function(response) {
									$scope.message=response.data.message;
								}, function(response) {
									alert("failure..try again"+">>>> "+response.data+"Status: "+response.status+"......."+"Reason: "+response.reason);
									$scope.message="Some Technical error while doing comparison., Please do the search again to get better results";
								});
						
					}
					else
					{
						alert("Please select atleast two mobiles for better comparison");
					}
					
					
				};
				
			$scope.logout= function(){
				 	var Backlen=history.length;   
				 	history.go(-Backlen);   
				 	
					window.location="../Login.html"
			};
				

		});




var URI=getURI();