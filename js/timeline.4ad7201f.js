(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[3831],{513:function(){},9235:function(){},6771:function(e,t,i){"use strict";var n=i(6252),s=i(6163);t.Z={name:"ctrlf-component",props:{events:{type:Array,required:!1,default:()=>[]},renderBox:{type:Boolean,required:!1,default:!0},searchFunction:{type:Function,required:!0},toDisplay:{type:Function,required:!0}},data:function(){return{render:!1,localRenderBox:!1,current:0,results:[],hideResultsBox:!1}},watch:{renderBox:{immediate:!0,handler:function(e){this.localRenderBox=e}}},computed:{mobile:function(){return!0}},created:function(){document.addEventListener("keydown",this.openCtrl,!0)},beforeUnmount:function(){document.removeEventListener("keydown",this.openCtrl,!0)},mounted:function(){},methods:{openCtrl:function(e){e.ctrlKey&&"f"===e.key&&(e.preventDefault(),this.render=!0,this.openSearchBar())},openSearchBar:function(){this.render=!0,this.focusInput(),this.selectInputContent()},focus:function(){this.focusInput(),this.selectInputContent()},focusInput:function(){this.$nextTick((()=>{this.$refs["input-search-box"].focus()}))},selectInputContent:function(){this.$nextTick((()=>{this.$refs["input-search-box"].select()}))},searchEvent:(0,s.Ds)((function(e){this.results=this.searchFunction(e.target.value),this.current=0,this.clickEvent(this.results[this.current])}),400),goToSearchEvent:function(e){this.results.length&&(this.current=e,this.current<0&&(this.current=this.results.length-1),this.current>this.results.length-1&&(this.current=0),this.clickEvent(this.results[this.current]))},clickEvent:function(e){this.$emit("event",e)},closeSearchBar:function(){this.render=!1}},render:function(){return(0,n.h)("div",{class:"search-box-pos",style:{display:this.render?"":"none"}},[(0,n.h)("div",{class:"ch-search-box"},[(0,n.h)("input",{ref:"input-search-box",onInput:e=>this.searchEvent(e),onKeydown:e=>{("enter"===e.key||13===e.keyCode)&&this.goToSearchEvent(this.current+1)},autocomplete:"off"}),(0,n.h)("div",{},Math.min(this.current+1,this.results.length)+"/"+this.results.length),(0,n.h)("span",{class:["fas fa-angle-up",{disabled:0===this.results.length}],onClick:()=>this.goToSearchEvent(this.current+1)}),(0,n.h)("span",{class:["fas fa-angle-down",{disabled:0===this.results.length}],onClick:()=>this.goToSearchEvent(this.current-1)}),(0,n.h)("span",{class:"fas fa-bars",onClick:()=>this.localRenderBox=!this.localRenderBox}),(0,n.h)("span",{class:"fas fa-times",onClick:()=>this.closeSearchBar()})]),this.localRenderBox?(0,n.h)("div",{class:["search-results-box",{hidebox:this.hideResultsBox}]},this.results.map(((e,t)=>(0,n.h)("div",{class:["item",{active:t===this.current}],onClick:()=>this.goToSearchEvent(t)},this.toDisplay(e))))):null])}}},7620:function(e,t,i){"use strict";var n=i(6252),s=i(5089),a=i(2229);t.Z={name:"shop-overlay",props:["events","vertical","timelinelength","timelinedates","daysize","direction"],data:function(){return{initialRender:!1,timelineItems:[],isOpen:!1}},created:function(){},computed:{rdte:function(){return[0,1].filter((e=>e!==this.direction))[0]}},methods:{open:function(){this.isOpen=!0},close:function(){this.isOpen=!1},checkRender:function(){},dateDiff:function(e,t){if(!e||!t)return 1;let i=e,n=t;if(i>n){var s=i;i=n,n=s}return(new Date(n).getTime()-new Date(i).getTime())/864e5},getEvents:function(){}},render:function(){return(0,n.h)("section",{},[(0,n.h)("div",{class:"tshop-overlay-label noselect",onClick:()=>this.isOpen?this.close():this.open()},[(0,n.h)("div",{style:"font-size: 20px;line-height: 40px;"+(this.vertical?"height: 100vh;":"width: 100vw")},this.isOpen?[(0,n.h)("i",{class:["fas",this.vertical?"fa-angle-double-right":"fa-angle-double-down"]}),(0,n.h)("span","Hide shop rotations"),(0,n.h)("i",{class:["fas",this.vertical?"fa-angle-double-right":"fa-angle-double-down"]})]:[(0,n.h)("i",{class:["fas",this.vertical?"fa-angle-double-left":"fa-angle-double-up"]}),(0,n.h)("span","View shop rotations"),(0,n.h)("i",{class:["fas",this.vertical?"fa-angle-double-left":"fa-angle-double-up"]})])]),(0,n.h)("div",{class:["glass-container shop-timeline",{open:this.isOpen}],style:{[this.vertical?"height":"width"]:"100%"}},[this.events.map(((e,t)=>(0,n.h)("div",{class:"shop-row"},[e.map((e=>e.dt[1]?(0,n.h)("div",{class:"shop-rotation",style:{[this.vertical?"height":"width"]:this.dateDiff(e.dt[this.direction],e.dt[this.rdte],this.direction)*this.daysize+"px",[this.vertical?"top":"left"]:this.dateDiff(e.dt[this.direction],this.timelinedates[1!==this.direction?this.timelinedates.length-1:0])*this.daysize+"px"}},(e.a||e.c).map((e=>(0,n.wy)((0,n.h)("img",{src:0===t?"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/item_arti/icon_art0000.png":"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/face/c0000_s.png","data-src":0===t?this.$store.getters.getArtifactIcon(e.id):this.$store.getters.getHeroIcon(e.id),alt:"",crossorigin:"anonymous",SameSite:"Lax"}),[[a.ZP],[s.Z,()=>0===t?this.$store.getters.getArtifactName(e.id):this.$store.getters.getHeroName(e.id)]])))):null))])))])])}}},1208:function(e,t,i){"use strict";i(560);var n,s=i(6252),a=i(2122),o=i(5089),r=i(2229),h=i(6235),c=i(5561),l=i(6909),u=i(2784),d=i(3241);t.Z={name:"timeline-main",components:{},props:["standalone"],data:function(){return{VERSION:1.15,events:[],timelineItems:[],vertical:!1,daySize:20,direction:0,today:"",openBanner:!1,openChangelog:!1,covenantShop:[],galaxyShop:[],powderShop:[],balance:[]}},beforeCreate:function(){},created:function(){this.toggleLoading(!0,"downloading"),Promise.all([(0,u.Z)("./data/timeline/covenant.json").catch((()=>"[]")),(0,u.Z)("./data/timeline/mystic.json").catch((()=>"[]")),this.$store.dispatch("GET_HERO_DB"),this.$store.dispatch("GET_ARTIFACT_DB")]).then((e=>{this.events=this.compatibilityModeDates([].concat(JSON.parse(e[0]),JSON.parse(e[1]))),this.today=(new Date).toISOString().substr(0,10),this.$nextTick((()=>{this.toggleLoading(!1)})),Promise.all([(0,u.Z)("./data/timeline/powder-shop.json").catch((()=>"[]")),(0,u.Z)("./data/timeline/galaxy-coin-shop.json").catch((()=>"[]")),(0,u.Z)("./data/timeline/covenant-coin-shop.json").catch((()=>"[]"))]).then((e=>{this.powderShop=this.compatibilityModeDates(JSON.parse(e[0])),this.galaxyShop=this.compatibilityModeDates(JSON.parse(e[1])),this.covenantShop=this.compatibilityModeDates(JSON.parse(e[2]))}))}))},beforeMount:function(){},mounted:function(){n=this.$refs.TIMELINE_CONTAINER,n.addEventListener("wheel",this.horizionatlScroll)},beforeUnmount:function(){n.removeEventListener("wheel",this.horizionatlScroll),n=null},watch:{timelineDates:function(){this.timelineItems=this.buildRenderArray(),this.$nextTick((()=>{this.$refs[this.today].scrollIntoView({behavior:"auto",block:"center",inline:"center"})}))},direction:function(){this.loading().then((()=>{this.timelineItems=this.buildRenderArray(),this.$nextTick((()=>{this.$refs[this.today].scrollIntoView({behavior:"auto",block:"center",inline:"center"})}))}))},vertical:function(e){this.direction=e?1:0,this.$nextTick((()=>{this.$refs[this.today].scrollIntoView({behavior:"auto",block:"center",inline:"center"})}))}},computed:{mobile:function(){return this.$store.state.isMobile},timelineDates:function(){for(var e=[this.today],t=0;t<this.events.length;t++){let n=this.events[t].dt;if(n)for(var i=0;i<n.length;i++)e.includes(n[i])||e.push(n[i])}return e.sort(((e,t)=>e<t?1:e===t?0:-1)),e},timelinePixelLength:function(){return this.dateDiff(this.timelineDates[0],this.timelineDates[this.timelineDates.length-1])}},methods:{compatibilityModeDates(e){var t=e=>e<10?"0"+e:e;return e.forEach((e=>{e.dt=(e.dt||[]).map((e=>{var i=new Date(e);return i.getUTCFullYear()+"-"+t(i.getUTCMonth()+1)+"-"+t(i.getUTCDate())}))})),e},home:function(){this.$store.commit("toggleMainMenu")},toggleLoading:function(e,t){this.$store.commit("loading",e,t)},loading:function(e){return this.toggleLoading(!0,e),new Promise((e=>{setTimeout((()=>{e(),this.$nextTick((()=>{this.$store.commit("loading",!1)}))}),0)}))},getHero:function(e){return this.$store.getters.getHero(e)},getHeroName:function(e){return this.$store.getters.getHeroName(e)},getHeroIcon:function(e){return this.$store.getters.getHeroIcon(e)},getArtifact:function(e){return this.$store.getters.getArtifact(e)},getArtifactName:function(e){return this.$store.getters.getArtifactName(e)||""},getArtifactIcon:function(e){return this.$store.getters.getArtifactIcon(e)},showSearchBar:function(){this.$refs.ctrlf.openSearchBar()},searchFunction:function(e){const t=this.events;if(!t.length||!e)return[];const i=new RegExp("(\\b|-)"+e,"i");var n=[["Banner",this.events],["Powder Shop",this.powderShop],["Galaxy Coin",this.galaxyShop],["Covenant Coin",this.covenantShop]].map((e=>e[1].filter((e=>!(!e.name||!i.test(e.name))||(!(!e.c||!e.c.some((e=>i.test(this.getHeroName(e.id)))))||(!!(e.a&&e.a.length&&e.a.some((e=>i.test(this.getArtifactName(e.id)))))||void 0)))).map((t=>("Banner"===e[0]?(t.handler=()=>this.$refs["shop-timeline"].close(),t.resultName=t.c?t.c.map((e=>this.getHeroName(e.id))).join(", "):e[0]):(t.handler=()=>this.$refs["shop-timeline"].open(),t.resultName=e[0]),t))))).flat().sort(((e,t)=>e.dt[0]<t.dt[0]?1:e.dt[0]===t.dt[0]?0:-1));return n},searchToDisplay:function(e){return e.dt[0]+" - "+e.resultName},goToSearchResult:function(e){if(e){e.handler&&e.handler();var t=this.dateDiff(e.dt[this.direction],this.timelineDates[1!==this.direction?this.timelineDates.length-1:0]),i={top:0,left:0,behavior:"smooth"};this.vertical?i.top=t*this.daySize:i.left=t*this.daySize+100-window.innerWidth/2,n.scrollTo(i)}},goToDate:function(e){this.$refs[e].scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},horizionatlScroll:function(e){const t=n;if(this.vertical)return;const i=e.deltaY<0&&t.scrollLeft>0,s=e.deltaY>0&&t.scrollLeft<t.scrollWidth-t.clientWidth;(i||s)&&(t.scrollLeft+=e.deltaY)},onContextMenu:function(e){this.$contextmenu(e,[{name:"Direction",children:[{class:0===this.direction?"fa fa-check":"",name:"Normal",handler:()=>this.direction=0},{class:1===this.direction?"fa fa-check":"",name:"Reverse",handler:()=>this.direction=1}]},{name:"Orientation",children:[{class:this.vertical?"":"fa fa-check",name:"Horizontal",handler:()=>this.vertical=!1},{class:this.vertical?"fa fa-check":"",name:"Vertical",handler:()=>this.vertical=!0}]},{name:"Change Day Size",children:[15,20,30,40,50].map((e=>({class:this.daySize===e?"fa fa-check":"",name:e,handler:()=>this.setDaySize(e)})))},{class:"fas fa-map-marker-alt",name:this.$t("strings.scroll_to_today"),handler:()=>this.goToDate(this.today)},{class:"fa fa-search",name:this.$t("strings.search"),handler:()=>this.showSearchBar()}])},dateDiff:function(e,t){if(!e||!t)return 1;let i=e,n=t;if(i>n){var s=i;i=n,n=s}return(new Date(n).getTime()-new Date(i).getTime())/864e5},formatDate:function(e,t){if(!e)return"";var i=e.split(/-/g),n=i[2],s=["January","February","March","April","May","June","July","August","September","October","November","December"][Number(i[1])-1],a=i[0];return Number(n)+" "+s.slice(0,3)+" "+a+(t?" - "+t:"")},dayGraphSize:function(e,t){return this.daySize*this.dateDiff(e,t)},setDaySize:function(e){this.loading().then((()=>{this.daySize=e,this.timelineItems=this.buildRenderArray()}))},buildRenderArray:function(){const e=[0,1][this.direction||0],t=[0,1].filter((t=>t!==e))[0],i=(e,t)=>({date:e,size:1===this.direction?this.dayGraphSize(t,e):this.dayGraphSize(e,t),m:[],n:[],e:[]});var n=this.events,s=this.timelineDates.slice().reverse(),a=[];1===this.direction&&(s=s.reverse());for(var o=0;o<s.length;o++){a[o]||(a[o]=i(s[o],s[o+1]));for(var r=0;r<n.length;r++){var h=-1,c=n[r].dt[e]||n[r].dt[t],l="event"===n[r].type?"e":"mystic"===n[r].type?"m":"n";if(s[o]===c){n[r].dt[1]<this.today?n[r].bTooltip='Ended: <span style="color: #ff1919">'+(0,d.cX)(n[r].dt[1],this.today)+"</span> ago":n[r].dt[0]>this.today?n[r].bTooltip='Starts: <span style="color: green">'+(0,d.cX)(n[r].dt[0],this.today)+"</span>":n[r].bTooltip='Started: <span style="color: green">'+(0,d.cX)(n[r].dt[0],this.today)+'</span> ago<br>Ends: <span style="color: #ff1919">'+(0,d.cX)(n[r].dt[1],this.today)+"</span>",n[r].duration=this.dateDiff(n[r].dt[0],n[r].dt[1]),n[r].bannerClass="","limited"===n[r].type?n[r].bannerClass="limited":"mystic"===n[r].type?n[r].bannerClass="mystic":n[r].c&&n[r].c[0]&&(n[r].bannerClass=this.getHero(n[r].c[0].id).attribute),n[r].bannerSize=a[o].size-10;for(var u=0;u<a[o][l].length;u++)if(!a[o][l][u]){a[o][l][u]=n[r],h=u;break}-1===h&&(a[o][l].push(n[r]),h=a[o][l].length-1);var g=s.indexOf(n[r].dt[t])||1;for(u=o;u<g;u++)a[u]||(a[u]=i(s[u],s[u+1])),u!=o&&(n[r].bannerSize+=a[u].size),a[u][l][h]=n[r]}}}return a}},render:function(){return(0,s.h)("div",{style:"height: inherit",onContextmenu:this.onContextMenu},[this.openChangelog?(0,s.h)("div",{class:"center-modal",style:"position: absolute; z-index: 10;",onClick:e=>e.target===e.currentTarget?this.openChangelog=!this.openChangelog:null},[(0,s.h)("div",{class:"flat-modal glass-container-2",style:"padding: 10px; color: var(--font-color); overflow: auto;"},[(0,s.h)(a.Z,{path:"/views/timeline/",style:"height: auto;"})])]):null,(0,s.h)(c.Z,{mobile:this.mobile,options:[{title:this.$t("strings.search"),class:"fa fa-search",click:"search"},{title:this.$t("strings.scroll_to_today"),class:"fas fa-map-marker-alt",click:"goToday"},{title:this.$t("strings.vertical_toggle"),class:"fa fa-mobile "+(this.vertical?"fa-rotate-90":""),click:"vertical"},{title:this.$t("strings.changelog"),class:"fa fa-history",click:"changelog"},this.standalone?{}:{title:this.$t("strings.home"),class:"fa fa-home",click:"home"}],onSearch:()=>this.showSearchBar(),onGoToday:()=>this.goToDate(this.today),onHome:()=>this.home(),onVertical:()=>this.loading().then((()=>this.vertical=!this.vertical)),onChangelog:()=>this.openChangelog=!this.openChangelog,onLanguage:this.$localePicker}),(0,s.h)(l.Z,{ref:"ctrlf",key:"ctrlf-timeline",mobile:this.mobile,events:this.events,toDisplay:this.searchToDisplay,searchFunction:this.searchFunction,onEvent:this.goToSearchResult}),(0,s.h)("div",{ref:"TIMELINE_CONTAINER",style:"height: inherit; width: inherit; overflow: auto;"},[(0,s.h)("ul",{class:this.vertical?"vtimeline":"timeline"},[(0,s.h)(h.Z,{ref:"shop-timeline",events:[this.powderShop,this.galaxyShop,this.covenantShop],vertical:this.vertical,timelinedates:this.timelineDates,daysize:this.daySize,timelinelength:this.timelinePixelLength*this.daySize,direction:this.direction}),this.timelineItems.map(((e,t)=>(0,s.h)("li",{ref:e.date,key:e.date,class:{today:this.today===e.date},index:t,"data-date":this.$d(e.date,"short"),id:e.date,style:{[this.vertical?"height":"width"]:e.size+"px"}},[["m","n"].map((t=>(0,s.h)("section",{class:"wrapper-"+t,key:"wrapper-key-"+e.date+t},[e[t].map((t=>t.dt[this.direction||0]===e.date?(0,s.wy)((0,s.h)("div",{ref:t.id+"-"+e.date,key:t.id,class:"banner "+t.bannerClass,tabindex:0,"data-hero":t.c?t.c[0].id:"null",style:{[this.vertical?"height":"width"]:t.bannerSize+"px"}},[t.c?(0,s.h)("div",{class:"icon_container"},t.c.map((e=>(0,s.h)("div",{class:{isnew:e.new}},[(0,s.wy)((0,s.h)("img",{"data-src":this.getHeroIcon(this.getHero(e.id).id),src:"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/face/c0000_s.png",alt:"",crossorigin:"anonymous",SameSite:"Lax"}),[[r.ZP]])])))):null,t.name?(0,s.h)("span",{class:"banner-description"},t.name):null]),[[o.Z,{value:t.bTooltip}]]):(0,s.h)("div",{class:"banner dummy"})))])))])))])])])},renderError:function(){}}},3241:function(e,t,i){"use strict";function n(e,t){var i=new Date(new Date(e).toISOString().substr(0,10));t||(t=(new Date).toISOString().substr(0,10));var n=new Date(t);if(i>n){var s=i;i=n,n=s}var a=i.getFullYear(),o=a%4===0&&a%100!==0||a%400===0?29:28,r=[31,o,31,30,31,30,31,31,30,31,30,31],h=n.getFullYear()-a,c=n.getMonth()-i.getMonth();c<0&&(h--,c+=12);var l=n.getDate()-i.getDate();return l<0&&(c>0?c--:(h--,c=11),l+=r[i.getMonth()]),h+"Y "+c+"M "+l+"D"}function s(e,t){if(!e||!t)return 1;isNaN(e)&&(e=new Date(e).getTime()),isNaN(t)&&(t=new Date(t).getTime());let i=e,n=t;if(i>n){var s=i;i=n,n=s}return(n-i)/864e5}i.d(t,{OW:function(){return o},Pg:function(){return s},R6:function(){return c},cX:function(){return n},uG:function(){return h},vr:function(){return r}});var a=new Date("2022-09-29").getTime();function o(e,t=a){return!(Math.round(s(e,t))%14)}function r(e,t=4){const i=e.getUTCDay(),n=t>i?-7+t-i:-i+t;return new Date(e.getTime()+24*n*60*60*1e3)}function h(e,t=0,i){if(e instanceof Date||(e=new Date(e)),i&&e.setUTCHours(...i),void 0===t||isNaN(t))return console.error("Missing target day."),null;t=Math.min(t,6);var n=new Date(e),s=new Date(e);while(n.getUTCDay()!=t)n.setUTCDate(n.getUTCDate()+1);while(s.getDay()!=t)s.setUTCDate(s.getUTCDate()-1);Math.abs(e-n)<Math.abs(e-s)?e.setTime(n):e.setTime(s)}function c(e,t){var i=!1,n=new Date(new Date(e).toISOString().substr(0,10));t||(t=(new Date).toISOString().substr(0,10));var s=new Date(t);if(n>s){i=!0;var a=n;n=s,s=a}var o=n.getFullYear(),r=o%4===0&&o%100!==0||o%400===0?29:28,h=[31,r,31,30,31,30,31,31,30,31,30,31],c=s.getFullYear()-o,l=s.getMonth()-n.getMonth();l<0&&(c--,l+=12);var u=s.getDate()-n.getDate();return u<0&&(l>0?l--:(c--,l=11),u+=h[n.getMonth()]),[c,l,u,i]}},6163:function(e,t,i){"use strict";function n(e,t){var i=null;return function(){clearTimeout(i);var n=arguments,s=this;i=setTimeout((function(){e.apply(s,n)}),t)}}function s(e,t){var i=!1;return function(){i||(e.apply(this,arguments),i=!0,setTimeout((function(){i=!1}),t))}}function a(e=!1){let t=window.location.href.split("?")[0],i=t.split("#"),n=e&&"#"===e.href.charAt(0)?2:1;while(i.length>n)i.pop();return i.join("#")}i.d(t,{Ds:function(){return n},P2:function(){return s},fA:function(){return a}})},2122:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(6252),s={name:"ChangelogComponent",props:["path"],data:function(){return{changelog:[],normalizedPath:this.path,changelogLang:"",changelogFetching:!1,changelogFailed:!1,isVisible:!1,observer:null}},created:function(){while("."===this.normalizedPath.charAt(0)||"/"===this.normalizedPath.charAt(0))this.normalizedPath=this.normalizedPath.substring(1);this.observer=new IntersectionObserver(this.onElementObserved,{root:this.$el,threshold:0})},beforeUnmount(){this.observer.disconnect()},mounted:function(){this.observer.observe(this.$refs.changelog)},computed:{lang:function(){return this.$i18n.locale}},watch:{lang:function(){this.changelog=[],!this.changelogFetching&&this.visible&&this.getChangelog()}},methods:{onElementObserved(e){e.forEach((({isIntersecting:e})=>{e?(this.visible=!0,this.changelogFetching||this.changelogFailed||this.changelog.length&&this.changelogLang===this.$i18n.locale||this.getChangelog()):this.visible=!1}))},getChangelog:function(){return this.changelogFailed=!1,this.changelogFetching=!0,Promise.all([i(8080)(`./${this.normalizedPath}changelog/${this.$i18n.locale}.json`).catch((async()=>await i(7630)(`./${this.normalizedPath}changelog/en.json`)))]).then((([e])=>{var t=e.default||[];return this.changelog=t,Promise.resolve(e)})).catch((e=>(this.changelogFailed=e,Promise.resolve(!1)))).then((()=>{this.changelogLang=this.$i18n.locale,this.changelogFetching=!1}))}},render:function(){return(0,n.h)("div",{ref:"changelog",class:"changelog-wrapper"},[(0,n.h)("h2",{class:"title"},[this.$t("strings.changelog"),":"]),this.changelog.length?this.changelog.map((e=>(0,n.h)("section",{class:"changelog-section"},[(0,n.h)("header",{class:"changelog-sec-header"},[(0,n.h)("span",{class:"changelog-badge version"},e[0].toFixed(2)),(0,n.h)("h2",{class:"changelog-header-title"},e[1])]),e[2].map((e=>(0,n.h)("ul",{},[(0,n.h)("li",{},[(0,n.h)("div",{class:"changelog-badge "+e[0]},e[0]),(0,n.h)("div",{class:"changelog-description flex-fill",innerHTML:e[1]})])])))]))):(0,n.h)("div",{style:"text-align: center"},[this.changelogFetching?(0,n.h)("div",{class:"fa fa-circle-notch fa-spin"}):this.changelogFailed?(0,n.h)("div",{},this.changelogFailed):this.changelog&&this.changelog.length?null:(0,n.h)("div",{},"Changelog is empty")])])}};const a=s;var o=a},6909:function(e,t,i){"use strict";var n=i(651);i(5755);const s=n.Z;t.Z=s},6235:function(e,t,i){"use strict";var n=i(1540),s=(i(5021),i(3744));const a=(0,s.Z)(n.Z,[["__scopeId","data-v-3762c516"]]);t.Z=a},4263:function(e,t,i){"use strict";i.r(t);var n=i(8159),s=i(3744);const a=(0,s.Z)(n.Z,[["__scopeId","data-v-e94e0646"]]);t["default"]=a},5755:function(e,t,i){"use strict";i(513)},5021:function(e,t,i){"use strict";i(9235)},651:function(e,t,i){"use strict";i.d(t,{Z:function(){return n.Z}});var n=i(6771)},1540:function(e,t,i){"use strict";i.d(t,{Z:function(){return n.Z}});var n=i(7620)},8159:function(e,t,i){"use strict";i.d(t,{Z:function(){return n.Z}});var n=i(1208)},8080:function(e,t,i){var n={"./views/camping-simulator/changelog/en.json":[5502,9402],"./views/tierlist-maker-sub/changelog/en.json":[5279,2317],"./views/tierlist-maker/changelog/en.json":[419,2057],"./views/timeline/changelog/en.json":[7467,9483],"./views/timeline2 - Copia/changelog/en.json":[1602,36],"./views/timeline2/changelog/en.json":[8370,9393]};function s(e){if(!i.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],s=t[0];return i.e(t[1]).then((function(){return i.t(s,19)}))}s.keys=function(){return Object.keys(n)},s.id=8080,e.exports=s},7630:function(e,t,i){var n={"./views/camping-simulator/changelog/en.json":[5502,9402],"./views/tierlist-maker-sub/changelog/en.json":[5279,2317],"./views/tierlist-maker/changelog/en.json":[419,2057],"./views/timeline/changelog/en.json":[7467,9483],"./views/timeline2 - Copia/changelog/en.json":[1602,36],"./views/timeline2/changelog/en.json":[8370,9393]};function s(e){if(!i.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],s=t[0];return i.e(t[1]).then((function(){return i.t(s,19)}))}s.keys=function(){return Object.keys(n)},s.id=7630,e.exports=s}}]);