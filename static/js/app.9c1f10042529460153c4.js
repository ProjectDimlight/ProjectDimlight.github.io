webpackJsonp([0],{"9C1P":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"box",staticStyle:{width:"160px"}},[t._v("\n      S"),n("span",{staticStyle:{"font-size":"0.8em",color:"cyan"}},[t._v("OL")]),t._v("  \n      O"),n("span",{staticStyle:{"font-size":"0.8em",color:"cyan"}},[t._v("N")]),t._v("  \n      L"),n("span",{staticStyle:{"font-size":"0.8em",color:"cyan"}},[t._v("INE")])])]),t._v(" "),n("router-link",{attrs:{to:"/todo"}},[n("div",{staticClass:"box"},[t._v("\n      TODO List "),n("span",{staticClass:"label"},[t._v("日程")])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[this._v("\n    SOL模拟器 "),e("span",{staticClass:"label"},[this._v("AI")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[this._v("\n    ACZip "),e("span",{staticClass:"label"},[this._v("算法")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[this._v("\n    复位传说 "),e("span",{staticClass:"label"},[this._v("游戏")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[this._v("\n    未名元 "),e("span",{staticClass:"label"},[this._v("SOC")])])}]};var a={name:"App",components:{"header-bar":n("VU/8")({name:"Index",data:function(){return{}}},s,!1,function(t){n("x8at")},"data-v-74e42358",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("header-bar"),this._v(" "),e("div",{staticStyle:{height:"54px"}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")(a,c,!1,function(t){n("ZoFE")},null,null).exports,o=n("/ocq"),l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"size"},[n("div",{staticClass:"size block"},[n("img",{staticClass:"cell",staticStyle:{width:"100px",height:"100px"},attrs:{src:t.icon?t.icon:"/static/PCIlight.png"}}),t._v(" "),n("div",{staticClass:"cell",staticStyle:{width:"240px",padding:"0px 20px"}},[n("div",{staticStyle:{"font-weight":"bold","border-bottom":"1px grey solid","margin-bottom":"5px"}},[t._t("default")],2),t._v(" "),n("div",{staticStyle:{"font-size":"10px"}},[t._t("description")],2)]),t._v(" "),n("div",{staticClass:"cell",staticStyle:{"font-size":"14px",width:"60px","text-align":"right",color:"cyan","padding-right":"10px"}},[t._v("\n      "+t._s(t.category)+"\n    ")])]),t._v(" "),n("div",{staticClass:"size shadow"})])},staticRenderFns:[]};var d=n("VU/8")({name:"Sticker",props:["icon","category"],data:function(){return{}}},l,!1,function(t){n("c0yY")},"data-v-832227a4",null).exports,v={name:"Index",components:{sticker:d}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticStyle:{"text-align":"center","padding-top":"20px"}},[n("div",{staticStyle:{"font-size":"30px","letter-spacing":"0.5em","padding-bottom":"5px",margin:"30px 250px","border-bottom":"1px solid grey"}},[t._v("\n      我们的产品\n    ")]),t._v(" "),n("sticker",{staticClass:"sticker",attrs:{category:"AI",icon:""},scopedSlots:t._u([{key:"description",fn:function(){return[t._v("\n        模拟SOL群内发言的文本生成模型，基于LSTM、Attention和GAN\n      ")]},proxy:!0}])},[t._v("\n      SOL模拟器\n      ")]),t._v(" "),n("sticker",{staticClass:"sticker",attrs:{category:"算法",icon:""},scopedSlots:t._u([{key:"description",fn:function(){return[t._v("\n        教学级压缩软件，基于Deflate和Huffman树，效果一般但代码简单\n      ")]},proxy:!0}])},[t._v("\n      ProjectAC::Zip\n      ")]),t._v(" "),n("sticker",{staticClass:"sticker",attrs:{category:"游戏",icon:""},scopedSlots:t._u([{key:"description",fn:function(){return[t._v("\n        《世界树默示录》世界观下的第三款游戏作品，拥有极佳的剧本和BGM\n      ")]},proxy:!0}])},[t._v("\n      WTA::复位传说\n      ")]),t._v(" "),n("sticker",{staticClass:"sticker",attrs:{category:"SOC",icon:""},scopedSlots:t._u([{key:"description",fn:function(){return[t._v("\n        为参加NSCSCC2020准备的MIPS32指令集、10阶段流水线CPU\n      ")]},proxy:!0}])},[t._v("\n      未名元UntitledUnit\n      ")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"400px",width:"100vw","overflow-y":"hidden"}},[e("img",{staticStyle:{width:"100%","vertical-align":"middle",position:"relative",top:"calc(200px - 50vw * 847 / 1397)"},attrs:{src:"/static/title.png"}})])}]};var _=n("VU/8")(v,p,!1,function(t){n("9C1P")},"data-v-01e93f08",null).exports,u={name:"Index",components:{sticker:d},data:function(){return{items:[{name:"面试",detail:"查看邮箱进入面试页面，连续两场",date:"下周二"},{name:"无线网络应用",detail:"作业",date:"11-9"},{name:"无线网络应用",detail:"在线考试+实验报告",date:"11-14"},{name:"勇电凯实杯",detail:"方案调研",date:"11-13"},{name:"勇电凯实杯",detail:"具体实现",date:"11-20"},{name:"勇电凯实杯",detail:"调优，写报告",date:"11-27"},{name:"棋社策划案",detail:"编写初稿",date:"11-13"},{name:"洛谷教案",detail:"添加例题、作业等具体方案",date:"11-13"}]}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex"}},[t._m(0),t._v(" "),n("div",{staticStyle:{padding:"50px"}},t._l(t.items,function(e,i){return n("sticker",{key:i,staticStyle:{margin:"30px"},attrs:{category:e.date,icon:""},scopedSlots:t._u([{key:"description",fn:function(){return[t._v("\n        "+t._s(e.detail)+"\n      ")]},proxy:!0}],null,!0)},[t._v("\n      "+t._s(e.name)+"\n      ")])}),1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"150px",padding:"50px"}},[e("span",{staticStyle:{"font-size":"40px"}},[this._v("日程表")])])}]};var m=n("VU/8")(u,f,!1,function(t){n("YmWq")},"data-v-5ecdf3ef",null).exports;i.a.use(o.a);var h=new o.a({routes:[{path:"/",name:"Index",component:_},{path:"/todo/",name:"TODO",component:m}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:h,components:{App:r},template:"<App/>"})},YmWq:function(t,e){},ZoFE:function(t,e){},c0yY:function(t,e){},x8at:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9c1f10042529460153c4.js.map