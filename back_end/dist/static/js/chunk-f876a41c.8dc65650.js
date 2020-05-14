(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f876a41c"],{"2cdd":function(t,e,s){"use strict";var n=s("e45e"),a=s.n(n);a.a},"2f04":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"filter-container"},[s("el-input",{staticClass:"filter-item",staticStyle:{width:"300px"},attrs:{placeholder:"请输入姓名或学号搜索",clearable:""},on:{clear:t.clearSearch},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),t._v(" "),s("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("搜索")]),t._v(" "),s("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v("导出")])],1),t._v(" "),s("el-table",{staticStyle:{width:"100%"},attrs:{data:t._f("pagination")(t.student_list,t.currentPage,t.pagesize),border:"",fit:"","highlight-current-row":"",stripe:""}},[s("el-table-column",{attrs:{label:"序号",prop:"id",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){e.row;var n=e.$index;return[s("span",[t._v(t._s(n+1))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"姓名","min-width":"250px",width:"400px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[s("span",[t._v(t._s(n.user_name))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"学号",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[s("span",[t._v(t._s(n.student_info.student_id))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"学院","min-width":"250px",width:"400px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[s("span",[t._v(t._s(n.student_info.faculty))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"分管老师","min-width":"250px",width:"400px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[s("span",[t._v(t._s(n.student_info.charger_teacher_id))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row,a=e.$index;return[s("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-help"},on:{click:function(e){return t.handleDetail(n)}}},[t._v("详细信息")]),t._v(" "),s("el-button",{attrs:{size:"mini",icon:"el-icon-delete"},on:{click:function(e){return t.handleDelete(n,a)}}},[t._v("删除")])]}}])})],1),t._v(" "),s("div",{staticClass:"pagination",staticStyle:{margin:"10px 10px 10px 0",float:"right"}},[s("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[5,10,20],"page-size":t.pagesize,total:t.total,layout:"prev, pager, next, sizes, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),s("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[s("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:t.temp,"label-position":"left","label-width":"70px"}},[s("el-form-item",{attrs:{label:"姓名",prop:"name"}},[s("el-input",{model:{value:t.temp.student_name,callback:function(e){t.$set(t.temp,"student_name",e)},expression:"temp.student_name"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"学号",prop:"number"}},[s("el-input",{model:{value:t.temp.student_info.student_id,callback:function(e){t.$set(t.temp.student_info,"student_id",e)},expression:"temp.student_info.student_id"}})],1)],1),t._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogStatus,t.createData()}}},[t._v("提交")])],1)],1),t._v(" "),s("el-drawer",{attrs:{visible:t.drawer,"with-header":!1,size:"60%"},on:{"update:visible":function(e){t.drawer=e}}},[s("div",{staticClass:"drawer-header"},[s("div",{staticClass:"title"},[s("span",[t._v("\n          学生\n          "),s("span",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.student_infos.user_name))]),t._v(" 的详情信息\n        ")])]),t._v(" "),t.drawer?s("div",{staticClass:"content"},[s("el-tabs",{attrs:{type:"border-card"}},[s("el-tab-pane",{attrs:{label:"基本信息"}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("专业：")]),t._v("\n                "+t._s(t.student_infos.student_info.major)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("宿舍地址：")]),t._v("\n                "+t._s(t.student_infos.student_info.dormitory_address)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("性别：")]),t._v("\n                "+t._s(t.student_infos.student_info.gender)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("民族：")]),t._v("\n                "+t._s(t.student_infos.student_info.nation)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("身份证：")]),t._v("\n                "+t._s(t.student_infos.student_info.id_number)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("手机号：")]),t._v("\n                "+t._s(t.student_infos.student_info.phone_number)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("生源地：")]),t._v("\n                "+t._s(t.student_infos.student_info.birth_place)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("生源类别：")]),t._v("\n                "+t._s(t.student_infos.student_info.source_category)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("是否参军：")]),t._v("\n                "+t._s(t.student_infos.student_info.join_army)+"\n              ")])])],1),t._v(" "),s("el-tab-pane",{attrs:{label:"家庭信息"}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("家庭地址：")]),t._v("\n                "+t._s(t.student_infos.student_info.home_address)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("户籍地址：")]),t._v("\n                "+t._s(t.student_infos.student_info.residence_address)+"\n              ")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.student_infos.student_info.family_memeber_name_1||t.student_infos.student_info.family_memeber_relation_1||t.student_infos.student_info.family_memeber_job_1,expression:"student_infos.student_info.family_memeber_name_1 || \n                student_infos.student_info.family_memeber_relation_1 ||\n                student_infos.student_info.family_memeber_job_1"}],staticClass:"text item"},[s("span",{staticClass:"label"},[s("i",{staticStyle:{"font-weight":"600"}},[t._v("·")]),t._v(" 家庭成员-1\n                ")]),t._v(" "),s("div",{staticStyle:{border:"solid 1px #e4d2ec",margin:"10px"}},[s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("姓名：")]),t._v("\n                    "+t._s(t.student_infos.student_info.family_memeber_name_1)+"\n                  ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("与本人关系：")]),t._v("\n                    "+t._s(t.student_infos.student_info.family_memeber_relation_1)+"\n                  ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("工作单位：")]),t._v("\n                    "+t._s(t.student_infos.student_info.family_memeber_job_1)+"\n                  ")])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.student_infos.student_info.family_memeber_name_2||t.student_infos.student_info.family_memeber_relation_2||t.student_infos.student_info.family_memeber_job_2,expression:"student_infos.student_info.family_memeber_name_2 || \n                student_infos.student_info.family_memeber_relation_2 ||\n                student_infos.student_info.family_memeber_job_2"}],staticClass:"text item"},[s("span",{staticClass:"label"},[s("i",{staticStyle:{"font-weight":"600"}},[t._v("·")]),t._v(" 家庭成员-2\n                ")]),t._v(" "),s("div",{staticStyle:{border:"solid 1px #e4d2ec",margin:"10px"}},[s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("姓名：")]),t._v("\n                    "+t._s(t.student_infos.student_info.family_memeber_name_2)+"\n                  ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("与本人关系：")]),t._v("\n                    "+t._s(t.student_infos.student_info.family_memeber_relation_2)+"\n                  ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("工作单位：")]),t._v("\n                    "+t._s(t.student_infos.student_info.family_memeber_job_2)+"\n                  ")])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.student_infos.student_info.family_memeber_name_3||t.student_infos.student_info.family_memeber_relation_3||t.student_infos.student_info.family_memeber_job_3,expression:"student_infos.student_info.family_memeber_name_3 || \n                student_infos.student_info.family_memeber_relation_3 ||\n                student_infos.student_info.family_memeber_job_3"}],staticClass:"text item"},[s("span",{staticClass:"label"},[s("i",{staticStyle:{"font-weight":"600"}},[t._v("·")]),t._v(" 家庭成员-3\n                ")]),t._v(" "),s("div",{staticStyle:{border:"solid 1px #e4d2ec",margin:"10px"}},[s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("姓名：")]),t._v("\n                    "+t._s(t.student_infos.student_info.family_memeber_name_3)+"\n                  ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("与本人关系：")]),t._v("\n                    "+t._s(t.student_infos.student_info.family_memeber_relation_3)+"\n                  ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("工作单位：")]),t._v("\n                    "+t._s(t.student_infos.student_info.family_memeber_job_3)+"\n                  ")])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.student_infos.student_info.family_memeber_name_4||t.student_infos.student_info.family_memeber_relation_4||t.student_infos.student_info.family_memeber_job_4,expression:"student_infos.student_info.family_memeber_name_4 || \n                student_infos.student_info.family_memeber_relation_4 || \n                student_infos.student_info.family_memeber_job_4"}],staticClass:"text item"},[s("span",{staticClass:"label"},[s("i",{staticStyle:{"font-weight":"600"}},[t._v("·")]),t._v(" 家庭成员-4\n                ")]),t._v(" "),s("div",{staticStyle:{border:"solid 1px #e4d2ec",margin:"10px"}},[s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("姓名：")]),t._v("\n                    "+t._s(t.student_infos.student_info.family_memeber_name_4)+"\n                  ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("与本人关系：")]),t._v("\n                    "+t._s(t.student_infos.student_info.family_memeber_relation_4)+"\n                  ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("工作单位：")]),t._v("\n                    "+t._s(t.student_infos.student_info.family_memeber_job_4)+"\n                  ")])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.student_infos.student_info.family_memeber_name_5||t.student_infos.student_info.family_memeber_relation_5||t.student_infos.student_info.family_memeber_job_5,expression:"student_infos.student_info.family_memeber_name_5 || \n                student_infos.student_info.family_memeber_relation_5 ||\n                student_infos.student_info.family_memeber_job_5"}],staticClass:"text item"},[s("span",{staticClass:"label"},[s("i",{staticStyle:{"font-weight":"600"}},[t._v("·")]),t._v(" 家庭成员-5\n                ")]),t._v(" "),s("div",{staticStyle:{border:"solid 1px #e4d2ec",margin:"10px"}},[s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("姓名：")]),t._v("\n                    "+t._s(t.student_infos.student_info.family_memeber_name_5)+"\n                  ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("与本人关系：")]),t._v("\n                    "+t._s(t.student_infos.student_info.family_memeber_relation_5)+"\n                  ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("工作单位：")]),t._v("\n                    "+t._s(t.student_infos.student_info.family_memeber_job_5)+"\n                  ")])])])])],1),t._v(" "),s("el-tab-pane",{attrs:{label:"学业信息"}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("请假记录：")]),t._v("\n                "+t._s(t.student_infos.student_info.leave_record)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("休学记录：")]),t._v("\n                "+t._s(t.student_infos.student_info.suspension_record)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("转专业记录：")]),t._v("\n                "+t._s(t.student_infos.student_info.transfer_professional_record)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("获奖记录：")]),t._v("\n                "+t._s(t.student_infos.student_info.award_record)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("学业处分记录：")]),t._v("\n                "+t._s(t.student_infos.student_info.academic_disciplinary_record)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("受处分记录及等级：")]),t._v("\n                "+t._s(t.student_infos.student_info.disciplinary_record)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("受资助记录：")]),t._v("\n                "+t._s(t.student_infos.student_info.funded_record)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("兼职记录：")]),t._v("\n                "+t._s(t.student_infos.student_info.part_time_record)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("就业情况：")]),t._v("\n                "+t._s(t.student_infos.student_info.employment_status)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("延毕记录及原因：")]),t._v("\n                "+t._s(t.student_infos.student_info.extended_record)+"\n              ")]),t._v(" "),s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("在校期间整体表现情况：")]),t._v("\n                "+t._s(t.student_infos.student_info.school_performance)+"\n              ")])])],1),t._v(" "),s("el-tab-pane",{attrs:{label:"其它信息"}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"text item"},[s("span",{staticClass:"label"},[t._v("备注信息：")]),t._v("\n                "+t._s(t.student_infos.student_info.family_police_station)+"\n              ")])])],1)],1)],1):t._e(),t._v(" "),s("div",{staticClass:"btn-layer"},[s("div",{staticStyle:{float:"right",padding:"12px 25px 12px"}},[s("el-button",{staticStyle:{width:"86px",height:"36px"},attrs:{size:"mini",type:"primary",icon:"el-icon-download"},on:{click:t.studentDownload}},[t._v("导出")]),t._v(" "),s("el-button",{staticStyle:{width:"86px",height:"36px"},attrs:{size:"mini"},on:{click:function(e){t.drawer=!1}}},[t._v("关闭")])],1)])])])],1)},a=[],i=s("db72"),_=s("2f62"),l=s("bc3a"),o=s.n(l),d=[{key:"teacher",display_name:"老师"},{key:"0",display_name:"无权限"}],r={name:"ComplexTable",data:function(){return{drawer:!1,student_infos:{},tableData1:[],keyword:"",manager_name:"",manager_id:"",currentPage:1,pagesize:10,total:0,id:"",student_list:[],copy_student_list:[],calendarTypeOptions:d,temp:{student_name:"",student_info:{}},dialogFormVisible:!1,dialogStatus:"",textMap:{create:"添加学生"}}},computed:Object(i["a"])({},Object(_["b"])({create_name:"name",create_id:"id"})),mounted:function(){this.manager_name=this.create_name,this.manager_id=this.create_id,this.getList()},methods:{getList:function(){var t=this;o.a.get("http://123.56.88.197/student/manager_get_student").then((function(e){200===e.data.code?(t.student_list=e.data.data,t.total=t.student_list.length,t.copy_student_list=JSON.parse(JSON.stringify(t.student_list))):t.$message({type:"error",message:"获取学生信息失败"})})).catch((function(t){}))},handleCreate:function(){var t=this;this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&(console.log(e),console.log("添加",t.temp),o.a.post("http://123.56.88.197/student/add_student",{student_name:t.temp.student_name,student_id:t.temp.student_info.student_id,create_name:t.manager_name,create_id:t.manager_id}).then((function(e){console.log(e.data),200===e.data.code?(t.dialogFormVisible=!1,t.$message({type:"success",message:"添加学生信息成功"}),t.getList()):t.$message({type:"success",message:"添加学生信息失败"})})).catch((function(t){})))}))},handleDetail:function(t){console.log(t),this.student_infos=t,this.drawer=!0,this.tableData1=this.student_infos,console.log(this.tableData1)},handleDelete:function(t,e){var s=this;o.a.get("http://123.56.88.197/student/del_student?student_name="+t.user_name).then((function(t){200===t.data.code?(s.student_list.splice(e,1),s.$message({type:"success",message:"删除学生信息成功"})):s.$message({type:"error",message:"删除学生信息失败"})})).catch((function(t){}))},handleSizeChange:function(t){this.pagesize=t},handleCurrentChange:function(t){this.currentPage=t},handleDownload:function(){for(var t=["姓名","学号","学院","分管老师"],e=this.student_list,s="",n=0;n<t.length;n++)s+=t[n]+",";s+="\n";for(var a=0;a<e.length;a++)s+=e[a].user_name+","+e[a].student_info.student_id+","+e[a].student_info.faculty+","+e[a].student_info.charger_teacher_id+"\n";var i="data:text/csv;charset=utf-8,\ufeff"+encodeURIComponent(s),_=document.createElement("a");_.href=i,_.download="学生列表.xlsx",document.body.appendChild(_),_.click(),document.body.removeChild(_)},studentDownload:function(){var t=["姓名","学号","学院","分管老师","专业","宿舍地址","性别","民族","身份证","手机号","生源地","生源类别","是否参军"],e=this.student_infos;console.log(e);for(var s="",n=0;n<t.length;n++)s+=t[n]+",";s+="\n",s+=e.user_name+","+e.student_info.student_id+","+e.student_info.faculty+","+e.student_info.charger_teacher_id+","+e.student_info.major+","+e.student_info.dormitory_address+","+e.student_info.gender+","+e.student_info.nation+","+e.student_info.id_number+","+e.student_info.phone_number+","+e.student_info.residence_address+","+e.student_info.source_category+","+e.student_info.join_army+"\n";var a="data:text/csv;charset=utf-8,\ufeff"+encodeURIComponent(s),i=document.createElement("a");i.href=a,i.download="学生"+e.user_name+"的基本信息.xlsx",document.body.appendChild(i),i.click(),document.body.removeChild(i)},clearSearch:function(){this.handleFilter()},handleFilter:function(){var t=this;this.keyword?(this.student_list=this.copy_student_list.filter((function(e){return JSON.stringify(e.student_info.student_id).indexOf(t.keyword)>-1||JSON.stringify(e.user_name).indexOf(t.keyword)>-1})),this.total=this.student_list.length,this.currentPage=1):(this.student_list=this.copy_student_list,this.total=this.student_list.length)}},filters:{pagination:function(t,e,s){var n=(e-1)*s,a=n+s>=t.length?t.slice(n,t.length):t.slice(n,n+s);return a}}},c=r,u=(s("2cdd"),s("9043"),s("2877")),m=Object(u["a"])(c,n,a,!1,null,"209c2352",null);e["default"]=m.exports},9043:function(t,e,s){"use strict";var n=s("bba7"),a=s.n(n);a.a},bba7:function(t,e,s){},e45e:function(t,e,s){}}]);