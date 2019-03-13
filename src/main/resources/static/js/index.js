// index.js负责主页所有图片的绘制和点击绑定
$(function () {

    function getCarCountrySaleMonthArray(data) {
        return Object.values(data).slice(2);
    }

    function ajaxErrorAlert() {
        alert("Error Sending Ajax Request");
    }

    function getTenThousand(data) {
        if (data instanceof Array) {
            for (var i = 0; i < data.length; i++) {
                data[i] = Math.round(data[i] / 10000);
            }
            return data;
        }
        return Math.round(data / 10000);
    }

    function getThousand(data) {
        if (data instanceof Array) {
            for (var i = 0; i < data.length; i++) {
                data[i] = Math.round(data[i] / 1000) / 10;
            }
            return data;
        }
        return Math.round(data / 1000) / 10;
    }

    $.ajax({
        url: "/getAllSaleMonth",
        dataType: "json",
        success: function (data) {
            echart_map(data);
        },
        error: function () {
            ajaxErrorAlert();
        }
    });

    $.ajax({
        url: "/getAllSale",
        dataType: "json",
        success: function (data) {
            echart_1(data);
        },
        error: function () {
            ajaxErrorAlert();
        }
    });

    $.ajax({
        url: "/getCarBrandTop",
        type: "POST",
        dataType: "json",
        success: function (data) {
            echart_2(data);
        },
        error: function () {
            ajaxErrorAlert();
        }
    });


    $.ajax({
        url: "/carPriceRangeSale",
        dataType: "json",
        success: function (data) {
            echart_3(data);
            echart_4(data);
        },
        error: function () {
            ajaxErrorAlert();
        }
    });

    $.ajax({
        url: "/getAllSaleMonth",
        dataType: "json",
        success: function (data) {
            echart_5(data);
            echart_6(data);
            echart_7(data);
        },
        error: function () {
            ajaxErrorAlert();
        }
    });

    //echart_1左上栏目
    function echart_1(data) {
        // 基于准备好的dom, 初始化echarts实例, 使用主题'chalk'
        var myChart = echarts.init(document.getElementById('chart_1'), 'chalk');
        var option = {
            title: {
                text: "轿车 / SUV / MPV",
                subtext: "销量占比",
                x: "center"
            },
            tooltip: {
                trigger: "item",
                formatter: "{b}{a}:<br/>{c}万 ({d}%)"
            },
            legend: {
                orient: "vertical",
                x: "left",
                data: [data[0].brand, data[1].brand, data[2].brand]
            },
            calculable: true,
            series: [
                {
                    name: "总销量",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "60%"],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: "{b}\n{c}万"
                            }
                        }
                    },
                    data: [
                        {
                            value: getTenThousand(data[0].saleAmount),
                            name: data[0].brand
                        },
                        {
                            value: getTenThousand(data[1].saleAmount),
                            name: data[1].brand
                        },
                        {
                            value: getTenThousand(data[2].saleAmount),
                            name: data[2].brand
                        }
                    ]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //echart_2左中栏目
    function echart_2(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'), 'chalk');

        myChart.setOption({
            title: {
                text: "汽车品牌",
                subtext: "排行榜",
                x: "center"
            },
            tooltip: {
                trigger: "axis",
                formatter: "{a}{b}总销量: {c}万辆"
            },
            legend: {
                data: "2018年"
            },
            toolbox: {
                show: false,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: true
                    },
                    magicType: {
                        show: false,
                        type: ["line", "bar"]
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: "value",
                    boundaryGap: ['5%', '5%']
                }
            ],
            yAxis: [
                {
                    type: "category",
                    data: [data[4].brand, data[3].brand, data[2].brand, data[1].brand, data[0].brand]
                }
            ],
            series: [
                {
                    name: "2018年",
                    type: "bar",
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = [
                                    "#fc97af",
                                    "#87f7cf",
                                    "#f7f494",
                                    "#72ccff",
                                    "#f7c5a0",
                                    "#d4a4eb",
                                    "#d2f5a6",
                                    "#76f2f2",
                                    "#ef72ff",
                                    "#7de485"];
                                return colorList[params.dataIndex];
                            },
                            label: {
                                color: '#ffffff',
                                show: true,
                                position: 'right',
                                formatter:"{c}万"
                            },
                        }
                    },
                    data: getTenThousand([data[4].saleAmount, data[3].saleAmount, data[2].saleAmount,
                        data[1].saleAmount, data[0].saleAmount])
                }
            ]
        });

        // 使用刚指定的配置项和数据显示图表。
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }


