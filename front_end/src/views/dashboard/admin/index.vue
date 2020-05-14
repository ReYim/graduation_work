<template>
  <div class="dashboard-editor-container">

    <panel-group @handleSetLineChartData="handleSetLineChartData" 
    :visit_count="visit_count"
    :teacher_count="teacher_count"
    :student_count="student_count"
    :preparatory_grade="preparatory_grade"
    />

    <el-row style="background:#fff;padding:16px 16px 20px;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart 
          :computer_major_count="computer_major_count"
          :communication_major_count="communication_major_count"
          :law_major_count="law_major_count"
          :management_major_count="management_major_count"
          :economics_major_count="economics_major_count"           
          />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart 
          :preparatory_grade="preparatory_grade"
          :first_grade="first_grade"
          :second_grade="second_grade"
          :third_grade="third_grade"
          :fourth_grade="fourth_grade"
           />
        </div>
      </el-col>
    </el-row>

    <!-- <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <todo-list />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <box-card />
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
// import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import axios from "axios";

const lineChartData = {
  newVisitis: {
    one: [440, 447, 450, 453, 450, 460, 465],
    two: [340, 347, 350, 353, 350, 360, 365],
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    // TransactionTable,
    TodoList,
    // BoxCard
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      visit_count: 1000,
      teacher_count: 0,
      student_count: 0,
      preparatory_grade: 0,
      first_grade: 0,
      second_grade: 0,
      third_grade: 0,
      fourth_grade: 0,
      computer_major_count: 0,
      communication_major_count: 0,
      law_major_count: 0,
      management_major_count: 0,
      economics_major_count: 0,

    }
  },
  mounted() {
    axios.get("https://kujijiku.com/user/count_visitors").then(response => {
      if (response.data.code === 200) {
        this.visit_count = response.data.data.visitor_count;
        this.teacher_count = response.data.data.teacher_count;
        this.student_count = response.data.data.student_count;

        this.preparatory_grade = response.data.data.preparatory_grade;
        this.first_grade = response.data.data.first_grade;
        this.second_grade = response.data.data.second_grade;
        this.third_grade = response.data.data.third_grade;
        this.fourth_grade = response.data.data.fourth_grade;

        this.computer_major_count = response.data.data.computer_major_count;
        this.communication_major_count = response.data.data.communication_major_count;
        this.law_major_count = response.data.data.law_major_count;
        this.management_major_count = response.data.data.management_major_count;
        this.economics_major_count = response.data.data.economics_major_count;

      } else {
        console.log("访问量统计失败!");
      }
    });
  },  
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData.newVisitis
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
