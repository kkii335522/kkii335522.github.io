var subpath='';

var app = angular.module("sunnyweb", ["ngRoute","ngSanitize"]);
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
});

app.controller('sunnyctrl', function($scope) {
	if(subpath.indexOf("en-us")!=-1){
			$scope.menutext=engmenu();
			$scope.contacttext=engcontact();
	}
	else{
		$scope.menutext=chtmenu();
		$scope.contacttext=chtcontact();
	}
    $scope.changeLang = function() {
		if(subpath.indexOf("en-us")!=-1)subpath=subpath.replace("en-us","zh-tw");
		else if(subpath.indexOf("zh-tw")==-1)subpath="en-us";
		else subpath=subpath.replace("zh-tw","en-us");
		if(subpath.indexOf("en-us")!=-1){
			$scope.menutext=engmenu();
			$scope.contacttext=engcontact();
		}
		else{
			$scope.menutext=chtmenu();
			$scope.contacttext=chtcontact();
		}
        location.href='#!'+subpath;
    }
});

function engmenu(){
	return '\
										<li><a href="#!en-us/">Home</a></li>\
										<li>\
											<span class="opener">Home Autocontrol</span>\
											<ul>\
												<li><a href="#!en-us/autocontrol/p1">PIR INFRARED LIGHTING SWITCH</a></li>\
												<li><a href="#!en-us/autocontrol/p2">PIR STAIR LIGHTING SWITCH</a></li>\
												<li><a href="#!en-us/autocontrol/p3">DISGUISED BURGLARPROOF AUTOMATIC LIGHTING SWITCH</a></li>\
												<li><a href="#!en-us/autocontrol/p4">HANDCLAP VOICE CONTROL LIGHTING SWITCH</a></li>\
												<li><a href="#!en-us/autocontrol/p5">NO TOUCH LIGHTING SWITCH</a></li>\
											</ul>\
										</li>\
										<li>\
											<span class="opener">Ultrasonic Sensor</span>\
											<ul>\
												<li><a href="#!en-us/sensor/p1">SU-40TR14E</a></li>\
												<li><a href="#!en-us/sensor/p2">SU-40TR15CASE</a></li>\
												<li><a href="#!en-us/sensor/p3">SU-40TR15DE-B</a></li>\
												<li><a href="#!en-us/sensor/p4">SU-40TR15DE-S</a></li>\
												<li><a href="#!en-us/sensor/p5">SU-40TR15DE-W</a></li>\
												<li><a href="#!en-us/sensor/p6">SU-40TR18CASE</a></li>\
												<li><a href="#!en-us/sensor/p7">SU-40TR18DE</a></li>\
												<li><a href="#!en-us/sensor/p8">SU-40TR18E</a></li>\
												<li><a href="#!en-us/sensor/p9">SU-ATA01</a></li>\
												<li><a href="#!en-us/sensor/p10">Ultrasonic Sensor Application</a></li>\
											</ul>\
										</li>\
										<li><a href="#!en-us/news">News</a></li>\
										<li><a href="#!en-us/contactus">Contact Us</a></li>\
										<li><a href="" ng-click="changeLang()">中文</a></li>\
									';
}

function engcontact(){
	return '<header class="major">\
										<h2>Contact Method</h2>\
									</header>\
									<p> If you need our service, you can use the following contact information.</p>\
									<ul class="contact">\
										<li class="fa-envelope-o"><a href="#">suntechnn@yahoo.com.tw</a></li>\
										<li class="fa-phone">886-6-258-0620</li>\
										<li class="fa-paper-plane">FAX : 886-6-259-6497</li>\
										<li class="fa-home">NO.4 LANE. 117 SEC. 4 HEWEI ROAD TAINAN TAIWAN<br />\
										</li>\
									</ul>';
}

function chtmenu(){
	return '<li><a href="#!zh-tw">Home</a></li>\
										<li>\
											<span class="opener">家庭自動化</span>\
											<ul>\
												<li><a href="#!zh-tw/autocontrol/p1">PIR紅外線感應點燈開關</a></li>\
												<li><a href="#!zh-tw/autocontrol/p2">PIR感應自動樓梯燈(雙切)開關</a></li>\
												<li><a href="#!zh-tw/autocontrol/p3">防盜偽裝自動點燈開關</a></li>\
												<li><a href="#!zh-tw/autocontrol/p4">拍手聲控點燈開關</a></li>\
												<li><a href="#!zh-tw/autocontrol/p5">非接觸感應點燈開關</a></li>\
											</ul>\
										</li>\
										<li>\
											<span class="opener">超音波換能器</span>\
											<ul>\
												<li><a href="#!zh-tw/sensor/p1">SU-40TR14E</a></li>\
												<li><a href="#!zh-tw/sensor/p2">SU-40TR15CASE</a></li>\
												<li><a href="#!zh-tw/sensor/p3">SU-40TR15DE-B</a></li>\
												<li><a href="#!zh-tw/sensor/p4">SU-40TR15DE-S</a></li>\
												<li><a href="#!zh-tw/sensor/p5">SU-40TR15DE-W</a></li>\
												<li><a href="#!zh-tw/sensor/p6">SU-40TR18CASE</a></li>\
												<li><a href="#!zh-tw/sensor/p7">SU-40TR18DE</a></li>\
												<li><a href="#!zh-tw/sensor/p8">SU-40TR18E</a></li>\
												<li><a href="#!zh-tw/sensor/p9">SU-ATA01</a></li>\
												<li><a href="#!zh-tw/sensor/p10">超音波感應器相關運用</a></li>\
											</ul>\
										</li>\
										<li><a href="#!zh-tw/news">最新消息</a></li>\
										<li><a href="#!zh-tw/contactus">聯絡我們</a></li>\
										<li><a href="" ng-click="changeLang()">English</a></li>';

}	
function chtcontact(){
	return '<header class="major">\
										<h2>聯絡方式</h2>\
									</header>\
									<p> 非常高興您光臨我們公司的網站，感謝您的支持，以下是我們的聯絡方式。</p>\
									<ul class="contact">\
										<li class="fa-envelope-o"><a href="#">suntechnn@yahoo.com.tw</a></li>\
										<li class="fa-phone">886-6-258-0620</li>\
										<li class="fa-paper-plane">FAX : 886-6-259-6497</li>\
										<li class="fa-home">台南市北區和緯路四段117巷4號<br />\
										</li>\
									</ul>';
}