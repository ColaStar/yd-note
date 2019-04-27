(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91aaface","chunk-2d226c79","chunk-2d226c79"],{"3aca":function(t,e,o){"use strict";var a=o("8d0e"),n=o.n(a);n.a},4341:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"basic"},t._l(t.ChartDataList,function(t,e){return o("li",{key:e,staticClass:"con-item"},[o("chart",{attrs:{chartData:t}})],1)}),0)},n=[],i=(o("7f7f"),o("e9b1")),r={data:function(){return{ChartDataList:[]}},components:{chart:i["default"]},methods:{setDemandOption:function(){var t=this;return this.$x.get(this.url.supplyBalance,{}).then(function(e){var o=e.data.last;o.predict=39,o.title="全球原油供需平衡";for(var a=o.supply.slice(0,o.predict),n=o.demand.slice(0,o.predict),i=o.supply.length-o.predict,r=0;r<i;r++)a.push("-"),n.push("-");for(var l=o.supply.slice(o.predict-1,o.supply.length),s=o.demand.slice(o.predict-1,o.demand.length),c=0;c<a.length-i-1;c++)l.unshift("-"),s.unshift("-");var d=Math.max.apply(Math,o.supply)+.5,h=Math.min.apply(Math,o.supply)-.5,p=Math.max.apply(Math,o.demand)+.5,f=Math.min.apply(Math,o.demand)-.5,m=d>p?d:p,y=h<f?h:f,u={option:{dataZoom:[{type:"inside",start:0,end:100}],title:{text:o.title,left:"1%",textStyle:{color:"#fff",fontSize:"60"}},tooltip:{trigger:"axis",formatter:function(t,e,o){for(var a="",n={},i=0;i<t.length;i++){var r=t[i],l=r.name,s=r.seriesName,c=r.value,d=r.color;"-"!=c&&(n[s]!=c&&(0===i&&(a+=l+"<br/>"),a+="<div>",a+='<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+d+';"></span>',a+=s+"："+c,a+="</div>",n[s]=c))}return a}},grid:{bottom:"140",left:"80",top:"180"},xAxis:[{show:!0,type:"category",data:o.x_lable,axisPointer:{type:"shadow"},offset:25,axisLine:{show:!1,lineStyle:{color:"#3b3e52"}},axisLabel:{color:"#93959d",fontSize:32},axisTick:{show:!1},splitLine:{show:!1}}],color:["rgba(254, 38, 103, 1)","rgba(0, 164, 207, 1)",["rgba(29, 209, 165, 1)","rgba(245, 101, 118, 1)"]],legend:{type:"plain",textStyle:{color:"#fff",fontWeight:"400",fontSize:"30",lineHeight:"42",padding:[0,80,0,10]},show:!0,bottom:"0",left:"80",data:[{name:"供应(左轴)",icon:"roundRect"},{name:"需求(左轴)",icon:"roundRect"},{name:"供应 - 需求(右轴)",icon:"roundRect"}]},yAxis:[{type:"value",name:"Million bbl/day",nameGap:"40",nameLocation:"end",nameTextStyle:{color:"#93959d",fontSize:28,width:"400",padding:[0,0,0,90]},axisLabel:{color:"#93959d",fontSize:28,formatter:function(t){return t.toFixed(0)}},axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:"#3b3e52"}},splitArea:{show:!1,areaStyle:{color:["#2d3043","#2d3043"]}},axisTick:{show:!1},min:function(t){var e=y-Math.ceil((m-y)/1.5);return e},max:m},{type:"value",axisLabel:{color:"#93959d",fontSize:28,formatter:function(t){return t.toFixed(0)}},axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},min:function(t){if(t.min>0&&t.max>0)return 0;var e=Math.min.apply(Math,o.diffs);return e-1.5},max:function(t){var e=Math.max.apply(Math,o.diffs),a=Math.min.apply(Math,o.diffs);if(e<0)return 2.5*Math.abs(a);if(a>0&&e<0)return 2.5*Math.abs(e);if(a>0&&e>0)return 3.5*Math.abs(e);var n=Math.abs(e)+Math.abs(a);return 2.5*n}}],series:[{name:"供应(左轴)",yAxisIndex:0,type:"line",symbol:"none",data:a,itemStyle:{normal:{width:5,color:"#fe2667",lineStyle:{color:"#fe2667"}}}},{name:"供应(左轴)",type:"line",smooth:!1,yAxisIndex:0,symbol:"none",itemStyle:{normal:{color:"#fe2667",lineStyle:{width:5,color:"#fe2667",type:"dotted"}}},data:l},{name:"需求(左轴)",yAxisIndex:0,symbol:"none",type:"line",itemStyle:{normal:{color:"#00a4cf",lineStyle:{width:5,color:"#00a4cf"}}},data:n},{name:"需求(左轴)",type:"line",yAxisIndex:0,symbol:"none",smooth:!1,itemStyle:{normal:{color:"#00a4cf",lineStyle:{color:"#00a4cf",width:5,type:"dotted"}}},data:s},{name:"供应 - 需求(右轴)",type:"bar",yAxisIndex:1,barCategoryGap:"10%",itemStyle:{normal:{color:function(t){return t.value>0?"#f86555":"#1dd1a5"}}},data:o.diffs}]}};t.ChartDataList.push(u)})},setCurveOption:function(){var t=this;return this.$x.get(this.url.eiaIndex,{}).then(function(e){var o=e.data.DOESCRUD,a=o["title"],n=JSON.parse(o["max"]),i=JSON.parse(o["min"]),r=JSON.parse(o["avg"]),l=JSON.parse(o["cur"]),s=JSON.parse(o["last"]),c=JSON.parse(o["other"]),d=Math.max.apply(null,n),h=Math.max.apply(null,l),p=Math.min.apply(null,i),f=Math.min.apply(null,l),m=Math.max(d,h),y=Math.min(p,f),u=[];for(var x in n)u.push(n[x]-i[x]);var b={option:{dataZoom:[{type:"inside",start:0,end:100}],color:["rgba(114, 119, 149, 1)","rgba(226, 226, 226, 1)","rgba(19, 180, 209, 1)","rgba(245, 101, 118, 1)"],legend:{type:"plain",textStyle:{color:"#fff",fontWeight:"400",fontSize:"30",lineHeight:"42",padding:[0,80,0,10]},show:!0,bottom:"0",left:"130",data:[{name:"".concat(c.period,"年数据区间"),icon:"roundRect"},{name:"".concat(c.period,"年平均数据"),icon:"roundRect"},{name:"".concat(c.last_year,"年数据"),icon:"roundRect"},{name:"".concat(c.current_year,"年数据"),icon:"roundRect"}]},title:{text:a,left:"1%",textStyle:{color:"#fff",fontSize:"60"}},tooltip:{trigger:"axis",axisPointer:{type:"cross",animation:!1,label:{backgroundColor:"#ccc",fontSize:28,borderColor:"#aaa",borderWidth:1,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#222"}}},formatter:function(t){return t[3]?t[2].name+"<br />"+t[3].value:t[2].name}},grid:{bottom:"140",left:"8%",top:"180",right:"4%"},xAxis:{show:!0,type:"category",data:o.date,offset:25,axisLine:{show:!1,lineStyle:{color:"#3b3e52"}},axisLabel:{color:"#93959d",fontSize:32},splitLine:{show:!1},axisPointer:{type:"shadow"},axisTick:{show:!1}},yAxis:{type:"value",name:"Million bbl/day",offset:"12",nameGap:"40",nameLocation:"end",nameTextStyle:{color:"#93959d",fontSize:28,align:"center",width:"400"},axisLabel:{color:"#93959d",fontSize:28,formatter:function(t){return t.toFixed(0)}},axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:"rgba(59, 62, 82, 1)",width:3,type:"solid"}},splitArea:{show:!0,areaStyle:{color:["transparent","transparent"]}},axisTick:{show:!1},min:y,max:m},series:[{name:"".concat(c.period,"年数据区间"),type:"line",data:i,lineStyle:{normal:{color:"rgba(114,119,149,1)",opacity:0}},stack:"a",symbol:"none"},{name:"".concat(c.period,"年数据区间"),type:"line",data:u,lineStyle:{normal:{color:"rgba(114,119,149,1)",opacity:0}},stack:"a",symbol:"none",areaStyle:{normal:{color:"rgba(114,119,149,0.3)"}}},{name:"".concat(c.period,"年平均数据"),type:"line",data:r,itemStyle:{normal:{lineStyle:{width:3,type:"solid"}}},symbol:"none",lineStyle:{normal:{width:4,color:"rgba(226, 226, 226, 0.3)"}}},{name:"".concat(c.last_year,"年数据"),type:"line",data:s,symbolSize:5,symbol:"none",lineStyle:{normal:{width:4,color:"#13B4D1"}},itemStyle:{normal:{width:3,color:"#13B4D1"}}},{name:"".concat(c.current_year,"年数据"),type:"line",data:l,symbolSize:5,symbol:"none",lineStyle:{normal:{width:4,color:"#f1726d"}},itemStyle:{normal:{width:3,color:"#f1726d"}}}]}};t.ChartDataList.push(b)})},setHoldPosOption:function(){var t=this;return this.$x.get(this.url.holdPosOption,{}).then(function(e){var o=e.data,a={option:{dataZoom:[{type:"inside",start:0,end:100}],color:["rgba(54, 145, 212, 1)","rgba(252, 89, 101, 1)"],legend:{type:"plain",textStyle:{color:"#fff",fontWeight:"400",fontSize:"30",lineHeight:"42",padding:[0,80,0,10]},show:!0,bottom:"0",left:"160",data:[{name:"非商业持仓净多头(左轴)",icon:"roundRect"},{name:"Brent周均价(右轴)",icon:"roundRect"}]},title:{text:"CFTC非商业持仓头寸",left:"40",textStyle:{color:"#fff",fontSize:"60"}},tooltip:{trigger:"axis",axisPointer:{type:"cross",animation:!1,label:{backgroundColor:"#ccc",fontSize:28,borderColor:"#aaa",borderWidth:1,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#222"}}}},grid:{bottom:"207",left:"160",top:"180",right:"7%"},xAxis:[{type:"category",data:o.x_lable,show:!0,offset:25,axisLine:{show:!0,lineStyle:{color:"#3b3e52"}},splitLine:{show:!1,lineStyle:{color:"rgba(59, 62, 82, 1)",width:3,type:"solid"}},axisLabel:{color:"#93959d",fontSize:32},axisPointer:{type:"shadow"},axisTick:{show:!1}}],yAxis:[{type:"value",name:"Contracts",offset:"12",nameGap:"40",nameLocation:"end",nameTextStyle:{color:"#93959d",fontSize:28,align:"left",width:"400",padding:[0,80,0,0]},axisLabel:{color:"#93959d",fontSize:28,formatter:function(t){return t.toFixed(0)}},axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:"rgba(59, 62, 82, 1)",width:3,type:"solid"}},splitArea:{show:!0,areaStyle:{color:["transparent","transparent"]}},axisTick:{show:!1}},{type:"value",name:"USD/bbl.",nameGap:"40",nameLocation:"end",nameTextStyle:{color:"#93959d",fontSize:28,align:"center"},axisLabel:{color:"#93959d",fontSize:28,formatter:function(t){return t.toFixed(0)}},axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:"rgba(59, 62, 82, 1)",width:3,type:"solid"}},splitArea:{show:!0,areaStyle:{color:["transparent","transparent"]}},axisTick:{show:!1}}],series:[{name:"非商业持仓净多头(左轴)",type:"line",smooth:!1,symbol:"none",yAxisIndex:0,data:o.position,lineStyle:{normal:{width:"5",color:"rgba(54, 145, 212, 1)"}}},{name:"Brent周均价(右轴)",type:"line",smooth:!1,symbol:"none",yAxisIndex:1,data:o.brent,lineStyle:{normal:{width:"5",color:"rgba(255, 99, 93, 1)"}}}]}};t.ChartDataList.push(a)})},setDennessOption:function(){var t=this;return this.$x.get(this.url.dennessOption,{}).then(function(e){var o=e.data,a={option:{dataZoom:[{type:"inside",start:0,end:100}],color:["rgba(54, 145, 212, 1)","rgba(138, 138, 138, 1)","rgba(252, 89, 101, 1)"],legend:{type:"plain",textStyle:{color:"#fff",fontWeight:"400",fontSize:"30",lineHeight:"42",padding:[0,80,0,10]},show:!0,bottom:"0",left:"120",data:[{name:"花旗银行经济意外指数(欧洲）",icon:"roundRect"},{name:"花旗银行经济意外指数(美国)",icon:"roundRect"},{name:"Brent日结算价(右轴)",icon:"roundRect"}]},title:{text:"花旗银行经济意外指数",left:"1%",textStyle:{color:"#fff",fontSize:"60"}},tooltip:{trigger:"axis",axisPointer:{type:"cross",animation:!1,label:{backgroundColor:"#ccc",fontSize:28,borderColor:"#aaa",borderWidth:1,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#222"}}}},grid:{bottom:"207",left:"7%",top:"180",right:"7%"},xAxis:[{type:"category",data:o.x_lable,show:!0,offset:25,axisLine:{show:!0,lineStyle:{color:"#3b3e52"}},splitLine:{show:!1,lineStyle:{color:"rgba(59, 62, 82, 1)",width:3,type:"solid"}},axisLabel:{color:"#93959d",fontSize:32},axisPointer:{type:"shadow"},axisTick:{show:!1}}],yAxis:[{type:"value",offset:"12",nameGap:"40",nameLocation:"end",nameTextStyle:{color:"#93959d",fontSize:28,align:"center"},axisLabel:{color:"#93959d",fontSize:28,formatter:function(t){return t.toFixed(0)}},axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:"rgba(59, 62, 82, 1)",width:3,type:"solid"}},splitArea:{show:!0,areaStyle:{color:["transparent","transparent"]}},axisTick:{show:!1}},{type:"value",name:"USD/bbl.",nameGap:"40",nameLocation:"end",nameTextStyle:{color:"#93959d",fontSize:28,align:"center"},axisLabel:{color:"#93959d",fontSize:28,formatter:function(t){return t.toFixed(0)}},axisLine:{show:!1},splitLine:{show:!1},max:function(t){return t.max+20},min:function(t){return t.min-20},axisTick:{show:!1}}],series:[{name:"花旗银行经济意外指数(欧洲）",type:"line",smooth:!1,symbol:"none",yAxisIndex:0,data:o.eur,lineStyle:{normal:{width:"5",color:"rgba(54, 145, 212, 1)"}}},{name:"花旗银行经济意外指数(美国)",type:"line",smooth:!1,symbol:"none",yAxisIndex:0,data:o.usa,lineStyle:{normal:{width:"5",color:"rgba(255, 99, 93, 1)"}}},{name:"Brent日结算价(右轴)",type:"line",smooth:!1,symbol:"circle",yAxisIndex:1,data:o.brent,lineStyle:{normal:{width:"5",color:"rgba(138, 138, 138, 1)"}}}]}};t.ChartDataList.push(a)})}},mounted:function(){var t=this;this.setDemandOption().then(function(e){t.setCurveOption().then(function(e){t.setHoldPosOption().then(function(e){t.setDennessOption()})})})}},l=r,s=(o("3aca"),o("2877")),c=Object(s["a"])(l,a,n,!1,null,"29027ac2",null);e["default"]=c.exports},"7f7f":function(t,e,o){var a=o("86cc").f,n=Function.prototype,i=/^\s*function ([^ (]*)/,r="name";r in n||o("9e1e")&&a(n,r,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},"8d0e":function(t,e,o){},e9b1:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"chartRef",attrs:{id:t.ContId}})},n=[],i=o("795b"),r=o.n(i),l=(o("6b54"),o("313e")),s=o.n(l),c={name:"echartBlock",props:{chartData:{type:Object}},data:function(){return{ContId:""}},methods:{setContId:function(){this.ContId=(1e7*Math.random()).toString(16).substr(0,4)+"-"+(new Date).getTime()+"-"+Math.random().toString().substr(2,5),this.$refs.chartRef.style.width="100%",this.$refs.chartRef.style.height="100%";var t=this;return new r.a(function(e,o){e(t.ContId)})}},mounted:function(){var t=this;this.setContId().then(function(e){var o=s.a.init(document.getElementById(e));o.setOption(t.chartData.option)})}},d=c,h=o("2877"),p=Object(h["a"])(d,a,n,!1,null,"197cf966",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-91aaface.0a326339.js.map