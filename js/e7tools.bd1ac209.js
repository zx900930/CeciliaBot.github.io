(function(){"use strict";var e={4991:function(e,n,t){var o=t(9963),i=t(6252),a=t(3577);const r={class:"container"},c=(0,i._)("img",{style:{height:"100px"},src:"https://cdn.glitch.com/6c14ca82-3bcb-4fd6-afa7-815b95e04a14%2Fras-run-slow.gif?v=1632241290215"},null,-1),s={id:"main_menu",class:"mm_container"},l={class:"app_drawer"},u=["onClick"],f={class:"noselect"},d=["src"];function p(e,n,t,p,m,h){const g=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",r,[(0,i.Wm)(g)]),(0,i.wy)((0,i._)("div",{id:"loading",class:"noselect loading-container animatefade",onContextmenu:n[0]||(n[0]=e=>e.preventDefault())},[c,(0,i.Wm)(o.uT,{name:"slide-fade",mode:"out-in"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("div",{key:h.loadingText,style:{"font-size":"32px",color:"white","text-shadow":"0px 0px 3px grey, 0 0 10px black, 0 0 10px black","line-height":"30px","padding-top":"12px","margin-left":"20px"}},(0,a.zw)(h.loadingText),1))])),_:1})],544),[[o.F8,h.loading]]),(0,i.wy)((0,i._)("div",s,[(0,i._)("h2",null,(0,a.zw)(e.$t("strings.app_cecilia_tools")),1),(0,i._)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(h.menuIcons,(n=>((0,i.wg)(),(0,i.iD)("div",{key:n.title,onClick:e=>h.mainMenuClick(n.path,n.keep)},[(0,i._)("div",f,[n.class?((0,i.wg)(),(0,i.iD)("i",{key:0,class:(0,a.C_)(n.class),"aria-hidden":"true"},null,2)):((0,i.wg)(),(0,i.iD)("img",{key:1,src:n.icon,height:"70%"},null,8,d))]),(0,i._)("h3",null,(0,a.zw)(e.$t(`strings.${n.name}`)),1)],8,u)))),128))])],512),[[o.F8,h.mainMenu]])],64)}t(560);var m=t(6876),h={data:function(){return{VERSION:"1.0",memed:!1}},methods:{setLoading:function(e,n){this.$store.commit("loading",[e,n])},mainMenuClick:function(e){this.$store.commit("toggleMainMenu"),e!==this.$route.path&&m.N.push({path:e}).catch((e=>{console.log(e),console.log("failed")}))},openHome:function(){this.$store.commit("toggleMainMenu")},openModal:function(){document.body.classList.add("modal-open")},closeModal:function(){document.body.classList.remove("modal-open")}},computed:{menuIcons:function(){return m._.filter((e=>"/"!==e.path&&"/:pathMatch(.*)*"!==e.path))},loading:function(){return this.$store.state.loading[0]},loadingText:function(){return this.$store.state.loading[1]},mainMenu:function(){return this.$store.state.mainMenu}},watch:{mainMenu:function(){this.mainMenu?this.openModal():this.closeModal()}},mounted:function(){},created:async function(){if(console.log("%cCeciliaBot","font-size: 30px"),console.log(`%cVersion: ${this.VERSION}`,"color: red"),console.log("Mobile:",this.$store.state.isMobile),Math.floor(100*Math.random())+1<5)return this.memed=!0;document.addEventListener("keydown",(e=>{"INPUT"!==e.target.tagName&&"TEXTAREA"!==e.target.tagName&&"true"!=e.target.contentEditable&&("Escape"!==e.key&&"m"!==e.key||this.openHome())}))}},g=t(3744);const b=(0,g.Z)(h,[["render",p]]);var v=b,y=t(5217),w=t(9234),j=t(5089),_=t(2229),k=t(1830),M=t(2710),C=t(5845),P=t(5134),x=t(7482),E=t(4474),O=t(9117),T=t(5561);window.i18n=w.ZP;let N=(0,o.ri)(v);N.use(m.N).use(y.Z).use(w.ZP).use(C.Z).use(P.Z).use(x.Z).use(M.Z).use(E.Z).directive("tooltip",j.Z).directive("lazyloader",_.ZP).directive("ripple-effect",k.Z).component("HeroIcon",O.Z).component("MobileFloatingMenu",T.Z).mount("#app")},6876:function(e,n,t){t.d(n,{N:function(){return s},_:function(){return c}});var o=t(2201),i=t(5217),a=t(9234);const r=[{path:"/",title:"Main Menu",name:"app_main_menu",component:{created:function(){i.Z.commit("loading",!1),i.Z.commit("toggleMainMenu")},render:function(){},beforeRouteEnter(){document.title="Main Menu"}}},{path:"/timeline",title:"Timeline",name:"app_timeline",icon:t(6106),component:()=>t.e(3831).then(t.bind(t,4263))},{path:"/ultimate-timeline",title:"Ultimate Timmeline",name:"app_ultimate_timeline",icon:t(6106),component:()=>Promise.all([t.e(8571),t.e(8485)]).then(t.bind(t,834))},{path:"/powder-shop",title:"Powder Shop",name:"app_powder_shop",icon:t(4350),component:()=>t.e(2795).then(t.bind(t,5578))},{path:"/tierlist-maker",title:"Tier List Maker",name:"app_tier_list_maker",class:"fa fa-trophy",component:()=>Promise.all([t.e(9124),t.e(3853),t.e(6659)]).then(t.bind(t,7354))},{path:"/camping-simulator",title:"Camping Simulator",name:"app_camp_simulator",icon:t(1516),component:()=>Promise.all([t.e(9124),t.e(8297)]).then(t.bind(t,5432))},{path:"/gear-score",title:"Gear Score",name:"app_gear_score",class:"fas fa-balance-scale-right",component:()=>Promise.all([t.e(5135),t.e(2831)]).then(t.bind(t,6090))},{path:"/:pathMatch(.*)*",name:"app_not_found",component:()=>t.e(7171).then(t.bind(t,7191))}];var c=r;const s=(0,o.p7)({history:(0,o.r5)(),routes:c});s.beforeEach(((e,n,t)=>{i.Z.commit("loading",!0),t()})),s.afterEach(((e,n,t)=>{i.Z.commit("loading",!1),t||(a.ZP.global.te("strings.app_cecilia_tools")?document.title=`${a.ZP.global.t(`strings.${e.name}`)} | ${a.ZP.global.t("strings.app_cecilia_tools")}`:document.title="CeciliaBot Tools",window.gtag&&(window.gtag("set","page_path",window.location.pathname+"#"+e.path),window.gtag("event","page_view")))}))},4350:function(e,n,t){e.exports=t.p+"img/powder-shop-app-icon.7bd07a2c.png"},6106:function(e,n,t){e.exports=t.p+"img/timeline-app-icon.a3bc9a45.png"}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,i,a){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],a=e[u][2];for(var c=!0,s=0;s<o.length;s++)(!1&a||r>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(c=!1,a<r&&(r=a));if(c){e.splice(u--,1);var l=i();void 0!==l&&(n=l)}}return n}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,i,a]}}(),function(){t.F={},t.E=function(e){Object.keys(t.F).map((function(n){t.F[n](e)}))}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(o,i){if(1&i&&(o=this(o)),8&i)return o;if("object"===typeof o&&o){if(4&i&&o.__esModule)return o;if(16&i&&"function"===typeof o.then)return o}var a=Object.create(null);t.r(a);var r={};e=e||[null,n({}),n([]),n(n)];for(var c=2&i&&o;"object"==typeof c&&!~e.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(e){r[e]=function(){return o[e]}}));return r["default"]=function(){return o},t.d(a,r),a}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+({36:"changelog/views-timeline2---Copia-changelog-en-json",78:"locales/en-strings-json",251:"locales/th-heroes-json",320:"en-json",348:"locales/pt-heroes-json",1534:"locales/ja-artifacts-json",1909:"PhotogalleryPlugin",2057:"changelog/views-tierlist-maker-changelog-en-json",2317:"changelog/views-tierlist-maker-sub-changelog-en-json",2737:"locales/es-strings-json",2795:"powder-shop",2831:"gear-score",3359:"locales/th-artifacts-json",3708:"locales/zh-CN-artifacts-json",3770:"locales/zh-CN-strings-json",3831:"timeline",4378:"locales/pt-strings-json",4787:"locales/ko-artifacts-json",5719:"locales/zh-CN-heroes-json",5734:"html2canvas.patched",5941:"locales/fr-heroes-json",6091:"locales/ko-heroes-json",6233:"locales/ja-heroes-json",6635:"locales/es-heroes-json",6659:"tier-list-maker",6856:"locales/ko-strings-json",6921:"locales/es-artifacts-json",6977:"locales/ja-strings-json",7171:"error404",7950:"locales/pt-artifacts-json",8028:"locales/zh-TW-artifacts-json",8297:"camping",8485:"timeline2",8516:"locales/th-strings-json",9393:"changelog/views-timeline2-changelog-en-json",9402:"changelog/views-camping-simulator-changelog-en-json",9483:"changelog/views-timeline-changelog-en-json",9726:"locales/it-strings-json",9813:"locales/zh-TW-strings-json",9913:"locales/zh-TW-heroes-json"}[e]||e)+"."+{36:"3dda279e",78:"24b5e9a5",251:"72ff6e20",320:"f7fa2e27",348:"2fa32ba6",807:"167a04f0",1534:"7199cb53",1909:"23f9ce81",2057:"ac054f25",2317:"3689ff00",2390:"80fc4f16",2737:"493c1cca",2795:"e9302644",2831:"317c9bc3",3359:"6d8857e8",3708:"e7a855eb",3770:"33249bdb",3831:"4ad7201f",3853:"e14584df",4138:"86479f76",4378:"65ad1527",4787:"78ecf32f",5135:"92f5b3f4",5714:"26ff6f66",5719:"aa67d44f",5734:"21223f21",5941:"d7d94770",6091:"daa33008",6233:"e1349ffa",6635:"cc384842",6659:"a36e23c8",6674:"8e853502",6856:"e26a351d",6921:"4a55d485",6977:"f2ea5245",7171:"e46bc451",7605:"97bba51c",7877:"1ed19069",7937:"5ed99045",7950:"875c3b34",8028:"32b112c2",8297:"7a7aeaf7",8485:"8315bd4e",8516:"e983abe0",8571:"14a2e490",9124:"a3a96245",9393:"932dc615",9402:"ab54181e",9483:"1c9d44f9",9726:"09b212d2",9813:"4039d72d",9913:"4951c9f3"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+({1909:"PhotogalleryPlugin",2795:"powder-shop",2831:"gear-score",3831:"timeline",6659:"tier-list-maker",7171:"error404",8297:"camping",8485:"timeline2"}[e]||e)+"."+{1909:"2820b156",2390:"5c6dc254",2795:"7ad00aa3",2831:"f383a928",3831:"ca49949b",4138:"5c6dc254",5714:"5c6dc254",6659:"128bbe25",7171:"5a158490",7605:"5c6dc254",7877:"5c6dc254",7937:"5c6dc254",8297:"ef405655",8485:"cc1ba6b2"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="v3:";t.l=function(o,i,a,r){if(e[o])e[o].push(i);else{var c,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var f=l[u];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+a){c=f;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+a),c.src=o),e[o]=[i];var d=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var i=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),i&&i.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.j=7806}(),function(){t.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var r=t&&t.type,c=t&&t.target&&t.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+c+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=c,a.parentNode&&a.parentNode.removeChild(a),i(s)}};return a.onerror=a.onload=r,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var i=t[o],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===n))return i}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){i=r[o],a=i.getAttribute("data-href");if(a===e||a===n)return i}},o=function(o){return new Promise((function(i,a){var r=t.miniCssF(o),c=t.p+r;if(n(r,c))return i();e(o,c,null,i,a)}))},i={7806:0};t.f.miniCss=function(e,n){var t={1909:1,2390:1,2795:1,2831:1,3831:1,4138:1,5714:1,6659:1,7171:1,7605:1,7877:1,7937:1,8297:1,8485:1};i[e]?n.push(i[e]):0!==i[e]&&t[e]&&n.push(i[e]=o(e).then((function(){i[e]=0}),(function(n){throw delete i[e],n})))}}}(),function(){t.b=document.baseURI||self.location.href;var e={7806:0};t.f.j=function(n,o){var i=t.o(e,n)?e[n]:void 0;if(0!==i)if(i)o.push(i[2]);else if(4138!=n){var a=new Promise((function(t,o){i=e[n]=[t,o]}));o.push(i[2]=a);var r=t.p+t.u(n),c=new Error,s=function(o){if(t.o(e,n)&&(i=e[n],0!==i&&(e[n]=void 0),i)){var a=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+r+")",c.name="ChunkLoadError",c.type=a,c.request=r,i[1](c)}};t.l(r,s,"chunk-"+n,n)}else e[n]=0},t.F.j=function(n){if((!t.o(e,n)||void 0===e[n])&&4138!=n){e[n]=null;var o=document.createElement("link");t.nc&&o.setAttribute("nonce",t.nc),o.rel="prefetch",o.as="script",o.href=t.p+t.u(n),document.head.appendChild(o)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var i,a,r=o[0],c=o[1],s=o[2],l=0;if(r.some((function(n){return 0!==e[n]}))){for(i in c)t.o(c,i)&&(t.m[i]=c[i]);if(s)var u=s(t)}for(n&&n(o);l<r.length;l++)a=r[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},o=self["webpackChunkv3"]=self["webpackChunkv3"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}(),function(){var e={2390:[5734],4138:[5734],5714:[5734],6659:[5734],7605:[5734],7877:[5734],7937:[5734]};t.f.prefetch=function(n,o){Promise.all(o).then((function(){var o=e[n];Array.isArray(o)&&o.map(t.E)}))}}();var o=t.O(void 0,[4998,3064],(function(){return t(4991)}));o=t.O(o)})();