(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{55:function(e,a,t){"use strict";t.r(a);var l=t(1),m=t.n(l),n=t(39),c=t(40),i=t(41),s=t(38),r=t(5);const o=Object(r.a)(()=>new Promise(e=>{t.e(7).then((a=>{e(t(50))}).bind(null,t)).catch(t.oe)})),p=Object(r.a)(()=>new Promise(e=>{t.e(6).then((a=>{e(t(51))}).bind(null,t)).catch(t.oe)})),u=Object(r.a)(()=>new Promise(e=>{t.e(9).then((a=>{e(t(52))}).bind(null,t)).catch(t.oe)})),E=Object(r.a)(()=>new Promise(e=>{t.e(5).then((a=>{e(t(53))}).bind(null,t)).catch(t.oe)})),h=Object(r.a)(()=>new Promise(e=>{t.e(10).then((a=>{e(t(54))}).bind(null,t)).catch(t.oe)}));var N=()=>m.a.createElement(n.a,null,m.a.createElement(c.a,null,m.a.createElement(i.a,{exact:!0,path:"/api/how-to-use",component:o}),m.a.createElement(i.a,{exact:!0,path:"/api/xhtml",component:p}),m.a.createElement(i.a,{exact:!0,path:"/api/painter",component:u}),m.a.createElement(i.a,{exact:!0,path:"/api/calculate",component:E}),m.a.createElement(i.a,{exact:!0,path:"/api/tool",component:h}),m.a.createElement(s.a,{path:"/api/",to:{pathname:"/api/how-to-use"}}))),d=t(47),w=t(42),b=t.n(w);t.d(a,"default",function(){return x});class x extends m.a.Component{componentDidMount(){b()(".topmenu-item").attr("active","no"),b()("#api").attr("active","yes");let e=b()(".apimenu-item",document.getElementById("api-nav"));for(let a=0;a<e.length;a++){let t=e[a].getAttribute("id"),l=document.getElementsByName(t);for(let e=0;e<l.length;e++)l[e].setAttribute("url","#/api/"+t),l[e].setAttribute("index",e),l[e].setAttribute("flag","api-item")}}render(){return m.a.createElement("div",{className:"api"},m.a.createElement("ul",{id:"api-nav"},m.a.createElement("li",{id:"how-to-use",className:"apimenu-item"},m.a.createElement(d.a,{to:"/api/how-to-use"},"如何使用")),m.a.createElement("li",{className:"item",name:"how-to-use"},"关注的问题"),m.a.createElement("li",{className:"item",name:"how-to-use"},"使用"),m.a.createElement("li",{className:"item",name:"how-to-use"},"获取帮助"),m.a.createElement("li",{id:"xhtml",className:"apimenu-item"},m.a.createElement(d.a,{to:"/api/xhtml"},"结点操作")),m.a.createElement("li",{className:"item",name:"xhtml"},"结点对象"),m.a.createElement("li",{className:"item",name:"xhtml"},"编辑"),m.a.createElement("li",{className:"item",name:"xhtml"},"样式和属性"),m.a.createElement("li",{className:"item",name:"xhtml"},"事件相关"),m.a.createElement("li",{className:"item",name:"xhtml"},"数据绑定"),m.a.createElement("li",{id:"painter",className:"apimenu-item"},m.a.createElement(d.a,{to:"/api/painter"},"画笔")),m.a.createElement("li",{className:"item",name:"painter"},"canvas2D"),m.a.createElement("li",{className:"item",name:"painter"},"svg"),m.a.createElement("li",{className:"item",name:"painter"},"绘图方法"),m.a.createElement("li",{className:"item",name:"painter"},"渐变色"),m.a.createElement("li",{className:"item",name:"painter"},"变换"),m.a.createElement("li",{id:"calculate",className:"apimenu-item"},m.a.createElement(d.a,{to:"/api/calculate"},"计算")),m.a.createElement("li",{className:"item",name:"calculate"},"二维坐标变换"),m.a.createElement("li",{className:"item",name:"calculate"},"矩阵坐标变换"),m.a.createElement("li",{className:"item",name:"calculate"},"曲线插值"),m.a.createElement("li",{className:"item",name:"calculate"},"布局"),m.a.createElement("li",{className:"item",name:"calculate"},"动画轮询"),m.a.createElement("li",{id:"tool",className:"apimenu-item"},m.a.createElement(d.a,{to:"/api/tool"},"补充")),m.a.createElement("li",{className:"item",name:"tool"},"图层")),m.a.createElement("div",null,m.a.createElement(N,null)))}}}}]);