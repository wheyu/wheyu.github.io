(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-about-index"],{"0104":function(t,n,e){"use strict";var i=e("5bf2"),a=e.n(i);a.a},"0be9":function(t,n,e){"use strict";e.r(n);var i=e("9019"),a=e("6bf3");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("0104");var s,o=e("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"24b1c60f",null,!1,i["a"],s);n["default"]=u.exports},"1cea":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"\n.uni-link[data-v-604a1870]{cursor:pointer}\n.uni-link--withline[data-v-604a1870]{text-decoration:underline}",""]),t.exports=n},"291b":function(t,n,e){"use strict";var i=e("8678"),a=e.n(i);a.a},"538f":function(t,n,e){"use strict";e("d3b7"),e("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},align:{type:String,default:"left"},color:{type:String,default:"#333333"},stat:{type:[Boolean,String],default:""}},data:function(){return{}},computed:{textAlign:function(){var t="center";switch(this.align){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end";break}return t}},watch:{title:function(t){this.isOpenStat()&&uni.report&&uni.report("title",this.title)}},mounted:function(){this.isOpenStat()&&uni.report&&uni.report("title",this.title)},methods:{isOpenStat:function(){""===this.stat&&(this.isStat=!1);var t="boolean"===typeof this.stat&&this.stat||"string"===typeof this.stat&&""!==this.stat;return""===this.type&&(this.isStat=!0,"false"===this.stat.toString()&&(this.isStat=!1)),""!==this.type&&(this.isStat=!0,this.isStat=!!t),this.isStat}}};n.default=i},"5bf2":function(t,n,e){var i=e("b317");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("05ee32b1",i,!0,{sourceMap:!1,shadowMode:!1})},"6bf3":function(t,n,e){"use strict";e.r(n);var i=e("538f"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},8678:function(t,n,e){var i=e("1cea");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("7b0a02f4",i,!0,{sourceMap:!1,shadowMode:!1})},9019:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-title__box",style:{"align-items":t.textAlign}},[e("v-uni-text",{staticClass:"uni-title__base",class:["uni-"+t.type],style:{color:t.color}},[t._v(t._s(t.title))])],1)},r=[]},a82b:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{url:getApp().globalData.config.appInfo.site_url,version:getApp().globalData.config.appInfo.version}}};n.default=i},ace8:function(t,n,e){"use strict";var i=e("e4bf"),a=e.n(i);a.a},af67:function(t,n,e){"use strict";e("a9e3"),e("2ca0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(t){uni.makePhoneCall({phoneNumber:t})}}};n.default=i},b1b1:function(t,n,e){"use strict";e.r(n);var i=e("bb2c"),a=e("d9d4");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("ace8");var s,o=e("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"6f49c4bc",null,!1,i["a"],s);n["default"]=u.exports},b317:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .uni-title {\n\n} */.uni-title__box[data-v-24b1c60f]{\ndisplay:flex;\nflex-direction:column;align-items:flex-start;justify-content:center;padding:8px 0;flex:1}.uni-title__base[data-v-24b1c60f]{font-size:15px;color:#333;font-weight:500}.uni-h1[data-v-24b1c60f]{font-size:20px;color:#333;font-weight:700}.uni-h2[data-v-24b1c60f]{font-size:18px;color:#333;font-weight:700}.uni-h3[data-v-24b1c60f]{font-size:16px;color:#333;font-weight:700\n\t/* font-weight: 400; */}.uni-h4[data-v-24b1c60f]{font-size:14px;color:#333;font-weight:700\n\t/* font-weight: 300; */}.uni-h5[data-v-24b1c60f]{font-size:12px;color:#333;font-weight:700\n\t/* font-weight: 200; */}",""]),t.exports=n},b6d6:function(t,n,e){"use strict";e.r(n);var i=e("af67"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},bb2c:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={uniTitle:e("0be9").default,uniLink:e("e363").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"about-container"},[e("v-uni-view",{staticClass:"header-section text-center"},[e("v-uni-image",{staticStyle:{width:"150rpx",height:"150rpx"},attrs:{src:"/static/logo200.png",mode:"widthFix"}}),e("uni-title",{attrs:{type:"h2",title:"江淮资产管理移动端"}})],1),e("v-uni-view",{staticClass:"content-section"},[e("v-uni-view",{staticClass:"menu-list"},[e("v-uni-view",{staticClass:"list-cell list-cell-arrow"},[e("v-uni-view",{staticClass:"menu-item-box"},[e("v-uni-view",[t._v("版本信息")]),e("v-uni-view",{staticClass:"text-right"},[t._v("v"+t._s(t.version))])],1)],1),e("v-uni-view",{staticClass:"list-cell list-cell-arrow"},[e("v-uni-view",{staticClass:"menu-item-box"},[e("v-uni-view",[t._v("官方邮箱")]),e("v-uni-view",{staticClass:"text-right"})],1)],1),e("v-uni-view",{staticClass:"list-cell list-cell-arrow"},[e("v-uni-view",{staticClass:"menu-item-box"},[e("v-uni-view",[t._v("服务热线")]),e("v-uni-view",{staticClass:"text-right"})],1)],1),e("v-uni-view",{staticClass:"list-cell list-cell-arrow"},[e("v-uni-view",{staticClass:"menu-item-box"},[e("v-uni-view",[t._v("公司网站")]),e("v-uni-view",{staticClass:"text-right"},[e("uni-link",{attrs:{href:t.url,text:t.url,showUnderLine:"false"}})],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"copyright"},[e("v-uni-view",[t._v("Copyright © 2022 jhkj All Rights Reserved.")])],1)],1)},r=[]},d9d4:function(t,n,e){"use strict";e.r(n);var i=e("a82b"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},dd58f:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isShowA?e("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},attrs:{href:t.href,download:t.download}},[t._t("default",[t._v(t._s(t.text))])],2):e("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openURL.apply(void 0,arguments)}}},[t._t("default",[t._v(t._s(t.text))])],2)},r=[]},dd5a:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-6f49c4bc]{background-color:#f8f8f8}.copyright[data-v-6f49c4bc]{margin-top:%?50?%;text-align:center;line-height:%?60?%;color:#999}.header-section[data-v-6f49c4bc]{display:flex;padding:%?30?% 0 0;flex-direction:column;align-items:center}body.?%PAGE?%[data-v-6f49c4bc]{background-color:#f8f8f8}',""]),t.exports=n},e363:function(t,n,e){"use strict";e.r(n);var i=e("dd58f"),a=e("b6d6");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("291b");var s,o=e("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"604a1870",null,!1,i["a"],s);n["default"]=u.exports},e4bf:function(t,n,e){var i=e("dd5a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("598ec516",i,!0,{sourceMap:!1,shadowMode:!1})}}]);