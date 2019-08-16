

// line chart
var lineChart = new Morris.Line({
    element: 'line-chart',
    data: [
        {"elapsed": "07-19", "value": 18},
        {"elapsed": "07-20", "value": 34},
        {"elapsed": "07-21", "value": 53},
        {"elapsed": "07-22", "value": 12},
        {"elapsed": "07-23", "value": 13},
        {"elapsed": "07-24", "value": 22},
        {"elapsed": "07-25", "value": 15},
        {"elapsed": "07-26", "value": 26},
        {"elapsed": "07-27", "value": 12},
        {"elapsed": "07-28", "value": 19}
    ],

    xkey: 'elapsed',
    ykeys: ['value'],
    labels: ['万分比'],
    gridLineColor: '#e5ebf8',
    lineColors:['#36a2f5'],
    parseTime: false,
    lineWidth: 2,
    hideHover: 'auto'
});


// bar chart
var barchart = new Morris.Bar({
    element: 'bar-chart',
    data: [
        {x: '07-20', y: 2, z: 4, a: 3, b: 3},
        {x: '07-21', y: 2, z: null, a: 1, b: 4},
        {x: '07-22', y: 0, z: 2, a: 4, b: 5},
        {x: '07-23', y: 2, z: 4, a: 3, b: 2},
        {x: '07-24', y: 2, z: 4, a: 3, b: 2}
    ],
    xkey: 'x',
    ykeys: ['y', 'z', 'a','b'],
    labels: ['综合（不含网盾）', '主程序', '招呼','网盾'],
    gridLineColor: '#e5ebf8',
    barColors:["#ae84f3", "#34bfa3", "#36a2f5","#ead38c"],
    hideHover: 'auto'
});

// donut chart
var donutchart = new Morris.Donut({
    element: 'donut-chart',
    data: [
        {value:20,label: "iPhone X", formatted:'20%'},
        {value:20,label: "Huawei P30",formatted:'20%'},
        {value:15, label: "Huawei P20",formatted: '15%'},
        {value:10,label: "Huawei Mate20",formatted: '10%'},
        {value:10, label: "Huawei Nova5",formatted: '10%'},
        {value:5, label: "iPhone XS Max",formatted: '5%'},
        {value:5, label: "OPPO Reno",formatted:'5%'},
        {value:5, label: "VIVO iqoo",formatted:'5%'},
        {value:5, label: "Xiaomi 9", formatted:'5%'},
        {value:5, label: "xiaomi CC", formatted:'5%'}
    ],
    backgroundColor: '#fff',
    labelColor: '#53505F',
    gridLineColor: '#e5ebf8',
    colors: ["#ae84f3", "#34bfa3", "#36a2f5","#ead38c","#ae84f3", "#34bfa3", "#36a2f5","#ead38c","#ae84f3", "#34bfa3"],
    formatter: function (x,data) { return data.formatted; },
});


// // area line chart
// var arealinechart = new Morris.Area({
//     element: 'area-line-chart',
//     behaveLikeLine: false,
//     data: [
//         {x: '2017 Q1', y: 5, z: 3},
//         {x: '2017 Q2', y: 3, z: 3},
//         {x: '2017 Q3', y: 5, z: 5},
//         {x: '2017 Q4', y: 4, z: 3},
//         {x: '2017 Q5', y: 3, z: 2}
//     ],
//     xkey: 'x',
//     ykeys: ['y', 'z'],
//     labels: ['Y', 'Z'],
//     gridLineColor: '#e5ebf8',
//     lineColors:['#eac459','#A768F3'],
//     pointSize: 4,
//     lineWidth: 1
// });
//
// // area chart
// var areaChart = new Morris.Area({
//     element: 'area-chart',
//     behaveLikeLine: true,
//     gridEnabled: false,
//     gridLineColor: '#e5ebf8',
//     axes: true,
//     fillOpacity:.7,
//     data: [
//         {period: '2015 Q1', iphone: 2666, ipad: null, itouch: 2647},
//         {period: '2015 Q2', iphone: 15278, ipad: 4294, itouch: 2441},
//         {period: '2015 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
//         {period: '2015 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
//         {period: '2016 Q1', iphone: 6810, ipad: 13914, itouch: 2293},
//         {period: '2016 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
//         {period: '2016 Q3', iphone: 4820, ipad: 23795, itouch: 1588},
//         {period: '2016 Q4', iphone: 15073, ipad: 5967, itouch: 5175},
//         {period: '2017 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
//         {period: '2017 Q2', iphone: 8432, ipad: 5713, itouch: 1791}
//     ],
//     lineColors:['#FF518A','#FFEA80','#36a2f5'],
//     xkey: 'period',
//     ykeys: ['iphone', 'ipad', 'itouch'],
//     labels: ['iPhone', 'iPad', 'iPod Touch'],
//     pointSize: 4,
//     lineWidth: 1,
//     hideHover: 'auto'
// });



jQuery(function($) {
    $(window).on('resize', function() {
     setTimeout(function(){

       // //area-chart
       // var $area_chart =  $('#area-chart');
       // var width_svg = $area_chart.width();
       // $area_chart.find("svg").width(width_svg);
       // areaChart.redraw();

       //area-chart
       var $bar_chart =  $('#bar-chart');
       var bar_svg = $bar_chart.width();
       $bar_chart.find("svg").width(bar_svg);
       barchart.redraw();

       //area-chart
       var $line_Chart =  $('#line-chart');
       var line_svg = $line_Chart.width();
       $line_Chart.find("svg").width(line_svg);
       lineChart.redraw();

       // //area-chart
       // var $arealinechart =  $('#area-line-chart');
       // var arealinechart_svg = $arealinechart.width();
       // $arealinechart.find("svg").width(arealinechart_svg);
       // arealinechart.redraw();

       //area-chart
       var $donutchart =  $('#donut-chart');
       var donutchart_svg = $donutchart.width();
       $donutchart.find("svg").width(donutchart_svg);
       donutchart.redraw();

    })
    });
});
