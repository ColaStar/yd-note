(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-420f2f2e"],{"0cd9":function(e,t,i){var n=i("f772"),a=Math.floor;e.exports=function(e){return!n(e)&&isFinite(e)&&a(e)===e}},"25bb":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dashboard",staticStyle:{position:"absolute",top:"55px"}},[i("div",{staticStyle:{width:"100%",height:"750px"},attrs:{id:"gaugeContainer"}})])}],o=i("3be2"),r=i.n(o),s=i("313e"),l=i.n(s),c={name:"dashboard",data:function(){return{list:["强卖出","卖出","观望","买入","强买入"]}},created:function(){var e=this,t=l.a.init(document.getElementById("gaugeContainer")),i={series:[{startAngle:180,endAngle:0,type:"gauge",radius:"100%",splitNumber:10,axisLine:{lineStyle:{width:500,color:[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0.3)"]],opacity:.8}},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1},pointer:{show:!1},detail:{show:!1},data:[{value:40}]},{type:"gauge",startAngle:180,endAngle:0,splitNumber:20,radius:"100%",axisLine:{lineStyle:{color:[[1,new l.a.graphic.LinearGradient(0,0,1,0,[{offset:1,color:"#FA5343"},{offset:.1,color:"#2FA37B "}],!1)]],width:10}},markPoint:{symbol:"rect",symbolSize:[50,20],emphasis:{label:{}},label:{color:"#fff",fontSize:38,lineHeight:12,offset:[0,-15]},data:[{x:"105",y:"center",itemStyle:{color:"transparent"},value:"强卖出"},{x:"980",y:"center",itemStyle:{color:"transparent"},value:"强买入"}]},title:{show:!0},detail:{show:!1},splitLine:{show:!1},axisTick:{show:!1,splitNumber:5,lineStyle:{color:"#52B8DF",width:3}},axisLabel:{fontSize:38,color:"#fff",distance:-110,formatter:function(t){return r()(t/25)&&0!=t&&100!=t&&50!=t?e.list[t/25]:null}},pointer:{width:7},itemStyle:{color:"#7F8FC8"},data:[{value:90,name:"今日指数"}]}]};t.setOption(i)}},u=c,f=(i("4a95"),i("2877")),d=Object(f["a"])(u,n,a,!1,null,"9dd5b65c",null);t["default"]=d.exports},"3be2":function(e,t,i){e.exports=i("8790")},"4a95":function(e,t,i){"use strict";var n=i("7132"),a=i.n(n);a.a},7132:function(e,t,i){},8516:function(e,t,i){var n=i("63b6");n(n.S,"Number",{isInteger:i("0cd9")})},8790:function(e,t,i){i("8516"),e.exports=i("584a").Number.isInteger}}]);
//# sourceMappingURL=chunk-420f2f2e.db772f2e.js.map