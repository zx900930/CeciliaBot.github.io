"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[3271],{8921:function(){},5552:function(e,a){a.Z={emits:["update:modelValue"],inheritAttrs:!1,props:{modelValue:{},value:{},trueValue:{},falseValue:{},checked:Boolean,required:Boolean,color:String},data(){return{bindingAttrs:{}}},computed:{onValue(){return this.normalizeValue(this.value)||this.trueValue},checker(){return null!==this.modelValue&&(Array.isArray(this.modelValue)?this.modelValue.includes(this.value||this.trueValue):this.modelValue===(this.value||this.trueValue||!0))},model:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},created(){var e={listeners:{},attrs:{}};for(var a in this.$attrs)/^on/.test(a)?e.listeners[a]=this.$attrs[a]:e.attrs[a]=this.$attrs[a];this.bindingAttrs=e},methods:{focus(){this.$el.querySelector("input").focus()},error(){this.$el.classList.add("error")},normalizeValue(e){return"on"!==e&&e},checkIfFilled(e){this.required&&(e.target.value?e.target.parentNode.classList.remove("error"):e.target.parentNode.classList.add("error"))}}}},6454:function(e,a,r){r.d(a,{s:function(){return t}});var n=r(6252),s=r(9963);const l=["checked","value","true-value","false-value"];function t(e,a,r,t,i,o){return(0,n.wg)(),(0,n.iD)("label",(0,n.dG)({class:"pure-material-checkbox"},i.bindingAttrs.attrs),[(0,n.wy)((0,n._)("input",(0,n.dG)({type:"checkbox",checked:o.checker,"onUpdate:modelValue":a[0]||(a[0]=e=>o.model=e),value:r.value||r.trueValue||!0,"true-value":r.value||r.trueValue||!0,"false-value":r.falseValue},i.bindingAttrs.listeners),null,16,l),[[s.e8,o.model]]),(0,n._)("span",null,[(0,n.WI)(e.$slots,"default")])],16)}},2559:function(e,a,r){r.d(a,{Z:function(){return k}});var n=r(8439),s=r(8622),l=r(9371);const t="epic_catalyst",i="catalyst",o="speed",c="cri",u="cri_dmg",m="acc",d="res",_="def_rate",h="max_hp",f="max_hp_rate",g="att",p="att_rate",b={[p]:.03,[f]:.03,[_]:.03,[o]:2,[c]:.04,[u]:.05,[m]:.06,[d]:.06};var v={warrior:{ram:[_,f,null,o,_,f],bull:[p,u,null,c,p,u],twins:null,crab:[f,_,null,f,f,_],lion:[p,p,null,c,p,p],maiden:[m,c,null,o,m,c],scales:[p,f,null,_,p,f],scorpion:[f,p,null,_,f,p],archer:[p,c,null,o,p,c],goat:[f,f,null,_,f,f],waterbearer:[m,o,null,f,m,o],fish:[_,d,null,d,_,d]},knight:{ram:[f,m,null,o,f,m],bull:[p,p,null,f,p,p],twins:[o,c,null,p,o,c],crab:[f,_,null,f,f,_],lion:[p,p,null,c,p,p],maiden:null,scales:[f,_,null,d,f,_],scorpion:[f,f,null,p,f,f],archer:[f,o,null,_,f,o],goat:[_,d,null,_,_,d],waterbearer:null,fish:[_,d,null,f,_,d]},assassin:{ram:[p,o,null,c,p,o],bull:[p,p,null,o,p,p],twins:[p,c,null,m,p,c],crab:null,lion:[p,p,null,c,p,p],maiden:[f,m,null,o,f,m],scales:[p,u,null,o,p,u],scorpion:[p,f,null,c,p,f],archer:[p,c,null,o,p,c],goat:[m,o,null,m,m,o],waterbearer:[o,c,null,c,o,c],fish:[m,c,null,o,m,c]},ranger:{ram:null,bull:[p,p,null,c,p,p],twins:[m,p,null,p,m,p],crab:null,lion:[p,f,null,c,p,f],maiden:[p,p,null,o,p,p],scales:[c,p,null,u,c,p],scorpion:[p,c,null,f,p,c],archer:[o,o,null,p,o,o],goat:[o,m,null,m,o,m],waterbearer:[p,c,null,o,p,c],fish:[_,f,null,o,_,f]},mage:{ram:[m,c,null,p,m,c],bull:[d,m,null,o,d,m],twins:[p,m,null,m,p,m],crab:[p,p,null,c,p,p],lion:[o,p,null,p,o,p],maiden:[p,o,null,c,p,o],scales:null,scorpion:[c,p,null,u,c,p],archer:[p,c,null,o,p,c],goat:null,waterbearer:[p,m,null,f,p,m],fish:[o,c,null,c,o,c]},manauser:{ram:null,bull:[o,d,null,d,o,d],twins:[d,f,null,d,d,f],crab:[f,f,null,_,f,f],lion:null,maiden:[o,m,null,_,o,m],scales:[f,o,null,_,f,o],scorpion:[m,f,null,m,m,f],archer:[o,d,null,m,o,d],goat:null,waterbearer:[p,o,null,p,p,o],fish:[f,_,null,d,f,_]}},y={5:[[["rune",10]],[["rune",15],["greater",2]],[["rune",20],["greater",10]],[["greater",10],["epic",2]],[["epic",6],[i,15]],[["epic",10],[t,10]]],4:[[["rune",8]],[["rune",12],["greater",2]],[["rune",17],["greater",8]],[["greater",8],["epic",1]],[["epic",5],[i,12]],[["epic",8],[t,8]]],3:[[["rune",5]],[["rune",9]],[["rune",12,"greater",6]],[["greater",15]],[["epic",4],[i,9]],[["epic",6],[t,6]]]};function w(e,a,r){var l,o=e[0],c="",u="";if(o===t)o=r[2],l=s.Z[o],c=l.name,u=l.src;else if(o===i)o=r[1],l=s.Z[o],c=l.name,u=l.src;else{var m=["","rune","greater","epic"].indexOf(o);o=a?"ma_rune"+a+m:"ma_rune{{0}}"+m,c=["","Lesser ","Greater ","Epic "][m]+"Rune",u=n.cK+"/item/"+o+".png"}return{id:o,item:o,name:c,src:u}}function k(e,a,r,n){if(!e||!a||!r)throw"Not enough data to calculate awakening tree.";var s=v[a][r];if(!s)return null;const t=(0,l.y)(r);return s.map(((a,r)=>{var s=a?[{stat:a,value:b[a]*(r>2?2:1)}]:[];return s=s.concat([[g,r>2?30:20],[h,r>2?80:60]].map((e=>({stat:e[0],value:e[1]})))),{costs:y[e][r].map((e=>{let a=w(e,n,t);return{id:a.it,item:a.item,name:a.name,src:a.src,count:e[1]}})),stats:s}}))}},1163:function(e,a,r){r.d(a,{Z:function(){return l}});const n=["hp","atk","def","spd"],s=["chc","chd","eff","efr","dac","cri_res","dodge","hit_chance"];function l(e){if(!e||!e.stats)return console.error("Missing stats for Hero Stats Calculator"),{hp:0,atk:0,def:0,spd:0,chc:0,chd:0,eff:0,efr:0,dac:0};const{int:a,bra:r,fai:l,des:t}=e.stats,{level:i,rarity:o,imprint:c,awakened:u,skills:m,specialty_tree:d,ex_equip:_,speedSet:h}=e,f=Math.max(Math.ceil(i/10),o);var g={hp:(50+1.4*a)*(i/3+1)*(1+.075*(f-1)),atk:.6*r*(i/6+1)*(1+.075*(f-1)),def:(30+.3*l)*(i/8+1)*(1+.075*(f-1)),spd:60+t/1.6,eff:0,efr:0,chc:.15,chd:1.5,dac:.03,cri_res:0,dodge:0,hit_chance:1};n.forEach((e=>g[e]=Math.floor(g[e])));var p={};function b(e){return p[e]||0}function v(e,a){e&&(p[e]?p[e]+=a||0:p[e]=a||0)}function y(){g.hp=g.hp*(1+b("max_hp_rate"))+b("max_hp"),g.atk=g.atk*(1+b("att_rate"))+b("att"),g.def=g.def*(1+b("def_rate"))+b("def"),g.spd=g.spd+b("speed"),g.eff=g.eff+b("acc"),g.efr=g.efr+b("res"),g.chc=g.chc+b("cri"),g.chd=g.chd+b("cri_dmg"),g.dac=g.dac+b("coop"),g.cri_res=g.cri_res+b("cri_res"),g.dodge=g.dodge+b("dodge"),g.hit_chance=g.hit_chance+b("hit_chance"),p={}}return u&&u.slice(0,Math.floor(i/10)).forEach((e=>{e.stats.forEach((e=>{v(e.stat,e.value)}))})),d&&d.forEach((e=>{e&&(e.enhancements||[]).forEach((e=>{"stat"===e.type&&e.stat&&v(e.stat,e.value)}))})),y(),h&&v("speed",.25*g.spd),c&&v(c.type,c?.grades?.SSS),_&&i>=50&&f>4&&u&&_.forEach((e=>{e.forEach(((e,a)=>{v(e.type,e.value*(0===a?2:1))}))})),m&&Array.isArray(m)&&m.forEach((e=>{e[0].forEach((e=>{v(e.type,e.value)})),e[1].forEach((e=>{e.forEach((e=>{v(e.type,e.value)}))}))})),y(),n.forEach((e=>g[e]=Math.floor(g[e]||0))),s.forEach((e=>g[e]=Number(g[e]||0).toFixed(3))),g}},8622:function(e,a,r){var n=r(8439);function s(e){return n.cK+"/item/"+e+".png"}a.Z={"ancient-creature-nucleus":{name:"Ancient Creature Nucleus",id:"ma_golem_es",src:s("ma_golem_es")},"black-curse-powder":{name:"Black Cursed Powder",id:"ma_powder_es",src:s("ma_powder_es")},"blazing-soul":{name:"Blazing Soul",id:"ma_queen_es",src:s("ma_queen_es")},"demon-blood-gem":{name:"Demon Blood Gem",id:"ma_angraf_es",src:s("ma_angraf_es")},"dragons-wrath":{name:"Dragon's Wrath",id:"ma_wyvern_es",src:s("ma_wyvern_es")},"fighter-medal":{name:"Fighter Medal",id:"ma_insignia_es",src:s("ma_insignia_es")},"fused-nerve":{name:"Fused Nerve",id:"ma_chimaera_es",src:s("ma_chimaera_es")},"horn-of-desire":{name:"Horn of Desire",id:"ma_demont_es",src:s("ma_demont_es")},"mercenarys-medicine":{name:"Mercenary's Medicine",id:"ma_hired_es",src:s("ma_hired_es")},"nightmare-mask":{name:"Nightmare Mask",id:"ma_dreamerk_es",src:s("ma_dreamerk_es")},"reingar-student-id":{name:"Reingar Student ID",id:"ma_raingar_es",src:s("ma_raingar_es")},"the-heart-of-hypocrisy":{name:"The Heart of Hypocrisy",id:"ma_mecagolem_es",src:s("ma_mecagolem_es")},"archers-vision":{name:"Archer's Vision",id:"ma_bowman_es",src:s("ma_bowman_es")},"baby-mouse-insignia":{name:"Baby Mouse Insigna",id:"ma_rodent_es",src:s("ma_rodent_es")},"blazing-rage":{name:"Blazing Rage",id:"ma_hatchling_es",src:s("ma_hatchling_es")},"blessing-of-orbis":{name:"Blessing of Orbis",id:"ma_nature_es",src:s("ma_nature_es")},"blood-flaked-bone":{name:"Blood Flaked Bone",id:"ma_bone_es",src:s("ma_bone_es")},"cold-look":{name:"Cold Look",id:"ma_demonr_es",src:s("ma_demonr_es")},"cursed-ashes":{name:"Cursed Ashes",id:"ma_candle_es",src:s("ma_candle_es")},"dream-time-circuit":{name:"Dream Time Circuit",id:"ma_dreamer_es",src:s("ma_dreamer_es")},"erikion-carapace":{name:"Erikion Carapace",id:"ma_carapace_es",src:s("ma_carapace_es")},"eternal-forest-dust":{name:"External Forest Dust",id:"ma_entree_es",src:s("ma_entree_es")},"flame-of-soul":{name:"Flame of Soul",id:"ma_banshee_es",src:s("ma_banshee_es")},"leather-sheath":{name:"Leather Sheath",id:"ma_swordman_es",src:s("ma_swordman_es")},"mysterious-flash":{name:"Mysterious Flash",id:"ma_gem_es",src:s("ma_gem_es")},"order-of-the-shield-insignia":{name:"Order of the Shield Insigna",id:"ma_shield_es",src:s("ma_shield_es")},"path-power-loop":{name:"Path Power Loop",id:"ma_meca_es",src:s("ma_meca_es")},"ring-of-glory":{name:"Ring of Glory",id:"ma_taranor_es",src:s("ma_taranor_es")},"sharp-spearhead":{name:"Sharp Spearhead",id:"ma_spearman_es",src:s("ma_spearman_es")},"shiny-enchantment":{name:"Shiny Enchantment",id:"ma_penguin_es",src:s("ma_penguin_es")},"slime-jelly":{name:"Slime Jelly",id:"ma_slime_es",src:s("ma_slime_es")},"small-sun-badge":{name:"Small Sun Badge",id:"ma_magician_es",src:s("ma_magician_es")},"special-alarm-loop":{name:"Special Alarm Loop",id:"ma_siren_es",src:s("ma_siren_es")},"strange-jelly":{name:"Strange Jelly",id:"ma_imp_es",src:s("ma_imp_es")},"twisted-fang":{name:"Twisted Fang",id:"ma_demon_es",src:s("ma_demon_es")},"ultra-fang":{name:"Ultra Fang",id:"ma_wolf_es",src:s("ma_wolf_es")},molagora:{name:"Molagora",id:"ma_moragora1",src:s("ma_moragora1")},gold:{name:"Gold",id:"token_gold",src:s("token_gold")},stigma:{name:"Stigma",id:"token_stigma",src:s("token_stigma")}}},9371:function(e,a,r){r.d(a,{y:function(){return l}});var n=r(8439);const s=[["path-power-loop","shiny-enchantment","ring-of-glory","baby-mouse-insigna","twisted-fang","flame-of-soul","mysterious-flash","sharp-spearhead","archers-vision","slime-jelly","leather-sheath","strange-jelly"],["blessing-of-orbis","blazing-rage","small-sun-badge","special-alarm-loop","ultra-fang","eternal-forest-dust","dream-time-circuit","erikion-carapace","cold-look","cursed-ashes","order-of-the-shield-insigna","blood-flaked-bone"],["nightmare-mask","horn-of-desire","fused-nerve","the-heart-of-hypocrisy","blazing-soul","demon-blood-gem","reingar-student-id","black-curse-powder","mercenarys-medicine","dragons-wrath","fighter-medal","ancient-creature-nucleus"]];function l(e){console.log(n.Zp,e);const a=n.Zp.indexOf(e);return-1===a?[]:[s[0][a],s[1][a],s[2][a]]}},4618:function(e,a,r){var n=r(6454),s=r(1157),l=(r(3967),r(3744));const t=(0,l.Z)(s.Z,[["render",n.s]]);a.Z=t},2116:function(e,a,r){r.d(a,{Z:function(){return c}});var n=r(6252);const s={class:"page-title-box flex flex-col justify-center"};function l(e,a){return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.WI)(e.$slots,"default")])}var t=r(3744);const i={},o=(0,t.Z)(i,[["render",l]]);var c=o},9651:function(e,a,r){r.d(a,{Z:function(){return d}});var n=r(6252);const s={class:"section-header"},l={class:"wiki-section-title-wrapper flex items-center"},t={class:"wiki-section-title"},i={class:"wiki-section-more"};function o(e,a){return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",l,[(0,n._)("div",t,[(0,n.WI)(e.$slots,"default")]),(0,n._)("div",i,[(0,n.WI)(e.$slots,"description")])])])}var c=r(3744);const u={},m=(0,c.Z)(u,[["render",o]]);var d=m},3967:function(e,a,r){r(8921)},1157:function(e,a,r){r.d(a,{Z:function(){return n.Z}});var n=r(5552)}}]);