<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "350px"
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.setOptions(this.chartData);
    },
    setOptions({ one, two, three, four, five } = {}) {
      this.chart.setOption({
        title: {
          text: "深圳大学少数民族招生历年分数线",
          left: "center",
          textStyle: {
              color: "#304156",
              fontSize: "14",
          },
        },
        xAxis: {
          data: ["2015", "2016", "2017", "2018", "2019"],
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 15,
          bottom: 30,
          top: 35,
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          },
          padding: [5, 0]
        },
        yAxis: {
          axisTick: {
            show: false
          },
          scale: true,
        },
        legend: {
          data: ["少数民族预科招生分数线","少数民族内高招生分数线"],
          top: 'bottom',
          padding: [0, 0]
        },
        series: [
          {
            name: "少数民族预科招生分数线",
            itemStyle: {
              normal: {
                color: "#FF005A",
                lineStyle: {
                  color: "#FF005A",
                  width: 2
                }
              }
            },
            smooth: true,
            type: "line",
            data: one,
            animationDuration: 2800,
            animationEasing: "cubicInOut"
          },
          {
            name: "少数民族内高招生分数线",
            smooth: true,
            type: "line",
            itemStyle: {
              normal: {
                color: "#3888fa",
                lineStyle: {
                  color: "#3888fa",
                  width: 2
                }
              }
            },
            data: two,
            animationDuration: 2800,
            animationEasing: "quadraticOut"
          },
        //   {
        //     name: "2017",
        //     smooth: true,
        //     type: "line",
        //     itemStyle: {
        //       normal: {
        //         color: "#5fd2cf",
        //         lineStyle: {
        //           color: "#5fd2cf",
        //           width: 2
        //         }
        //       }
        //     },
        //     data: three,
        //     animationDuration: 2800,
        //     animationEasing: "quadraticOut"
        //   },
        //   {
        //     name: "2018",
        //     smooth: true,
        //     type: "line",
        //     itemStyle: {
        //       normal: {
        //         color: "#ffcb8c",
        //         lineStyle: {
        //           color: "#ffcb8c",
        //           width: 2
        //         }
        //       }
        //     },
        //     data: four,
        //     animationDuration: 2800,
        //     animationEasing: "quadraticOut"
        //   },
        //   {
        //     name: "2019",
        //     smooth: true,
        //     type: "line",
        //     itemStyle: {
        //       normal: {
        //         color: "#c8b2f4",
        //         lineStyle: {
        //           color: "#c8b2f4",
        //           width: 2
        //         }
        //       }
        //     },
        //     data: five,
        //     animationDuration: 2800,
        //     animationEasing: "quadraticOut"
        //   }
        ]
      });
    }
  }
};
</script>