// echart_map中间栏目
function echart_map(data) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_map'), 'chalk');

    var option = {
        title: {
            text: "全国汽车堆积销量",
            subtext: "每月走势图",
            x: "center"
        },
        tooltip: {
            trigger: "axis"
        },
        legend: {
            x: "left",
            data: ["轿车销量", "SUV销量", "MPV销量"]
        },
        toolbox: {
            show: false,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar", "stack", "tiled"]
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
            }
        ],
        yAxis: [
            {
                type: "value"
            }
        ],
        series: [
            {
                name: "轿车销量",
                type: "line",
                smooth: false,
                stack: "总量",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                },
                data: getThousand(getCarCountrySaleMonthArray(data[0]))
            },
            {
                name: "SUV销量",
                type: "line",
                smooth: false,
                stack: "总量",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                },
                data: getThousand(getCarCountrySaleMonthArray(data[1]))
            },
            {
                name: "MPV销量",
                type: "line",
                smooth: false,
                stack: "总量",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                },
                data: getThousand(getCarCountrySaleMonthArray(data[2]))
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//echart_3右上栏目
function echart_3(data) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_3'), 'chalk');

    var option =
        {
            title: {
                text: "汽车价格区间",
                subtext: "占比图",
                x: "center"
            },
            tooltip: {
                trigger: "item",
                formatter: "{b}销量:<br/> {c}万 ({d}%)"
            },
            legend: {
                orient: "vertical",
                x: "left",
                data: ["0-10万", "10-15万", "15-25万", "25-35万", "35-50万", "50万以上"]
            },
            calculable: true,
            series: [
                {
                    name: "汽车销量",
                    type: "pie",
                    radius: [45, 85],
                    center: ["50%", "50%"],
                    roseType: "radius",
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        },
                        emphasis: {
                            label: {
                                show: true
                            },
                            labelLine: {
                                show: true
                            }
                        }
                    },
                    data: [
                        {
                            value: getThousand(data[0].saleAmount),
                            name: "0-10万"
                        },
                        {
                            value: getThousand(data[1].saleAmount),
                            name: "10-15万"
                        },
                        {
                            value: getThousand(data[2].saleAmount),
                            name: "15-25万"
                        },
                        {
                            value: getThousand(data[3].saleAmount),
                            name: "25-35万"
                        },
                        {
                            value: getThousand(data[4].saleAmount),
                            name: "35-50万"
                        },
                        {
                            value: getThousand(data[5].saleAmount),
                            name: "50万以上"
                        }
                    ]
                }
            ]
        };

    myChart.setOption(option);
}

//右中栏目
function echart_4(data) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_4'), 'chalk');

    var option = {
        title: {
            text: "车辆价格区间",
            subtext: "Top榜",
            x: "center"
        },
        grid: {
            x: 75
        },
        tooltip: {
            trigger: "axis",
            formatter: "{b}{a}:{c}万"
        },
        legend: {
            data: ["销售量"],
            x: "left"
        },
        calculable: true,
        xAxis: [
            {
                type: "value",
                boundaryGap: [0, "5%"]
            }
        ],
        yAxis: [
            {
                type: "category",
                data: ["50万以上", "35-50万", "25-35万", "0-10万", "15-25万", "10-15万"]
            }
        ],
        series: [
            {
                name: "销售量",
                type: "bar",
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [
                                "#fc97af",
                                "#87f7cf",
                                "#f7f494",
                                "#72ccff",
                                "#f7c5a0",
                                "#d4a4eb",
                                "#d2f5a6",
                                "#76f2f2",
                                "#ef72ff",
                                "#7de485"];
                            return colorList[params.dataIndex];
                        },
                        label: {
                            color: '#ffffff',
                            show: true,
                            position: 'right',
                            formatter:"{c}万"
                        }
                    }
                },
                data: getThousand([data[5].saleAmount, data[4].saleAmount, data[3].saleAmount, data[0].saleAmount, data[2].saleAmount, data[1].saleAmount])
            }
        ]
    };
    myChart.setOption(option);

}

