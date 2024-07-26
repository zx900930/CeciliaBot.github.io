"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[8017],{6120:function(t,e,i){i.d(e,{Z:function(){return p}});var r=i(6252),a=i(9963),s=i(3577);const n=(0,r._)("img",{style:{"max-height":"100px",height:"100%"},src:"https://cdn.glitch.com/6c14ca82-3bcb-4fd6-afa7-815b95e04a14%2Fras-run-slow.gif?v=1632241290215"},null,-1),o={style:{"font-size":"32px",color:"white","text-shadow":"0px 0px 3px grey, 0 0 10px black, 0 0 10px black","line-height":"30px","padding-top":"12px","margin-left":"20px"}};function l(t,e,i,l,c,d){return(0,r.wg)(),(0,r.iD)("div",{class:"noselect loading-part animatefade absolute",onContextmenu:e[0]||(e[0]=(0,a.iM)((()=>{}),["prevent"]))},[n,(0,r._)("div",o,(0,s.zw)(i.text),1)],32)}var c={props:{text:{type:String,default:""}}},d=i(3744);const u=(0,d.Z)(c,[["render",l]]);var p=u},180:function(t,e,i){i.d(e,{Z:function(){return d}});var r=i(6252);const a=(0,r._)("div",null,"Error",-1);function s(t,e,i,s,n,o){const l=(0,r.up)("LoadingComponent");return n.isFetching?(0,r.WI)(t.$slots,"fetching",{key:0},(()=>[(0,r.Wm)(l,{text:i.text},null,8,["text"])])):n.isError?(0,r.WI)(t.$slots,"error",{key:1},(()=>[a])):(0,r.WI)(t.$slots,"default",{key:2})}var n=i(6120),o={emits:["load","error","finally"],components:{LoadingComponent:n.Z},props:{promise:{type:Array,default:()=>[]},text:{type:String,default:"CONNECTING"}},data(){return{isFetching:!1,isError:!1,isDone:!1}},watch:{promise:{immediate:!0,handler(){this.doPromise()}}},methods:{doPromise(){this.isFetching=!0;let t=Array.isArray(this.promise)?this.promise:[this.promise];Promise.all(t).then((t=>{this.$emit("load",...t)})).catch((t=>{this.isError=!0,this.$emit("error",t)})).then((()=>{this.isFetching=!1,this.$emit("finally")}))}}},l=i(3744);const c=(0,l.Z)(o,[["render",s]]);var d=c},3937:function(t,e,i){i.d(e,{Z:function(){return p}});var r=i(6252),a=i(3577);const s=(0,r._)("div",{class:"card-foil"},null,-1),n=(0,r._)("div",{class:"card-glare"},null,-1);function o(t,e,i,o,l,c){return(0,r.wg)(),(0,r.iD)("div",{class:"tilt-3d relative",onMousemove:e[0]||(e[0]=(...t)=>c.tilt&&c.tilt(...t)),onMouseleave:e[1]||(e[1]=(...t)=>c.restore&&c.restore(...t))},[(0,r._)("div",{class:"card-3d relative",style:(0,a.j5)({borderRadius:i.borderRadius})},[(0,r.WI)(t.$slots,"default"),s,n],4)],32)}var l=i(8753),c={props:{borderRadius:{type:String,default:"0px"},forceReduction:{type:Number,default:7}},data(){return{cdn:l.cK}},mounted(){this.restore()},methods:{tilt(t){const e=this.$el,i=this.$el.firstChild,r=(t.offsetY-e.offsetHeight/2)/this.forceReduction,a=-(t.offsetX-e.offsetWidth/2)/this.forceReduction,s=t.offsetX/e.offsetWidth,n=t.offsetY/e.offsetHeight,o=Math.abs(s-.5),l=Math.abs(n-.5),c=Math.sqrt(o*o+l*l),d=100*s,u=100*n;i.style.transform="rotateX("+r+"deg) rotateY("+a+"deg)",i.style.setProperty("--pointer-x",d+"%"),i.style.setProperty("--pointer-y",u+"%"),i.style.setProperty("--background-x",d/8+"%"),i.style.setProperty("--background-y",u+"%"),i.style.setProperty("--card-opacity",.8*c),i.style.setProperty("--pointer-from-center",1.5*c)},restore(){const t=this.$el.firstChild;t.style.transform="rotateX(0) rotateY(0)",t.style.setProperty("--pointer-x","50%"),t.style.setProperty("--pointer-y","50%"),t.style.setProperty("--background-x",0),t.style.setProperty("--background-y",0),t.style.setProperty("--card-opacity",0),t.style.setProperty("--pointer-from-center",0)}}},d=i(3744);const u=(0,d.Z)(c,[["render",o]]);var p=u},3355:function(t,e,i){i.d(e,{Z:function(){return k}});var r=i(6252),a=i(3577);const s={class:"artifact-su-wrapper relative pointer text-black-stroke noselect overflow-hidden hide-scrollbar"},n=["data-src"],o=["data-src"],l=["data-src"],c={style:{position:"absolute",top:"2%",right:"2%",width:"7.5%","font-size":"1px","pointer-events":"none"}},d=["data-src"],u=["data-src"],p={class:"text-center artifact-su-name"},f={key:2,style:{position:"absolute",left:"7%",bottom:"0","font-size":"0.07em","pointer-events":"none"}},m=["data-src"],h={key:3,style:{position:"absolute",right:"7%",bottom:"0","font-size":"0.07em","pointer-events":"none"}},g=["data-src"];function y(t,e,i,y,w,v){const _=(0,r.Q2)("lazyloader");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.wy)((0,r._)("img",{"data-src":v.artifactImgSu,class:"artifact-image-su",alt:""},null,8,n),[[_]]),i.showDecorations?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.wy)((0,r._)("img",{"data-src":w.cdn+"/item_arti/arti_frame_deco_1.png",style:{position:"absolute",left:"0",top:"0",width:"45%","pointer-events":"none"},alt:""},null,8,o),[[_]]),(0,r.wy)((0,r._)("img",{"data-src":v.artifactImgIcon,style:{position:"absolute",left:"0",top:"0",height:"16%","pointer-events":"none"},alt:""},null,8,l),[[_]])],64)):(0,r.kq)("",!0),(0,r._)("div",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.artifact.rarity||1,(t=>(0,r.wy)(((0,r.wg)(),(0,r.iD)("img",{key:"arti-rarity-"+t,alt:"","data-src":w.cdn+"/img/cm_icon_star.png",style:{width:"100%"}},null,8,d)),[[_]]))),128))]),i.showName?((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r.wy)((0,r._)("img",{"data-src":w.cdn+"/item_arti/arti_frame_deco_2.png",style:{position:"absolute",left:"0",bottom:"0",width:"100%","pointer-events":"none"},alt:""},null,8,u),[[_]]),(0,r._)("div",p,(0,a.zw)(i.artifact.name),1)],64)):(0,r.kq)("",!0),i.atk?((0,r.wg)(),(0,r.iD)("div",f,[(0,r.wy)((0,r._)("img",{class:"inline-icon-image","data-src":w.cdn+"/img/cm_icon_stat_att.png",alt:"",style:{"vertical-align":"middle","padding-bottom":"0.15em","font-size":"1.2em"}},null,8,m),[[_]]),(0,r.Uk)(" "+(0,a.zw)(i.atk),1)])):(0,r.kq)("",!0),i.hp?((0,r.wg)(),(0,r.iD)("div",h,[(0,r.wy)((0,r._)("img",{class:"inline-icon-image","data-src":w.cdn+"/img/cm_icon_stat_max_hp.png",alt:"",style:{"vertical-align":"middle","padding-bottom":"0.15em","font-size":"1.2em"}},null,8,g),[[_]]),(0,r.Uk)(" "+(0,a.zw)(i.hp),1)])):(0,r.kq)("",!0)])}var w=i(8753),v={props:{artifact:{type:Object,default:()=>({})},atk:{type:Number,default:0},hp:{type:Number,default:0},showName:{type:Boolean,default:!0},showDecorations:{type:Boolean,default:!1}},data(){return{cdn:w.cK}},computed:{artifactImgIcon(){return this.artifact?this.artifact.id?w.cK+"/item_arti/icon_"+this.artifact.id+".png":w.cK+"/tmp/item_arti/icon_"+(this.artifact._id||this.artifact.name)+".png":""},artifactImgSu(){return this.artifact?this.artifact.id?w.cK+"/item_arti/"+this.artifact.id+"_fu.png":w.cK+"/tmp/item_arti/"+(this.artifact._id||this.artifact.name)+"_fu.png":""}}},_=i(3744);const b=(0,_.Z)(v,[["render",y]]);var k=b},9367:function(t,e,i){i.d(e,{Z:function(){return c}});var r=i(6252);const a={class:"overflow-hidden"};function s(t,e,i,s,n,o){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.WI)(t.$slots,"default")])}var n={props:{targetWidth:{type:Number,default:300}},mounted(){this.calcWidth(),window.addEventListener("resize",this.calcWidth)},beforeUnmount(){window.removeEventListener("resize",this.calcWidth)},watch:{targetWidth(){this.calcWidth()}},methods:{calcWidth(){const t=this.$el;let e=t.getBoundingClientRect();e.width||(e=t.parentNode.getBoundingClientRect());var i=e.width-50,r=this.targetWidth,a=i/r;r=a<.7?i/Math.floor(a):i/Math.ceil(a),t.style.fontSize=Math.floor(r)+"px"}}},o=i(3744);const l=(0,o.Z)(n,[["render",s]]);var c=l},34:function(t,e,i){i.r(e),i.d(e,{default:function(){return k}});var r=i(6252),a=i(9963);const s=(0,r._)("h2",null,"Artifacts",-1),n=["src"],o=["src"];function l(t,e,i,l,c,d){const u=(0,r.up)("PagePath"),p=(0,r.up)("PageTitle"),f=(0,r.up)("FilterBlock"),m=(0,r.up)("ArtifactFullImage"),h=(0,r.up)("MouseParallax"),g=(0,r.up)("router-link"),y=(0,r.up)("FetchComponent"),w=(0,r.up)("ListArtifactImages");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u),s])),_:1}),(0,r.Wm)(f,{modelValue:c.filters,"onUpdate:modelValue":e[0]||(e[0]=t=>c.filters=t),"one-stars":!0,"two-stars":!0,"common-role":!0,class:"pad-5"},null,8,["modelValue"]),(0,r.Wm)(w,{class:"flex flex-wrap justify-center",style:{"min-height":"100vh"}},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{promise:c.fetching,onLoad:d.fetchComplete,onFinally:d.afterFetch},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(d.sortedList,(t=>(0,r.wy)(((0,r.wg)(),(0,r.j4)(g,{key:t,to:"/artifacts/"+t._id,class:"route-restore pointer",style:{"vertical-align":"top"}},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{class:"pad-5","border-radius":"0.08em"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{artifact:t},null,8,["artifact"]),t.$isNew?((0,r.wg)(),(0,r.iD)("img",{key:0,style:{position:"absolute",top:"0",left:"0",width:"25%"},src:d.newIcon},null,8,n)):t.$isUpdated?((0,r.wg)(),(0,r.iD)("img",{key:1,style:{position:"absolute",top:"0",left:"0",width:"25%"},src:d.updatedIcon},null,8,o)):(0,r.kq)("",!0)])),_:2},1024)])),_:2},1032,["to"])),[[a.F8,d.filtredList[t._id]]]))),128))])),_:1},8,["promise","onLoad","onFinally"])])),_:1})])}var c=i(8753),d=i(6004),u=i(222),p=i(9218),f=i(9367),m=i(3937),h=i(3355),g=i(180),y=null,w=0,v={name:"ArtifactsIndex",components:{PagePath:d.Z,PageTitle:u.Z,FilterBlock:p.Z,ListArtifactImages:f.Z,MouseParallax:m.Z,ArtifactFullImage:h.Z,FetchComponent:g.Z},inject:["mainContainerWrapper"],data(){return{fetching:null,filters:{name:"",rarity:[],role:[],tags:[],debuff:[],buff:[],common:[]},list:[]}},created(){this.fetching=this.$gameData.artifact.list(),y&&(this.filters=JSON.parse(y))},beforeUnmount(){y=JSON.stringify(this.filters),this.mainContainerWrapper&&(w=this.mainContainerWrapper().scrollTop)},computed:{newIcon(){return c.cK+"/img/gacha_new.png"},updatedIcon(){return c.cK+"/ui/cm_update_icon.png"},sortedList(){const t=t=>["warrior","knight","assassin","ranger","mage","manauser"].indexOf(t),e=Array.isArray(this.list)?this.list.slice():Object.values(this.list);return e.sort(((t,e)=>t.name<e.name?-1:0)).sort(((e,i)=>e.$isNew!==i.$isNew?e.$isNew?-1:1:e.$isUpdated!==i.$isUpdated?e.$isUpdated?-1:1:e.rarity!==i.rarity?e.rarity>i.rarity?-1:1:t(e.role)<t(i.role)?-1:1))},filtredList(){var t={},e=/[^a-z0-9]/g,i=/[^a-z0-9,]/g,r=this.filters,a=r.name.toLowerCase().replace(e,"");for(var s in this.list){var n=this.list[s];t[n._id]=(-1!==n.name.toLowerCase().replace(e,"").indexOf(a)||n.hero&&-1!==n.hero.toLowerCase().replace(e,"").indexOf(a)||n.nicknames&&-1!==n.nicknames.join(",").toLowerCase().replace(i,"").indexOf(a))&&["role","rarity"].every((t=>!r[t].length||r[t].includes(n[t])))&&(!r.tags||r.tags.every((t=>n.tags.includes(t))))&&["common","buff","debuff"].every((t=>!r[t].length||r[t].every((e=>n[t]&&n[t].includes(e)))))}return t}},methods:{fetchComplete(t){const e=Date.now()-11664e5;this.list=t.map((t=>(e<t.created_dt?t.$isNew=!0:e<t.updated_dt&&(t.$isUpdated=!0),t)))},afterFetch(){this.$nextTick((()=>{this.mainContainerWrapper().scrollTo(0,w)}))}}},_=i(3744);const b=(0,_.Z)(v,[["render",l]]);var k=b}}]);