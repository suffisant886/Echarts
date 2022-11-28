(function () {
  var heng = echarts.init(document.querySelector('.line'))
  var color1 = ["pink", "blue", "gray", "red", "yellow"]
  var option = {
    title: {
      text: '学习进度',
    },
    // tooltip: {
    //   trigger: 'axis',
    //   axisPointer: {
    //     type: 'shadow'
    //   }
    // },
    // legend: {},
    grid: {
      left: '22%',
      top: '10%',
      bottom: '10%',
      //   containLabel: true
    },
    xAxis: {
      //   type: 'value',
      //   boundaryGap: [0, 0.01]
      show: false
    },
    yAxis: [
      {
        type: 'category',
        data: ['NODE', 'VUE', 'Javascript', 'CSS3', 'HTML5'],
        axisLine: {
          show: false
        },
        inverse:true,
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff"
        },
        axisLabel: {
          textStyle: {
            fontSize: 16,
            color: "black"
          }
        }
      },
      {
        type:"category",
        data:["702","350","610","793","664"],
        axisLine:{
          show:false
        },
        axisLabel:{
          textStyle:{
            fontSize:14,
            color:"blue"
          }
        },
        axisTick:{
          show:false
        },
        inverse:true,
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        yAxisIndex:0,
        data: [70, 34, 60, 78, 69],
        itemStyle: {
          barBorderRadius: 20,
          color: function (res) {
            return color1[res.dataIndex]
          }
        },
        barWidth: 15,
        barCategoryGap: 60,
        label: {
          show: true,
          position: "inside",
          formatter: "{c}%"
        },
        backgroundStyle: {
          color: "blue"
        },
      },

      {
        name: '框',
        type: 'bar',
        barCategoryGap: 50,
        yAxisIndex:1,
        barWidth: 15,
        itemStyle: {
          color: "none",
          barBorderRadius: 15,
          borderColor: "#00c1de",
          borderWide: 3
        },
        data: [100, 100, 100, 100, 100]
      }
    ]
  };
  heng.setOption(option)
})();