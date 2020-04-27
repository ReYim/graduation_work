<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

const animationDuration = 6000;

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
      default: "300px"
    },
    preparatory_grade: {
      type: Number
    },
    first_grade: {
      type: Number
    },
    second_grade: {
      type: Number
    },
    third_grade: {
      type: Number
    },
    fourth_grade: {
      type: Number
    }
  },
  data() {
    return {
      chart: null,
      grade_list: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.grade_list.push(
        this.preparatory_grade,
        this.first_grade,
        this.second_grade,
        this.third_grade,
        this.fourth_grade
      );
      console.log("echarts_data：", this.grade_list);
      this.initChart();
    },1000);
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

      this.chart.setOption({
        title: {
          text: "少数民族学生各年级人数",
          left: "center",
          textStyle: {
            color: "#304156",
            fontSize: "14"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 25,
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["预科", "大一", "大二", "大三", "大四"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "人数",
            type: "bar",
            stack: "vistors",
            barWidth: "30%",
            data: this.grade_list,
            animationDuration
          }
        ]
      });
    }
  }
};
</script>
