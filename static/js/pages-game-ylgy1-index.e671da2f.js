(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-game-ylgy1-index"],{"429e":function(t,a,n){"use strict";var i;n.d(a,"b",(function(){return r})),n.d(a,"c",(function(){return s})),n.d(a,"a",(function(){return i}));var r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"content"},[n("img",{staticClass:"card-img",attrs:{id:"img-nn",src:"http://192.168.31.224:8080/nn.png"}}),n("v-uni-canvas",{style:"width: "+t.wCount*t.cardW+"px; height: "+t.hCount*t.cardW+"px;;border:1px solid #000000;",attrs:{"canvas-id":"firstCanvas",id:"firstCanvas"}})],1)},s=[]},"484a":function(t,a,n){"use strict";n.r(a);var i=n("429e"),r=n("f0a7");for(var s in r)"default"!==s&&function(t){n.d(a,t,(function(){return r[t]}))}(s);n("5a45");var e,o=n("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"7dfe808e",null,!1,i["a"],e);a["default"]=c.exports},"5a45":function(t,a,n){"use strict";var i=n("65da"),r=n.n(i);r.a},"65da":function(t,a,n){var i=n("78e5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("ac67ba9c",i,!0,{sourceMap:!1,shadowMode:!1})},"78e5":function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,".content[data-v-7dfe808e]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:50px;position:fixed;top:0;bottom:0;left:0;right:0}",""]),t.exports=a},ed46:function(t,a,n){"use strict";n("4160"),n("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{ctx:null,wCount:2,hCount:2,levelCount:4,cardW:100,allCardsData:[],wWidth:100,wHeight:100}},onReady:function(t){},onLoad:function(){var t=this;this.ctx=uni.createCanvasContext("firstCanvas"),uni.getSystemInfo({success:function(a){t.wWidth=a.windowWidth,t.wHeight=a.windowHeight,t.initData(),t.initCardsData()}}),setInterval((function(){t.startDraw()}),10)},methods:{initData:function(){var t=this.wWidth-20,a=this.wHeight-40,n=t/Math.max(this.wCount,8),i=a/(this.hCount+3);this.cardW=this.cardH=Math.min(n,i)},startDraw:function(){var t=this,a=this.ctx;this.clearCtx(),this.changeCards(),this.allCardsData.forEach((function(n){t.drawCards(a,n)})),a.stroke(),a.draw()},clearCtx:function(){var t=this.cardW,a=this.hCount,n=this.wCount;this.ctx.clearRect(0,0,t*n,t*a)},changeCards:function(){this.allCardsData.forEach((function(t){t.x++}))},initCardsData:function(){this.allCardsData=[];this.ctx;for(var t=this.cardW,a=this.hCount,n=this.wCount,i=0;i<a;i++)for(var r=0;r<n;r++)this.allCardsData.push({x:r*t,y:i*t,width:t})},drawCards:function(t,a){var n=a.x,i=a.y,r=a.width,s=r/5,e=r-s,o=n+s/2,c=i+s/2;t.fillStyle="#DDD",t.shadowOffsetX=r/18,t.shadowOffsetY=r/12,t.shadowBlur=r/10,t.fillRect(o,c,e,e)}}};a.default=i},f0a7:function(t,a,n){"use strict";n.r(a);var i=n("ed46"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(a,t,(function(){return i[t]}))}(s);a["default"]=r.a}}]);