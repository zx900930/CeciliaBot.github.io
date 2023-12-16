"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[5117],{2559:function(e,a,r){r.d(a,{Z:function(){return k}});var n=r(8439),s=r(8622),t=r(9371);const l="epic_catalyst",i="catalyst",o="speed",c="cri",_="cri_dmg",m="acc",d="res",u="def_rate",g="max_hp",f="max_hp_rate",h="att",p="att_rate",v={[p]:.03,[f]:.03,[u]:.03,[o]:2,[c]:.04,[_]:.05,[m]:.06,[d]:.06};var b={warrior:{ram:[u,f,null,o,u,f],bull:[p,_,null,c,p,_],twins:null,crab:[f,u,null,f,f,u],lion:[p,p,null,c,p,p],maiden:[m,c,null,o,m,c],scales:[p,f,null,u,p,f],scorpion:[f,p,null,u,f,p],archer:[p,c,null,o,p,c],goat:[f,f,null,u,f,f],waterbearer:[m,o,null,f,m,o],fish:[u,d,null,d,u,d]},knight:{ram:[f,m,null,o,f,m],bull:[p,p,null,f,p,p],twins:[o,c,null,p,o,c],crab:[f,u,null,f,f,u],lion:[p,p,null,c,p,p],maiden:null,scales:[f,u,null,d,f,u],scorpion:[f,f,null,p,f,f],archer:[f,o,null,u,f,o],goat:[u,d,null,u,u,d],waterbearer:[u,f,null,c,u,f],fish:[u,d,null,f,u,d]},assassin:{ram:[p,o,null,c,p,o],bull:[p,p,null,o,p,p],twins:[p,c,null,m,p,c],crab:null,lion:[p,p,null,c,p,p],maiden:[f,m,null,o,f,m],scales:[p,_,null,o,p,_],scorpion:[p,f,null,c,p,f],archer:[p,c,null,o,p,c],goat:[m,o,null,m,m,o],waterbearer:[o,c,null,c,o,c],fish:[m,c,null,o,m,c]},ranger:{ram:null,bull:[p,p,null,c,p,p],twins:[m,p,null,p,m,p],crab:null,lion:[p,f,null,c,p,f],maiden:[p,p,null,o,p,p],scales:[c,p,null,_,c,p],scorpion:[p,c,null,f,p,c],archer:[o,o,null,p,o,o],goat:[o,m,null,m,o,m],waterbearer:[p,c,null,o,p,c],fish:[u,f,null,o,u,f]},mage:{ram:[m,c,null,p,m,c],bull:[d,m,null,o,d,m],twins:[p,m,null,m,p,m],crab:[p,p,null,c,p,p],lion:[o,p,null,p,o,p],maiden:[p,o,null,c,p,o],scales:null,scorpion:[c,p,null,_,c,p],archer:[p,c,null,o,p,c],goat:null,waterbearer:[p,m,null,f,p,m],fish:[o,c,null,c,o,c]},manauser:{ram:null,bull:[o,d,null,d,o,d],twins:[d,f,null,d,d,f],crab:[f,f,null,u,f,f],lion:null,maiden:[o,m,null,u,o,m],scales:[f,o,null,u,f,o],scorpion:[m,f,null,m,m,f],archer:[o,d,null,m,o,d],goat:null,waterbearer:[p,o,null,p,p,o],fish:[f,u,null,d,f,u]}},y={5:[[["rune",10]],[["rune",15],["greater",2]],[["rune",20],["greater",10]],[["greater",10],["epic",2]],[["epic",6],[i,15]],[["epic",10],[l,10]]],4:[[["rune",8]],[["rune",12],["greater",2]],[["rune",17],["greater",8]],[["greater",8],["epic",1]],[["epic",5],[i,12]],[["epic",8],[l,8]]],3:[[["rune",5]],[["rune",9]],[["rune",12,"greater",6]],[["greater",15]],[["epic",4],[i,9]],[["epic",6],[l,6]]]};function w(e,a,r){var t,o=e[0],c="",_="";if(o===l)o=r[2],t=s.Z[o]||{},c=t.name,_=t.src;else if(o===i)o=r[1],t=s.Z[o]||{},c=t.name,_=t.src;else{var m=["","rune","greater","epic"].indexOf(o);o=a?"ma_rune"+a+m:"ma_rune{{0}}"+m,c=["","Lesser ","Greater ","Epic "][m]+"Rune",_=n.cK+"/item/"+o+".png"}return{id:o,item:o,name:c,src:_}}function k(e,a,r,n){if(!e||!a||!r)return console.error("Not enough data to calculate awakening tree."),null;var s=b[a][r];if(!s)return null;const l=(0,t.y)(r);return s.map(((a,r)=>{var s=a?[{stat:a,value:v[a]*(r>2?2:1)}]:[];return s=s.concat([[h,r>2?30:20],[g,r>2?80:60]].map((e=>({stat:e[0],value:e[1]})))),{costs:y[e][r].map((e=>{let a=w(e,n,l);return{id:a.it,item:a.item,name:a.name,src:a.src,count:e[1]}})),stats:s}}))}},1163:function(e,a,r){r.d(a,{Z:function(){return t}});const n=["hp","atk","def","spd"],s=["chc","chd","eff","efr","dac","cri_res","dodge","hit_chance"];function t(e){if(!e||!e.stats)return console.error("Missing stats for Hero Stats Calculator"),{hp:0,atk:0,def:0,spd:0,chc:0,chd:0,eff:0,efr:0,dac:0};const{int:a,bra:r,fai:t,des:l}=e.stats,{level:i,rarity:o,imprint:c,awakened:_,skills:m,specialty_tree:d,ex_equip:u,speedSet:g}=e,f=Math.max(Math.ceil(i/10),o);var h={hp:(50+1.4*a)*(i/3+1)*(1+.075*(f-1)),atk:.6*r*(i/6+1)*(1+.075*(f-1)),def:(30+.3*t)*(i/8+1)*(1+.075*(f-1)),spd:60+l/1.6,eff:0,efr:0,chc:.15,chd:1.5,dac:.03,cri_res:0,dodge:0,hit_chance:1};n.forEach((e=>h[e]=Math.floor(h[e])));var p={};function v(e){return p[e]||0}function b(e,a){e&&(p[e]?p[e]+=a||0:p[e]=a||0)}function y(){h.hp=h.hp*(1+v("max_hp_rate"))+v("max_hp"),h.atk=h.atk*(1+v("att_rate"))+v("att"),h.def=h.def*(1+v("def_rate"))+v("def"),h.spd=h.spd+v("speed"),h.eff=h.eff+v("acc"),h.efr=h.efr+v("res"),h.chc=h.chc+v("cri"),h.chd=h.chd+v("cri_dmg"),h.dac=h.dac+v("coop"),h.cri_res=h.cri_res+v("cri_res"),h.dodge=h.dodge+v("dodge"),h.hit_chance=h.hit_chance+v("hit_chance"),p={}}return _&&_.slice(0,Math.floor(i/10)).forEach((e=>{e.stats.forEach((e=>{b(e.stat,e.value)}))})),d&&d.forEach((e=>{e&&(e.enhancements||[]).forEach((e=>{"stat"===e.type&&e.stat&&b(e.stat,e.value)}))})),y(),g&&b("speed",.25*h.spd),c&&b(c.type,c?.grades?.SSS),u&&i>=50&&f>4&&_&&u.forEach((e=>{e.forEach(((e,a)=>{b(e.type,e.value*(0===a?2:1))}))})),m&&Array.isArray(m)&&m.forEach((e=>{e[0].forEach((e=>{b(e.type,e.value)})),e[1].forEach((e=>{e.forEach((e=>{b(e.type,e.value)}))}))})),y(),n.forEach((e=>h[e]=Math.floor(h[e]||0))),s.forEach((e=>h[e]=Number(h[e]||0).toFixed(3))),h}},1426:function(e,a,r){r.d(a,{Z:function(){return s}});var n={dev:{max_hp_g3_s4:120,att_g3_s4:24,def_g3_s4:12,def_rate_g4_s4:.024,def_rate_g4_s2:.029,def_rate_g5_s4:.036,def_rate_g5_s2:.043,att_rate_g4_s2:.029,att_rate_g4_s4:.024,att_rate_g5_s2:.043,att_rate_g5_s4:.036,cri_g4_s2:.043,cri_g4_s4:.036,cri_g5_s2:.058,cri_g5_s4:.048,speed_g5_s4:4,speed_g4_s4:3,speed_g4_s2:4,speed_g3_s4:2,max_def_rate_g4_s2:.029,max_hp_rate_g4_s4:.024,max_hp_rate_g4_s2:.029,max_hp_rate_g5_s4:.036,max_hp_rate_g5_s2:.043,acc_g4_s2:.043,acc_g4_s4:.036,acc_g5_s2:.058,acc_g5_s4:.048,res_g4_s2:.043,res_g4_s4:.036,res_g5_s2:.058,res_g5_s4:.048,coop_g4_s4:.007,coop_g5_s2:.009,coop_g5_s4:1},self:{max_hp_g3:180,att_g3:36,def_g3:18,res_g3:.045,max_hp_rate_g5:.06,max_hp_rate_g4:.04,def_rate_g4:.04,def_rate_g5:.06,att_rate_g4:.04,att_rate_g5:.06,cri_g3:.028,cri_g4:.042,cri_g5:.056,res_g4:.068,res_g5:.09,acc_g5:.09,acc_g4:.068,acc_g3:.045,coop_g3:.009,coop_g4:.014,coop_g5:.02}};function s(e){if(e){var a=["Z","D","C","B","A","S","SS","SSS"];a.splice(0,(e.rarity||5)-2);var r,s={self_devotion:{},devotion:{}},t=e.devotion?.slots?.filter((e=>0!=e)).length;return e.devotion&&(r=n.dev[e.devotion?.type+"_g"+e.rarity+"_s"+t])&&a.forEach(((a,n)=>{s.devotion[a]=r+n*(r/2),"speed"===e.devotion?.type&&(s.devotion[a]=Math.floor(s.devotion[a]))})),e.self_devotion&&(r=n.self[e.self_devotion?.type+"_g"+e.rarity])&&a.forEach(((a,n)=>{s.self_devotion[a]=r+n*(r/2),"speed"===e.devotion?.type&&(s.devotion[a]=Math.floor(s.devotion[a]))})),s}}},8622:function(e,a,r){var n=r(8439);function s(e){return n.cK+"/item/"+e+".png"}a.Z={"ancient-creature-nucleus":{name:"Ancient Creature Nucleus",id:"ma_golem_es",src:s("ma_golem_es")},"black-curse-powder":{name:"Black Cursed Powder",id:"ma_powder_es",src:s("ma_powder_es")},"blazing-soul":{name:"Blazing Soul",id:"ma_queen_es",src:s("ma_queen_es")},"demon-blood-gem":{name:"Demon Blood Gem",id:"ma_angraf_es",src:s("ma_angraf_es")},"dragons-wrath":{name:"Dragon's Wrath",id:"ma_wyvern_es",src:s("ma_wyvern_es")},"fighter-medal":{name:"Fighter Medal",id:"ma_insignia_es",src:s("ma_insignia_es")},"fused-nerve":{name:"Fused Nerve",id:"ma_chimaera_es",src:s("ma_chimaera_es")},"horn-of-desire":{name:"Horn of Desire",id:"ma_demont_es",src:s("ma_demont_es")},"mercenarys-medicine":{name:"Mercenary's Medicine",id:"ma_hired_es",src:s("ma_hired_es")},"nightmare-mask":{name:"Nightmare Mask",id:"ma_dreamerk_es",src:s("ma_dreamerk_es")},"reingar-student-id":{name:"Reingar Student ID",id:"ma_raingar_es",src:s("ma_raingar_es")},"the-heart-of-hypocrisy":{name:"The Heart of Hypocrisy",id:"ma_mecagolem_es",src:s("ma_mecagolem_es")},"archers-vision":{name:"Archer's Vision",id:"ma_bowman_es",src:s("ma_bowman_es")},"baby-mouse-insignia":{name:"Baby Mouse Insigna",id:"ma_rodent_es",src:s("ma_rodent_es")},"blazing-rage":{name:"Blazing Rage",id:"ma_hatchling_es",src:s("ma_hatchling_es")},"blessing-of-orbis":{name:"Blessing of Orbis",id:"ma_nature_es",src:s("ma_nature_es")},"blood-flaked-bone":{name:"Blood Flaked Bone",id:"ma_bone_es",src:s("ma_bone_es")},"cold-look":{name:"Cold Look",id:"ma_demonr_es",src:s("ma_demonr_es")},"cursed-ashes":{name:"Cursed Ashes",id:"ma_candle_es",src:s("ma_candle_es")},"dream-time-circuit":{name:"Dream Time Circuit",id:"ma_dreamer_es",src:s("ma_dreamer_es")},"erikion-carapace":{name:"Erikion Carapace",id:"ma_carapace_es",src:s("ma_carapace_es")},"eternal-forest-dust":{name:"External Forest Dust",id:"ma_entree_es",src:s("ma_entree_es")},"flame-of-soul":{name:"Flame of Soul",id:"ma_banshee_es",src:s("ma_banshee_es")},"leather-sheath":{name:"Leather Sheath",id:"ma_swordman_es",src:s("ma_swordman_es")},"mysterious-flash":{name:"Mysterious Flash",id:"ma_gem_es",src:s("ma_gem_es")},"order-of-the-shield-insignia":{name:"Order of the Shield Insigna",id:"ma_shield_es",src:s("ma_shield_es")},"path-power-loop":{name:"Path Power Loop",id:"ma_meca_es",src:s("ma_meca_es")},"ring-of-glory":{name:"Ring of Glory",id:"ma_taranor_es",src:s("ma_taranor_es")},"sharp-spearhead":{name:"Sharp Spearhead",id:"ma_spearman_es",src:s("ma_spearman_es")},"shiny-enchantment":{name:"Shiny Enchantment",id:"ma_penguin_es",src:s("ma_penguin_es")},"slime-jelly":{name:"Slime Jelly",id:"ma_slime_es",src:s("ma_slime_es")},"small-sun-badge":{name:"Small Sun Badge",id:"ma_magician_es",src:s("ma_magician_es")},"special-alarm-loop":{name:"Special Alarm Loop",id:"ma_siren_es",src:s("ma_siren_es")},"strange-jelly":{name:"Strange Jelly",id:"ma_imp_es",src:s("ma_imp_es")},"twisted-fang":{name:"Twisted Fang",id:"ma_demon_es",src:s("ma_demon_es")},"ultra-fang":{name:"Ultra Fang",id:"ma_wolf_es",src:s("ma_wolf_es")},molagora:{name:"Molagora",id:"ma_moragora1",src:s("ma_moragora1")},gold:{name:"Gold",id:"token_gold",src:s("token_gold")},stigma:{name:"Stigma",id:"token_stigma",src:s("token_stigma")}}},9371:function(e,a,r){r.d(a,{y:function(){return t}});var n=r(8439);const s=[["path-power-loop","shiny-enchantment","ring-of-glory","baby-mouse-insigna","twisted-fang","flame-of-soul","mysterious-flash","sharp-spearhead","archers-vision","slime-jelly","leather-sheath","strange-jelly"],["blessing-of-orbis","blazing-rage","small-sun-badge","special-alarm-loop","ultra-fang","eternal-forest-dust","dream-time-circuit","erikion-carapace","cold-look","cursed-ashes","order-of-the-shield-insignia","blood-flaked-bone"],["nightmare-mask","horn-of-desire","fused-nerve","the-heart-of-hypocrisy","blazing-soul","demon-blood-gem","reingar-student-id","black-curse-powder","mercenarys-medicine","dragons-wrath","fighter-medal","ancient-creature-nucleus"]];function t(e){const a=n.Zp.indexOf(e);return-1===a?[]:[s[0][a],s[1][a],s[2][a]]}},3866:function(e,a,r){r.d(a,{Z:function(){return f}});var n=r(6252),s=r(3577),t=r(9963);const l={class:"relative",style:{"margin-right":"2.4em"}},i=["min","max","step"],o={class:"track"},c=(0,n._)("div",{class:"dot"},null,-1),_=[c];function m(e,a,r,c,m,d){return(0,n.wg)(),(0,n.iD)("div",{class:(0,s.C_)(["e7-range-input",{"disable-events":r.dragOnly}])},[(0,n._)("div",l,[(0,n.wy)((0,n._)("input",{class:"noselect",type:"range","onUpdate:modelValue":a[0]||(a[0]=e=>d.localValue=e),min:r.min,max:r.max,step:r.step},null,8,i),[[t.nr,d.localValue,void 0,{number:!0}]]),(0,n._)("div",o,[(0,n._)("div",{class:"progress",style:(0,s.j5)({width:d.positionPercentage})},null,4)]),(0,n._)("div",{class:"thumb",style:(0,s.j5)({left:d.positionPercentage})},_,4)])],2)}var d={name:"EpicSevenRange",props:{modelValue:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},dragOnly:{type:Boolean,default:!1}},computed:{localValue:{get(){return this.modelValue},set(e){return this.$emit("update:modelValue",e)}},positionPercentage(){return Math.round((this.localValue-this.min)/(this.max-this.min)*1e5)/1e3+"%"},steps(){var e=this.min,a=this.max;let r=(a-e)/this.step;return 0===e&&r++,r}}},u=r(3744);const g=(0,u.Z)(d,[["render",m]]);var f=g},171:function(e,a,r){r.d(a,{Z:function(){return d}});var n=r(6252),s=r(3577);const t={class:"page-path-title"},l=(0,n._)("span",null," / ",-1);function i(e,a,r,i,o,c){const _=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",t,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.path,(e=>((0,n.wg)(),(0,n.iD)("span",{key:e[1]},[(0,n.Wm)(_,{to:e[1],class:"router-restore"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e[0]),1)])),_:2},1032,["to"]),l])))),128)),(0,n.WI)(e.$slots,"default")])}const o={database:"Database",hero:"Heroes",artifacts:"Artifacts","hero-stats-sheet":"Hero Stats Table","voice-actors":"Voice Actors",buffs:"Buffs",common:"Common",debuffs:"Debuffs","official-info":"Official Links"};var c={props:{location:{type:String,default:""}},data(){return{path:[]}},created(){var e="",a=window.location.href.toLowerCase().split("#")[1].replace(/\?.*/,"").split("/").filter(((e,a)=>""!==e||0===a));a.splice(-1,1),this.path=a.map(((r,n)=>{var s=o[r];return s||(0===n?s="Home":n===a.length-1&&(s=this.current)),e+=r+"/",[s,e]}))}},_=r(3744);const m=(0,_.Z)(c,[["render",i]]);var d=m},222:function(e,a,r){r.d(a,{Z:function(){return c}});var n=r(6252);const s={class:"page-title-box flex flex-col"};function t(e,a){return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.WI)(e.$slots,"default")])}var l=r(3744);const i={},o=(0,l.Z)(i,[["render",t]]);var c=o},5849:function(e,a,r){r.d(a,{Z:function(){return _}});var n=r(6252);const s={style:{"border-bottom":"2px solid #614828","margin-top":"20px"}},t={class:"h-section-title-wrapper noselect"};function l(e,a){return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",t,[(0,n.WI)(e.$slots,"default")])])}var i=r(3744);const o={},c=(0,i.Z)(o,[["render",l]]);var _=c}}]);