"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[8017],{7012:function(t,e,r){r.r(e),r.d(e,{default:function(){return _}});var a=r(6252),i=r(9963);const l=(0,a._)("h2",null,"Artifacts",-1);function s(t,e,r,s,n,o){const u=(0,a.up)("PageTitle"),c=(0,a.up)("FilterBlock"),f=(0,a.up)("ArtifactParallax"),d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[l])),_:1}),(0,a.Wm)(c,{modelValue:n.filters,"onUpdate:modelValue":e[0]||(e[0]=t=>n.filters=t),"one-stars":!0,"two-stars":!0,"common-role":!0},null,8,["modelValue"]),(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.list,(t=>(0,a.wy)(((0,a.wg)(),(0,a.j4)(d,{key:t,to:"/artifacts/"+t._id,class:"route-restore pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{artifact:t},null,8,["artifact"])])),_:2},1032,["to"])),[[i.F8,o.filtredList[t._id]]]))),128))])])}var n=r(2116);const o={class:"artifact-parallax"},u=["data-src"];function c(t,e,r,i,l,s){const n=(0,a.Q2)("lazyloader");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.wy)((0,a._)("img",{"data-src":s.img,style:{height:"100%"}},null,8,u),[[n]])])}var f=r(8753),d={props:{artifact:{type:Object,required:!0}},computed:{img(){return f.cK+"/item_arti/"+this.artifact.id+"_fu.png"}}},m=r(3744);const p=(0,m.Z)(d,[["render",c]]);var v=p,g=r(2065),h=r(2784),w={name:"ArtifactsIndex",components:{PageTitle:n.Z,FilterBlock:g.Z,ArtifactParallax:v},data(){return{filters:{name:"",rarity:[],role:[],debuffs:[],buffs:[],common:[]},list:[]}},created(){(0,h.Z)(f.hi+"/getList?list=artifact&fields=_id,id,name,rarity,role,tags,buffs,debuffs,common,tags").then((t=>{this.list=Object.values(JSON.parse(t)).map((t=>(t.name=t.name.en,t)))}))},computed:{filtredList(){var t={},e=this.filters;for(var r in this.list){var a=this.list[r];t[a._id]=-1!==a.name.toLowerCase().indexOf(e.name.toLowerCase())&&["role","rarity"].every((t=>!e[t].length||e[t].includes(a[t])))&&["common","buffs","debuffs"].every((t=>!e[t].length||e[t].every((e=>a[t]&&a[t].includes(e)))))}return t}}};const y=(0,m.Z)(w,[["render",s]]);var _=y}}]);