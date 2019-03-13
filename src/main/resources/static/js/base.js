// base.js 中绘制15张图, 绑定按钮显示, 并根据地址栏的id判断显示哪一张图
$(function () {

    function ajaxErrorAlert() {
        alert("Error Sending Ajax Request");
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

    function toPoint(str) {
        return str.replace("%", "");
    }

    // 第1个button, chart_map
    function echart_map(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_map'), 'chalk');

        var option = {
            title: {
                text: "轿车各车系占比图",
                x: "left"
            },
            tooltip: {
                trigger: "item",
                formatter: "{b} : {c}万辆 ({d}%)"
            },
            legend: {
                x: "center",
                data: ["美系", "英系", "自主", "法系", "德系", "日系", "意系", "瑞典系", "韩系"]
            },
            calculable: true,
            series: [
                {
                    name: "汽车销量",
                    type: "pie",
                    radius: ["50%", "70%"],
                    center: ["50%", "60%"],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: "{b}: {d}%"
                            }
                        }
                    },
                    data: [
                        {
                            value: getThousand(data[8].saleAmount),
                            name: "美系"
                        },
                        {
                            value: getThousand(data[7].saleAmount),
                            name: "英系"
                        },
                        {
                            value: getThousand(data[6].saleAmount),
                            name: "自主"
                        },
                        {
                            value: getThousand(data[5].saleAmount),
                            name: "法系"
                        },
                        {
                            value: getThousand(data[4].saleAmount),
                            name: "德系"
                        },
                        {
                            value: getThousand(data[2].saleAmount),
                            name: "日系"
                        },
                        {
                            value: getThousand(data[3].saleAmount),
                            name: "意系"
                        },
                        {
                            value: getThousand(data[0].saleAmount),
                            name: "瑞典系"
                        },
                        {
                            value: getThousand(data[1].saleAmount),
                            name: "韩系"
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

    // 第2个button, chart_4
    function echart_4(data) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById('chart_4'), 'chalk');
        var option = {
            title: {
                text: "轿车各车系每月走势图",
                x: "left"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["美系", "英系", "自主", "法系", "德系", "意系", "日系", "韩系", "瑞典系"],
                x: "center",
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
                    type: "value",
                    name: "万辆"
                }
            ],
            series: [
                {
                    name: "美系",
                    type: "line",
                    data: getThousand([data[0].month1, data[0].month2, data[0].month3, data[0].month4, data[0].month5, data[0].month6, data[0].month7, data[0].month8, data[0].month9, data[0].month10, data[0].month11, data[0].month12])
                },
                {
                    name: "英系",
                    type: "line",
                    data: getThousand([data[1].month1, data[1].month2, data[1].month3, data[1].month4, data[1].month5, data[1].month6, data[1].month7, data[1].month8, data[1].month9, data[1].month10, data[1].month11, data[1].month12])
                },
                {
                    name: "自主",
                    type: "line",
                    data: getThousand([data[2].month1, data[2].month2, data[2].month3, data[2].month4, data[2].month5, data[2].month6, data[2].month7, data[2].month8, data[2].month9, data[2].month10, data[2].month11, data[2].month12])
                },
                {
                    type: "line",
                    name: "法系",
                    data: getThousand([data[3].month1, data[3].month2, data[3].month3, data[3].month4, data[3].month5, data[3].month6, data[3].month7, data[3].month8, data[3].month9, data[3].month10, data[3].month11, data[3].month12])
                },
                {
                    type: "line",
                    name: "德系",
                    data: getThousand([data[4].month1, data[4].month2, data[4].month3, data[4].month4, data[4].month5, data[4].month6, data[4].month7, data[4].month8, data[4].month9, data[4].month10, data[4].month11, data[4].month12])
                },
                {
                    type: "line",
                    name: "意系",
                    data: getThousand([data[5].month1, data[5].month2, data[5].month3, data[5].month4, data[5].month5, data[5].month6, data[5].month7, data[5].month8, data[5].month9, data[5].month10, data[5].month11, data[5].month12])
                },
                {
                    type: "line",
                    name: "日系",
                    data: getThousand([data[6].month1, data[6].month2, data[6].month3, data[6].month4, data[6].month5, data[6].month6, data[6].month7, data[6].month8, data[6].month9, data[6].month10, data[6].month11, data[6].month12])
                },
                {
                    type: "line",
                    name: "韩系",
                    data: getThousand([data[7].month1, data[7].month2, data[7].month3, data[7].month4, data[7].month5, data[7].month6, data[7].month7, data[7].month8, data[7].month9, data[7].month10, data[7].month11, data[7].month12])
                },
                {
                    type: "line",
                    name: "瑞典系",
                    data: getThousand([data[8].month1, data[8].month2, data[8].month3, data[8].month4, data[8].month5, data[8].month6, data[8].month7, data[8].month8, data[8].month9, data[8].month10, data[8].month11, data[8].month12])
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // 第3个button, chart_14
    function echart_14(data1, data2, data3, data4, data5, data6) {
        var myChart = echarts.init(document.getElementById('chart_14'), 'chalk');

        var option = {
            title: {
                text: "轿车各车系销量TOP3"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["TOP1", "TOP2", "TOP3"]
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
                    data: ["美系", "自主", "法系", "德系", "日系", "韩系"]
                }
            ],
            series: [
                {
                    name: "TOP1",
                    type: "bar",
                    data: [
                        {
                            value: getThousand(data1[0].saleAmount),
                            name: data1[0].brand
                        },
                        {
                            value: getThousand(data2[0].saleAmount),
                            name: data2[0].brand
                        },
                        {
                            value: getThousand(data3[0].saleAmount),
                            name: data3[0].brand
                        },
                        {
                            value: getThousand(data4[0].saleAmount),
                            name: data4[0].brand
                        },
                        {
                            value: getThousand(data5[0].saleAmount),
                            name: data5[0].brand
                        },
                        {
                            value: getThousand(data6[0].saleAmount),
                            name: data6[0].brand
                        }
                    ],
                    itemStyle: {
                        normal: {
                            label: {
                                color: '#ffffff',
                                show: true,
                                position: 'right',
                                formatter: "{b}: {c}万辆"
                            }
                        }
                    }
                },
                {
                    name: "TOP2",
                    type: "bar",
                    data: [
                        {
                            value: getThousand(data1[1].saleAmount),
                            name: data1[1].brand
                        },
                        {
                            value: getThousand(data2[1].saleAmount),
                            name: data2[1].brand
                        },
                        {
                            value: getThousand(data3[1].saleAmount),
                            name: data3[1].brand
                        },
                        {
                            value: getThousand(data4[1].saleAmount),
                            name: data4[1].brand
                        },
                        {
                            value: getThousand(data5[1].saleAmount),
                            name: data5[1].brand
                        },
                        {
                            value: getThousand(data6[1].saleAmount),
                            name: data6[1].brand
                        }
                    ],
                    itemStyle: {
                        normal: {
                            label: {
                                color: '#ffffff',
                                show: true,
                                position: 'right',
                                formatter: "{b}: {c}万辆"
                            }
                        }
                    }
                },
                {
                    name: "TOP3",
                    type: "bar",
                    data: [
                        {
                            value: getThousand(data1[2].saleAmount),
                            name: data1[2].brand
                        },
                        {
                            value: getThousand(data2[2].saleAmount),
                            name: data2[2].brand
                        },
                        {
                            value: getThousand(data3[2].saleAmount),
                            name: data3[2].brand
                        },
                        {
                            value: getThousand(data4[2].saleAmount),
                            name: data4[2].brand
                        },
                        {
                            value: getThousand(data5[2].saleAmount),
                            name: data5[2].brand
                        },
                        {
                            value: getThousand(data6[2].saleAmount),
                            name: data6[2].brand
                        }
                    ],
                    itemStyle: {
                        normal: {
                            label: {
                                color: '#ffffff',
                                show: true,
                                position: 'right',
                                formatter: "{b}: {c}万辆"
                            }
                        }
                    }
                }

            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
        // 获取百度地图实例，使用百度地图自带的控件
        // var bmap = myChart.getModel().getComponent('bmap').getBMap();
        // bmap.addControl(new BMap.NavigationControl());  //左侧缩放；
        // bmap.enableDragging();   //开启拖拽
        //
        // var opts = {
        //     offset: {height: -5, width: 5},
        //     width: 250,     // 信息窗口宽度
        //     height: 150,     // 信息窗口高度
        //     title: "", // 信息窗口标题
        //     enableMessage: true//设置允许信息窗发送短息
        // };
        // for (var i = 0; i < data.length; i++) {
        //     var icon = new BMap.Icon('../images/ico.png', new BMap.Size(10, 10), {
        //         anchor: new BMap.Size(5, 5)
        //     });
        //     var marker = new BMap.Marker(new BMap.Point(geoCoordMap[data[i].name][0], geoCoordMap[data[i].name][1]), {icon: icon});  // 创建标注
        //     var content = "<b>" + data[i].name + "</b><br><br>" +
        //         "园区地址：" + data[i].address + "<br>" +
        //         "园区类型：" + data[i].typeName + "<br>" +
        //         "园区面积：" + data[i].area + "<br>" +
        //         "入驻企业：" + data[i].value + "家<br>" +
        //         "服务范围：" + data[i].service;
        //
        //     bmap.addOverlay(marker);               // 将标注添加到地图中
        //     addClickHandler(content, marker);
        // }
        //
        // function addClickHandler(content, marker) {
        //     marker.addEventListener("mouseover", function (e) {
        //         openInfo(content, e);
        //     });
        //     marker.addEventListener("mouseout", function (e) {
        //         bmap.closeInfoWindow(); //关闭信息窗口
        //     });
        // }
        //
        // function openInfo(content, e) {
        //     var p = e.target;
        //     var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        //     var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象
        //     bmap.openInfoWindow(infoWindow, point); //开启信息窗口
        // }
    }

    // 第4个button, chart_13
    function echart_13(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_13'), 'chalk');

        var option = {
            title: {
                text: "SUV各车系占比图",
                x: "left"
            },
            tooltip: {
                trigger: "item",
                formatter: "{b} : {c}万辆 ({d}%)"
            },
            legend: {
                x: "center",
                data: ["美系", "英系", "自主", "法系", "德系", "日系", "韩系", "瑞士系"]
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
                    name: "汽车销量",
                    type: "pie",
                    radius: ["50%", "70%"],
                    center: ["50%", "60%"],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: "{b}: {d}%"
                            }
                        }
                    },
                    data: [
                        {
                            value: getThousand(data[0].saleAmount),
                            name: "美系"
                        },
                        {
                            value: getThousand(data[1].saleAmount),
                            name: "英系"
                        },
                        {
                            value: getThousand(data[2].saleAmount),
                            name: "自主"
                        },
                        {
                            value: getThousand(data[3].saleAmount),
                            name: "法系"
                        },
                        {
                            value: getThousand(data[4].saleAmount),
                            name: "德系"
                        },
                        {
                            value: getThousand(data[5].saleAmount),
                            name: "日系"
                        },
                        {
                            value: getThousand(data[6].saleAmount),
                            name: "韩系"
                        },
                        {
                            value: getThousand(data[7].saleAmount),
                            name: "瑞士系"
                        }
                    ]
                }
            ]
        };
        myChart.setOption(option);
        // 使用刚指定的配置项和数据显示图表。
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // 第5个button, chart_0
    function echart_0(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_0'), 'chalk');
        var option = {
            title: {
                text: "SUV各车系每月走势图",
                x: "left"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["德系", "法系", "韩系", "美系", "日系", "自主"],
                x: "center"
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
                    type: "category",
                    boundaryGap: false,
                    data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                }
            ],
            yAxis: [
                {
                    type: "value",
                    name: "万辆"
                }
            ],
            series: [
                {
                    name: "德系",
                    type: "line",
                    data: getThousand(Object.values(data[0]).slice(2))
                },
                {
                    name: "法系",
                    type: "line",
                    data: getThousand(Object.values(data[1]).slice(2))
                },
                {
                    name: "韩系",
                    type: "line",
                    data: getThousand(Object.values(data[2]).slice(2))
                },
                {
                    name: "美系",
                    type: "line",
                    data: getThousand(Object.values(data[3]).slice(2))
                },
                {
                    name: "日系",
                    type: "line",
                    data: getThousand(Object.values(data[4]).slice(2))
                },
                {
                    name: "自主",
                    type: "line",
                    data: getThousand(Object.values(data[5]).slice(2))
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // 第6个button, chart_6
    function echart_6(data1, data2, data3, data4, data5, data6, data7) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_6'), 'chalk');
        var option = {
            title: {
                text: "SUV各车系销量TOP3"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["TOP1", "TOP2", "TOP3"]
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
                    boundaryGap: [0, 0.01]
                }
            ],
            yAxis: [
                {
                    type: "category",
                    data: ["韩系", "日系", "德系", "法系", "自主", "英系", "美系"]
                }
            ],
            series: [
                {
                    name: "TOP1",
                    type: "bar",
                    data: [
                        {
                            value: getThousand(data7[0].saleAmount),
                            name: data7[0].brand
                        },
                        {
                            value: getThousand(data6[0].saleAmount),
                            name: data6[0].brand
                        },
                        {
                            value: getThousand(data5[0].saleAmount),
                            name: data5[0].brand
                        },
                        {
                            value: getThousand(data4[0].saleAmount),
                            name: data4[0].brand
                        },
                        {
                            value: getThousand(data3[0].saleAmount),
                            name: data3[0].brand
                        },
                        {
                            value: getThousand(data2[0].saleAmount),
                            name: data2[0].brand
                        },
                        {
                            value: getThousand(data1[0].saleAmount),
                            name: data1[0].brand
                        }
                    ],
                    itemStyle: {
                        normal: {
                            label: {
                                color: '#ffffff',
                                show: true,
                                position: 'right',
                                formatter: "{b}: {c}万辆"
                            }
                        }
                    }
                },
                {
                    name: "TOP2",
                    type: "bar",
                    data: [
                        {
                            value: getThousand(data7[1].saleAmount),
                            name: data7[1].brand
                        },
                        {
                            value: getThousand(data6[1].saleAmount),
                            name: data6[1].brand
                        },
                        {
                            value: getThousand(data5[1].saleAmount),
                            name: data5[1].brand
                        },
                        {
                            value: getThousand(data4[1].saleAmount),
                            name: data4[1].brand
                        },
                        {
                            value: getThousand(data3[1].saleAmount),
                            name: data3[1].brand
                        },
                        {
                            value: getThousand(data2[1].saleAmount),
                            name: data2[1].brand
                        },
                        {
                            value: getThousand(data1[1].saleAmount),
                            name: data1[1].brand
                        }
                    ],
                    itemStyle: {
                        normal: {
                            label: {
                                color: '#ffffff',
                                show: true,
                                position: 'right',
                                formatter: "{b}: {c}万辆"
                            }
                        }
                    }

                },
                {
                    name: "TOP3",
                    type: "bar",
                    data: [
                        {
                            value: getThousand(data7[2].saleAmount),
                            name: data7[2].brand
                        },
                        {
                            value: getThousand(data6[2].saleAmount),
                            name: data6[2].brand
                        },
                        {
                            value: getThousand(data5[2].saleAmount),
                            name: data5[2].brand
                        },
                        {
                            value: getThousand(data4[2].saleAmount),
                            name: data4[2].brand
                        },
                        {
                            value: getThousand(data3[2].saleAmount),
                            name: data3[2].brand
                        },
                        {
                            value: getThousand(data2[2].saleAmount),
                            name: data2[2].brand
                        },
                        {
                            value: getThousand(data1[2].saleAmount),
                            name: data1[2].brand
                        }
                    ],
                    itemStyle: {
                        normal: {
                            label: {
                                color: '#ffffff',
                                show: true,
                                position: 'right',
                                formatter: "{b}: {c}万辆"
                            }
                        }
                    }

                }

            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // 第7个button, chart_2
    function echart_2(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'), 'chalk');
        var option = {
            title: {
                text: "MPV各车系占比图",
                x: "left"
            },
            tooltip: {
                trigger: "item",
                formatter: "{b} : {c}万辆 ({d}%)"
            },
            legend: {
                x: "center",
                data: [data[0].country, data[1].country, data[2].country, data[3].country]
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
                    name: "汽车销量",
                    type: "pie",
                    radius: ["50%", "70%"],
                    center: ["50%", "60%"],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: "{b}: {d}%"
                            }
                        }
                    },
                    data: [
                        {
                            value: getThousand(data[0].saleAmount),
                            name: data[0].country
                        },
                        {
                            value: getThousand(data[1].saleAmount),
                            name: data[1].country
                        },
                        {
                            value: getThousand(data[2].saleAmount),
                            name: data[2].country
                        },
                        {
                            value: getThousand(data[3].saleAmount),
                            name: data[3].country
                        }

                    ]
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // 第8个button, chart_3
    function echart_3(data) {
        var myChart = echarts.init(document.getElementById('chart_3'), 'chalk');
        var option = {
            title: {
                text: "MPV各车系每月走势图",
                x: "left"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: [data[0].country, data[1].country, data[2].country, data[3].country],
                x: "center"
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
                    type: "category",
                    boundaryGap: false,
                    data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                }
            ],
            yAxis: [
                {
                    type: "value",
                    name: "万辆"
                }
            ],
            series: [
                {
                    name: data[0].country,
                    type: "line",
                    data: getThousand(Object.values(data[0]).slice(2))
                },
                {
                    name: data[1].country,
                    type: "line",
                    data: getThousand(Object.values(data[1]).slice(2))
                },
                {
                    name: data[2].country,
                    type: "line",
                    data: getThousand(Object.values(data[2]).slice(2))
                },
                {
                    name: data[3].country,
                    type: "line",
                    data: getThousand(Object.values(data[3]).slice(2))
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // 第9个button, chart_7
    function echart_7(data1, data2, data3) {
        var myChart = echarts.init(document.getElementById('chart_7'), 'chalk');

        var option = {
            title: {
                text: "MPV各车系销量TOP3",
                x: "left"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["TOP1", "TOP2", "TOP3"]

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
                    boundaryGap: [0, 0.01]
                }
            ],
            yAxis: [
                {
                    type: "category",
                    data: ["日系", "德系", "自主"]
                }
            ],
            series: [
                {
                    name: "TOP1",
                    type: "bar",
                    data: [
                        {
                            value: getThousand(data3[0].saleAmount),
                            name: data3[0].brand
                        },
                        {
                            value: getThousand(data2[0].saleAmount),
                            name: data2[0].brand
                        },
                        {
                            value: getThousand(data1[0].saleAmount),
                            name: data1[0].brand
                        }
                    ],
                    itemStyle: {
                        normal: {
                            label: {
                                color: '#ffffff',
                                show: true,
                                position: 'right',
                                formatter: "{b}: {c}万辆"
                            }
                        }
                    }
                },
                {
                    name: "TOP2",
                    type: "bar",
                    data: [
                        {
                            value: getThousand(data3[1].saleAmount),
                            name: data3[1].brand
                        },
                        {
                            value: getThousand(data2[1].saleAmount),
                            name: data2[1].brand
                        },
                        {
                            value: getThousand(data1[1].saleAmount),
                            name: data1[1].brand
                        }
                    ],
                    itemStyle: {
                        normal: {
                            label: {
                                color: '#ffffff',
                                show: true,
                                position: 'right',
                                formatter: "{b}: {c}万辆"
                            }
                        }
                    }

                },
                {
                    name: "TOP3",
                    type: "bar",
                    data: [
                        {
                            value: getThousand(data3[2].saleAmount),
                            name: data3[2].brand
                        },
                        {
                            value: getThousand(data2[2].saleAmount),
                            name: data2[2].brand
                        },
                        {
                            value: getThousand(data1[2].saleAmount),
                            name: data1[2].brand
                        }
                    ],
                    itemStyle: {
                        normal: {
                            label: {
                                color: '#ffffff',
                                show: true,
                                position: 'right',
                                formatter: "{b}: {c}万辆"
                            }
                        }
                    }

                }

            ]
        };
        myChart.setOption(option);
        // window.addEventListener("resize", function () {
        //     myChart.resize();
        // });
    }

    // 第10个button, chart_1
    function echart_1(data1, data2) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'), 'chalk');

        var option = {
            title: {
                text: "各年龄段传统/新能源汽车",
                subtext: "销量占比图",
                x: "left"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["传统汽车", "新能源汽车"],
                x: "center"
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
                    type: "category",
                    boundaryGap: false,
                    data: ["18岁以下", "19-24岁", "25-34岁", "35-49岁", "50岁以上"]
                }
            ],
            yAxis: [
                {
                    type: "value"
                }
            ],
            series: [
                {
                    name: "传统汽车",
                    type: "line",
                    data: [toPoint(data1[0].percent), toPoint(data1[1].percent), toPoint(data1[2].percent), toPoint(data1[3].percent), toPoint(data1[4].percent)]
                },
                {
                    name: "新能源汽车",
                    type: "line",
                    data: [toPoint(data2[0].percent), toPoint(data2[1].percent), toPoint(data2[2].percent), toPoint(data2[3].percent), toPoint(data2[4].percent)]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // 第11个button, chart_8
    function echart_8(data) {
        var myChart = echarts.init(document.getElementById('chart_8'), 'chalk');
        var option = {
            title: {
                text: '不同性别传统/新能源汽车',
                subtext: '购买比例',
                x: "left"
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                data: ['男性', '女性'],
                x: "center"
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['传统汽车', '新能源汽车']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '男性',
                    type: 'bar',
                    data: [toPoint(data[0].percent), toPoint(data[2].percent)],
                    itemStyle: {
                        normal: {
                            label: {
                                color: '#ffffff',
                                show: true,
                                position: 'top',
                                formatter: "{c}%"
                            }
                        }
                    }
                },
                {
                    name: '女性',
                    type: 'bar',
                    data: [toPoint(data[1].percent), toPoint(data[3].percent)],
                    itemStyle: {
                        normal: {
                            label: {
                                color: '#ffffff',
                                show: true,
                                position: 'top',
                                formatter: "{c}%"
                            }
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //湖南运输线长度
    // function echart_9() {
    //     var myChart = echarts.init(document.getElementById('chart_9'));
    //     myChart.clear();
    //     option = {
    //         title: {
    //             text: ''
    //         },
    //         tooltip: {
    //             trigger: 'axis'
    //         },
    //         legend: {
    //             data: ['铁路营业里程', '公路里程', '等级公路里程', '高速等级公路里程', '一级等级公路里程', '二级等级公路里程', '等外公路公路里程'],
    //             textStyle: {
    //                 color: '#fff'
    //             },
    //             top: '4%'
    //         },
    //         grid: {
    //             left: '3%',
    //             right: '4%',
    //             bottom: '3%',
    //             containLabel: true
    //         },
    //         toolbox: {
    //             orient: 'vertical',
    //             right: '1%',
    //             top: '2%',
    //             iconStyle: {
    //                 color: '#FFEA51',
    //                 borderColor: '#FFA74D',
    //                 borderWidth: 1
    //             },
    //             feature: {
    //                 saveAsImage: {},
    //                 magicType: {
    //                     show: true,
    //                     type: ['line', 'bar', 'stack', 'tiled']
    //                 }
    //             }
    //         },
    //         xAxis: {
    //             type: 'category',
    //             boundaryGap: false,
    //             data: ['2014年', '2015年', '2016年', '2017年', '2018年'],
    //             splitLine: {
    //                 show: false
    //             },
    //             axisLine: {
    //                 lineStyle: {
    //                     color: '#fff'
    //                 }
    //             }
    //         },
    //         yAxis: {
    //             name: '万公里',
    //             type: 'value',
    //             splitLine: {
    //                 show: false
    //             },
    //             axisLine: {
    //                 lineStyle: {
    //                     color: '#fff'
    //                 }
    //             }
    //         },
    //         color: ['#FF4949', '#FFA74D', '#FFEA51', '#4BF0FF', '#44AFF0', '#4E82FF', '#584BFF', '#BE4DFF', '#F845F1'],
    //         series: [
    //             {
    //                 name: '铁路营业里程',
    //                 type: 'line',
    //                 data: [0.56, 0.63, 0.63, 0.70, 0.70]
    //             },
    //             {
    //                 name: '公路里程',
    //                 type: 'line',
    //                 data: [16.30, 17.45, 17.92, 18.46, 18.84]
    //             },
    //             {
    //                 name: '等级公路里程',
    //                 type: 'line',
    //                 data: [15.54, 16.77, 17.29, 17.86, 18.26]
    //             },
    //             {
    //                 name: '高速等级公路里程',
    //                 type: 'line',
    //                 data: [0.51, 0.56, 0.59, 0.63, 0.65]
    //             },
    //             {
    //                 name: '一级等级公路里程',
    //                 type: 'line',
    //                 data: [0.47, 0.48, 0.51, 0.54, 0.56]
    //             },
    //             {
    //                 name: '二级等级公路里程',
    //                 type: 'line',
    //                 data: [1.76, 1.85, 1.93, 1.97, 1.99]
    //             },
    //             {
    //                 name: '等外公路公路里程',
    //                 type: 'line',
    //                 data: [0.76, 0.68, 0.63, 0.60, 0.58]
    //             }
    //         ]
    //     };
    //     myChart.setOption(option);
    // }

    //湖南省快递业务量
    // function echart_10() {
    //     var myChart = echarts.init(document.getElementById('chart_10'));
    //     myChart.clear();
    //
    //     option = {
    //         tooltip: {
    //             trigger: 'item',
    //             formatter: "{a} <br/>{b}: {c} ({d}%)"
    //         },
    //         legend: {
    //             orient: 'vertical',
    //             x: 'left',
    //             top: '2%',
    //             left: '1%',
    //             textStyle: {
    //                 color: '#fff'
    //             },
    //             data: [
    //                 '国际', '省外', '省内'
    //             ]
    //         },
    //         color: ['#FF4949', '#FFA74D', '#4BF0FF', '#44AFF0', '#4E82FF', '#584BFF', '#BE4DFF', '#F845F1', '#4BF0FF', '#44AFF0'],
    //         series: [
    //             {
    //                 name: '业务量(万件)',
    //                 type: 'pie',
    //                 selectedMode: 'single',
    //                 radius: [0, '15%'],
    //                 center: ['28%', '28%'],
    //                 label: {
    //                     normal: {
    //                         position: 'inner'
    //                     }
    //                 },
    //                 labelLine: {
    //                     normal: {
    //                         show: false
    //                     }
    //                 },
    //                 data: [
    //                     {value: 90392.39, name: '2018年业务量(90392.39万件)'}
    //                 ]
    //             },
    //             {
    //                 name: '业务量(万件)',
    //                 type: 'pie',
    //                 radius: ['20%', '30%'],
    //                 center: ['28%', '28%'],
    //                 label: {
    //                     normal: {
    //                         formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
    //                         backgroundColor: '#eee',
    //                         borderColor: '#aaa',
    //                         borderWidth: 1,
    //                         borderRadius: 4,
    //                         rich: {
    //                             a: {
    //                                 color: '#999',
    //                                 lineHeight: 22,
    //                                 align: 'center'
    //                             },
    //                             hr: {
    //                                 borderColor: '#aaa',
    //                                 width: '100%',
    //                                 borderWidth: 0.5,
    //                                 height: 0
    //                             },
    //                             b: {
    //                                 fontSize: 16,
    //                                 lineHeight: 33
    //                             },
    //                             per: {
    //                                 color: '#eee',
    //                                 backgroundColor: '#334455',
    //                                 padding: [2, 4],
    //                                 borderRadius: 2
    //                             }
    //                         }
    //                     }
    //                 },
    //                 data: [
    //                     {value: 464.43, name: '国际'},
    //                     {value: 68575.6, name: '省外'},
    //                     {value: 21352.36, name: '省内'}
    //                 ]
    //             },
    //             {
    //                 name: '业务量(万件)',
    //                 type: 'pie',
    //                 selectedMode: 'single',
    //                 radius: [0, '15%'],
    //                 center: ['70%', '28%'],
    //                 label: {
    //                     normal: {
    //                         position: 'inner'
    //                     }
    //                 },
    //                 labelLine: {
    //                     normal: {
    //                         show: false
    //                     }
    //                 },
    //                 data: [
    //                     {value: 54911.94, name: '2017年业务量(54911.94万件)'}
    //                 ]
    //             },
    //             {
    //                 name: '业务量(万件)',
    //                 type: 'pie',
    //                 radius: ['20%', '30%'],
    //                 center: ['70%', '28%'],
    //                 label: {
    //                     normal: {
    //                         formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
    //                         backgroundColor: '#eee',
    //                         borderColor: '#aaa',
    //                         borderWidth: 1,
    //                         borderRadius: 4,
    //                         rich: {
    //                             a: {
    //                                 color: '#999',
    //                                 lineHeight: 22,
    //                                 align: 'center'
    //                             },
    //                             hr: {
    //                                 borderColor: '#aaa',
    //                                 width: '100%',
    //                                 borderWidth: 0.5,
    //                                 height: 0
    //                             },
    //                             b: {
    //                                 fontSize: 16,
    //                                 lineHeight: 33
    //                             },
    //                             per: {
    //                                 color: '#eee',
    //                                 backgroundColor: '#334455',
    //                                 padding: [2, 4],
    //                                 borderRadius: 2
    //                             }
    //                         }
    //                     }
    //                 },
    //                 data: [
    //                     {value: 278.5, name: '国际'},
    //                     {value: 37111.03, name: '省外'},
    //                     {value: 17522.41, name: '省内'}
    //                 ]
    //             },
    //             {
    //                 name: '业务量(万件)',
    //                 type: 'pie',
    //                 selectedMode: 'single',
    //                 radius: [0, '15%'],
    //                 center: ['28%', '70%'],
    //                 label: {
    //                     normal: {
    //                         position: 'inner'
    //                     }
    //                 },
    //                 labelLine: {
    //                     normal: {
    //                         show: false
    //                     }
    //                 },
    //                 data: [
    //                     {value: 34019.15, name: '2016年业务量(34019.15万件)'}
    //                 ]
    //             },
    //             {
    //                 name: '业务量(万件)',
    //                 type: 'pie',
    //                 radius: ['20%', '30%'],
    //                 center: ['28%', '70%'],
    //                 label: {
    //                     normal: {
    //                         formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
    //                         backgroundColor: '#eee',
    //                         borderColor: '#aaa',
    //                         borderWidth: 1,
    //                         borderRadius: 4,
    //                         rich: {
    //                             a: {
    //                                 color: '#999',
    //                                 lineHeight: 22,
    //                                 align: 'center'
    //                             },
    //                             hr: {
    //                                 borderColor: '#aaa',
    //                                 width: '100%',
    //                                 borderWidth: 0.5,
    //                                 height: 0
    //                             },
    //                             b: {
    //                                 fontSize: 16,
    //                                 lineHeight: 33
    //                             },
    //                             per: {
    //                                 color: '#eee',
    //                                 backgroundColor: '#334455',
    //                                 padding: [2, 4],
    //                                 borderRadius: 2
    //                             }
    //                         }
    //                     }
    //                 },
    //                 data: [
    //                     {value: 163.72, name: '国际'},
    //                     {value: 26841.29, name: '省外'},
    //                     {value: 7014.14, name: '省内'}
    //                 ]
    //             },
    //             {
    //                 name: '业务量(万件)',
    //                 type: 'pie',
    //                 selectedMode: 'single',
    //                 radius: [0, '15%'],
    //                 center: ['70%', '70%'],
    //                 label: {
    //                     normal: {
    //                         position: 'inner'
    //                     }
    //                 },
    //                 labelLine: {
    //                     normal: {
    //                         show: false
    //                     }
    //                 },
    //                 data: [
    //                     {value: 20755.74, name: '2015年业务量(20755.74万件)'},
    //                 ]
    //             },
    //             {
    //                 name: '业务量(万件)',
    //                 type: 'pie',
    //                 radius: ['20%', '30%'],
    //                 center: ['70%', '70%'],
    //                 label: {
    //                     normal: {
    //                         formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
    //                         backgroundColor: '#eee',
    //                         borderColor: '#aaa',
    //                         borderWidth: 1,
    //                         borderRadius: 4,
    //                         rich: {
    //                             a: {
    //                                 color: '#999',
    //                                 lineHeight: 22,
    //                                 align: 'center'
    //                             },
    //                             hr: {
    //                                 borderColor: '#aaa',
    //                                 width: '100%',
    //                                 borderWidth: 0.5,
    //                                 height: 0
    //                             },
    //                             b: {
    //                                 fontSize: 16,
    //                                 lineHeight: 33
    //                             },
    //                             per: {
    //                                 color: '#eee',
    //                                 backgroundColor: '#334455',
    //                                 padding: [2, 4],
    //                                 borderRadius: 2
    //                             }
    //                         }
    //                     }
    //                 },
    //                 data: [
    //                     {value: 129.65, name: '国际'},
    //                     {value: 18072.54, name: '省外'},
    //                     {value: 2553.55, name: '省内'},
    //                 ]
    //             },
    //         ]
    //     };
    //
    //     myChart.setOption(option);
    // }

    //湖南省公路营运
    // function echart_11() {
    //     var myChart = echarts.init(document.getElementById('chart_11'));
    //     myChart.clear();
    //
    //     option = {
    //         tooltip: {
    //             trigger: 'item',
    //             formatter: "{a} <br/>{b}: {c} ({d}%)"
    //         },
    //         legend: {
    //             x: 'left',
    //             top: '2%',
    //             left: '1%',
    //             textStyle: {
    //                 color: '#fff'
    //             },
    //             data: ['公路营运载客', '公路营运载货']
    //         },
    //         color: ['#FF4949', '#FFA74D', '#4BF0FF', '#44AFF0', '#4E82FF', '#584BFF', '#BE4DFF', '#F845F1'],
    //         series: [
    //             {
    //                 name: '公路营运',
    //                 type: 'pie',
    //                 selectedMode: 'single',
    //                 radius: [0, '15%'],
    //                 center: ['28%', '28%'],
    //                 label: {
    //                     normal: {
    //                         position: 'inner'
    //                     }
    //                 },
    //                 labelLine: {
    //                     normal: {
    //                         show: false
    //                     }
    //                 },
    //                 data: [
    //                     {value: 145.18, name: '2018年公路营运拥有量(145.18万辆)'},
    //                 ]
    //             },
    //             {
    //                 name: '汽车拥有量(万辆)',
    //                 type: 'pie',
    //                 radius: ['20%', '30%'],
    //                 center: ['28%', '28%'],
    //                 label: {
    //                     normal: {
    //                         formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
    //                         backgroundColor: '#eee',
    //                         borderColor: '#aaa',
    //                         borderWidth: 1,
    //                         borderRadius: 4,
    //                         position: 'outside',
    //                         rich: {
    //                             a: {
    //                                 color: '#999',
    //                                 lineHeight: 22,
    //                                 align: 'center'
    //                             },
    //                             hr: {
    //                                 borderColor: '#aaa',
    //                                 width: '100%',
    //                                 borderWidth: 0.5,
    //                                 height: 0
    //                             },
    //                             b: {
    //                                 fontSize: 16,
    //                                 lineHeight: 33
    //                             },
    //                             per: {
    //                                 color: '#eee',
    //                                 backgroundColor: '#334455',
    //                                 padding: [2, 4],
    //                                 borderRadius: 2
    //                             }
    //                         }
    //                     }
    //                 },
    //
    //                 data: [
    //                     {value: 142.65, name: '公路营运载客'},
    //                     {value: 2.53, name: '公路营运载货'},
    //                 ]
    //             },
    //             {
    //                 name: '公路营运',
    //                 type: 'pie',
    //                 selectedMode: 'single',
    //                 radius: [0, '15%'],
    //                 center: ['70%', '28%'],
    //                 label: {
    //                     normal: {
    //                         position: 'inner'
    //                     }
    //                 },
    //                 labelLine: {
    //                     normal: {
    //                         show: false
    //                     }
    //                 },
    //                 data: [
    //                     {value: 142.47, name: '2017年公路营运拥有量(142.47万辆)'}
    //                 ]
    //             },
    //             {
    //                 name: '汽车拥有量(万辆)',
    //                 type: 'pie',
    //                 radius: ['20%', '30%'],
    //                 center: ['70%', '28%'],
    //                 label: {
    //                     normal: {
    //                         formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
    //                         backgroundColor: '#eee',
    //                         borderColor: '#aaa',
    //                         borderWidth: 1,
    //                         borderRadius: 4,
    //                         position: 'outside',
    //                         rich: {
    //                             a: {
    //                                 color: '#999',
    //                                 lineHeight: 22,
    //                                 align: 'center'
    //                             },
    //                             hr: {
    //                                 borderColor: '#aaa',
    //                                 width: '100%',
    //                                 borderWidth: 0.5,
    //                                 height: 0
    //                             },
    //                             b: {
    //                                 fontSize: 16,
    //                                 lineHeight: 33
    //                             },
    //                             per: {
    //                                 color: '#eee',
    //                                 backgroundColor: '#334455',
    //                                 padding: [2, 4],
    //                                 borderRadius: 2
    //                             }
    //                         }
    //                     }
    //                 },
    //
    //                 data: [
    //                     {value: 139.95, name: '公路营运载客'},
    //                     {value: 2.52, name: '公路营运载货'},
    //                     // {value:137.96, name:'2014年公路营运载客汽车拥有量(万辆)'},
    //                     // {value:2.65, name:'2014年公路营运载货汽车拥有量(万辆)'},
    //                     // {value:131.48, name:'2013年公路营运载客汽车拥有量(万辆)'},
    //                     // {value:2.97, name:'2013年公路营运载货汽车拥有量(万辆)'}
    //                 ]
    //             },
    //             {
    //                 name: '公路营运',
    //                 type: 'pie',
    //                 selectedMode: 'single',
    //                 radius: [0, '15%'],
    //                 center: ['28%', '70%'],
    //                 label: {
    //                     normal: {
    //                         position: 'inner'
    //                     }
    //                 },
    //                 labelLine: {
    //                     normal: {
    //                         show: false
    //                     }
    //                 },
    //                 data: [
    //                     {value: 140.61, name: '2016年公路营运拥有量(140.61万辆)'},
    //                     // {value:142.47, name:'2015年公路营运拥有量(142.47万辆)'},
    //                     // {value:140.61, name:'2014年公路营运拥有量(140.61万辆)'},
    //                     // {value:134.45, name:'2013年公路营运拥有量(134.45万辆)'},
    //                 ]
    //             },
    //             {
    //                 name: '汽车拥有量(万辆)',
    //                 type: 'pie',
    //                 radius: ['20%', '30%'],
    //                 center: ['28%', '70%'],
    //                 label: {
    //                     normal: {
    //                         formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
    //                         backgroundColor: '#eee',
    //                         borderColor: '#aaa',
    //                         borderWidth: 1,
    //                         borderRadius: 4,
    //                         position: 'outside',
    //                         rich: {
    //                             a: {
    //                                 color: '#999',
    //                                 lineHeight: 22,
    //                                 align: 'center'
    //                             },
    //                             hr: {
    //                                 borderColor: '#aaa',
    //                                 width: '100%',
    //                                 borderWidth: 0.5,
    //                                 height: 0
    //                             },
    //                             b: {
    //                                 fontSize: 16,
    //                                 lineHeight: 33
    //                             },
    //                             per: {
    //                                 color: '#eee',
    //                                 backgroundColor: '#334455',
    //                                 padding: [2, 4],
    //                                 borderRadius: 2
    //                             }
    //                         }
    //                     }
    //                 },
    //
    //                 data: [
    //                     {value: 137.96, name: '公路营运载客'},
    //                     {value: 2.65, name: '公路营运载货'},
    //                     // {value:137.96, name:'2014年公路营运载客汽车拥有量(万辆)'},
    //                     // {value:2.65, name:'2014年公路营运载货汽车拥有量(万辆)'},
    //                     // {value:131.48, name:'2013年公路营运载客汽车拥有量(万辆)'},
    //                     // {value:2.97, name:'2013年公路营运载货汽车拥有量(万辆)'}
    //                 ]
    //             },
    //             {
    //                 name: '公路营运',
    //                 type: 'pie',
    //                 selectedMode: 'single',
    //                 radius: [0, '15%'],
    //                 center: ['70%', '70%'],
    //                 label: {
    //                     normal: {
    //                         position: 'inner'
    //                     }
    //                 },
    //                 labelLine: {
    //                     normal: {
    //                         show: false
    //                     }
    //                 },
    //                 data: [
    //                     {value: 134.45, name: '2015年公路营运拥有量(134.45万辆)'},
    //                 ]
    //             },
    //             {
    //                 name: '汽车拥有量(万辆)',
    //                 type: 'pie',
    //                 radius: ['20%', '30%'],
    //                 center: ['70%', '70%'],
    //                 label: {
    //                     normal: {
    //                         formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
    //                         backgroundColor: '#eee',
    //                         borderColor: '#aaa',
    //                         borderWidth: 1,
    //                         borderRadius: 4,
    //                         position: 'outside',
    //                         rich: {
    //                             a: {
    //                                 color: '#999',
    //                                 lineHeight: 22,
    //                                 align: 'center'
    //                             },
    //                             hr: {
    //                                 borderColor: '#aaa',
    //                                 width: '100%',
    //                                 borderWidth: 0.5,
    //                                 height: 0
    //                             },
    //                             b: {
    //                                 fontSize: 16,
    //                                 lineHeight: 33
    //                             },
    //                             per: {
    //                                 color: '#eee',
    //                                 backgroundColor: '#334455',
    //                                 padding: [2, 4],
    //                                 borderRadius: 2
    //                             }
    //                         }
    //                     }
    //                 },
    //
    //                 data: [
    //                     {value: 131.48, name: '公路营运载客'},
    //                     {value: 2.97, name: '公路营运载货'},
    //                     // {value:137.96, name:'2014年公路营运载客汽车拥有量(万辆)'},
    //                     // {value:2.65, name:'2014年公路营运载货汽车拥有量(万辆)'},
    //                     // {value:131.48, name:'2013年公路营运载客汽车拥有量(万辆)'},
    //                     // {value:2.97, name:'2013年公路营运载货汽车拥有量(万辆)'}
    //                 ]
    //             }
    //         ]
    //     };
    //
    //     myChart.setOption(option);
    // }

    //湖南省城市公共交通
    // function echart_12() {
    //     var myChart = echarts.init(document.getElementById('chart_12'));
    //     myChart.clear();
    //     option = {
    //         title: {
    //             text: ''
    //         },
    //         tooltip: {
    //             trigger: 'axis'
    //         },
    //         legend: {
    //             data: ['公共交通运营数', '运营线路总长度', '公共交通客运总量'],
    //             textStyle: {
    //                 color: '#fff'
    //             },
    //             top: '4%'
    //         },
    //         grid: {
    //             left: '3%',
    //             right: '4%',
    //             bottom: '3%',
    //             containLabel: true
    //         },
    //         toolbox: {
    //             orient: 'vertical',
    //             right: '1%',
    //             top: '2%',
    //             iconStyle: {
    //                 color: '#FFEA51',
    //                 borderColor: '#FFA74D',
    //                 borderWidth: 1,
    //             },
    //             feature: {
    //                 saveAsImage: {},
    //                 magicType: {
    //                     show: true,
    //                     type: ['line', 'bar', 'stack', 'tiled']
    //                 }
    //             }
    //         },
    //         xAxis: {
    //             type: 'category',
    //             boundaryGap: false,
    //             data: ['2014年', '2015年', '2016年', '2017年', '2018年'],
    //             splitLine: {
    //                 show: false
    //             },
    //             axisLine: {
    //                 lineStyle: {
    //                     color: '#fff'
    //                 }
    //             }
    //         },
    //         yAxis: {
    //             name: '万公里',
    //             type: 'value',
    //             splitLine: {
    //                 show: false
    //             },
    //             axisLine: {
    //                 lineStyle: {
    //                     color: '#fff'
    //                 }
    //             }
    //         },
    //         color: ['#FF4949', '#FFA74D', '#FFEA51', '#4BF0FF', '#44AFF0', '#4E82FF', '#584BFF', '#BE4DFF', '#F845F1'],
    //         series: [
    //             {
    //                 name: '公共交通运营数',
    //                 type: 'line',
    //                 data: [16493, 17498, 15977, 18927, 21479]
    //             },
    //             {
    //                 name: '运营线路总长度',
    //                 type: 'line',
    //                 data: [18812, 19647, 20305, 22940, 26077]
    //             },
    //             {
    //                 name: '公共交通客运总量',
    //                 type: 'line',
    //                 data: [203954, 202727, 205342, 187208, 186048]
    //             },
    //         ]
    //     };
    //     myChart.setOption(option);
    // }

    //操作按钮
    $('.t_btn0').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos0').css('display', 'block');
        $.ajax({
            url: "/getCarCountrySale",
            type: "POST",
            dataType: "json",
            success: function (data) {
                echart_map(data);
            },
            error: function () {
                ajaxErrorAlert();
            }
        });
    });

    $('.t_btn1').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos1').css('display', 'block');
        $.ajax({
            url: "/getMPVCountrySale",
            type: "POST",
            dataType: "json",
            success: function (data) {
                echart_2(data);
            },
            error: function () {
                ajaxErrorAlert();
            }
        });
    });

    $('.t_btn2').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos2').css('display', 'block');
        $.ajax({
            url: "/getSUVCountrySaleMonth",
            dataType: "json",
            success: function (data) {
                echart_0(data);
            },
            error: function () {
                ajaxErrorAlert();
            }
        });
    });

    $('.t_btn3').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos3').css('display', 'block');
        $.ajax({
            url: "/getCarCountrySaleMonth",
            type: "POST",
            dataType: "json",
            success: function (data) {
                echart_4(data);
            },
            error: function () {
                ajaxErrorAlert();
            }
        });
    });

    $('.t_btn4').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos6').css('display', 'block');
        $.ajax({
            url: "/getSUVAmericaSaleTop",
            type: "POST",
            dataType: "json",
            success: function (data1) {
                $.ajax({
                    url: "/getSUVBritainSaleTop",
                    type: "POST",
                    dataType: "json",
                    success: function (data2) {
                        $.ajax({
                            url: "/getSUVChinaSaleTop",
                            type: "POST",
                            dataType: "json",
                            success: function (data3) {
                                $.ajax({
                                    url: "/getSUVFranceSaleTop",
                                    type: "POST",
                                    dataType: "json",
                                    success: function (data4) {
                                        $.ajax({
                                            url: "/getSUVGermanySaleTop",
                                            type: "POST",
                                            dataType: "json",
                                            success: function (data5) {
                                                $.ajax({
                                                    url: "/getSUVJapanSaleTop",
                                                    type: "POST",
                                                    dataType: "json",
                                                    success: function (data6) {
                                                        $.ajax({
                                                            url: "/getSUVKoreaSaleTop",
                                                            type: "POST",
                                                            dataType: "json",
                                                            success: function (data7) {
                                                                echart_6(data1, data2, data3, data4, data5, data6, data7);
                                                            },
                                                            error: function () {
                                                                console.error("Error Sending AJAX Request");
                                                            }
                                                        })
                                                    },
                                                    error: function () {
                                                        console.error("Error Sending AJAX Request");
                                                    }
                                                })
                                            },
                                            error: function () {
                                                console.error("Error Sending AJAX Request");
                                            }
                                        })
                                    },
                                    error: function () {
                                        console.error("Error Sending AJAX Request");
                                    }
                                })
                            },
                            error: function () {
                                console.error("Error Sending AJAX Request");
                            }
                        })
                    },
                    error: function () {
                        console.error("Error Sending AJAX Request");
                    }
                })
            },
            error: function () {
                console.error("Error Sending AJAX Request");
            }
        });
    });

    $('.t_btn5').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos4').css('display', 'block');
        $.ajax({
            url: "/getCarRangePercent",
            type: "POST",
            dataType: "json",
            success: function (data1) {
                $.ajax({
                    url: "/getNewCarRangePercent",
                    type: "POST",
                    dataType: "json",
                    success: function (data2) {
                        echart_1(data1, data2);
                    },
                    error: function () {
                        ajaxErrorAlert();
                    }
                });
            },
            error: function () {
                ajaxErrorAlert();
            }
        });
    });

    $('.t_btn6').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos5').css('display', 'block');
        $.ajax({
            url: "/getMPVCountrySaleMonth",
            type: "POST",
            dataType: "json",
            success: function (data) {
                echart_3(data);
            },
            error: function () {
                ajaxErrorAlert();
            }
        });
    });

    $('.t_btn7').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos7').css('display', 'block');
        $.ajax({
            url: "/getMPVChinaSaleTop",
            type: "POST",
            dataType: "json",
            success: function (data1) {
                $.ajax({
                    url: "/getMPVGermanySaleTop",
                    type: "POST",
                    dataType: "json",
                    success: function (data2) {
                        $.ajax({
                            url: "/getMPVJapanSaleTop",
                            type: "POST",
                            dataType: "json",
                            success: function (data3) {
                                echart_7(data1, data2, data3);
                            },
                            error: function () {
                                console.error("Error Sending AJAX Request");
                            }
                        })
                    },
                    error: function () {
                        console.error("Error Sending AJAX Request");
                    }
                })
            },
            error: function () {
                console.error("Error Sending AJAX Request");
            }
        });
    });

    $('.t_btn8').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos8').css('display', 'block');
        $.ajax({
            url: "/getCarSexPercentKind",
            type: "POST",
            dataType: "json",
            success: function (data) {
                echart_8(data);
            },
            error: function () {
                ajaxErrorAlert();
            }
        });
    });
    //
    // $('.t_btn9').click(function () {
    //     $('.center_text').css('display', 'none');
    //     $('.t_cos9').css('display', 'block');
    //     echart_9();
    // });
    //
    // $('.t_btn10').click(function () {
    //     $('.center_text').css('display', 'none');
    //     $('.t_cos10').css('display', 'block');
    //     echart_10();
    // });
    //
    // $('.t_btn11').click(function () {
    //     $('.center_text').css('display', 'none');
    //     $('.t_cos11').css('display', 'block');
    //     echart_11();
    // });
    //
    // $('.t_btn12').click(function () {
    //     $('.center_text').css('display', 'none');
    //     $('.t_cos12').css('display', 'block');
    //     echart_12();
    // });

    $('.t_btn13').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos13').css('display', 'block');
        $.ajax({
            url: "/getSUVCountrySale",
            dataType: "json",
            success: function (data) {
                echart_13(data);
            },
            error: function () {
                ajaxErrorAlert();
            }
        });
    });
    $('.t_btn14').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos14').css('display', 'block');
        $.ajax({
            url: "/getAmericaCarTop",
            type: "POST",
            dataType: "json",
            success: function (data1) {
                $.ajax({
                    url: "/getChinaCarTop",
                    type: "POST",
                    dataType: "json",
                    success: function (data2) {
                        $.ajax({
                            url: "/getFranceCarTop",
                            type: "POST",
                            dataType: "json",
                            success: function (data3) {
                                $.ajax({
                                    url: "/getGermanyCarTop",
                                    type: "POST",
                                    dataType: "json",
                                    success: function (data4) {
                                        $.ajax({
                                            url: "/getJapanCarTop",
                                            type: "POST",
                                            dataType: "json",
                                            success: function (data5) {
                                                $.ajax({
                                                    url: "/getKoreaCarTop",
                                                    type: "POST",
                                                    dataType: "json",
                                                    success: function (data6) {
                                                        echart_14(data1, data2, data3, data4, data5, data6)
                                                    },
                                                    error: function () {
                                                        ajaxErrorAlert();
                                                    }
                                                });
                                            },
                                            error: function () {
                                                ajaxErrorAlert();
                                            }
                                        });
                                    },
                                    error: function () {
                                        ajaxErrorAlert();
                                    }
                                });
                            },
                            error: function () {
                                ajaxErrorAlert();
                            }
                        });
                    },
                    error: function () {
                        ajaxErrorAlert();
                    }
                });
            },
            error: function () {
                ajaxErrorAlert();
            }
        });

    });
    //获取地址栏参数
    $(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos0').css('display', 'block');
        $.ajax({
            url: "/getCarCountrySale",
            type: "POST",
            dataType: "json",
            success: function (data) {
                echart_map(data);
            },
            error: function () {
                ajaxErrorAlert();
            }
        });
        // function getUrlParms(name) {
        //     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        //     var r = window.location.search.substr(1).match(reg);
        //     if (r != null)
        //         return unescape(r[2]);
        //     return null;
        // }
        //
        // var id = getUrlParms("id");
        // if (id == 2) {
        //     $('.center_text').css('display', 'none');
        //     $('.t_cos10').css('display', 'block');
        //     echart_10();
        // }
        // if (id == 3) {
        //     $('.center_text').css('display', 'none');
        //     $('.t_cos11').css('display', 'block');
        //     echart_11();
        // }
        // if (id == 4) {
        //     $('.center_text').css('display', 'none');
        //     $('.t_cos1').css('display', 'block');
        //     $.ajax({
        //         url: "/getMPVCountrySale",
        //         type: "POST",
        //         dataType: "json",
        //         success: function (data) {
        //             echart_2(data);
        //         },
        //         error: function () {
        //             ajaxErrorAlert();
        //         }
        //     });
        //
        // }
        // if (id == 5) {
        //     $('.center_text').css('display', 'none');
        //     $('.t_cos6').css('display', 'block');
        //     $.ajax({
        //         url: "/getSUVAmericaSaleTop",
        //         type: "POST",
        //         dataType: "json",
        //         success: function (data1) {
        //             $.ajax({
        //                 url: "/getSUVBritainSaleTop",
        //                 type: "POST",
        //                 dataType: "json",
        //                 success: function (data2) {
        //                     $.ajax({
        //                         url: "/getSUVChinaSaleTop",
        //                         type: "POST",
        //                         dataType: "json",
        //                         success: function (data3) {
        //                             $.ajax({
        //                                 url: "/getSUVFranceSaleTop",
        //                                 type: "POST",
        //                                 dataType: "json",
        //                                 success: function (data4) {
        //                                     $.ajax({
        //                                         url: "/getSUVGermanySaleTop",
        //                                         type: "POST",
        //                                         dataType: "json",
        //                                         success: function (data5) {
        //                                             $.ajax({
        //                                                 url: "/getSUVJapanSaleTop",
        //                                                 type: "POST",
        //                                                 dataType: "json",
        //                                                 success: function (data6) {
        //                                                     $.ajax({
        //                                                         url: "/getSUVKoreaSaleTop",
        //                                                         type: "POST",
        //                                                         dataType: "json",
        //                                                         success: function (data7) {
        //                                                             echart_6(data1, data2, data3, data4, data5, data6, data7);
        //                                                         },
        //                                                         error: function () {
        //                                                             console.error("Error Sending AJAX Request");
        //                                                         }
        //                                                     })
        //                                                 },
        //                                                 error: function () {
        //                                                     console.error("Error Sending AJAX Request");
        //                                                 }
        //                                             })
        //                                         },
        //                                         error: function () {
        //                                             console.error("Error Sending AJAX Request");
        //                                         }
        //                                     })
        //                                 },
        //                                 error: function () {
        //                                     console.error("Error Sending AJAX Request");
        //                                 }
        //                             })
        //                         },
        //                         error: function () {
        //                             console.error("Error Sending AJAX Request");
        //                         }
        //                     })
        //                 },
        //                 error: function () {
        //                     console.error("Error Sending AJAX Request");
        //                 }
        //             })
        //         },
        //         error: function () {
        //             console.error("Error Sending AJAX Request");
        //         }
        //     });
        // }
        // if (id == 6) {
        //     $('.center_text').css('display', 'none');
        //     $('.t_cos4').css('display', 'block');
        //     echart_1();
        // }
        // if (id == 7) {
        //     $('.center_text').css('display', 'none');
        //     $('.t_cos8').css('display', 'block');
        //     echart_8();
        // }
        // if (id == 8) {
        //     $('.center_text').css('display', 'none');
        //     $('.t_cos12').css('display', 'block');
        //     echart_12();
        // }
        // if (id == 9) {
        //     $('.center_text').css('display', 'none');
        //     $('.t_cos13').css('display', 'block');
        //     $.ajax({
        //         url: "/getSUVCountrySale",
        //         dataType: "json",
        //         success: function (data) {
        //             echart_13(data);
        //         },
        //         error: function () {
        //             ajaxErrorAlert();
        //         }
        //     });
        // }
    });
});
