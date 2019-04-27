(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-978df664"],{"20fd":function(t,e,a){"use strict";var o=a("d9f6"),n=a("aebd");t.exports=function(t,e,a){e in t?o.f(t,e,n(0,a)):t[e]=a}},"549b":function(t,e,a){"use strict";var o=a("d864"),n=a("63b6"),i=a("241e"),r=a("b0dc"),s=a("3702"),l=a("b447"),c=a("20fd"),d=a("7cd6");n(n.S+n.F*!a("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,a,n,f,h=i(t),p="function"==typeof this?this:Array,b=arguments.length,m=b>1?arguments[1]:void 0,u=void 0!==m,y=0,x=d(h);if(u&&(m=o(m,b>2?arguments[2]:void 0,2)),void 0==x||p==Array&&s(x))for(e=l(h.length),a=new p(e);e>y;y++)c(a,y,u?m(h[y],y):h[y]);else for(f=x.call(h),a=new p;!(n=f.next()).done;y++)c(a,y,u?r(f,m,[n.value,y],!0):n.value);return a.length=y,a}})},"54a1":function(t,e,a){a("6c1c"),a("1654"),t.exports=a("95d5")},"5a42":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"market"},[a("ul",t._l(t.ChartDataList,function(e,o){return a("li",{key:o,staticClass:"clearfix"},[e.flag?a("div",{staticClass:"con-chart",staticStyle:{position:"relative"}},[a("div",{staticClass:"brent-left"},[a("chart",{attrs:{chartData:e.option}})],1),a("div",{staticClass:"brent-right"},[a("chart",{attrs:{chartData:e.rightOption}})],1)]):t._e(),e.flag?t._e():a("div",{staticClass:"con-chart"},[a("chart",{attrs:{chartData:e.option}})],1),e.flag?a("div",{staticClass:"con-abstract"},[a("p",[t._v("说明： Brent原油价格预期走势是基于原油市场供需基本面数据模型进行测算获得的，反映未来一年Brent原油市场价格走势。")]),a("div",{staticClass:"con-abstract_expect clearfix"},[a("label",[t._v(t._s(e.con[0].month)+"月均价预期值")]),a("span",[t._v(t._s(t._f("roundNumber")(e.con[0].estimate,2)))])]),a("div",{staticClass:"con-abstract_expect clearfix"},[a("label",[t._v(t._s(e.con[1].month)+"月均价预期值")]),a("span",[t._v(t._s(t._f("roundNumber")(e.con[1].estimate,2)))])])]):t._e(),e.flag?t._e():a("div",{staticClass:"con-abstract"},[a("p",[t._v("说明：远期曲线是由原油期货按不同交割月份依照合约到期时间先后, 串联而成的一条曲线。")]),a("div",{staticClass:"con-abstract_expect clearfix"},[a("label",[t._v("Brent期货1-2行价差")]),a("span",[t._v(t._s(e.con.a))])]),a("div",{staticClass:"con-abstract_expect clearfix"},[a("label",[t._v("Brent期货1-6行价差")]),a("span",[t._v(t._s(e.con.b))])])])])}),0)])},n=[],i=(a("28a5"),a("a481"),a("3b2b"),a("a745")),r=a.n(i);function s(t){if(r()(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var l=a("774e"),c=a.n(l),d=a("c8bb"),f=a.n(d);function h(t){if(f()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return c()(t)}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function b(t){return s(t)||h(t)||p()}a("313e");var m=a("e9b1"),u={data:function(){return{curveChartData:{},forecastChartData:{},ChartDataList:[],content:{}}},components:{chart:m["default"]},methods:{setForecastOption:function(){var t=this;return this.$x.get(this.url.brentPrice,{}).then(function(e){if(1e4==e.status){e.data;var a=e.data.x_lable,o=["-","-","-","-","-","-","-","-","-","-","-","-"],n=["","","","","","","","","","","",""],i=[].concat(b(e.data.brent),b(e.data.estimate),b(e.data.forward)),r=10*(Math.min.apply(Math,i)/10).toFixed(0)-10,s=10*(Math.max.apply(Math,i)/10).toFixed(0)+10,l=[].concat(a.slice(0,a.length-12),n),c=a.slice(-12),d=e.data.brent[e.data.brent.length-1];c.unshift("");var f=[].concat(e.data.brent,o);e.data.estimate.unshift(d),e.data.forward.unshift(d);var h=e.data.estimate,p=e.data.forward,m={option:{color:["#FC5965","#FE2667","#00A4CF"],legend:{type:"plain",textStyle:{color:"#fff",fontWeight:"400",fontSize:"30",lineHeight:"42",padding:[0,80,0,10]},show:!0,bottom:"0",left:"70",data:[{name:"Brent日结算价",icon:"roundRect"},{name:"远期价格预期",icon:"roundRect"},{name:"远期曲线",icon:"roundRect"}]},title:{text:"Brent远期价格预期",left:"0",textStyle:{color:"#fff",fontSize:"60"}},tooltip:{trigger:"axis",axisPointer:{type:"cross",animation:!1,label:{backgroundColor:"#ccc",fontSize:28,borderColor:"#aaa",borderWidth:1,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#222"}}}},grid:{bottom:"170",left:"80",top:"180",right:"10"},xAxis:[{type:"category",data:l,show:!0,offset:25,axisLine:{show:!1,lineStyle:{color:"#3b3e52"}},splitLine:{show:!1,lineStyle:{color:"rgba(59, 62, 82, 1)",width:3,type:"solid"}},axisLabel:{color:"#93959d",fontSize:32,formatter:function(t,e){var a=new RegExp("-","g"),o=t.replace(a,"/").slice(0,7);return o}},axisPointer:{type:"shadow"},axisTick:{show:!1},boundaryGap:!1}],yAxis:[{type:"value",offset:"20",name:"USD/bbl.",nameGap:"40",nameLocation:"end",nameTextStyle:{color:"#93959d",fontSize:28,align:"center"},interval:10,axisLabel:{color:"#93959d",fontSize:28},min:r,max:s,axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:"rgba(59, 62, 82, 1)",width:3,type:"solid"}},splitArea:{show:!0,areaStyle:{color:["transparent","transparent"]}},axisTick:{show:!1}}],series:[{name:"Brent日结算价",type:"line",smooth:!1,symbol:"none",data:f,lineStyle:{normal:{width:"5",color:"#FC5965"}}},{name:"远期价格预期",type:"line"},{name:"远期曲线",type:"line"}]}},u={option:{tooltip:{trigger:"axis",axisPointer:{type:"cross",animation:!1,label:{backgroundColor:"#ccc",fontSize:28,borderColor:"#aaa",borderWidth:1,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#222"}}}},grid:{bottom:"170",left:"100",top:"180",right:"100"},xAxis:[{type:"category",data:c,show:!0,offset:25,axisLine:{show:!1,lineStyle:{color:"#3b3e52"}},splitLine:{show:!1,lineStyle:{color:"rgba(59, 62, 82, 1)",width:3,type:"solid"}},axisLabel:{color:"#93959d",fontSize:32,formatter:function(t,e){var a=new RegExp("-","g"),o=t.replace(a,"/").slice(0,7);return o}},axisPointer:{type:"shadow"},axisTick:{show:!1},boundaryGap:!1}],yAxis:[{type:"value",offset:"20",axisLabel:{show:!1},axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:"rgba(59, 62, 82, 1)",width:3,type:"solid"}},interval:10,min:r,max:s,splitArea:{show:!0,areaStyle:{color:["transparent","transparent"]}},axisTick:{show:!1}}],series:[{name:"价格趋势",type:"line",smooth:!1,symbol:"diamond",symbolSize:20,data:h,lineStyle:{normal:{width:"5",color:"#FE2667"}},itemStyle:{normal:{color:"#FE2667",lineStyle:{color:"#FE2667"}}}},{name:"远期曲线",type:"line",smooth:!1,symbol:"diamond",symbolSize:20,data:p,lineStyle:{normal:{width:"5",color:"#00A4CF"}},itemStyle:{normal:{color:"#00A4CF",lineStyle:{color:"#00A4CF"}}}}]}};t.ChartDataList.push({option:m,rightOption:u,flag:!0,con:t.content.estimate})}})},setCurveOption:function(){var t=this;this.$x.get(this.url.brentCurve,{}).then(function(e){var a=e.data,o={option:{dataZoom:[{type:"inside",start:0,end:100}],color:["#00A4CF","#D98914","#06A18E","#F678A0"],legend:{type:"plain",textStyle:{color:"#fff",fontWeight:"400",fontSize:"30",lineHeight:"42",padding:[0,80,0,10]},show:!0,bottom:"0",left:"70",data:[{name:a.date,icon:"roundRect"},{name:"一天前",icon:"roundRect"},{name:"一周前",icon:"roundRect"},{name:"一月前",icon:"roundRect"}]},title:{text:"Brent远期曲线",left:"0",top:"20",textStyle:{color:"#fff",fontSize:"60"}},tooltip:{trigger:"axis",axisPointer:{type:"cross",animation:!1,label:{backgroundColor:"#ccc",fontSize:28,borderColor:"#aaa",borderWidth:1,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#222"}}}},grid:{bottom:"170",left:"90",top:"180",right:"85"},xAxis:[{type:"category",data:a.x_lable,show:!0,offset:25,axisLine:{show:!1,lineStyle:{color:"#3b3e52"}},splitLine:{show:!1,lineStyle:{color:"rgba(59, 62, 82, 1)",width:3,type:"solid"}},axisLabel:{color:"#93959d",fontSize:32,formatter:function(t,e){var a=new RegExp("年","g"),o=t.replace(a,"/").split("月").join("");return o}},axisPointer:{type:"shadow"},axisTick:{show:!1},boundaryGap:!1}],yAxis:[{type:"value",offset:"20",name:"USD/bbl.",nameGap:"20",nameLocation:"end",nameTextStyle:{color:"#93959d",fontSize:28,align:"center"},max:function(t){return t.max+.5},min:function(t){return t.min-.5},axisLabel:{color:"#93959d",fontSize:28,formatter:function(t){return t.toFixed(0)}},axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:"rgba(59, 62, 82, 1)",width:3,type:"solid"}},splitArea:{show:!0,areaStyle:{color:["transparent","transparent"]}},axisTick:{show:!1}}],series:[{name:a.date,type:"line",smooth:!1,symbol:"diamond",symbolSize:20,data:a.current,lineStyle:{normal:{width:"5",color:"rgba(0, 164, 207, 1)"}}},{name:"一天前",type:"line",smooth:!1,symbol:"diamond",symbolSize:20,data:a.last,lineStyle:{normal:{width:"5",color:"rgba(217, 137, 20, 1)"}}},{name:"一周前",type:"line",smooth:!1,symbol:"diamond",symbolSize:20,data:a.last_four,lineStyle:{normal:{width:"5",color:"rgba(6, 161, 142, 1)"}}},{name:"一月前",type:"line",symbol:"diamond",smooth:!1,symbolSize:20,data:a.last_twen,lineStyle:{normal:{width:"5",color:"rgba(246, 120, 160, 1)"}}}]}};t.ChartDataList.push({option:o,flag:!1,con:t.content.spread})})}},mounted:function(){var t=this;this.$x.get(this.url.brentView,{}).then(function(e){t.content=e.data,console.log(t.content),t.setForecastOption().then(function(e){t.setCurveOption()})})}},y=u,x=(a("b0d9"),a("2877")),w=Object(x["a"])(y,o,n,!1,null,"53a24df4",null);e["default"]=w.exports},6424:function(t,e,a){},"774e":function(t,e,a){t.exports=a("d2d5")},"95d5":function(t,e,a){var o=a("40c3"),n=a("5168")("iterator"),i=a("481b");t.exports=a("584a").isIterable=function(t){var e=Object(t);return void 0!==e[n]||"@@iterator"in e||i.hasOwnProperty(o(e))}},b0d9:function(t,e,a){"use strict";var o=a("6424"),n=a.n(o);n.a},c8bb:function(t,e,a){t.exports=a("54a1")},d2d5:function(t,e,a){a("1654"),a("549b"),t.exports=a("584a").Array.from}}]);
//# sourceMappingURL=chunk-978df664.ef552a6f.js.map