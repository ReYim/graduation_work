<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.number"
        placeholder="工号"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button
        :loading="downloadLoading"
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
      <el-table-column label="学号" width="150px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.student_info.student_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="学院" min-width="250px" width="400px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.student_info.student_faculty }}</span>
        </template>
      </el-table-column>
      <el-table-column label="分管老师" min-width="250px" width="400px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.student_info.charger_teacher_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">详细信息</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(row,$index)">删除</el-button>
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
        :rules="rules"
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
        <el-button type="primary" @click="dialogStatus=== createData()">提交</el-button>
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
      manager_name: "",
      manager_id: "",
      currentPage: 1,
      pagesize: 10,
      total: 0,
      id: "",
      student_list: [],
      listLoading: false,
      listQuery: {
        limit: 20,
        importance: undefined,
        number: "",
        type: undefined,
        sort: "+id"
      },
      calendarTypeOptions,
      temp: {
        student_name: "",
        student_info: {}
      },
      dialogFormVisible: false,
      dialogStatus: "",
      textMap: {
        create: "添加学生"
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        student_name: [
          { required: true, message: "不能为空", trigger: "blur" }
        ],
        student_id: [{ required: true, message: "不能为空", trigger: "blur" }]
      },
      downloadLoading: false
    };
  },
  computed: {
    ...mapGetters({
      create_name: "name",
      create_id: "id"
    })
  },
  mounted() {
    this.manager_name = this.create_name;
    this.manager_id = this.create_id;
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = false;
      axios
        .get("http://localhost:8080/student/manager_get_student")
        .then(response => {
          // 请求成功的处理
          if (response.data.code === 200) {
            this.student_list = response.data.data;
            this.total = response.data.data.length;
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
    handleFilter() {
      this.listQuery.page = 1;
      //   this.getList()
    },
    handleCreate() {
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
            .post("http://localhost:8080/student/add_student", {
              // 放在 body 中的请求参数
              student_name: this.temp.student_name,
              student_id: this.temp.student_info.student_id,
              create_name: this.manager_name,
              create_id: this.manager_id
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
      // to do drawer显示详情信息
    },
    handleDelete(row, index) {
      axios
        .get(
          "http://localhost:8080/student/del_student?student_name=" +
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
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    handleDownload() {
      //   this.downloadLoading = true
      //   import('@/vendor/Export2Excel').then(excel => {
      //     const data = this.formatJson(filterVal)
      //     excel.export_json_to_excel({
      //       header: tHeader,
      //       data,
      //       filename: 'table-list'
      //     })
      //     this.downloadLoading = false
      //   })
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
