(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d894b50"],{"4bde":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"addPopular"},[r("h3",[e._v("添加观点")]),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"机构名称",prop:"ins_name"}},[r("el-col",{attrs:{span:4}},[r("el-input",{model:{value:e.ruleForm.ins_name,callback:function(t){e.$set(e.ruleForm,"ins_name",t)},expression:"ruleForm.ins_name"}})],1)],1),r("el-form-item",{attrs:{label:"发生时间",required:""}},[r("el-col",{attrs:{span:4}},[r("el-form-item",{attrs:{prop:"date"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date,callback:function(t){e.$set(e.ruleForm,"date",t)},expression:"ruleForm.date"}})],1)],1)],1),r("el-form-item",{attrs:{label:"市场情绪",prop:"ins_type"}},[r("el-radio-group",{model:{value:e.ruleForm.ins_type,callback:function(t){e.$set(e.ruleForm,"ins_type",t)},expression:"ruleForm.ins_type"}},[r("el-radio",{attrs:{label:"看空"}}),r("el-radio",{attrs:{label:"震荡"}}),r("el-radio",{attrs:{label:"看多"}})],1)],1),r("el-form-item",{attrs:{label:"观点内容",prop:"content"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("保存")])],1)],1)],1)},n=[],s={data:function(){return{typeList:["看空","震荡","看多"],ruleForm:{date:"",content:"",ins_name:"",ins_type:"看空"},rules:{ins_name:[{required:!0,message:"请输入活动名称",trigger:"blur"}],ins_type:[{required:!0,message:"请至少选择一个市场情绪",trigger:"blur"}],date:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],content:[{required:!0,message:"请填写机构内容",trigger:"blur"}]}}},methods:{format:function(e){var t=new Date(e),r=t.getFullYear(),a=t.getMonth()+1;a=a<10?"0"+a:a;var n=t.getDate();return n=n<10?"0"+n:n,r+"-"+a+"-"+n},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var r={date:t.format(t.ruleForm.date),content:t.ruleForm.content,ins_name:t.ruleForm.ins_name,ins_type:t.typeList.indexOf(t.ruleForm.ins_type)};t.$x.post(t.url.insadd,r).then(function(e){if(t.$route.params.date)var r="修改成功";else r="添加成功";e.status&&(t.$message({message:r,type:"success"}),t.$router.push("/outfitList"))}),console.log(r)})}},mounted:function(){console.log(this.$route.params),this.ruleForm.date=new Date(this.$route.params.date),this.ruleForm.ins_name=this.$route.params.institution_name,this.ruleForm.ins_type=this.$route.params.institution_type,this.ruleForm.content=this.$route.params.view_content}},o=s,l=(r("749a"),r("2877")),i=Object(l["a"])(o,a,n,!1,null,"564e9db4",null);t["default"]=i.exports},"719b":function(e,t,r){},"749a":function(e,t,r){"use strict";var a=r("719b"),n=r.n(a);n.a}}]);
//# sourceMappingURL=chunk-6d894b50.e8f59623.js.map