// base.js 中绘制15张图, 绑定按钮显示, 并根据地址栏的id判断显示哪一张图
$(function () {
    function ajaxErrorAlert() {
        alert("Error Sending Ajax Request");
    }

    //echart_1湖南各市货运量
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));
        myChart.clear();
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}万元"
            },
            legend: {
                x: 'center',
                y: '15%',
                data: ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '娄底', '怀化', '湘西'],
                icon: 'circle',
                textStyle: {
                    color: '#fff',
                }
            },
            calculable: true,
            series: [{
                name: '',
                type: 'pie',
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [41, 280.75],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '40%'],
                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter: '{c}万元'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{
                    value: 900.58,
                    name: '怀化',
                    itemStyle: {
                        normal: {
                            color: '#f845f1'
                        }
                    }
                },
                    {
                        value: 1100.58,
                        name: '永州',
                        itemStyle: {
                            normal: {
                                color: '#ad46f3'
                            }
                        }
                    },
                    {
                        value: 1200.58,
                        name: '张家界',
                        itemStyle: {
                            normal: {
                                color: '#5045f6'
                            }
                        }
                    },
                    {
                        value: 1300.58,
                        name: '邵阳',
                        itemStyle: {
                            normal: {
                                color: '#4777f5'
                            }
                        }
                    },
                    {
                        value: 1400.58,
                        name: '常德',
                        itemStyle: {
                            normal: {
                                color: '#44aff0'
                            }
                        }
                    },
                    {
                        value: 1500.58,
                        name: '岳阳',
                        itemStyle: {
                            normal: {
                                color: '#45dbf7'
                            }
                        }
                    },
                    {
                        value: 1500.58,
                        name: '湘潭',
                        itemStyle: {
                            normal: {
                                color: '#f6d54a'
                            }
                        }
                    },
                    {
                        value: 1600.58,
                        name: '株洲',
                        itemStyle: {
                            normal: {
                                color: '#f69846'
                            }
                        }
                    },
                    {
                        value: 1800,
                        name: '长沙',
                        itemStyle: {
                            normal: {
                                color: '#ff4343'
                            }
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: '#transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //echart_0湖南省飞机场
    function echart_0(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_0'), 'chalk');
        var option = {
            title: {
                text: "SUV各系车每月销量",
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["德系", "法系", "韩系", "美系", "日系", "自主"]
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
                    boundaryGap: false,
                    data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                }
            ],
            yAxis: [
                {
                    type: "value",
                    name: ""
                }
            ],
            series: [
                {
                    name: "德系",
                    type: "line",
                    data: Object.values(data[0]).slice(2)
                },
                {
                    name: "法系",
                    type: "line",
                    data: Object.values(data[1]).slice(2)
                },
                {
                    name: "韩系",
                    type: "line",
                    data: Object.values(data[2]).slice(2)
                },
                {
                    name: "美系",
                    type: "line",
                    data: Object.values(data[3]).slice(2)
                },
                {
                    name: "日系",
                    type: "line",
                    data: Object.values(data[4]).slice(2)
                },
                {
                    name: "自主",
                    type: "line",
                    data: Object.values(data[5]).slice(2)
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //echart_2湖南省高速公路
    function echart_2(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'), 'chalk');
        var option = {
            title: {
                text: "各车系MPV占比",
                x: "center"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                x: "left",
                data: [data[0].country, data[1].country, data[2].country, data[3].country]
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
                    name: "访问来源",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "60%"],
                    data: [
                        {
                            value: data[0].saleAmount,
                            name: data[0].country
                        },
                        {
                            value: data[1].saleAmount,
                            name: data[1].country
                        },
                        {
                            value: data[2].saleAmount,
                            name: data[2].country
                        },
                        {
                            value: data[3].saleAmount,
                            name: data[3].country
                        }

                    ]
                }
            ]
        };
        myChart.setOption(option);
    }

    // echart_map中国地图
    function echart_map(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_map'), 'chalk');


        option = {
            title: {
                text: "轿车车系占比",
                x: "center"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                x: "left",
                data: ["美系", "英系", "自主", "法系", "德系", "日系", "意系", "瑞典系", "韩系"]
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
                                formatter: "{b}: {c} ({d}%)"
                            }
                        }
                    },
                    data: [
                        {
                            value: data[8].saleAmount,
                            name: "美系"
                        },
                        {
                            value: data[7].saleAmount,
                            name: "英系"
                        },
                        {
                            value: data[6].saleAmount,
                            name: "自主"
                        },
                        {
                            value: data[5].saleAmount,
                            name: "法系"
                        },
                        {
                            value: data[4].saleAmount,
                            name: "德系"
                        },
                        {
                            value: data[2].saleAmount,
                            name: "日系"
                        },
                        {
                            value: data[3].saleAmount,
                            name: "意系"
                        },
                        {
                            value: data[0].saleAmount,
                            name: "瑞典系"
                        },
                        {
                            value: data[1].saleAmount,
                            name: "韩系"
                        }
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        // window.addEventListener("resize", function () {
        //     myChart.resize();
        // });

    }

    //echart_3交通就业人员
    function echart_3(data) {
        var myChart = echarts.init(document.getElementById('chart_3'), 'chalk');
        myChart.clear();
        option = {
            title: {
                text: "MPV各月销量走势",
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: [data[0].country, data[1].country, data[2].country, data[3].country]
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
                    boundaryGap: false,
                    data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                }
            ],
            yAxis: [
                {
                    type: "value",
                    name: "销量(辆)"
                }
            ],
            series: [
                {
                    name: data[0].country,
                    type: "line",
                    data: Object.values(data[0]).slice(2)
                },
                {
                    name: data[1].country,
                    type: "line",
                    data: Object.values(data[1]).slice(2)
                },
                {
                    name: data[2].country,
                    type: "line",
                    data: Object.values(data[2]).slice(2)
                },
                {
                    name: data[3].country,
                    type: "line",
                    data: Object.values(data[3]).slice(2)
                }
            ]
        };
        myChart.setOption(option);
    }

    //中国铁路
    function echart_4(data) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById('chart_4'), 'chalk');
        var option = {
            title: {
                text: "轿车车系走势图",
                x: "center"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["美系", "英系", "自主", "法系", "德系", "意系", "日系", "韩系", "瑞典系"],
                x: "left",
                orient: "vertical"
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
                    boundaryGap: false,
                    data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                }
            ],
            yAxis: [
                {
                    type: "value",
                    name: "°C"
                }
            ],
            series: [
                {
                    name: "美系",
                    type: "line",
                    data: [data[0].month1, data[0].month2, data[0].month3, data[0].month4, data[0].month5, data[0].month6, data[0].month7, data[0].month8, data[0].month9, data[0].month10, data[0].month11, data[0].month12]
                },
                {
                    name: "英系",
                    type: "line",
                    data: [data[1].month1, data[1].month2, data[1].month3, data[1].month4, data[1].month5, data[1].month6, data[1].month7, data[1].month8, data[1].month9, data[1].month10, data[1].month11, data[1].month12]
                },
                {
                    name: "自主",
                    type: "line",
                    data: [data[2].month1, data[2].month2, data[2].month3, data[2].month4, data[2].month5, data[2].month6, data[2].month7, data[2].month8, data[2].month9, data[2].month10, data[2].month11, data[2].month12]
                },
                {
                    type: "line",
                    name: "法系",
                    data: [data[3].month1, data[3].month2, data[3].month3, data[3].month4, data[3].month5, data[3].month6, data[3].month7, data[3].month8, data[3].month9, data[3].month10, data[3].month11, data[3].month12]
                },
                {
                    type: "line",
                    name: "德系",
                    data: [data[4].month1, data[4].month2, data[4].month3, data[4].month4, data[4].month5, data[4].month6, data[4].month7, data[4].month8, data[4].month9, data[4].month10, data[4].month11, data[4].month12]
                },
                {
                    type: "line",
                    name: "意系",
                    data: [data[5].month1, data[5].month2, data[5].month3, data[5].month4, data[5].month5, data[5].month6, data[5].month7, data[5].month8, data[5].month9, data[5].month10, data[5].month11, data[5].month12]
                },
                {
                    type: "line",
                    name: "日系",
                    data: [data[6].month1, data[6].month2, data[6].month3, data[6].month4, data[6].month5, data[6].month6, data[6].month7, data[6].month8, data[6].month9, data[6].month10, data[6].month11, data[6].month12]
                },
                {
                    type: "line",
                    name: "韩系",
                    data: [data[7].month1, data[7].month2, data[7].month3, data[7].month4, data[7].month5, data[7].month6, data[7].month7, data[7].month8, data[7].month9, data[7].month10, data[7].month11, data[7].month12]
                },
                {
                    type: "line",
                    name: "瑞典系",
                    data: [data[8].month1, data[8].month2, data[8].month3, data[8].month4, data[8].month5, data[8].month6, data[8].month7, data[8].month8, data[8].month9, data[8].month10, data[8].month11, data[8].month12]
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
    }

    //湖南省高铁
    function echart_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_6'));
        //加载地图
        myChart.setOption({
            series: [{
                type: 'map',
                mapType: 'hunan'
            }]
        });

        var geoCoordMap = {
            '怀化站': [109.999867, 27.518949],
            '吉首站': [109.741528, 28.332629],
            '张家界站': [110.491722, 29.112001],
            '常德站': [111.701486, 29.076683],
            '益阳站': [112.348741, 28.544124],
            '岳阳站': [113.126486, 29.382401],
            '长沙站': [113.019455, 28.200103],
            '株洲站': [113.163141, 27.8418],
            '湘潭站': [112.91977, 27.882141],
            '邵阳站': [111.467859, 27.21915],
            '娄底站': [112.012438, 27.745506],
            '衡阳站': [112.63809, 26.895225],
            '永州站': [111.577632, 26.460144],
            '郴州站': [113.039396, 25.81497]
        };

        var goData = [
            [{
                name: '怀化站'

            }, {
                id: 1,
                name: '吉首站',
                value: 60
            }],
            [{
                name: '吉首站'

            }, {
                id: 1,
                name: '张家界站',
                value: 70
            }],
            [{
                name: '张家界站'

            }, {
                id: 1,
                name: '常德站',
                value: 77
            }],
            [{
                name: '常德站'

            }, {
                id: 1,
                name: '岳阳站',
                value: 70
            }],
            [{
                name: '常德站'

            }, {
                id: 1,
                name: '益阳站',
                value: 65
            }],
            [{
                name: '常德站'

            }, {
                id: 1,
                name: '邵阳站',
                value: 80
            }],
            [{
                name: '益阳站'

            }, {
                id: 1,
                name: '长沙站',
                value: 95
            }],
            [{
                name: '益阳站'

            }, {
                id: 1,
                name: '娄底站',
                value: 72
            }],
            [{
                name: '长沙站'

            }, {
                id: 1,
                name: '株洲站',
                value: 80
            }],
            [{
                name: '长沙站'

            }, {
                id: 1,
                name: '湘潭站',
                value: 90
            }],
            [{
                name: '长沙站'

            }, {
                id: 1,
                name: '衡阳站',
                value: 88
            }],
            [{
                name: '湘潭站'

            }, {
                id: 1,
                name: '娄底站',
                value: 72
            }],
            [{
                name: '娄底站'

            }, {
                id: 1,
                name: '怀化站',
                value: 80
            }],
            [{
                name: '邵阳站'

            }, {
                id: 1,
                name: '永州站',
                value: 74
            }],
            [{
                name: '衡阳站'

            }, {
                id: 1,
                name: '邵阳站',
                value: 80
            }],
            [{
                name: '衡阳站'

            }, {
                id: 1,
                name: '永州站',
                value: 74
            }],
            [{
                name: '衡阳站'

            }, {
                id: 1,
                name: '郴州站',
                value: 70
            }],
        ];
        //值控制圆点大小
        var backData = [
            [{
                name: '吉首站'
            }, {
                id: 2,
                name: '怀化站',
                value: 80
            }],
            [{
                name: '常德站'

            }, {
                id: 1,
                name: '张家界站',
                value: 70
            }],
            [{
                name: '岳阳站'

            }, {
                id: 1,
                name: '常德站',
                value: 77
            }],
            [{
                name: '益阳站'

            }, {
                id: 1,
                name: '常德站',
                value: 77
            }],
            [{
                name: '邵阳站'

            }, {
                id: 1,
                name: '常德站',
                value: 77
            }],
            [{
                name: '长沙站'

            }, {
                id: 1,
                name: '益阳站',
                value: 65
            }],
            [{
                name: '娄底站'

            }, {
                id: 1,
                name: '益阳站',
                value: 65
            }],
            [{
                name: '株洲站'

            }, {
                id: 1,
                name: '长沙站',
                value: 95
            }],
            [{
                name: '湘潭站'

            }, {
                id: 1,
                name: '长沙站',
                value: 95
            }],
            [{
                name: '衡阳站'

            }, {
                id: 1,
                name: '长沙站',
                value: 95
            }],
            [{
                name: '娄底站'

            }, {
                id: 1,
                name: '湘潭站',
                value: 90
            }],
            [{
                name: '怀化站'

            }, {
                id: 1,
                name: '娄底站',
                value: 72
            }],
            [{
                name: '永州站'

            }, {
                id: 1,
                name: '邵阳站',
                value: 80
            }],
            [{
                name: '邵阳站'

            }, {
                id: 1,
                name: '衡阳站',
                value: 88
            }],
            [{
                name: '永州站'

            }, {
                id: 1,
                name: '衡阳站',
                value: 88
            }],
            [{
                name: '郴州站'

            }, {
                id: 1,
                name: '衡阳站',
                value: 88
            }],
        ];

        var arcAngle = function (data) {
            var j, k;
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                if (dataItem[1].id == 1) {
                    j = 0.2;
                    return j;
                } else if (dataItem[1].id == 2) {
                    k = -0.2;
                    return k;
                }
            }
        }

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (dataItem[1].id == 1) {
                    if (fromCoord && toCoord) {
                        res.push([{
                            coord: fromCoord,
                        }, {
                            coord: toCoord,
                            value: dataItem[1].value //线条颜色
                        }]);
                    }
                } else if (dataItem[1].id == 2) {
                    if (fromCoord && toCoord) {
                        res.push([{
                            coord: fromCoord,
                        }, {
                            coord: toCoord
                        }]);
                    }
                }
            }
            return res;
        };

        var color = ['#fff', '#FF1493', '#00FF00'];
        var series = [];
        [
            ['1', goData],
            ['2', backData]
        ].forEach(function (item, i) {
            series.push({
                name: item[0],
                type: 'lines',
                zlevel: 2,
                symbol: ['arrow', 'arrow'],
                //线特效配置
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.1,
                    symbol: 'arrow', //标记类型
                    symbolSize: 5
                },
                lineStyle: {
                    normal: {
                        width: 1,
                        opacity: 0.4,
                        curveness: arcAngle(item[1]), //弧线角度
                        color: '#fff'
                    }
                },
                data: convertData(item[1])
            }, {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                //波纹效果
                rippleEffect: {
                    period: 2,
                    brushType: 'stroke',
                    scale: 3
                },
                label: {
                    normal: {
                        show: true,
                        color: '#fff',
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                //终点形象
                symbol: 'circle',
                //圆点大小
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        show: true
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })

            });

        });

        option = {
            title: {
                text: '',
                subtext: '',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b}"
            },
            //线颜色及飞行轨道颜色
            visualMap: {
                show: false,
                min: 0,
                max: 100,
                color: ['#fff']
            },
            //地图相关设置
            geo: {
                map: 'hunan',
                //视角缩放比例
                zoom: 1,
                //显示文本样式
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                //鼠标缩放和平移
                roam: true,
                itemStyle: {
                    normal: {
                        //          	color: '#ddd',
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(	47,79,79, .2)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                }
            },
            series: series
        };
        myChart.setOption(option);
    }

    //湖南总货运量
    function echart_7() {
        var myChart = echarts.init(document.getElementById('chart_7'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['货运量', '铁路货运量', '国家铁路货运量', '地方铁路货运量', '合资铁路货运量', '公路货运量', '水运货运量'],
                textStyle: {
                    color: '#fff'
                },
                top: '4%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                orient: 'vertical',
                right: '1%',
                top: '2%',
                iconStyle: {
                    color: '#FFEA51',
                    borderColor: '#FFA74D',
                    borderWidth: 1,
                },
                feature: {
                    saveAsImage: {},
                    magicType: {
                        show: true,
                        type: ['line', 'bar', 'stack', 'tiled']
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2012年', '2013年', '2014年', '2015年', '2016年'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '单位(万吨)',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            color: ['#FF4949', '#FFA74D', '#FFEA51', '#4BF0FF', '#44AFF0', '#4E82FF', '#584BFF', '#BE4DFF', '#F845F1'],
            series: [
                {
                    name: '货运量',
                    type: 'line',
                    data: [219130, 198009, 209946, 198024, 210586]
                },
                {
                    name: '铁路货运量',
                    type: 'line',
                    data: [21010, 22469, 20619, 17843, 16313]
                },
                {
                    name: '国家铁路货运量',
                    type: 'line',
                    data: [17866, 19354, 17589, 17709, 18589]
                },
                {
                    name: '地方铁路货运量',
                    type: 'line',
                    data: [3034, 2845, 2712, 2790, 2812]
                },
                {
                    name: '合资铁路货运量',
                    type: 'line',
                    data: [111, 271, 318, 327, 349]
                },
                {
                    name: '公路货运量',
                    type: 'line',
                    data: [195530, 172492, 185286, 175637, 189822]
                },
                {
                    name: '水运货运量',
                    type: 'line',
                    data: [2590, 3048, 4041, 4544, 4451]
                }
            ]
        };
        myChart.setOption(option);
    }

    //湖南货物周转量
    function echart_8() {
        var myChart = echarts.init(document.getElementById('chart_8'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['铁路货物周转量', '国家铁路货物周转量', '地方铁路货物周转量', '合资铁路货物周转量', '公路货物周转量', '水运货物周转量'],
                textStyle: {
                    color: '#fff'
                },
                top: '4%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                orient: 'vertical',
                right: '1%',
                top: '2%',
                iconStyle: {
                    color: '#FFEA51',
                    borderColor: '#FFA74D',
                    borderWidth: 1,
                },
                feature: {
                    saveAsImage: {},
                    magicType: {
                        show: true,
                        type: ['line', 'bar', 'stack', 'tiled']
                    }
                }
            },
            color: ['#FF4949', '#FFA74D', '#FFEA51', '#4BF0FF', '#44AFF0', '#4E82FF', '#584BFF', '#BE4DFF', '#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2014年', '2015年', '2016年', '2017年', '2018年'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '亿吨公里',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [
                {
                    name: '铁路货物周转量',
                    type: 'line',
                    data: [3961.88, 4233.63, 4183.14, 3633.01, 3704.47]
                },
                {
                    name: '国家铁路货物周转量',
                    type: 'line',
                    data: [3374.76, 3364.76, 3274.76, 3371.82, 3259.87]
                },
                {
                    name: '地方铁路货物周转量',
                    type: 'line',
                    data: [14.77, 15.17, 13.17, 14.56, 15.84]
                },
                {
                    name: '合资铁路货物周转量',
                    type: 'line',
                    data: [686.17, 847.26, 895.22, 865.28, 886.72]
                },
                {
                    name: '公路货物周转量',
                    type: 'line',
                    data: [6133.47, 6577.89, 7019.56, 6821.48, 7294.59]
                },
                {
                    name: '水运货物周转量',
                    type: 'line',
                    data: [509.60, 862.54, 1481.77, 1552.79, 1333.62]
                }
            ]
        };
        myChart.setOption(option);
    }

    //湖南运输线长度
    function echart_9() {
        var myChart = echarts.init(document.getElementById('chart_9'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['铁路营业里程', '公路里程', '等级公路里程', '高速等级公路里程', '一级等级公路里程', '二级等级公路里程', '等外公路公路里程'],
                textStyle: {
                    color: '#fff'
                },
                top: '4%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                orient: 'vertical',
                right: '1%',
                top: '2%',
                iconStyle: {
                    color: '#FFEA51',
                    borderColor: '#FFA74D',
                    borderWidth: 1,
                },
                feature: {
                    saveAsImage: {},
                    magicType: {
                        show: true,
                        type: ['line', 'bar', 'stack', 'tiled']
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2014年', '2015年', '2016年', '2017年', '2018年'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '万公里',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            color: ['#FF4949', '#FFA74D', '#FFEA51', '#4BF0FF', '#44AFF0', '#4E82FF', '#584BFF', '#BE4DFF', '#F845F1'],
            series: [
                {
                    name: '铁路营业里程',
                    type: 'line',
                    data: [0.56, 0.63, 0.63, 0.70, 0.70]
                },
                {
                    name: '公路里程',
                    type: 'line',
                    data: [16.30, 17.45, 17.92, 18.46, 18.84]
                },
                {
                    name: '等级公路里程',
                    type: 'line',
                    data: [15.54, 16.77, 17.29, 17.86, 18.26]
                },
                {
                    name: '高速等级公路里程',
                    type: 'line',
                    data: [0.51, 0.56, 0.59, 0.63, 0.65]
                },
                {
                    name: '一级等级公路里程',
                    type: 'line',
                    data: [0.47, 0.48, 0.51, 0.54, 0.56]
                },
                {
                    name: '二级等级公路里程',
                    type: 'line',
                    data: [1.76, 1.85, 1.93, 1.97, 1.99]
                },
                {
                    name: '等外公路公路里程',
                    type: 'line',
                    data: [0.76, 0.68, 0.63, 0.60, 0.58]
                }
            ]
        };
        myChart.setOption(option);
    }

    //湖南省快递业务量
    function echart_10() {
        var myChart = echarts.init(document.getElementById('chart_10'));
        myChart.clear();

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                top: '2%',
                left: '1%',
                textStyle: {
                    color: '#fff'
                },
                data: [
                    '国际', '省外', '省内',
                ]
            },
            color: ['#FF4949', '#FFA74D', '#4BF0FF', '#44AFF0', '#4E82FF', '#584BFF', '#BE4DFF', '#F845F1', '#4BF0FF', '#44AFF0'],
            series: [
                {
                    name: '业务量(万件)',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['28%', '28%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 90392.39, name: '2018年业务量(90392.39万件)'},
                    ]
                },
                {
                    name: '业务量(万件)',
                    type: 'pie',
                    radius: ['20%', '30%'],
                    center: ['28%', '28%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        {value: 464.43, name: '国际'},
                        {value: 68575.6, name: '省外'},
                        {value: 21352.36, name: '省内'},
                    ]
                },
                {
                    name: '业务量(万件)',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['70%', '28%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 54911.94, name: '2017年业务量(54911.94万件)'},
                    ]
                },
                {
                    name: '业务量(万件)',
                    type: 'pie',
                    radius: ['20%', '30%'],
                    center: ['70%', '28%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        {value: 278.5, name: '国际'},
                        {value: 37111.03, name: '省外'},
                        {value: 17522.41, name: '省内'},
                    ]
                },
                {
                    name: '业务量(万件)',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['28%', '70%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 34019.15, name: '2016年业务量(34019.15万件)'},
                    ]
                },
                {
                    name: '业务量(万件)',
                    type: 'pie',
                    radius: ['20%', '30%'],
                    center: ['28%', '70%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        {value: 163.72, name: '国际'},
                        {value: 26841.29, name: '省外'},
                        {value: 7014.14, name: '省内'},
                    ]
                },
                {
                    name: '业务量(万件)',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['70%', '70%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 20755.74, name: '2015年业务量(20755.74万件)'},
                    ]
                },
                {
                    name: '业务量(万件)',
                    type: 'pie',
                    radius: ['20%', '30%'],
                    center: ['70%', '70%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        {value: 129.65, name: '国际'},
                        {value: 18072.54, name: '省外'},
                        {value: 2553.55, name: '省内'},
                    ]
                },
            ]
        };

        myChart.setOption(option);
    }

    //湖南省公路营运
    function echart_11() {
        var myChart = echarts.init(document.getElementById('chart_11'));
        myChart.clear();

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                x: 'left',
                top: '2%',
                left: '1%',
                textStyle: {
                    color: '#fff'
                },
                data: ['公路营运载客', '公路营运载货']
            },
            color: ['#FF4949', '#FFA74D', '#4BF0FF', '#44AFF0', '#4E82FF', '#584BFF', '#BE4DFF', '#F845F1'],
            series: [
                {
                    name: '公路营运',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['28%', '28%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 145.18, name: '2018年公路营运拥有量(145.18万辆)'},
                    ]
                },
                {
                    name: '汽车拥有量(万辆)',
                    type: 'pie',
                    radius: ['20%', '30%'],
                    center: ['28%', '28%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            position: 'outside',
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },

                    data: [
                        {value: 142.65, name: '公路营运载客'},
                        {value: 2.53, name: '公路营运载货'},
                    ]
                },
                {
                    name: '公路营运',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['70%', '28%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 142.47, name: '2017年公路营运拥有量(142.47万辆)'}
                    ]
                },
                {
                    name: '汽车拥有量(万辆)',
                    type: 'pie',
                    radius: ['20%', '30%'],
                    center: ['70%', '28%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            position: 'outside',
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },

                    data: [
                        {value: 139.95, name: '公路营运载客'},
                        {value: 2.52, name: '公路营运载货'},
                        // {value:137.96, name:'2014年公路营运载客汽车拥有量(万辆)'},
                        // {value:2.65, name:'2014年公路营运载货汽车拥有量(万辆)'},
                        // {value:131.48, name:'2013年公路营运载客汽车拥有量(万辆)'},
                        // {value:2.97, name:'2013年公路营运载货汽车拥有量(万辆)'}
                    ]
                },
                {
                    name: '公路营运',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['28%', '70%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 140.61, name: '2016年公路营运拥有量(140.61万辆)'},
                        // {value:142.47, name:'2015年公路营运拥有量(142.47万辆)'},
                        // {value:140.61, name:'2014年公路营运拥有量(140.61万辆)'},
                        // {value:134.45, name:'2013年公路营运拥有量(134.45万辆)'},
                    ]
                },
                {
                    name: '汽车拥有量(万辆)',
                    type: 'pie',
                    radius: ['20%', '30%'],
                    center: ['28%', '70%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            position: 'outside',
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },

                    data: [
                        {value: 137.96, name: '公路营运载客'},
                        {value: 2.65, name: '公路营运载货'},
                        // {value:137.96, name:'2014年公路营运载客汽车拥有量(万辆)'},
                        // {value:2.65, name:'2014年公路营运载货汽车拥有量(万辆)'},
                        // {value:131.48, name:'2013年公路营运载客汽车拥有量(万辆)'},
                        // {value:2.97, name:'2013年公路营运载货汽车拥有量(万辆)'}
                    ]
                },
                {
                    name: '公路营运',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['70%', '70%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 134.45, name: '2015年公路营运拥有量(134.45万辆)'},
                    ]
                },
                {
                    name: '汽车拥有量(万辆)',
                    type: 'pie',
                    radius: ['20%', '30%'],
                    center: ['70%', '70%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            position: 'outside',
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },

                    data: [
                        {value: 131.48, name: '公路营运载客'},
                        {value: 2.97, name: '公路营运载货'},
                        // {value:137.96, name:'2014年公路营运载客汽车拥有量(万辆)'},
                        // {value:2.65, name:'2014年公路营运载货汽车拥有量(万辆)'},
                        // {value:131.48, name:'2013年公路营运载客汽车拥有量(万辆)'},
                        // {value:2.97, name:'2013年公路营运载货汽车拥有量(万辆)'}
                    ]
                }
            ]
        };

        myChart.setOption(option);
    }

    //湖南省城市公共交通
    function echart_12() {
        var myChart = echarts.init(document.getElementById('chart_12'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['公共交通运营数', '运营线路总长度', '公共交通客运总量'],
                textStyle: {
                    color: '#fff'
                },
                top: '4%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                orient: 'vertical',
                right: '1%',
                top: '2%',
                iconStyle: {
                    color: '#FFEA51',
                    borderColor: '#FFA74D',
                    borderWidth: 1,
                },
                feature: {
                    saveAsImage: {},
                    magicType: {
                        show: true,
                        type: ['line', 'bar', 'stack', 'tiled']
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2014年', '2015年', '2016年', '2017年', '2018年'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '万公里',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            color: ['#FF4949', '#FFA74D', '#FFEA51', '#4BF0FF', '#44AFF0', '#4E82FF', '#584BFF', '#BE4DFF', '#F845F1'],
            series: [
                {
                    name: '公共交通运营数',
                    type: 'line',
                    data: [16493, 17498, 15977, 18927, 21479]
                },
                {
                    name: '运营线路总长度',
                    type: 'line',
                    data: [18812, 19647, 20305, 22940, 26077]
                },
                {
                    name: '公共交通客运总量',
                    type: 'line',
                    data: [203954, 202727, 205342, 187208, 186048]
                },
            ]
        };
        myChart.setOption(option);
    }

    //SUV各系车总销量
    function echart_13(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_13'), 'chalk');

        var option = {
            title: {
                text: "SUV各系车总销量",
                x: "center"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                x: "left",
                data: ["美系", "英系", "自主", "法系", "德系", "日系", "韩系", "瑞士系"]
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
                    name: "访问来源",
                    type: "pie",
                    radius: ["50%", "70%"],
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
                            name: "美系"
                        },
                        {
                            value: data[1].saleAmount,
                            name: "英系"
                        },
                        {
                            value: data[2].saleAmount,
                            name: "自主"
                        },
                        {
                            value: data[3].saleAmount,
                            name: "法系"
                        },
                        {
                            value: data[4].saleAmount,
                            name: "德系"
                        },
                        {
                            value: data[5].saleAmount,
                            name: "日系"
                        },
                        {
                            value: data[6].saleAmount,
                            name: "韩系"
                        },
                        {
                            value: data[7].saleAmount,
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

    //GPS
    function echart_14(data1,data2,data3,data4,data5,data6){
        var myChart = echarts.init(document.getElementById('chart_14'), 'chalk');

        var option = {
            title: {
                text: "轿车各系销量排行榜"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["top1", "top2", "top3"]
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
                    data: ["美系", "自主", "法系", "德系", "日系", "韩系"]
                }
            ],
            series: [
                {
                    name: "top1",
                    type: "bar",
                    data: [data1[0].saleAmount, data2[0].saleAmount,data3[0].saleAmount, data4[0].saleAmount, data5[0].saleAmount, data6[0].saleAmount]
                },
                {
                    name: "top2",
                    type: "bar",
                    data: [data1[1].saleAmount, data2[1].saleAmount, data3[1].saleAmount, data4[1].saleAmount, data5[1].saleAmount, data6[1].saleAmount]
                },
                {
                    type: "bar",
                    name: "top3",
                    data: [data1[2].saleAmount, data2[2].saleAmount, data3[2].saleAmount, data4[2].saleAmount, data5[2].saleAmount, data6[2].saleAmount]
                }
            ]
        };

        myChart.setOption(option);

        // 获取百度地图实例，使用百度地图自带的控件
        var bmap = myChart.getModel().getComponent('bmap').getBMap();
        bmap.addControl(new BMap.NavigationControl());  //左侧缩放；
        bmap.enableDragging();   //开启拖拽

        var opts = {
            offset: {height:-5,width:5},
            width : 250,     // 信息窗口宽度
            height: 150,     // 信息窗口高度
            title : "" , // 信息窗口标题
            enableMessage:true//设置允许信息窗发送短息
        };
        for(var i=0;i<data.length;i++){
            var icon = new BMap.Icon('../images/ico.png', new BMap.Size(10, 10), {
                anchor: new BMap.Size(5, 5)
            });
            var marker = new BMap.Marker(new BMap.Point(geoCoordMap[data[i].name][0],geoCoordMap[data[i].name][1]),{icon: icon});  // 创建标注
            var content = "<b>"+data[i].name+"</b><br><br>" +
                "园区地址："+ data[i].address +"<br>" +
                "园区类型："+ data[i].typeName +"<br>" +
                "园区面积："+ data[i].area +"<br>" +
                "入驻企业："+ data[i].value +"家<br>"+
                "服务范围："+ data[i].service;

            bmap.addOverlay(marker);               // 将标注添加到地图中
            addClickHandler(content,marker);
        }
        function addClickHandler(content,marker){
            marker.addEventListener("mouseover",function(e){
                openInfo(content,e);
            });
            marker.addEventListener("mouseout",function(e){
                bmap.closeInfoWindow(); //关闭信息窗口
            });
        }
        function openInfo(content,e){
            var p = e.target;
            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
            var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
            bmap.openInfoWindow(infoWindow,point); //开启信息窗口
        }
    }

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
        echart_6();
    });
    $('.t_btn5').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos4').css('display', 'block');
        echart_1();
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
        echart_7();
    });
    $('.t_btn8').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos8').css('display', 'block');
        echart_8();
    });
    $('.t_btn9').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos9').css('display', 'block');
        echart_9();
    });
    $('.t_btn10').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos10').css('display', 'block');
        echart_10();
    });
    $('.t_btn11').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos11').css('display', 'block');
        echart_11();
    });
    $('.t_btn12').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos12').css('display', 'block');
        echart_12();
    });
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
        function getUrlParms(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null)
                return unescape(r[2]);
            return null;
        }

        var id = getUrlParms("id");
        if (id == 2) {
            $('.center_text').css('display', 'none');
            $('.t_cos10').css('display', 'block');
            echart_10();
        }
        if (id == 3) {
            $('.center_text').css('display', 'none');
            $('.t_cos11').css('display', 'block');
            echart_11();
        }
        if (id == 4) {
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

        }
        if (id == 5) {
            $('.center_text').css('display', 'none');
            $('.t_cos6').css('display', 'block');
            echart_6();
        }
        if (id == 6) {
            $('.center_text').css('display', 'none');
            $('.t_cos4').css('display', 'block');
            echart_1();
        }
        if (id == 7) {
            $('.center_text').css('display', 'none');
            $('.t_cos8').css('display', 'block');
            echart_8();
        }
        if (id == 8) {
            $('.center_text').css('display', 'none');
            $('.t_cos12').css('display', 'block');
            echart_12();
        }
        if (id == 9) {
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
        }
    });
});
