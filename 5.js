(function(){
    {
        var mycharts=echarts.init(document.querySelector('.bing'));
        var option = {
            tooltip: {
              trigger: 'item',
              formatter:'{a}</br>{b}:{c}({d}%)'//series:name b:data里面的name c:data的value值
            },
            legend: {
              bottom: '0',
              left: 'center',
              itemWidth:10,
              itemHeight:10,
              textStyle:{
                fontSize:12,
                color:"black"
              }
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                  borderRadius: 10,
                  borderColor: 'black',
                  borderWidth: 1
                },
                label: {
                  show: false,
                  position: 'center'
                },
                // emphasis: {
                //   label: {
                //     show: true,
                //     fontSize: '40',
                //     fontWeight: 'bold'
                //   }
                // },
                labelLine: {
                  show: true
                },
                data: [
                  { value: 1048, name: 'Search Engine' },
                  { value: 735, name: 'Direct' },
                  { value: 580, name: 'Email' },
                  { value: 484, name: 'Union Ads' },
                  { value: 300, name: 'Video Ads' }
                ]
              }
            ]
          };
          mycharts.setOption(option);
    }
})();