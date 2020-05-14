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
      default: "300px"
    },
    computer_major_count: {
      type: Number
    },
    communication_major_count: {
      type: Number
    },
    law_major_count: {
      type: Number
    },
    management_major_count: {
      type: Number
    },
    economics_major_count: {
      type: Number
    }
  },
  data() {
    return {
      chart: null,
      major_list: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.major_list.push(
        { value: this.computer_major_count, name: '计算机与软件学院' },
        { value: this.communication_major_count, name: '传播学院' },
        { value: this.law_major_count, name: '法学院' },
        { value: this.management_major_count, name: '管理学院' },
        { value: this.economics_major_count, name: '经济学院' },
        // { value: 20, name: "计算机与软件学院" },
        // { value: 15, name: "传播学院" },
        // { value: 10, name: "法学院" },
        // { value: 30, name: "管理学院" },
        // { value: 5, name: "经济学院" }
      );
      // console.log("echarts_data：", this.major_list);
      this.initChart();
    }, 1000);
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
          text: "少数民族学生学院分布图",
          left: "center",
          textStyle: {
            color: "#304156",
            fontSize: "14"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          left: "center",
          bottom: "10",
          data: [
            "计算机与软件学院",
            "传播学院",
            "法学院",
            "管理学院",
            "经济学院"
          ]
        },
        series: [
          {
            name: "学院分布",
            type: "pie",
            roseType: "radius",
            radius: [15, 95],
            center: ["50%", "48%"],
            data: this.major_list,
            // [
            //   { value: 310, name: '计算机与软件学院' },
            //   { value: 240, name: '传播学院' },
            //   { value: 149, name: '法学院' },
            //   { value: 100, name: '管理学院' },
            //   { value: 59, name: '经济学院' }
            // ],
            animationEasing: "cubicInOut",
            animationDuration: 2600
          }
        ]
      });
    }
  }
};
</script>
