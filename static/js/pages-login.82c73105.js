(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login"],{"110c":function(t,n,e){"use strict";e.r(n);var r=e("3614"),o=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=o.a},"17ee":function(t,n,e){var r=e("7d1f");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=e("4f06").default;o("6e56a2ac",r,!0,{sourceMap:!1,shadowMode:!1})},"1da1":function(t,n,e){"use strict";function r(t,n,e,r,o,i,a){try{var c=t[i](a),l=c.value}catch(u){return void e(u)}c.done?n(l):Promise.resolve(l).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){var a=t.apply(n,e);function c(t){r(a,o,i,c,l,"next",t)}function l(t){r(a,o,i,c,l,"throw",t)}c(void 0)}))}}e("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=o},3614:function(t,n,e){"use strict";var r=e("4ea4");e("99af"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("96cf");var o=r(e("1da1")),i=e("be6e"),a=(e("338a"),{data:function(){return{codeUrl:"",captchaEnabled:!0,globalConfig:getApp().globalData.config,loginForm:{username:"jhadmin",password:"Jhkj0517",code:"",uuid:"",type:"1"}}},created:function(){this.getCode()},onLoad:function(t){return(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{handlePrivacy:function(){var t=this.globalConfig.appInfo.agreements[0];this.$tab.navigateTo("/pages/common/webview/index?title=".concat(t.title,"&url=").concat(t.url))},handleUserAgrement:function(){var t=this.globalConfig.appInfo.agreements[1];this.$tab.navigateTo("/pages/common/webview/index?title=".concat(t.title,"&url=").concat(t.url))},getCode:function(){var t=this;(0,i.getCodeImg)().then((function(n){t.captchaEnabled=void 0===n.captchaEnabled||n.captchaEnabled,t.captchaEnabled&&(t.codeUrl="data:image/gif;base64,"+n.img,t.loginForm.uuid=n.uuid,t.loginForm.type="1")}))},handleLogin:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:""===t.loginForm.username?t.$modal.msgError("请输入您的账号"):""===t.loginForm.password?t.$modal.msgError("请输入您的密码"):""===t.loginForm.code&&t.captchaEnabled?t.$modal.msgError("请输入验证码"):(t.$modal.loading("登录中，请耐心等待..."),t.pwdLogin());case 1:case"end":return n.stop()}}),n)})))()},pwdLogin:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$store.dispatch("Login",t.loginForm).then((function(){t.$modal.closeLoading(),t.loginSuccess()})).catch((function(){t.captchaEnabled&&t.getCode()}));case 1:case"end":return n.stop()}}),n)})))()},loginSuccess:function(t){var n=this;this.$store.dispatch("GetInfo").then((function(t){n.$tab.reLaunch("work/index")}))}}});n.default=a},"6bf3":function(t,n,e){"use strict";e.r(n);var r=e("7b23"),o=e("110c");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("f67d");var a,c=e("f0c5"),l=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"5729a75d",null,!1,r["a"],a);n["default"]=l.exports},"7b23":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"normal-login-container"},[e("v-uni-view",{staticClass:"logo-content align-center justify-center flex"},[e("v-uni-image",{staticStyle:{width:"100rpx",height:"100rpx"},attrs:{src:t.globalConfig.appInfo.logo,mode:"widthFix"}}),e("v-uni-text",{staticClass:"title"},[t._v("江淮资产管理")])],1),e("v-uni-view",{staticClass:"login-form-content"},[e("v-uni-view",{staticClass:"input-item flex align-center"},[e("v-uni-view",{staticClass:"iconfont icon-user icon"}),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入账号",maxlength:"30"},model:{value:t.loginForm.username,callback:function(n){t.$set(t.loginForm,"username",n)},expression:"loginForm.username"}})],1),e("v-uni-view",{staticClass:"input-item flex align-center"},[e("v-uni-view",{staticClass:"iconfont icon-password icon"}),e("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码",maxlength:"20"},model:{value:t.loginForm.password,callback:function(n){t.$set(t.loginForm,"password",n)},expression:"loginForm.password"}})],1),t.captchaEnabled?e("v-uni-view",{staticClass:"input-item flex align-center"},[e("v-uni-view",{staticClass:"iconfont icon-code icon"}),e("v-uni-input",{staticClass:"input",attrs:{type:"number",placeholder:"请输入验证码",maxlength:"4"},model:{value:t.loginForm.code,callback:function(n){t.$set(t.loginForm,"code",n)},expression:"loginForm.code"}}),e("v-uni-image",{staticClass:"login-code-img",attrs:{src:t.codeUrl},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getCode.apply(void 0,arguments)}}})],1):t._e(),e("v-uni-view",{staticClass:"action-btn"},[e("v-uni-button",{staticClass:"login-btn cu-btn block bg-blue lg round",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleLogin.apply(void 0,arguments)}}},[t._v("登录")])],1)],1),e("v-uni-view",{staticClass:"xieyi text-center"},[e("v-uni-text",{staticClass:"text-grey1"},[t._v("登录即代表同意")]),e("v-uni-text",{staticClass:"text-blue",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleUserAgrement.apply(void 0,arguments)}}},[t._v("《用户协议》")]),e("v-uni-text",{staticClass:"text-blue",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handlePrivacy.apply(void 0,arguments)}}},[t._v("《隐私协议》")])],1)],1)},i=[]},"7d1f":function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-5729a75d]{background-color:#fff}.normal-login-container[data-v-5729a75d]{width:100%}.normal-login-container .logo-content[data-v-5729a75d]{width:100%;font-size:21px;text-align:center;padding-top:15%}.normal-login-container .logo-content uni-image[data-v-5729a75d]{border-radius:4px}.normal-login-container .logo-content .title[data-v-5729a75d]{margin-left:10px}.normal-login-container .login-form-content[data-v-5729a75d]{text-align:center;margin:20px auto;margin-top:15%;width:80%}.normal-login-container .login-form-content .input-item[data-v-5729a75d]{margin:20px auto;background-color:#f5f6f7;height:45px;border-radius:20px}.normal-login-container .login-form-content .input-item .icon[data-v-5729a75d]{font-size:%?38?%;margin-left:10px;color:#999}.normal-login-container .login-form-content .input-item .input[data-v-5729a75d]{width:100%;font-size:14px;line-height:20px;text-align:left;padding-left:15px}.normal-login-container .login-form-content .login-btn[data-v-5729a75d]{margin-top:40px;height:45px}.normal-login-container .login-form-content .xieyi[data-v-5729a75d]{color:#333;margin-top:20px}.normal-login-container .easyinput[data-v-5729a75d]{width:100%}.login-code-img[data-v-5729a75d]{height:45px}body.?%PAGE?%[data-v-5729a75d]{background-color:#fff}',""]),t.exports=n},"96cf":function(t,n){!function(n){"use strict";var e,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag",u="object"===typeof t,s=n.regeneratorRuntime;if(s)u&&(t.exports=s);else{s=n.regeneratorRuntime=u?t.exports:{},s.wrap=x;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",g={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(G([])));y&&y!==r&&o.call(y,a)&&(v=y);var w=C.prototype=E.prototype=Object.create(v);L.prototype=w.constructor=C,C.constructor=L,C[l]=L.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var n="function"===typeof t&&t.constructor;return!!n&&(n===L||"GeneratorFunction"===(n.displayName||n.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(w),t},s.awrap=function(t){return{__await:t}},_(k.prototype),k.prototype[c]=function(){return this},s.AsyncIterator=k,s.async=function(t,n,e,r){var o=new k(x(t,n,e,r));return s.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(w),w[l]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},s.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){while(n.length){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},s.values=G,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:G(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}}}function x(t,n,e,r){var o=n&&n.prototype instanceof E?n:E,i=Object.create(o.prototype),a=new P(r||[]);return i._invoke=F(t,e,a),i}function b(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}function E(){}function L(){}function C(){}function _(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function k(t){function n(e,r,i,a){var c=b(t[e],t,r);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){n("next",t,i,a)}),(function(t){n("throw",t,i,a)})):Promise.resolve(u).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,a)}))}a(c.arg)}var e;function r(t,r){function o(){return new Promise((function(e,o){n(t,r,e,o)}))}return e=e?e.then(o,o):o()}this._invoke=r}function F(t,n,e){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return R()}e.method=o,e.arg=i;while(1){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===g)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===f)throw r=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=h;var l=b(t,n,e);if("normal"===l.type){if(r=e.done?p:d,l.arg===g)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(r=p,e.method="throw",e.arg=l.arg)}}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=b(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function $(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function G(t){if(t){var n=t[a];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){while(++r<t.length)if(o.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:R}}function R(){return{value:e,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},f67d:function(t,n,e){"use strict";var r=e("17ee"),o=e.n(r);o.a}}]);