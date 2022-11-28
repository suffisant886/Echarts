(function () {
    var mycharts = echarts.init(document.querySelector('.box'));
    var option = {
        color: ['pink', 'blue', 'green'],
        // title: {
        //   text: 'Stacked Line1234'
        // },
        //图表的提示框组件
        tooltip: {
            //触发方式柱状图是item
            trigger: 'axis'
        },
        legend: {//图例组件
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {//直角坐标系相关的配置，可以控制折线图、柱形图的大小，网格距离dom容器的距离大小
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true//显示刻度
        },
        toolbox: {//工具箱组件可以另存为图片功能
            feature: {
                saveAsImage: {}
            }
        },//设置x轴相关配置
        xAxis: {
            type: 'category',
            boundaryGap: false,//内容和坐标轴之间有没有缝隙 
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: {
                color: "red"
            },
            axisLine: {
                show: true
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: "rgba(0,0,0,.6)",
                fontSize: "16"
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(0,0,0,.6)",
                    width: 1,
                    type: "solid"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(0,0,0,.7)"
                }
            }
        },
        series: [//以什么类型显示数据，这里面如果有name那么可以删除data里面的值
            {                                                         
                name: 'Email',
                type: 'line',
                // stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                // stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                // stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                // stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                // stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    mycharts.setOption(option);
    var zhuxingtu=echarts.init(document.querySelector('.zhu'))
    var option2 = {
        title:{
            text:"柱形图",
            left:"45%",
            top:"5%"
        },
        xAxis: {
          type: 'category',
          data: [ "旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [200, 300, 300, 900, 1500, 1200, 600],
            type: 'bar',
            barWidth:35,
            showBackground: true,
            // backgroundStyle: {
            //   color: 'rgba(290, 290, 209, 0.2)'
            // },不知道干嘛的
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5,
                color:"pink"
              }
          } 
        ],
        tooltip:{
            trigger:"axis",
            axisPointer:{
                type:"shadow"
            }
        } 
      };
      zhuxingtu.setOption(option2)
      window.addEventListener('resize',function() {
        mycharts.resize();
      })
})();