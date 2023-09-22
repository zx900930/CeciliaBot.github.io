(function(){"use strict";var e={3127:function(e,t,n){var i=n(9963),o=n(6252),a=n(3577);const s={class:"container",style:{"font-family":"'Titillium Web', 'Roboto', sans-serif"}},l={class:"flex full-h full-w"},r={class:"flex-fill overflow-auto relative",style:{}},c=(0,o._)("img",{style:{height:"100px"},src:"https://cdn.glitch.com/6c14ca82-3bcb-4fd6-afa7-815b95e04a14%2Fras-run-slow.gif?v=1632241290215"},null,-1),u=(0,o._)("div",{class:"invisible-background"},null,-1),d={class:"mobile-headbar glass-container"},f=(0,o._)("i",{class:"fa fa-bars"},null,-1),p=[f],m=(0,o._)("span",null," CeciliaBot ",-1),h={class:"full-h full-w main-content"};function g(e,t,n,f,g,v){const b=(0,o.up)("SideMenu"),w=(0,o.up)("router-view"),y=(0,o.Q2)("ripple-effect");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",l,[(0,o.Wm)(b,{ref:"side-menu","current-path":v.currentPage},null,8,["current-path"]),(0,o._)("div",r,[(0,o.wy)((0,o._)("div",{id:"loading",class:"noselect loading-container animatefade absolute full-h full-w",onContextmenu:t[0]||(t[0]=(0,i.iM)((()=>{}),["prevent"]))},[c,(0,o.Wm)(i.uT,{name:"slide-fade",mode:"out-in"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.iD)("div",{key:v.loadingText,style:{"font-size":"32px",color:"white","text-shadow":"0px 0px 3px grey, 0 0 10px black, 0 0 10px black","line-height":"30px","padding-top":"12px","margin-left":"20px"}},(0,a.zw)(v.loadingText),1))])),_:1})],544),[[i.F8,v.loading]]),u,(0,o._)("div",d,[(0,o.wy)(((0,o.wg)(),(0,o.iD)("button",{class:"material-button basic basic",style:{height:"45px",width:"45px"},onClick:t[1]||(t[1]=(...e)=>v.openSideMenu&&v.openSideMenu(...e))},p)),[[y]]),m]),(0,o._)("div",h,[(0,o.Wm)(w)])])])])}var v=n(8753);function b(e={}){document.title=e.title||"CeciliaBot",document.description=e.description||"Epic Seven.";var t=document.querySelector("link[rel~='icon']");t||(t=document.createElement("link"),t.rel="icon",document.head.appendChild(t)),t.href=e.icon||"../favicons/android-chrome-256x256.png"}const w={class:"pad-5",style:{"font-size":"30px",color:"white","background-repeat":"no-repeat",background:"linear-gradient(180deg,transparent,var(--background-color-secondary) 95%), url(https://i.imgur.com/rXTSQf1.png)","background-size":"400px"}},y=(0,o._)("i",{class:"fa fa-times",style:{"font-size":"0.9em"}},null,-1),k=[y],_=(0,o._)("div",{class:"no-flex-shrink side-icon pad-5 text-center menu-option-icon"},[(0,o._)("img",{src:"/favicons/android-chrome-192x192.png",style:{height:"1.5em","vertical-align":"middle"}})],-1),x={class:"hide-collapsed flex-fill pad-5 text-ellipsis side-text text-black-stroke"},j=(0,o._)("div",{class:"separator margin-5 round-s"},null,-1),C={class:"flex-fill hide-scrollbar overflow-auto pad-5"},P={class:"flex flex-col flex-fill"},O=["innerHTML"],T={class:"hide-collapsed no-flex-shrink flex-fill pad-5 text-ellipsis side-text"},M=(0,o._)("div",{class:"hide-collapsed no-flex-shrink pad-5 side-text"},null,-1),S=(0,o._)("div",{class:"separator margin-5 round-s hide-mobile-side"},null,-1),E={class:"pad-5 hide-mobile-side"},$={class:"no-flex-shrink side-icon pad-5 text-center menu-option-icon"},Z=(0,o._)("polyline",{fill:"none",id:"Down",points:"17.9 5 10.9 12 17.9 19",stroke:"inherit","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},null,-1),z=(0,o._)("line",{fill:"none",stroke:"inherit","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",x1:"6.1",x2:"6.1",y1:"5",y2:"19"},null,-1),A=[Z,z],F=(0,o._)("div",{class:"hide-collapsed no-flex-shrink flex-fill pad-5 text-ellipsis side-text"}," Collapse menu ",-1),N=(0,o._)("div",{class:"mobile-menu-background"},null,-1);function B(e,t,n,i,s,l){const r=(0,o.up)("router-link"),c=(0,o.Q2)("tooltip");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",{ref:"main-menu",class:(0,a.C_)(["main-side-menu flex flex-col justify-center noselect overflow-hidden",{collapsed:e.isClosed}]),tabindex:"-1"},[(0,o._)("div",w,[(0,o._)("div",{class:"close-side-menu-button text-center pointer",onClick:t[0]||(t[0]=(...e)=>l.loseFocus&&l.loseFocus(...e))},k),(0,o.Wm)(r,{to:"/",class:"home-button flex normalize-link relative items-center justify-between font-bold",onClick:l.loseFocus},{default:(0,o.w5)((()=>[_,(0,o._)("div",x,(0,a.zw)(e.$t("strings.app_title")),1)])),_:1},8,["onClick"])]),j,(0,o._)("div",C,[(0,o._)("div",P,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.options,(e=>(0,o.wy)(((0,o.wg)(),(0,o.j4)(r,{key:e,to:e.link,onClick:l.handleOption,class:(0,a.C_)(["side-option flex normalize-link relative items-center justify-between margin-5 round-s pointer",{disabled:e.disabled,"active-path":l.activeMainPath==e}])},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"no-flex-shrink side-icon pad-5 text-center no-events menu-option-icon",innerHTML:e.icon},null,8,O),(0,o._)("div",T,(0,a.zw)(e.name()),1),M])),_:2},1032,["to","onClick","class"])),[[c,()=>l.optionTooltip(e),"right"]]))),128))])]),S,(0,o._)("div",E,[(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",{class:"side-option flex relative items-center justify-between margin-5 round-s pointer",onClick:t[1]||(t[1]=(...e)=>l.collapseMenu&&l.collapseMenu(...e))},[(0,o._)("div",$,[((0,o.wg)(),(0,o.iD)("svg",{style:(0,a.j5)(["vertical-align: text-top; transition: transform .2s ease;",{transform:e.isClosed?"scale(-1)":""}]),width:"1.3em",height:"1.3em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},A,4))]),F])),[[c,()=>l.optionTooltip({name:"Expand menu"}),"right"]])])],2),N],64)}var D=n(6468),L={props:{currentPath:{type:String,default:""},pwa:{default:!0}},watch:{"$store.getters.getInstallPwaState":{immediate:!0,handler(e){e?"/progressive-web-app/"!=this.options[1].link&&this.options.splice(1,0,{class:"fas fa-rocket",name:()=>"Install Web App",link:"/progressive-web-app/"}):"/progressive-web-app/"==this.options[1].link&&this.options.splice(1,1)}}},computed:{activeMainPath(){for(var e="/"+this.currentPath,t=0;t<this.options.length;t++){let n=this.options[t];if(-1!=n.link.indexOf(e))return this.handleAutoCollapse(n),n}return this.handleAutoCollapse(this.options[0]),this.options[0]}},data:function(){return{campImage:D,isClosed:!1,wasManuallyCollapsed:!1,options:[{icon:'<i class="fas fa-home"></i>',name:()=>"Home",link:"/"},{icon:'<i class="fas fa-info-circle"></i>',name:()=>this.$t("strings.app_official_game_info"),link:"/official-info/"},{icon:'<i class="fa fa-history"></i>',name:()=>this.$t("strings.app_timeline"),link:"/timeline/",shrink:!0},{icon:'<i class="fa fa-history"></i>',name:()=>this.$t("strings.app_ultimate_timeline"),link:"/ultimate-timeline/",shrink:!0},{icon:'<svg viewBox="0 0 200 240" style="display: inline-block; vertical-align: top; height: 28px;"><use href="'+n(6468)+'#root" /></svg>',name:()=>this.$t("strings.app_camp_simulator"),link:"/camping-simulator/",shrink:!0},{icon:'<i class="fa fa-star-and-crescent"></i>',name:()=>"Summon Simulator",link:"/summon-simulator/"},{icon:'<i class="fa fa-trophy"></i>',name:()=>this.$t("strings.app_tier_list_maker"),link:"/tierlist-maker/",shrink:!0},{icon:'<i class="fa fa-id-card"></i>',name:()=>this.$t("strings.credits"),link:"/credits/"}]}},methods:{collapseMenu(){this.wasManuallyCollapsed=!this.isClosed,this.isClosed=!this.isClosed},loseFocus(){document.activeElement.blur()},handleAutoCollapse(e){e.shrink?this.isClosed=!0:this.wasManuallyCollapsed||(this.isClosed=!1)},focus(){this.$refs["main-menu"].focus()},handleOption(){this.loseFocus()},optionTooltip(e){return{value:e.name,disabled:!this.isClosed}}}},W=n(3744);const H=(0,W.Z)(L,[["render",B]]);var I=H,K=(n.p,{provide:{cdn:v.cK,api:v.hi,setMeta:b},components:{SideMenu:I},data:function(){return{VERSION:1}},methods:{setLoading:function(e,t){this.$store.commit("loading",[e,t])},openSideMenu(){this.$refs["side-menu"].focus()}},computed:{currentPage(){return this.$route.path.split("/").filter((e=>e))[0]},loading:function(){return this.$store.state.loading[0]},loadingText:function(){return this.$store.state.loading[1]}},created:async function(){console.log("%cCeciliaBot","font-size: 30px"),console.log(`%cVersion: ${this.VERSION}`,"color: red"),console.log("Mobile:",this.$store.state.isMobile)}});const R=(0,W.Z)(K,[["render",g]]);var q=R,Q=n(5217),U=n(2201),V=n(9234);const Y=[{path:"/",title:"Home",name:"home",component:()=>n.e(5177).then(n.bind(n,9436))},{path:"/official-info/",title:"Official Links",name:"app_official_game_info",component:()=>n.e(8585).then(n.bind(n,9883))},{path:"/summon-simulator",title:"Summon Simulator",name:"app_summon_simulator",component:()=>n.e(5582).then(n.bind(n,5506))},{path:"/ultimate-timeline",title:"Ultimate Timeline",name:"app_ultimate_timeline",component:()=>n.e(8485).then(n.bind(n,2092))},{path:"/timeline",title:"Timeline",name:"app_timeline",component:()=>n.e(3831).then(n.bind(n,4263))},{path:"/camping-simulator",title:"Camping",name:"app_camp_simulator",component:()=>Promise.all([n.e(6434),n.e(8297)]).then(n.bind(n,5432))},{path:"/tierlist-maker",title:"Tier List Maker",name:"app_tier_list_maker",component:()=>Promise.all([n.e(6434),n.e(6659)]).then(n.bind(n,9551))},{path:"/credits",title:"Credits",name:"credits",component:()=>Promise.all([n.e(6434),n.e(6659)]).then(n.bind(n,3739))},{path:"/:pathMatch(.*)*",name:"app_not_found",component:()=>n.e(2772).then(n.bind(n,7966))}];var X=Y;const G=(0,U.p7)({history:(0,U.r5)(),routes:X});G.beforeEach(((e,t,n)=>{window.$loadingPageProgress(15),Q.Z.commit("loading",!0),n()})),G.afterEach(((e,t,n)=>{Q.Z.commit("loading",!1),n||(V.ZP.global.te("strings.app_title")?document.title=`${V.ZP.global.t(`strings.${e.name}`)} | ${V.ZP.global.t("strings.app_title")}`:document.title="CeciliaBot",window.gtag&&(window.gtag("set","page_path",window.location.pathname+"#"+e.path),window.gtag("event","page_view")),window.$loadingPageProgress(100))}));var J=n(5089),ee=n(2229),te=n(1830),ne=n(7971),ie=n(5845),oe=n(5134),ae=n(7482),se=n(4474),le=n(9165),re=n(5561),ce=document.createElement("div");ce.style.cssText="z-index: 999; position: fixed; top: 0; left: 0; opacity: 0; height: .3rem; background: var(--font-color-primary); width: 0; transition: all ease .3s",document.body.appendChild(ce);const ue=function(e){ce.style.opacity="1",ce.style.width=e+"%",e>=100&&setTimeout((()=>{ce.style.opacity="0",setTimeout((()=>ce.style.width=0),200)}),200)};var de={install(e){e.config.globalProperties.$loadingPageProgress=ue,window.$loadingPageProgress=ue}};window.i18n=V.ZP,(0,i.ri)(q).use(G).use(V.ZP).use(Q.Z).use(ie.Z).use(oe.Z).use(ae.Z).use(ne.Z).use(se.Z).use(de).directive("tooltip",J.Z).directive("lazyloader",ee.ZP).directive("ripple-effect",te.Z).component("HeroIcon",le.Z).component("MobileFloatingMenu",re.Z).mount("#app")},8753:function(e,t,n){n.d(t,{cK:function(){return o},hi:function(){return i}});const i="https://ceciliaapi.vercel.app/api",o="https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/"},6468:function(e,t,n){e.exports=n.p+"img/campfire.0cdd667a.svg"}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,a){if(!i){var s=1/0;for(u=0;u<e.length;u++){i=e[u][0],o=e[u][1],a=e[u][2];for(var l=!0,r=0;r<i.length;r++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[r])}))?i.splice(r--,1):(l=!1,a<s&&(s=a));if(l){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[i,o,a]}}(),function(){n.F={},n.E=function(e){Object.keys(n.F).map((function(t){n.F[t](e)}))}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(i,o){if(1&o&&(i=this(i)),8&o)return i;if("object"===typeof i&&i){if(4&o&&i.__esModule)return i;if(16&o&&"function"===typeof i.then)return i}var a=Object.create(null);n.r(a);var s={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&i;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){s[e]=function(){return i[e]}}));return s["default"]=function(){return i},n.d(a,s),a}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({36:"changelog/views-timeline2---Copia-changelog-en-json",78:"locales/en-strings-json",251:"locales/th-heroes-json",320:"en-json",348:"locales/pt-heroes-json",1534:"locales/ja-artifacts-json",1909:"PhotogalleryPlugin",2057:"changelog/views-tierlist-maker-changelog-en-json",2737:"locales/es-strings-json",2772:"wiki404",3359:"locales/th-artifacts-json",3708:"locales/zh-CN-artifacts-json",3770:"locales/zh-CN-strings-json",3831:"timeline",4378:"locales/pt-strings-json",4787:"locales/ko-artifacts-json",5177:"home",5582:"summon-simulator",5719:"locales/zh-CN-heroes-json",5734:"html2canvas.patched",5941:"locales/fr-heroes-json",6091:"locales/ko-heroes-json",6233:"locales/ja-heroes-json",6635:"locales/es-heroes-json",6659:"tier-list-maker",6856:"locales/ko-strings-json",6921:"locales/es-artifacts-json",6977:"locales/ja-strings-json",7950:"locales/pt-artifacts-json",8028:"locales/zh-TW-artifacts-json",8297:"camping",8485:"timeline2",8516:"locales/th-strings-json",8585:"official-game-info",9393:"changelog/views-timeline2-changelog-en-json",9402:"changelog/views-camping-simulator-changelog-en-json",9483:"changelog/views-timeline-changelog-en-json",9726:"locales/it-strings-json",9813:"locales/zh-TW-strings-json",9913:"locales/zh-TW-heroes-json"}[e]||e)+"."+{36:"aa864b0f",78:"22025c4c",251:"d8c250d3",320:"cba44acc",348:"6420da1f",536:"01d7c303",807:"d6156a82",835:"56efafdb",1534:"b751f992",1909:"44dd2bce",2057:"4abba9ba",2737:"d6d603f6",2772:"3985c623",3359:"eae26c2b",3708:"c2fc5d1d",3770:"7bfdaa32",3831:"e603ae15",4378:"e06d31a8",4787:"8dc9faec",5085:"540c27b9",5177:"ad4906c9",5582:"b693b625",5719:"b35ef5ff",5734:"13af1b6a",5941:"da58f175",6091:"9f19e141",6233:"292c771d",6434:"7ef9307c",6635:"7a506a83",6659:"753aa3d1",6856:"fde9214b",6921:"172c58e0",6977:"b5830c23",7950:"dde8fe0f",8028:"e7c059ea",8297:"22d70c92",8485:"f7b4a250",8516:"89f0d1c6",8585:"ff440bb9",9393:"2cc96a6e",9402:"d853bb74",9483:"b89cd468",9726:"25266616",9813:"c65c5cc8",9913:"2ed512b3"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+({1909:"PhotogalleryPlugin",3831:"timeline",5177:"home",5582:"summon-simulator",6659:"tier-list-maker",8297:"camping",8485:"timeline2",8585:"official-game-info"}[e]||e)+"."+{536:"6382bc38",835:"6382bc38",1909:"ec82617c",3831:"af74596b",5085:"6382bc38",5177:"aaba8551",5582:"8eb25017",6659:"e5ddaf91",8297:"89840e39",8485:"1f9c32b4",8585:"06b8808c"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="v3:";n.l=function(i,o,a,s){if(e[i])e[i].push(o);else{var l,r;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(r=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=i),e[i]=[o];var f=function(t,n){l.onerror=l.onload=null,clearTimeout(p);var o=e[i];if(delete e[i],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),r&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.j=4826}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,i,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=function(n){if(a.onerror=a.onload=null,"load"===n.type)i();else{var s=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=s,r.request=l,a.parentNode&&a.parentNode.removeChild(a),o(r)}};return a.onerror=a.onload=s,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var o=n[i],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){o=s[i],a=o.getAttribute("data-href");if(a===e||a===t)return o}},i=function(i){return new Promise((function(o,a){var s=n.miniCssF(i),l=n.p+s;if(t(s,l))return o();e(i,l,null,o,a)}))},o={4826:0};n.f.miniCss=function(e,t){var n={536:1,835:1,1909:1,3831:1,5085:1,5177:1,5582:1,6659:1,8297:1,8485:1,8585:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=i(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){n.b=document.baseURI||self.location.href;var e={4826:0};n.f.j=function(t,i){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)i.push(o[2]);else{var a=new Promise((function(n,i){o=e[t]=[n,i]}));i.push(o[2]=a);var s=n.p+n.u(t),l=new Error,r=function(i){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",l.name="ChunkLoadError",l.type=a,l.request=s,o[1](l)}};n.l(s,r,"chunk-"+t,t)}},n.F.j=function(t){if(!n.o(e,t)||void 0===e[t]){e[t]=null;var i=document.createElement("link");n.nc&&i.setAttribute("nonce",n.nc),i.rel="prefetch",i.as="script",i.href=n.p+n.u(t),document.head.appendChild(i)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,a,s=i[0],l=i[1],r=i[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(r)var u=r(n)}for(t&&t(i);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},i=self["webpackChunkv3"]=self["webpackChunkv3"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}(),function(){var e={6659:[5734]};n.f.prefetch=function(t,i){Promise.all(i).then((function(){var i=e[t];Array.isArray(i)&&i.map(n.E)}))}}();var i=n.O(void 0,[4998,3064],(function(){return n(3127)}));i=n.O(i)})();