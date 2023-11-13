"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[4892],{6120:function(t,e,r){r.d(e,{Z:function(){return h}});var i=r(6252),a=r(9963),n=r(3577);const o=(0,i._)("img",{style:{"max-height":"100px",height:"100%"},src:"https://cdn.glitch.com/6c14ca82-3bcb-4fd6-afa7-815b95e04a14%2Fras-run-slow.gif?v=1632241290215"},null,-1),s={style:{"font-size":"32px",color:"white","text-shadow":"0px 0px 3px grey, 0 0 10px black, 0 0 10px black","line-height":"30px","padding-top":"12px","margin-left":"20px"}};function l(t,e,r,l,c,u){return(0,i.wg)(),(0,i.iD)("div",{class:"noselect loading-part animatefade absolute",onContextmenu:e[0]||(e[0]=(0,a.iM)((()=>{}),["prevent"]))},[o,(0,i._)("div",s,(0,n.zw)(r.text),1)],32)}var c={props:{text:{type:String,default:""}}},u=r(3744);const d=(0,u.Z)(c,[["render",l]]);var h=d},6412:function(t,e,r){r.d(e,{Z:function(){return v}});var i=r(6252),a=r(3577);const n={style:{display:"inline-block",width:"361px",position:"relative"},class:"panel-wrapper noselect"},o={style:{position:"absolute",top:"0",left:"0"},class:"panel full-h full-w"},s=["data-src"],l=["data-src"],c=["data-src"],u=["src"],d={class:"text-black-stroke",style:{position:"absolute",color:"white",left:"23%",top:"20%"}};function h(t,e,r,h,f,g){const p=(0,i.Q2)("lazyloader");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",o,[(0,i.wy)((0,i._)("img",{"data-src":g.img,class:"hero-img"},null,8,s),[[p]]),(0,i.wy)((0,i._)("img",{style:{position:"absolute",left:"13%",top:"20%",height:"23%"},"data-src":g.roleIcon},null,8,l),[[p]]),(0,i.wy)((0,i._)("img",{style:{position:"absolute",left:"10%",bottom:"25%",height:"25%"},"data-src":g.attributeIcon},null,8,c),[[p]]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(g.heroData.rarity,(t=>((0,i.wg)(),(0,i.iD)("img",{style:(0,a.j5)(["position: absolute; bottom: 25%; height: 25%",{left:15+5*t+"%"}]),key:t,src:g.starIcon},null,12,u)))),128)),(0,i._)("div",d,(0,a.zw)(g.heroData.name),1)])])}var f=r(8753),g={props:{data:{type:Object,required:!1}},computed:{heroData(){return this.data||{}},img(){return f.cK+"/face/"+this.heroData.id+"_l.png"},starIcon(){return f.cK+"/img/cm_icon_star.png"},roleIcon(){return this.$store.getters.getRoleIcon(this.heroData.role)},attributeIcon(){return this.$store.getters.getAttributeIcon(this.heroData.attribute)}}},p=r(3744);const m=(0,p.Z)(g,[["render",h]]);var v=m},2116:function(t,e,r){r.d(e,{Z:function(){return c}});var i=r(6252);const a={class:"page-title-box flex flex-col justify-center"};function n(t,e){return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.WI)(t.$slots,"default")])}var o=r(3744);const s={},l=(0,o.Z)(s,[["render",n]]);var c=l},1871:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var i=r(6252),a=r(3577);const n=(0,i._)("h2",null,"Heroes",-1),o={class:"flex flex-wrap justify-center",style:{"min-height":"100vh","place-content":"flex-start"}};function s(t,e,r,s,l,c){const u=(0,i.up)("PageTitle"),d=(0,i.up)("FilterBlock"),h=(0,i.up)("LoadingComponent"),f=(0,i.up)("HeroPanel"),g=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[n])),_:1}),(0,i.Wm)(d,{modelValue:l.filters,"onUpdate:modelValue":e[0]||(e[0]=t=>l.filters=t),class:"pad-5"},null,8,["modelValue"]),(0,i._)("div",o,[l.isFetching?((0,i.wg)(),(0,i.j4)(h,{key:0,text:"CONNECTING..."})):(0,i.kq)("",!0),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.sortedList,(t=>((0,i.wg)(),(0,i.j4)(g,{key:t._id,to:"/hero/"+t._id,class:"route-restore pointer col-2 col-lg-4 col-xl-5 col-xxl-6",style:(0,a.j5)({display:c.filtredList[t._id]?"inline-block":"none"})},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{hero:t._id,data:t,style:{width:"100%"}},null,8,["hero","data"])])),_:2},1032,["to","style"])))),128))])])}var l=r(8753),c=r(2784),u=r(6120),d=r(2116),h=r(987),f=r(6412),g={name:"HeroesIndex",components:{LoadingComponent:u.Z,PageTitle:d.Z,HeroPanel:f.Z,FilterBlock:h.Z},inject:["setMeta"],data(){return{cdn:l.cK,isFetching:!0,fetchError:!1,filters:{name:"",role:[],attribute:[],rarity:[],zodiac:[],tags:[],buff:[],debuff:[],common:[],devotion:[],self_devotion:[]},list:{}}},mounted(){this.setMeta({title:"Heroes | CeciliaBot",description:"Character list"})},watch:{},methods:{},computed:{sortedList(){var t=t=>["fire","ice","wind","light","dark"].indexOf(t),e=t=>["warrior","knight","assassin","ranger","mage","manauser"].indexOf(t);const r=Array.isArray(this.list)?this.list.slice():Object.values(this.list);return r.sort(((t,e)=>t.name<e.name?-1:0)).sort(((r,i)=>r.rarity!==i.rarity?r.rarity>i.rarity?-1:1:t(r.attribute)!==t(i.attribute)?t(r.attribute)<t(i.attribute)?-1:1:e(r.role)<e(i.role)?-1:1))},filtredList(){var t={},e=this.filters,r=/[^a-z0-9]/g,i=/[^a-z0-9,]/g,a=e.name.toLowerCase().replace(r,"");for(var n in this.list){var o=this.list[n];t[o._id]=(-1!==o.name.toLowerCase().replace(r,"").indexOf(a)||o.nicknames&&-1!==o.nicknames.join(",").toLowerCase().replace(i,"").indexOf(a))&&["role","attribute","rarity","zodiac"].every((t=>!e[t].length||e[t].includes(o[t])))&&(!e.tags.length||e.tags.every((t=>o.tags.includes(t))))&&["common","buff","debuff"].every((t=>!e[t].length||e[t].every((e=>o[t]&&o[t].includes(e)))))&&["devotion","self_devotion"].every((t=>!e[t].length||e[t].includes(o[t].type)))}return t}},created(){this.isFetching=!0,(0,c.Z)(l.hi+"/getList?list=hero&fields=id,_id,name,rarity,role,attribute,zodiac,devotion,self_devotion,tags,buff,debuff,common,nicknames").then((t=>{this.list=JSON.parse(t)})).catch((t=>{console.error(t),this.fetchError=!0})).then((()=>{this.isFetching=!1}))}},p=r(3744);const m=(0,p.Z)(g,[["render",s]]);var v=m}}]);