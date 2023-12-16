"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[6781],{3087:function(){},5092:function(e,t){t.Z={emits:["update:modelValue"],inheritAttrs:!1,props:{modelValue:String,checked:Boolean,required:Boolean},computed:{localValue:{get(){return this.modelValue||this.value},set(e){return this.$emit("update:modelValue",e)}}},methods:{focus(){this.$el.querySelector("input").focus()},error(){this.$el.classList.add("error")},checkIfFilled(e){this.required&&(e.target.value?e.target.parentNode.classList.remove("error"):e.target.parentNode.classList.add("error"))}}}},461:function(e,t,l){l.d(t,{s:function(){return n}});var s=l(6252);const a={class:"custom-check"},r=["checked","required"],i=(0,s._)("span",{class:"checkmark"},null,-1);function n(e,t,l,n,u,o){return(0,s.wg)(),(0,s.iD)("label",a,[(0,s._)("input",{type:"checkbox",checked:l.modelValue||l.checked,required:l.required,onChange:t[0]||(t[0]=e=>o.localValue=e.target.checked)},null,40,r),i,(0,s.WI)(e.$slots,"default")])}},3032:function(e,t,l){var s=l(2052),a=l(2547),r=(l(8170),l(3744));const i=(0,r.Z)(a.Z,[["render",s.s]]);t.Z=i},2310:function(e,t,l){l.r(t),l.d(t,{default:function(){return L}});var s=l(6252);const a=(0,s._)("h2",null,"Hero Stats Sheet",-1),r=(0,s._)("br",null,null,-1),i=(0,s._)("br",null,null,-1),n=(0,s._)("br",null,null,-1),u=(0,s._)("br",null,null,-1),o=(0,s._)("br",null,null,-1),d={class:"pad-5"},c={class:"pad-5",style:{"min-height":"100vh","overflow-y":"auto"}};function h(e,t,l,h,m,f){const p=(0,s.up)("PagePath"),k=(0,s.up)("PageTitle"),v=(0,s.up)("GameStyleCheckbox"),_=(0,s.up)("E7Slider"),g=(0,s.up)("Multiselect"),S=(0,s.up)("FilterBlock"),w=(0,s.up)("StatsTable");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[(0,s.Wm)(p),a])),_:1}),(0,s._)("div",null,[r,(0,s.Wm)(v,{modelValue:m.sheetSettings.awakened,"onUpdate:modelValue":t[0]||(t[0]=e=>m.sheetSettings.awakened=e)},{default:(0,s.w5)((()=>[(0,s.Uk)(" Awakened ")])),_:1},8,["modelValue"]),i,(0,s.Wm)(v,{modelValue:m.sheetSettings.selfImprint,"onUpdate:modelValue":t[1]||(t[1]=e=>m.sheetSettings.selfImprint=e)},{default:(0,s.w5)((()=>[(0,s.Uk)(" SSS Self Imprint ")])),_:1},8,["modelValue"]),n,(0,s.Wm)(v,{modelValue:m.sheetSettings.speedSetBonus,"onUpdate:modelValue":t[2]||(t[2]=e=>m.sheetSettings.speedSetBonus=e)},{default:(0,s.w5)((()=>[(0,s.Uk)(" Speed Set Bonus ")])),_:1},8,["modelValue"]),u,(0,s.Wm)(v,{modelValue:m.sheetSettings.skillBonus,"onUpdate:modelValue":t[3]||(t[3]=e=>m.sheetSettings.skillBonus=e)},{default:(0,s.w5)((()=>[(0,s.Uk)(" Skill bonus ")])),_:1},8,["modelValue"]),o,(0,s.Wm)(_,{modelValue:m.sheetSettings.lvl,"onUpdate:modelValue":t[4]||(t[4]=e=>m.sheetSettings.lvl=e),max:60,min:1,style:{"font-size":"10px"}},null,8,["modelValue"]),(0,s.Uk)(" Level: "),(0,s.Wm)(v,{modelValue:m.sheetSettings.lvl,"onUpdate:modelValue":t[5]||(t[5]=e=>m.sheetSettings.lvl=e),"true-value":1},{default:(0,s.w5)((()=>[(0,s.Uk)("1")])),_:1},8,["modelValue"]),(0,s.Wm)(v,{modelValue:m.sheetSettings.lvl,"onUpdate:modelValue":t[6]||(t[6]=e=>m.sheetSettings.lvl=e),"true-value":50},{default:(0,s.w5)((()=>[(0,s.Uk)("50")])),_:1},8,["modelValue"]),(0,s.Wm)(v,{modelValue:m.sheetSettings.lvl,"onUpdate:modelValue":t[7]||(t[7]=e=>m.sheetSettings.lvl=e),"true-value":60},{default:(0,s.w5)((()=>[(0,s.Uk)("60")])),_:1},8,["modelValue"])]),(0,s._)("div",d,[(0,s.Wm)(S,{modelValue:m.filterData,"onUpdate:modelValue":t[9]||(t[9]=e=>m.filterData=e)},{line1:(0,s.w5)((()=>[(0,s.Wm)(g,{class:"col-1",placeholder:"Heroes",options:m.searchHeroes,modelValue:m.filterData._id,"onUpdate:modelValue":t[8]||(t[8]=e=>m.filterData._id=e)},null,8,["options","modelValue"])])),_:1},8,["modelValue"])]),(0,s._)("div",c,[(0,s.Wm)(w,{units:m.list,"filter-mask":m.filterMask},null,8,["units","filter-mask"])])])}var m=l(171),f=l(222),p=l(5849),k=l(3032),v=l(999),_=l(3409),g=l(1163),S=l(2559),w=l(1426),V=l(3866),b=l(3577);const y={class:"stats-table full-w"},B={class:"noselect"},U=["onClick"],Z=(0,s._)("i",{class:"fa fa-angle-down"},null,-1),D=[Z];function z(e,t,l,a,r,i){const n=(0,s.up)("Face"),u=(0,s.up)("router-link"),o=(0,s.Q2)("ripple-effect");return(0,s.wg)(),(0,s.iD)("table",y,[(0,s._)("thead",B,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.tableHeaders,(e=>(0,s.wy)(((0,s.wg)(),(0,s.iD)("td",{key:e.id,onClick:t=>i.sortByChange(e.id),class:"pointer relative overflow-hidden mat-hover"},[(0,s.Uk)((0,b.zw)(e.name)+" ",1),(0,s._)("span",{style:(0,b.j5)({opacity:r.sortBy===e.id?1:0}),class:(0,b.C_)({"sorting-icon":!0,reverse:r.reverse})},D,6)],8,U)),[[o]]))),128))]),(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.sortedList,(e=>((0,s.wg)(),(0,s.iD)(s.HY,null,[l.filterMask[e._id]?((0,s.wg)(),(0,s.iD)("tr",{key:e._id},[(0,s._)("td",null,[(0,s.Wm)(u,{to:"/hero/"+e._id,class:"route-restore"},{default:(0,s.w5)((()=>[(0,s.Wm)(n,{hero:e,hover:!1,showname:!0,showrarity:!0},null,8,["hero"])])),_:2},1032,["to"])]),(0,s._)("td",null,(0,b.zw)(i.formatNumber(e.statsResult.atk)),1),(0,s._)("td",null,(0,b.zw)(i.formatNumber(e.statsResult.hp)),1),(0,s._)("td",null,(0,b.zw)(i.formatNumber(e.statsResult.def)),1),(0,s._)("td",null,(0,b.zw)(i.formatNumber(e.statsResult.spd)),1),(0,s._)("td",null,(0,b.zw)(i.formatNumber(e.statsResult.chc)),1),(0,s._)("td",null,(0,b.zw)(i.formatNumber(e.statsResult.chd)),1),(0,s._)("td",null,(0,b.zw)(i.formatNumber(e.statsResult.eff)),1),(0,s._)("td",null,(0,b.zw)(i.formatNumber(e.statsResult.efr)),1)])):(0,s.kq)("",!0)],64)))),256))])])}var W=l(9165),R={components:{Face:W.Z},props:{units:{type:Array,default:()=>[]},filterMask:{type:Object,default:()=>({})}},data(){return{sortBy:"spd",reverse:!1,tableHeaders:[{name:"Hero"},{name:"Attack",id:"atk"},{name:"Health",id:"hp"},{name:"Defense",id:"def"},{name:"Speed",id:"spd"},{name:"Crit Chance",id:"chc"},{name:"Crit Damage",id:"chd"},{name:"Effectiveness",id:"eff"},{name:"Eff Resist",id:"efr"}]}},computed:{sortedList(){const e=this.sortBy;function t(e,t){return e.statsResult&&e.statsResult[t]?e.statsResult[t]:0}return this.units.length&&this.units[0].statsResult?this.units.sort(((l,s)=>{let a=t(l,e),r=t(s,e);return this.reverse?a-r:r-a})):[]}},methods:{sortByChange(e){e&&(e===this.sortBy?this.reverse=!this.reverse:(this.sortBy=e,this.reverse=!1))},formatNumber(e){if(e<10)return(Math.round(1e4*e)/100).toFixed(2)+"%";let t=e+"";var l=/(\d+)(\d{3})/;while(l.test(t))t=t.replace(l,"$1.$2");return t}}},C=l(3744);const H=(0,C.Z)(R,[["render",z]]);var N=H,q={name:"HeroStatsIndex",components:{PagePath:m.Z,PageTitle:f.Z,SectionTitle:p.Z,GameStyleCheckbox:k.Z,Multiselect:v.Z,FilterBlock:_.Z,E7Slider:V.Z,StatsTable:N},data(){return{sheetSettings:{tracking:"spd",awakened:!0,speedSetBonus:!1,skillBonus:!0,selfImprint:!1,lvl:60},filterData:{_id:[],rarity:[],role:[],zodiac:[]},list:[],searchHeroes:[],filterMask:{}}},watch:{sheetSettings:{deep:!0,handler(){this.calculateStats()}},filterData:{deep:!0,handler(){this.filterList()}}},methods:{calculateStats(){var e,t;const{awakened:l,skillBonus:s,ee_equiped:a,speedSetBonus:r,selfImprint:i,lvl:n}=this.sheetSettings;for(e in this.list)t=this.list[e],l&&!t.zodiac_tree&&(t.zodiac_tree=(0,S.Z)(t.rarity,t.role,t.zodiac,t.attribute)),i&&(t.self_devotion.grades=(0,w.Z)(t).self_devotion),t.statsResult=(0,g.Z)({rarity:t.rarity||1,level:Number(n||1),awakened:!!l&&t.zodiac_tree,imprint:!!i&&t.self_devotion,skills:!!s&&t.stats?.skills,ex_equip:!!a&&t.stats?.ex_equip?.[0],speedSet:r,stats:t.stats})||{hp:0,def:0,atk:0,spd:0,chc:0,chd:0,eff:0,efr:0,dac:0}},filterList(){var e=this.filterMask,t=this.filterData;for(var l in this.list){var s=this.list[l];e[s._id]=(!t._id.length||t._id.includes(s._id))&&["role","attribute","rarity","zodiac"].every((e=>!t[e]||!t[e].length||t[e].includes(s[e])))}return e}},computed:{},created(){this.$gameData.hero.list().then((e=>{this.list=e,this.searchHeroes=this.list.map((e=>({id:e._id,name:e.name}))),this.calculateStats(),this.filterList()})).catch((e=>{console.error(e)}))}};const x=(0,C.Z)(q,[["render",h]]);var L=x},8170:function(e,t,l){l(3087)},2547:function(e,t,l){l.d(t,{Z:function(){return s.Z}});var s=l(5092)},2052:function(e,t,l){l.d(t,{s:function(){return s.s}});var s=l(461)}}]);