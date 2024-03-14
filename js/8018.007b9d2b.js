"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[8018],{1545:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(6252);const l={class:"nsearchbar",style:{display:"flex",margin:"0",flx:"1 1 auto",overflow:"hidden",position:"relative"}},o=["value"],s=(0,r._)("i",{class:"fa fa-search"},null,-1),i=[s];function n(e,t,a,s,n,u){const c=(0,r.Q2)("ripple-effect");return(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("input",(0,r.dG)({ref:"tierlist-maker-search-bar",onInput:t[0]||(t[0]=(...e)=>u.delayUpdate&&u.delayUpdate(...e)),value:a.modelValue},e.$attrs,{style:{"background-color":"#575656ad"},placeholder:"Search...",autocomplete:"off"}),null,16,o),(0,r._)("div",{class:"go",onClick:t[1]||(t[1]=e=>{e.currentTarget.previousSibling.value="",e.currentTarget.previousSibling.focus()})},i)])),[[c]])}var u={emits:["update:modelValue"],props:{modelValue:{type:String,defualt:""},delay:{type:Number,default:0}},methods:{delayUpdate(e){this.updateValue(e.target.value)},updateValue(e){this.$emit("update:modelValue",e)}}},c=a(3744);const d=(0,c.Z)(u,[["render",n]]);var f=d},6004:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(6252),l=a(3577);const o={class:"page-path-title"},s=(0,r._)("span",null," / ",-1);function i(e,t,a,i,n,u){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",o,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.path,(e=>((0,r.wg)(),(0,r.iD)("span",{key:e[1]},[(0,r.Wm)(c,{to:e[1],class:"router-restore"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e[0]),1)])),_:2},1032,["to"]),s])))),128)),(0,r.WI)(e.$slots,"default")])}const n={database:"Database",hero:"Heroes",artifacts:"Artifacts","hero-stats-table":"Hero Stats Table",guides:"Guides","voice-actors":"Voice Actors",buffs:"Buffs",common:"Common",debuffs:"Debuffs","official-info":"Official Links"};var u={props:{location:{type:String,default:""}},data(){return{path:[]}},created(){var e="",t=window.location.href.toLowerCase().split("#")[1].replace(/\?.*/,"").split("/").filter(((e,t)=>""!==e||0===t));t.splice(-1,1),this.path=t.map(((a,r)=>{var l=n[a];return l||(0===r?l="Home":r===t.length-1&&(l=this.current)),e+=a+"/",[l,e]}))}},c=a(3744);const d=(0,c.Z)(u,[["render",i]]);var f=d},222:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(6252);const l={class:"page-title-box flex flex-col"};function o(e,t){return(0,r.wg)(),(0,r.iD)("div",l,[(0,r.WI)(e.$slots,"default")])}var s=a(3744);const i={},n=(0,s.Z)(i,[["render",o]]);var u=n},2577:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(6252),l=a(3577);const o={class:"card-with-image relative overflow-hidden mat-hover"},s={class:"name-wrapper"};function i(e,t,a,i,n,u){const c=(0,r.Q2)("ripple-effect");return(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",{class:"image-wrapper",style:(0,l.j5)({height:a.iconHeight})},[(0,r.WI)(e.$slots,"icon")],4),(0,r._)("div",s,[(0,r.WI)(e.$slots,"default")])])),[[c]])}var n={props:{iconHeight:{type:String,default:"150px"}}},u=a(3744);const c=(0,u.Z)(n,[["render",i]]);var d=c},8018:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var r=a(6252),l=a(3577),o=a(9963);const s=(0,r._)("h2",null,"Voice Actors",-1),i={class:"pad-5"},n={class:"flex flex-wrap"},u=["alt","data-src"];function c(e,t,a,c,d,f){const p=(0,r.up)("PagePath"),h=(0,r.up)("PageTitle"),v=(0,r.up)("SearchBar"),m=(0,r.up)("CardWithImage"),g=(0,r.up)("router-link"),w=(0,r.Q2)("lazyloader");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(h,{class:"pad-5"},{default:(0,r.w5)((()=>[(0,r.Wm)(p),s])),_:1}),(0,r._)("div",i,[(0,r.Wm)(v,{modelValue:d.query,"onUpdate:modelValue":t[0]||(t[0]=e=>d.query=e),placeholder:"Search"},null,8,["modelValue"])]),(0,r._)("div",n,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(d.list,(e=>(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",{key:e._id,class:"text-center col-2 col-lg-4 col-xl-6"},[(0,r.Wm)(g,{to:e._id},{default:(0,r.w5)((()=>[(0,r.Wm)(m,null,{icon:(0,r.w5)((()=>[(0,r.wy)((0,r._)("img",{src:"https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg",alt:e.name,"data-src":e.image},null,8,u),[[w]])])),default:(0,r.w5)((()=>[(0,r._)("span",null,(0,l.zw)(e.name),1)])),_:2},1024)])),_:2},1032,["to"])])),[[o.F8,f.filtredMask[e._id]]]))),128))])],64)}var d=a(6004),f=a(222),p=a(1545),h=a(2577),v={components:{PagePath:d.Z,PageTitle:f.Z,SearchBar:p.Z,CardWithImage:h.Z},data(){return{list:[],query:"",language:""}},created(){this.$gameData.voiceActors.list().then((e=>{this.list=e}))},computed:{filtredMask(){var e={},t=this.query.toLowerCase();return this.list.forEach((a=>{-1!==a.name.toLowerCase().indexOf(t)?e[a._id]=!0:e[a._id]=!1})),e}}},m=a(3744);const g=(0,m.Z)(v,[["render",c]]);var w=g}}]);