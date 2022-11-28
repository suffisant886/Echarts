(function() {
    var mychart=echarts.init(document.querySelector('.zhe'));
    var option = {
        title: {
          text: ''
        },                    
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['新增粉丝', '新增游客'],
          textStyle:{
            color:"#4c9bfd",
          },
        //   left:'auto',
        //   right:'auto'没起作用？？？
        },
        color:["blue","black"],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        //   show:true,
        //   borderColor:"black"
        },
        
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月', '9月', '10月', '11月', '12月'],
          axisTick:{
            show:false
        },
          axisLabel:{
            color:"#4c9bfd"
          },
          axisLine:{
            show:false
          }
        
        },
        yAxis: {
          type: 'value',
          axisTick:{
            show:false
         },
          axisLabel:{
            color:"#4c9bfd"
          },
          axisLine:{
            show:false
          },
          splitLine:{
            lineStyle:{
                color:"#012f4a"
            }
          }
        },
        series: [
          {
            name: '新增粉丝',
            type: 'line',
            stack: 'Total',
            data: [24, 40, 101, 134, 90, 230, 210,230,120,230,120,230],
            itemStyle:{
                //color:"blue"
            },
            smooth:true
          },
          {
            name: '新增游客',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310,24, 40, 101, 134, 90],
            smooth:true
            // itemStyle:{
            //     color:"black"
            // },
            
          }
        ]
      };
      mychart.setOption(option)
      window.addEventListener('resize',function() {
        mychart.resize()
      })
      //点击切换效果
      $('h2').on('click','a',function() {
        alert(1)
      })
})();