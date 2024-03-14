"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[8833],{9218:function(e,t,o){o.d(t,{Z:function(){return V}});var l=o(6252),i=o(3577);const s={class:"flex flex-wrap filter-heroes"},n=["onClick"],r=["onClick"],a=["alt","src"],c={key:1},u={key:1,class:"filter-group len-3"},d={key:2,class:"filter-group len-3"},p={key:3,class:"filter-group len-3"},m={key:4,class:"filter-group len-3"},f={key:5,class:"filter-group len-3"},h={key:6,class:"filter-group len-3"},g={key:7,class:"filter-group len-3"};function b(e,t,o,b,y,v){const w=(0,l.up)("SearchBar"),k=(0,l.up)("Multiselect"),M=(0,l.Q2)("ripple-effect"),D=(0,l.Q2)("tooltip");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l.WI)(e.$slots,"line1"),void 0!==v.computedModel.name?((0,l.wg)(),(0,l.j4)(w,{key:0,modelValue:v.computedModel.name,"onUpdate:modelValue":t[0]||(t[0]=e=>v.computedModel.name=e),delay:100,class:"search-bar"},null,8,["modelValue"])):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(v.buttonGroup,((e,t)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:"group"+t},[e.group?((0,l.wg)(),(0,l.iD)("div",{key:0,class:(0,i.C_)(e.classGroup)},[(0,l.wy)(((0,l.wg)(),(0,l.iD)("button",{class:(0,i.C_)(["button relative overflow-hidden flex-fill mat-hover",{active:!e.group.length}]),onClick:t=>v.resetArray(e.group,e.options)},[(0,l.Uk)(" All ")],10,n)),[[M]]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.options,(t=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("button",{key:t,class:(0,i.C_)(["button relative overflow-hidden flex-fill mat-hover",{active:e.group.includes(t.id)}]),onClick:o=>v.addIfNot(e.group,t.id)},[e.src?((0,l.wg)(!0),(0,l.iD)(l.HY,{key:0},(0,l.Ko)(e.repeatIcon?e.repeatIcon(t.id):1,(o=>((0,l.wg)(),(0,l.iD)("img",{key:e.gIndex+"-"+o,alt:t.id,src:e.src(t.id)},null,8,a)))),128)):((0,l.wg)(),(0,l.iD)("span",c,(0,i.zw)(t.id),1))],10,r)),[[D,t.name],[M]]))),128))],2)):(0,l.kq)("",!0)],64)))),128)),v.computedModel.buff?((0,l.wg)(),(0,l.iD)("div",u,[(0,l.Wm)(k,{modelValue:v.computedModel.buff,"onUpdate:modelValue":t[1]||(t[1]=e=>v.computedModel.buff=e),placeholder:"Buffs",style:{"--ms-tag-bg":"var(--font-color-primary)"},options:v.getBuffs},null,8,["modelValue","options"])])):(0,l.kq)("",!0),v.computedModel.debuff?((0,l.wg)(),(0,l.iD)("div",d,[(0,l.Wm)(k,{modelValue:v.computedModel.debuff,"onUpdate:modelValue":t[2]||(t[2]=e=>v.computedModel.debuff=e),placeholder:"Debuffs",style:{"--ms-tag-bg":"var(--font-color-warn)"},options:v.getDebuffs},null,8,["modelValue","options"])])):(0,l.kq)("",!0),v.computedModel.common?((0,l.wg)(),(0,l.iD)("div",p,[(0,l.Wm)(k,{modelValue:v.computedModel.common,"onUpdate:modelValue":t[3]||(t[3]=e=>v.computedModel.common=e),placeholder:"Common effects",style:{"--ms-tag-bg":"var(--font-color-confirm)"},options:v.getCommon},null,8,["modelValue","options"])])):(0,l.kq)("",!0),v.computedModel.devotion?((0,l.wg)(),(0,l.iD)("div",m,[(0,l.Wm)(k,{modelValue:v.computedModel.devotion,"onUpdate:modelValue":t[4]||(t[4]=e=>v.computedModel.devotion=e),placeholder:"Imprint",options:v.selectableStats},null,8,["modelValue","options"])])):(0,l.kq)("",!0),v.computedModel.self_devotion?((0,l.wg)(),(0,l.iD)("div",f,[(0,l.Wm)(k,{modelValue:v.computedModel.self_devotion,"onUpdate:modelValue":t[5]||(t[5]=e=>v.computedModel.self_devotion=e),placeholder:"Self Imprint",options:v.selectableStats},null,8,["modelValue","options"])])):(0,l.kq)("",!0),v.computedModel.tags?((0,l.wg)(),(0,l.iD)("div",h,[(0,l.Wm)(k,{modelValue:v.computedModel.tags,"onUpdate:modelValue":t[6]||(t[6]=e=>v.computedModel.tags=e),placeholder:"Type",options:y.tags},null,8,["modelValue","options"])])):(0,l.kq)("",!0),Object.keys(o.modelValue).length?((0,l.wg)(),(0,l.iD)("div",g,[(0,l.wy)(((0,l.wg)(),(0,l.iD)("button",{class:"button relative overflow-hidden full-h full-w text-center mat-hover",onClick:t[7]||(t[7]=(...e)=>v.reset&&v.reset(...e)),style:{border:"solid 1px #484950"}},[(0,l.Uk)("✖ Reset Filters")])),[[M]])])):(0,l.kq)("",!0)])}o(560);var y=o(8439),v=o(8753),w=o(1545),k=o(9662),M={emits:["update:modelValue"],components:{SearchBar:w.Z,Multiselect:k.Z},props:{modelValue:{type:Object,default:()=>({})},oneStars:{type:Boolean,default:!1},twoStars:{type:Boolean,default:!1},commonRole:{type:Boolean,default:!1}},data(){return{cdn:v.cK,tags:Object.keys(y.pJ).map((e=>({id:Number(e),name:y.pJ[e]})))}},computed:{computedModel:{get(){return this.modelValue},set(e){return this.$emit("update:modelValue",e)}},buttonGroup(){return[{classGroup:"filter-group flex len-2",group:this.computedModel.rarity,src:()=>v.cK+"img/cm_icon_star.png",repeatIcon:e=>e,options:this.selectableRarity.map((e=>({id:e,name:""})))},{classGroup:"filter-group flex len-2",group:this.computedModel.attribute,src:e=>v.cK+"img/cm_icon_pro"+e+".png",options:y.Y4.map((e=>({id:e,name:""})))},{classGroup:"filter-group flex len-2",group:this.computedModel.role,src:e=>v.cK+("common"!==e?"img/cm_icon_role_"+e+".png":"img/icon_menu_roleshare.png"),options:this.selectableRoles.map((e=>({id:e,name:""})))},{classGroup:"filter-group flex len-1",group:this.computedModel.zodiac,src:e=>v.cK+"img/cm_icon_zodiac_"+e+".png",options:y.Zp.map((e=>({id:e,name:this.$t("strings."+e)})))}]},selectableRarity(){var e=[5,4,3];return this.twoStars&&e.push(2),this.oneStars&&e.push(1),e},selectableRoles(){var e=y.uJ.slice();return this.commonRole&&e.unshift("common"),e},selectableStats(){return v.ot.map((e=>({id:e,name:this.$t("strings."+e),src:""})))}},methods:{getBuffs(){return new Promise(((e,t)=>{this.$gameData.buff.list().then((t=>{e(t.map((e=>(e.src=v.cK+(e.src||"/buff/"+e.id+".png"),{id:e._id,name:e.name,description:e.description,src:v.cK+(e.icon?e.icon:"/buff/"+e._id+".png")}))))})).catch((()=>{t([])}))}))},getDebuffs(){return new Promise(((e,t)=>{this.$gameData.debuff.list().then((t=>{e(t.map((e=>(e.src=v.cK+(e.src||"/buff/"+e.id+".png"),{id:e._id,name:e.name,description:e.description,src:v.cK+(e.icon?e.icon:"/buff/"+e._id+".png")}))))})).catch((()=>{t([])}))}))},getCommon(){return new Promise(((e,t)=>{this.$gameData.common.list().then((t=>{e(t.map((e=>({id:e._id,name:e.name,description:e.description,src:v.cK+(e.icon?e.icon:"/buff/"+e._id+".png")}))))})).catch((()=>{t([])}))}))},reset(){for(var e in this.computedModel)switch(Object.prototype.toString.call(this.computedModel[e])){case"[object String]":this.computedModel[e]="";break;case"[object Array]":this.computedModel[e].splice(0);break;case"[object Object]":this.reset(this.computedModel[e]);break}},resetArray(e=[],t=[]){e.length?e.splice(0):t.forEach((t=>{t.id&&(t=t.id),e.push(t)}))},addIfNot(e,t){var o=e,l=o.indexOf(t);-1!==l?o.splice(l,1):o.push(t)}}},D=o(3744);const _=(0,D.Z)(M,[["render",b]]);var V=_},1545:function(e,t,o){o.d(t,{Z:function(){return p}});var l=o(6252);const i={class:"nsearchbar",style:{display:"flex",margin:"0",flx:"1 1 auto",overflow:"hidden",position:"relative"}},s=["value"],n=(0,l._)("i",{class:"fa fa-search"},null,-1),r=[n];function a(e,t,o,n,a,c){const u=(0,l.Q2)("ripple-effect");return(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("input",(0,l.dG)({ref:"tierlist-maker-search-bar",onInput:t[0]||(t[0]=(...e)=>c.delayUpdate&&c.delayUpdate(...e)),value:o.modelValue},e.$attrs,{style:{"background-color":"#575656ad"},placeholder:"Search...",autocomplete:"off"}),null,16,s),(0,l._)("div",{class:"go",onClick:t[1]||(t[1]=e=>{e.currentTarget.previousSibling.value="",e.currentTarget.previousSibling.focus()})},r)])),[[u]])}var c={emits:["update:modelValue"],props:{modelValue:{type:String,defualt:""},delay:{type:Number,default:0}},methods:{delayUpdate(e){this.updateValue(e.target.value)},updateValue(e){this.$emit("update:modelValue",e)}}},u=o(3744);const d=(0,u.Z)(c,[["render",a]]);var p=d},9662:function(e,t,o){o.d(t,{Z:function(){return g}});var l=o(6252),i=o(3577);const s={key:0,style:{display:"inline-block","min-width":"2em"}},n=["data-src"],r={style:{"margin-left":"5px"}},a={style:{"font-size":"1.4rem","font-weight":"400"}},c=(0,l._)("br",null,null,-1),u={style:{"font-size":"1.2rem","font-weight":"300"}};function d(e,t,o,d,p,m){const f=(0,l.up)("Multiselect",!0),h=(0,l.Q2)("lazyloader");return(0,l.wg)(),(0,l.j4)(f,{class:"multisel",tabindex:"-1",mode:this.mode,trackBy:"name",valueProp:"id",label:"name",placeholder:"",searchable:!0,clearOnBlur:!1,options:o.options,ref:"multiselect"},{option:(0,l.w5)((e=>[e.option.src?((0,l.wg)(),(0,l.iD)("span",s,[(0,l.wy)((0,l._)("img",{"data-src":e.option.src},null,8,n),[[h]])])):(0,l.kq)("",!0),(0,l._)("div",r,[(0,l._)("span",a,(0,i.zw)(e.option.name||e.option.id),1),c,(0,l._)("span",u,(0,i.zw)(e.option.description),1)])])),_:1},8,["mode","options"])}var p=o(5135),m={name:"MultiSelect",components:{Multiselect:p.Z},props:{mode:{type:String,default:"tags"},options:{default:()=>[]}},data(){return{isFocused:!1,focusTimer:null,timer:null,closeOnSelect:!1,openDirection:"bottom"}},mounted(){const e=this.$el.querySelector(".multiselect-clear");e&&(e.tabIndex=-1)},watch:{isFocused(e){if(e){this.openDirection="top",this.closeOnSelect=!1,this.$el.style.fontSize="20px",this.$el.style.setProperty("--ms-max-height",window.innerHeight/2+"px"),this.$el.style.position="fixed",this.$el.style.zIndex=10;var{top:t,left:o}=this.$el.getBoundingClientRect();this.$el.style.bottom=window.innerHeight-t+"px",this.$el.style.left=o+"px",this.timer&&(clearTimeout(this.timer),this.timer=null),this.timer=setTimeout((()=>{this.$el.style.bottom=0,this.$el.style.left=0}),100)}else this.$el.style.position="",this.$el.style.bottom="",this.$el.style.left="",this.$el.style.zIndex=""}},methods:{openDropdown(){this.$refs.multiselect.open()},focusSelect(){if(window.innerWidth>700)return this.isFocused=!1;this.focusTimer&&(clearTimeout(this.focusTimer),this.focusTimer=null),this.isFocused=!0},blurSelect(){this.isFocused&&(this.focusTimer=setTimeout((()=>{this.isFocused=!1}),20))}}},f=o(3744);const h=(0,f.Z)(m,[["render",d]]);var g=h},6004:function(e,t,o){o.d(t,{Z:function(){return p}});var l=o(6252),i=o(3577);const s={class:"page-path-title"},n=(0,l._)("span",null," / ",-1);function r(e,t,o,r,a,c){const u=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",s,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.path,(e=>((0,l.wg)(),(0,l.iD)("span",{key:e[1]},[(0,l.Wm)(u,{to:e[1],class:"router-restore"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e[0]),1)])),_:2},1032,["to"]),n])))),128)),(0,l.WI)(e.$slots,"default")])}const a={database:"Database",hero:"Heroes",artifacts:"Artifacts","hero-stats-table":"Hero Stats Table",guides:"Guides","voice-actors":"Voice Actors",buffs:"Buffs",common:"Common",debuffs:"Debuffs","official-info":"Official Links"};var c={props:{location:{type:String,default:""}},data(){return{path:[]}},created(){var e="",t=window.location.href.toLowerCase().split("#")[1].replace(/\?.*/,"").split("/").filter(((e,t)=>""!==e||0===t));t.splice(-1,1),this.path=t.map(((o,l)=>{var i=a[o];return i||(0===l?i="Home":l===t.length-1&&(i=this.current)),e+=o+"/",[i,e]}))}},u=o(3744);const d=(0,u.Z)(c,[["render",r]]);var p=d},222:function(e,t,o){o.d(t,{Z:function(){return c}});var l=o(6252);const i={class:"page-title-box flex flex-col"};function s(e,t){return(0,l.wg)(),(0,l.iD)("div",i,[(0,l.WI)(e.$slots,"default")])}var n=o(3744);const r={},a=(0,n.Z)(r,[["render",s]]);var c=a}}]);