var app = angular.module("sunnyweb", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/en-us", {
        templateUrl : "views/en-us/index.html"
    })
	.when("/en-us/contactus", {
        templateUrl : "views/en-us/contactus.html"
    })
	.when("/en-us/news", {
        templateUrl : "views/en-us/news.html"
    })
	.when("/en-us/autocontrol", {
        templateUrl : "views/en-us/autocontrol/p1.html"
    })
	.when("/en-us/autocontrol/p1", {
        templateUrl : "views/en-us/autocontrol/p1.html"
    })
	.when("/en-us/autocontrol/p2", {
        templateUrl : "views/en-us/autocontrol/p2.html"
    })
	.when("/en-us/autocontrol/p3", {
        templateUrl : "views/en-us/autocontrol/p3.html"
    })
	.when("/en-us/autocontrol/p4", {
        templateUrl : "views/en-us/autocontrol/p4.html"
    })
	.when("/en-us/autocontrol/p5", {
        templateUrl : "views/en-us/autocontrol/p5.html"
    })
	.when("/en-us/sensor", {
        templateUrl : "views/en-us/sensor/p1.html"
    })
	.when("/en-us/sensor/p1", {
        templateUrl : "views/en-us/sensor/p1.html"
    })
	.when("/en-us/sensor/p2", {
        templateUrl : "views/en-us/sensor/p2.html"
    })
	.when("/en-us/sensor/p3", {
        templateUrl : "views/en-us/sensor/p3.html"
    })
	.when("/en-us/sensor/p4", {
        templateUrl : "views/en-us/sensor/p4.html"
    })
	.when("/en-us/sensor/p5", {
        templateUrl : "views/en-us/sensor/p5.html"
    })
	.when("/en-us/sensor/p6", {
        templateUrl : "views/en-us/sensor/p6.html"
    })
	.when("/en-us/sensor/p7", {
        templateUrl : "views/en-us/sensor/p7.html"
    })
	.when("/en-us/sensor/p8", {
        templateUrl : "views/en-us/sensor/p8.html"
    })
	.when("/en-us/sensor/p9", {
        templateUrl : "views/en-us/sensor/p9.html"
    })
	.when("/en-us/sensor/p10", {
        templateUrl : "views/en-us/sensor/p10.html"
    })
	.otherwise({
        templateUrl : "views/en-us/index.html"
    });
});