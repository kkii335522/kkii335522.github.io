var app = angular.module("sunnyweb", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/zh-tw", {
        templateUrl : "views/zh-tw/index.html"
    })
	.when("/zh-tw/contactus", {
        templateUrl : "views/zh-tw/contactus.html"
    })
	.when("/zh-tw/news", {
        templateUrl : "views/zh-tw/news.html"
    })
	.when("/zh-tw/autocontrol", {
        templateUrl : "views/zh-tw/autocontrol/p1.html"
    })
	.when("/zh-tw/autocontrol/p1", {
        templateUrl : "views/zh-tw/autocontrol/p1.html"
    })
	.when("/zh-tw/autocontrol/p2", {
        templateUrl : "views/zh-tw/autocontrol/p2.html"
    })
	.when("/zh-tw/autocontrol/p3", {
        templateUrl : "views/zh-tw/autocontrol/p3.html"
    })
	.when("/zh-tw/autocontrol/p4", {
        templateUrl : "views/zh-tw/autocontrol/p4.html"
    })
	.when("/zh-tw/autocontrol/p5", {
        templateUrl : "views/zh-tw/autocontrol/p5.html"
    })
	.when("/zh-tw/sensor", {
        templateUrl : "views/zh-tw/sensor/p1.html"
    })
	.when("/zh-tw/sensor/p1", {
        templateUrl : "views/zh-tw/sensor/p1.html"
    })
	.when("/zh-tw/sensor/p2", {
        templateUrl : "views/zh-tw/sensor/p2.html"
    })
	.when("/zh-tw/sensor/p3", {
        templateUrl : "views/zh-tw/sensor/p3.html"
    })
	.when("/zh-tw/sensor/p4", {
        templateUrl : "views/zh-tw/sensor/p4.html"
    })
	.when("/zh-tw/sensor/p5", {
        templateUrl : "views/zh-tw/sensor/p5.html"
    })
	.when("/zh-tw/sensor/p6", {
        templateUrl : "views/zh-tw/sensor/p6.html"
    })
	.when("/zh-tw/sensor/p7", {
        templateUrl : "views/zh-tw/sensor/p7.html"
    })
	.when("/zh-tw/sensor/p8", {
        templateUrl : "views/zh-tw/sensor/p8.html"
    })
	.when("/zh-tw/sensor/p9", {
        templateUrl : "views/zh-tw/sensor/p9.html"
    })
	.when("/zh-tw/sensor/p10", {
        templateUrl : "views/zh-tw/sensor/p10.html"
    })
	.otherwise({
        templateUrl : "views/zh-tw/index.html"
    });
});