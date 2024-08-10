$(function () {
    "use strict";
    // chart 1
    var ctx = document.getElementById('chart1').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه', 'یکشنبه'],
            datasets: [{
                label: 'گوگل',
                data: [6, 20, 14, 12, 17, 8, 10],
                backgroundColor: "transparent",
                borderColor: "#3461ff",
                pointRadius: "0",
                borderWidth: 4
            }, {
                label: 'فیسبوک',
                data: [5, 30, 16, 23, 8, 14, 11],
                backgroundColor: "transparent",
                borderColor: "#0c971a",
                pointRadius: "0",
                borderWidth: 4
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: true,
                labels: {
                    fontColor: '#585757',
                    boxWidth: 40
                }
            },
            tooltips: {
                enabled: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: '#585757'
                    },
                    gridLines: {
                        display: true,
                        color: "rgba(0, 0, 0, 0.07)"
                    },

                }],

                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: '#585757'
                    },
                    gridLines: {
                        display: true,
                        color: "rgba(0, 0, 0, 0.07)"
                    },
                }]
            }
        }
    });
    // chart 2
    var ctx = document.getElementById("chart2").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه', 'یکشنبه'],
            datasets: [{
                label: 'گوگل',
                data: [13, 8, 20, 4, 18, 29, 25],
                barPercentage: .5,
                backgroundColor: "#3461ff"
            }, {
                label: 'فیسبوک',
                data: [31, 20, 6, 16, 21, 4, 11],
                barPercentage: .5,
                backgroundColor: "#7997ff"
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: true,
                labels: {
                    fontColor: '#585757',
                    boxWidth: 40
                }
            },
            tooltips: {
                enabled: true
            },
            scales: {
                xAxes: [{
                    barPercentage: .4,
                    ticks: {
                        beginAtZero: true,
                        fontColor: '#585757'
                    },
                    gridLines: {
                        display: true,
                        color: "rgba(0, 0, 0, 0.07)"
                    },
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: '#585757'
                    },
                    gridLines: {
                        display: true,
                        color: "rgba(0, 0, 0, 0.07)"
                    },
                }]
            }
        }
    });
    // chart 3
    new Chart(document.getElementById("chart3"), {
        type: 'pie',
        data: {
            labels: ["آفریقا", "آسیا", "اروپا", "آمریکای لاتین", "آمریکای شمالی"],
            datasets: [{
                label: "جمعیت (میلیون نفر)",
                backgroundColor: ["#0d6efd", "#212529", "#17a00e", "#f41127", "#ffc107"],
                data: [2478, 5267, 734, 784, 433]
            }]
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'پیش بینی جمعیت جهان (میلیون ها) در سال 2050'
            }
        }
    });
    // chart 4
    new Chart(document.getElementById("chart4"), {
        type: 'radar',
        data: {
            labels: ["آفریقا", "آسیا", "اروپا", "آمریکای لاتین", "آمریکای شمالی"],
            datasets: [{
                label: "1950",
                fill: true,
                backgroundColor: "rgb(13 110 253 / 23%)",
                borderColor: "#0d6efd",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(179,181,198,1)",
                data: [8.77, 55.61, 21.69, 6.62, 6.82]
            }, {
                label: "2050",
                fill: true,
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(255,99,132,1)",
                // pointBorderColor: "#fff",
                data: [25.48, 54.16, 7.61, 8.06, 4.45]
            }]
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'توزیع بر حسب درصد جمعیت جهان'
            }
        }
    });
    // chart 5
    new Chart(document.getElementById("chart5"), {
        type: 'polarArea',
        data: {
            labels: ["آفریقا", "آسیا", "اروپا", "آمریکای لاتین", "آمریکای شمالی"],
            datasets: [{
                label: "جمعیت (میلیون نفر)",
                backgroundColor: ["#0d6efd", "#212529", "#17a00e", "#f41127", "#ffc107"],
                data: [2478, 5267, 734, 784, 433]
            }]
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'پیش بینی جمعیت جهان (میلیون ها) در سال 2050'
            }
        }
    });
    // chart 6
    new Chart(document.getElementById("chart6"), {
        type: 'doughnut',
        data: {
            labels: ["آفریقا", "آسیا", "اروپا", "آمریکای لاتین", "آمریکای شمالی"],
            datasets: [{
                label: "جمعیت (میلیون نفر)",
                backgroundColor: ["#0d6efd", "#212529", "#17a00e", "#f41127", "#ffc107"],
                data: [2478, 5267, 734, 784, 433]
            }]
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'پیش بینی جمعیت جهان (میلیون ها) در سال 2050'
            }
        }
    });
    // chart 7
    new Chart(document.getElementById("chart7"), {
        type: 'horizontalBar',
        data: {
            labels: ["آفریقا", "آسیا", "اروپا", "آمریکای لاتین", "آمریکای شمالی"],
            datasets: [{
                label: "جمعیت (میلیون نفر)",
                backgroundColor: ["#0d6efd", "#212529", "#17a00e", "#f41127", "#ffc107"],
                data: [2478, 5267, 734, 784, 433]
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'پیش بینی جمعیت جهان (میلیون ها) در سال 2050'
            }
        }
    });
    // chart 8
    new Chart(document.getElementById("chart8"), {
        type: 'bar',
        data: {
            labels: ["1900", "1950", "1999", "2050"],
            datasets: [{
                label: "آفریقا",
                backgroundColor: "#0d6efd",
                data: [133, 221, 783, 2478]
            }, {
                label: "اروپا",
                backgroundColor: "#f41127",
                data: [408, 547, 675, 734]
            }]
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'رشد جمعیت (میلیون ها)'
            }
        }
    });
    // chart 9
    new Chart(document.getElementById("chart9"), {
        type: 'bar',
        data: {
            labels: ["1900", "1950", "1999", "2050"],
            datasets: [{
                label: "اروپا",
                type: "line",
                borderColor: "#673ab7",
                data: [408, 547, 675, 734],
                fill: false
            }, {
                label: "آفریقا",
                type: "line",
                borderColor: "#f02769",
                data: [133, 221, 783, 2478],
                fill: false
            }, {
                label: "اروپا",
                type: "bar",
                backgroundColor: "rgba(0,0,0,0.2)",
                data: [408, 547, 675, 734],
            }, {
                label: "آفریقا",
                type: "bar",
                backgroundColor: "rgba(0,0,0,0.2)",
                backgroundColorHover: "#3e95cd",
                data: [133, 221, 783, 2478]
            }]
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'رشد جمعیت (میلیون ها): اروپا و آفریقا'
            },
            legend: {
                display: false
            }
        }
    });
    // chart 10
    new Chart(document.getElementById("chart10"), {
        type: 'bubble',
        data: {
            labels: "Africa",
            datasets: [{
                label: ["چین"],
                backgroundColor: "#17a00e",
                borderColor: "#17a00e",
                data: [{
                    x: 21269017,
                    y: 5.245,
                    r: 15
                }]
            }, {
                label: ["دانمارک"],
                backgroundColor: "#ffc107",
                borderColor: "#ffc107",
                data: [{
                    x: 258702,
                    y: 7.526,
                    r: 10
                }]
            }, {
                label: ["آلمان"],
                backgroundColor: "#17a00e",
                borderColor: "#17a00e",
                data: [{
                    x: 3979083,
                    y: 6.994,
                    r: 15
                }]
            }, {
                label: ["ژاپن"],
                backgroundColor: "#f41127",
                borderColor: "#f41127",
                data: [{
                    x: 4931877,
                    y: 5.921,
                    r: 15
                }]
            }]
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'پیش بینی جمعیت جهان (میلیون ها) در سال 2050'
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "خوشبختی"
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "تولید ناخالص داخلی"
                    }
                }]
            }
        }
    });
});