var app = angular.module('betting',[]);

var betbox = [
	{"num":"周四001",
	"win":"主胜",
	"odds":"8.8",
	"times":"15"},
	{"num":"周四001",
	"win":"[+2平]",
	"odds":"8.8",
	"times":""},
];
app.controller("bettingctrl",function(){
	this.way = "2串1";
	
	this.betbox = betbox;
});