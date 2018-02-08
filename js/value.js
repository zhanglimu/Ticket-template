var app = angular.module('value',[]);

var trbox = [
	{"time":"06-15  16:30:00",
	"state":"出票成功",
	"money":"888.8"},
	{"time":"06-15  16:30:00",
	"state":"交易成功",
	"money":"888.8"},
	{"time":"06-15  16:30:00",
	"state":"停止报价",
	"money":"888.8"},
];
app.controller("valuectrl",function(){
	this.trbox = trbox;
});