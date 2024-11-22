var chartDom = document.getElementById("chart2");
var myChart = echarts.init(chartDom);
if (!chartDom) {
  console.error("容器元素未找到");
}
var option2 = {


  visualMap: {
    top: "middle",
    right: 10,
    color: ["#27ff47", "#ffff82", "#f127ff"],
    calculable: true,
  },
  radar: {
    indicator: [
      { text: "IE8-", max: 400 },
      { text: "IE9+", max: 400 },
      { text: "Safari", max: 400 },
      { text: "Firefox", max: 400 },
      { text: "Chrome", max: 400 },
    ],
    shape: "circle",
  },
  series: Array.from({ length: 28 }, (_, i) => ({
    type: "radar",
    symbol: "none",
    lineStyle: {
      width: 2,
      color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        { offset: 0, color:  "#27ff47"},
        { offset: 1, color: "#ffff82" },
        { offset: 0.5, color: "#f127ff" },
      ]),
    },

    emphasis: {
      lineStyle: { width: 3, color: "#f39c12" },
      areaStyle: { color: "rgba(255, 193, 7, 0.3)" },
    },
    data: [
      {
        value: [
          (40 - i) * 10,
          (38 - i) * 4 + 60,
          i * 5 + 10,
          i * 9,
          (i * i) / 2,
        ],
        name: 2000 + i + "",
      },
    ],
  })),
};

// 使用配置项生成图表
myChart.setOption(option2);
window.addEventListener('resize', () => {
    myChart.resize();
});