(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-webview-index"],{5832:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.params.url?n("v-uni-view",[n("v-uni-web-view",{attrs:{"webview-styles":e.webviewStyles,src:""+e.params.url}})],1):e._e()},i=[]},"6e1e":function(e,t,n){"use strict";n.r(t);var r=n("d12c"),u=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=u.a},7543:function(e,t,n){"use strict";n.r(t);var r=n("5832"),u=n("6e1e");for(var i in u)"default"!==i&&function(e){n.d(t,e,(function(){return u[e]}))}(i);var a,c=n("f0c5"),o=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=o.exports},d12c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{params:{},webviewStyles:{progress:{color:"#FF3333"}}}},props:{src:{type:[String],default:null}},onLoad:function(e){this.params=e,e.title&&uni.setNavigationBarTitle({title:e.title})}};t.default=r}}]);