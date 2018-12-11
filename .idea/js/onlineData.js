window.onload = function () {
    //在线数据柱状图
    var onecharts = echarts.init(document.getElementById('onecharts'));
    // 指定图表的配置项和数据
    var onoption1 = {
        title: {
            text: '当日在线人数趋势图',
            x:'center'
        },
        tooltip: {
            trigger: 'axis',
            formatter: "{c}人"
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {},
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    onecharts.setOption(onoption1);
}