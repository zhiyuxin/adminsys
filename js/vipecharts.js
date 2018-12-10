window.onload = function () {

    //VIP数量
    var vipecharts1 = echarts.init(document.getElementById('vipecharts1'));
    var vipoption1 = {
        title : {
            text: 'VIP等级数量分布图',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}人，占比（{d}%）"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['vip1','vip2','vip3','vip4','vip5','vip6','vip7','vip8','vip9','vip10']
        },
        series : [
            {
                name: '数量分布图',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:1, name:'vip1'},
                    {value:1, name:'vip2'},
                    {value:1, name:'vip3'},
                    {value:1, name:'vip4'},
                    {value:1, name:'vip5'},
                    {value:1, name:'vip6'},
                    {value:1, name:'vip7'},
                    {value:1, name:'vip8'},
                    {value:1, name:'vip9'},
                    {value:1, name:'vip10'},
                ],
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
    vipecharts1.setOption(vipoption1);


    //用户活跃度
    var vipecharts2 = echarts.init(document.getElementById('vipecharts2'));
    var vipoption2 = {
        title : {
            text: 'VIP用户活跃度',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['活跃VIP用户','不活跃VIP用户']
        },
        series : [
            {
                name: '连续在线人数比例',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:56, name:'活跃VIP用户'},
                    {value:44, name:'不活跃VIP用户'}
                ],
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
    vipecharts2.setOption(vipoption2);
};
