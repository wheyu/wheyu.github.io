(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-avatar-index"],{"1c88":function(t,n,e){"use strict";e.r(n);var a=e("63a0"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},"2f12":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"page-body uni-content-info"},[e("v-uni-view",{staticClass:"cropper-content"},[t.isShowImg?e("v-uni-view",{staticClass:"uni-corpper",style:"width:"+t.cropperInitW+"px;height:"+t.cropperInitH+"px;background:#000"},[e("v-uni-view",{staticClass:"uni-corpper-content",style:"width:"+t.cropperW+"px;height:"+t.cropperH+"px;left:"+t.cropperL+"px;top:"+t.cropperT+"px"},[e("v-uni-image",{style:"width:"+t.cropperW+"px;height:"+t.cropperH+"px",attrs:{src:t.imageSrc}}),e("v-uni-view",{staticClass:"uni-corpper-crop-box",style:"left:"+t.cutL+"px;top:"+t.cutT+"px;right:"+t.cutR+"px;bottom:"+t.cutB+"px",on:{touchstart:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.contentStartMove.apply(void 0,arguments)},touchmove:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.contentMoveing.apply(void 0,arguments)},touchend:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.contentTouchEnd.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-cropper-view-box"},[e("v-uni-view",{staticClass:"uni-cropper-dashed-h"}),e("v-uni-view",{staticClass:"uni-cropper-dashed-v"}),e("v-uni-view",{staticClass:"uni-cropper-line-t",attrs:{"data-drag":"top"},on:{touchstart:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragStart.apply(void 0,arguments)},touchmove:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragMove.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"uni-cropper-line-r",attrs:{"data-drag":"right"},on:{touchstart:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragStart.apply(void 0,arguments)},touchmove:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragMove.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"uni-cropper-line-b",attrs:{"data-drag":"bottom"},on:{touchstart:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragStart.apply(void 0,arguments)},touchmove:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragMove.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"uni-cropper-line-l",attrs:{"data-drag":"left"},on:{touchstart:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragStart.apply(void 0,arguments)},touchmove:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragMove.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"uni-cropper-point point-t",attrs:{"data-drag":"top"},on:{touchstart:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragStart.apply(void 0,arguments)},touchmove:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragMove.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"uni-cropper-point point-tr",attrs:{"data-drag":"topTight"}}),e("v-uni-view",{staticClass:"uni-cropper-point point-r",attrs:{"data-drag":"right"},on:{touchstart:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragStart.apply(void 0,arguments)},touchmove:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragMove.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"uni-cropper-point point-rb",attrs:{"data-drag":"rightBottom"},on:{touchstart:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragStart.apply(void 0,arguments)},touchmove:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragMove.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"uni-cropper-point point-b",attrs:{"data-drag":"bottom"},on:{touchstart:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragStart.apply(void 0,arguments)},touchmove:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragMove.apply(void 0,arguments)},touchend:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragEnd.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"uni-cropper-point point-bl",attrs:{"data-drag":"bottomLeft"}}),e("v-uni-view",{staticClass:"uni-cropper-point point-l",attrs:{"data-drag":"left"},on:{touchstart:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragStart.apply(void 0,arguments)},touchmove:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.dragMove.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"uni-cropper-point point-lt",attrs:{"data-drag":"leftTop"}})],1)],1)],1)],1):t._e()],1),e("v-uni-view",{staticClass:"cropper-config"},[e("v-uni-button",{staticStyle:{"margin-top":"30rpx"},attrs:{type:"primary reverse"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getImage.apply(void 0,arguments)}}},[t._v("选择头像")]),e("v-uni-button",{staticStyle:{"margin-top":"30rpx"},attrs:{type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getImageInfo.apply(void 0,arguments)}}},[t._v("提交")])],1),e("v-uni-canvas",{style:"position:absolute;border: 1px solid red; width:"+t.imageW+"px;height:"+t.imageH+"px;top:-9999px;left:-9999px;",attrs:{"canvas-id":"myCanvas"}})],1)],1)},i=[]},"63a0":function(t,n,e){"use strict";var a=e("4ea4");e("4160"),e("b64b"),e("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,i,r,c,s,p,u,d,l,h,f,v=a(e("5c0e")),g=a(e("3bdc")),m=e("fb59"),b=v.default.baseUrl,w=uni.getSystemInfoSync(),y=w.screenWidth,x=(w.pixelRatio,1),k=100,P=w.screenWidth,E={data:function(){return{imageSrc:g.default.getters.avatar,isShowImg:!1,cropperInitW:y,cropperInitH:y,cropperW:y,cropperH:y,cropperL:0,cropperT:0,transL:0,transT:0,scaleP:0,imageW:0,imageH:0,cutL:0,cutT:0,cutB:y,cutR:"100%",qualityWidth:P,innerAspectRadio:x}},onReady:function(){this.loadImage()},methods:{setData:function(t){var n=this;Object.keys(t).forEach((function(e){n.$set(n.$data,e,t[e])}))},getImage:function(){var t=this;uni.chooseImage({success:function(n){t.setData({imageSrc:n.tempFilePaths[0]}),t.loadImage()}})},loadImage:function(){var t=this;uni.getImageInfo({src:t.imageSrc,success:function(n){l=1,l>=1?(h=y,f=y/l):(h=y*l,f=y);var e=h>f?h:f;if(k=e>k?k:e,l>=1){var a=Math.ceil((y/l-(y/l-k))/2),o=a,i=Math.ceil((y-y+k)/2),r=i;t.setData({cropperW:y,cropperH:y/l,cropperL:Math.ceil((y-y)/2),cropperT:Math.ceil((y-y/l)/2),cutL:i,cutT:a,cutR:r,cutB:o,imageW:h,imageH:f,scaleP:h/y,qualityWidth:P,innerAspectRadio:l})}else{var c=Math.ceil((y*l-y*l)/2),s=c,p=Math.ceil((y-k)/2),u=p;t.setData({cropperW:y*l,cropperH:y,cropperL:Math.ceil((y-y*l)/2),cropperT:Math.ceil((y-y)/2),cutL:c,cutT:p,cutR:s,cutB:u,imageW:h,imageH:f,scaleP:h/y,qualityWidth:P,innerAspectRadio:l})}t.setData({isShowImg:!0}),uni.hideLoading()}})},contentStartMove:function(t){o=t.touches[0].pageX,i=t.touches[0].pageY},contentMoveing:function(t){var n=(o-t.touches[0].pageX)*x,e=(i-t.touches[0].pageY)*x;n>0?this.cutL-n<0&&(n=this.cutL):this.cutR+n<0&&(n=-this.cutR),e>0?this.cutT-e<0&&(e=this.cutT):this.cutB+e<0&&(e=-this.cutB),this.setData({cutL:this.cutL-n,cutT:this.cutT-e,cutR:this.cutR+n,cutB:this.cutB+e}),o=t.touches[0].pageX,i=t.touches[0].pageY},contentTouchEnd:function(){},getImageInfo:function(){var t=this;uni.showLoading({title:"图片生成中..."});var n=uni.createCanvasContext("myCanvas");n.drawImage(t.imageSrc,0,0,h,f),n.draw(!0,(function(){var n=(t.cropperW-t.cutL-t.cutR)/t.cropperW*h,e=(t.cropperH-t.cutT-t.cutB)/t.cropperH*f,a=t.cutL/t.cropperW*h,o=t.cutT/t.cropperH*f;uni.canvasToTempFilePath({x:a,y:o,width:n,height:e,destWidth:n,destHeight:e,quality:.5,canvasId:"myCanvas",success:function(t){uni.hideLoading();var n={name:"avatarfile",filePath:t.tempFilePath};(0,m.uploadAvatar)(n).then((function(t){g.default.commit("SET_AVATAR",b+t.imgUrl),uni.showToast({title:"修改成功",icon:"success"}),uni.navigateBack()}))}})}))},dragStart:function(t){r=t.touches[0].pageX,c=t.touches[0].pageY,s=this.cutL,u=this.cutR,d=this.cutB,p=this.cutT},dragMove:function(t){var n=t.target.dataset.drag;switch(n){case"right":var e=(r-t.touches[0].pageX)*x;u+e<0&&(e=-u),this.setData({cutR:u+e});break;case"left":e=(r-t.touches[0].pageX)*x;s-e<0&&(e=s),s-e>this.cropperW-this.cutR&&(e=s-(this.cropperW-this.cutR)),this.setData({cutL:s-e});break;case"top":e=(c-t.touches[0].pageY)*x;p-e<0&&(e=p),p-e>this.cropperH-this.cutB&&(e=p-(this.cropperH-this.cutB)),this.setData({cutT:p-e});break;case"bottom":e=(c-t.touches[0].pageY)*x;d+e<0&&(e=-d),this.setData({cutB:d+e});break;case"rightBottom":var a=(r-t.touches[0].pageX)*x,o=(c-t.touches[0].pageY)*x;d+o<0&&(o=-d),u+a<0&&(a=-u);var i=d+o,l=u+a;this.setData({cutB:i,cutR:l});break;default:break}}}};n.default=E},"6a4b":function(t,n,e){var a=e("8734");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("a9d8f2be",a,!0,{sourceMap:!1,shadowMode:!1})},8734:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* pages/uni-cropper/index.wxss */.uni-content-info[data-v-9c4f4132]{\n\t/* position: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tdisplay: block;\n\talign-items: center;\n\tflex-direction: column; */}.cropper-config[data-v-9c4f4132]{padding:%?20?% %?40?%}.cropper-content[data-v-9c4f4132]{min-height:%?750?%;width:100%}.uni-corpper[data-v-9c4f4132]{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;box-sizing:border-box}.uni-corpper-content[data-v-9c4f4132]{position:relative}.uni-corpper-content uni-image[data-v-9c4f4132]{display:block;width:100%;min-width:0!important;max-width:none!important;height:100%;min-height:0!important;max-height:none!important;image-orientation:0deg!important;margin:0 auto}\n\n/* 移动图片效果 */.uni-cropper-drag-box[data-v-9c4f4132]{position:absolute;top:0;right:0;bottom:0;left:0;cursor:move;background:rgba(0,0,0,.6);z-index:1}\n\n/* 内部的信息 */.uni-corpper-crop-box[data-v-9c4f4132]{position:absolute;background:hsla(0,0%,100%,.3);z-index:2}.uni-corpper-crop-box .uni-cropper-view-box[data-v-9c4f4132]{position:relative;display:block;width:100%;height:100%;overflow:visible;outline:%?1?% solid #69f;outline-color:rgba(102,153,255,.75)}\n\n/* 横向虚线 */.uni-cropper-dashed-h[data-v-9c4f4132]{position:absolute;top:33.33333333%;left:0;width:100%;height:33.33333333%;border-top:%?1?% dashed hsla(0,0%,100%,.5);border-bottom:%?1?% dashed hsla(0,0%,100%,.5)}\n\n/* 纵向虚线 */.uni-cropper-dashed-v[data-v-9c4f4132]{position:absolute;left:33.33333333%;top:0;width:33.33333333%;height:100%;border-left:%?1?% dashed hsla(0,0%,100%,.5);border-right:%?1?% dashed hsla(0,0%,100%,.5)}\n\n/* 四个方向的线  为了之后的拖动事件*/.uni-cropper-line-t[data-v-9c4f4132]{position:absolute;display:block;width:100%;background-color:#69f;top:0;left:0;height:%?1?%;opacity:.1;cursor:n-resize}.uni-cropper-line-t[data-v-9c4f4132]::before{content:"";position:absolute;top:50%;right:%?0?%;width:100%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);bottom:0;height:%?41?%;background:transparent;z-index:11}.uni-cropper-line-r[data-v-9c4f4132]{position:absolute;display:block;background-color:#69f;top:0;right:%?0?%;width:%?1?%;opacity:.1;height:100%;cursor:e-resize}.uni-cropper-line-r[data-v-9c4f4132]::before{content:"";position:absolute;top:0;left:50%;width:%?41?%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);bottom:0;height:100%;background:transparent;z-index:11}.uni-cropper-line-b[data-v-9c4f4132]{position:absolute;display:block;width:100%;background-color:#69f;bottom:0;left:0;height:%?1?%;opacity:.1;cursor:s-resize}.uni-cropper-line-b[data-v-9c4f4132]::before{content:"";position:absolute;top:50%;right:%?0?%;width:100%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);bottom:0;height:%?41?%;background:transparent;z-index:11}.uni-cropper-line-l[data-v-9c4f4132]{position:absolute;display:block;background-color:#69f;top:0;left:0;width:%?1?%;opacity:.1;height:100%;cursor:w-resize}.uni-cropper-line-l[data-v-9c4f4132]::before{content:"";position:absolute;top:0;left:50%;width:%?41?%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);bottom:0;height:100%;background:transparent;z-index:11}.uni-cropper-point[data-v-9c4f4132]{width:%?5?%;height:%?5?%;background-color:#69f;opacity:.75;position:absolute;z-index:3}.point-t[data-v-9c4f4132]{top:%?-3?%;left:50%;margin-left:%?-3?%;cursor:n-resize}.point-tr[data-v-9c4f4132]{top:%?-3?%;left:100%;margin-left:%?-3?%;cursor:n-resize}.point-r[data-v-9c4f4132]{top:50%;left:100%;margin-left:%?-3?%;margin-top:%?-3?%;cursor:n-resize}.point-rb[data-v-9c4f4132]{left:100%;top:100%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);cursor:n-resize;width:%?36?%;height:%?36?%;background-color:#69f;position:absolute;z-index:1112;opacity:1}.point-b[data-v-9c4f4132]{left:50%;top:100%;margin-left:%?-3?%;margin-top:%?-3?%;cursor:n-resize}.point-bl[data-v-9c4f4132]{left:0;top:100%;margin-left:%?-3?%;margin-top:%?-3?%;cursor:n-resize}.point-l[data-v-9c4f4132]{left:0;top:50%;margin-left:%?-3?%;margin-top:%?-3?%;cursor:n-resize}.point-lt[data-v-9c4f4132]{left:0;top:0;margin-left:%?-3?%;margin-top:%?-3?%;cursor:n-resize}\n\n/* 裁剪框预览内容 */.uni-cropper-viewer[data-v-9c4f4132]{position:relative;width:100%;height:100%;overflow:hidden}.uni-cropper-viewer uni-image[data-v-9c4f4132]{position:absolute;z-index:2}',""]),t.exports=n},c21f:function(t,n,e){"use strict";var a=e("4ea4");e("caad"),e("fb6a"),e("d3b7"),e("2532"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("3bdc")),i=a(e("5c0e")),r=e("6ae1"),c=a(e("d63b")),s=e("8709"),p=1e4,u=i.default.baseUrl,d=function(t){var n=!1===(t.headers||{}).isToken;if(t.header=t.header||{},(0,r.getToken)()&&!n&&(t.header["Authorization"]="Bearer "+(0,r.getToken)()),t.params){var e=t.url+"?"+(0,s.tansParams)(t.params);e=e.slice(0,-1),t.url=e}return new Promise((function(n,e){uni.uploadFile({timeout:t.timeout||p,url:u+t.url,filePath:t.filePath,name:t.name||"file",header:t.header,formData:t.formData,success:function(t){var a=JSON.parse(t.data),i=a.code||200,r=c.default[i]||a.msg||c.default["default"];200===i?n(a):401==i?((0,s.showConfirm)("登录状态已过期，您可以继续留在该页面，或者重新登录?").then((function(t){t.confirm&&o.default.dispatch("LogOut").then((function(t){uni.reLaunch({url:"/pages/login/login"})}))})),e("无效的会话，或者会话已过期，请重新登录。")):500===i?((0,s.toast)(r),e("500")):200!==i&&((0,s.toast)(r),e(i))},fail:function(t){var n=t.message;"Network Error"==n?n="后端接口连接异常":n.includes("timeout")?n="系统接口请求超时":n.includes("Request failed with status code")&&(n="系统接口"+n.substr(n.length-3)+"异常"),(0,s.toast)(n),e(t)}})}))},l=d;n.default=l},e481:function(t,n,e){"use strict";var a=e("6a4b"),o=e.n(a);o.a},fb59:function(t,n,e){"use strict";var a=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.updateUserPwd=r,n.getUserProfile=c,n.updateUserProfile=s,n.uploadAvatar=p,n.getMsgList=u,n.getReadMsg=d,n.getUnreadMsg=l;var o=a(e("c21f")),i=a(e("994a"));function r(t,n){var e={oldPassword:t,newPassword:n};return(0,i.default)({url:"/system/user/profile/updatePwd",method:"put",params:e})}function c(){return(0,i.default)({url:"/system/user/profile",method:"get"})}function s(t){return(0,i.default)({url:"/system/user/profile",method:"put",data:t})}function p(t){return(0,o.default)({url:"/system/user/profile/avatar",name:t.name,filePath:t.filePath})}function u(t){return(0,i.default)({url:"/sys/msg/in",method:"get",data:t,timeout:2e4})}function d(t){return(0,i.default)({url:"/sys/msg/".concat(t),method:"get",timeout:2e4})}function l(){return(0,i.default)({url:"/sys/dataset/query",method:"post",data:{code:"unread_msg"},timeout:2e4})}},fd67:function(t,n,e){"use strict";e.r(n);var a=e("2f12"),o=e("1c88");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("e481");var r,c=e("f0c5"),s=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"9c4f4132",null,!1,a["a"],r);n["default"]=s.exports}}]);