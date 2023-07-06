(function(){"use strict";var e={2330:function(e,t,n){var o=n(9963),i=n(6252),a=n(3577);const r={class:"container"},c=(0,i._)("img",{style:{height:"100px"},src:"https://cdn.glitch.com/6c14ca82-3bcb-4fd6-afa7-815b95e04a14%2Fras-run-slow.gif?v=1632241290215"},null,-1),s={id:"main_menu",class:"mm_container"},l={class:"app_drawer"},u=["onClick"],f={class:"noselect"},d=["src"],p=(0,i._)("div",null,[(0,i._)("i",{class:"fa fa-download","aria-hidden":"true"})],-1);function m(e,t,n,m,h,g){const b=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",r,[(0,i.Wm)(b)]),(0,i.wy)((0,i._)("div",{id:"loading",class:"noselect loading-container animatefade",onContextmenu:t[0]||(t[0]=e=>e.preventDefault())},[c,(0,i.Wm)(o.uT,{name:"slide-fade",mode:"out-in"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("div",{key:g.loadingText,style:{"font-size":"32px",color:"white","text-shadow":"0px 0px 3px grey, 0 0 10px black, 0 0 10px black","line-height":"30px","padding-top":"12px","margin-left":"20px"}},(0,a.zw)(g.loadingText),1))])),_:1})],544),[[o.F8,g.loading]]),(0,i.wy)((0,i._)("div",s,[(0,i._)("h2",null,(0,a.zw)(e.$t("strings.app_cecilia_tools")),1),(0,i._)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(g.menuIcons,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.title,onClick:e=>g.mainMenuClick(t.path,t.keep)},[(0,i._)("div",f,[t.class?((0,i.wg)(),(0,i.iD)("i",{key:0,class:(0,a.C_)(t.class),"aria-hidden":"true"},null,2)):((0,i.wg)(),(0,i.iD)("img",{key:1,src:t.icon,height:"70%"},null,8,d))]),(0,i._)("h3",null,(0,a.zw)(e.$t(`strings.${t.name}`)),1)],8,u)))),128)),g.PWAButton?((0,i.wg)(),(0,i.iD)("div",{key:0,onClick:t[1]||(t[1]=()=>g.installPWA())},[p,(0,i._)("h3",null,(0,a.zw)(e.$t("strings.app_pwa_install")),1)])):(0,i.kq)("",!0)])],512),[[o.F8,g.mainMenu]])],64)}n(7658);var h=n(1333),g=n(474),b=n(849);function v(){var e,t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=window.innerHeight||document.documentElement.height||document.body.clientHeight;e=t<=600,g.Z&&(g.Z.commit("updateIsMobile",e),g.Z.commit("updateWindowSize",t),g.Z.commit("updateWindowHeight",n))}window.onresize=v;var w={data:function(){return{VERSION:"1.0",memed:!1}},methods:{setLoading:function(e,t){this.$store.commit("loading",[e,t])},mainMenuClick:function(e){this.$store.commit("toggleMainMenu"),e!==this.$route.path&&h.N.push({path:e}).catch((e=>{console.log(e),console.log("failed")}))},openHome:function(){this.$store.commit("toggleMainMenu")},openModal:function(){document.body.classList.add("modal-open")},closeModal:function(){document.body.classList.remove("modal-open")},installPWA:function(){this.PWAButton.prompt(),this.PWAButton.userChoice.then((e=>{"dismissed"==e.outcome?console.log("Permission refused"):this.$set(this.$store.state,"installPWAButton",null)}))},onContextualMenu:function(e){this.$contextmenu.show(e,[["fa fa-times","Funziona"],["fa fa-times","Non funziona"]])}},computed:{menuIcons:function(){return h._.filter((e=>"/"!==e.path&&"/:pathMatch(.*)*"!==e.path))},loading:function(){return this.$store.state.loading[0]},loadingText:function(){return this.$store.state.loading[1]},mainMenu:function(){return this.$store.state.mainMenu},PWAButton:function(){return this.$store.state.installPWAButton}},watch:{mainMenu:function(){this.mainMenu?this.openModal():this.closeModal()}},mounted:function(){},created:async function(){if(console.log("%cCeciliaBot","font-size: 30px"),console.log(`%cVersion: ${this.VERSION}`,"color: red"),this.$store.commit("updateIsMobile",b.Z.any()),v(),console.log("Mobile:",this.$store.state.isMobile),Math.floor(100*Math.random())+1<5)return this.memed=!0;document.addEventListener("keydown",(e=>{"INPUT"!==e.target.tagName&&"TEXTAREA"!==e.target.tagName&&"true"!=e.target.contentEditable&&("Escape"!==e.key&&"m"!==e.key||this.openHome())}))}},y=n(3744);const _=(0,y.Z)(w,[["render",m]]);var j=_,k=n(9234),M=n(5089),P=n(2229),C=n(1830),x=n(7212),E=n(3685),O=n(5348),Z=n(7482),T=n(4474),A=n(2764),$=n(2536);window.i18n=k.ZP;let N=(0,o.ri)(j);N.config.unwrapInjectedRef=!0,N.use(h.N).use(g.Z).use(k.ZP).use(E.Z).use(O.Z).use(Z.Z).use(x.Z).use(T.Z).directive("tooltip",M.Z).directive("lazyloader",P.ZP).directive("ripple-effect",C.Z).component("HeroIcon",A.Z).component("MobileFloatingMenu",$.Z).mount("#app")},1333:function(e,t,n){n.d(t,{N:function(){return s},_:function(){return c}});var o=n(2201),i=n(474),a=n(9234);const r=[{path:"/",title:"Main Menu",name:"app_main_menu",component:{created:function(){i.Z.commit("loading",!1),i.Z.commit("toggleMainMenu")},render:function(){},beforeRouteEnter(){document.title="Main Menu"}}},{path:"/timeline",title:"Timeline",name:"app_timeline",icon:n(6106),component:()=>n.e(951).then(n.bind(n,4263))},{path:"/ultimate-timeline",title:"Ultimate Timmeline",name:"app_ultimate_timeline",icon:n(6106),component:()=>n.e(485).then(n.bind(n,528))},{path:"/powder-shop",title:"Powder Shop",name:"app_powder_shop",icon:n(7215),component:()=>n.e(795).then(n.bind(n,5177))},{path:"/tierlist-maker",title:"Tier List Maker",name:"app_tier_list_maker",class:"fa fa-trophy",component:()=>Promise.all([n.e(630),n.e(300)]).then(n.bind(n,7081))},{path:"/camping-simulator",title:"Camping Simulator",name:"app_camp_simulator",icon:n(1516),component:()=>Promise.all([n.e(630),n.e(297)]).then(n.bind(n,5432))},{path:"/gear-score",title:"Gear Score",name:"app_gear_score",class:"fas fa-balance-scale-right",component:()=>n.e(831).then(n.bind(n,3878))},{path:"/:pathMatch(.*)*",name:"app_not_found",component:()=>n.e(171).then(n.bind(n,2612))}];var c=r;const s=(0,o.p7)({history:(0,o.r5)(),routes:c});s.beforeEach(((e,t,n)=>{i.Z.commit("loading",!0),n()})),s.afterEach(((e,t,n)=>{i.Z.commit("loading",!1),n||(a.ZP.global.te("strings.app_cecilia_tools")?document.title=`${a.ZP.global.t(`strings.${e.name}`)} | ${a.ZP.global.t("strings.app_cecilia_tools")}`:document.title="CeciliaBot Tools",window.gtag&&(window.gtag("set","page_path",window.location.pathname+"#"+e.path),window.gtag("event","page_view")))}))},7215:function(e,t,n){e.exports=n.p+"img/powder-shop-app-icon.7bd07a2c.png"},6106:function(e,t,n){e.exports=n.p+"img/timeline-app-icon.a3bc9a45.png"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,a){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],a=e[u][2];for(var c=!0,s=0;s<o.length;s++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(c=!1,a<r&&(r=a));if(c){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,i,a]}}(),function(){n.F={},n.E=function(e){Object.keys(n.F).map((function(t){n.F[t](e)}))}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,i){if(1&i&&(o=this(o)),8&i)return o;if("object"===typeof o&&o){if(4&i&&o.__esModule)return o;if(16&i&&"function"===typeof o.then)return o}var a=Object.create(null);n.r(a);var r={};e=e||[null,t({}),t([]),t(t)];for(var c=2&i&&o;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){r[e]=function(){return o[e]}}));return r["default"]=function(){return o},n.d(a,r),a}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({28:"locales/zh-TW-artifacts-json",57:"changelog/views-tierlist-maker-changelog-en-json",78:"locales/en-strings-json",91:"locales/ko-heroes-json",171:"error404",233:"locales/ja-heroes-json",251:"locales/th-heroes-json",297:"camping",300:"tierlist-maker",320:"en-json",348:"locales/pt-heroes-json",359:"locales/th-artifacts-json",378:"locales/pt-strings-json",393:"changelog/views-timeline2-changelog-en-json",402:"changelog/views-camping-simulator-changelog-en-json",483:"changelog/views-timeline-changelog-en-json",485:"timeline2",516:"locales/th-strings-json",534:"locales/ja-artifacts-json",635:"locales/es-heroes-json",708:"locales/zh-CN-artifacts-json",719:"locales/zh-CN-heroes-json",726:"locales/it-strings-json",734:"html2canvas.patched",737:"locales/es-strings-json",770:"locales/zh-CN-strings-json",787:"locales/ko-artifacts-json",795:"powder-shop",813:"locales/zh-TW-strings-json",831:"gear-score",856:"locales/ko-strings-json",909:"PhotogalleryPlugin",913:"locales/zh-TW-heroes-json",921:"locales/es-artifacts-json",950:"locales/pt-artifacts-json",951:"timeline",977:"locales/ja-strings-json"}[e]||e)+"."+{28:"903cfedf",57:"97816301",78:"841c307d",91:"4c09d31e",143:"2ceaf7be",171:"ee6e9c30",233:"491311f7",251:"3a130e45",297:"8c596d0c",300:"704cf9dc",301:"556effce",320:"98352afa",348:"469b627b",359:"f36f74b3",378:"c457d078",393:"aa6223bf",402:"7cffa187",483:"851cac36",485:"adc4a69f",493:"8be8498d",516:"133e9e60",534:"830aaaba",630:"b6808abc",635:"2c036904",708:"7f49a732",719:"4973339a",726:"65e89da9",734:"dd5972d0",737:"d39d9e5f",770:"cefe95aa",787:"39a2f506",795:"f6df7130",807:"f60eadb0",813:"1b5f18e6",831:"df9cd8fa",856:"52e08f5f",909:"b79eb197",913:"cdefeda7",921:"06e4658a",950:"69f1ef51",951:"08bd66b1",977:"e26aaa9e"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+({171:"error404",297:"camping",300:"tierlist-maker",485:"timeline2",795:"powder-shop",831:"gear-score",909:"PhotogalleryPlugin",951:"timeline"}[e]||e)+"."+{143:"6382bc38",171:"6410611f",297:"4b62e01e",300:"2c59f144",301:"6382bc38",485:"9bd9d25d",493:"6382bc38",795:"7ad00aa3",831:"2eed722b",909:"af2a68d0",951:"dfc4d39b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="v3:";n.l=function(o,i,a,r){if(e[o])e[o].push(i);else{var c,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var f=l[u];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+a){c=f;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=o),e[o]=[i];var d=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var i=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),i&&i.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.j=806}(),function(){n.p=""}(),function(){var e=function(e,t,n,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(a){if(i.onerror=i.onload=null,"load"===a.type)n();else{var r=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=c,i.parentNode.removeChild(i),o(s)}};return i.onerror=i.onload=a,i.href=t,document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=n[o],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){i=r[o],a=i.getAttribute("data-href");if(a===e||a===t)return i}},o=function(o){return new Promise((function(i,a){var r=n.miniCssF(o),c=n.p+r;if(t(r,c))return i();e(o,c,i,a)}))},i={806:0};n.f.miniCss=function(e,t){var n={143:1,171:1,297:1,300:1,301:1,485:1,493:1,795:1,831:1,909:1,951:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){n.b=document.baseURI||self.location.href;var e={806:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var a=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=a);var r=n.p+n.u(t),c=new Error,s=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",c.name="ChunkLoadError",c.type=a,c.request=r,i[1](c)}};n.l(r,s,"chunk-"+t,t)}},n.F.j=function(t){if(!n.o(e,t)||void 0===e[t]){e[t]=null;var o=document.createElement("link");n.nc&&o.setAttribute("nonce",n.nc),o.rel="prefetch",o.as="script",o.href=n.p+n.u(t),document.head.appendChild(o)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,r=o[0],c=o[1],s=o[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(s)var u=s(n)}for(t&&t(o);l<r.length;l++)a=r[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkv3"]=self["webpackChunkv3"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}(),function(){var e={300:[734]};n.f.prefetch=function(t,o){Promise.all(o).then((function(){var o=e[t];Array.isArray(o)&&o.map(n.E)}))}}();var o=n.O(void 0,[998,64],(function(){return n(2330)}));o=n.O(o)})();