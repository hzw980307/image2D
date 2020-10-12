(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{29:function(a,t,e){"use strict";var i=e(4),r=e.n(i);t.a=function(a,t){r()("."+a).attr("active","no"),r()("."+a+"."+t).attr("active","yes")}},30:function(a,t,e){"use strict";var i=e(4),r=e.n(i);t.a=function(a,t){t=t||0,a=a||document.documentElement;var e=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var t=a.split("&"),e={};return t.forEach((function(a){var t=a.split("=");e[t[0]]=t[1]})),e}().fixed;if(e){var i=r()("#fixed-"+e);if(i.length>0){var d=i[0].offsetTop-t,s=a.scrollTop||0;r.a.animation((function(t){a.scrollTop=(d-s)*t+s}),500,(function(){a.scrollTop=d}))}}else a.scrollTop=0}},56:function(a,t,e){var i=e(57);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,e(2).default)("data-icrush-546b1d2e",i,!0)},57:function(a,t,e){(a.exports=e(1)(!1)).push([a.i,"",""])},82:function(a,t,e){"use strict";e.r(t);var i=e(29),r=e(30),d={created:function(){Object(i.a)("menu-2","introduce")},mounted:function(){prettyPrint(),Object(r.a)(document.getElementById("course-id"),44)}};e(56);d.render=function(a){return a("div",{class:"course-view","data-icrush-546b1d2e":""},[a("header",{id:"fixed-top","data-icrush-546b1d2e":""},["介绍"]),a("h2",{id:"fixed-what","data-icrush-546b1d2e":""},["image2D是什么？"]),a("p",{"data-icrush-546b1d2e":""},["原生浏览器提供了",a("span",{class:"important","data-icrush-546b1d2e":""},["Canvas2D"]),"和",a("span",{class:"important","data-icrush-546b1d2e":""},["SVG"]),"画布，分别用于绘制位图和矢图，不过存在一些问题："]),a("ul",{"data-icrush-546b1d2e":""},[a("li",{"data-icrush-546b1d2e":""},["不同浏览器存在兼容问题，同样的代码绘制出来的效果存在非常明显的差异。"]),a("li",{"data-icrush-546b1d2e":""},["画布本身的缺陷，Canvas2D存在锯齿模糊问题而SVG标签操作比较麻烦。"]),a("li",{"data-icrush-546b1d2e":""},["计算问题，比如树图、插值、坐标变换等较麻烦的计算会消耗绘图的乐趣。"])]),a("p",{"data-icrush-546b1d2e":""},["为了解决这些问题我们抽象出了",a("span",{class:"important","data-icrush-546b1d2e":""},["image2D"]),"库以兼容不同浏览器，在屏蔽了两种画布差异的同时保留了各自的优点，并且进行一些必要的抽象（比如针对Canvas2D新增了图层），又提供了一些有意义的辅助计算和补充方法。"]),a("h1",{"data-icrush-546b1d2e":""},["演示如何绘制一个圆弧"]),a("p",{"data-icrush-546b1d2e":""},["下面我们来演示如何使用Canvas2D画笔绘制一个圆弧（SVG画笔和复杂图形请通过后续教程进行学习）！"]),a("h2",{id:"fixed-painter","data-icrush-546b1d2e":""},["获取画笔"]),a("p",{"data-icrush-546b1d2e":""},["需要注意的是，image2D的思想是进行一层抽象来屏蔽那些不友好的差异，因此整体设计和原生的类似，同样存在两种画笔，我们来看看Canvas2D画笔如何获取："]),a("div",{"ui-copy":"","data-icrush-546b1d2e":""},[a("pre",{class:"prettyprint","data-icrush-546b1d2e":""},['// 我们假定我们现在在页面有一个canvas标签↵var painter=$$(\'canvas\').attr({↵    "width":300,↵    "height":300↵}).painter();'])]),a("p",{"data-icrush-546b1d2e":""},["上面的$$('canvas')返回一个 image2D 对象，通过属性",a("a",{href:"#/api/xhtml?fixed=selector",target:"_blank","data-icrush-546b1d2e":""},["选择器"]),"查找结点，我们设置了画布的大小，然后调用对象上的 painter 方法就可以获取画笔了。"]),a("h2",{id:"fixed-config","data-icrush-546b1d2e":""},["配置画笔"]),a("p",{"data-icrush-546b1d2e":""},["比如说画笔的颜色，线条粗细等，虽然全部有默认值，不过大部分情况下你可能需要对某些特性进行配置："]),a("div",{"ui-copy":"","data-icrush-546b1d2e":""},[a("pre",{class:"prettyprint","data-icrush-546b1d2e":""},["painter.config({↵    'strokeStyle':'red',↵    'lineWidth':3,↵    'lineDash':[5]↵});"])]),a("p",{"data-icrush-546b1d2e":""},["上面我们配置了线条的颜色，粗细和类型。"]),a("h2",{id:"fixed-chart","data-icrush-546b1d2e":""},["绘制简单图形"]),a("p",{"data-icrush-546b1d2e":""},["画笔获取并配置好了以后，直接调用",a("a",{href:"#/api/painter?fixed=method",target:"_blank","data-icrush-546b1d2e":""},["画笔上的方法"]),"即可绘图："]),a("div",{"ui-copy":"","data-icrush-546b1d2e":""},[a("pre",{class:"prettyprint","data-icrush-546b1d2e":""},["painter.strokeArc(150, 150, 100, 130, Math.PI/2, Math.PI/2*3);"])]),a("p",{"data-icrush-546b1d2e":""},["这样，一个圆弧就绘制好了，可以",a("a",{href:"./inline/example-1.html",target:"_blank","data-icrush-546b1d2e":""},["点击此次"]),"查看运行效果。"]),a("p",{"data-icrush-546b1d2e":""},["怎么样？是不是很简单，你可以把更多的精力放在设计更多有趣图形上，这个库永远都是自由、开源、讨论和进步的，欢迎提出任何",a("a",{href:"https://github.com/yelloxing/image2D/issues",target:"_blank","data-icrush-546b1d2e":""},["意见"]),"来帮忙我们改进。"])])};t.default=d}}]);