//下一栏目
function echart_5(data) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_5'), 'chalk');
    var option = {
        title: {
            text: "轿车各月销量走势图",
            x: "center"
        },
        tooltip: {
            trigger: "axis",
            formatter: "{b}销量:<br/>{c}万"
        },
        legend: {
            data: ["销量"],
            x: "left"
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar"]
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: "category",
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
            }
        ],
        yAxis: [
            {
                type: "value"
            }
        ],
        color: function (params) {
            var colorList = [
                "#fc97af",
                "#87f7cf",
                "#f7f494",
                "#72ccff",
                "#f7c5a0",
                "#d4a4eb",
                "#d2f5a6",
                "#76f2f2",
                "#ef72ff",
                "#7de485",
                "#99ccff",
                "#39b5cc"];
            return colorList[params.dataIndex];
        },
        series: [
            {
                name: "销量",
                type: "bar",
                data: getThousand(getCarCountrySaleMonthArray(data[0])),
                itemStyle: {
                    normal: {
                        label: {
                            color: '#ffffff',
                            show: false,
                            position: 'top',
                            formatter:"{c}万"
                        }
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function echart_6(data) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_6'), 'chalk');
    var option = {
        title: {
            text: "SUV各月销量走势图",
            x: "center"
        },
        tooltip: {
            trigger: "axis",
            formatter: "{b}销量:<br/>{c}万"
        },
        legend: {
            data: ["销量"],
            x: "left"
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar"]
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        color: function (params) {
            var colorList = [
                "#fc97af",
                "#87f7cf",
                "#f7f494",
                "#72ccff",
                "#f7c5a0",
                "#d4a4eb",
                "#d2f5a6",
                "#76f2f2",
                "#ef72ff",
                "#7de485",
                "#99ccff",
                "#39b5cc"];
            return colorList[params.dataIndex];
        },
        xAxis: [
            {
                type: "category",
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
            }
        ],
        yAxis: [
            {
                type: "value"
            }
        ],
        series: [
            {
                name: "销量",
                type: "bar",
                data: getThousand(getCarCountrySaleMonthArray(data[1]))
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function echart_7(data) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_7'), 'chalk');
    var option = {
        title: {
            text: "MPV各月销量走势图",
            x: "center"
        },
        tooltip: {
            trigger: "axis",
            formatter: "{b}销量:<br/>{c}万"
        },
        legend: {
            data: ["销量"],
            x: "left"
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar"]
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        color: function (params) {
            var colorList = [
                "#fc97af",
                "#87f7cf",
                "#f7f494",
                "#72ccff",
                "#f7c5a0",
                "#d4a4eb",
                "#d2f5a6",
                "#76f2f2",
                "#ef72ff",
                "#7de485",
                "#99ccff",
                "#39b5cc"];
            return colorList[params.dataIndex];
        },
        xAxis: [
            {
                type: "category",
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
            }
        ],
        yAxis: [
            {
                type: "value"
            }
        ],
        series: [
            {
                name: "销量",
                type: "bar",
                data: getThousand(getCarCountrySaleMonthArray(data[2]))
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//点击跳转
$('#chart_map').click(function () {
    window.location.href = './page/index.html';
});
$('.t_btn2').click(function () {
    window.location.href = "./page/index.html?id=2";
});
$('.t_btn3').click(function () {
    window.location.href = "./page/index.html?id=3";
});
$('.t_btn4').click(function () {
    window.location.href = "./page/index.html?id=4";
});
$('.t_btn5').click(function () {
    window.location.href = "./page/index.html?id=5";
});
$('.t_btn6').click(function () {
    window.location.href = "./page/index.html?id=6";
});
$('.t_btn7').click(function () {
    window.location.href = "./page/index.html?id=7";
});
$('.t_btn8').click(function () {
    window.location.href = "./page/index.html?id=8";
});
$('.t_btn9').click(function () {
    window.location.href = "./page/index.html?id=9";
});
})
;
