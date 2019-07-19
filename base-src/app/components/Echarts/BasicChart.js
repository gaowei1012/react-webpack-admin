import React from 'react';
// core models
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';



class BasicChart extends React.Component {

  componentDidMount() {
    let Charts = echarts.init(document.querySelector('#echarts'))
    Charts.setOption({
      title: { text: 'Echart柱状图' },
      tooltip: {},
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K']
      },
      yAxis: { },
      series: [{
        name: '销量',
        type: 'bar',
        data: ['5', '34', '23', '12', '1', '22', '12', '56', '54']
      }]
    })
  }

  render() {
    return(
      <div>
        <div id='echarts' style={{width: '450px', height: '300px', textAlign: 'center'}}></div>
      </div>
    )
  }
}

export default BasicChart;
