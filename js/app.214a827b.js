(function(){"use strict";var e={8415:function(e,t,r){var a=r(9242),o=r(3396),n=r(7139);const s={class:"h-screen flex flex-col"},d={class:"p-4 flex md:gap-10 justify-center"},i={class:"flex flex-col md:flex-row gap-6 md:gap-12"},l={class:"flex items-center"},c=(0,o._)("label",{for:"startDate"},"Start Date:",-1),h={class:"flex items-center"},u=(0,o._)("label",{for:"endDate"},"End Date:",-1),g={class:"flex items-center justify-center md:ml-auto"},p=["disabled"],f={class:"flex-1 p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"};function m(e,t,r,m,b,y){const C=(0,o.up)("Chart"),x=(0,o.up)("CreateChartModal");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",d,[(0,o._)("div",i,[(0,o._)("div",l,[c,(0,o.wy)((0,o._)("input",{type:"date",id:"startDate","onUpdate:modelValue":t[0]||(t[0]=e=>b.startDate=e),onChange:t[1]||(t[1]=(...e)=>y.updateCharts&&y.updateCharts(...e))},null,544),[[a.nr,b.startDate]])]),(0,o._)("div",h,[u,(0,o.wy)((0,o._)("input",{type:"date",id:"endDate","onUpdate:modelValue":t[2]||(t[2]=e=>b.endDate=e),onChange:t[3]||(t[3]=(...e)=>y.updateCharts&&y.updateCharts(...e))},null,544),[[a.nr,b.endDate]])]),(0,o._)("div",g,[(0,o._)("button",{class:(0,n.C_)(["bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",{"cursor-not-allowed":y.charts.length>=4}]),disabled:y.charts.length>=4,onClick:t[4]||(t[4]=(...e)=>y.openCreateChartModal&&y.openCreateChartModal(...e))},"Add Chart",10,p)])])]),(0,o._)("div",f,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(y.charts,((e,t)=>((0,o.wg)(),(0,o.j4)(C,{key:t,chart:e,index:t},null,8,["chart","index"])))),128))]),b.isCreateChartModalOpen?((0,o.wg)(),(0,o.j4)(x,{key:0,closeCreateChartModal:y.closeCreateChartModal},null,8,["closeCreateChartModal"])):(0,o.kq)("",!0)])}const b={class:"relative w-full max-w-2xl max-h-full"},y={class:"relative bg-white rounded-lg shadow dark:bg-gray-700"},C={class:"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"},x=(0,o._)("h3",{class:"text-xl font-semibold text-gray-900 dark:text-white"}," Static modal ",-1),w=(0,o._)("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[(0,o._)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),v=(0,o._)("span",{class:"sr-only"},"Close modal",-1),k=[w,v],_={class:"p-6 space-y-6"},M=(0,o._)("option",{disabled:"",value:""},"Please select a chart type",-1),D=(0,o._)("option",{value:"line"},"Line",-1),O=(0,o._)("option",{value:"bar"},"Bar",-1),S=[M,D,O],j={class:"flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"};function T(e,t,r,s,d,i){return(0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)([{hidden:r.isCreateChartModalOpen},"fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center"])},[(0,o._)("div",b,[(0,o._)("div",y,[(0,o._)("div",C,[x,(0,o._)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>r.closeCreateChartModal&&r.closeCreateChartModal(...e)),class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"staticModal"},k)]),(0,o._)("div",_,[(0,o.wy)((0,o._)("input",{placeholder:"Name of chart","onUpdate:modelValue":t[1]||(t[1]=e=>d.chart.name=e),class:"w-full px-4 py-2 text-base text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-0"},null,512),[[a.nr,d.chart.name]]),(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>d.chart.type=e),class:"w-full px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-0"},S,512),[[a.bM,d.chart.type]]),(0,o.wy)((0,o._)("input",{placeholder:"Name of sensor",type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>d.sensorName=e),class:"w-full px-4 py-2 text-base text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-0"},null,512),[[a.nr,d.sensorName]]),(0,o.wy)((0,o._)("input",{type:"color","onUpdate:modelValue":t[4]||(t[4]=e=>d.chart.series[0].color=e),class:"w-10 h-10 p-1 text-base text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-0"},null,512),[[a.nr,d.chart.series[0].color]])]),(0,o._)("div",j,[(0,o._)("button",{"data-modal-hide":"staticModal",type:"button",onClick:t[5]||(t[5]=e=>i.addChartToDashboard()),class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},"I accept"),(0,o._)("button",{"data-modal-hide":"staticModal",type:"button",onClick:t[6]||(t[6]=e=>i.resetForm()),class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"},"Decline")])])])],2)}var I=r(3029),U=r(65);r(7658);function $(e=new Date(2020,0,1),t=new Date){return new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))}function R(){return Math.round(100*Math.random())}var z=new U.ZP.Store({state:{dateRange:{start:null,end:null},charts:[{id:1,name:"Temperature chart",type:"line",series:[{color:"#ff0000",data:[...Array.from({length:30},(()=>({y:R(),x:$()})))],name:"temperature"}]},{id:2,name:"Humidity chart",type:"bar",series:[{color:"#ff00ff",data:[...Array.from({length:30},(()=>({y:R(),x:$()})))],name:"humidity"}]}]},mutations:{addChart(e,t){e.charts.length<4&&e.charts.push(t)},deleteChart(e,t){e.charts=e.charts.filter((e=>e.id!==t))},updateChart(e,{index:t,chart:r}){e.charts[t]=r},formattedColor(){return e=>e&&!e.startsWith("#")?`#${e}`:e},setDateRange(e,{start:t,end:r}){e.dateRange.start=t,e.dateRange.end=r},mergeSeries(e,{currentChartId:t,mergedChartId:r}){const a=e.charts.find((e=>e.id===r)).series;e.charts.find((e=>e.id===t)).series.push(...a)},unmergeSeries(e,{currentChartId:t,unMergedChartId:r}){const a=e.charts.find((e=>e.id===r)).series,o=e.charts.find((e=>e.id===t)).series;e.charts.find((e=>e.id===t)).series=o.filter((e=>!a.includes(e)))}},actions:{addChart({commit:e},t){e("addChart",t)},deleteChart({commit:e},t){e("deleteChart",t)},updateChart({commit:e},{index:t,chart:r}){e("updateChart",{index:t,chart:r})},formattedColor({commit:e}){e("formattedColor")},setDateRange({commit:e},t){e("setDateRange",t)},mergeSeries({commit:e},{currentChartId:t,mergedChartId:r}){e("mergeSeries",{currentChartId:t,mergedChartId:r})},unmergeSeries({commit:e},{currentChartId:t,unMergedChartId:r}){e("unmergeSeries",{currentChartId:t,unMergedChartId:r})}},getters:{getCharts(e){return e.charts},getFilteredCharts(e){if(!e.dateRange.start||!e.dateRange.end)return e.charts;const t=e.dateRange.start.getTime(),r=e.dateRange.end.getTime();return e.charts.map((e=>({...e,series:e.series.map((e=>({...e,data:e.data.filter((e=>e.x.getTime()>=t&&e.x.getTime()<=r))})))})))}}}),A={name:"CreateChartModal",props:["isCreateChartModalOpen","closeCreateChartModal"],data(){return{chart:{id:0,name:"",type:"",series:[{color:"#000000",name:"",data:[...Array.from({length:30},(()=>({y:R(),x:$()})))]}]},sensorName:""}},methods:{...(0,U.nv)(["formattedColor"]),addChartToDashboard(){this.chart.id=(0,I.Z)(),this.chart.series[0].name=this.sensorName,console.log(this.chart),this.$store.dispatch("addChart",this.chart),this.resetForm()},resetForm(){this.chart={name:"",type:"",series:[{color:"#000000",name:"",data:[...Array.from({length:30},(()=>({y:R(),x:$()})))]}]},this.closeCreateChartModal()}}},V=r(89);const N=(0,V.Z)(A,[["render",T]]);var F=N;const P={class:"rounded-lg bg-white shadow-lg drop-shadow-xl p-4 relative w-[350px] h-[700px]"},q={class:"flex justify-center text-xl"},Z={class:"flex items-center my-2 gap-2 text-lg"},B=(0,o._)("label",{for:"chartType"},"Chart Type:",-1),H=(0,o._)("option",{value:"line"},"Line",-1),W=(0,o._)("option",{value:"bar"},"Bar",-1),K=[H,W],Y={class:"flex items-center gap-8"},E=["for"],L=["onClick"],G=["onClick"],J=["for"],Q={class:"font-bold"},X=["id","onUpdate:modelValue"],ee=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0,0,256,256",width:"30px",height:"30px","fill-rule":"nonzero"},[(0,o._)("g",{fill:"#f80000","fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none",style:{"mix-blend-mode":"normal"}},[(0,o._)("g",{transform:"scale(8.53333,8.53333)"},[(0,o._)("path",{d:"M14.98438,2.48633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v0.5h-5.5c-0.26757,-0.00363 -0.52543,0.10012 -0.71593,0.28805c-0.1905,0.18793 -0.29774,0.44436 -0.29774,0.71195h-1.48633c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h18c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-1.48633c0,-0.26759 -0.10724,-0.52403 -0.29774,-0.71195c-0.1905,-0.18793 -0.44836,-0.29168 -0.71593,-0.28805h-5.5v-0.5c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM6,9l1.79297,15.23438c0.118,1.007 0.97037,1.76563 1.98438,1.76563h10.44531c1.014,0 1.86538,-0.75862 1.98438,-1.76562l1.79297,-15.23437z"})])])],-1),te=[ee];function re(e,t,r,s,d,i){const l=(0,o.up)("highcharts");return(0,o.wg)(),(0,o.iD)("div",P,[(0,o._)("div",q,(0,n.zw)(r.chart.name),1),(0,o._)("div",Z,[B,(0,o.wy)((0,o._)("select",{id:"chartType","onUpdate:modelValue":t[0]||(t[0]=e=>i.chartType=e)},K,512),[[a.bM,i.chartType]])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.charts,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"text-lg flex gap-6 mb-4"},[(0,o._)("div",Y,[(0,o._)("label",{for:"chart-"+e.id},(0,n.zw)(e.name),9,E),i.isMerged(e.id)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:0,class:"bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded",onClick:t=>i.mergeSeries(r.chart.id,e.id)},"Merge",8,L)),i.isMerged(e.id)?((0,o.wg)(),(0,o.iD)("button",{key:1,class:"bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded",onClick:t=>i.unmergeSeries(r.chart.id,e.id)},"Unmerge",8,G)):(0,o.kq)("",!0)])])))),128)),(0,o.Wm)(l,{options:i.chartOptions},null,8,["options"]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.series,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"flex items-center gap-4 text-xl"},[(0,o._)("label",{for:"color"+t},[(0,o.Uk)("Change "),(0,o._)("span",Q,(0,n.zw)(e.name),1),(0,o.Uk)(" color:")],8,J),(0,o.wy)((0,o._)("input",{id:"color"+t,type:"color","onUpdate:modelValue":t=>e.color=t},null,8,X),[[a.nr,e.color]])])))),128)),(0,o._)("button",{class:"absolute top-0 right-0 m-2 p-1 rounded-full text-white",onClick:t[1]||(t[1]=e=>i.deleteChart(r.chart.id))},te)])}var ae={props:{chart:{type:Object,required:!0},index:{type:Number,required:!0}},name:"ChartWidjet",data(){return{selectedCharts:[]}},methods:{deleteChart(e){this.$store.dispatch("deleteChart",e)},updateChart(e,t){this.$store.dispatch("updateChart",{index:e,chart:t})},mergeSeries(e,t){this.$store.dispatch("mergeSeries",{currentChartId:e,mergedChartId:t})},unmergeSeries(e,t){this.$store.dispatch("unmergeSeries",{currentChartId:e,unMergedChartId:t})},isMerged(e){const t=this.charts.find((t=>t.id===e)).series[0].name,r=this.chart.series;return r.some((e=>e.name===t))}},created(){Array.isArray(this.selectedSensors)||(this.selectedSensors=[{color:this.chart.color}])},computed:{charts(){return this.$store.getters.getCharts.filter((e=>e.id!==this.chart.id))},series:{get(){return this.chart.series},set(e){this.updateChart(this.index,{...this.chart,series:[...e]})}},formattedColor(){return e=>e&&!e.startsWith("#")?`#${e}`:e},chartType:{get(){return this.chart.type},set(e){this.updateChart(this.index,{...this.chart,type:e})}},chartOptions(){return{chart:{type:this.chart.type},title:{text:""},xAxis:{type:"datetime"},yAxis:{title:{text:""}},series:this.series,colors:this.chart.series.map((e=>e.color))}}}};const oe=(0,V.Z)(ae,[["render",re]]);var ne=oe,se={components:{Chart:ne,CreateChartModal:F},data(){return{startDate:null,endDate:null,chartData:[],isCreateChartModalOpen:!1}},computed:{charts(){return this.$store.getters.getFilteredCharts}},mounted(){this.updateCharts()},methods:{openCreateChartModal(){this.isCreateChartModalOpen=!0},closeCreateChartModal(){console.log(this.$store.state.charts),this.isCreateChartModalOpen=!1},updateCharts(){this.startDate&&this.endDate&&this.$store.dispatch("setDateRange",{start:new Date(this.startDate),end:new Date(this.endDate)})},addChart(e){this.charts.length<4&&this.$store.dispatch("addChart",e)}},watch:{startDate:{handler(){},immediate:!0},endDate:{handler(){},immediate:!0}}};const de=(0,V.Z)(se,[["render",m]]);var ie=de,le=r(880),ce=r.n(le);(0,a.ri)(ie).use(z).use(ce()).mount("#app")}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,n){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],n=e[c][2];for(var d=!0,i=0;i<a.length;i++)(!1&n||s>=n)&&Object.keys(r.O).every((function(e){return r.O[e](a[i])}))?a.splice(i--,1):(d=!1,n<s&&(s=n));if(d){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,o,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,n,s=a[0],d=a[1],i=a[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in d)r.o(d,o)&&(r.m[o]=d[o]);if(i)var c=i(r)}for(t&&t(a);l<s.length;l++)n=s[l],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},a=self["webpackChunktest_app_bergmann_infotech"]=self["webpackChunktest_app_bergmann_infotech"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(8415)}));a=r.O(a)})();
//# sourceMappingURL=app.214a827b.js.map