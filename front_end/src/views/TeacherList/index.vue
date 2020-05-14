<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="keyword"
        placeholder="请输入姓名或工号搜索"
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
      :data="teacher_list | pagination(currentPage, pagesize)"
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
      <el-table-column label="工号" width="150px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.teacher_info.teacher_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="负责学院" min-width="250px" width="400px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.teacher_info.management_faculty }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="primary" icon="el-icon-setting" size="mini" @click="handleUpdate(row)">编辑</el-button>
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
        label-position="right"
        label-width="100px"
        style="width: 450px; margin-left:20px;"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="temp.user_name" />
        </el-form-item>
        <el-form-item label="工号" prop="number">
          <el-input v-model="temp.teacher_info.teacher_id" />
        </el-form-item>
        <el-form-item label-width="100px" label="负责学院" prop="management_faculty">
          <el-input v-model="temp.teacher_info.management_faculty" />
        </el-form-item>
        <el-form-item label="权限" prop="permission">
          <el-select style="width:350px" v-model="temp.user_role" class="filter-item" placeholder="权限">
            <el-option
              v-for="item in calendarTypeOptions"
              :key="item.key"
              :label="item.display_name"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">提交</el-button>
      </div>
    </el-dialog>
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
      currentPage: 1,
      pagesize: 10,
      total: 0,
      id: "",
      teacher_list: [],
      copy_teacher_list: [],
      calendarTypeOptions,
      temp: {
        user_name: "",
        teacher_info: "",
        user_role: ""
      },
      dialogFormVisible: false,
      dialogStatus: "",
      textMap: {
        update: "编辑",
        create: "添加"
      },
    };
  },
  computed: {
    ...mapGetters(["name"])
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      axios
        .get("https://kujijiku.com/teacher/get_teacher")
        .then(response => {
          // 请求成功的处理
          if (response.data.code === 200) {
            this.teacher_list = response.data.data;
            this.total = this.teacher_list.length;
            this.copy_teacher_list = JSON.parse(
              JSON.stringify(this.teacher_list)
            ); // 先转为JSON字符串，再解析成javascript值
          } else {
            this.$message({
              type: "error",
              message: "获取老师数据错误"
            });
          }
        })
        .catch(response => {
          // 请求失败的处理
        });
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
          axios
            .post("https://kujijiku.com/teacher/add_teacher", {
              // 放在 body 中的请求参数
              teacher_name: this.temp.user_name,
              teacher_id: this.temp.teacher_info.teacher_id,
              management_faculty: this.temp.teacher_info.management_faculty,
              teacher_permission: this.temp.user_role
            })
            .then(response => {
              // 请求成功的处理
              if (response.data.code === 200) {
                this.dialogFormVisible = false;
                this.$message({ type: "success", message: "添加老师信息成功" });
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
    handleUpdate(row) {
      this.temp = Object.assign({}, row); // copy obj

      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    updateData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          // console.log(valid);
          // console.log("编辑", this.temp);
          axios
            .get(
              "https://kujijiku.com/teacher/update_teacher?user_name=" +
              this.temp.user_name + // 名字不能改，后台以名字查询进行update
                "&management_faculty=" +
                this.temp.teacher_info.management_faculty +
                "&user_role=" +
                this.temp.user_role
            )
            .then(response => {
              // 请求成功的处理
              // console.log(response.data);
              if (response.data.code === 200) {
                this.dialogFormVisible = false;
                this.$message({ type: "success", message: "修改老师信息成功" });
                this.getList();
              } else {
                this.$message({ type: "success", message: "修改老师信息失败" });
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
          "https://kujijiku.com/teacher/del_teacher?user_name=" + row.user_name
        )
        .then(response => {
          // 请求成功的处理
          if (response.data.code === 200) {
            this.teacher_list.splice(index, 1);
            this.$message({ type: "success", message: "删除老师信息成功" });
          } else {
            this.$message({
              type: "error",
              message: "删除老师信息失败"
            });
          }
        })
        .catch(response => {
          // 请求失败的处理
        });
    },
    handleDownload() {
      var values = ["姓名", "工号", "负责学院"];
      var datas = this.teacher_list;
      let str = "";
      for (let i = 0; i < values.length; i++) {
        str += values[i] + ",";
      }
      str += "\n";
      for (let j = 0; j < datas.length; j++) {
        str +=
          datas[j].user_name +
          "," +
          datas[j].teacher_info.teacher_id +
          "," +
          datas[j].teacher_info.management_faculty +
          "\n";
      }
      // encodeURIComponent解决中文乱码
      let uri = "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(str);
      // 通过创建a标签实现
      let link = document.createElement("a");
      link.href = uri;
      // 对下载的文件命名
      link.download = "分管老师列表" + ".xlsx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    handleFilter() {
      if (this.keyword) {
        this.teacher_list = this.copy_teacher_list.filter(item => {
          return (
            JSON.stringify(item.teacher_info.teacher_id).indexOf(this.keyword) > -1 ||
            JSON.stringify(item.user_name).indexOf(this.keyword) > -1
          );
        });
        this.total = this.teacher_list.length;
        this.currentPage = 1;
      } else {
        this.teacher_list = this.copy_teacher_list;
        this.total = this.teacher_list.length;
      }
    },
    clearSearch() {
      this.handleFilter();
    },
    resetTemp() {
      this.temp = {
        teacher_name: "",
        teacher_id: "",
        teacher_info: {}
      };
    },     
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
</style>
