"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[6674],{2393:function(){},5552:function(t,e){e.Z={emits:["update:modelValue"],inheritAttrs:!1,props:{modelValue:{},value:{},trueValue:{},falseValue:{},checked:Boolean,required:Boolean,color:String},data(){return{bindingAttrs:{}}},computed:{onValue(){return this.normalizeValue(this.value)||this.trueValue},checker(){return null!==this.modelValue&&(Array.isArray(this.modelValue)?this.modelValue.includes(this.value||this.trueValue):this.modelValue===(this.value||this.trueValue||!0))},model:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}},created(){var t={listeners:{},attrs:{}};for(var e in this.$attrs)/^on/.test(e)?t.listeners[e]=this.$attrs[e]:t.attrs[e]=this.$attrs[e];this.bindingAttrs=t},methods:{focus(){this.$el.querySelector("input").focus()},error(){this.$el.classList.add("error")},normalizeValue(t){return"on"!==t&&t},checkIfFilled(t){this.required&&(t.target.value?t.target.parentNode.classList.remove("error"):t.target.parentNode.classList.add("error"))}}}},3017:function(t,e,a){a.d(e,{s:function(){return s}});var r=a(6252),i=a(9963);const l=["checked","value","true-value","false-value"];function s(t,e,a,s,n,o){return(0,r.wg)(),(0,r.iD)("label",(0,r.dG)({class:"pure-material-checkbox"},n.bindingAttrs.attrs),[(0,r.wy)((0,r._)("input",(0,r.dG)({type:"checkbox",checked:o.checker,"onUpdate:modelValue":e[0]||(e[0]=t=>o.model=t),value:a.value||a.trueValue||!0,"true-value":a.value||a.trueValue||!0,"false-value":a.falseValue},n.bindingAttrs.listeners),null,16,l),[[i.e8,o.model]]),(0,r._)("span",null,[(0,r.WI)(t.$slots,"default")])],16)}},7263:function(t,e,a){a.d(e,{_:function(){return r}});const r=["#fb8383","#fb9d9d","#ffc3a2","#ffd393","#feffa8","#d4f9aa","#d4fb94","#a4fb93","#96f9be","#88fbdf","#a8edfd","#7ccff3","#7294f7","#9e85f7","#996ccf","#e288e5","#f39bb4","#f9b4c8","#fdedf2","#c7c7c7","#ffffff"]},2074:function(t,e,a){a.d(e,{Z:function(){return o}});var r=a(6252),i=a(8439),l=a(2229),s={name:"artifact-icon",emits:["click","context"],props:{inview:{type:Boolean,required:!1,default:!0},type:{type:Number,default:0},artifact:{type:String},showrole:{type:Boolean,required:!1,default:!0},showname:{type:Boolean,default:!1},showrarity:{type:Boolean,default:!1},size:{type:Number,default:75},lazyload:{type:Boolean,default:!0}},computed:{artifactData:function(){return this.$store.getters.getArtifact(this.artifact)},image:function(){return 1===this.type?this.$store.getters.getArtifactImage(this.artifactData._id):this.$store.getters.getArtifactIcon(this.artifactData._id)},placeholder:function(){return 0===this.type?"":i.cK+"item_arti/icon_art0000.png"},computedStyle(){return{width:"1em","vertical-align":"top",opacity:this.lazyload?0:1,transition:"opacity .4s ease"}}},render:function(){if(this.artifact)return(0,r.h)("div",{class:"hero-icon-comp noselect",style:{"font-size":this.size+"px"},onClick:t=>-1!=t.target.className.indexOf("remove")?this.$emit("remove",this.artifact,t):this.$emit("click",this.artifact,t),onContextmenu:t=>{t.preventDefault(),this.$emit("context",this.artifact,t)}},[(0,r.h)("div",{style:{position:"relative",width:"1em",height:0===this.type?"1em":"auto","text-align":"start","pointer-events":"none"}},[this.lazyload?(0,r.h)("img",{style:"height: 1em; vertical-align: top; position: absolute; transition: opacity .4s ease;",src:this.placeholder,"data-lazy-fader":!0,crossorigin:"anonymous",SameSite:"Lax"}):null,(0,r.wy)((0,r.h)("img",{key:this.image,[this.lazyload?"data-src":"src"]:this.image,crossorigin:"anonymous",SameSite:"Lax",style:this.computedStyle}),[[l.ZP]]),this.showrole?(0,r.h)("div",{class:"attribute-role",style:{"background-image":"url("+this.$store.getters.getRoleIcon(this.artifactData.role)+")"}}):null,this.showrarity?(0,r.h)("div",{class:"wrapper-hero-info rarity-"+this.artifactData.rarity,style:"top: 0; left: 0"}):null]),this["showname"]?(0,r.h)("div",{"pointer-events":"none",style:{width:this.size+(this.removable?.35*this.size:0)+"px"}},[(0,r.h)("p",{class:"label"},this.$store.getters.getArtifactName(this.artifactData._id))]):null])}};const n=s;var o=n},4618:function(t,e,a){var r=a(3017),i=a(1157),l=(a(7665),a(3744));const s=(0,l.Z)(i.Z,[["render",r.s]]);e.Z=s},1718:function(t,e,a){a.d(e,{Z:function(){return m}});var r=a(6252),i=a(3577);const l={class:"e7-button items-center overflow-hidden pointer relative"},s={key:0,class:"currency-icon noselect",style:{width:"0.5em","pointer-events":"none"}},n=["src"],o={key:1,class:"currency noselect relative pointer",style:{"pointer-events":"none"}},c={class:"e7button-text noselect flex-fill"},u=(0,r._)("span",{class:"light"},null,-1);function d(t,e,a,d,h,f){return(0,r.wg)(),(0,r.iD)("button",l,[a.icon||f.slots.icon?((0,r.wg)(),(0,r.iD)("div",s,[(0,r.WI)(t.$slots,"icon",{},(()=>[(0,r._)("img",{src:a.icon,alt:"icon"},null,8,n)]))])):(0,r.kq)("",!0),a.currency?((0,r.wg)(),(0,r.iD)("div",o,(0,i.zw)(a.currency||"0"),1)):(0,r.kq)("",!0),(0,r._)("div",c,[(0,r.WI)(t.$slots,"default")]),u])}var h={name:"E7Button",props:{currency:{default:""},icon:{type:String,default:""}},computed:{slots(){return(0,r.Rr)()}}},f=a(3744);const p=(0,f.Z)(h,[["render",d]]);var m=p},6415:function(t,e,a){a.d(e,{Z:function(){return h}});var r=a(6252),i=a(3577);const l={style:{"border-bottom":"2px solid #614828"}},s=["onClick"],n={class:"noselect"};function o(t,e,a,o,c,u){return(0,r.wg)(),(0,r.iD)("div",l,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.tabs,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id,class:(0,i.C_)(["tab",{active:a.tab===t.id,disabled:t.disabled}]),onClick:e=>u.click(t)},[(0,r._)("span",n,(0,i.zw)(t.name||t.title||t),1)],10,s)))),128))])}var c={name:"E7Tabs",emits:["change"],props:{tabs:{type:Array,default:function(){return[]}},tab:{default:""}},methods:{click(t){t.disabled||this.$emit("change",t)}}},u=a(3744);const d=(0,u.Z)(c,[["render",o]]);var h=d},6674:function(t,e,a){a.r(e),a.d(e,{default:function(){return $}});var r=a(6252),i=a(3577),l=a(9963);const s=t=>((0,r.dD)("data-v-5d857b6c"),t=t(),(0,r.Cn)(),t),n={class:"text-center",style:{width:"100%"}},o=s((()=>(0,r._)("thead",null,[(0,r._)("th",null,"Year"),(0,r._)("th",null,"New Heroes"),(0,r._)("th",null,"Rerun Heroes"),(0,r._)("th",null,"New Limited"),(0,r._)("th",null,"Rerun Limited")],-1))),c={key:0,ref:"timerline-stats-heroes-by-appearance",id:"html2canvas-timerline-stats-heroes-by-appearance"},u={style:{margin:"auto",width:"100%","max-width":"1080px"},"data-html2canvas-ignore":"true"},d={style:{float:"right"}},h={key:0},f={key:1};function p(t,e,a,s,p,m){const g=(0,r.up)("E7Tabs"),y=(0,r.up)("E7Checkbox"),b=(0,r.up)("E7Button"),v=(0,r.up)("HeroIcon"),w=(0,r.up)("ArtifactIcon"),k=(0,r.Q2)("tooltip");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(g,{tabs:m.selectableTabs,tab:p.tab,onChange:e[0]||(e[0]=t=>p.tab=t.id)},null,8,["tabs","tab"]),(0,r.wy)((0,r._)("table",n,[o,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.data.byYear,((t,e)=>((0,r.wg)(),(0,r.iD)("tr",{key:e},[(0,r._)("td",null,(0,i.zw)(e),1),(0,r._)("td",null,(0,i.zw)(t.newHeroes),1),(0,r._)("td",null,(0,i.zw)(t.rerunHeroes),1),(0,r._)("td",null,(0,i.zw)(t.newLimited),1),(0,r._)("td",null,(0,i.zw)(t.rerunLimited),1)])))),128))])],512),[[l.F8,"generic"===p.tab]]),"generic"!==p.tab?((0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",u,[(0,r._)("span",d,[(0,r.Wm)(y,{modelValue:p.hide4Stars,"onUpdate:modelValue":e[1]||(e[1]=t=>p.hide4Stars=t)},{default:(0,r.w5)((()=>[(0,r.Uk)(" Hide 4★ Rarity ")])),_:1},8,["modelValue"]),(0,r.Wm)(b,{onClick:m.exportAsImage},{default:(0,r.w5)((()=>[(0,r.Uk)(" Export as Image ")])),_:1},8,["onClick"])])]),"heroes"===p.tab?((0,r.wg)(),(0,r.iD)("table",h,[(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.heroesFiltred,((t,e)=>((0,r.wg)(),(0,r.iD)("tr",{key:t[0]},[(0,r._)("td",{class:"text-center wrap-pre",style:(0,i.j5)({backgroundColor:p.labelColors[e%p.labelColors.length],color:"black"})},(0,i.zw)(t[0]),5),(0,r._)("td",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t[1],(t=>(0,r.wy)(((0,r.wg)(),(0,r.j4)(v,{key:t,hero:t,hover:!1,size:55},null,8,["hero"])),[[k,()=>m.tooltipHero(t)]]))),128))])])))),128))])])):(0,r.kq)("",!0),"artifacts"===p.tab?((0,r.wg)(),(0,r.iD)("table",f,[(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.artifactsFiltred,((t,e)=>((0,r.wg)(),(0,r.iD)("tr",{key:t[0]},[(0,r._)("td",{class:"text-center wrap-pre",style:(0,i.j5)({backgroundColor:p.labelColors[e%p.labelColors.length],color:"black"})},(0,i.zw)(t[0]),5),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t[1],(t=>(0,r.wy)(((0,r.wg)(),(0,r.j4)(w,{key:t,artifact:t,hover:!1,size:55},null,8,["artifact"])),[[k,()=>m.tooltipArtifact(t)]]))),128))])))),128))])])):(0,r.kq)("",!0)],512)):(0,r.kq)("",!0)])}a(560);var m=a(9117),g=a(2074),y=a(6415),b=a(4618),v=a(1718),w=a(7263),k=a(2229),_={components:{HeroIcon:m.Z,ArtifactIcon:g.Z,E7Tabs:y.Z,E7Checkbox:b.Z,E7Button:v.Z},props:{data:{type:Object,default:()=>{}},timelineData:{}},data(){return{labelColors:w._,tab:"generic",hide4Stars:!0}},computed:{selectableTabs(){var t=[{name:"Generic Stats",id:"generic"}];return this.data.byLastAppearance.length&&t.push({name:"Heroes by appearance",id:"heroes"}),this.data.byArtifactLastAppearance.length&&t.push({name:"Artifacts by appearance",id:"artifacts"}),t},heroesFiltred(){return this.filterArray(this.data.byLastAppearance,this.$store.getters.getHero)},artifactsFiltred(){return this.filterArray(this.data.byArtifactLastAppearance,this.$store.getters.getArtifact)}},methods:{tooltipHero(t){return this.$store.getters.getHeroName(t)},tooltipArtifact(t){return this.$store.getters.getArtifactName(t)},filterArray(t,e){var a=t.slice(),r=a[a.length-1];if(1==this.hide4Stars&&(a=a.map((t=>{var a=t[1].filter((t=>e(t).rarity>4));return!!a.length&&[t[0],a]})).filter((t=>t))),r&&"Upcoming"===r[0]){const t=a.splice(a.length-1,1)[0];a.unshift(t)}return a},exportAsImage(){this.$store.commit("loading",!0),a.e(5734).then(a.t.bind(a,1341,23)).then((async t=>{await(0,k.rF)(this.$refs["timerline-stats-heroes-by-appearance"]);var e={allowTaint:!1,useCORS:!0,imageTimeout:0,backgroundColor:"#252B35",logging:!1,x:0,y:0,scrollX:0,scrollY:0,scale:1.5,width:900,onclone:async t=>{t.getElementById("html2canvas-timerline-stats-heroes-by-appearance").style.width="900px"}};t.default(this.$refs["timerline-stats-heroes-by-appearance"],e).then((t=>{try{this.$gallery([{src:t.toDataURL(),name:"Timerline",description:"Click the download button or right click to save the image!"}])}catch(e){console.error(e)}})).finally((()=>{this.$store.commit("loading",!1)}))})).catch((()=>{this.$snackbar.error({title:"Error: couldn't load export module."}),this.$store.commit("loading",!1)}))}}},A=a(3744);const D=(0,A.Z)(_,[["render",p],["__scopeId","data-v-5d857b6c"]]);var $=D},7665:function(t,e,a){a(2393)},1157:function(t,e,a){a.d(e,{Z:function(){return r.Z}});var r=a(5552)}}]);