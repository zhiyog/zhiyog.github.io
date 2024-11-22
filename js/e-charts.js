// 初始化ECharts实例，将图表绑定到HTML中的元素（id为'chart'的DOM元素）
var myChart = echarts.init(document.getElementById('chart'));

// 数据部分，定义了时间分配的相关数据
const data = [
    { index: 0, Study: 0, Music: 0, Game: 0, Coding: 0, Family: 10 }, // 每一项表示某一时间点的分配
    { index: 6, Study: 6, Music: 0, Game: 0, Coding: 0, Family: 4 },
    { index: 9, Study: 4, Music: 0, Game: 3, Coding: 0, Family: 3 },
    { index: 18, Study: 3, Music: 0, Game: 2, Coding: 3, Family: 2 },
    { index: 23, Study: 2, Music: 1, Game: 2, Coding: 3, Family: 2 },
    { index: 25, Study: 2, Music: 1, Game: 2, Coding: 3, Family: 2 },
    { index: 27, Study: 3, Music: 0, Game: 1, Coding: 4, Family: 2 }
];

// 定义类别数组，用于生成图例（legend）和series数据
const categories = ['Study', 'Music', 'Game', 'Coding', 'Family'];

// 提取横轴数据（index字段作为x轴数据）
const xData = data.map(d => d.index);
const colors = ['rgb(167, 243, 208)', '#FFFFFF', '#FFFF99', '#9999FF', '#99FF99'];
// 根据每个类别生成series数据
const seriesData = categories.map(category => ({
    name: category, // 类别名，显示在图例中
    type: 'line', // 折线图
    stack: 'Total', // 堆叠属性，使数据按类别堆叠显示
    smooth: true, // 平滑曲线
    areaStyle: {}, // 填充曲线下方区域
    emphasis: { focus: 'series' }, // 鼠标悬停时高亮当前曲线
    data: data.map(d => d[category]) // 提取每个类别对应的数据
}));

// 配置项，用于定义图表的外观和交互功能
const option = {

    tooltip: {
        trigger: 'item', // 触发提示框的方式
    },
    grid: {
        left: '6%', // 图表网格离容器左侧的距离
        right: '4%', // 图表网格离容器右侧的距离
        bottom: '6%', // 图表网格离容器底部的距离
        
    },
    xAxis: {
        
        type: 'category', // 横轴为分类轴
        boundaryGap: false, // 折线图起点不留空白
        data: xData, // 横轴数据
        lineStyle: {
            color: 'rgba(255,255,255,0.1)',
            width:4
        },
        axisLabel: {
            formatter: value => (value % 5 === 0 ? value : '') // 每隔5显示一个标签
        }
    },
    yAxis: {
        lineStyle: {
            color: 'rgba(255,255,255,0.1)',
            width:4
        },
        // 纵轴未定义具体数据范围和刻度，ECharts会自动调整
    },
    series: seriesData // 数据系列
};

// 使用配置项生成图表
myChart.setOption(option);
window.addEventListener('resize', () => {
    myChart.resize();
});