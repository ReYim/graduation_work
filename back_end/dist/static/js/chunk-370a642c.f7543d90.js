(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-370a642c"],{"454b":function(t,e,a){},"5e8b":function(t,e,a){"use strict";var n=a("65b8"),o=a.n(n);o.a},"65b8":function(t,e,a){},"76f2":function(t,e,a){"use strict";var n=a("f729"),o=a.n(n);o.a},9406:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a(t.currentRole,{tag:"component"})],1)},o=[],i=a("db72"),r=a("2f62"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("panel-group",{attrs:{visit_count:t.visit_count,teacher_count:t.teacher_count,student_count:t.student_count,preparatory_grade:t.preparatory_grade},on:{handleSetLineChartData:t.handleSetLineChartData}}),t._v(" "),a("el-row",{staticStyle:{background:"#fff",padding:"16px 16px 20px","margin-bottom":"32px"}},[a("line-chart",{attrs:{"chart-data":t.lineChartData}})],1),t._v(" "),a("el-row",{attrs:{gutter:32}},[a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("raddar-chart")],1)]),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("pie-chart",{attrs:{computer_major_count:t.computer_major_count,communication_major_count:t.communication_major_count,law_major_count:t.law_major_count,management_major_count:t.management_major_count,economics_major_count:t.economics_major_count}})],1)]),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("bar-chart",{attrs:{preparatory_grade:t.preparatory_grade,first_grade:t.first_grade,second_grade:t.second_grade,third_grade:t.third_grade,fourth_grade:t.fourth_grade}})],1)])],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("newVisitis")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-people"},[a("svg-icon",{attrs:{"icon-class":"eye-open","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("总访问量")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.visit_count,duration:2600}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("purchases")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-money"},[a("svg-icon",{attrs:{"icon-class":"peoples","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("辅导员总人数")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.teacher_count,duration:3200}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("messages")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-message"},[a("svg-icon",{attrs:{"icon-class":"user","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("学生总人数")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.student_count,duration:3e3}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("shoppings")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-shopping"},[a("svg-icon",{attrs:{"icon-class":"people","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("预科生总人数")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.preparatory_grade,duration:3600}})],1)])])],1)},d=[],u=a("9e2e"),h=a.n(u),m={props:["visit_count","teacher_count","student_count","preparatory_grade"],components:{CountTo:h.a},data:function(){return{}},methods:{handleSetLineChartData:function(t){this.$emit("handleSetLineChartData",t)}}},p=m,_=(a("fbfe"),a("2877")),f=Object(_["a"])(p,l,d,!1,null,"3d4d557d",null),g=f.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},y=[],b=a("2389"),x=a.n(b);a("4917"),a("4f7f"),a("5df3"),a("1c4c"),a("28a5"),a("ac6a"),a("456d"),a("f576"),a("6b54"),a("3b2b"),a("a481"),a("7618");function C(t,e,a){var n,o,i,r,s,c=function c(){var l=+new Date-r;l<e&&l>0?n=setTimeout(c,e-l):(n=null,a||(s=t.apply(i,o),n||(i=o=null)))};return function(){for(var o=arguments.length,l=new Array(o),d=0;d<o;d++)l[d]=arguments[d];i=this,r=+new Date;var u=a&&!n;return n||(n=setTimeout(c,e)),u&&(s=t.apply(i,l),i=l=null),s}}var w={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var t=this;this.$_resizeHandler=C((function(){t.chart&&t.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}};a("9c75");var j={mixins:[w],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=x.a.init(this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.one,a=t.two;t.three,t.four,t.five;this.chart.setOption({title:{text:"深圳大学少数民族招生历年分数线",left:"center",textStyle:{color:"#304156",fontSize:"14"}},xAxis:{data:["2015","2016","2017","2018","2019"],boundaryGap:!1,axisTick:{show:!1}},grid:{left:10,right:15,bottom:30,top:35,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,0]},yAxis:{axisTick:{show:!1},scale:!0},legend:{data:["少数民族预科招生分数线","少数民族内高招生分数线"],top:"bottom",padding:[0,0]},series:[{name:"少数民族预科招生分数线",itemStyle:{normal:{color:"#FF005A",lineStyle:{color:"#FF005A",width:2}}},smooth:!0,type:"line",data:e,animationDuration:2800,animationEasing:"cubicInOut"},{name:"少数民族内高招生分数线",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2}}},data:a,animationDuration:2800,animationEasing:"quadraticOut"}]})}}},S=j,k=Object(_["a"])(S,v,y,!1,null,null,null),$=k.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},T=[];a("9c75");var D=3e3,z={mixins:[w],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=x.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},radar:{radius:"66%",center:["50%","42%"],splitNumber:8,splitArea:{areaStyle:{color:"rgba(127,95,132,.3)",opacity:1,shadowBlur:45,shadowColor:"rgba(0,0,0,.5)",shadowOffsetX:0,shadowOffsetY:15}},indicator:[{name:"CSS",max:2e4},{name:"HTML",max:2e4},{name:"JAVASCRIPT",max:2e4},{name:"Vue.js",max:2e4},{name:"Node.js",max:2e4},{name:"MySQL",max:2e4}]},legend:{left:"center",bottom:"10"},series:[{type:"radar",symbolSize:0,areaStyle:{normal:{shadowBlur:13,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1}},data:[{value:[15e3,15e3,17e3,16e3,12e3,1e4],name:"项目技术统计"}],animationDuration:D}]})}}},O=z,L=Object(_["a"])(O,E,T,!1,null,null,null),N=L.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},A=[];a("c5f6");a("9c75");var P={mixins:[w],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},computer_major_count:{type:Number},communication_major_count:{type:Number},law_major_count:{type:Number},management_major_count:{type:Number},economics_major_count:{type:Number}},data:function(){return{chart:null,major_list:[]}},mounted:function(){var t=this;setTimeout((function(){t.major_list.push({value:t.computer_major_count,name:"计算机与软件学院"},{value:t.communication_major_count,name:"传播学院"},{value:t.law_major_count,name:"法学院"},{value:t.management_major_count,name:"管理学院"},{value:t.economics_major_count,name:"经济学院"}),console.log("echarts_data：",t.major_list),t.initChart()}),1e3)},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=x.a.init(this.$el,"macarons"),this.chart.setOption({title:{text:"少数民族学生学院分布图",left:"center",textStyle:{color:"#304156",fontSize:"14"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:["计算机与软件学院","传播学院","法学院","管理学院","经济学院"]},series:[{name:"学院分布",type:"pie",roseType:"radius",radius:[15,95],center:["50%","48%"],data:this.major_list,animationEasing:"cubicInOut",animationDuration:2600}]})}}},H=P,V=Object(_["a"])(H,R,A,!1,null,null,null),B=V.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},I=[];a("9c75");var J=6e3,q={mixins:[w],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},preparatory_grade:{type:Number},first_grade:{type:Number},second_grade:{type:Number},third_grade:{type:Number},fourth_grade:{type:Number}},data:function(){return{chart:null,grade_list:[]}},mounted:function(){var t=this;setTimeout((function(){t.grade_list.push(t.preparatory_grade,t.first_grade,t.second_grade,t.third_grade,t.fourth_grade),console.log("echarts_data：",t.grade_list),t.initChart()}),1e3)},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=x.a.init(this.$el,"macarons"),this.chart.setOption({title:{text:"少数民族学生各年级人数",left:"center",textStyle:{color:"#304156",fontSize:"14"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:25,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["预科","大一","大二","大三","大四"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}}],series:[{name:"人数",type:"bar",stack:"vistors",barWidth:"30%",data:this.grade_list,animationDuration:J}]})}}},G=q,M=Object(_["a"])(G,F,I,!1,null,null,null),W=M.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"todoapp"},[a("header",{staticClass:"header"},[a("input",{staticClass:"new-todo",attrs:{autocomplete:"off",placeholder:"Todo List"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}}})]),t._v(" "),a("section",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"main"},[a("input",{staticClass:"toggle-all",attrs:{id:"toggle-all",type:"checkbox"},domProps:{checked:t.allChecked},on:{change:function(e){return t.toggleAll({done:!t.allChecked})}}}),t._v(" "),a("label",{attrs:{for:"toggle-all"}}),t._v(" "),a("ul",{staticClass:"todo-list"},t._l(t.filteredTodos,(function(e,n){return a("todo",{key:n,attrs:{todo:e},on:{toggleTodo:t.toggleTodo,editTodo:t.editTodo,deleteTodo:t.deleteTodo}})})),1)]),t._v(" "),a("footer",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"footer"},[a("span",{staticClass:"todo-count"},[a("strong",[t._v(t._s(t.remaining))]),t._v("\n      "+t._s(t._f("pluralize")(t.remaining,"item"))+" left\n    ")]),t._v(" "),a("ul",{staticClass:"filters"},t._l(t.filters,(function(e,n){return a("li",{key:n},[a("a",{class:{selected:t.visibility===n},on:{click:function(e){e.preventDefault(),t.visibility=n}}},[t._v(t._s(t._f("capitalize")(n)))])])})),0)])])},Y=[],Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"todo",class:{completed:t.todo.done,editing:t.editing}},[a("div",{staticClass:"view"},[a("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(e){return t.toggleTodo(t.todo)}}}),t._v(" "),a("label",{domProps:{textContent:t._s(t.todo.text)},on:{dblclick:function(e){t.editing=!0}}}),t._v(" "),a("button",{staticClass:"destroy",on:{click:function(e){return t.deleteTodo(t.todo)}}})]),t._v(" "),a("input",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"},{name:"focus",rawName:"v-focus",value:t.editing,expression:"editing"}],staticClass:"edit",domProps:{value:t.todo.text},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doneEdit(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelEdit(e)}],blur:t.doneEdit}})])},U=[],K={name:"Todo",directives:{focus:function(t,e,a){var n=e.value,o=a.context;n&&o.$nextTick((function(){t.focus()}))}},props:{todo:{type:Object,default:function(){return{}}}},data:function(){return{editing:!1}},methods:{deleteTodo:function(t){this.$emit("deleteTodo",t)},editTodo:function(t){var e=t.todo,a=t.value;this.$emit("editTodo",{todo:e,value:a})},toggleTodo:function(t){this.$emit("toggleTodo",t)},doneEdit:function(t){var e=t.target.value.trim(),a=this.todo;e?this.editing&&(this.editTodo({todo:a,value:e}),this.editing=!1):this.deleteTodo({todo:a})},cancelEdit:function(t){t.target.value=this.todo.text,this.editing=!1}}},Z=K,tt=Object(_["a"])(Z,Q,U,!1,null,null,null),et=tt.exports,at="todos",nt={all:function(t){return t},active:function(t){return t.filter((function(t){return!t.done}))},completed:function(t){return t.filter((function(t){return t.done}))}},ot=[{text:"star this repository",done:!1},{text:"fork this repository",done:!1},{text:"follow author",done:!1},{text:"vue-element-admin",done:!0},{text:"vue",done:!0},{text:"element-ui",done:!0},{text:"axios",done:!0},{text:"webpack",done:!0}],it={components:{Todo:et},filters:{pluralize:function(t,e){return 1===t?e:e+"s"},capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},data:function(){return{visibility:"all",filters:nt,todos:ot}},computed:{allChecked:function(){return this.todos.every((function(t){return t.done}))},filteredTodos:function(){return nt[this.visibility](this.todos)},remaining:function(){return this.todos.filter((function(t){return!t.done})).length}},methods:{setLocalStorage:function(){window.localStorage.setItem(at,JSON.stringify(this.todos))},addTodo:function(t){var e=t.target.value;e.trim()&&(this.todos.push({text:e,done:!1}),this.setLocalStorage()),t.target.value=""},toggleTodo:function(t){t.done=!t.done,this.setLocalStorage()},deleteTodo:function(t){this.todos.splice(this.todos.indexOf(t),1),this.setLocalStorage()},editTodo:function(t){var e=t.todo,a=t.value;e.text=a,this.setLocalStorage()},clearCompleted:function(){this.todos=this.todos.filter((function(t){return!t.done})),this.setLocalStorage()},toggleAll:function(t){var e=this,a=t.done;this.todos.forEach((function(t){t.done=a,e.setLocalStorage()}))}}},rt=it,st=(a("76f2"),Object(_["a"])(rt,X,Y,!1,null,null,null)),ct=st.exports,lt=a("bc3a"),dt=a.n(lt),ut={newVisitis:{one:[440,447,450,453,450,460,465],two:[340,347,350,353,350,360,365]},messages:{expectedData:[200,192,120,144,160,130,140],actualData:[180,160,151,106,145,150,130]},purchases:{expectedData:[80,100,121,104,105,90,100],actualData:[120,90,100,138,142,130,130]},shoppings:{expectedData:[130,140,141,142,145,150,160],actualData:[120,82,91,154,162,140,130]}},ht={name:"DashboardAdmin",components:{PanelGroup:g,LineChart:$,RaddarChart:N,PieChart:B,BarChart:W,TodoList:ct},data:function(){return{lineChartData:ut.newVisitis,visit_count:1e3,teacher_count:0,student_count:0,preparatory_grade:0,first_grade:0,second_grade:0,third_grade:0,fourth_grade:0,computer_major_count:0,communication_major_count:0,law_major_count:0,management_major_count:0,economics_major_count:0}},mounted:function(){var t=this;dt.a.get("http://kujijiku.com:9528/user/count_visitors").then((function(e){200===e.data.code?(t.visit_count=e.data.data.visitor_count,t.teacher_count=e.data.data.teacher_count,t.student_count=e.data.data.student_count,t.preparatory_grade=e.data.data.preparatory_grade,t.first_grade=e.data.data.first_grade,t.second_grade=e.data.data.second_grade,t.third_grade=e.data.data.third_grade,t.fourth_grade=e.data.data.fourth_grade,t.computer_major_count=e.data.data.computer_major_count,t.communication_major_count=e.data.data.communication_major_count,t.law_major_count=e.data.data.law_major_count,t.management_major_count=e.data.data.management_major_count,t.economics_major_count=e.data.data.economics_major_count):console.log("访问量统计失败!")}))},methods:{handleSetLineChartData:function(t){this.lineChartData=ut.newVisitis}}},mt=ht,pt=(a("5e8b"),Object(_["a"])(mt,s,c,!1,null,"03ec1ef0",null)),_t=pt.exports,ft={name:"Dashboard",components:{adminDashboard:_t},data:function(){return{currentRole:"adminDashboard"}},computed:Object(i["a"])({},Object(r["b"])([])),created:function(){this.currentRole="adminDashboard"}},gt=ft,vt=Object(_["a"])(gt,n,o,!1,null,null,null);e["default"]=vt.exports},f729:function(t,e,a){},fbfe:function(t,e,a){"use strict";var n=a("454b"),o=a.n(n);o.a}}]);