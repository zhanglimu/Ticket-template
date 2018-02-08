var app = angular.module('index',[]);

var ticbox = [
	{"num":"周四001",
	"clas":"世锦赛",
	"zhu":"坎布尔",
	"ke":"阿贾克斯",
	"win":"主胜",
	"odds":"8.8",
	"end":"---"},
	{"num":"周四001",
	"clas":"世锦赛",
	"zhu":"坎布尔",
	"ke":"阿贾克斯",
	"win":"主胜",
	"odds":"8.8",
	"end":"---"},
];
app.controller("indexctrl",function(){
	this.pass = "30";
	this.way = "2串1";
	this.times = "15";
	this.winning = "---";
	
	this.ticbox = ticbox;
	
	this.assess = "8888";
	
	this.numid = "DD2017050940014006";
	this.startime = "2017-05-09 22:40";
	this.pre = "1032.0~1032.0";
});