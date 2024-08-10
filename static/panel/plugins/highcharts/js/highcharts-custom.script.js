$(function () {
    "use strict";
    // chart 1
    Highcharts.chart('chart1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            styledMode: true
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'سهم بازار مرورگر در ژانویه 2018'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}درصد</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} درصد'
                }
            }
        },
        series: [{
            name: 'برندها',
            colorByPoint: true,
            data: [{
                name: 'کروم',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'اینترنت اکسپلورر',
                y: 11.84
            }, {
                name: 'فایرفاکس',
                y: 10.85
            }, {
                name: 'ادج',
                y: 4.67
            }, {
                name: 'سافاری',
                y: 4.18
            }, {
                name: 'کاوشگر سوگو',
                y: 1.64
            }, {
                name: 'اپرا',
                y: 1.6
            }, {
                name: 'کیو کیو',
                y: 1.2
            }, {
                name: 'دیگر',
                y: 2.61
            }]
        }]
    });
    // chart 2
    // Build the chart
    Highcharts.chart('chart2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            styledMode: true
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'سهم بازار مرورگر در ژانویه 2018'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}درصد</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'برندها',
            colorByPoint: true,
            data: [{
                name: 'کروم',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'اینترنت اکسپلورر',
                y: 11.84
            }, {
                name: 'فایرفاکس',
                y: 10.85
            }, {
                name: 'ادج',
                y: 4.67
            }, {
                name: 'سافاری',
                y: 4.18
            }, {
                name: 'دیگر',
                y: 7.05
            }]
        }]
    });
    // chart 3
    Highcharts.chart('chart3', {
        chart: {
            type: 'variablepie',
            styledMode: true
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'مقایسه کشورها بر اساس تراکم جمعیت و مساحت کل.'
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' + 'مساحت (کیلومتر مربع): <b>{point.y}</b><br/>' + 'تراکم جمعیت (نفر در کیلومتر مربع): <b>{point.z}</b><br/>'
        },
        series: [{
            minPointSize: 10,
            innerSize: '20%',
            zMin: 0,
            name: 'countries',
            data: [{
                name: 'اسپانیا',
                y: 505370,
                z: 92.9
            }, {
                name: 'فرانسه',
                y: 551500,
                z: 118.7
            }, {
                name: 'لهستان',
                y: 312685,
                z: 124.6
            }, {
                name: 'جمهوری چک',
                y: 78867,
                z: 137.5
            }, {
                name: 'ایتالیا',
                y: 301340,
                z: 201.8
            }, {
                name: 'سوئیس',
                y: 41277,
                z: 214.5
            }, {
                name: 'آلمان',
                y: 357022,
                z: 235.6
            }]
        }]
    });
    // chart4
    // Make monochrome colors
    var pieColors = (function () {
        var colors = [],
            base = Highcharts.getOptions().colors[0],
            i;
        for (i = 0; i < 10; i += 1) {
            // Start out with a darkened base color (negative brighten), and end
            // up with a much brighter color
            colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
        }
        return colors;
    }());
    // Build the chart
    Highcharts.chart('chart4', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            styledMode: true,
            type: 'pie'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'سهم بازار مرورگر در یک وب سایت خاص، 2014'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}درصد</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                colors: pieColors,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.percentage:.1f} درصد',
                    distance: -50,
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                }
            }
        },
        series: [{
            name: 'سهم',
            data: [{
                name: 'کروم',
                y: 61.41
            }, {
                name: 'اینترنت اکسپلورر',
                y: 11.84
            }, {
                name: 'فایرفاکس',
                y: 10.85
            }, {
                name: 'ادج',
                y: 4.67
            }, {
                name: 'سافاری',
                y: 4.18
            }, {
                name: 'دیگر',
                y: 7.05
            }]
        }]
    });
    // chart 5
    var colors = Highcharts.getOptions().colors,
        categories = ['کروم', 'فایرفاکس', 'اینترنت اکسپلورر', 'سافاری', 'ادج', 'اپرا', 'دیگر'],
        data = [{
            y: 62.74,
            color: colors[2],
            drilldown: {
                name: 'کروم',
                categories: ['کروم نسخه 65', 'کروم نسخه 64', 'کروم نسخه 63', 'کروم نسخه 62', 'کروم نسخه 61', 'کروم نسخه 60', 'کروم نسخه 59', 'کروم نسخه 58', 'کروم نسخه 57', 'کروم نسخه 56', 'کروم نسخه 55', 'کروم نسخه 54', 'کروم نسخه 51', 'کروم نسخه 49', 'کروم نسخه 48', 'کروم نسخه 47', 'کروم نسخه 43', 'کروم نسخه 29'],
                data: [
                    0.1,
                    1.3,
                    53.02,
                    1.4,
                    0.88,
                    0.56,
                    0.45,
                    0.49,
                    0.32,
                    0.29,
                    0.79,
                    0.18,
                    0.13,
                    2.16,
                    0.13,
                    0.11,
                    0.17,
                    0.26
                ]
            }
        }, {
            y: 10.57,
            color: colors[1],
            drilldown: {
                name: 'فایرفاکس',
                categories: ['فایرفاکس نسخه 58', 'فایرفاکس نسخه 57', 'فایرفاکس نسخه 56', 'فایرفاکس نسخه 55', 'فایرفاکس نسخه 54', 'فایرفاکس نسخه 52', 'فایرفاکس نسخه 51', 'فایرفاکس نسخه 50', 'فایرفاکس نسخه 48', 'فایرفاکس نسخه 47'],
                data: [
                    1.02,
                    7.36,
                    0.35,
                    0.11,
                    0.1,
                    0.95,
                    0.15,
                    0.1,
                    0.31,
                    0.12
                ]
            }
        }, {
            y: 7.23,
            color: colors[0],
            drilldown: {
                name: 'اینترنت اکسپلورر',
                categories: ['اینترنت اکسپلورر نسخه 11', 'اینترنت اکسپلورر نسخه 10', 'اینترنت اکسپلورر نسخه 9', 'اینترنت اکسپلورر نسخه 8'],
                data: [
                    6.2,
                    0.29,
                    0.27,
                    0.47
                ]
            }
        }, {
            y: 5.58,
            color: colors[3],
            drilldown: {
                name: 'سافاری',
                categories: ['سافاری نسخه 11', 'سافاری نسخه 10', 'سافاری نسخه 10', 'سافاری نسخه 9', 'سافاری نسخه 9', 'سافاری نسخه 5'],
                data: [
                    3.39,
                    0.96,
                    0.36,
                    0.54,
                    0.13,
                    0.2
                ]
            }
        }, {
            y: 4.02,
            color: colors[5],
            drilldown: {
                name: 'ادج',
                categories: ['ادج 16', 'ادج 15', 'ادج 14', 'ادج 13'],
                data: [
                    2.6,
                    0.92,
                    0.4,
                    0.1
                ]
            }
        }, {
            y: 1.92,
            color: colors[4],
            drilldown: {
                name: 'اپ',
                categories: ['اپرا نسخه v50', 'اپرا نسخه 49', ' اپرا نسخه 12'],
                data: [
                    0.96,
                    0.82,
                    0.14
                ]
            }
        }, {
            y: 7.62,
            color: colors[6],
            drilldown: {
                name: 'دیگر',
                categories: ['دیگر'],
                data: [
                    7.62
                ]
            }
        }],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;
    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {
        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });
        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.color(data[i].color).brighten(brightness).get()
            });
        }
    }
    // Create the chart
    Highcharts.chart('chart5', {
        chart: {
            type: 'pie',
            styledMode: true
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'سهم بازار مرورگر، ژانویه 2018'
        },
        subtitle: {
            text: 'منبع: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'مرورگرها',
            data: browserData,
            size: '60%',
            dataLabels: {
                formatter: function () {
                    return this.y > 5 ? this.point.name : null;
                },
                color: '#ffffff',
                distance: -30
            }
        }, {
            name: 'نسخه',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                    return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + 'درصد' : null;
                }
            },
            id: 'versions'
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 400
                },
                chartOptions: {
                    series: [{}, {
                        id: 'versions',
                        dataLabels: {
                            enabled: false
                        }
                    }]
                }
            }]
        }
    });
    // chart 6
    Highcharts.chart('chart6', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            styledMode: true,
            plotShadow: false
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'سهام<br>مرورگرها<br>2017',
            align: 'center',
            verticalAlign: 'middle',
            y: 60
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}درصد</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },
        series: [{
            type: 'pie',
            name: 'اشتراک مرورگر',
            innerSize: '50%',
            data: [
                ['کروم', 58.9],
                ['فایرفاکس', 13.29],
                ['اینترنت اکسپلورر', 13],
                ['ادج', 3.78],
                ['سافاری', 3.42], {
                    name: 'دیگر',
                    y: 7.61,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
    // chart7
    Highcharts.chart('chart7', {
        chart: {
            type: 'bar',
            styledMode: true
        },
        title: {
            text: 'جمعیت جهان تاریخی بر اساس منطقه'
        },
        subtitle: {
            text: 'منبع: <a href="https://en.wikipedia.org/wiki/World_population">ویکی پدیا</a>'
        },
        xAxis: {
            categories: ['آفریقا', 'آمریکا', 'آسیا', 'اروپا', 'اقیانوسیه'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'جمعیت (میلیون نفر)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' میلیون '
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'سال 1100',
            data: [107, 31, 635, 203, 2]
        }, {
            name: 'سال 1200',
            data: [133, 156, 947, 408, 6]
        }, {
            name: 'سال 1300',
            data: [814, 841, 3714, 727, 31]
        }, {
            name: 'سال 1400',
            data: [1216, 1001, 4436, 738, 40]
        }]
    });
    // chart 8
    Highcharts.chart('chart8', {
        chart: {
            type: 'column',
            styledMode: true
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'میانگین بارندگی ماهانه'
        },
        subtitle: {
            text: 'منبع: WorldClimate.com'
        },
        xAxis: {
            categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'بارندگی (میلی متر)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} میلی متر</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'توکیو',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }, {
            name: 'نیویورک',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
        }, {
            name: 'لندن',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
        }, {
            name: 'برلین',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
        }]
    });
    // chart 9
    Highcharts.chart('chart9', {
        chart: {
            type: 'bar',
            styledMode: true
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'نمودار میله ای انباشته'
        },
        xAxis: {
            categories: ['سیب', 'پرتقال ها', 'گلابی ها', 'انگور', 'موز']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'کل مصرف میوه'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'جان',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'جین',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'جو',
            data: [3, 4, 4, 2, 5]
        }]
    });
    // chart 10
    // Create the chart
    Highcharts.chart('chart10', {
        chart: {
            type: 'column',
            styledMode: true
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'سهم بازار مرورگر ژانویه، 2018'
        },
        subtitle: {
            text: ' منبع . برای مشاهده نسخه ها روی ستون ها کلیک کنید: <a href="http://statcounter.com" target="_blank"> statcounter.com </a>'
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'درصد کل سهم بازار'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}درصد</b> از مجموع<br/>'
        },
        series: [{
            name: "مرورگرها",
            colorByPoint: true,
            data: [{
                name: "کروم",
                y: 62.74,
                drilldown: "Chrome"
            }, {
                name: "فایرفاکس",
                y: 10.57,
                drilldown: "Firefox"
            }, {
                name: "اینترنت اکسپلورر",
                y: 7.23,
                drilldown: "Internet Explorer"
            }, {
                name: "سافاری",
                y: 5.58,
                drilldown: "Safari"
            }, {
                name: "ادج",
                y: 4.02,
                drilldown: "Edge"
            }, {
                name: "اپرا",
                y: 1.92,
                drilldown: "Opera"
            }, {
                name: "دیگر",
                y: 7.62,
                drilldown: null
            }]
        }],
        drilldown: {
            series: [{
                name: "Chrome",
                id: "Chrome",
                data: [
                    ["v65.0",
                        0.1
                    ],
                    ["v64.0",
                        1.3
                    ],
                    ["v63.0",
                        53.02
                    ],
                    ["v62.0",
                        1.4
                    ],
                    ["v61.0",
                        0.88
                    ],
                    ["v60.0",
                        0.56
                    ],
                    ["v59.0",
                        0.45
                    ],
                    ["v58.0",
                        0.49
                    ],
                    ["v57.0",
                        0.32
                    ],
                    ["v56.0",
                        0.29
                    ],
                    ["v55.0",
                        0.79
                    ],
                    ["v54.0",
                        0.18
                    ],
                    ["v51.0",
                        0.13
                    ],
                    ["v49.0",
                        2.16
                    ],
                    ["v48.0",
                        0.13
                    ],
                    ["v47.0",
                        0.11
                    ],
                    ["v43.0",
                        0.17
                    ],
                    ["v29.0",
                        0.26
                    ]
                ]
            }, {
                name: "Firefox",
                id: "Firefox",
                data: [
                    ["v58.0",
                        1.02
                    ],
                    ["v57.0",
                        7.36
                    ],
                    ["v56.0",
                        0.35
                    ],
                    ["v55.0",
                        0.11
                    ],
                    ["v54.0",
                        0.1
                    ],
                    ["v52.0",
                        0.95
                    ],
                    ["v51.0",
                        0.15
                    ],
                    ["v50.0",
                        0.1
                    ],
                    ["v48.0",
                        0.31
                    ],
                    ["v47.0",
                        0.12
                    ]
                ]
            }, {
                name: "Internet Explorer",
                id: "Internet Explorer",
                data: [
                    ["v11.0",
                        6.2
                    ],
                    ["v10.0",
                        0.29
                    ],
                    ["v9.0",
                        0.27
                    ],
                    ["v8.0",
                        0.47
                    ]
                ]
            }, {
                name: "Safari",
                id: "Safari",
                data: [
                    ["v11.0",
                        3.39
                    ],
                    ["v10.1",
                        0.96
                    ],
                    ["v10.0",
                        0.36
                    ],
                    ["v9.1",
                        0.54
                    ],
                    ["v9.0",
                        0.13
                    ],
                    ["v5.1",
                        0.2
                    ]
                ]
            }, {
                name: "Edge",
                id: "Edge",
                data: [
                    ["v16",
                        2.6
                    ],
                    ["v15",
                        0.92
                    ],
                    ["v14",
                        0.4
                    ],
                    ["v13",
                        0.1
                    ]
                ]
            }, {
                name: "Opera",
                id: "Opera",
                data: [
                    ["v50.0",
                        0.96
                    ],
                    ["v49.0",
                        0.82
                    ],
                    ["v12.1",
                        0.14
                    ]
                ]
            }]
        }
    });
    // chart 11
    Highcharts.chart('chart11', {
        chart: {
            type: 'area',
            styledMode: true
        },
        credits: {
            enabled: false
        },
        accessibility: {
            description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSRâ€™s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSRâ€™s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russiaâ€™s 4,500.'
        },
        title: {
            text: 'ذخایر هسته ای ایالات متحده و اتحاد جماهیر شوروی'
        },
        subtitle: {
            text: ' منبع:  <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' + 'thebulletin.org</a> و <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' + 'armscontrol.org</a>'
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            },
            accessibility: {
                rangeDescription: 'Range: 1940 to 2017.'
            }
        },
        yAxis: {
            title: {
                text: 'کشورهای دارای سلاح هسته ای'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'هزار';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} انبار کرده بود <b>{point.y:,.0f}</b><br/>کلاهک در {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 1300,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'امریکا',
            data: [
                null, null, null, null, null, 6, 11, 32, 110, 235,
                369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
                20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
                26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
                21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
                10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
                5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
            ]
        }, {
            name: 'روسیه',
            data: [null, null, null, null, null, null, null, null, null, null,
                5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
                1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
                11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
                30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
                37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
                12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
            ]
        }]
    });
    // chart 12
    Highcharts.chart('chart12', {
        chart: {
            styledMode: true
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'نمودار ترکیبی'
        },
        xAxis: {
            categories: ['سیب', 'پرتقال ها', 'گلابی ها', 'موز', 'آلو']
        },
        labels: {
            items: [{
                html: 'کل مصرف میوه',
                style: {
                    left: '50px',
                    top: '18px',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style && Highcharts.defaultOptions.title.style.color) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: ' جین ',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'column',
            name: ' جان ',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: ' جو ',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'spline',
            name: 'میانگین',
            data: [3, 2.67, 3, 6.33, 3.33],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'کل مصرف',
            data: [{
                name: ' جین ',
                y: 13,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: ' جان ',
                y: 23,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: ' جو ',
                y: 19,
                color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
    // chart 13
    Highcharts.chart('chart13', {
        chart: {
            zoomType: 'xy',
            styledMode: true
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'میانگین دما و بارندگی ماهانه در توکیو'
        },
        subtitle: {
            text: 'منبع : WorldClimate.com'
        },
        xAxis: [{
            categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}درجه سانتی گراد',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'درجه حرارت',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'بارش باران',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} میلی متر',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },
        series: [{
            name: 'بارش باران',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: ' میلی متر'
            }
        }, {
            name: 'درجه حرارت',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                valueSuffix: 'درجه سانتی گراد'
            }
        }]
    });
    // chart 14
    Highcharts.chart('chart14', {
        chart: {
            type: 'column',
            styledMode: true
        },
        title: {
            text: 'نمودار ستونی با مقادیر منفی'
        },
        xAxis: {
            categories: ['سیب', 'پرتقال ها', 'گلابی ها', 'انگور', 'موز']
        },
        credits: {
            enabled: false
        },
        series: [{
            name: ' جان ',
            data: [5, 3, 4, 7, 2]
        }, {
            name: ' جین ',
            data: [2, -2, -3, 2, 1]
        }, {
            name: ' جو ',
            data: [3, 4, 4, -2, 5]
        }]
    });
    // chart 15
    Highcharts.chart('chart15', {
        chart: {
            type: 'column',
            styledMode: true
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'نمودار ستونی انباشته'
        },
        xAxis: {
            categories: ['سیب', 'پرتقال ها', 'گلابی ها', 'انگور', 'موز']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'کل مصرف میوه'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style && Highcharts.defaultOptions.title.style.color) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>مجموع: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: ' جان ',
            data: [5, 3, 4, 7, 2]
        }, {
            name: ' جین ',
            data: [2, 2, 3, 2, 1]
        }, {
            name: ' جو ',
            data: [3, 4, 4, 2, 5]
        }]
    });
});