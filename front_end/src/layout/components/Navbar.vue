<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <div class="user-name" style="margin-right:200px">
        <span>欢迎，<span style="font-weight:600">{{name}}</span> ！</span>
      </div>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <!-- <img src="http://chuantu.xyz/t6/715/1581698201x2890149538.jpg" class="user-avatar"> -->
          <img :src="avatar" class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>主页</el-dropdown-item>
          </router-link>
          <a target="_blank" href="http://www1.szu.edu.cn/">
            <el-dropdown-item>内网</el-dropdown-item>
          </a>
          <el-dropdown-item @click.native="changePassword">
            <span style="display:block;">修改密码</span>
          </el-dropdown-item>          
          <a target="_blank" href="https://reyim.github.io/">
            <el-dropdown-item>联系作者</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">登出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="请输入新密码" label-width="200">
          <el-input v-model="password1" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="再次输入新密码" label-width="200">
          <el-input v-model="password2" type="password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="clickConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import axios from "axios";
export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data() {
    return {
      dialogFormVisible: false,
      password1: "",
      password2: ""
    };
  },
  computed: {
    ...mapGetters(["sidebar", "avatar", "name"])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    changePassword() {
      this.dialogFormVisible = true;
    },
    clickConfirm() {
      if (this.password1 === this.password2) {
        axios
          .post("http://123.56.88.197:8081/user/reset_password", {
            // 放在 body 中的请求参数
            user_name: this.name,
            password: this.password2
          })
          .then(response => {
            // 请求成功的处理

            this.dialogFormVisible = false;
            this.$router.push({ path: this.redirect || "/" });
            this.$message({
              type: "success",
              message: "密码修改成功"
            });
          })
          .catch(response => {
            // 请求失败的处理
          });
      } else {
        this.$message({
          type: "error",
          message: "两次输入不一样，密码修改失败"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    .user-name {
      position: absolute;
      right: -100px;
      span {
        color: #5a5e66;
        font-size: 14px;
      }
    }
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
