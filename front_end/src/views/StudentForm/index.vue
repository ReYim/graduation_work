<template>
  <div class="app-container">
    <el-form
      :inline="true"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="130px"
      class="demo-ruleForm"
    >
      <div>
        <div class="title">
          <h1>基本信息</h1>
        </div>
        <div style="margin:20px 0 20px 0;padding:22px 22px 0 22px;background:#f8f8f8">
          <el-form-item label="分管老师名称：" prop="teacher_name">
            <el-input v-model="ruleForm.teacher_name" style="width:300px" disabled></el-input>
          </el-form-item>
          <el-form-item label="姓名：" prop="student_id">
            <el-input v-model="student_name" style="width:300px" disabled></el-input>
          </el-form-item>          
          <el-form-item label="学号：" prop="student_id">
            <el-input v-model="ruleForm.student_id" style="width:300px" disabled></el-input>
          </el-form-item>
          <el-form-item label="学院：" prop="student_faculty">
            <el-input v-model="ruleForm.student_faculty" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item label="宿舍具体地址：" prop="home_address">
            <el-input v-model="ruleForm.home_address" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item label="曾获奖励：" prop="student_awards">
            <el-input v-model="ruleForm.student_awards" style="width:300px"></el-input>
          </el-form-item>
        </div>
      </div>
      <el-form-item style="display:flex;justify-content:center">
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {

  data() {
    return {
      student_name: "",
      ruleForm: {
        teacher_name: "",
        student_id: "",
        student_faculty: "",
        home_address: "",
        student_awards: ""
      },
      rules: {
        teacher_name: [
          { required: true, message: "请输入分管老师名称", trigger: "blur" }
        ],
        student_id: [
          { required: true, message: "请输入学号", trigger: "blur" }
        ],
        student_faculty: [
          { required: true, message: "请输入学院", trigger: "blur" }
        ],
        home_address: [
          { required: true, message: "请输入宿舍具体地址", trigger: "blur" }
        ],
        student_awards: [
          { required: true, message: "请输入曾获奖励", trigger: "blur" }
        ]
      }
    };
  },
  computed: {
    ...mapGetters({
      login_student_name: "name"
    })
  },
  mounted() {
    this.student_name = this.login_student_name;
    this.getInfo();
  },
  methods: {
    getInfo() {
      axios.get(
          "http://localhost:8080/student/get_student_info?student_name=" +
            this.login_student_name
        )
        .then(response => {
          if (response.data.code === 200) {
            let data = response.data.data;
            console.log(data.student_info);
            if (data.student_info.charger_teacher_id) {
              this.ruleForm.teacher_name = data.student_info.charger_teacher_id;
              this.ruleForm.student_id = data.student_info.student_id;
              this.ruleForm.student_faculty = data.student_info.student_faculty;
              this.ruleForm.home_address = data.student_info.home_address;
              this.ruleForm.student_awards = data.student_info.student_awards;
            } else {
              this.resetForm("ruleForm");
            }
          }
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("http://localhost:8080/student/update_student_info", {
              teacher_name: this.ruleForm.teacher_name,
              student_name: this.login_student_name,
              student_id: this.ruleForm.student_id,
              student_faculty: this.ruleForm.student_faculty,
              home_address: this.ruleForm.home_address,
              student_awards: this.ruleForm.student_awards
            })
            .then(response => {
              // 请求成功的处理
              if (response.data.code === 200) {
                this.student_list = response.data.data;
                this.getInfo();
              } else {
                this.$message({
                  type: "error",
                  message: "获取学生信息失败"
                });
              }
            })
            .catch(response => {
              // 请求失败的处理
            });
          this.$message({ type: "success", message: "提交成功" });
        } else {
          this.$message({ type: "warning", message: "提交失败" });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}
.title h1 {
  font-size: 24px;
}
</style>

