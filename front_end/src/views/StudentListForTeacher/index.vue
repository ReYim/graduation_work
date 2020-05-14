<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="keyword"
        placeholder="请输入姓名或学号搜索"
        style="width: 300px;"
        class="filter-item"
        clearable
        @clear="clearSearch"
        @keyup.enter.native="handleFilter"
      />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreate"
      >添加</el-button>
      <el-button
        class="filter-item"
        type="primary"
        icon="el-icon-download"
        @click="handleDownload"
      >导出</el-button>
    </div>

    <el-table
      v-loading="listLoading"
      :data="student_list | pagination(currentPage, pagesize)"
      border
      fit
      highlight-current-row
      stripe
      style="width: 100%;"
    >
      <el-table-column label="序号" prop="id" align="center" width="80">
        <template slot-scope="{row,$index}">
          <span>{{$index + 1}}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" min-width="250px" width="400px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.user_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="学号" width="250px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.student_info.student_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="学院" min-width="350px" width="400px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.student_info.faculty }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="primary" size="mini" icon="el-icon-help" @click="handleDetail(row)">详细信息</el-button>
          <el-button size="mini" icon="el-icon-delete" @click="handleDelete(row,$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination" style="margin:10px 10px 10px 0;float:right">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20]"
        :page-size="pagesize"
        :total="total"
        layout="prev, pager, next, sizes, jumper"
      ></el-pagination>
    </div>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :model="temp"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="temp.student_name" />
        </el-form-item>
        <el-form-item label="学号" prop="number">
          <el-input v-model="temp.student_info.student_id" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">提交</el-button>
      </div>
    </el-dialog>
    <el-drawer :visible.sync="drawer" :with-header="false" size="60%">
      <div class="drawer-header">
        <div class="title">
          <span>
            学生
            <span style="font-weight:600">{{student_infos.user_name}}</span> 的详情信息
          </span>
        </div>
        <div class="content" v-if="drawer">
          <el-tabs type="border-card">
            <el-tab-pane label="基本信息">
              <el-card class="box-card">
                <div class="text item">
                  <span class="label">专业：</span>
                  {{student_infos.student_info.major}}
                </div>
                <div class="text item">
                  <span class="label">宿舍地址：</span>
                  {{student_infos.student_info.dormitory_address}}
                </div>
                <div class="text item">
                  <span class="label">性别：</span>
                  {{student_infos.student_info.gender}}
                </div>
                <div class="text item">
                  <span class="label">民族：</span>
                  {{student_infos.student_info.nation}}
                </div>
                <div class="text item">
                  <span class="label">身份证：</span>
                  {{student_infos.student_info.id_number}}
                </div>
                <div class="text item">
                  <span class="label">手机号：</span>
                  {{student_infos.student_info.phone_number}}
                </div>
                <div class="text item">
                  <span class="label">生源地：</span>
                  {{student_infos.student_info.birth_place}}
                </div>
                <div class="text item">
                  <span class="label">生源类别：</span>
                  {{student_infos.student_info.source_category}}
                </div>
                <div class="text item">
                  <span class="label">是否参军：</span>
                  {{student_infos.student_info.join_army}}
                </div>
              </el-card>
            </el-tab-pane>
            <el-tab-pane label="家庭信息">
              <el-card class="box-card">
                <div class="text item">
                  <span class="label">家庭地址：</span>
                  {{student_infos.student_info.home_address}}
                </div>
                <div class="text item">
                  <span class="label">户籍地址：</span>
                  {{student_infos.student_info.residence_address}}
                </div>
                <div class="text item"
                  v-show="student_infos.student_info.family_memeber_name_1 || 
                  student_infos.student_info.family_memeber_relation_1 ||
                  student_infos.student_info.family_memeber_job_1"                
                >
                  <span class="label">
                    <i style="font-weight:600;">·</i> 家庭成员-1
                  </span>
                  <div style="border:solid 1px #e4d2ec;margin:10px">
                    <div class="text item">
                      <span class="label">姓名：</span>
                      {{student_infos.student_info.family_memeber_name_1}}
                    </div>
                    <div class="text item">
                      <span class="label">与本人关系：</span>
                      {{student_infos.student_info.family_memeber_relation_1}}
                    </div>
                    <div class="text item">
                      <span class="label">工作单位：</span>
                      {{student_infos.student_info.family_memeber_job_1}}
                    </div>
                  </div>
                </div>
                <div class="text item"
                  v-show="student_infos.student_info.family_memeber_name_2 || 
                  student_infos.student_info.family_memeber_relation_2 ||
                  student_infos.student_info.family_memeber_job_2"                
                >
                  <span class="label">
                    <i style="font-weight:600;">·</i> 家庭成员-2
                  </span>
                  <div style="border:solid 1px #e4d2ec;margin:10px">
                    <div class="text item">
                      <span class="label">姓名：</span>
                      {{student_infos.student_info.family_memeber_name_2}}
                    </div>
                    <div class="text item">
                      <span class="label">与本人关系：</span>
                      {{student_infos.student_info.family_memeber_relation_2}}
                    </div>
                    <div class="text item">
                      <span class="label">工作单位：</span>
                      {{student_infos.student_info.family_memeber_job_2}}
                    </div>
                  </div>
                </div>
                <div class="text item"
                  v-show="student_infos.student_info.family_memeber_name_3 || 
                  student_infos.student_info.family_memeber_relation_3 ||
                  student_infos.student_info.family_memeber_job_3"                
                >
                  <span class="label">
                    <i style="font-weight:600;">·</i> 家庭成员-3
                  </span>
                  <div style="border:solid 1px #e4d2ec;margin:10px">
                    <div class="text item">
                      <span class="label">姓名：</span>
                      {{student_infos.student_info.family_memeber_name_3}}
                    </div>
                    <div class="text item">
                      <span class="label">与本人关系：</span>
                      {{student_infos.student_info.family_memeber_relation_3}}
                    </div>
                    <div class="text item">
                      <span class="label">工作单位：</span>
                      {{student_infos.student_info.family_memeber_job_3}}
                    </div>
                  </div>
                </div>
                <div
                  class="text item"
                  v-show="student_infos.student_info.family_memeber_name_4 || 
                  student_infos.student_info.family_memeber_relation_4 || 
                  student_infos.student_info.family_memeber_job_4"
                >
                  <span class="label">
                    <i style="font-weight:600;">·</i> 家庭成员-4
                  </span>
                  <div style="border:solid 1px #e4d2ec;margin:10px">
                    <div class="text item">
                      <span class="label">姓名：</span>
                      {{student_infos.student_info.family_memeber_name_4}}
                    </div>
                    <div class="text item">
                      <span class="label">与本人关系：</span>
                      {{student_infos.student_info.family_memeber_relation_4}}
                    </div>
                    <div class="text item">
                      <span class="label">工作单位：</span>
                      {{student_infos.student_info.family_memeber_job_4}}
                    </div>
                  </div>
                </div>
                <div class="text item"
                  v-show="student_infos.student_info.family_memeber_name_5 || 
                  student_infos.student_info.family_memeber_relation_5 ||
                  student_infos.student_info.family_memeber_job_5"                
                >
                  <span class="label">
                    <i style="font-weight:600;">·</i> 家庭成员-5
                  </span>
                  <div style="border:solid 1px #e4d2ec;margin:10px">
                    <div class="text item">
                      <span class="label">姓名：</span>
                      {{student_infos.student_info.family_memeber_name_5}}
                    </div>
                    <div class="text item">
                      <span class="label">与本人关系：</span>
                      {{student_infos.student_info.family_memeber_relation_5}}
                    </div>
                    <div class="text item">
                      <span class="label">工作单位：</span>
                      {{student_infos.student_info.family_memeber_job_5}}
                    </div>
                  </div>
                </div>
              </el-card>
            </el-tab-pane>
            <el-tab-pane label="学业信息">
              <el-card class="box-card">
                <div class="text item">
                  <span class="label">请假记录：</span>
                  {{student_infos.student_info.leave_record}}
                </div>
                <div class="text item">
                  <span class="label">休学记录：</span>
                  {{student_infos.student_info.suspension_record}}
                </div>
                <div class="text item">
                  <span class="label">转专业记录：</span>
                  {{student_infos.student_info.transfer_professional_record}}
                </div>
                <div class="text item">
                  <span class="label">获奖记录：</span>
                  {{student_infos.student_info.award_record}}
                </div>
                <div class="text item">
                  <span class="label">学业处分记录：</span>
                  {{student_infos.student_info.academic_disciplinary_record}}
                </div>
                <div class="text item">
                  <span class="label">受处分记录及等级：</span>
                  {{student_infos.student_info.disciplinary_record}}
                </div>
                <div class="text item">
                  <span class="label">受资助记录：</span>
                  {{student_infos.student_info.funded_record}}
                </div>
                <div class="text item">
                  <span class="label">兼职记录：</span>
                  {{student_infos.student_info.part_time_record}}
                </div>
                <div class="text item">
                  <span class="label">就业情况：</span>
                  {{student_infos.student_info.employment_status}}
                </div>
                <div class="text item">
                  <span class="label">延毕记录及原因：</span>
                  {{student_infos.student_info.extended_record}}
                </div>
                <div class="text item">
                  <span class="label">在校期间整体表现情况：</span>
                  {{student_infos.student_info.school_performance}}
                </div>                                                
              </el-card>              
            </el-tab-pane>
            <el-tab-pane label="其它信息">
              <el-card class="box-card">
                <div class="text item">
                  <span class="label">备注信息：</span>
                  {{student_infos.student_info.family_police_station}}
                </div>
                <!-- <div class="text item">
                  <span class="label">家庭所在社区及联系方式：</span>
                  {{student_infos.student_info.family_community_station}}
                </div>
                <div class="text item">
                  <span class="label">所持有出入境证件类型：</span>
                  {{student_infos.student_info.passport_type}}
                </div>
                <div class="text item">
                  <span class="label">出入境证件是否上交学校：</span>
                  {{student_infos.student_info.password_turn_in_school}}
                </div>
                <div class="text item">
                  <span class="label">未上交原因：</span>
                  {{student_infos.student_info.password_not_turn_in_school}}
                </div>                                                -->
              </el-card>               
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="btn-layer">
          <div style="float:right;padding:12px 25px 12px">
          <el-button size="mini" style="width:86px;height:36px;" type="primary" icon="el-icon-download" @click="studentDownload">导出</el-button>
            <el-button size="mini" style="width:86px;height:36px;" @click="drawer = false">关闭</el-button>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
