(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{336:function(e,t,a){"use strict";a.r(t);var _=a(4),v=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"flex-布局教程-语法篇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-布局教程-语法篇"}},[e._v("#")]),e._v(" Flex 布局教程：语法篇")]),e._v(" "),t("p",[e._v("网页布局（layout）是 CSS 的一个重点应用。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071001.gif",alt:""}})]),e._v(" "),t("p",[e._v("布局的传统解决方案，基于"),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box_model",target:"_blank",rel:"noopener noreferrer"}},[e._v("盒状模型"),t("OutboundLink")],1),e._v("，依赖 "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/display",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("display")]),t("OutboundLink")],1),e._v(" 属性 + "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/position",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("position")]),t("OutboundLink")],1),e._v("属性 + "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/float",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("float")]),t("OutboundLink")],1),e._v("属性。它对于那些特殊布局非常不方便，比如，"),t("a",{attrs:{href:"https://css-tricks.com/centering-css-complete-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("垂直居中"),t("OutboundLink")],1),e._v("就不容易实现。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071002.png",alt:""}})]),e._v(" "),t("p",[e._v("2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071003.jpg",alt:""}})]),e._v(" "),t("p",[e._v("Flex 布局将成为未来布局的首选方案。本文介绍它的语法，"),t("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("下一篇文章"),t("OutboundLink")],1),e._v("给出常见布局的 Flex 写法。网友 "),t("a",{attrs:{href:"http://vgee.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JailBreak"),t("OutboundLink")],1),e._v(" 为本文的所有示例制作了 "),t("a",{attrs:{href:"http://static.vgee.cn/static/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demo"),t("OutboundLink")],1),e._v("，也可以参考。")]),e._v(" "),t("p",[e._v("以下内容主要参考了下面两篇文章："),t("a",{attrs:{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Complete Guide to Flexbox"),t("OutboundLink")],1),e._v(" 和 "),t("a",{attrs:{href:"https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Visual Guide to CSS3 Flexbox Properties"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"一、flex-布局是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、flex-布局是什么"}},[e._v("#")]),e._v(" 一、Flex 布局是什么？")]),e._v(" "),t("p",[e._v('Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。')]),e._v(" "),t("p",[e._v("任何一个容器都可以指定为 Flex 布局。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".box{\n  display: flex;\n}\n")])])])]),e._v(" "),t("p",[e._v("行内元素也可以使用 Flex 布局。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".box{\n  display: inline-flex;\n}\n")])])])]),e._v(" "),t("p",[e._v("Webkit 内核的浏览器，必须加上"),t("code",[e._v("-webkit")]),e._v("前缀。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".box{\n  display: -webkit-flex; /* Safari */\n  display: flex;\n}\n")])])])]),e._v(" "),t("p",[e._v("注意，设为 Flex 布局以后，子元素的"),t("code",[e._v("float")]),e._v("、"),t("code",[e._v("clear")]),e._v("和"),t("code",[e._v("vertical-align")]),e._v("属性将失效。")]),e._v(" "),t("h2",{attrs:{id:"二、基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、基本概念"}},[e._v("#")]),e._v(" 二、基本概念")]),e._v(" "),t("p",[e._v('采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。')]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png",alt:""}})]),e._v(" "),t("p",[e._v("容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做"),t("code",[e._v("main start")]),e._v("，结束位置叫做"),t("code",[e._v("main end")]),e._v("；交叉轴的开始位置叫做"),t("code",[e._v("cross start")]),e._v("，结束位置叫做"),t("code",[e._v("cross end")]),e._v("。")]),e._v(" "),t("p",[e._v("项目默认沿主轴排列。单个项目占据的主轴空间叫做"),t("code",[e._v("main size")]),e._v("，占据的交叉轴空间叫做"),t("code",[e._v("cross size")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"三、容器的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、容器的属性"}},[e._v("#")]),e._v(" 三、容器的属性")]),e._v(" "),t("p",[e._v("以下6个属性设置在容器上。")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("flex-direction")]),e._v(" "),t("li",[e._v("flex-wrap")]),e._v(" "),t("li",[e._v("flex-flow")]),e._v(" "),t("li",[e._v("justify-content")]),e._v(" "),t("li",[e._v("align-items")]),e._v(" "),t("li",[e._v("align-content")])])]),e._v(" "),t("h3",{attrs:{id:"_3-1-flex-direction属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-flex-direction属性"}},[e._v("#")]),e._v(" 3.1 flex-direction属性")]),e._v(" "),t("p",[t("code",[e._v("flex-direction")]),e._v("属性决定主轴的方向（即项目的排列方向）。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".box {\n  flex-direction: row | row-reverse | column | column-reverse;\n}\n")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png",alt:""}})]),e._v(" "),t("p",[e._v("它可能有4个值。")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[e._v("row")]),e._v("（默认值）：主轴为水平方向，起点在左端。")]),e._v(" "),t("li",[t("code",[e._v("row-reverse")]),e._v("：主轴为水平方向，起点在右端。")]),e._v(" "),t("li",[t("code",[e._v("column")]),e._v("：主轴为垂直方向，起点在上沿。")]),e._v(" "),t("li",[t("code",[e._v("column-reverse")]),e._v("：主轴为垂直方向，起点在下沿。")])])]),e._v(" "),t("h3",{attrs:{id:"_3-2-flex-wrap属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-flex-wrap属性"}},[e._v("#")]),e._v(" 3.2 flex-wrap属性")]),e._v(" "),t("p",[e._v('默认情况下，项目都排在一条线（又称"轴线"）上。'),t("code",[e._v("flex-wrap")]),e._v("属性定义，如果一条轴线排不下，如何换行。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png",alt:""}})]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".box{\n  flex-wrap: nowrap | wrap | wrap-reverse;\n}\n")])])])]),e._v(" "),t("p",[e._v("它可能取三个值。")]),e._v(" "),t("p",[e._v("（1）"),t("code",[e._v("nowrap")]),e._v("（默认）：不换行。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png",alt:""}})]),e._v(" "),t("p",[e._v("（2）"),t("code",[e._v("wrap")]),e._v("：换行，第一行在上方。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg",alt:""}})]),e._v(" "),t("p",[e._v("（3）"),t("code",[e._v("wrap-reverse")]),e._v("：换行，第一行在下方。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_3-3-flex-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-flex-flow"}},[e._v("#")]),e._v(" 3.3 flex-flow")]),e._v(" "),t("p",[t("code",[e._v("flex-flow")]),e._v("属性是"),t("code",[e._v("flex-direction")]),e._v("属性和"),t("code",[e._v("flex-wrap")]),e._v("属性的简写形式，默认值为"),t("code",[e._v("row nowrap")]),e._v("。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".box {\n  flex-flow: <flex-direction> || <flex-wrap>;\n}\n")])])])]),e._v(" "),t("h3",{attrs:{id:"_3-4-justify-content属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-justify-content属性"}},[e._v("#")]),e._v(" 3.4 justify-content属性")]),e._v(" "),t("p",[t("code",[e._v("justify-content")]),e._v("属性定义了项目在主轴上的对齐方式。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".box {\n  justify-content: flex-start | flex-end | center | space-between | space-around;\n}\n")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png",alt:""}})]),e._v(" "),t("p",[e._v("它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[e._v("flex-start")]),e._v("（默认值）：左对齐")]),e._v(" "),t("li",[t("code",[e._v("flex-end")]),e._v("：右对齐")]),e._v(" "),t("li",[t("code",[e._v("center")]),e._v("： 居中")]),e._v(" "),t("li",[t("code",[e._v("space-between")]),e._v("：两端对齐，项目之间的间隔都相等。")]),e._v(" "),t("li",[t("code",[e._v("space-around")]),e._v("：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。")])])]),e._v(" "),t("h3",{attrs:{id:"_3-5-align-items属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-align-items属性"}},[e._v("#")]),e._v(" 3.5 align-items属性")]),e._v(" "),t("p",[t("code",[e._v("align-items")]),e._v("属性定义项目在交叉轴上如何对齐。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".box {\n  align-items: flex-start | flex-end | center | baseline | stretch;\n}\n")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png",alt:""}})]),e._v(" "),t("p",[e._v("它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[e._v("flex-start")]),e._v("：交叉轴的起点对齐。")]),e._v(" "),t("li",[t("code",[e._v("flex-end")]),e._v("：交叉轴的终点对齐。")]),e._v(" "),t("li",[t("code",[e._v("center")]),e._v("：交叉轴的中点对齐。")]),e._v(" "),t("li",[t("code",[e._v("baseline")]),e._v(": 项目的第一行文字的基线对齐。")]),e._v(" "),t("li",[t("code",[e._v("stretch")]),e._v("（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。")])])]),e._v(" "),t("h3",{attrs:{id:"_3-6-align-content属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-align-content属性"}},[e._v("#")]),e._v(" 3.6 align-content属性")]),e._v(" "),t("p",[t("code",[e._v("align-content")]),e._v("属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".box {\n  align-content: flex-start | flex-end | center | space-between | space-around | stretch;\n}\n")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png",alt:""}})]),e._v(" "),t("p",[e._v("该属性可能取6个值。")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[e._v("flex-start")]),e._v("：与交叉轴的起点对齐。")]),e._v(" "),t("li",[t("code",[e._v("flex-end")]),e._v("：与交叉轴的终点对齐。")]),e._v(" "),t("li",[t("code",[e._v("center")]),e._v("：与交叉轴的中点对齐。")]),e._v(" "),t("li",[t("code",[e._v("space-between")]),e._v("：与交叉轴两端对齐，轴线之间的间隔平均分布。")]),e._v(" "),t("li",[t("code",[e._v("space-around")]),e._v("：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。")]),e._v(" "),t("li",[t("code",[e._v("stretch")]),e._v("（默认值）：轴线占满整个交叉轴。")])])]),e._v(" "),t("h3",{attrs:{id:"四、项目的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、项目的属性"}},[e._v("#")]),e._v(" 四、项目的属性")]),e._v(" "),t("p",[e._v("以下6个属性设置在项目上。")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[e._v("order")])]),e._v(" "),t("li",[t("code",[e._v("flex-grow")])]),e._v(" "),t("li",[t("code",[e._v("flex-shrink")])]),e._v(" "),t("li",[t("code",[e._v("flex-basis")])]),e._v(" "),t("li",[t("code",[e._v("flex")])]),e._v(" "),t("li",[t("code",[e._v("align-self")])])])]),e._v(" "),t("h3",{attrs:{id:"_4-1-order属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-order属性"}},[e._v("#")]),e._v(" 4.1 order属性")]),e._v(" "),t("p",[t("code",[e._v("order")]),e._v("属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item {\n  order: <integer>;\n}\n")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_4-2-flex-grow属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-flex-grow属性"}},[e._v("#")]),e._v(" 4.2 flex-grow属性")]),e._v(" "),t("p",[t("code",[e._v("flex-grow")]),e._v("属性定义项目的放大比例，默认为"),t("code",[e._v("0")]),e._v("，即如果存在剩余空间，也不放大。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item {\n  flex-grow: <number>; /* default 0 */\n}\n")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png",alt:""}})]),e._v(" "),t("p",[e._v("如果所有项目的"),t("code",[e._v("flex-grow")]),e._v("属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的"),t("code",[e._v("flex-grow")]),e._v("属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。")]),e._v(" "),t("h3",{attrs:{id:"_4-3-flex-shrink属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-flex-shrink属性"}},[e._v("#")]),e._v(" 4.3 flex-shrink属性")]),e._v(" "),t("p",[t("code",[e._v("flex-shrink")]),e._v("属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item {\n  flex-shrink: <number>; /* default 1 */\n}\n")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg",alt:""}})]),e._v(" "),t("p",[e._v("如果所有项目的"),t("code",[e._v("flex-shrink")]),e._v("属性都为1，当空间不足时，都将等比例缩小。如果一个项目的"),t("code",[e._v("flex-shrink")]),e._v("属性为0，其他项目都为1，则空间不足时，前者不缩小。")]),e._v(" "),t("p",[e._v("负值对该属性无效。")]),e._v(" "),t("h3",{attrs:{id:"_4-4-flex-basis属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-flex-basis属性"}},[e._v("#")]),e._v(" 4.4 flex-basis属性")]),e._v(" "),t("p",[t("code",[e._v("flex-basis")]),e._v("属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为"),t("code",[e._v("auto")]),e._v("，即项目的本来大小。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item {\n  flex-basis: <length> | auto; /* default auto */\n}\n")])])])]),e._v(" "),t("p",[e._v("它可以设为跟"),t("code",[e._v("width")]),e._v("或"),t("code",[e._v("height")]),e._v("属性一样的值（比如350px），则项目将占据固定空间。")]),e._v(" "),t("h3",{attrs:{id:"_4-5-flex属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-flex属性"}},[e._v("#")]),e._v(" 4.5 flex属性")]),e._v(" "),t("p",[t("code",[e._v("flex")]),e._v("属性是"),t("code",[e._v("flex-grow")]),e._v(", "),t("code",[e._v("flex-shrink")]),e._v(" 和 "),t("code",[e._v("flex-basis")]),e._v("的简写，默认值为"),t("code",[e._v("0 1 auto")]),e._v("。后两个属性可选。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item {\n  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]\n}\n")])])])]),e._v(" "),t("p",[e._v("该属性有两个快捷值："),t("code",[e._v("auto")]),e._v(" ("),t("code",[e._v("1 1 auto")]),e._v(") 和 none ("),t("code",[e._v("0 0 auto")]),e._v(")。")]),e._v(" "),t("p",[e._v("建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。")]),e._v(" "),t("h3",{attrs:{id:"_4-6-align-self属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-align-self属性"}},[e._v("#")]),e._v(" 4.6 align-self属性")]),e._v(" "),t("p",[t("code",[e._v("align-self")]),e._v("属性允许单个项目有与其他项目不一样的对齐方式，可覆盖"),t("code",[e._v("align-items")]),e._v("属性。默认值为"),t("code",[e._v("auto")]),e._v("，表示继承父元素的"),t("code",[e._v("align-items")]),e._v("属性，如果没有父元素，则等同于"),t("code",[e._v("stretch")]),e._v("。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item {\n  align-self: auto | flex-start | flex-end | center | baseline | stretch;\n}\n")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png",alt:""}})]),e._v(" "),t("p",[e._v("该属性可能取6个值，除了auto，其他都与align-items属性完全一致。")]),e._v(" "),t("p",[e._v("（完）")])])}),[],!1,null,null,null);t.default=v.exports}}]);