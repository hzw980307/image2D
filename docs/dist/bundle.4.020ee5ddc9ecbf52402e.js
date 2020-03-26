(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{37:function(t,e,a){"use strict";a.r(e);var i=a(75),n=a(53);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var v=a(8),r=Object(v.a)(n.default,i.a,i.b,!1,null,null,null);r.options.__file="src/pages/api/calculate.vue",e.default=r.exports},40:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){prettyPrint(),1==arguments.length?((0,n.default)("li",document.getElementById("topHeader")).attr("active","no"),(0,n.default)("#"+t).attr("active","yes")):2==arguments.length&&"api"==t&&((0,n.default)("li.apimenu-item",document.getElementById("api-nav")).attr("active","no"),(0,n.default)("#"+e).attr("active","yes"))};var i,n=(i=a(12))&&i.__esModule?i:{default:i}},53:function(t,e,a){"use strict";a.r(e);var i=a(54),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e.default=n.a},54:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=(i=a(40))&&i.__esModule?i:{default:i};e.default={mounted:function(){(0,n.default)("api","calculate")}}},67:function(t,e,a){t.exports=a.p+"dist/layout-tree_design.png"},75:function(t,e,a){"use strict";function i(){var t=this;return t.$createElement,t._self._c,t._m(0)}var n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("p",[t._v("绘图的时候难免要进行一些比较复杂的计算，这里根据使用场景不同，提供了几种常见的辅助计算。")]),t._v(" "),i("h4",{staticClass:"title small"},[t._v("二维简单坐标变换")]),t._v(" "),i("p",[t._v("简单坐标变换分为二类：独立的变换和变换对象dot。")]),t._v(" "),i("h6",{staticClass:"title little"},[t._v("独立的变换")]),t._v(" "),i("p",[t._v("点（x,y）围绕中心（cx,cy）旋转deg度：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("$$.rotate(cx, cy, deg, x, y);")]),t._v(" "),i("p",[t._v("点（x,y）沿着向量（ax,ay）方向移动距离d：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("$$.move(ax, ay, d, x, y);")]),t._v(" "),i("p",[t._v("点（x,y）围绕中心（cx,cy）缩放times倍：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("$$.scale(cx, cy, times, x, y);")]),t._v(" "),i("h6",{staticClass:"title little"},[t._v("变换对象")]),t._v(" "),i("p",[t._v("dot表示一个会移动的二维点，内部维护着「前进方向向量」、「当前位置」和「中心坐标」。首先，我们来看看如何获取一个dot实例：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("var dot=$$.dot({\n    // 前进方向、中心坐标和当前位置（都可选，下列是缺省值）\n    d: [1, 1],c: [0, 0],p: [0, 0]\n});")]),t._v(" "),i("p",[t._v("下列是一些变换方法，通过这些方法可以控制点dot的坐标改变或获取当前坐标。")]),t._v(" "),i("p",[t._v("前进方向以当前位置为中心，旋转deg度（注意，改变的是前进方向，不是当前坐标）：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("dot.rotate(deg);")]),t._v(" "),i("p",[t._v("沿着当前前进方向前进d：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("dot.move(d);")]),t._v(" "),i("p",[t._v("围绕中心坐标缩放：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("dot.scale(times);")]),t._v(" "),i("p",[t._v("返回当前位置：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("var p=dot.value();")]),t._v(" "),i("h4",{staticClass:"title small"},[t._v("Matrix4三维坐标变换")]),t._v(" "),i("p",[t._v("Matrix4是一个列主序存储的4x4矩阵，使用该矩阵对象的第一步是像下面这样获取该对象，参数initMatrix4可选，你可以传递一个初始化矩阵或默认采用单位矩阵E初始化。")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("var matrix4=$$.Matrix4(initMatrix4);")]),t._v(" "),i("p",[t._v("和前面的二维坐标变换不同的是，变换不是直接作用在具体的点上，而是先求解出一系列变换的变换矩阵，最后应用在具体点上。")]),t._v(" "),i("h6",{staticClass:"title little"},[t._v("基本运算")]),t._v(" "),i("p",[t._v("返回matrix4当前记录的内部矩阵：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("var val=matrix4.value();")]),t._v(" "),i("p",[t._v("比如采用默认值初始化的矩阵对象，打印结果如下：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("(16) [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]")]),t._v(" "),i("p",[t._v("二个矩阵相乘：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("matrix4.multiply(newMatrix4[, flag]);")]),t._v(" "),i("p",[t._v("第一个参数应该是一个和value打印出来一样格式的一维数组，列主序存储。flag默认false，可不传，表示左乘，即newMatrix4 × matrix4，如果设置flag为true，表示右乘。")]),t._v(" "),i("p",[t._v("把变换矩阵作用在具体的点上：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("var position=matrix4.use(x, y, z, w);")]),t._v(" "),i("p",[t._v("矩阵的目的是对坐标进行变换，use方法返回齐次坐标(x, y, z, w)经过matrix4矩阵变换后的坐标值。其中z和w可以不传递，默认0和1，返回的坐标值是一个齐次坐标。")]),t._v(" "),i("h6",{staticClass:"title little"},[t._v("坐标变换")]),t._v(" "),i("p",[t._v("沿着向量(a, b, c)方向移动距离dis（其中c可以不传，默认0）：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("matrix4.move(dis, a, b, c);")]),t._v(" "),i("p",[t._v("以点(cx, cy, cz)为中心，分别在x、y和z方向上缩放xTimes、yTimes和zTimes倍（其中cx、cy和cz都可以不传递，默认0）：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("matrix4.scale(xTimes, yTimes, zTimes, cx, cy, cz);")]),t._v(" "),i("p",[t._v("围绕射线(a1, b1, c1) -> (a2, b2, c2)旋转deg度（方向由右手法则确定）：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("matrix4.rotate(deg, a1, b1, c1, a2, b2, c2);")]),t._v(" "),i("p",[t._v("a1、b1、c1、a2、b2和c2这6个值在设置的时候，不是一定需要全部设置，还有以下可选：")]),t._v(" "),i("ul",[i("li",[t._v("只设置了a1和b1，表示在xoy平面围绕（a1, b1）旋转。")]),t._v(" "),i("li",[t._v("只设置三个点(设置不足六个点都认为只设置了三个点)，表示围绕从原点出发的射线旋转。")])]),t._v(" "),i("h4",{staticClass:"title small"},[t._v("曲线插值")]),t._v(" "),i("p",[t._v("给定若干个不连续的点，在这些点之间插入足够的点，来使得这些点连接起来是一个平滑的曲线。求解在何处插入新的点就是这里需要解决的问题。")]),t._v(" "),i("h6",{staticClass:"title little"},[t._v("Cardinal")]),t._v(" "),i("p",[t._v("用一个N次多项式函数求解出若干个点的插值函数是一个可行的方法，不过在一次插值中，当插值点数量增加的时候，N越来越大，很容易带来收敛困难，也就是Runge现象。")]),t._v(" "),i("p",[t._v("因此在这里，我们内部选择三次插值Hermite法（N=3）。在需要插值的点的个数比较多的时候，选择分段求解，也就是Cardinal插值法。")]),t._v(" "),i("p",[t._v("首先，我们需要获取插值对象实例：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("var cardinal=$$.cardinal();")]),t._v(" "),i("p",[t._v("设置张弛系数(应该在点的位置设置前设置)：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("cardinal.setT(t);")]),t._v(" "),i("p",[t._v("该参数用于调整曲线走势，默认数值t=0，分水岭t=-1，|t-(-1)|的值越大，曲线走势调整的越严重。")]),t._v(" "),i("p",[t._v("设置点的位置：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("cardinal.setP([[x,y],[x,y],...]);")]),t._v(" "),i("p",[t._v("经过上面的设置，插值对象就可以求值了。比如x=a，其中a在需要插值的点之间（边界也可以），你可以这样求解出y值：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("var y=cardinal(a);")]),t._v(" "),i("h4",{staticClass:"title small"},[t._v("布局")]),t._v(" "),i("p",[t._v("在绘制一些常见图形的时候，比如关系图，单个结点或连线并不难，麻烦的是位置的计算等，和图形模块不同，布局就是专门计算一些特殊图形位置的模块，用一句通俗的话说就是：决定什么元素绘制在哪里。因此，布局应该和具体的绘图方法无关，她只关心位置的计算。")]),t._v(" "),i("h6",{staticClass:"title little"},[t._v("树布局")]),t._v(" "),i("p",[t._v("调用treeLayout方法，传递配置config（后续也可以提供config方法来修改配置）就可以获取树布局实例：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("var treeLayout=$$.treeLayout(config);")]),t._v(" "),i("p",[t._v("config是一个键值对格式的配置json，由于原始数据格式不一定，你需要传递数据格式的配置（必须的，可选部分在后面说明）：")]),t._v(" "),i("ul",[i("li",[t._v('"root":function(initTree){ /*返回根结点*/ }')]),t._v(" "),i("li",[t._v('"id":function(treedata){ /*返回id*/ }')]),t._v(" "),i("li",[t._v('"child":function(parentTree, initTree){ /*返回孩子结点*/ }')])]),t._v(" "),i("p",[t._v("你还必须配置绘图方法，因为布局并不知道如何绘制：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("treeLayout.drawer(function(data){ /*绘制*/ });")]),t._v(" "),i("p",[t._v("data是计算后带有结点坐标的数据，格式如下：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v('{node: {\n    "XXX":{\n        children: []\n        data: any\n        id: string||number\n        left: number\n        pid: any\n        deep: number\n        top: number\n    },\n    ...\n}, root: string||number, size: number, deep: number}')]),t._v(" "),i("p",[t._v("node记录的是每个结点的信息，每个结点中的left和top就是该结点应该绘制的位置，data是结点的原始数据，deep表示结点层次（从0开始）。")]),t._v(" "),i("p",[t._v("上面说明的都配置好以后，就可以启动布局计算并绘图了：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("treeLayout(data);")]),t._v(" "),i("h6",{staticClass:"title sub-little"},[t._v("基本模型")]),t._v(" "),i("img",{staticStyle:{float:"'right', backgroundColor: '#fff'"},attrs:{src:a(67),width:"260"}}),t._v(" "),i("p",[t._v("可能你已经发现了，树图分为很多种（圆形树，倒树等），上面并没有配置这些信息（有接口提供配置，稍后说明）。是的，没有配置的时候，默认选择的是基本模型，那什么是基本模型？")]),t._v(" "),i("p",[t._v("右图是某个具体例子的基本模型，其中每个红色矩形都是一个1x1的正方形，坐标原心位于左上角绿色顶点。")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v('"油画":{\n    children: [];\n    data: (2) ["油画", "手绘"];\n    id: "油画";\n    left: 1.5;\n    deep: 1;\n    pid: "手绘";\n    show: true;\n    top: 1.5\n}')]),t._v(" "),i("p",[t._v("主要看看top和left，和右边的图对应，是不是很清晰了。tree布局的核心位置计算就是把每个结点看成一个1x1的正方形，别的具体树图都是从此出发计算得出的，这就是基本模型。")]),t._v(" "),i("h6",{staticClass:"title sub-little"},[t._v("配置模型")]),t._v(" "),i("p",[t._v("虽然从基本模型出发计算具体的树图已经很容易了，不过为了方便，依旧对常见的树图提供了下列配置选项：")]),t._v(" "),i("ul",[i("li",[t._v("type:LR|RL|BT|TB|circle，配置树图的类型（默认原始模型，会忽略下列全部设置）。")]),t._v(" "),i("li",[t._v("width,height:number，设置树图的宽和高（如果类型是LR|RL|BT|TB需要设置）。")]),t._v(" "),i("li",[t._v("cx,cy:number，设置圆心（如果类型是circle需要设置）。")]),t._v(" "),i("li",[t._v("radius:number，设置树图半径（如果类型是circle需要设置）。")]),t._v(" "),i("li",[t._v("begin-deg,deg:number，开始和跨越弧度（可选，如果类型是circle设置该参数有效）。")])]),t._v(" "),i("h6",{staticClass:"title little"},[t._v("饼布局")]),t._v(" "),i("p",[t._v("调用pieLayout方法，传递配置config（后续也可以提供config方法来修改配置）就可以获取饼布局实例：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("var pieLayout=$$.pieLayout(config);")]),t._v(" "),i("p",[t._v("config是一个键值对格式的配置json，由于原始数据格式不一定，你需要传递数据格式的配置：")]),t._v(" "),i("ul",[i("li",[t._v('"value":function(data, key, index){ /*返回结点的价值，必须是一个数字*/ }')]),t._v(" "),i("li",[t._v('"begin-deg":整个饼图的起点弧度')]),t._v(" "),i("li",[t._v('"deg":饼图的跨越弧度')])]),t._v(" "),i("p",{staticClass:"warn"},[t._v("value是必须的，begin-deg和deg都是可选的，有默认值，分别为：-Math.PI / 2和Math.PI * 2。")]),t._v(" "),i("p",[t._v("你还必须配置绘图方法，因为布局并不知道如何绘制：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("pieLayout.drawer(function(data){ /*绘制*/ });")]),t._v(" "),i("p",[t._v("data是计算后带有结点坐标的数据，格式如下：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("[{\n    beginDeg:number\n    data:any\n    deg:number\n    dots:Array\n    index:number\n    key:string\n    percent:number\n    value:number\n},{...},...]")]),t._v(" "),i("p",[t._v("可以看出来数据是一个数组，我们列出其中一项（一个饼图是由一个个弧组成的，这就是其中一个弧）说明具体有哪些。先来说明几个基本的，特殊的需要配合额外配置才有意义。")]),t._v(" "),i("p",[t._v("beginDeg和deg分别表示这个弧的起点弧度和跨越弧度，data是原始数据，index、key、value分别表示该项的序号、键和计算后的价值，percent表示该项占比（单位%）。")]),t._v(" "),i("h6",{staticClass:"title sub-little"},[t._v("补充计算")]),t._v(" "),i("p",[t._v("我们看到上面没有对dots进行解释，为了使用这项，我们需要额外配置三项：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v('pieLayout.config({\n    // 饼图中一个瓣的中心参考半径，可以有多个[可选]\n    "radius": [number, ...],\n    // 饼图中心坐标\n    "cx": number,\n    "cy": number\n});')]),t._v(" "),i("p",[t._v("饼图绘制的时候，除了绘制各个弧以外，有时候我们希望添加提示文字，用折线和弧对应起来，radius是一个数组，每个项代表一个半径，我们会计算每个半径对应的小弧中心坐标，最终保存的位置就是dots。")]),t._v(" "),i("h4",{staticClass:"title small"},[t._v("动画轮询")]),t._v(" "),i("p",[t._v("绘图的时候，为了实现动画效果，你除了可以使用画布或css天然的动画相关属性，还可以使用ES绘制每一帧的方式实现。为了方便你绘制我们提供了下面方法：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("var stop=$$.animation(function(deep){\n    // deep取值0-1，表示动画进度\n}, speeds, function(deep){\n    // deep和上面一样，提供的原因是有时候结束回调是stop方法触发而不是动画结束了\n},timing);")]),t._v(" "),i("p",[t._v("该方法有四个参数：分别表示画帧方法、动画时长、动画结束回调和进度控制参数（动画时长单位毫秒，最后三个均可选）。")]),t._v(" "),i("p",[t._v('其中timing可以为字符串或数组，字符串可选参数有："ease"、"ease-in"、"ease-in-out"、"ease-out"和"linear"（默认值），值的意义和css中的属性 transition-timing-function 基本一致，数组的话也是和这个属性保持一致，长度为4。')]),t._v(" "),i("p",[t._v("如果你希望动画立刻结束，可以调用下面的方法强行提前停止：")]),t._v(" "),i("pre",{staticClass:"prettyprint lang-js"},[t._v("stop();")]),t._v(" "),i("p",{staticClass:"nav-footer"},[i("a",{staticClass:"pre",attrs:{href:"#/api/painter",onclick:"document.documentElement.scrollTop = 0;"}},[t._v("画笔")]),t._v(" "),i("a",{staticClass:"next",attrs:{href:"#/api/tool",onclick:"document.documentElement.scrollTop = 0;"}},[t._v("补充")])])])}];i._withStripped=!0,a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}))}}]);