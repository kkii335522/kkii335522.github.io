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
	if(window.location.href.indexOf("#!/")==-1){
		subpath="";
	}
	else{
		subpath=window.location.href.split("#!/")[1];
	}
	if(subpath.indexOf("en-us")!=-1){
		$scope.lang='en-us';
		$scope.title='SUNNY TECHNOLOGY CO.,LTD.';
		$scope.auto='Home Autocontrol';
		$scope.autop1='PIR INFRARED LIGHTING SWITCH';
		$scope.autop2='PIR STAIR LIGHTING SWITCH';
		$scope.autop3='DISGUISED BURGLARPROOF AUTOMATIC LIGHTING SWITCH';
		$scope.autop4='HANDCLAP VOICE CONTROL LIGHTING SWITCH';
		$scope.autop5='NO TOUCH LIGHTING SWITCH';
		$scope.sensor='Ultrasonic Sensor';
		$scope.sensorp10='Ultrasonic Sensor Application';
		$scope.news='News';
		$scope.contact='Contact Us';
		$scope.language='中文';
		$scope.contacttext=engcontact();
	}
	else{
		$scope.lang='zh-tw';
		$scope.title='勝立科技有限公司-主要產品有倒車雷達感測元件(密閉式超音波換能器)與家庭自動化控制器等。';
		$scope.auto='家庭自動化';
		$scope.autop1='PIR紅外線感應點燈開關';
		$scope.autop2='PIR感應自動樓梯燈(雙切)開關';
		$scope.autop3='防盜偽裝自動點燈開關';
		$scope.autop4='拍手聲控點燈開關';
		$scope.autop5='非接觸感應點燈開關';
		$scope.sensor='超音波換能器';
		$scope.sensorp10='超音波感應器相關運用';
		$scope.news='最新消息';
		$scope.contact='聯絡我們';
		$scope.language='English';
		$scope.contacttext=chtcontact();
	}
    $scope.changeLang = function() {
		if(subpath.indexOf("en-us")!=-1)subpath=subpath.replace("en-us","zh-tw");
		else if(subpath.indexOf("zh-tw")==-1)subpath="en-us";
		else subpath=subpath.replace("zh-tw","en-us");
		if(subpath.indexOf("en-us")!=-1){
			$scope.lang='en-us';
			$scope.title='SUNNY TECHNOLOGY CO.,LTD.';
			$scope.auto='Home Autocontrol';
			$scope.autop1='PIR INFRARED LIGHTING SWITCH';
			$scope.autop2='PIR STAIR LIGHTING SWITCH';
			$scope.autop3='DISGUISED BURGLARPROOF AUTOMATIC LIGHTING SWITCH';
			$scope.autop4='HANDCLAP VOICE CONTROL LIGHTING SWITCH';
			$scope.autop5='NO TOUCH LIGHTING SWITCH';
			$scope.sensor='Ultrasonic Sensor';
			$scope.sensorp10='Ultrasonic Sensor Application';
			$scope.news='News';
			$scope.contact='Contact Us';
			$scope.language='中文';
			$scope.contacttext=engcontact();
		}
		else{
			$scope.lang='zh-tw';
			$scope.title='勝立科技有限公司-主要產品有倒車雷達感測元件(密閉式超音波換能器)與家庭自動化控制器等。';
			$scope.auto='家庭自動化';
			$scope.autop1='PIR紅外線感應點燈開關';
			$scope.autop2='PIR感應自動樓梯燈(雙切)開關';
			$scope.autop3='防盜偽裝自動點燈開關';
			$scope.autop4='拍手聲控點燈開關';
			$scope.autop5='非接觸感應點燈開關';
			$scope.sensor='超音波換能器';
			$scope.sensorp10='超音波感應器相關運用';
			$scope.news='最新消息';
			$scope.contact='聯絡我們';
			$scope.language='English';
			$scope.contacttext=chtcontact();
		}
        location.href='#!'+subpath;
    }
});


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