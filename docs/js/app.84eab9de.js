(function(e){function s(s){for(var a,r,o=s[0],l=s[1],c=s[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);h&&h(s);while(m.length)m.shift()();return n.push.apply(n,c||[]),t()}function t(){for(var e,s=0;s<n.length;s++){for(var t=n[s],a=!0,r=1;r<t.length;r++){var o=t[r];0!==i[o]&&(a=!1)}a&&(n.splice(s--,1),e=l(l.s=t[0]))}return e}var a={},r={app:0},i={app:0},n=[];function o(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-22870ee6":"0cb711c1","chunk-aa645e7a":"e92d3475","chunk-d8aa1e1e":"f19e0888"}[e]+".js"}function l(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var s=[],t={"chunk-22870ee6":1,"chunk-aa645e7a":1,"chunk-d8aa1e1e":1};r[e]?s.push(r[e]):0!==r[e]&&t[e]&&s.push(r[e]=new Promise((function(s,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-22870ee6":"8d65fadb","chunk-aa645e7a":"e5900906","chunk-d8aa1e1e":"93843980"}[e]+".css",i=l.p+a,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var c=n[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return s()}var m=document.getElementsByTagName("style");for(o=0;o<m.length;o++){c=m[o],u=c.getAttribute("data-href");if(u===a||u===i)return s()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=s,h.onerror=function(s){var a=s&&s.target&&s.target.src||i,n=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=a,delete r[e],h.parentNode.removeChild(h),t(n)},h.href=i;var g=document.getElementsByTagName("head")[0];g.appendChild(h)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)s.push(a[2]);else{var n=new Promise((function(s,t){a=i[e]=[s,t]}));s.push(a[2]=n);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(e);var m=new Error;c=function(s){u.onerror=u.onload=null,clearTimeout(h);var t=i[e];if(0!==t){if(t){var a=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;m.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",m.name="ChunkLoadError",m.type=a,m.request=r,t[1](m)}i[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(s)},l.m=e,l.c=a,l.d=function(e,s,t){l.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,s){if(1&s&&(e=l(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)l.d(t,a,function(s){return e[s]}.bind(null,a));return t},l.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(s,"a",s),s},l.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},l.p="/Lib/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=s,c=c.slice();for(var m=0;m<c.length;m++)s(c[m]);var h=u;n.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"032e":function(e,s,t){"use strict";var a=t("258f"),r=t.n(a);r.a},"034f":function(e,s,t){"use strict";var a=t("85ec"),r=t.n(a);r.a},"0899":function(e,s,t){},"0920":function(e,s,t){},"0a09":function(e,s,t){"use strict";var a=t("fabe"),r=t.n(a);r.a},"258f":function(e,s,t){},"2b95":function(e,s,t){},"3d57":function(e,s,t){"use strict";var a=t("0920"),r=t.n(a);r.a},"48f7":function(e,s,t){"use strict";var a=t("7c57"),r=t.n(a);r.a},"56d7":function(e,s,t){"use strict";t.r(s);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a,r,i=t("2b0e"),n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],l={name:"App",components:{}},c=l,u=(t("034f"),t("2877")),m=Object(u["a"])(c,n,o,!1,null,null,null),h=m.exports,g=t("85fe"),p=t("f13c"),d=t.n(p),f=t("caf9"),v=t("0086"),_=t.n(v),b=t("8c4f"),j=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"whole"}},[t("div",{attrs:{id:"loading"}},[t("Loading")],1),t("div",{staticClass:"waiting",attrs:{id:"contents"}},[t("Top"),t("Members"),t("FlickSS"),t("SS"),t("transition",{attrs:{name:"toppage"}},[t("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#whole",expression:"'#whole'"},{name:"show",rawName:"v-show",value:e.isTopBtn,expression:"isTopBtn"}],staticClass:"scroll-top"},[e._v("↑ Top")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showArrow,expression:"showArrow"}],staticClass:"arrow"}),e._m(0),t("Nav")],1),t("Sandstorm")],1)},w=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("article",{attrs:{id:"rights"}},[t("p",[e._v(" 記載されている会社名・製品名・システム名などは、各社の商標、または登録商標です。 ")]),t("p",[e._v(" Copyright (C) 2010 - 2020 SQUARE ENIX CO., LTD. All Rights Reserved. ")])])}],y=(t("99af"),t("b0c0"),t("d3b7"),function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)}),C=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"sk-folding-cube"},[t("div",{staticClass:"sk-cube1 sk-cube"}),t("div",{staticClass:"sk-cube2 sk-cube"}),t("div",{staticClass:"sk-cube4 sk-cube"}),t("div",{staticClass:"sk-cube3 sk-cube"})])}],S=(t("a95f"),{}),k=Object(u["a"])(S,y,C,!1,null,"48638079",null),x=k.exports,E=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{attrs:{id:"top"}},[e.isPC?a("video",{attrs:{loop:"",autoplay:"",muted:"",playsinline:"",src:t("ba1e")},domProps:{muted:!0}}):a("img",{attrs:{src:t("6b4f")}}),a("h1",[e._v("Libertas")]),a("h2",[e._v("じゆうの民")])])},H=[],L={data:function(){return{isPC:!1}},created:function(){window.screen.width>=560&&(this.isPC=!0)}},N=L,O=(t("3d57"),Object(u["a"])(N,E,H,!1,null,"afa8004e",null)),T=O.exports,A=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[t("h3",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.visibilityChanged,expression:"visibilityChanged"}],class:{txtmember:e.flg}},[e._v(" MEMBERS ")]),t("div",{staticClass:"h"},[t("Character",{attrs:{position:"true",imgsrc:"images/chrss/h.jpg",charName:"ふぁっしょんりーだー",chrss:e.chrss[0]}})],1),t("div",{staticClass:"m"},[t("Character",{attrs:{imgsrc:"images/chrss/m.jpg",charName:"愛嬌の人",chrss:e.chrss[1]}})],1),t("Character",{attrs:{position:"true",imgsrc:"images/chrss/t.jpg",charName:"撮の人",chrss:e.chrss[2]}}),t("Character",{staticClass:"e",attrs:{imgsrc:"images/chrss/e.jpg",charName:"廃の人",chrss:e.chrss[3]}}),t("Character",{attrs:{position:"true",imgsrc:"images/chrss/k.jpg",charName:"天使の人",chrss:e.chrss[4]}}),t("div",{staticClass:"mr"},[t("Character",{attrs:{imgsrc:"images/chrss/mr.jpg",charName:"美食テロリスト",chrss:e.chrss[5]}})],1),t("div",{staticClass:"r"},[t("Character",{attrs:{position:"true",imgsrc:"images/chrss/r.jpg",charName:"夜更けの人",chrss:e.chrss[6]}})],1),t("div",{staticClass:"hp"},[t("Character",{attrs:{imgsrc:"images/chrss/hp.jpg",charName:"神の人",chrss:e.chrss[7]}})],1),t("div",{staticClass:"n"},[t("Character",{attrs:{position:"true",imgsrc:"images/chrss/n.jpg",charName:"猫の人",chrss:e.chrss[8]}})],1),t("Character",{staticClass:"p",attrs:{imgsrc:"images/chrss/p.jpg",charName:"パパの人",chrss:e.chrss[9]}}),t("Modal",{attrs:{showContent:e.showContent,imgUri:e.imgUri,currentY:e.currentY},on:{isS:e.isShow}})],1)},P=[],$=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.visibilityChanged,expression:"visibilityChanged"},{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"input"},expression:"{ selector: 'input' }"}],staticClass:"imgblock",class:[e.position?"L":"R"]},[t("canvas",{class:{active:e.isVisible},attrs:{id:"square"}}),t("input",{staticClass:"img",class:{active:e.isVisible,finish:e.finished},attrs:{type:"image","data-src":e.imgsrc,alt:"NoImage"},on:{click:e.openModal}}),t("article",{staticClass:"chrName",class:{active:e.isVisible}},[e._v(" "+e._s(e.charName)+" ")]),t("CharSS",{attrs:{isVisible:e.isVisible,position:e.position,chrss:e.chrss}})],1)},M=[],Y=(t("ac1f"),t("5319"),function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{class:[{active:e.isVisible},e.position?"T":"F"],attrs:{id:"charimg"}},e._l(e.chrss,(function(e,s){return t("div",{key:s},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"image"}],class:"img"+s})])})),0)}),R=[],V={props:{isVisible:Boolean,position:String,chrss:Array}},B=V,I=(t("0a09"),Object(u["a"])(B,Y,R,!1,null,"1a1c672e",null)),z=I.exports,q={components:{CharSS:z},props:{position:String,imgsrc:String,charName:String,chrss:Array},data:function(){return{isVisible:!0,finished:!0}},methods:{visibilityChanged:function(e){this.isVisible=e,this.isVisible},openModal:function(e){this.$parent.showContent=!0,this.$parent.imgUri=e.target.src.replace(/.jpg/,"_large.jpg");var s=window.pageYOffset;this.$parent.currentY=s,document.querySelector("body").style.position="fixed",document.querySelector("body").style.top="-".concat(s,"px")}},watch:{isVisible:function(){var e=this,s=this.$el.querySelector(".img.active");null!=s&&(e.finished=!1,s.addEventListener("transitionend",(function t(){s.removeEventListener("transitionend",t),e.finished=!0})))}}},D=q,F=(t("032e"),Object(u["a"])(D,$,M,!1,null,"c1d02428",null)),U=F.exports,X=function(){return t.e("chunk-d8aa1e1e").then(t.bind(null,"714b"))},W={components:{Character:U,Modal:X},data:function(){return{showContent:!1,imgUri:"",flg:!1,currentY:0,chrss:[]}},methods:{isShow:function(){this.showContent=!1},visibilityChanged:function(e){this.flg=e}},created:function(){var e=["images/chrss/h/h1.jpg","images/chrss/h/h2.jpg","images/chrss/h/h3.jpg","images/chrss/h/h4.jpg"],s=["images/chrss/m/m1.jpg","images/chrss/m/m2.jpg","images/chrss/m/m3.jpg","images/chrss/m/m4.jpg"],t=["images/chrss/t/t1.jpg","images/chrss/t/t2.jpg","images/chrss/t/t3.jpg","images/chrss/t/t4.jpg"],a=["images/chrss/e/e1.jpg","images/chrss/e/e2.jpg","images/chrss/e/e3.jpg","images/chrss/e/e4.jpg"],r=["images/chrss/k/k1.jpg","images/chrss/k/k2.jpg","images/chrss/k/k3.jpg","images/chrss/k/k4.jpg"],i=["images/chrss/mr/mr1.jpg","images/chrss/mr/mr2.jpg","images/chrss/mr/mr3.jpg","images/chrss/mr/mr4.jpg"],n=["images/chrss/r/r1.jpg","images/chrss/r/r2.jpg","images/chrss/r/r3.jpg","images/chrss/r/r4.jpg"],o=["images/chrss/hp/hp1.jpg","images/chrss/hp/hp2.jpg","images/chrss/hp/hp3.jpg","images/chrss/hp/hp4.jpg"],l=["images/chrss/n/n1.jpg","images/chrss/n/n2.jpg","images/chrss/n/n3.jpg","images/chrss/n/n4.jpg"],c=["images/chrss/p/p1.jpg","images/chrss/p/p2.jpg","images/chrss/p/p3.jpg","images/chrss/p/p4.jpg"];this.chrss.push(e,s,t,a,r,i,n,o,l,c)}},G=W,Q=(t("b9d1"),Object(u["a"])(G,A,P,!1,null,"92b69d14",null)),J=Q.exports,K=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"sandstorm"})},Z=[],ee=(t("b700"),{}),se=Object(u["a"])(ee,K,Z,!1,null,"052d230b",null),te=se.exports,ae=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("nav",[t("router-link",{staticClass:"to-home",attrs:{to:"/"}},[e._v("Home")]),t("router-link",{staticClass:"to-house",attrs:{to:"/house"}},[e._v("Housing")])],1)},re=[],ie={mounted:function(){window.scrollTo(0,0)}},ne=ie,oe=(t("48f7"),Object(u["a"])(ne,ae,re,!1,null,"12e24202",null)),le=oe.exports,ce=t("15d3"),ue=function(){return t.e("chunk-22870ee6").then(t.bind(null,"f316"))},me=function(){return t.e("chunk-aa645e7a").then(t.bind(null,"30d3"))},he={components:{Loading:x,Top:T,Members:J,SS:ue,Sandstorm:te,FlickSS:me,Nav:le},data:function(){return{scrollY:0,windowWidth:0,showArrow:!0}},mounted:function(){window.addEventListener("scroll",this.onScroll);var e=document.getElementById("loading"),s=document.getElementById("contents");if(ge)return e.remove(),void s.classList.remove("waiting");window.addEventListener("load",(function t(){var a=document.querySelector("video");null===a?(e.remove(),s.classList.remove("waiting")):(a.load(),a.play(),a.addEventListener("canplaythrough",(function t(){e.remove(),s.classList.remove("waiting"),this.removeEventListener("canplaythrough",t)}))),this.removeEventListener("load",t)}))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},computed:{isTopBtn:function(){return this.scrollY>300}},methods:{onScroll:Object(ce["a"])(300,(function(){this.scrollY=window.pageYOffset;var e=document.documentElement.scrollHeight-document.documentElement.clientHeight;this.scrollY>=e?this.showArrow=!1:this.showArrow=!0}))},beforeRouteEnter:function(e,s,t){null!==s.name&&(ge=!0),t()}},ge=!1,pe=document.createElement("div");pe.id="pointer",document.body.appendChild(pe);var de=document.createElement("div");de.id="cursor",pe.appendChild(de);var fe=document.createElement("div");fe.id="stalker",pe.appendChild(fe);var ve=document.createElement("div");ve.id="stalker2",pe.appendChild(ve);var _e=0,be=!0;document.addEventListener("mousemove",(function(e){_e++,de.style.transform="translate(".concat(e.clientX,"px,").concat(e.clientY,"px) rotate(45deg)"),be&&(be=!1,fe.style.transform="translate(".concat(e.clientX,"px, ").concat(e.clientY,"px) rotate3d(-1, -1, 0, ").concat(30+_e,"deg)"),ve.style.transform="translate(".concat(e.clientX,"px, ").concat(e.clientY,"px) rotate3d(1, 1, 1, ").concat(30+_e,"deg)"),setTimeout((function(){return be=!0}),14),a=e.clientX,r=e.clientY)})),document.addEventListener("mouseleave",(function(){de.style.opacity="0",fe.style.opacity="0",ve.style.opacity="0"})),document.addEventListener("mouseenter",(function(){de.style.opacity="1",fe.style.opacity="1",ve.style.opacity="1"})),document.addEventListener("mousedown",(function(){fe.style.transform="translate(".concat(a,"px,").concat(r,"px)\n  rotate3d(-1, 1, 0, 70deg) scale(1.5)"),ve.style.transform="translate(".concat(a,"px,").concat(r,"px)\n  rotate3d(1, 1, 1, -90deg) scale(2)")})),document.addEventListener("mouseup",(function(){_e=0,fe.style.transform="translate(".concat(a,"px,").concat(r,"px)\n  rotate3d(-1, -1, 0, 30deg) scale(1)"),ve.style.transform="translate(".concat(a,"px,").concat(r,"px)\n  rotate3d(1, 1, 1, 30deg) scale(1)")}));var je=he,we=(t("6026"),Object(u["a"])(je,j,w,!1,null,null,null)),ye=we.exports,Ce=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"housepage"},[t("p",{staticClass:"title"},[e._v("HOUSING")]),t("House",{staticClass:"fc-house",attrs:{"house-small":e.fcHouseSmall,"house-large":e.fcHouseLarge,houseName:"かんぱにの部屋"}}),t("House",{staticClass:"h-house",attrs:{"house-small":e.hHouseSmall,"house-large":e.hHouseLarge,houseName:"ふぁっしょんりーだーの部屋"}}),t("House",{staticClass:"m-house",attrs:{"house-small":e.mHouseSmall,"house-large":e.mHouseLarge,houseName:"愛嬌の部屋"}}),t("House",{staticClass:"t-house",attrs:{"house-small":e.tHouseSmall,"house-large":e.tHouseLarge,houseName:"撮の部屋"}}),t("House",{staticClass:"e-house",attrs:{"house-small":e.eHouseSmall,"house-large":e.eHouseLarge,houseName:"廃の部屋"}}),t("House",{staticClass:"k-house",attrs:{"house-small":e.kHouseSmall,"house-large":e.kHouseLarge,houseName:"天使の部屋"}}),t("House",{staticClass:"mr-house",attrs:{"house-small":e.mrHouseSmall,"house-large":e.mrHouseLarge,houseName:"美食テロリスト育成学校"}}),t("House",{staticClass:"n-house",attrs:{"house-small":e.nHouseSmall,"house-large":e.nHouseLarge,houseName:"猫の部屋"}}),t("transition",{attrs:{name:"toppage"}},[t("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".housepage",expression:"'.housepage'"},{name:"show",rawName:"v-show",value:e.isTopBtn,expression:"isTopBtn"}],staticClass:"scroll-top"},[e._v("↑ Top")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showArrow,expression:"showArrow"}],staticClass:"arrow"}),t("Nav"),e._m(0),t("ThreeD"),t("Sandstorm")],1)},Se=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("article",{attrs:{id:"rights"}},[t("p",[e._v(" 記載されている会社名・製品名・システム名などは、各社の商標、または登録商標です。 ")]),t("p",[e._v(" Copyright (C) 2010 - 2020 SQUARE ENIX CO., LTD. All Rights Reserved. ")])])}],ke=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"input"},expression:"{ selector: 'input' }"},{name:"observe-visibility",rawName:"v-observe-visibility",value:e.visibilityChanged,expression:"visibilityChanged"}],staticClass:"house",class:{active:e.isVisible}},[t("p",{staticClass:"name"},[e._v("- "+e._s(e.houseName)+" -")]),t("div",{staticClass:"main-block"},[t("transition-group",{attrs:{name:"fade"}},e._l(e.houseLarge,(function(s,a){return t("input",{directives:[{name:"show",rawName:"v-show",value:e.current[a],expression:"current[index]"}],key:a,staticClass:"main-img",attrs:{type:"image","data-src":s},on:{click:function(s){return e.selectImg(a)}}})})),0)],1),t("div",{staticClass:"sub-img"},e._l(e.houseSmall,(function(s,a){return t("input",{key:a,class:["img"+a,{active:e.isVisible}],attrs:{type:"image","data-src":s},on:{click:function(s){return e.selectImg(a)}}})})),0)])},xe=[],Ee=(t("cb29"),t("a434"),{props:{houseSmall:Array,houseLarge:Array,houseName:String},data:function(){return{isVisible:!1,current:Array(this.houseSmall.length).fill(!1)}},mounted:function(){this.current.splice(0,1,!0)},methods:{visibilityChanged:function(e){this.isVisible||(this.isVisible=e)},selectImg:function(e){for(var s=0;s<this.current.length;s++)this.current.splice(s,1,!1);this.current.splice(e,1,!0)}}}),He=Ee,Le=(t("dfa0"),Object(u["a"])(He,ke,xe,!1,null,"051e65fa",null)),Ne=Le.exports,Oe=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("canvas",{attrs:{id:"thrCanvas"}})},Te=[],Ae=t("5a89"),Pe=t("b36e"),$e=["images/board/board01.jpg","images/board/board02.jpg","images/board/board03.jpg","images/board/board04.jpg","images/board/board05.jpg","images/board/board06.jpg","images/board/board07.jpg","images/board/board08.jpg","images/board/board09.jpg","images/board/board10.jpg","images/board/board11.jpg","images/board/board12.jpg","images/board/board13.jpg","images/board/board14.jpg","images/board/board15.jpg","images/board/board16.jpg","images/board/board17.jpg","images/board/board18.jpg","images/board/board19.jpg","images/board/board20.jpg","images/board/board21.jpg"],Me={data:function(){var e=new Ae["i"],s=null,t=new Ae["g"](45,16/9,1,1e3),a=new Ae["b"](16777215,1),r=new Pe["a"]({timestep:1/24,iterations:8,broadphase:2,worldscale:1,random:!0,info:!1,gravity:[0,-9.8,0]}),i=40,n=50;return{scene:e,renderer:s,camera:t,light:a,world:r,physics:[],board:[],boardSS:$e,boardHeight:i,boardWidth:n}},mounted:function(){this.initOimo(),this.initThree()},methods:{initOimo:function(){var e=this;this.world.add({type:"box",size:[3e3,10,3e3],pos:[0,-200,0],rot:[-Math.PI/2,0,0],move:!1,density:1,friction:.5,restitution:.1});var s=setInterval((function(){var t=e.world.add({type:"box",size:[4,e.boardHeight,e.boardWidth],pos:[e.randomRange(-200,200),250,e.randomRange(-100,100)],rot:[0,e.randomRange(0,180),e.randomRange(-45,-135)],move:!0,density:1,friction:.5,restitution:.2});e.physics.push(t),e.physics.length>=e.boardSS.length&&clearInterval(s)}),2500)},randomRange:function(e,s){return Math.random()*(s-e)+e},initThree:function(){this.renderer=new Ae["l"]({canvas:document.querySelector("#thrCanvas"),alpha:!0}),this.renderer.setSize(3e3,1500),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0;var e=90*Math.PI/180;this.camera.position.y=300*Math.sin(e),this.camera.position.z=300*Math.cos(e),this.camera.lookAt(new Ae["k"](0,0,0)),this.light.position.set(-2,20,10),this.light.castShadow=!0,this.light.shadow.camera.position.set(0,100,0),this.light.shadow.camera.left=-300,this.light.shadow.camera.right=300,this.light.shadow.camera.top=300,this.light.shadow.camera.bottom=-300,this.light.shadow.mapSize.width=2048,this.light.shadow.mapSize.height=2048,this.scene.add(this.light),this.createGround(),this.createBoard(),this.tick()},createGround:function(){var e=new Ae["h"](3e3,3e3),s=new Ae["f"]({color:42135,roughness:.8}),t=new Ae["d"](e,s);t.position.y=-200,t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.scene.add(t)},createBoard:function(){for(var e=new Ae["j"],s=new Ae["a"](1,this.boardHeight,this.boardWidth),t=0;t<this.boardSS.length;t++){var a=e.load(this.boardSS[t]);a.minFilter=Ae["c"];var r=new Ae["e"]({map:a}),i=new Ae["d"](s,r);i.position.y=400,i.castShadow=!0,this.board.push(i),this.scene.add(this.board[t])}},tick:function(){this.world.step();for(var e=0;e<this.physics.length&&e<this.board.length;e++)this.board[e].position.copy(this.physics[e].getPosition()),this.board[e].quaternion.copy(this.physics[e].getQuaternion());this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.tick)}}},Ye=Me,Re=(t("fcf1"),Object(u["a"])(Ye,Oe,Te,!1,null,"2f25b338",null)),Ve=Re.exports,Be={components:{House:Ne,ThreeD:Ve,Nav:le,Sandstorm:te},data:function(){return{scrollY:0,showArrow:!0}},mounted:function(){window.addEventListener("scroll",this.onScroll)},methods:{onScroll:Object(ce["a"])(300,(function(){this.scrollY=window.pageYOffset;var e=document.documentElement.scrollHeight-document.documentElement.clientHeight;this.scrollY>=e?this.showArrow=!1:this.showArrow=!0}))},computed:{fcHouseSmall:function(){return["images/house/fc/fc_small/01_small.jpg","images/house/fc/fc_small/02_small.jpg","images/house/fc/fc_small/03_small.jpg","images/house/fc/fc_small/04_small.jpg","images/house/fc/fc_small/05_small.jpg","images/house/fc/fc_small/06_small.jpg"]},fcHouseLarge:function(){return["images/house/fc/fc_large/01_large.jpg","images/house/fc/fc_large/02_large.jpg","images/house/fc/fc_large/03_large.jpg","images/house/fc/fc_large/04_large.jpg","images/house/fc/fc_large/05_large.jpg","images/house/fc/fc_large/06_large.jpg"]},hHouseSmall:function(){return["images/house/h/h_small/01_small.jpg","images/house/h/h_small/02_small.jpg","images/house/h/h_small/03_small.jpg","images/house/h/h_small/04_small.jpg"]},hHouseLarge:function(){return["images/house/h/h_large/01_large.jpg","images/house/h/h_large/02_large.jpg","images/house/h/h_large/03_large.jpg","images/house/h/h_large/04_large.jpg"]},mHouseSmall:function(){return["images/house/m/m_small/01_small.jpg","images/house/m/m_small/02_small.jpg","images/house/m/m_small/03_small.jpg","images/house/m/m_small/04_small.jpg"]},mHouseLarge:function(){return["images/house/m/m_large/01_large.jpg","images/house/m/m_large/02_large.jpg","images/house/m/m_large/03_large.jpg","images/house/m/m_large/04_large.jpg"]},tHouseSmall:function(){return["images/house/t/t_small/01_small.jpg","images/house/t/t_small/02_small.jpg","images/house/t/t_small/03_small.jpg","images/house/t/t_small/04_small.jpg"]},tHouseLarge:function(){return["images/house/t/t_large/01_large.jpg","images/house/t/t_large/02_large.jpg","images/house/t/t_large/03_large.jpg","images/house/t/t_large/04_large.jpg"]},eHouseSmall:function(){return["images/house/e/e_small/01_small.jpg","images/house/e/e_small/02_small.jpg","images/house/e/e_small/03_small.jpg","images/house/e/e_small/04_small.jpg"]},eHouseLarge:function(){return["images/house/e/e_large/01_large.jpg","images/house/e/e_large/02_large.jpg","images/house/e/e_large/03_large.jpg","images/house/e/e_large/04_large.jpg"]},kHouseSmall:function(){return["images/house/k/k_small/01_small.jpg","images/house/k/k_small/02_small.jpg","images/house/k/k_small/03_small.jpg","images/house/k/k_small/04_small.jpg"]},kHouseLarge:function(){return["images/house/k/k_large/01_large.jpg","images/house/k/k_large/02_large.jpg","images/house/k/k_large/03_large.jpg","images/house/k/k_large/04_large.jpg"]},mrHouseSmall:function(){return["images/house/mr/mr_small/01_small.jpg","images/house/mr/mr_small/02_small.jpg","images/house/mr/mr_small/03_small.jpg","images/house/mr/mr_small/04_small.jpg"]},mrHouseLarge:function(){return["images/house/mr/mr_large/01_large.jpg","images/house/mr/mr_large/02_large.jpg","images/house/mr/mr_large/03_large.jpg","images/house/mr/mr_large/04_large.jpg"]},nHouseSmall:function(){return["images/house/n/n_small/01_small.jpg","images/house/n/n_small/02_small.jpg","images/house/n/n_small/03_small.jpg","images/house/n/n_small/04_small.jpg"]},nHouseLarge:function(){return["images/house/n/n_large/01_large.jpg","images/house/n/n_large/02_large.jpg","images/house/n/n_large/03_large.jpg","images/house/n/n_large/04_large.jpg"]},isTopBtn:function(){return this.scrollY>300}},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)}},Ie=Be,ze=(t("c7fb"),Object(u["a"])(Ie,Ce,Se,!1,null,"2fb0d082",null)),qe=ze.exports;i["a"].use(b["a"]);var De=new b["a"]({mode:"history",base:"/Lib/",routes:[{path:"/",name:"Top",component:ye},{path:"/house",name:"house",component:qe},{path:"*",name:"notfound",redirect:"/"}]});i["a"].use(g["a"]),i["a"].use(d.a,{duration:500,easing:"ease"}),i["a"].use(f["a"],{preLoad:2,observer:!0,throttleWait:0}),i["a"].use(_.a,{swipeTolerance:100}),i["a"].config.productionTip=!1,new i["a"]({router:De,render:function(e){return e(h)}}).$mount("#app")},6026:function(e,s,t){"use strict";var a=t("2b95"),r=t.n(a);r.a},"6b4f":function(e,s,t){e.exports=t.p+"img/top.2e191b5b.jpg"},"7c57":function(e,s,t){},"7e65":function(e,s,t){},"85ec":function(e,s,t){},"9e77":function(e,s,t){},a503:function(e,s,t){},a95f:function(e,s,t){"use strict";var a=t("a503"),r=t.n(a);r.a},a9ae:function(e,s,t){},b700:function(e,s,t){"use strict";var a=t("0899"),r=t.n(a);r.a},b9d1:function(e,s,t){"use strict";var a=t("cd70"),r=t.n(a);r.a},ba1e:function(e,s,t){e.exports=t.p+"media/FF14_marriage_hd_a.68fc4dee.mp4"},c7fb:function(e,s,t){"use strict";var a=t("9e77"),r=t.n(a);r.a},cd70:function(e,s,t){},dfa0:function(e,s,t){"use strict";var a=t("7e65"),r=t.n(a);r.a},fabe:function(e,s,t){},fcf1:function(e,s,t){"use strict";var a=t("a9ae"),r=t.n(a);r.a}});
//# sourceMappingURL=app.84eab9de.js.map