"use strict";(self["webpackChunkspark_app_store"]=self["webpackChunkspark_app_store"]||[]).push([[912],{4912:(t,e,a)=>{a.r(e),a.d(e,{default:()=>V});a(7280),a(7098);var s=a(3673),r=a(8880),l=a(2323);const o={class:"topbar"},i={class:"search"},n={class:"body relative-position"},p={class:"rank",key:"recommend"},d=(0,s.Wm)("h5",null,"施工ing...",-1),u={class:"rank",key:"rank"},c=(0,s.Wm)("h5",null,"施工ing...",-1),h={class:"sort applist",key:"sort"},m={class:"wrap"},g={class:"text"},w=(0,s.Wm)("i",null,null,-1),W=(0,s.Wm)("i",null,null,-1),k=(0,s.Wm)("i",null,null,-1),_=(0,s.Wm)("i",null,null,-1),v=(0,s.Wm)("i",null,null,-1),f=(0,s.Wm)("i",null,null,-1),y=(0,s.Wm)("i",null,null,-1);function S(t,e,a,S,$,q){const I=(0,s.up)("q-icon"),Z=(0,s.up)("q-input"),j=(0,s.up)("q-avatar"),Q=(0,s.up)("q-card-section"),b=(0,s.up)("q-card"),x=(0,s.up)("q-scroll-area"),z=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(z,{class:"flex storepage"},{default:(0,s.w5)((()=>[(0,s.Wm)("div",o,[(0,s.Wm)("div",i,[(0,s.Wm)(I,{name:"search",size:"25px"}),(0,s.Wm)(Z,{borderless:"",modelValue:t.searchStr,"onUpdate:modelValue":e[2]||(e[2]=e=>t.searchStr=e)},{append:(0,s.w5)((()=>[""!==t.searchStr?((0,s.wg)(),(0,s.j4)(I,{key:0,name:"clear",class:"cursor-pointer",onClick:e[1]||(e[1]=e=>t.searchStr="")})):(0,s.kq)("",!0)])),_:1},8,["modelValue"])])]),(0,s.Wm)(x,{style:{width:"100%","margin-top":"52px"},"thumb-style":{"z-index":1,"border-radius":"100px"},visible:!1},{default:(0,s.w5)((()=>[(0,s.Wm)("div",n,[(0,s.Wm)(r.W3,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:(0,s.w5)((()=>["/store"==t.$route.path&&t.loaded?((0,s.wg)(),(0,s.j4)("div",p,[d])):(0,s.kq)("",!0),t.$route.path.match("rank")&&t.loaded?((0,s.wg)(),(0,s.j4)("div",u,[c])):(0,s.kq)("",!0),t.$route.path.match("sort")&&t.loaded?((0,s.wg)(),(0,s.j4)("div",h,[((0,s.wg)(!0),(0,s.j4)(s.HY,null,(0,s.Ko)(t.appList,((e,a)=>((0,s.wg)(),(0,s.j4)(b,{key:a},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{horizontal:""},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{size:"64px",rounded:""},{default:(0,s.w5)((()=>[(0,s.Wm)("img",{src:t.source+"/store/"+t.$route.params.sort+"/"+e.package+"/icon.png"},null,8,["src"])])),_:2},1024),(0,s.Wm)(Q,null,{default:(0,s.w5)((()=>[(0,s.Wm)("h6",null,(0,l.zw)(e.application_name_zh),1),(0,s.Wm)("div",m,[(0,s.Wm)("div",g,(0,l.zw)(e.more),1)])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),w,W,k,_,v,f,y])):(0,s.kq)("",!0)])),_:1})])])),_:1})])),_:1})}var $=a(52),q=a.n($),I=a(794);const Z={name:"PageIndex",data:()=>({appList:[],source:"https://d.store.deepinos.org.cn",imgSource:"https://cdn.jsdelivr.net/gh/Jerrywang959/jsonpng",dataSource:"https://store.deepinos.org/api/",searchStr:"",loaded:!0,sortId:{}}),methods:{getSortId:function(){q().post(`${this.dataSource}type/get_type_list`).then((t=>{t.data.data.forEach((t=>{this.sortId[t.orig_name]=t.type_id})),this.getAppList(this.$route.params)}))},getAppList:function(t){t.hasOwnProperty("sort")&&q().post(`${this.dataSource}application/get_application_list`,{size:1e4,type_id:this.sortId[t.sort]}).then((t=>{setTimeout((()=>{this.appList=t.data.data.data,this.loaded=!0}),800)}))}},created(){console.log("spa"),this.$watch((()=>this.$route.params),((t,e)=>{t.hasOwnProperty("sort")?this.loaded=!1:this.appList=[],setTimeout((()=>{this.getAppList(t)}),400)})),this.$route.params.hasOwnProperty("sort")&&(this.loaded=!1),this.getSortId(),this.$watch((()=>this.$route.path),((t,e)=>{t.match("store")&&(t.match("sorts")||(this.loaded=!1,setTimeout((()=>{this.loaded=!0}),1e3)))}))},setup(){(0,I.Z)({title:"WEB商店",titleTemplate:t=>`${t} - 星火应用商店`})}};var j=a(4379),Q=a(4554),b=a(4553),x=a(1939),z=a(151),L=a(5589),A=a(5096),C=a(4027),P=a(6115),O=a(7518),T=a.n(O);Z.render=S;const V=Z;T()(Z,"components",{QPage:j.Z,QIcon:Q.Z,QInput:b.Z,QScrollArea:x.Z,QCard:z.Z,QCardSection:L.Z,QAvatar:A.Z,QImg:C.Z,QField:P.Z})}}]);