const calendarTypeOptions = [
  { key: "teacher", display_name: "老师" },
  { key: "0", display_name: "无权限" }
];

export default {
  name: "ComplexTable",
  data() {
    return {
      keyword: "",
      drawer: false,
      student_infos: {},
      create_teacher_name: "",
      create_teacher_id: "",
      currentPage: 1,
      pagesize: 10,
      total: 0,
      id: "",
      student_list: [],
      copy_student_list: [],
      total: 0,
      listLoading: false,
      calendarTypeOptions,
      temp: {
        student_name: "",
        student_info: {}
      },
      dialogFormVisible: false,
      dialogStatus: "",
      textMap: {
        update: "详情",
        create: "添加"
      }
    };
  },
  computed: {
    ...mapGetters({
      create_name: "name",
      create_id: "id"
    })
  },
  mounted() {
    this.create_teacher_name = this.create_name;
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = false;
      axios
        .get(
          "http://123.56.88.197/student/get_student?teacher_id=" +
            this.create_teacher_name
        )
        .then(response => {
          // 请求成功的处理
          if (response.data.code === 200) {
            this.student_list = response.data.data;
            this.total = this.student_list.length;
            this.copy_student_list = JSON.parse(
              JSON.stringify(this.student_list)
            ); // 先转为JSON字符串，再解析成javascript值
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
    },
    resetTemp() {
      this.temp = {
        student_name: "",
        student_info: {}
      };
    },
    handleCreate() {
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    createData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          console.log(valid);
          console.log("添加", this.temp);
          axios
            .post("http://123.56.88.197/student/add_student", {
              // 放在 body 中的请求参数
              student_name: this.temp.student_name,
              student_id: this.temp.student_info.student_id,
              charger_teacher_name: this.create_teacher_name
            })
            .then(response => {
              // 请求成功的处理
              console.log(response.data);
              if (response.data.code === 200) {
                this.dialogFormVisible = false;
                this.$message({
                  type: "success",
                  message: "添加学生信息成功"
                });
                this.getList();
              } else {
                this.$message({
                  type: "success",
                  message: "添加学生信息失败"
                });
              }
            })
            .catch(response => {
              // 请求失败的处理
            });
        }
      });
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row); // copy obj
      console.log(this.temp);

      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    updateData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          console.log(valid);
          console.log("编辑", this.temp);
          axios
            .get(
              "http://123.56.88.197/teacher/update_teacher?user_name=" +
              this.temp.user_name + // 名字不能改，后台以名字查询进行update
                "&management_faculty=" +
                this.temp.teacher_info.management_faculty +
                "&user_role=" +
                this.temp.user_role
            )
            .then(response => {
              // 请求成功的处理
              console.log(response.data);
              if (response.data.code === 200) {
                this.dialogFormVisible = false;
                this.getList();
              } else {
              }
            })
            .catch(response => {
              // 请求失败的处理
            });
        }
      });
    },
    handleDelete(row, index) {
      axios
        .get(
          "http://123.56.88.197/student/del_student?student_name=" +
            row.user_name
        )
        .then(response => {
          // 请求成功的处理
          if (response.data.code === 200) {
            this.student_list.splice(index, 1);
            this.$message({
              type: "success",
              message: "删除学生信息成功"
            });
            this.getList();
          } else {
            this.$message({
              type: "error",
              message: "删除学生信息失败"
            });
          }
        })
        .catch(response => {
          // 请求失败的处理
        });
    },
    handleDetail(row) {
      console.log(row);
      this.student_infos = row;
      this.drawer = true;
      console.log(this.student_infos);
    },
    handleDownload() {
      var values = ["姓名", "学号", "学院", "分管老师"];
      var datas = this.student_list;
      let str = "";
      for (let i = 0; i < values.length; i++) {
        str += values[i] + ",";
      }
      str += "\n";
      for (let j = 0; j < datas.length; j++) {
        // todo 内容中的英文分隔符也被分割成了单独一个
        str +=
          datas[j].user_name +
          "," +
          datas[j].student_info.student_id +
          "," +
          datas[j].student_info.faculty +
          "," +
          datas[j].student_info.charger_teacher_id +
          "\n";
      }
      // encodeURIComponent解决中文乱码
      let uri = "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(str);
      // 通过创建a标签实现
      let link = document.createElement("a");
      link.href = uri;
      // 对下载的文件命名
      link.download = "学生列表" + ".xlsx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    studentDownload() {
      var values = ["姓名", "学号", "学院", "分管老师", "专业", "宿舍地址", "性别", "民族", "身份证", "手机号", "生源地", "生源类别", "是否参军"];
      var datas = this.student_infos;
      console.log(datas);
      
      let str = "";
      for (let i = 0; i < values.length; i++) {
        str += values[i] + ",";
      }
      str += "\n";
      // for (let j = 0; j < datas.length; j++) {
        // todo 内容中的英文分隔符也被分割成了单独一个
        str +=
          datas.user_name +
          "," +
          datas.student_info.student_id +
          "," +
          datas.student_info.faculty +
          "," +
          datas.student_info.charger_teacher_id +
          "," +
          datas.student_info.major +
          "," +
          datas.student_info.dormitory_address +
          "," +
          datas.student_info.gender +
          "," +
          datas.student_info.nation +
          "," +
          datas.student_info.id_number +
          "," +
          datas.student_info.phone_number +
          "," +
          datas.student_info.residence_address +  
          "," +
          datas.student_info.source_category +
          "," +
          datas.student_info.join_army +                                                                    
          "\n";
      // }
      // encodeURIComponent解决中文乱码
      let uri = "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(str);
      // 通过创建a标签实现
      let link = document.createElement("a");
      link.href = uri;
      // 对下载的文件命名
      link.download = "学生" + datas.user_name + "的基本信息" + ".xlsx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },    
    clearSearch() {
      this.handleFilter();
    },
    handleFilter() {
      if (this.keyword) {
        this.student_list = this.copy_student_list.filter(item => {
          return (
            JSON.stringify(item.student_info.student_id).indexOf(this.keyword) >
              -1 || JSON.stringify(item.user_name).indexOf(this.keyword) > -1
          );
        });
        this.total = this.student_list.length;
        this.currentPage = 1;
      } else {
        this.student_list = this.copy_student_list;
        this.total = this.student_list.length;
      }
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  },
  filters: {
    pagination(tableData, pageNum, pagesize) {
      let offset = (pageNum - 1) * pagesize; //当前页第一条的索引
      let data =
        offset + pagesize >= tableData.length
          ? tableData.slice(offset, tableData.length)
          : tableData.slice(offset, offset + pagesize);
      return data;
    }
  }
};
</script>

