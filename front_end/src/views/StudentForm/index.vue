<template>
  <div class="app-container">
    <el-form
      :inline="true"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-collapse>
        <el-collapse-item>
          <template slot="title">
            <span class="collapse-title">
              <i class="header-icon el-icon-user-solid"></i> 填写基本信息
            </span>
          </template>
          <div>
            <div style="margin:10px 0px 10px 0;padding-top: 20px;;background:#f8f8f8">
              <el-form-item label="分管老师名称：" prop="teacher_name">
                <el-input v-model="teacher_name" style="width:300px" disabled></el-input>
              </el-form-item>
              <el-form-item label="姓名：" prop="student_name">
                <el-input v-model="student_name" style="width:300px" disabled></el-input>
              </el-form-item>
              <el-form-item label="学号：" prop="student_id">
                <el-input v-model="student_id" style="width:300px" disabled></el-input>
              </el-form-item>
              <el-form-item label="学院：" prop="faculty">
                <el-input v-model="ruleForm.faculty" style="width:300px"></el-input>
              </el-form-item>
              <el-form-item label="专业：" prop="major">
                <el-input v-model="ruleForm.major" style="width:300px"></el-input>
              </el-form-item>
              <el-form-item label="宿舍地址：" prop="dormitory_address">
                <el-input v-model="ruleForm.dormitory_address" style="width:300px"></el-input>
              </el-form-item>
              <el-form-item label="性别：" prop="gender">
                <el-select v-model="ruleForm.gender" placeholder="请选择性别" style="width:300px">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="民族：" prop="nation">
                <el-input v-model="ruleForm.nation" style="width:300px"></el-input>
              </el-form-item>
              <el-form-item label="身份证：" prop="id_number">
                <el-input v-model="ruleForm.id_number" style="width:300px"></el-input>
              </el-form-item>
              <el-form-item label="手机号：" prop="phone_number">
                <el-input v-model="ruleForm.phone_number" style="width:300px"></el-input>
              </el-form-item>
              <el-form-item label="生源地：" prop="birth_place">
                <el-input v-model="ruleForm.birth_place" style="width:300px"></el-input>
              </el-form-item>
              <el-form-item label="生源类别：" prop="source_category">
                <el-select
                  v-model="ruleForm.source_category"
                  placeholder="请选择生源类别"
                  style="width:300px"
                >
                  <el-option
                    v-for="item in options_source_category"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="是否参军：" prop="join_army">
                <el-select v-model="ruleForm.join_army" placeholder="请选择" style="width:300px">
                  <el-option
                    v-for="item in options_army"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <span class="collapse-title">
              <i class="header-icon el-icon-s-home"></i> 填写家庭信息
            </span>
          </template>
          <div>
            <div style="margin:10px 0px 10px 0;padding-top: 20px;background:#f8f8f8">
              <el-form-item label="家庭地址：" prop="home_address">
                <el-input v-model="ruleForm.home_address" style="width:350px"></el-input>
              </el-form-item>
              <el-form-item label="户籍地址：" prop="residence_address">
                <el-input v-model="ruleForm.residence_address" style="width:350px;"></el-input>
              </el-form-item>

              <el-form-item
                style="display:flex;margin-left:20px;margin-bottom:0;font-weight:600;color:#304156"
              >
                <span style="font-size: 16px;">家庭成员-1：</span>
              </el-form-item>
              <div style="padding-top:22px;margin:0 20px 0 20px;border:solid 1px #e4d2ec">
                <el-form-item label="姓名：" prop="family_memeber_name_1">
                  <el-input v-model="ruleForm.family_memeber_name_1" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="与本人关系：" prop="family_memeber_relation_1">
                  <el-input v-model="ruleForm.family_memeber_relation_1" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="工作单位：" prop="family_memeber_job_1">
                  <el-input v-model="ruleForm.family_memeber_job_1" style="width:300px"></el-input>
                </el-form-item>
              </div>

              <el-form-item
                style="display:flex;margin-left:20px;margin-bottom:0;font-weight:600;color:#304156"
              >
                <span style="font-size: 16px;">家庭成员-2：</span>
              </el-form-item>
              <div style="padding-top:22px;margin:0 20px 0 20px;border:solid 1px #e4d2ec">
                <el-form-item label="姓名：" prop="family_memeber_name_2">
                  <el-input v-model="ruleForm.family_memeber_name_2" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="与本人关系：" prop="family_memeber_relation_2">
                  <el-input v-model="ruleForm.family_memeber_relation_2" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="工作：" prop="family_memeber_job_2">
                  <el-input v-model="ruleForm.family_memeber_job_2" style="width:300px"></el-input>
                </el-form-item>
              </div>

              <el-form-item
                style="display:flex;margin-left:20px;margin-bottom:0;font-weight:600;color:#304156"
              >
                <span style="font-size: 16px;">家庭成员-3：</span>
              </el-form-item>
              <div style="padding-top:22px;margin:0 20px 0 20px;border:solid 1px #e4d2ec">
                <el-form-item label="姓名：" prop="family_memeber_name_3">
                  <el-input v-model="ruleForm.family_memeber_name_3" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="与本人关系：" prop="family_memeber_relation_3">
                  <el-input v-model="ruleForm.family_memeber_relation_3" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="工作：" prop="family_memeber_job_3">
                  <el-input v-model="ruleForm.family_memeber_job_3" style="width:300px"></el-input>
                </el-form-item>
              </div>

              <el-form-item
                style="display:flex;margin-left:20px;margin-bottom:0;font-weight:600;color:#304156"
              >
                <span style="font-size: 16px;">家庭成员-4：</span>
              </el-form-item>
              <div style="padding-top:22px;margin:0 20px 0 20px;border:solid 1px #e4d2ec">
                <el-form-item label="姓名：" prop="family_memeber_name_4">
                  <el-input v-model="ruleForm.family_memeber_name_4" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="与本人关系：" prop="family_memeber_relation_4">
                  <el-input v-model="ruleForm.family_memeber_relation_4" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="工作：" prop="family_memeber_job_4">
                  <el-input v-model="ruleForm.family_memeber_job_4" style="width:300px"></el-input>
                </el-form-item>
              </div>

              <el-form-item
                style="display:flex;margin-left:20px;margin-bottom:0;font-weight:600;color:#304156"
              >
                <span style="font-size: 16px;">家庭成员-5：</span>
              </el-form-item>
              <div style="padding-top:22px;margin:0 20px 0 20px;border:solid 1px #e4d2ec">
                <el-form-item label="姓名：" prop="family_memeber_name_5">
                  <el-input v-model="ruleForm.family_memeber_name_5" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="与本人关系：" prop="family_memeber_relation_5">
                  <el-input v-model="ruleForm.family_memeber_relation_5" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="工作：" prop="family_memeber_job_5">
                  <el-input v-model="ruleForm.family_memeber_job_5" style="width:300px"></el-input>
                </el-form-item>
              </div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <span class="collapse-title">
              <i class="header-icon el-icon-school"></i> 填写学业信息
            </span>
          </template>
          <div>
            <div style="margin:10px 0px 10px 0;padding-top:20px;background:#f8f8f8">
              <el-form-item label="请假记录：" prop="leave_record">
                <el-input
                  v-model="ruleForm.leave_record"
                  type="textarea"
                  :rows="4"
                  style="width:600px"
                ></el-input>
              </el-form-item>
              <el-form-item label="休学记录：" prop="suspension_record">
                <el-input
                  v-model="ruleForm.suspension_record"
                  type="textarea"
                  :rows="4"
                  style="width:600px"
                ></el-input>
              </el-form-item>
              <el-form-item label="转专业记录：" prop="transfer_professional_record">
                <el-input
                  v-model="ruleForm.transfer_professional_record"
                  type="textarea"
                  :rows="4"
                  style="width:600px"
                ></el-input>
              </el-form-item>
              <el-form-item label="获奖记录：" prop="award_record">
                <el-input
                  v-model="ruleForm.award_record"
                  type="textarea"
                  :rows="4"
                  style="width:600px"
                ></el-input>
              </el-form-item>
              <el-form-item label="学业处分记录：" prop="academic_disciplinary_record">
                <el-input
                  v-model="ruleForm.academic_disciplinary_record"
                  type="textarea"
                  :rows="4"
                  style="width:600px"
                ></el-input>
              </el-form-item>
              <el-form-item label="受处分记录及等级：" prop="disciplinary_record">
                <el-input
                  v-model="ruleForm.disciplinary_record"
                  type="textarea"
                  :rows="4"
                  style="width:600px"
                ></el-input>
              </el-form-item>
              <el-form-item label="受资助记录：" prop="funded_record">
                <el-input
                  v-model="ruleForm.funded_record"
                  type="textarea"
                  :rows="4"
                  style="width:600px"
                ></el-input>
              </el-form-item>
              <el-form-item label="兼职记录：" prop="part_time_record">
                <el-input
                  v-model="ruleForm.part_time_record"
                  type="textarea"
                  :rows="4"
                  style="width:600px"
                ></el-input>
              </el-form-item>
              <el-form-item label="就业情况：" prop="employment_status">
                <el-input
                  v-model="ruleForm.employment_status"
                  type="textarea"
                  :rows="4"
                  style="width:600px"
                ></el-input>
              </el-form-item>
              <el-form-item label="延毕记录及原因：" prop="extended_record">
                <el-input
                  v-model="ruleForm.extended_record"
                  type="textarea"
                  :rows="4"
                  style="width:600px"
                ></el-input>
              </el-form-item>
              <el-form-item label="在校期间整体表现情况：" prop="school_performance">
                <el-input
                  v-model="ruleForm.school_performance"
                  type="textarea"
                  :rows="4"
                  style="width:600px"
                ></el-input>
              </el-form-item>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <span class="collapse-title">
              <i class="header-icon el-icon-info"></i> 填写其它信息
            </span>
          </template>
          <div>
            <div style="margin:10px 0px 10px 0;padding-top: 20px;;background:#f8f8f8">
              <el-form-item label="备注信息：" prop="family_police_station" label-width="300px">
                <el-input
                  v-model="ruleForm.family_police_station"
                  type="textarea"
                  :rows="4"
                  style="width:430px"
                ></el-input>
              </el-form-item>
              <!-- <el-form-item
                label="家庭所在社区及联系方式："
                prop="family_community_station"
                label-width="300px"
              >
                <el-input
                  v-model="ruleForm.family_community_station"
                  type="textarea"
                  :rows="4"
                  style="width:430px"
                ></el-input>
              </el-form-item> -->
              <!-- <el-form-item label="所持有出入境证件类型（若无，填写无）：" prop="passport_type" label-width="300px">
                <el-input
                  v-model="ruleForm.passport_type"
                  type="textarea"
                  :rows="4"
                  style="width:430px"
                ></el-input>
              </el-form-item> -->
              <!-- <div style="display:flex;flex-direction: column;">
                <el-form-item
                  label="出入境证件是否上交学校："
                  prop="password_turn_in_school"
                  label-width="300px"
                >
                  <el-radio-group
                    v-model="ruleForm.password_turn_in_school"
                    v-if="ruleForm.passport_type==='无'"
                    disabled
                  >
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                  </el-radio-group>
                  <el-radio-group v-model="ruleForm.password_turn_in_school" v-else>
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item
                  label="未上交原因："
                  prop="password_not_turn_in_school"
                  label-width="300px"
                  style="display:flex"
                >
                  <el-input
                    v-model="ruleForm.password_not_turn_in_school"
                    v-if="ruleForm.passport_type==='无' || ruleForm.password_turn_in_school==='是'"
                    type="textarea"
                    :rows="4"
                    disabled
                    style="width:430px"
                  ></el-input>
                  <el-input
                    v-model="ruleForm.password_not_turn_in_school"
                    type="textarea"
                    :rows="4"
                    v-else
                    style="width:430px"
                  ></el-input>
                </el-form-item>
              </div> -->
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
      <el-form-item style="display:flex;justify-content:center;margin-top:20px">
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
      teacher_name: "",
      student_id: "",
      ruleForm: {
        faculty: "",
        major: "",
        dormitory_address: "",
        gender: "",
        nation: "",
        id_number: "",
        phone_number: "",
        birth_place: "",
        source_category: "",
        join_army: "",
        home_address: "",
        residence_address: "",
        family_memeber_name_1: "",
        family_memeber_relation_1: "",
        family_memeber_job_1: "",
        family_memeber_name_2: "",
        family_memeber_relation_2: "",
        family_memeber_job_2: "",
        family_memeber_name_3: "",
        family_memeber_relation_3: "",
        family_memeber_job_3: "",
        family_memeber_name_4: "",
        family_memeber_relation_4: "",
        family_memeber_job_4: "",
        family_memeber_name_5: "",
        family_memeber_relation_5: "",
        family_memeber_job_5: "",
        leave_record: "",
        suspension_record: "",
        transfer_professional_record: "",
        award_record: "",
        academic_disciplinary_record: "",
        disciplinary_record: "",
        funded_record: "",
        part_time_record: "",
        employment_status: "",
        extended_record: "",
        school_performance: "",
        family_police_station: "",
        family_community_station: "",
        passport_type: "",
        password_turn_in_school: "",
        password_not_turn_in_school: ""
      },
      options: [
        {
          value: 0,
          label: "男"
        },
        {
          value: 1,
          label: "女"
        }
      ],
      options_army: [
        {
          value: 0,
          label: "否"
        },
        {
          value: 1,
          label: "是"
        },
        {
          value: 2,
          label: "已报名"
        }
      ],
      options_source_category: [
        {
          value: 0,
          label: "预科"
        },
        {
          value: 1,
          label: "内高"
        }
      ],
      rules: {
        faculty: [{ required: true, message: "请输入学院", trigger: "blur" }],
        major: [{ required: true, message: "请输入专业", trigger: "blur" }],
        dormitory_address: [
          { required: true, message: "请输入宿舍具体地址", trigger: "blur" }
        ],
        gender: [{ required: true, message: "请选择性别", trigger: "blur" }],
        nation: [{ required: true, message: "请输入民族", trigger: "blur" }],
        id_number: [
          { required: true, message: "请输入身份证号码", trigger: "blur" }
        ],
        phone_number: [
          { required: true, message: "请输入手机号", trigger: "blur" }
        ],
        birth_place: [
          { required: true, message: "请输入生源地", trigger: "blur" }
        ],
        source_category: [
          { required: true, message: "请选择生源类别", trigger: "blur" }
        ],
        join_army: [
          { required: true, message: "请选择是否参军", trigger: "blur" }
        ],
        home_address: [
          { required: true, message: "请输入家庭地址", trigger: "blur" }
        ],
        residence_address: [
          { required: true, message: "请输入户籍地址", trigger: "blur" }
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
      axios
        .get(
          "https://kujijiku.com/student/get_student_info?student_name=" +
            this.login_student_name
        )
        .then(response => {
          if (response.data.code === 200) {
            let data = response.data.data;
            console.log(data.student_info);
            if (data.student_info.charger_teacher_id) {
              this.teacher_name = data.student_info.charger_teacher_id;
              this.student_id = data.student_info.student_id;
              this.ruleForm.faculty = data.student_info.faculty;
              this.ruleForm.major = data.student_info.major;
              this.ruleForm.dormitory_address =
                data.student_info.dormitory_address;
              this.ruleForm.gender = data.student_info.gender;
              this.ruleForm.nation = data.student_info.nation;
              this.ruleForm.id_number = data.student_info.id_number;
              this.ruleForm.phone_number = data.student_info.phone_number;
              this.ruleForm.birth_place = data.student_info.birth_place;
              this.ruleForm.source_category = data.student_info.source_category;
              this.ruleForm.join_army = data.student_info.join_army;
              this.ruleForm.home_address = data.student_info.home_address;
              this.ruleForm.residence_address =
                data.student_info.residence_address;

              this.ruleForm.family_memeber_name_1 =
                data.student_info.family_memeber_name_1;
              this.ruleForm.family_memeber_relation_1 =
                data.student_info.family_memeber_relation_1;
              this.ruleForm.family_memeber_job_1 =
                data.student_info.family_memeber_job_1;

              this.ruleForm.family_memeber_name_2 =
                data.student_info.family_memeber_name_2;
              this.ruleForm.family_memeber_relation_2 =
                data.student_info.family_memeber_relation_2;
              this.ruleForm.family_memeber_job_2 =
                data.student_info.family_memeber_job_2;

              this.ruleForm.family_memeber_name_3 =
                data.student_info.family_memeber_name_3;
              this.ruleForm.family_memeber_relation_3 =
                data.student_info.family_memeber_relation_3;
              this.ruleForm.family_memeber_job_3 =
                data.student_info.family_memeber_job_3;

              this.ruleForm.family_memeber_name_4 =
                data.student_info.family_memeber_name_4;
              this.ruleForm.family_memeber_relation_4 =
                data.student_info.family_memeber_relation_4;
              this.ruleForm.family_memeber_job_4 =
                data.student_info.family_memeber_job_4;

              this.ruleForm.family_memeber_name_5 =
                data.student_info.family_memeber_name_5;
              this.ruleForm.family_memeber_relation_5 =
                data.student_info.family_memeber_relation_5;
              this.ruleForm.family_memeber_job_5 =
                data.student_info.family_memeber_job_5;

              this.ruleForm.leave_record = data.student_info.leave_record;
              this.ruleForm.suspension_record =
                data.student_info.suspension_record;
              this.ruleForm.transfer_professional_record =
                data.student_info.transfer_professional_record;
              this.ruleForm.award_record = data.student_info.award_record;
              this.ruleForm.academic_disciplinary_record =
                data.student_info.academic_disciplinary_record;
              this.ruleForm.disciplinary_record =
                data.student_info.disciplinary_record;
              this.ruleForm.funded_record = data.student_info.funded_record;
              this.ruleForm.part_time_record =
                data.student_info.part_time_record;
              this.ruleForm.employment_status =
                data.student_info.employment_status;
              this.ruleForm.extended_record = data.student_info.extended_record;
              this.ruleForm.school_performance =
                data.student_info.school_performance;
              this.ruleForm.family_police_station =
                data.student_info.family_police_station;
              this.ruleForm.family_community_station =
                data.student_info.family_community_station;
              this.ruleForm.passport_type = data.student_info.passport_type;
              this.ruleForm.password_turn_in_school =
                data.student_info.password_turn_in_school;
              this.ruleForm.password_not_turn_in_school =
                data.student_info.password_not_turn_in_school;
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
            .post("https://kujijiku.com/student/update_student_info", {
              teacher_name: this.teacher_name,
              student_name: this.login_student_name,
              student_id: this.student_id,
              faculty: this.ruleForm.faculty,
              major: this.ruleForm.major,
              dormitory_address: this.ruleForm.dormitory_address,
              gender: this.ruleForm.gender,
              nation: this.ruleForm.nation,
              id_number: this.ruleForm.id_number,
              phone_number: this.ruleForm.phone_number,
              birth_place: this.ruleForm.birth_place,
              source_category: this.ruleForm.source_category,
              join_army: this.ruleForm.join_army,
              home_address: this.ruleForm.home_address,
              residence_address: this.ruleForm.residence_address,

              family_memeber_name_1: this.ruleForm.family_memeber_name_1,
              family_memeber_relation_1: this.ruleForm
                .family_memeber_relation_1,
              family_memeber_job_1: this.ruleForm.family_memeber_job_1,

              family_memeber_name_2: this.ruleForm.family_memeber_name_2,
              family_memeber_relation_2: this.ruleForm
                .family_memeber_relation_2,
              family_memeber_job_2: this.ruleForm.family_memeber_job_2,

              family_memeber_name_3: this.ruleForm.family_memeber_name_3,
              family_memeber_relation_3: this.ruleForm
                .family_memeber_relation_3,
              family_memeber_job_3: this.ruleForm.family_memeber_job_3,

              family_memeber_name_4: this.ruleForm.family_memeber_name_4,
              family_memeber_relation_4: this.ruleForm
                .family_memeber_relation_4,
              family_memeber_job_4: this.ruleForm.family_memeber_job_4,

              family_memeber_name_5: this.ruleForm.family_memeber_name_5,
              family_memeber_relation_5: this.ruleForm
                .family_memeber_relation_5,
              family_memeber_job_5: this.ruleForm.family_memeber_job_5,

              leave_record: this.ruleForm.leave_record,
              suspension_record: this.ruleForm.suspension_record,
              transfer_professional_record: this.ruleForm
                .transfer_professional_record,
              award_record: this.ruleForm.award_record,
              academic_disciplinary_record: this.ruleForm
                .academic_disciplinary_record,
              disciplinary_record: this.ruleForm.disciplinary_record,
              funded_record: this.ruleForm.funded_record,
              part_time_record: this.ruleForm.part_time_record,
              employment_status: this.ruleForm.employment_status,
              extended_record: this.ruleForm.extended_record,
              school_performance: this.ruleForm.school_performance,

              family_police_station: this.ruleForm.family_police_station,
              family_community_station: '暂无',
              passport_type: '暂无',
              password_turn_in_school: '暂无',
              password_not_turn_in_school: '暂无'
            })
            .then(response => {
              // 请求成功的处理
              if (response.data.code === 200) {
                this.$message({ type: "success", message: "提交成功" });
                setTimeout(() => {
                  this.getInfo();
                  this.$router.push({path: '/dashboard'})
                }, 1000);
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
        } else {
          this.$message({ type: "warning", message: "提交信息有误" });
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

<style lang="scss">
.line {
  text-align: center;
}
.title h1 {
  font-size: 24px;
}
.collapse-title {
  margin-left: 45.5%;
  color: rgba(13, 33, 56, 0.7);
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  font-size: 18px;
}
</style>
<style>
/* .el-collapse-item__header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 48px;
  line-height: 48px;
  background-color: #304156b8;
  color: #ffffff;
  cursor: pointer;
  border-bottom: 1px solid #ebeef5;
  font-size: 13px;
  font-weight: 500;
  -webkit-transition: border-bottom-color 0.3s;
  transition: border-bottom-color 0.3s;
  outline: 0;
} */
</style>

