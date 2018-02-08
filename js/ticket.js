var app = angular.module('ticket',[]);

app.controller("ticketctrl",function(){
	this.time = "06-05 23:00";
	this.money = "888.5";
	this.low = "100";
	this.cost = "10";
	this.high = "800";
	
//$(document).ready(function () {
//  Highcharts.setOptions({
//      global: {
//          useUTC: false
//      }
//  });
//  Highcharts.chart('main', {
//      chart: {
//          type: 'spline',
//          animation: Highcharts.svg, 
//          marginRight: 10,
//          events: {
//              load: function () {
//                  var series = this.series[0];
//                  setInterval(function () {
//                      var x = (new Date()).getTime(), 
//                          y = Math.random();
//                      series.addPoint([x, y], true);
//                  }, 1000);
//              }
//          }
//      },
//      title: {
//          text: null,
//      },
//      legend: {    //去掉下标志
//			enabled: false
//		}, 
//		credits: {    //去掉右下角网址
//		    enabled: false
//		},
//      xAxis: {
//          type: 'datetime',
//          tickPixelInterval: 100,
//      },
//      yAxis: {
//          title:'',
//          plotLines: [{
//              value: 0,
//              width: 1,
//              color: '#808080'
//          }]
//      },
//      tooltip: {
//          formatter: function () {
//              return '<b>' + this.series.name + '</b><br/>' +
//                  Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
//                  Highcharts.numberFormat(this.y, 2);
//          }
//      },
//      series: [{
//          name: '',
//          data: (function () {
//              var data = [],
//                  time = (new Date()).getTime(),
//                  i;
//              for (i = -19; i <= 0; i += 1) {
//                  data.push({
//                      x: time + i * 1000,
//                      y: Math.random()
//                  });
//              }
//              return data;
//          }())
//      }]
//  });
//});

//$(function () {
//  $('#main').highcharts({
//      title: {
//          text: null,     //标题为空
//      },
//      legend: {    //去掉下标
//			enabled: false
//		}, 
//		credits: {    //去掉右下角网址
//		    enabled: false
//		},
//      xAxis: {
//          tickInterval: 1
//      },
//      yAxis: {
//      	title:'',     //标题为空
//          type: 'logarithmic',
//          minorTickInterval: 0.1,
//      },
//      tooltip: {
//          headerFormat: '<b>{series.name}</b><br />',
//          pointFormat: 'x = {point.x}, y = {point.y}'
//      },
//      series: [{
//          data: [1, 2, 4, 8, 16, 32, 32, 64, 28, 18],
//          pointStart: 1
//      }]
//  });
//});

});