window.onload = function () {
  var arr = [];
  var eles = document.getElementsByClassName("chart");
  Array.prototype.forEach.call(eles, function (ele) {
    arr.push(ele);
  });

  var mapOption = {
    title: {
      text: '交友网站用户地理分布',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['人数']
    },
    visualMap: {
      min: 0,
      max: 1500,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'],           // 文本，默认为数值文本
      calculable: true
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    series: [
      {
        name: '人数',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
          normal: {
            show: true
          },
          emphasis: {
            show: true
          }
        },
        data: [
          { name: '安徽', value: 240 },
          { name: '澳门', value: 3 },
          { name: '北京', value: 930 },
          { name: '福建', value: 319 },
          { name: '甘肃', value: 86 },
          { name: '广东', value: 1462 },
          { name: '广西', value: 312 },
          { name: '贵州', value: 101 },
          { name: '海南', value: 57 },
          { name: '河北', value: 356 },
          { name: '河南', value: 383 },
          { name: '黑龙江', value: 216 },
          { name: '湖北', value: 437 },
          { name: '湖南', value: 345 },
          { name: '吉林', value: 199 },
          { name: '江苏', value: 670 },
          { name: '江西', value: 206 },
          { name: '辽宁', value: 429 },
          { name: '内蒙古', value: 112 },
          { name: '宁夏', value: 36 },
          { name: '青海', value: 20 },
          { name: '山东', value: 698 },
          { name: '山西', value: 119 },
          { name: '陕西', value: 321 },
          { name: '上海', value: 574 },
          { name: '四川', value: 367 },
          { name: '台湾', value: 10 },
          { name: '天津', value: 211 },
          { name: '西藏', value: 9 },
          { name: '香港', value: 17 },
          { name: '新疆', value: 114 },
          { name: '云南', value: 124 },
          { name: '浙江', value: 456 },
          { name: '重庆', value: 222 }
        ]
      }
    ]
  };

  var pieData = genData();
  var pieOption = {
    title : {
        text: '单位性质分布',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: pieData.nameList,
        selected: pieData.selected
    },
    series : [
        {
            name: '就业单位',
            type: 'pie',
            radius : '55%',
            center: ['40%', '50%'],
            data: pieData.seriesData,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
  };

  var dataAxis = ['南京', '上海', '深圳', '苏州', '北京', '杭州', '无锡', '合肥', '广州', '常州'];
  var data = [1280, 698, 298, 260, 240, 237, 94, 87, 83, 78];
  var yMax = 1500;
  var dataShadow = [];

  for (var i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
  }

  var barOption = {
    title: {
        text: '热门城市人数统计',
    },
    xAxis: {
        data: dataAxis,
        axisLabel: {
            inside: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                normal: {color: 'rgba(0,0,0,0.05)'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: dataShadow,
            animation: false
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
            },
            data: data
        }
    ]
};

  var scatterOption = {
    xAxis: {},
    yAxis: {},
    series: [{
        symbolSize: 20,
        data: [
            [19.28, 8.04],
            [15.95, 6.95],
            [14.59, 7.58],
            [10.13, 8.81],
            [8.44, 8.33],
            [6.02, 9.96],
            [5.80, 7.24],
            [4.19, 4.26],
            [2.48, 10.84],
            [2.46, 4.82],
            [2.07, 13.34],
            [1.59, 1.23],
            [1.43, 6.57],
            [1.35, 10.48],
            [1.09, 0.94]
        ],
        type: 'scatter'
    }]
  };

  lineOption = {
    xAxis: {
        type: 'category',
        data: ['2013', '2014', '2015', '2016', '2017']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [41, 43, 57, 79, 143],
        type: 'line'
    }]
};

  echarts.init(arr[0]).setOption(mapOption);
  echarts.init(arr[1]).setOption(pieOption);
  var barChart = echarts.init(arr[2]);
  barChart.setOption(barOption);
  echarts.init(arr[3]).setOption(scatterOption);
  echarts.init(arr[4]).setOption(lineOption);

  function genData() {
    var nameList = [
      '国有企业','民营企业','三资企业','高等教育单位','国家机关', '医疗卫生单位', '其他事业单位', '科研设计单位', '中初教育单位', '部队', '自主创业', '其他'
    ];
    var count = [
      1222, 1204, 768, 512, 470, 257, 197, 134, 91, 46, 13, 122
    ];
    
    var seriesData = [];
    var selected = {};
    for (var i = 0; i < 12; i++) {
      seriesData.push({
          name: nameList[i],
          value: count[i]
      });
      selected[nameList[i]] = seriesData[i];
    }

    return {
        nameList: nameList,
        seriesData: seriesData,
        selected: selected
    };
  };

  // Enable data zoom when user click bar.
  var zoomSize = 6;
  barChart.on('click', function (params) {
      barChart.dispatchAction({
          type: 'dataZoom',
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      });
  });

};