(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-game-ylgy-index"],{3330:function(t,a,n){var e=n("b81d");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("cf3d6758",e,!0,{sourceMap:!1,shadowMode:!1})},"6d82":function(t,a,n){"use strict";var e=n("3330"),i=n.n(e);i.a},"7e74":function(t,a,n){"use strict";n("99af"),n("4e82"),Object.defineProperty(a,"__esModule",{value:!0}),a.initDefaultCardInfos=p,a.CARD_KIND=a.ALL_HAND_CARD=a.CARD_HEIGHT=a.CARD_WIDTH=void 0;var e=70;a.CARD_WIDTH=e;var i=70;a.CARD_HEIGHT=i;var r=["pg","nm","tz","xhs","xj","mg","qz","hlg","ft","nn","ym"],o=7;a.ALL_HAND_CARD=o;var s=11;a.CARD_KIND=s;var c=44,d=78,l=4,u=10,h=6,f=[],v=[];function p(t,n,o,s,c){f=[],v=[],c&&(l=c),u=t/2,t&&n&&(a.CARD_WIDTH=e=t,a.CARD_HEIGHT=i=n),o&&s&&(h=o,s),C();for(var d=0;d<c;d++)x(o-d%2,s-d%2,d);"transform: translate(".concat(e,"px, ").concat(i,"px);z-index: ",1,"; width: ").concat(e,"px; height: ").concat(i,"px"),r[0],"transform: translate(".concat(e,"px, ").concat(2*i,"px);z-index: ",3,"; width: ").concat(e,"px; height: ").concat(i,"px"),r[3],"transform: translate(".concat(0*e,"px, ").concat(1*i,"px);z-index: ",3,"; width: ").concat(e,"px; height: ").concat(i,"px"),r[1];return f}function C(){for(var t=0,a=0;a<l;a++){var n=h-a%2,e=h-a%2;t+=n*e}d=3*Math.floor(t/5),c=t-d;for(var i=0,r=0;r<d/3;r++)i==s&&(i=0),v.push(i),v.push(i),v.push(i),i++;for(var o=0;o<c;o++)v.push(s+10);v.sort((function(){return.5-Math.random()}))}function x(t,a,n){for(var o=0;o<t;o++)for(var c=0;c<a;c++){var d=e*o+u*(n%2),l=i*c+u*(n%2),h=v.pop(),p=h;!p||p>s||f.push({id:o+"-"+c+"-"+n,x:d,y:l,level:n,translateStyle:"transform: translate(".concat(d,"px, ").concat(l,"px);z-index: ").concat(n,"; width: ").concat(e,"px; height: ").concat(i,"px"),isBottom:!1,cardClass:["card"],content:p,key:h,img:r[h]})}}},"8f27":function(t,a,n){"use strict";n("4de4"),n("7db0"),n("c740"),n("4160"),n("a434"),n("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n("7e74"),i={data:function(){return{allCard:[],leftCard:[],handCard:[],windowHeight:0,windowWidth:0,cardW:0,cardH:0,cardWCount:6,cardHCount:6,allHandCardCount:0,cardWH:"",gameState:"",isGameOver:!0,showToast:!1,toastInfo:""}},created:function(){},onLoad:function(){var t=this;uni.getSystemInfo({success:function(a){t.windowWidth=a.windowWidth,t.windowHeight=a.windowHeight,t.initData()}})},methods:{initData:function(t,a){var n=this.windowWidth-20,i=this.windowHeight-20;this.cardWCount=t||6,this.cardHCount=a||6;var r=n/Math.max(this.cardWCount,7),o=i/(this.cardHCount+2);this.cardW=this.cardH=Math.min(r,o),this.allHandCardCount=e.ALL_HAND_CARD,this.clearData()},clearData:function(){this.allCard=[],this.leftCard=[],this.handCard=[],this.isGameOver=!0},initCardData:function(){var t=(0,e.initDefaultCardInfos)(this.cardW,this.cardH,this.cardWCount,this.cardHCount,4);this.allCard=t,this.leftCard=t;for(var a=function(a){console.log(a," 张数 ",t.filter((function(t){return t.content==a})).length)},n=0;n<9;n++)a(n);this.isGameOver=!1},selectWHCount:function(t,a){this.initData(t,a),this.startOrRestartGame()},startOrRestartGame:function(){this.clearData(),this.initCardData(),this.findAndChangeBottom()},refreshCard:function(){},showToastClick:function(t){this.showToast=!0,this.toastInfo=t},clickCard:function(t){if(t&&!t.isBottom&&!this.isGameOver){var a=this.leftCard.findIndex((function(a){return a.id===t.id})),n=0,e=-1;return this.handCard.forEach((function(a){n++,-1==e&&a.content==t.content&&(e=n)})),-1==e?this.handCard.push(t):this.handCard.splice(e,0,t),this.leftCard.splice(a,1),this.handleHandCard(),this.handCard.length>=this.allHandCardCount?(this.isGameOver=!0,void this.showToastClick("失败！！")):0==this.leftCard.length?0==this.handCard.length?(this.isGameOver=!0,void this.showToastClick("成功！！")):(this.isGameOver=!0,void this.showToastClick("失败！！")):void this.findAndChangeBottom()}},handleHandCard:function(){for(var t=this,a=0,n=function(n){a=t.handCard.filter((function(t){return t.content==n})).length,a>=3&&(t.handCard=t.handCard.filter((function(t){return t.content!=n})))},e=0;e<20;e++)n(e)},findAndChangeBottom:function(){var t=this;this.leftCard.forEach((function(a){var n=t.leftCard.find((function(n){return t.isCovered(a,n)}));n?t.setCardBottom(a):t.setCardNormal(a)}))},isCovered:function(t,a){if(t.id==a.id)return!1;if(t.level>=a.level)return!1;var n=Math.abs(a.x-t.x)<this.cardW,e=Math.abs(a.y-t.y)<this.cardW;return n&&e},setCardBottom:function(t){t.isBottom=!0,t.cardClass=["card-bottom"]},setCardNormal:function(t){t.isBottom=!1,t.cardClass=["card"]}}};a.default=i},"91e9":function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return r})),n.d(a,"a",(function(){return e}));var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"content"},[n("v-uni-button",{staticClass:"restart-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.isGameOver=!t.isGameOver}}},[t._v("选项")]),n("v-uni-view",{staticClass:"card-box",style:"width:"+(t.cardW*t.cardWCount+20)+"px; height:"+(t.cardW*t.cardHCount+20)+"px"},[t._l(t.leftCard,(function(a,e){return n("v-uni-view",{key:e,class:a.cardClass,style:a.translateStyle,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickCard(a)}}},[n("v-uni-view",{staticClass:"card-item"},[n("img",{staticClass:"card-img",attrs:{src:"../../static/images/ylgy/"+a.img+".png"}})])],1)})),t.isGameOver?n("v-uni-view",{staticClass:"restart-box"},[n("v-uni-view",{staticClass:"restart-item"},[n("v-uni-button",{staticClass:"restart-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectWHCount(4,4)}}},[t._v("4x4")]),n("v-uni-button",{staticClass:"restart-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectWHCount(6,6)}}},[t._v("6x6")]),n("v-uni-button",{staticClass:"restart-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectWHCount(8,8)}}},[t._v("8x8")]),n("v-uni-button",{staticClass:"restart-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectWHCount(10,10)}}},[t._v("10x10")])],1)],1):t._e()],2),n("v-uni-view",{staticClass:"card-hand-box",style:"width:"+(t.cardW*t.allHandCardCount+20)+"px; height:"+(t.cardH+14)+"px"},t._l(t.handCard,(function(a,e){return n("v-uni-view",{key:e,staticClass:"card-hand-item",style:"width:"+t.cardW+"px; height:"+t.cardH+"px"},[n("v-uni-view",{staticClass:"card-item"},[n("img",{staticClass:"card-img",attrs:{src:"../../static/images/ylgy/"+a.img+".png"}})])],1)})),1),t.showToast?n("v-uni-view",{staticClass:"toast-view",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showToast=!1}}},[n("v-uni-view",{staticClass:"toast-box"},[n("v-uni-view",{staticClass:"toast-info"},[t.toastInfo?n("v-uni-view",{staticClass:"toast-title"},[t._v(t._s(t.toastInfo))]):t._e()],1)],1)],1):t._e()],1)},r=[]},b81d:function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,".content[data-v-3e71c67e]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:50px;position:fixed;top:0;bottom:0;left:0;right:0}.card[data-v-3e71c67e]{position:absolute;border-radius:6px;color:#000;font-size:20px;\n    /* box-shadow: 0 8px 0 green; */text-align:center;line-height:30px;cursor:default}.card-bottom[data-v-3e71c67e]{-webkit-filter:grayscale(.9);filter:grayscale(.9);position:absolute;color:#000;font-size:20px;\n    /* box-shadow: 0 8px 0 green; */text-align:center;line-height:30px;cursor:default}.card-box[data-v-3e71c67e]{margin-left:10px;margin-top:10px}.card-bottom > .card-item[data-v-3e71c67e]{-webkit-filter:drop-shadow(1px 2px 2px grey);filter:drop-shadow(1px 2px 2px gray)}.card > .card-item[data-v-3e71c67e]{-webkit-filter:drop-shadow(2px 4px 3px rgba(30,144,32,.656));filter:drop-shadow(2px 4px 3px rgba(30,144,32,.656))}.card-item[data-v-3e71c67e]{background-color:#fff;width:90%;height:90%;margin-left:5%;margin-top:5%;border-radius:6px}.card-img[data-v-3e71c67e]{width:80%;height:80%;margin-left:10%;margin-top:10%}.card-hand-box[data-v-3e71c67e]{display:flex;background:#90ee90;border-radius:6px;padding:7px 10px;margin-top:10px}.card-hand-item[data-v-3e71c67e]{color:#000;font-size:20px;-webkit-filter:drop-shadow(2px 4px 6px #000);filter:drop-shadow(2px 4px 6px black);text-align:center;line-height:30px;cursor:default}.toast-view[data-v-3e71c67e]{position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,.43);display:flex;justify-content:center;align-items:center;z-index:999}.toast-box[data-v-3e71c67e]{border-radius:.5rem;padding:.5rem}.toast-info[data-v-3e71c67e]{font-size:1.2rem;line-height:1.6rem;font-weight:550;color:#fff}.restart-box[data-v-3e71c67e]{position:relative;width:100%;height:100%;background-color:rgba(0,0,0,.58);z-index:99;display:flex;justify-content:center;align-items:center;border-radius:10px}.restart-btn + .restart-btn[data-v-3e71c67e]{margin-top:10px}.restart-btn[data-v-3e71c67e]{height:40px}",""]),t.exports=a},ee72:function(t,a,n){"use strict";n.r(a);var e=n("8f27"),i=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(a,t,(function(){return e[t]}))}(r);a["default"]=i.a},f8ac:function(t,a,n){"use strict";n.r(a);var e=n("91e9"),i=n("ee72");for(var r in i)"default"!==r&&function(t){n.d(a,t,(function(){return i[t]}))}(r);n("6d82");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"3e71c67e",null,!1,e["a"],o);a["default"]=c.exports}}]);