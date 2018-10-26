var app = angular.module("Application", ['ngRoute','ngCookies']);


var config={
		"protocol" : "http",
		"port" : "3333",
		"domain" : "localhost",
		"project" : "MobileComparisonApp"
}


app.config([ '$routeProvider', function($routeProvider) {
    $routeProvider    
    .when('/compare', {
        templateUrl : '../../partials/Compare.html'        
    }).otherwise({
        redirectTo : '/'
    });
}]);


/*
 * Do not change the code below this point
 * Only change the port number in the config object
 */

function getURI(){
	return config.protocol +"://"+ config.domain +":"+ "3333" +"/"+ config.project +"/api/" ;
}

var URI=getURI();
