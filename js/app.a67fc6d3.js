(function(t){function e(e){for(var i,r,a=e[0],c=e[1],l=e[2],u=0,f=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},o=[];function r(t){return a.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b3289":"54912bbf"}[t]+".js"}function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=s[t]=[e,i]}));e.push(n[2]=i);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=r(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,n[1](l)}s[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/VPhone/",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2395:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"max-h-screen overflow-auto overscroll-none",style:"height: "+t.max+"px;"},[n("system-bar",{attrs:{maxOffset:t.max},on:{changeBlur:t.onChangeBlur}}),n("v-main",{staticClass:"filter overflow-hidden",class:{isDesktop:t.isDesktop,blur:t.isBlur}},[n("router-view")],1)],1)},o=[],r=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-system-bar",{staticClass:"system-bar",attrs:{height:"25",app:"","lights-out":"",dark:"",fixed:""}},[n("span",{staticClass:"font-medium"},[t._v(t._s(t.formatTime))]),n("v-spacer"),n("v-icon",{attrs:{size:"small"}},[t._v("mdi-wifi-strength-4")]),n("v-icon",{attrs:{size:"small"}},[t._v("mdi-signal-cellular-outline")]),n("v-icon",{attrs:{size:"small"}},[t._v("mdi-battery")]),n("div",{directives:[{name:"touch",rawName:"v-touch",value:{move:t.onTouchMove,end:t.onTouchEnd},expression:"{\n      move: onTouchMove,\n      end: onTouchEnd\n    }"}],staticClass:"system-bar-mask",class:{"system-bar-mask--dragging":t.isDragging,"system-bar-mask--active":t.isDone},style:"transform: translateY("+t.offset+"px)"},[n("div",{staticClass:"system-bar-wrapper"},[n("div",{staticClass:"system-bar-icons"},[n("v-container",[n("div",{staticClass:"flex items-center"},[n("span",{staticClass:"text-3xl font-semibold text-white"},[t._v(t._s(t.formatTime))])])]),n("v-container",[n("v-row",t._l(t.icons,(function(e){return n("v-col",{key:e.id,attrs:{cols:"3"}},[n("div",{staticClass:"flex flex-col items-center justify-center"},[n("div",{staticClass:"w-10 h-10 rounded-full flex justify-center items-center overflow-hidden",class:t.iconActive.includes(e.id)?"bg-white":"bg-gray-500",on:{click:function(n){return t.onToggleIconAcitve(e.id)}}},[n("v-icon",{staticClass:"mr-0",attrs:{size:"large",color:t.iconActive.includes(e.id)?"grey darken-4":"white"}},[t._v(t._s(e.icon))])],1),n("div",{staticClass:"text-white text-xs mt-2 truncate"},[t._v(t._s(e.label))])])])})),1)],1)],1)])])],1)}),a=[],c=n("2909"),l=(n("a9e3"),n("caad"),n("2532"),n("4de4"),n("99af"),n("5a0c")),u=n.n(l),d={name:"SystemBar",props:{maxOffset:{type:Number,default:666}},data:function(){return{formatTime:u()().format("HH:mm"),timer:null,offset:10,minOffset:10,isDragging:!1,isDone:!1,lastEndOffset:0,iconActive:[1,2,6],icons:[{id:1,label:"Wifi",icon:"mdi-wifi"},{id:2,label:"移动数据",icon:"mdi-cable-data"},{id:3,label:"蓝牙",icon:"mdi-bluetooth"},{id:4,label:"静音",icon:"mdi-bell-cancel-outline"},{id:5,label:"飞行模式",icon:"mdi-airplane"},{id:6,label:"定位服务",icon:"mdi-map-marker"},{id:7,label:"亮度",icon:"mdi-brightness-6"},{id:8,label:"手电筒",icon:"mdi-flashlight"}]}},created:function(){this.initTimer()},methods:{initTimer:function(){var t=this;this.timer&&this.disposeTimer(),this.timer=setInterval((function(){t.formatTime=u()().format("HH:mm")}),1e3)},disposeTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},onTouchMove:function(t){this.isDragging=!0,this.isDone=!1,this.$emit("changeBlur",!0);var e=this.offset,n=this.minOffset,i=this.maxOffset,s=this.lastEndOffset,o=i-25,r=t.touchstartY-t.touchmoveY;if(r<0)s!==o&&(this.offset=t.touchmoveY>o?o:t.touchmoveY);else if(e>0){var a=o-r;this.offset=a<n?n:a}},onTouchEnd:function(t){this.isDragging=!1;var e=this.minOffset,n=this.maxOffset,i=n-25,s=t.touchstartY-t.touchendY,o=70;s<=-o?(this.offset=i,this.lastEndOffset=i,this.isDone=!0,this.$emit("changeBlur",!0)):t.touchstartY-t.touchendY>=o?(this.offset=e,this.lastEndOffset=e,this.isDone=!1,this.$emit("changeBlur",!1)):(this.offset=this.lastEndOffset,this.isDone=this.lastEndOffset===i,this.$emit("changeBlur",this.lastEndOffset===i))},onToggleIconAcitve:function(t){var e=this.iconActive;e.includes(t)?this.iconActive=e.filter((function(e){return e!==t})):this.iconActive=[].concat(Object(c["a"])(e),[t])}},destroyed:function(){this.disposeTimer()}},f=d,m=(n("d348"),n("2877")),h=n("6544"),p=n.n(h),v=n("62ad"),g=n("a523"),b=n("132d"),w=n("0fd9"),y=n("2fa4"),k=n("afd9"),x=n("269a"),C=n.n(x),O=n("c3f0"),_=Object(m["a"])(f,r,a,!1,null,null,null),T=_.exports;p()(_,{VCol:v["a"],VContainer:g["a"],VIcon:b["a"],VRow:w["a"],VSpacer:y["a"],VSystemBar:k["a"]}),C()(_,{Touch:O["a"]});var j=function(){return window.innerHeight},S={name:"App",components:{SystemBar:T},data:function(){return{isDesktop:!0,isBlur:!1,max:j()}},watch:{$route:function(t){this.isDesktop="Desktop"===t.name}},methods:{onChangeBlur:function(t){this.isBlur=t}}},D=S,E=(n("7c55"),n("7496")),V=n("f6c4"),B=Object(m["a"])(D,s,o,!1,null,null,null),A=B.exports;p()(B,{VApp:E["a"],VMain:V["a"]});n("d3b7"),n("3ca3"),n("ddb0");var P=n("8c4f"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"desktop"},[n("div",{staticClass:"desktop-main",style:"height: "+(t.maxOffset-80-25)+"px"},[n("swiper",{staticClass:"desktop-swiper-wrapper",attrs:{options:t.swiperOptions}},[n("swiper-slide",{staticClass:"desktop-swiper-item"},[n("v-container",[n("v-row",{attrs:{align:"center",dense:""}},[n("v-col",{attrs:{cols:"3"}},[n("desktop-icon",{attrs:{icon:"mdi-calculator",iconColor:"deep-orange darken-4",label:"计算器"}})],1),n("v-col",{attrs:{cols:"3"}},[n("desktop-icon",{attrs:{icon:"mdi-calendar-month",iconColor:"brown darken-1",label:"日历"}})],1),n("v-col",{attrs:{cols:"3"}},[n("router-link",{attrs:{to:"/settings"}},[n("desktop-icon",{attrs:{icon:"mdi-cog",iconColor:"blue-grey darken-4",label:"设置"}})],1)],1),n("v-col",{attrs:{cols:"3"}},[n("desktop-icon",{attrs:{icon:"mdi-email",iconColor:"blue",label:"邮件"}})],1),n("v-col",{attrs:{cols:"3"}},[n("desktop-icon",{attrs:{icon:"mdi-wechat",iconColor:"success",label:"微信"}})],1)],1)],1)],1)],1)],1),n("div",{staticClass:"desktop-dock"},[n("v-container",[n("v-row",{staticStyle:{height:"100%"},attrs:{align:"center",dense:""}},[n("v-col",{attrs:{cols:"3"}},[n("desktop-icon",{attrs:{icon:"mdi-phone-dial",iconColor:"success"}})],1),n("v-col",{attrs:{cols:"3"}},[n("desktop-icon",{attrs:{icon:"mdi-chat-processing",iconColor:"success"}})],1),n("v-col",{attrs:{cols:"3"}},[n("desktop-icon",{attrs:{icon:"mdi-camera",iconColor:"blue-grey darken-2"}})],1),n("v-col",{attrs:{cols:"3"}},[n("desktop-icon",{attrs:{icon:"mdi-google-chrome",iconColor:"orange darken-2"}})],1)],1)],1)],1)])},Y=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full h-full rounded-lg flex flex-col items-center justify-center overflow-hidden select-none"},[t.icon?n("div",{staticClass:"w-14 h-14 rounded overflow-hidden bg-white bg-opacity-20 flex justify-center items-center"},[n("v-icon",{attrs:{color:t.iconColor,"x-large":""}},[t._v(t._s(t.icon))])],1):n("div",{staticClass:"w-14 h-14 rounded overflow-hidden bg-white bg-opacity-20 flex justify-center items-center"},[n("img",{staticClass:"w-3/4 h-3/4 object-contain",attrs:{src:t.img,alt:"icon"}})]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.label,expression:"label"}],staticClass:"mt-1 text-xs font-medium text-gray-700"},[t._v(" "+t._s(t.label)+" ")])])},M=[],H={name:"DesktopIcon",props:{label:String,img:String,icon:String,iconColor:String}},z=H,N=(n("d7d0"),Object(m["a"])(z,I,M,!1,null,null,null)),J=N.exports;p()(N,{VIcon:b["a"]});var L=n("7212"),R={name:"Desktop",data:function(){return{swiperOptions:{},maxOffset:j()}},components:{DesktopIcon:J,Swiper:L["Swiper"],SwiperSlide:L["SwiperSlide"]}},q=R,W=(n("6dd8"),Object(m["a"])(q,$,Y,!1,null,null,null)),F=W.exports;p()(W,{VCol:v["a"],VContainer:g["a"],VRow:w["a"]}),i["default"].use(P["a"]);var G=[{path:"/",name:"Desktop",component:F},{path:"/settings",name:"Settings",component:function(){return n.e("chunk-2d0b3289").then(n.bind(null,"26d3"))}}],K=new P["a"]({mode:"hash",base:"/VPhone/",routes:G}),Q=K,U=n("f309");i["default"].use(U["a"]);var X=new U["a"]({});n("bbe3"),n("ba8c");i["default"].config.productionTip=!1,new i["default"]({router:Q,vuetify:X,render:function(t){return t(A)}}).$mount("#app")},"6dd8":function(t,e,n){"use strict";n("caee")},7201:function(t,e,n){},"7c55":function(t,e,n){"use strict";n("2395")},ba8c:function(t,e,n){},caee:function(t,e,n){},d348:function(t,e,n){"use strict";n("fa8c")},d7d0:function(t,e,n){"use strict";n("7201")},fa8c:function(t,e,n){}});