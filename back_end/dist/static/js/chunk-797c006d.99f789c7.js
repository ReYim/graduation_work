(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-797c006d"],{"0e05":function(e,s,t){},2017:function(e,s,t){"use strict";var o=t("b12d"),n=t.n(o);n.a},"69bc":function(e,s,t){"use strict";var o=t("0e05"),n=t.n(o);n.a},"9ed6":function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[t("div",{staticClass:"title-container"},[t("h3",{staticClass:"title"},[e._v("民族学生信息管理系统")])]),e._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),t("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(s){e.$set(e.loginForm,"username",s)},expression:"loginForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),t("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleLogin(s)}},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}}),e._v(" "),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),t("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(s){return s.preventDefault(),e.handleLogin(s)}}},[e._v("登录")]),e._v(" "),t("div",{staticClass:"tips"},[t("span",{staticStyle:{"margin-right":"20px"}},[e._v("游客登陆")]),e._v(" "),t("span",{staticStyle:{"margin-right":"20px"}},[e._v("用户名: visitor")]),e._v(" "),t("span",[e._v("password: 123456")])])],1)],1)},n=[],r=(t("61f7"),t("5f87"),t("bc3a")),a=t.n(r),i={name:"Login",data:function(){var e=function(e,s,t){s.length<6?t(new Error("The password can not be less than 6 digits")):t()};return{loginForm:{username:"visitor",password:"123456"},loginRules:{username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur",validator:e}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;console.log(this.loginForm.username),console.log(this.loginForm.password),a.a.get("http://123.56.88.197/user/count_visitors").then((function(e){200===e.data.code?console.log(e.data):console.log("访问量统计失败!")})),this.$refs.loginForm.validate((function(s){if(!s)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(){e.loading=!1}))}))}}},l=i,c=(t("2017"),t("69bc"),t("2877")),d=Object(c["a"])(l,o,n,!1,null,"b8cb57fe",null);s["default"]=d.exports},b12d:function(e,s,t){}}]);