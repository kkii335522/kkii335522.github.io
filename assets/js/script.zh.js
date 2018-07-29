var subpath='';

var app = angular.module("sunnyweb", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/zh-tw", {
        templateUrl : "views/zh-tw/index.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/contactus", {
        templateUrl : "views/zh-tw/contactus.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/news", {
        templateUrl : "views/zh-tw/news.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/autocontrol", {
        templateUrl : "views/zh-tw/autocontrol/p1.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/autocontrol/p1", {
        templateUrl : "views/zh-tw/autocontrol/p1.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/autocontrol/p2", {
        templateUrl : "views/zh-tw/autocontrol/p2.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/autocontrol/p3", {
        templateUrl : "views/zh-tw/autocontrol/p3.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/autocontrol/p4", {
        templateUrl : "views/zh-tw/autocontrol/p4.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/autocontrol/p5", {
        templateUrl : "views/zh-tw/autocontrol/p5.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/sensor", {
        templateUrl : "views/zh-tw/sensor/p1.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/sensor/p1", {
        templateUrl : "views/zh-tw/sensor/p1.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/sensor/p2", {
        templateUrl : "views/zh-tw/sensor/p2.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/sensor/p3", {
        templateUrl : "views/zh-tw/sensor/p3.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/sensor/p4", {
        templateUrl : "views/zh-tw/sensor/p4.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/sensor/p5", {
        templateUrl : "views/zh-tw/sensor/p5.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/sensor/p6", {
        templateUrl : "views/zh-tw/sensor/p6.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/sensor/p7", {
        templateUrl : "views/zh-tw/sensor/p7.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/sensor/p8", {
        templateUrl : "views/zh-tw/sensor/p8.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/sensor/p9", {
        templateUrl : "views/zh-tw/sensor/p9.html",
		controller : "Ctrl"
    })
	.when("/zh-tw/sensor/p10", {
        templateUrl : "views/zh-tw/sensor/p10.html",
		controller : "Ctrl"
    })
	.when("/en-us", {
        templateUrl : "views/en-us/index.html",
		controller : "Ctrl"
    })
	.when("/en-us/contactus", {
        templateUrl : "views/en-us/contactus.html",
		controller : "Ctrl"
    })
	.when("/en-us/news", {
        templateUrl : "views/en-us/news.html",
		controller : "Ctrl"
    })
	.when("/en-us/autocontrol", {
        templateUrl : "views/en-us/autocontrol/p1.html",
		controller : "Ctrl"
    })
	.when("/en-us/autocontrol/p1", {
        templateUrl : "views/en-us/autocontrol/p1.html",
		controller : "Ctrl"
    })
	.when("/en-us/autocontrol/p2", {
        templateUrl : "views/en-us/autocontrol/p2.html",
		controller : "Ctrl"
    })
	.when("/en-us/autocontrol/p3", {
        templateUrl : "views/en-us/autocontrol/p3.html",
		controller : "Ctrl"
    })
	.when("/en-us/autocontrol/p4", {
        templateUrl : "views/en-us/autocontrol/p4.html",
		controller : "Ctrl"
    })
	.when("/en-us/autocontrol/p5", {
        templateUrl : "views/en-us/autocontrol/p5.html",
		controller : "Ctrl"
    })
	.when("/en-us/sensor", {
        templateUrl : "views/en-us/sensor/p1.html",
		controller : "Ctrl"
    })
	.when("/en-us/sensor/p1", {
        templateUrl : "views/en-us/sensor/p1.html",
		controller : "Ctrl"
    })
	.when("/en-us/sensor/p2", {
        templateUrl : "views/en-us/sensor/p2.html",
		controller : "Ctrl"
    })
	.when("/en-us/sensor/p3", {
        templateUrl : "views/en-us/sensor/p3.html",
		controller : "Ctrl"
    })
	.when("/en-us/sensor/p4", {
        templateUrl : "views/en-us/sensor/p4.html",
		controller : "Ctrl"
    })
	.when("/en-us/sensor/p5", {
        templateUrl : "views/en-us/sensor/p5.html",
		controller : "Ctrl"
    })
	.when("/en-us/sensor/p6", {
        templateUrl : "views/en-us/sensor/p6.html",
		controller : "Ctrl"
    })
	.when("/en-us/sensor/p7", {
        templateUrl : "views/en-us/sensor/p7.html",
		controller : "Ctrl"
    })
	.when("/en-us/sensor/p8", {
        templateUrl : "views/en-us/sensor/p8.html",
		controller : "Ctrl"
    })
	.when("/en-us/sensor/p9", {
        templateUrl : "views/en-us/sensor/p9.html",
		controller : "Ctrl"
    })
	.when("/en-us/sensor/p10", {
        templateUrl : "views/en-us/sensor/p10.html",
		controller : "Ctrl"
    })
	.otherwise({
        templateUrl : "views/zh-tw/index.html",
		controller : "Ctrl"
    });
});

app.controller("Ctrl", function ($scope) {
	if(window.location.href.indexOf("#!/")==-1){
		subpath="";
	}
	else{
		subpath=window.location.href.split("#!/")[1];
	}
	//alert(subpath);
});

app.controller('sunnyctrl', function($scope) {
    $scope.changeLang = function() {
		if(subpath.indexOf("en-us")!=-1)subpath=subpath.replace("en-us","zh-tw");
		else if(subpath.indexOf("zh-tw")==-1)subpath="en-us";
		else subpath=subpath.replace("zh-tw","en-us");
        location.href='#!'+subpath;
    }
});