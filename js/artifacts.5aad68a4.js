"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[8017],{6228:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var r=a(6252),i=a(9963);const l=(0,r._)("h2",null,"Artifacts",-1);function s(e,t,a,s,n,o){const c=(0,r.up)("PageTitle"),u=(0,r.up)("FilterBlock"),f=(0,r.up)("ArtifactParallax"),d=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[l])),_:1}),(0,r.Wm)(u,{modelValue:n.filters,"onUpdate:modelValue":t[0]||(t[0]=e=>n.filters=e),"one-stars":!0,"two-stars":!0,"common-role":!0,class:"pad-5"},null,8,["modelValue"]),(0,r._)("div",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.list,(e=>(0,r.wy)(((0,r.wg)(),(0,r.j4)(d,{key:e,to:"/artifacts/"+e._id,class:"route-restore pointer",style:{"vertical-align":"top"}},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{artifact:e},null,8,["artifact"])])),_:2},1032,["to"])),[[i.F8,o.filtredList[e._id]]]))),128))])])}var n=a(2116);const o={class:"artifact-parallax"},c=["data-src"];function u(e,t,a,i,l,s){const n=(0,r.Q2)("lazyloader");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.wy)((0,r._)("img",{"data-src":s.img,style:{height:"100%"}},null,8,c),[[n]])])}var f=a(8753),d={props:{artifact:{type:Object,required:!0}},computed:{img(){return f.cK+"/item_arti/"+this.artifact.id+"_fu.png"}}},m=a(3744);const g=(0,m.Z)(d,[["render",u]]);var p=g,h=a(5661),v=a(2784),w={name:"ArtifactsIndex",components:{PageTitle:n.Z,FilterBlock:h.Z,ArtifactParallax:p},data(){return{filters:{name:"",rarity:[],role:[],tags:[],debuff:[],buff:[],common:[]},list:[]}},created(){(0,v.Z)(f.hi+"/getList?list=artifact&fields=_id,id,name,rarity,role,tags,buff,debuff,common,tags,hero,nicknames").then((e=>{this.list=Object.values(JSON.parse(e)),console.log(this.list)}))},computed:{filtredList(){var e={},t=/[^a-z0-9]/g,a=/[^a-z0-9,]/g,r=this.filters,i=r.name.toLowerCase().replace(t,"");for(var l in this.list){var s=this.list[l];e[s._id]=(-1!==s.name.toLowerCase().replace(t,"").indexOf(i)||s.hero&&-1!==s.hero.toLowerCase().replace(t,"").indexOf(i)||s.nicknames&&-1!==s.nicknames.join(",").toLowerCase().replace(a,"").indexOf(i))&&["role","rarity"].every((e=>!r[e].length||r[e].includes(s[e])))&&(!r.tags||r.tags.every((e=>s.tags.includes(e))))&&["common","buff","debuff"].every((e=>!r[e].length||r[e].every((t=>s[e]&&s[e].includes(t)))))}return e}}};const y=(0,m.Z)(w,[["render",s]]);var k=y}}]);