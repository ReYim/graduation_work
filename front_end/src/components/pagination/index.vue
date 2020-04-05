<template>
  <div class="pagination" style="margin:10px 10px 10px 0;float:right">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10]"
      :page-size="pagesize"
      :total="total"
      layout="prev, pager, next, sizes, jumper"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: Number,
    tableData: Array
  },
  data() {
    return {
      currentPage: 1,
      pagesize: 5
    };
  },
  methods: {
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

<style>
</style>