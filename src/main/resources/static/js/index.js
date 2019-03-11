// index.js负责主页所有图片的绘制和点击绑定
$(function () {

    function getCarCountrySaleMonthArray(data) {
        return Object.values(data).slice(2);
    }

    function ajaxErrorAlert() {
        alert("Error Sending Ajax Request");
    }

    $.ajax({
        url: "/car/TotalSaleMonth",
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
                text: "轿车、SUV、MPV",
                subtext: "销量占比",
                x: "center"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                x: "left",
                data: [data[0].brand, data[1].brand, data[2].brand]
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
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            series: [
                {
                    name: "销量总数",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "60%"],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: "{b}: {c} ({d}%)"
                            }
                        }
                    },
                    data: [
                        {
                            value: data[0].saleAmount,
                            name: data[0].brand
                        },
                        {
                            value: data[1].saleAmount,
                            name: data[1].brand
                        },
                        {
                            value: data[2].saleAmount,
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

        function showProvince() {
            myChart.setOption({
                title: {
                    text: "汽车品牌排行",
                    subtext: "数据来自网络"
                },
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    data: "2018年"
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
                        type: "value",
                        boundaryGap: [0, 0.01]
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
                        data: [data[4].saleAmount, data[3].saleAmount, data[2].saleAmount,
                            data[1].saleAmount, data[0].saleAmount]
                    }
                ]
            });
        }

        showProvince();
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
                text: "全国汽车销量走势图"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["汽车销量"]
            },
            toolbox: {
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
            series: [
                {
                    name: "汽车销量",
                    type: "bar",
                    data: [data.month1, data.month2, data.month3, data.month4, data.month5, data.month6, data.month7, data.month8, data.month9, data.month10, data.month11, data.month12]
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
        myChart.clear();
        var option =
            {
                title: {
                    text: "价格区间占比图",
                    x: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: "vertical",
                    x: "left",
                    data: ["0-10", "10-15", "15-25", "25-35", "35-50", "50-"]
                },

                calculable: true,
                series: [
                    {
                        name: "汽车销量",
                        type: "pie",
                        radius: "55%",
                        center: ["50%", "60%"],
                        data: [
                            {
                                value: data[0].saleAmount,
                                name: "0-10"
                            },
                            {
                                value: data[1].saleAmount,
                                name: "10-15"
                            },
                            {
                                value: data[2].saleAmount,
                                name: "15-25"
                            },
                            {
                                value: data[3].saleAmount,
                                name: "25-35"
                            },
                            {
                                value: data[4].saleAmount,
                                name: "35-50"
                            },
                            {
                                value: data[5].saleAmount,
                                name: "50-"
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
                text: "价格区间TOP"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["销售量"]
            },
            toolbox: {
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
                    boundaryGap: [0, 0.01]
                }
            ],
            yAxis: [
                {
                    type: "category",
                    data: ["50-", "35-50", "25-35", "0-10", "15-25", "10-15"]
                }
            ],
            series: [
                {
                    name: "销售量",
                    type: "bar",
                    data: [data[5].saleAmount, data[4].saleAmount, data[3].saleAmount, data[0].saleAmount, data[2].saleAmount, data[1].saleAmount]
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
                text: "轿车各月销量走势图"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["销量"]
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
            series: [
                {
                    name: "销量",
                    type: "bar",
                    data: getCarCountrySaleMonthArray(data[0])
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
                text: "SUV各月销量走势图"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["销量"]
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
            series: [
                {
                    name: "销量",
                    type: "bar",
                    data: getCarCountrySaleMonthArray(data[1])
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
                text: "MPV各月销量走势图"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["销量"]
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
            series: [
                {
                    name: "销量",
                    type: "bar",
                    data: getCarCountrySaleMonthArray(data[2])
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
});
