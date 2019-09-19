(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{42:function(t,e,r){"use strict";(function(t){
/*!
    * image2D - 🍇 使用ECMAScript绘制二维图片。Drawing Two-Dimensional Pictures Using ECMAScript.
    * git+https://github.com/yelloxing/image2D.git
    *
    * author 心叶
    *
    * version 1.4.0
    *
    * build Thu Apr 11 2019
    *
    * Copyright yelloxing
    * Released under the MIT license
    *
    * Date:Fri Sep 06 2019 23:09:28 GMT+0800 (中国标准时间)
    */
var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){var r=Object.prototype.toString;function n(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":r.call(t)}function o(t){if(null===t||"object"!==(void 0===t?"undefined":e(t))||"[object Object]"!=n(t))return!1;if(null===Object.getPrototypeOf(t))return!0;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(t)===r}function i(t){return null!==t&&"object"===(void 0===t?"undefined":e(t))&&(1===t.nodeType||9===t.nodeType||11===t.nodeType)&&!o(t)}function a(t){var r=void 0===t?"undefined":e(t);return null!=t&&("object"===r||"function"===r)}function u(t){if(!a(t))return!1;var e=n(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object Proxy]"===e}var c=function(t,e){for(var r in e)try{t[r]=e[r]}catch(t){throw new Error("Illegal property value！")}return t},f="http://www.w3.org/2000/svg",l="http://www.w3.org/1999/xlink",s={whitespace:"[\\x20\\t\\r\\n\\f]",blank:"[\\n\\f\\r]",identifier:"(?:\\\\.|[\\w-]|[^\0-\\xa0])+"},d=["href","title","show","type","role","actuate"];function h(t){return null!==t&&"object"===(void 0===t?"undefined":e(t))&&3===t.nodeType&&!o(t)}var p=function(t,e){var r,n=void 0;if("html"===e||"HTML"===e){if((n=document.createElement("div")).innerHTML=t,!/</.test(n.innerHTML))throw new Error("This template cannot be generated using div as a container:"+t)}else!function(t,e){if("innerHTML"in SVGElement.prototype==0||"innerHTML"in SVGSVGElement.prototype==0){var r=document.createElement("div");r.innerHTML=e;var n=function(t){var e=document.createElementNS(f,t.tagName.toLowerCase()),r=t.attributes,n=void 0;for(n=0;r&&n<r.length;n++)d.indexOf(r[n].nodeName)>=0?e.setAttributeNS(l,"xlink:"+r[n].nodeName,t.getAttribute(r[n].nodeName)):e.setAttribute(r[n].nodeName,t.getAttribute(r[n].nodeName));return e},o=n(r.firstChild);!function t(e,r){var o=e.firstChild;if(h(o))r.textContent=e.innerText;else for(;o;){var i=n(o);r.appendChild(i),o.firstChild&&t(o,i),o=o.nextSibling}}(r.firstChild,o),t.appendChild(o)}else t.innerHTML=e}(n=document.createElementNS(f,"svg"),t);r=n.childNodes;for(var o=0;o<r.length;o++)if(i(r[o]))return r[o]};function v(t,e){return new RegExp("^"+s.identifier+"$").test(t)&&(t="<"+t+"></"+t+">"),"canvas"===/<([^>]+)>.*/.exec(t)[1].toLowerCase()&&(e="HTML"),p(t,e)}function g(t,e){if("string"==typeof e||"string"==typeof t){if(t=t.trim().replace(new RegExp(s.blank,"g"),""),"string"==typeof e||/^</.test(t)){var r=v(t,e);return i(r)?[r]:[]}if("*"===t)return e.getElementsByTagName("*");var n=t.match(new RegExp("#"+s.identifier,"g"));if(n){var o=document.getElementById(n[0].replace("#",""));return i(o)?[o]:[]}var a=t.match(new RegExp("\\."+s.identifier,"g")),c=t.match(new RegExp("^"+s.identifier));if(c||a){for(var f=e.getElementsByTagName(c?c[0]:"*"),l=[],d=0;d<f.length;d++){for(var h=" "+f[d].getAttribute("class")+" ",p=!0,g=0;a&&g<a.length;g++)if(!h.match(" "+a[g].replace(".","")+" ")){p=!1;break}p&&l.push(f[d])}return l}throw new Error("Unsupported selector:"+t)}if(i(t))return[t];if(!t||t.constructor!==Array&&t.constructor!==HTMLCollection&&t.constructor!==NodeList){if(t&&t.constructor===w)return t;if(u(t)){for(var y=e.getElementsByTagName("*"),m=[],b=0;b<y.length;b++)t(y[b])&&m.push(y[b]);return m}throw new Error("Unknown selector:"+t)}for(var x=[],_=0;_<t.length;_++)i(t[_])&&x.push(t[_]);return x}var w=function t(e,r){return new t.prototype.init(e,r)};function y(){var t={},e=void 0,r=void 0,n=function(n){var o=function(e){var r,n={},o=t.root(e),i=void 0;return i=r=t.id(o),n[i]={data:o,pid:null,id:i,children:[]},function r(o,a){var u=t.child(o,e),c=void 0;for(c=0;u&&c<u.length;c++)i=t.id(u[c]),n[a].children.push(i),n[i]={data:u[c],pid:a,id:i,children:[]},r(u[c],i)}(o,i),[r,n]}(n);return e=o[1],r=o[0],function(){var t=[],n=0,o=0;return function r(i,a){a>o&&(o=a);var u=void 0;for(u=0;u<i.children.length;u++)r(e[i.children[u]],a+1);if(e[i.id].left=a+.5,0==u?(null==t[a]&&(t[a]=-.5),null==t[a-1]&&(t[a-1]=-.5),e[i.id].top=t[a]+1,t[a]+1+.5*(e[i.pid].children.length-1)-1<t[a-1]&&(e[i.id].top=t[a-1]+1-.5*(e[i.pid].children.length-1))):e[i.id].top=.5*(e[i.children[0]].top+e[i.children[u-1]].top),e[i.id].top<=t[a]){var c=t[a]+1-e[i.id].top;!function r(n,o){e[n].top+=c,t[o]<e[n].top&&(t[o]=e[n].top);var i=void 0;for(i=0;i<e[n].children.length;i++)r(e[n].children[i],o+1)}(i.id,a)}t[a]=e[i.id].top,e[i.id].top+.5>n&&(n=e[i.id].top+.5)}(e[r],0),{node:e,root:r,size:n,deep:o+1}}()};return n.root=function(e){return t.root=e,n},n.child=function(e){return t.child=e,n},n.id=function(e){return t.id=e,n},n}w.prototype.init=function(t,e){this.context=e=e||document;var r=g(t,e),n=void 0;for(n=0;n<r.length;n++)this[n]=r[n];return this.length=r.length,this},w.prototype.extend=w.extend=function(){var t=arguments[0]||{},e=arguments[1]||{},r=arguments.length;for(var n in 1===r&&(e=t,t=this),a(t)||(t={}),e)try{t[n]=e[n]}catch(t){throw new Error("Illegal property value！")}return t},w.prototype.init.prototype=w.prototype;var m=function(t,e,r,n,o){var i=Math.cos(r),a=Math.sin(r);return[+((n-t)*i-(o-e)*a+t).toFixed(7),+((n-t)*a+(o-e)*i+e).toFixed(7)]},b=function(t,e,r,n,o){var i=Math.sqrt(t*t+e*e);return[+(t*r/i+n).toFixed(7),+(e*r/i+o).toFixed(7)]},x=function(t,e,r,n,o){return[+(r*(n-t)+t).toFixed(7),+(r*(o-e)+e).toFixed(7)]};function _(t){return"number"==typeof t||null!==t&&"object"===(void 0===t?"undefined":e(t))&&"[object Number]"===n(t)}var T=function(t,e){for(var r=[],n=0;n<4;n++)for(var o=0;o<e.length/4;o++)r[4*o+n]=t[n]*e[4*o]+t[n+4]*e[4*o+1]+t[n+8]*e[4*o+2]+t[n+12]*e[4*o+3];return r};var E=[],k=13,C=400,P=null;function M(t){t=function(t,e){for(var r in e)try{t[r]=e[r]}catch(t){throw new Error("Illegal property value！")}return t}({u:.5},t);var e=void 0,r=void 0,n=void 0,o=function(t){if(e){var o=(t-r)/(n-r),i=o*o;return(o*i*e[0]+i*e[1]+o*e[2]+e[3])*(n-r)}throw new Error("You shoud first set the position!")};return o.setP=function(i,a,u,c,f,l){if(!(i<u))throw new Error("The point x-position should be increamented!");r=i,n=u;var s=t.u*f,d=t.u*l;return e=[2*(a/=u-i)-2*(c/=u-i)+s+d,3*c-3*a-2*s-d,s,a],o},o}var j=function(t,e,r){/[a-z]/.test(t.tagName)&&d.indexOf(e)>=0?t.setAttributeNS(l,"xlink:"+e,r):t.setAttribute(e,r)};function A(t,e,r,n,o,i,a){e>2*Math.PI&&(e=2*Math.PI),e<2*-Math.PI&&(e=2*-Math.PI),e<0&&(t+=e,e*=-1);var u=[],c=void 0;c=m(0,0,t,o,0),u[0]=c[0],u[1]=c[1],c=m(0,0,e,c[0],c[1]),u[2]=c[0],u[3]=c[1],c=m(0,0,t,i,0),u[4]=c[0],u[5]=c[1],c=m(0,0,e,c[0],c[1]),u[6]=c[0],u[7]=c[1],a(t,t+e,u[0]+r,u[1]+n,u[4]+r,u[5]+n,u[2]+r,u[3]+n,u[6]+r,u[7]+n,.5*(i-o))}var N=function(t,e,r,n,o){return t.beginPath(),t.translate(r,n),t.rotate(o),t.font=e["font-size"]+"px "+e["font-family"],t},L=function(t,e,r,n,o,i,a,u){return A(a,u,r,n,o,i,function(a,u,c,f,l,s,d,h,p,v,g){g<0&&(g=-g),t.beginPath(),t.moveTo(c,f),t.arc(r,n,o,a,u,!1),"round"!=e["arc-end-cap"]?t.lineTo(p,v):t.arc(.5*(d+p),.5*(h+v),g,u-Math.PI,u,!0),t.arc(r,n,i,u,a,!0),"round"!=e["arc-start-cap"]?t.lineTo(c,f):t.arc(.5*(c+l),.5*(f+s),g,a,a-Math.PI,!0)}),t},S=function(t,e,r,n){return t.beginPath(),t.moveTo(e+n,r),t.arc(e,r,n,0,2*Math.PI),t},R=function(t,e,r,n,o){return t.beginPath(),t.rect(e,r,n,o),t},O=function(t,e,r,n,o){var i=t.createLinearGradient(e,r,n,o),a={value:function(){return i},addColorStop:function(t,e){return i.addColorStop(t,e),a}};return a};function I(t,e){return"textAlign"===t&&{left:"start",right:"end",center:"middle"}[e]||e}var F=function(t,e,r,n,o){if(!i(t[0]))throw new Error("Target empty!");if("text"!==t[0].nodeName.toLowerCase())throw new Error("Need a <text> !");return t.attr("dy",{top:.5*e["font-size"],middle:0,bottom:.5*-e["font-size"]}[e.textBaseline]).css({"text-anchor":e.textAlign,"dominant-baseline":"central","font-size":e["font-size"]+"px","font-family":e["font-family"]}).attr({x:r,y:n}),{transform:"rotate("+180*o/Math.PI+","+r+","+n+")"}},B=function(t,e,r,n,o,i,a,u){if("path"!==t[0].nodeName.toLowerCase())throw new Error("Need a <path> !");return A(a,u,r,n,o,i,function(r,n,a,u,c,f,l,s,d,h,p){var v=n-r>Math.PI?1:0,g="M"+a+" "+u;p<0&&(p=-p),g+="A"+o+" "+o+" 0 "+v+" 1 "+l+" "+s,"round"!=e["arc-end-cap"]?g+="L"+d+" "+h:g+="A"+p+" "+p+"  0 1 0 "+d+" "+h,g+="A"+i+" "+i+" 0 "+v+" 0 "+c+" "+f,"round"!=e["arc-start-cap"]?g+="L"+a+" "+u:g+="A"+p+" "+p+"  0 1 0 "+a+" "+u,t.attr("d",g)}),t},D=function(t,e,r,n){if("circle"!==t[0].nodeName.toLowerCase())throw new Error("Need a <circle> !");return t.attr({cx:e,cy:r,r:n}),t},q=function(t,e){if("path"!==t[0].nodeName.toLowerCase())throw new Error("Need a <path> !");return t.attr("d",e),t},z=function(t,e,r,n,o){if("rect"!==t[0].nodeName.toLowerCase())throw new Error("Need a <rect> !");return t.attr({x:e,y:r,width:n,height:o}),t},H=function(t,e,r,n,o,i){!function(t){var e=t.getElementsByTagName("defs");e.length<=0&&(e=[v("<defs>","SVG")],t.appendChild(e[0])),e[0]}(e);var a="image2D-lg-"+(new Date).valueOf()+"-"+Math.random(),u=v('<linearGradient id="'+a+'" x1="'+r+'%" y1="'+n+'%" x2="'+o+'%" y2="'+i+'%"></linearGradient>');e.appendChild(u);var c={value:function(){return"url(#"+a+")"},addColorStop:function(t,e){return u.appendChild(v('<stop offset="'+100*t+'%" style="stop-color:'+e+';" />')),c}};return c};var G=function(t){return t&&t.constructor===CanvasRenderingContext2D};if(w.extend({treeLayout:function(t){t=c({"begin-deg":0,deg:2*Math.PI},t);var e=y().root(t.root).child(t.child).id(t.id),r=function r(n){var o=e(n);if("LR"===t.type||"RL"===t.type){var i=t.width/o.deep;"RL"===t.type&&(i*=-1);var a=t.height/(o.size- -.5);for(var u in o.node){var c=o.node[u];o.node[u].left=+(("RL"==t.type?t.width:0)- -c.left*i).toFixed(7),o.node[u].top=+(c.top*a).toFixed(7)}}else if("TB"===t.type||"BT"===t.type){var f=t.height/o.deep;"BT"==t.type&&(f*=-1);var l=t.width/(o.size- -.5),s=void 0,d=void 0;for(var h in o.node){var p=o.node[h];s=p.left,d=p.top,o.node[h].top=+(("BT"==t.type?t.height:0)- -s*f).toFixed(7),o.node[h].left=+(d*l).toFixed(7)}}else if("circle"===t.type){var v=t.radius/(o.deep-1),g=t.deg/(o.size- -.5);for(var w in o.node){var y=o.node[w];o.node[w].deg=(t["begin-deg"]- -g*y.top)%(2*Math.PI);var b=m(t.cx,t.cy,o.node[w].deg,t.cx- -v*(y.left-.5),t.cy);o.node[w].left=+b[0],o.node[w].top=+b[1]}}return t.drawer(o),r};return r.config=function(e){return t=c(t,e),r},r.drawer=function(e){return t.drawer=e,r},r},pieLayout:function(t){if(!u((t=c({"begin-deg":-Math.PI/2,deg:2*Math.PI,radius:[]},t)).value))throw new Error("config.value must be a function!");var e=function(e){var r=0,n=[],o=0;for(var i in e)n.push({value:t.value(e[i],i,r),data:e[i],key:i,index:r,dots:[]}),o+=n[r].value,r+=1;for(r=0;r<n.length;r++){n[r].beginDeg=0===r?t["begin-deg"]:n[r-1].beginDeg+n[r-1].deg;var a=n[r].value/o;n[r].deg=a*t.deg,n[r].percent=new Number(100*a).toFixed(2)}if(_(t.cx)&&_(t.cy))for(r=0;r<t.radius.length;r++)for(var c=0;c<n.length;c++)n[c].dots.push(m(t.cx,t.cy,n[c].beginDeg+.5*n[c].deg,t.cx+t.radius[r],t.cy));u(t.drawer)&&t.drawer(n)};return e.config=function(r){return t=c(t,r),e},e.drawer=function(r){return t.drawer=r,e},e},Matrix4:function(t){var e=t||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],r={move:function(t,n,o,i){return e=T(function(t,e,r,n){n=n||0;var o=Math.sqrt(e*e+r*r+n*n);return[1,0,0,0,0,1,0,0,0,0,1,0,e*t/o,r*t/o,n*t/o,1]}(t,n,o,i),e),r},rotate:function(t,n,o,i,a,u,c){var f=function(t,e,r,n,o,i){if("number"==typeof t&&"number"==typeof e){if("number"!=typeof r?(r=0,n=t,o=e,i=1):"number"==typeof n&&"number"==typeof o&&"number"==typeof i||(n=t,o=e,i=r,t=0,e=0,r=0),t==n&&e==o&&r==i)throw new Error("It's not a legitimate ray!");var a=Math.sqrt((n-t)*(n-t)+(o-e)*(o-e)),u=0!=a?(o-e)/a:1,c=0!=a?(n-t)/a:0,f=(n-t)*c+(o-e)*u,l=i-r,s=Math.sqrt(f*f+l*l),d=0!=s?l/s:1,h=0!=s?f/s:0;return[[u,d*c,c*h,0,-c,u*d,u*h,0,0,-h,d,0,e*c-t*u,r*h-t*c*d-e*u*d,-t*c*h-e*u*h-r*d,1],[u,-c,0,0,d*c,d*u,-h,0,c*h,u*h,d,0,t,e,r,1]]}throw new Error("a1 and b1 is required!")}(n,o,i,a,u,c);return e=T(T(T(f[1],function(t){var e=Math.sin(t),r=Math.cos(t);return[r,e,0,0,-e,r,0,0,0,0,1,0,0,0,0,1]}(t)),f[0]),e),r},scale:function(t,n,o,i,a,u){return e=T(function(t,e,r,n,o,i){return[t,0,0,0,0,e,0,0,0,0,r,0,(n=n||0)-n*t,(o=o||0)-o*e,(i=i||0)-i*r,1]}(t,n,o,i,a,u),e),r},multiply:function(t,n){return e=n?T(e,t):T(t,e),r},use:function(t,r,n,o){var i=T(e,[t,r,n=n||0,o=o||1]);return i[0]=+i[0].toFixed(7),i[1]=+i[1].toFixed(7),i[2]=+i[2].toFixed(7),i[3]=+i[3].toFixed(7),i},value:function(){return e}};return r},rotate:m,move:b,scale:x,dot:function(t){t=c({d:[1,1],c:[0,0],p:[0,0]},t);var e={rotate:function(r){var n=t.d[0]+t.p[0],o=t.d[1]+t.p[1],i=m(t.p[0],t.p[1],r,n,o);return t.d=[i[0]-t.p[0],i[1]-t.p[1]],e},move:function(r){return t.p=b(t.d[0],t.d[1],r,t.p[0],t.p[1]),e},scale:function(r){return t.p=x(t.c[0],t.c[1],r,t.p[0],t.p[1]),e},value:function(){return t.p}};return e},animation:function(t,e,r){var n={timer:function(t,e,r){if(!t)throw new Error("Tick is required!");e=e||C;var o=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return E.push({id:o,createTime:new Date,tick:t,duration:e,callback:r}),n.start(),o},start:function(){P||(P=window.setInterval(n.tick,k))},tick:function(){var t=void 0,e=void 0,r=void 0,o=void 0,i=void 0,a=void 0,u=void 0,c=E;for((E=[]).length=0,e=0;e<c.length;e++)t=(i=c[e]).createTime,r=i.tick,a=i.duration,o=i.callback,r(u=(u=(+new Date-t)/a)>1?1:u),u<1&&i.id?E.push(i):o&&o(u);E.length<=0&&n.stop()},stop:function(){P&&(window.clearInterval(P),P=null)}},o=n.timer(function(e){t(e)},e,r);return function(){var t=void 0;for(t in E)if(E[t].id==o)return void(E[t].id=void 0)}},cardinal:function(t){t=c({t:0},t);var e=void 0,r=void 0,n=function(t){if(e){for(r=-1;r+1<e.x.length&&(t>e.x[r+1]||-1==r&&t>=e.x[r+1]);)r+=1;if(-1==r||r>=e.h.length)throw new Error("Coordinate crossing!");return e.h[r](t)}throw new Error("You shoud first set the position!")};return n.setT=function(e){if("number"!=typeof e)throw new Error("Expecting a figure!");return t.t=e,n},n.setP=function(r){e={x:[],h:[]};var o=void 0,i=(r[1][1]-r[0][1])/(r[1][0]-r[0][0]),a=void 0;for(e.x[0]=r[0][0],o=1;o<r.length;o++){if(r[o][0]<=r[o-1][0])throw new Error("The point position should be increamented!");e.x[o]=r[o][0],a=o<r.length-1?(r[o+1][1]-r[o-1][1])/(r[o+1][0]-r[o-1][0]):(r[o][1]-r[o-1][1])/(r[o][0]-r[o-1][0]),e.h[o-1]=M({u:.5*(1-t.t)}).setP(r[o-1][0],r[o-1][1],r[o][0],r[o][1],i,a),i=a}return n},n}}),w.prototype.extend({appendTo:function(t,e){var r=g(t,e||document);if(!(r.length>0))throw new Error("Target empty!");for(var n=0;n<this.length;n++)r[0].appendChild(this[n]);return this},prependTo:function(t,e){var r=g(t,e||document);if(!(r.length>0))throw new Error("Target empty!");for(var n=0;n<this.length;n++)r[0].insertBefore(this[n],r[0].childNodes[0]);return this},afterTo:function(t,e){var r=g(t,e||document);if(!(r.length>0))throw new Error("Target empty!");for(var n=0;n<this.length;n++)r[0].parentNode.insertBefore(this[n],r[0].nextSibling);return this},beforeTo:function(t,e){var r=g(t,e||document);if(!(r.length>0))throw new Error("Target empty!");for(var n=0;n<this.length;n++)r[0].parentNode.insertBefore(this[n],r[0]);return this},remove:function(){for(var t=0;t<this.length;t++)this[t].parentNode.removeChild(this[t]);return this},filter:function(t){for(var e=[],r=0;r<this.length;r++)t(r,w(this[r]))&&e.push(this[r]);return w(e)},text:function(t){if(t){for(var e=0;e<this.length;e++)this[e].textContent=t;return this}if(this.length<=0)throw new Error("Target empty!");return this[0].textContent},css:function(){if(arguments.length<=1&&(arguments.length<=0||"object"!==e(arguments[0]))){if(this.length<=0)throw new Error("Target empty!");return function(t,e){var r=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(t,null):t.currentStyle;return"string"==typeof e?r.getPropertyValue(e):r}(this[0],arguments[0])}for(var t=0;t<this.length;t++)if(1===arguments.length)for(var r in arguments[0])this[t].style[r]=arguments[0][r];else this[t].style[arguments[0]]=arguments[1];return this},attr:function(){if(1===arguments.length&&"object"!==e(arguments[0])){if(this.length<=0)throw new Error("Target empty!");return this[0].getAttribute(arguments[0])}if(arguments.length>0)for(var t=0;t<this.length;t++)if(1===arguments.length)for(var r in arguments[0])j(this[t],r,arguments[0][r]);else j(this[t],arguments[0],arguments[1]);return this},datum:function(t,e){if(arguments.length<=0){if(this.length<=0)throw new Error("Target empty!");return this[0].__data__}for(var r=0;r<this.length;r++)this[r].__data__="function"==typeof e?e(t,r):t;return this},data:function(t,e){if(arguments.length<=0){for(var r=[],n=0;n<this.length;n++)r[n]=this[n].__data__;return r}var o=[],i=void 0;for(i=0;i<this.length&&i<t.length;i++)this[i].__data__="function"==typeof e?e(t[i],i):t[i],o.push(this[i]);var a=w(o);for(a.__enter__=[];i<t.length;i++)a.__enter__.push("function"==typeof e?e(t[i],i):t[i]);for(a.__exit__=[];i<this.length;i++)a.__exit__.push(this[i]);return a},enter:function(t,e){if(!this.__enter__||this.__enter__.constructor!==Array)throw new Error("Not a data node object to be balanced!");for(var r=[],n=0;n<this.__enter__.length;n++)r[n]=v(t,e),r[n].__data__=this.__enter__[n];return delete this.__enter__,w(r)},exit:function(){if(!this.__exit__||this.__exit__.constructor!==Array)throw new Error("Not a data node object to be balanced!");var t=w(this.__exit__);return delete this.__exit__,t},loop:function(t){for(var e=0;e<this.length;e++)t(this[e].__data__,e,w(this[e]));return this},bind:function(t,e){if(window.attachEvent)for(var r=0;r<this.length;r++)this[r].attachEvent("on"+t,e);else for(var n=0;n<this.length;n++)this[n].addEventListener(t,e,!1);return this},position:function(t){var e=this[0].getBoundingClientRect();if(!t||!t.clientX)throw new Error("Event is necessary!");return{x:t.clientX-e.left,y:t.clientY-e.top}},painter:function(){if(!i(this[0]))throw new Error("Target empty!");var t=this[0],r=t.nodeName.toLowerCase();if("canvas"===r)return function(t){var r=t.getContext("2d");if("YES"!==t.__had_scale2_canvas__){t.__had_scale2_canvas__="YES";var n=t.clientWidth||t.getAttribute("width"),o=t.clientHeight||t.getAttribute("height");t.style.width=n+"px",t.style.height=o+"px",t.setAttribute("width",2*n),t.setAttribute("height",2*o),r.scale(2,2)}r.textBaseline="middle",r.textAlign="left";var i={"font-size":"16","font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt"},a={config:function(){if(1===arguments.length){if("object"!==e(arguments[0]))return r[arguments[0]];for(var t in arguments[0])i[t]?i[t]=arguments[0][t]:r[t]=arguments[0][t]}else 2===arguments.length&&(i[arguments[0]]?i[arguments[0]]=arguments[1]:r[arguments[0]]=arguments[1]);return a},fillText:function(t,e,n,o){return r.save(),N(r,i,e,n,o||0).fillText(t,0,0),r.restore(),a},strokeText:function(t,e,n,o){return r.save(),N(r,i,e,n,o||0).strokeText(t,0,0),r.restore(),a},beginPath:function(){return r.beginPath(),a},closePath:function(){return r.closePath(),a},moveTo:function(t,e){return r.moveTo(t,e),a},lineTo:function(t,e){return r.lineTo(t,e),a},arc:function(t,e,n,o,i){return r.arc(t,e,n,o,o+i),a},fill:function(){return r.fill(),a},stroke:function(){return r.stroke(),a},save:function(){return r.save(),a},restore:function(){return r.restore(),a},quadraticCurveTo:function(t,e,n,o){return r.quadraticCurveTo(t,e,n,o),a},bezierCurveTo:function(t,e,n,o,i,u){return r.bezierCurveTo(t,e,n,o,i,u),a},clearRect:function(e,n,o,i){return r.clearRect(e||0,n||0,o||t.getAttribute("width")/2,i||t.getAttribute("height")/2),a},toDataURL:function(){return t.toDataURL()},drawImage:function(e,n,o,i,u,c,f,l,s){return r.drawImage(e,n||0,o||0,i?2*i:t.getAttribute("width"),u?2*u:t.getAttribute("height"),c||0,f||0,l||t.getAttribute("width")/2,s||t.getAttribute("height")/2),a},fillArc:function(t,e,n,o,u,c){return L(r,i,t,e,n,o,u,c).fill(),a},strokeArc:function(t,e,n,o,u,c){return L(r,i,t,e,n,o,u,c).stroke(),a},fillCircle:function(t,e,n){return S(r,t,e,n).fill(),a},strokeCircle:function(t,e,n){return S(r,t,e,n).stroke(),a},fillRect:function(t,e,n,o){return R(r,t,e,n,o).fill(),a},strokeRect:function(t,e,n,o){return R(r,t,e,n,o).stroke(),a},createLinearGradient:function(t,e,n,o){return O(r,t,e,n,o)},translate:function(t,e){return r.translate(t,e),a},rotate:function(t){return r.rotate(t),a},scale:function(t,e){return e=e||t,r.scale(t,e),a}};return a}(t);if("svg"===r)return function(t,r){var n=void 0;r&&(n=w(r,t));var o={fillStyle:"#000",strokeStyle:"#000",lineWidth:1,textAlign:"start",textBaseline:"middle","font-size":"16","font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt"},i="",a=[],u=[],c="",f={config:function(){if(1===arguments.length){if("object"!==e(arguments[0]))return o[arguments[0]];for(var t in arguments[0])o[t]=I(t,arguments[0][t])}else 2===arguments.length&&(o[arguments[0]]=I(arguments[0],arguments[1]));return f},bind:function(e){return n=w(e,t),f},appendTo:function(e){return n.appendTo(e||t,t),f},prependTo:function(e){return n.prependTo(e||t,t),f},afterTo:function(e){return n.afterTo(e||t,t),f},beforeTo:function(e){return n.beforeTo(e||t,t),f},beginPath:function(){return i="",a=[],f},closePath:function(){return i+="Z",f},moveTo:function(t,e){return i+="M"+t+" "+e,a=[t,e],f},lineTo:function(t,e){return i+=(""==i?"M":"L")+t+" "+e,a=[t,e],f},arc:function(t,e,r,n,o){var u=m(t,e,n,t+r,e),c=m(t,e,n+o,t+r,e);return n=n/Math.PI*180,o=o/Math.PI*180,""==i?i+="M"+u[0]+","+u[1]:u[0]==a[0]&&u[1]==a[1]||(i+="L"+u[0]+","+u[1]),i+="A"+r+","+r+" 0 "+(o>180||o<-180?1:0)+","+(o>0?1:0)+" "+c[0]+","+c[1],f},fill:function(){return q(n,i).attr("transform",c).attr("fill",o.fillStyle),f},stroke:function(){return q(n,i).attr("transform",c).attr({"stroke-width":o.lineWidth,stroke:o.strokeStyle,fill:"none"}),f},save:function(){return u.push(c),f},restore:function(){return u.length>0&&(c=u.pop()),f},quadraticCurveTo:function(t,e,r,n){return i+="Q"+t+" "+e+","+r+" "+n,f},bezierCurveTo:function(t,e,r,n,o,a){return i+="C"+t+" "+e+","+r+" "+n+","+o+" "+a,f},fillText:function(t,e,r,i){var a=F(n,o,e,r,i||0);return n.attr("transform",c+a.transform).attr("fill",o.fillStyle)[0].textContent=t,f},strokeText:function(t,e,r,i){var a=F(n,o,e,r,i||0);return n.attr("transform",c+a.transform).attr({stroke:o.strokeStyle,fill:"none"})[0].textContent=t,f},fillArc:function(t,e,r,i,a,u){return B(n,o,t,e,r,i,a,u).attr("transform",c).attr("fill",o.fillStyle),f},strokeArc:function(t,e,r,i,a,u){return B(n,o,t,e,r,i,a,u).attr("transform",c).attr({"stroke-width":o.lineWidth,stroke:o.strokeStyle,fill:"none"}),f},fillCircle:function(t,e,r){return D(n,t,e,r).attr("transform",c).attr("fill",o.fillStyle),f},strokeCircle:function(t,e,r){return D(n,t,e,r).attr("transform",c).attr({"stroke-width":o.lineWidth,stroke:o.strokeStyle,fill:"none"}),f},fillRect:function(t,e,r,i){return z(n,t,e,r,i).attr("transform",c).attr("fill",o.fillStyle),f},strokeRect:function(t,e,r,i){return z(n,t,e,r,i).attr("transform",c).attr({"stroke-width":o.lineWidth,stroke:o.strokeStyle,fill:"none"}),f},createLinearGradient:function(e,r,o,i){return H(n,t,e,r,o,i)},translate:function(t,e){return c+=" translate("+t+","+e+")",f},rotate:function(t){return c+=" rotate("+t/Math.PI*180+")",f},scale:function(t,e){return c+=" scale("+t+","+(e=e||t)+")",f}};return f}(t,arguments[0]);throw new Error("Painter is not a function!")},layer:function(){if(!i(this[0]))throw new Error("Target empty!");if("canvas"!==this[0].nodeName.toLowerCase())throw new Error("Layer is not a function!");var t=this.painter(),e={},r=[],n=this[0].clientWidth,o=this[0].clientHeight,a={painter:function(t){return e[t]&&G(e[t].painter)||(e[t]={visible:!0},e[t].canvas=document.createElement("canvas"),e[t].canvas.setAttribute("width",n),e[t].canvas.setAttribute("height",o),e[t].painter=w(e[t].canvas).painter(),r.push(t)),e[t].painter},delete:function(t){for(var n=0;n<r.length;n++)if(r[n]===t){r.splice(n,1);break}return delete e[t],a},update:function(){t.clearRect(0,0,n,o),t.save();for(var i=0;i<r.length;i++)e[r[i]].visible&&t.drawImage(e[r[i]].canvas,0,0,n,o,0,0,n,o);return t.restore(),a},hidden:function(t){return e[t].visible=!1,a},show:function(t){return e[t].visible=!0,a}};return a}}),w.fn=w.prototype,"object"===e(t)&&"object"===e(t.exports))t.exports=w;else{var $=window.image2D,V=window.$$;w.noConflict=function(t){return window.$$===w&&(window.$$=V),t&&window.image2D===w&&(window.image2D=$),w},window.image2D=window.$$=w}}()}).call(this,r(43)(t))},43:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},47:function(t,e,r){"use strict";var n=r(1),o=r.n(n),i=r(0),a=r.n(i),u=r(3),c=r.n(u),f=r(4),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var d=function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)},h=function(t){function e(){var r,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=n=s(this,t.call.apply(t,[this].concat(i))),n.handleClick=function(t){if(n.props.onClick&&n.props.onClick(t),!t.defaultPrevented&&0===t.button&&!n.props.target&&!d(t)){t.preventDefault();var e=n.context.router.history,r=n.props,o=r.replace,i=r.to;o?e.replace(i):e.push(i)}},s(n,r)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){var t=this.props,e=(t.replace,t.to),r=t.innerRef,n=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}(t,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==e,'You must specify the "to" property');var i=this.context.router.history,a="string"==typeof e?Object(f.b)(e,null,null,i.location):e,u=i.createHref(a);return o.a.createElement("a",l({},n,{onClick:this.handleClick,href:u,ref:r}))},e}(o.a.Component);h.propTypes={onClick:a.a.func,target:a.a.string,replace:a.a.bool,to:a.a.oneOfType([a.a.string,a.a.object]).isRequired,innerRef:a.a.oneOfType([a.a.string,a.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:a.a.shape({history:a.a.shape({push:a.a.func.isRequired,replace:a.a.func.isRequired,createHref:a.a.func.isRequired}).isRequired}).isRequired},e.a=h}}]);