<style lang="scss" scoped>
.el-table {
  margin-top: 30px;
}
.el-table--border,
.el-table--group {
  border: 1px solid #dfe0e2;
}
.el-table--border td,
.el-table--border th {
  border-right: 1px solid #dfe0e2;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #dfe0e2;
}
.drawer-header {
  height: 54px;
  background: rgba(13, 33, 56, 1);
  .title {
    padding: 15px 0 14px 35px;
    span {
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 25px;
    }
  }
  .content {
    padding: 25px 25px 20px 35px;
    .table {
      margin-top: 30px;
      border-radius: 2px;
      border: 1px solid rgba(225, 228, 234, 1);
    }
  }
}
.btn-layer {
  position: fixed;
  width: 60%;
  height: 60px;
  bottom: 0;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
}
.box-card {
  .text {
    padding: 10px;
    font-size: 18px;
    color: rgba(13, 33, 56, 1);
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    line-height: 1.5;
    .label {
      color: rgba(13, 33, 56, 1);
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 600;
    }
  }
}
</style>

<style>
.el-table {
  margin-top: 30px;
}
.el-table--border,
.el-table--group {
  border: 1px solid #dfe0e2;
}
.el-table--border td,
.el-table--border th {
  border-right: 1px solid #dfe0e2;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #dfe0e2;
}
.el-card__body {
  height: 620px;
  overflow: auto;
}
</style>