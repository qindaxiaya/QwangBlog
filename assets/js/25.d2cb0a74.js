(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{342:function(e,t,a){"use strict";a.r(t);var v=a(4),_=Object(v.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"css-grid-网格布局教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-grid-网格布局教程"}},[e._v("#")]),e._v(" CSS Grid 网格布局教程")]),e._v(" "),t("h2",{attrs:{id:"一、概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、概述"}},[e._v("#")]),e._v(" 一、概述")]),e._v(" "),t("p",[e._v("网格布局（Grid）是最强大的 CSS 布局方案。")]),e._v(" "),t("p",[e._v("它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/1_bg2019032501.png",alt:""}})]),e._v(" "),t("p",[e._v("上图这样的布局，就是 Grid 布局的拿手好戏。")]),e._v(" "),t("p",[e._v("Grid 布局与 "),t("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flex 布局"),t("OutboundLink")],1),e._v("有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。")]),e._v(" "),t("p",[e._v('Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是'),t("strong",[e._v("一维布局")]),e._v('。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是'),t("strong",[e._v("二维布局")]),e._v("。Grid 布局远比 Flex 布局强大。")]),e._v(" "),t("h2",{attrs:{id:"二、基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、基本概念"}},[e._v("#")]),e._v(" 二、基本概念")]),e._v(" "),t("p",[e._v("学习 Grid 布局之前，需要了解一些基本概念。")]),e._v(" "),t("h3",{attrs:{id:"_2-1-容器和项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-容器和项目"}},[e._v("#")]),e._v(" 2.1 容器和项目")]),e._v(" "),t("p",[e._v('采用网格布局的区域，称为"容器"（container）。容器内部采用网格定位的子元素，称为"项目"（item）。')]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("<div>\n  <div><p>1</p></div>\n  <div><p>2</p></div>\n  <div><p>3</p></div>\n</div>\n")])])])]),e._v(" "),t("p",[e._v("上面代码中，最外层的"),t("code",[e._v("<div>")]),e._v("元素就是容器，内层的三个"),t("code",[e._v("<div>")]),e._v("元素就是项目。")]),e._v(" "),t("p",[e._v("注意：项目只能是容器的顶层子元素，不包含项目的子元素，比如上面代码的"),t("code",[e._v("<p>")]),e._v("元素就不是项目。Grid 布局只对项目生效。")]),e._v(" "),t("h3",{attrs:{id:"_2-2-行和列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-行和列"}},[e._v("#")]),e._v(" 2.2 行和列")]),e._v(" "),t("p",[e._v('容器里面的水平区域称为"行"（row），垂直区域称为"列"（column）。')]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/1_bg2019032502.png",alt:""}})]),e._v(" "),t("p",[e._v('上图中，水平的深色区域就是"行"，垂直的深色区域就是"列"。')]),e._v(" "),t("h3",{attrs:{id:"_2-3-单元格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-单元格"}},[e._v("#")]),e._v(" 2.3 单元格")]),e._v(" "),t("p",[e._v('行和列的交叉区域，称为"单元格"（cell）。')]),e._v(" "),t("p",[e._v("正常情况下，"),t("code",[e._v("n")]),e._v("行和"),t("code",[e._v("m")]),e._v("列会产生"),t("code",[e._v("n x m")]),e._v("个单元格。比如，3行3列会产生9个单元格。")]),e._v(" "),t("h3",{attrs:{id:"_2-4-网格线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-网格线"}},[e._v("#")]),e._v(" 2.4 网格线")]),e._v(" "),t("p",[e._v('划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。')]),e._v(" "),t("p",[e._v("正常情况下，"),t("code",[e._v("n")]),e._v("行有"),t("code",[e._v("n + 1")]),e._v("根水平网格线，"),t("code",[e._v("m")]),e._v("列有"),t("code",[e._v("m + 1")]),e._v("根垂直网格线，比如三行就有四根水平网格线。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/1_bg2019032503.png",alt:""}})]),e._v(" "),t("p",[e._v("上图是一个 4 x 4 的网格，共有5根水平网格线和5根垂直网格线。")]),e._v(" "),t("h2",{attrs:{id:"三、容器属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、容器属性"}},[e._v("#")]),e._v(" 三、容器属性")]),e._v(" "),t("p",[e._v("Grid 布局的属性分成两类。一类定义在容器上面，称为容器属性；另一类定义在项目上面，称为项目属性。这部分先介绍容器属性。")]),e._v(" "),t("h3",{attrs:{id:"_3-1-display-属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-display-属性"}},[e._v("#")]),e._v(" 3.1 display 属性")]),e._v(" "),t("p",[t("code",[e._v("display: grid")]),e._v("指定一个容器采用网格布局。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("div {\n  display: grid;\n}\n")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032504.png",alt:""}})]),e._v(" "),t("p",[e._v("上图是"),t("code",[e._v("display: grid")]),e._v("的"),t("a",{attrs:{href:"https://jsbin.com/guvivum/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("效果"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("默认情况下，容器元素都是块级元素，但也可以设成行内元素。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("div {\n  display: inline-grid;\n}\n")])])])]),e._v(" "),t("p",[e._v("上面代码指定"),t("code",[e._v("div")]),e._v("是一个行内元素，该元素内部采用网格布局。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032505.png",alt:""}})]),e._v(" "),t("p",[e._v("上图是"),t("code",[e._v("display: inline-grid")]),e._v("的"),t("a",{attrs:{href:"https://jsbin.com/qatitav/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("效果"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("blockquote",[t("p",[e._v("注意，设为网格布局以后，容器子元素（项目）的"),t("code",[e._v("float")]),e._v("、"),t("code",[e._v("display: inline-block")]),e._v("、"),t("code",[e._v("display: table-cell")]),e._v("、"),t("code",[e._v("vertical-align")]),e._v("和"),t("code",[e._v("column-*")]),e._v("等设置都将失效。")])]),e._v(" "),t("h3",{attrs:{id:"_3-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2"}},[e._v("#")]),e._v(" 3.2")]),e._v(" "),t("p",[e._v("grid-template-columns 属性，"),t("br"),e._v("\ngrid-template-rows 属性")]),e._v(" "),t("p",[e._v("容器指定了网格布局以后，接着就要划分行和列。"),t("code",[e._v("grid-template-columns")]),e._v("属性定义每一列的列宽，"),t("code",[e._v("grid-template-rows")]),e._v("属性定义每一行的行高。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".container {\n  display: grid;\n  grid-template-columns: 100px 100px 100px;\n  grid-template-rows: 100px 100px 100px;\n}\n")])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/qiginur/edit?css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("上面代码"),t("OutboundLink")],1),e._v("指定了一个三行三列的网格，列宽和行高都是"),t("code",[e._v("100px")]),e._v("。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032506.png",alt:""}})]),e._v(" "),t("p",[e._v("除了使用绝对单位，也可以使用百分比。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".container {\n  display: grid;\n  grid-template-columns: 33.33% 33.33% 33.33%;\n  grid-template-rows: 33.33% 33.33% 33.33%;\n}\n")])])])]),e._v(" "),t("p",[t("strong",[e._v("（1）repeat()")])]),e._v(" "),t("p",[e._v("有时候，重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用"),t("code",[e._v("repeat()")]),e._v("函数，简化重复的值。上面的代码用"),t("code",[e._v("repeat()")]),e._v("改写如下。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".container {\n  display: grid;\n  grid-template-columns: repeat(3, 33.33%);\n  grid-template-rows: repeat(3, 33.33%);\n}\n")])])])]),e._v(" "),t("p",[t("code",[e._v("repeat()")]),e._v("接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。")]),e._v(" "),t("p",[t("code",[e._v("repeat()")]),e._v("重复某种模式也是可以的。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("grid-template-columns: repeat(2, 100px 20px 80px);\n")])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/cokohu/edit?css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("上面代码"),t("OutboundLink")],1),e._v("定义了6列，第一列和第四列的宽度为"),t("code",[e._v("100px")]),e._v("，第二列和第五列为"),t("code",[e._v("20px")]),e._v("，第三列和第六列为"),t("code",[e._v("80px")]),e._v("。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032507.png",alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("（2）auto-fill 关键字")])]),e._v(" "),t("p",[e._v("有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用"),t("code",[e._v("auto-fill")]),e._v("关键字表示自动填充。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 100px);\n}\n")])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/himoku/edit?css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("上面代码"),t("OutboundLink")],1),e._v("表示每列宽度"),t("code",[e._v("100px")]),e._v("，然后自动填充，直到容器不能放置更多的列。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032508.png",alt:""}})]),e._v(" "),t("p",[e._v("除了"),t("code",[e._v("auto-fill")]),e._v("，还有一个关键字"),t("code",[e._v("auto-fit")]),e._v("，两者的行为基本是相同的。只有当容器足够宽，可以在一行容纳所有单元格，并且单元格宽度不固定的时候，才会有"),t("a",{attrs:{href:"https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/",target:"_blank",rel:"noopener noreferrer"}},[e._v("行为差异"),t("OutboundLink")],1),e._v("："),t("code",[e._v("auto-fill")]),e._v("会用空格子填满剩余宽度，"),t("code",[e._v("auto-fit")]),e._v("则会尽量扩大单元格的宽度。")]),e._v(" "),t("p",[t("strong",[e._v("（3）fr 关键字")])]),e._v(" "),t("p",[e._v("为了方便表示比例关系，网格布局提供了"),t("code",[e._v("fr")]),e._v('关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为'),t("code",[e._v("1fr")]),e._v("和"),t("code",[e._v("2fr")]),e._v("，就表示后者是前者的两倍。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n")])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/hadexek/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("上面代码"),t("OutboundLink")],1),e._v("表示两个相同宽度的列。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/1_bg2019032509.png",alt:""}})]),e._v(" "),t("p",[t("code",[e._v("fr")]),e._v("可以与绝对长度的单位结合使用，这时会非常方便。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".container {\n  display: grid;\n  grid-template-columns: 150px 1fr 2fr;\n}\n")])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/remowec/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("上面代码"),t("OutboundLink")],1),e._v("表示，第一列的宽度为150像素，第二列的宽度是第三列的一半。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032510.png",alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("（4）minmax()")])]),e._v(" "),t("p",[t("code",[e._v("minmax()")]),e._v("函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("grid-template-columns: 1fr 1fr minmax(100px, 1fr);\n")])])])]),e._v(" "),t("p",[e._v("上面代码中，"),t("code",[e._v("minmax(100px, 1fr)")]),e._v("表示列宽不小于"),t("code",[e._v("100px")]),e._v("，不大于"),t("code",[e._v("1fr")]),e._v("。")]),e._v(" "),t("p",[t("strong",[e._v("（5）auto 关键字")])]),e._v(" "),t("p",[t("code",[e._v("auto")]),e._v("关键字表示由浏览器自己决定长度。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("grid-template-columns: 100px auto 100px;\n")])])])]),e._v(" "),t("p",[e._v("上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了"),t("code",[e._v("min-width")]),e._v("，且这个值大于最大宽度。")]),e._v(" "),t("p",[t("strong",[e._v("（6）网格线的名称")])]),e._v(" "),t("p",[t("code",[e._v("grid-template-columns")]),e._v("属性和"),t("code",[e._v("grid-template-rows")]),e._v("属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".container {\n  display: grid;\n  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];\n  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];\n}\n")])])])]),e._v(" "),t("p",[e._v("上面代码指定网格布局为3行 x 3列，因此有4根垂直网格线和4根水平网格线。方括号里面依次是这八根线的名字。")]),e._v(" "),t("p",[e._v("网格布局允许同一根线有多个名字，比如"),t("code",[e._v("[fifth-line row-5]")]),e._v("。")]),e._v(" "),t("p",[t("strong",[e._v("（7）布局实例")])]),e._v(" "),t("p",[t("code",[e._v("grid-template-columns")]),e._v("属性对于网页布局非常有用。两栏式布局只需要一行代码。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".wrapper {\n  display: grid;\n  grid-template-columns: 70% 30%;\n}\n")])])])]),e._v(" "),t("p",[e._v("上面代码将左边栏设为70%，右边栏设为30%。")]),e._v(" "),t("p",[e._v("传统的十二网格布局，写起来也很容易。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("grid-template-columns: repeat(12, 1fr);\n")])])])]),e._v(" "),t("h3",{attrs:{id:"_3-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3"}},[e._v("#")]),e._v(" 3.3")]),e._v(" "),t("p",[e._v("grid-row-gap 属性，"),t("br"),e._v("\ngrid-column-gap 属性，"),t("br"),e._v("\ngrid-gap 属性")]),e._v(" "),t("p",[t("code",[e._v("grid-row-gap")]),e._v("属性设置行与行的间隔（行间距），"),t("code",[e._v("grid-column-gap")]),e._v("属性设置列与列的间隔（列间距）。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".container {\n  grid-row-gap: 20px;\n  grid-column-gap: 20px;\n}\n")])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/mezufab/edit?css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("上面代码"),t("OutboundLink")],1),e._v("中，"),t("code",[e._v("grid-row-gap")]),e._v("用于设置行间距，"),t("code",[e._v("grid-column-gap")]),e._v("用于设置列间距。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032511.png",alt:""}})]),e._v(" "),t("p",[t("code",[e._v("grid-gap")]),e._v("属性是"),t("code",[e._v("grid-column-gap")]),e._v("和"),t("code",[e._v("grid-row-gap")]),e._v("的合并简写形式，语法如下。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("grid-gap: <grid-row-gap> <grid-column-gap>;\n")])])])]),e._v(" "),t("p",[e._v("因此，上面一段 CSS 代码等同于下面的代码。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".container {\n  grid-gap: 20px 20px;\n}\n")])])])]),e._v(" "),t("p",[e._v("如果"),t("code",[e._v("grid-gap")]),e._v("省略了第二个值，浏览器认为第二个值等于第一个值。")]),e._v(" "),t("blockquote",[t("p",[e._v("根据最新标准，上面三个属性名的"),t("code",[e._v("grid-")]),e._v("前缀已经删除，"),t("code",[e._v("grid-column-gap")]),e._v("和"),t("code",[e._v("grid-row-gap")]),e._v("写成"),t("code",[e._v("column-gap")]),e._v("和"),t("code",[e._v("row-gap")]),e._v("，"),t("code",[e._v("grid-gap")]),e._v("写成"),t("code",[e._v("gap")]),e._v("。")])]),e._v(" "),t("h3",{attrs:{id:"_3-4-grid-template-areas-属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-grid-template-areas-属性"}},[e._v("#")]),e._v(" 3.4 grid-template-areas 属性")]),e._v(" "),t("p",[e._v('网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。'),t("code",[e._v("grid-template-areas")]),e._v("属性用于定义区域。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".container {\n  display: grid;\n  grid-template-columns: 100px 100px 100px;\n  grid-template-rows: 100px 100px 100px;\n  grid-template-areas: 'a b c'\n                       'd e f'\n                       'g h i';\n}\n")])])])]),e._v(" "),t("p",[e._v("上面代码先划分出9个单元格，然后将其定名为"),t("code",[e._v("a")]),e._v("到"),t("code",[e._v("i")]),e._v("的九个区域，分别对应这九个单元格。")]),e._v(" "),t("p",[e._v("多个单元格合并成一个区域的写法如下。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("grid-template-areas: 'a a a'\n                     'b b b'\n                     'c c c';\n")])])])]),e._v(" "),t("p",[e._v("上面代码将9个单元格分成"),t("code",[e._v("a")]),e._v("、"),t("code",[e._v("b")]),e._v("、"),t("code",[e._v("c")]),e._v("三个区域。")]),e._v(" "),t("p",[e._v("下面是一个布局实例。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('grid-template-areas: "header header header"\n                     "main main sidebar"\n                     "footer footer footer";\n')])])])]),e._v(" "),t("p",[e._v("上面代码中，顶部是页眉区域"),t("code",[e._v("header")]),e._v("，底部是页脚区域"),t("code",[e._v("footer")]),e._v("，中间部分则为"),t("code",[e._v("main")]),e._v("和"),t("code",[e._v("sidebar")]),e._v("。")]),e._v(" "),t("p",[e._v('如果某些区域不需要利用，则使用"点"（'),t("code",[e._v(".")]),e._v("）表示。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("grid-template-areas: 'a . c'\n                     'd . f'\n                     'g . i';\n")])])])]),e._v(" "),t("p",[e._v("上面代码中，中间一列为点，表示没有用到该单元格，或者该单元格不属于任何区域。")]),e._v(" "),t("blockquote",[t("p",[e._v("注意，区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为"),t("code",[e._v("区域名-start")]),e._v("，终止网格线自动命名为"),t("code",[e._v("区域名-end")]),e._v("。")]),e._v(" "),t("p",[e._v("比如，区域名为"),t("code",[e._v("header")]),e._v("，则起始位置的水平网格线和垂直网格线叫做"),t("code",[e._v("header-start")]),e._v("，终止位置的水平网格线和垂直网格线叫做"),t("code",[e._v("header-end")]),e._v("。")])]),e._v(" "),t("h3",{attrs:{id:"_3-5-grid-auto-flow-属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-grid-auto-flow-属性"}},[e._v("#")]),e._v(" 3.5 grid-auto-flow 属性")]),e._v(" "),t("p",[e._v('划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行，即下图数字的顺序。')]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032506.png",alt:""}})]),e._v(" "),t("p",[e._v("这个顺序由"),t("code",[e._v("grid-auto-flow")]),e._v("属性决定，默认值是"),t("code",[e._v("row")]),e._v('，即"先行后列"。也可以将它设成'),t("code",[e._v("column")]),e._v('，变成"先列后行"。')]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("grid-auto-flow: column;\n")])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/xutokec/edit?css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("上面代码"),t("OutboundLink")],1),e._v("设置了"),t("code",[e._v("column")]),e._v("以后，放置顺序就变成了下图。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032512.png",alt:""}})]),e._v(" "),t("p",[t("code",[e._v("grid-auto-flow")]),e._v("属性除了设置成"),t("code",[e._v("row")]),e._v("和"),t("code",[e._v("column")]),e._v("，还可以设成"),t("code",[e._v("row dense")]),e._v("和"),t("code",[e._v("column dense")]),e._v("。这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/wapejok/edit?css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("下面的例子"),t("OutboundLink")],1),e._v("让1号项目和2号项目各占据两个单元格，然后在默认的"),t("code",[e._v("grid-auto-flow: row")]),e._v("情况下，会产生下面这样的布局。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032513.png",alt:""}})]),e._v(" "),t("p",[e._v("上图中，1号项目后面的位置是空的，这是因为3号项目默认跟着2号项目，所以会排在2号项目后面。")]),e._v(" "),t("p",[e._v("现在修改设置，设为"),t("code",[e._v("row dense")]),e._v('，表示"先行后列"，并且尽可能紧密填满，尽量不出现空格。')]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("grid-auto-flow: row dense;\n")])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/helewuy/edit?css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("上面代码"),t("OutboundLink")],1),e._v("的效果如下。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032514.png",alt:""}})]),e._v(" "),t("p",[e._v("上图会先填满第一行，再填满第二行，所以3号项目就会紧跟在1号项目的后面。8号项目和9号项目就会排到第四行。")]),e._v(" "),t("p",[e._v("如果将设置改为"),t("code",[e._v("column dense")]),e._v('，表示"先列后行"，并且尽量填满空格。')]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("grid-auto-flow: column dense;\n")])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/pupoduc/1/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("上面代码"),t("OutboundLink")],1),e._v("的效果如下。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032515.png",alt:""}})]),e._v(" "),t("p",[e._v("上图会先填满第一列，再填满第2列，所以3号项目在第一列，4号项目在第二列。8号项目和9号项目被挤到了第四列。")]),e._v(" "),t("h3",{attrs:{id:"_3-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-6"}},[e._v("#")]),e._v(" 3.6")]),e._v(" "),t("p",[e._v("justify-items 属性，"),t("br"),e._v("\nalign-items 属性，"),t("br"),e._v("\nplace-items 属性")]),e._v(" "),t("p",[t("code",[e._v("justify-items")]),e._v("属性设置单元格内容的水平位置（左中右），"),t("code",[e._v("align-items")]),e._v("属性设置单元格内容的垂直位置（上中下）。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".container {\n  justify-items: start | end | center | stretch;\n  align-items: start | end | center | stretch;\n}\n")])])])]),e._v(" "),t("p",[e._v("这两个属性的写法完全相同，都可以取下面这些值。")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("start：对齐单元格的起始边缘。")]),e._v(" "),t("li",[e._v("end：对齐单元格的结束边缘。")]),e._v(" "),t("li",[e._v("center：单元格内部居中。")]),e._v(" "),t("li",[e._v("stretch：拉伸，占满单元格的整个宽度（默认值）。")])])]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".container {\n  justify-items: start;\n}\n")])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/gijeqej/edit?css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("上面代码"),t("OutboundLink")],1),e._v("表示，单元格的内容左对齐，效果如下图。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032516.png",alt:""}})]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".container {\n  align-items: start;\n}\n")])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/tecawur/edit?css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("上面代码"),t("OutboundLink")],1),e._v("表示，单元格的内容头部对齐，效果如下图。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032517.png",alt:""}})]),e._v(" "),t("p",[t("code",[e._v("place-items")]),e._v("属性是"),t("code",[e._v("align-items")]),e._v("属性和"),t("code",[e._v("justify-items")]),e._v("属性的合并简写形式。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("place-items: <align-items> <justify-items>;\n")])])])]),e._v(" "),t("p",[e._v("下面是一个例子。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("place-items: start end;\n")])])])]),e._v(" "),t("p",[e._v("如果省略第二个值，则浏览器认为与第一个值相等。")]),e._v(" "),t("h3",{attrs:{id:"_3-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-7"}},[e._v("#")]),e._v(" 3.7")]),e._v(" "),t("p",[e._v("justify-content 属性，"),t("br"),e._v("\nalign-content 属性，"),t("br"),e._v("\nplace-content 属性")]),e._v(" "),t("p",[t("code",[e._v("justify-content")]),e._v("属性是整个内容区域在容器里面的水平位置（左中右），"),t("code",[e._v("align-content")]),e._v("属性是整个内容区域的垂直位置（上中下）。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".container {\n  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;\n  align-content: start | end | center | stretch | space-around | space-between | space-evenly;  \n}\n")])])])]),e._v(" "),t("p",[e._v("这两个属性的写法完全相同，都可以取下面这些值。（下面的图都以"),t("code",[e._v("justify-content")]),e._v("属性为例，"),t("code",[e._v("align-content")]),e._v("属性的图完全一样，只是将水平方向改成垂直方向。）")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("start - 对齐容器的起始边框。")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032519.png",alt:""}})]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("end - 对齐容器的结束边框。")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032518.png",alt:""}})]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("center - 容器内部居中。")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032520.png",alt:""}})]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("stretch - 项目大小没有指定时，拉伸占据整个网格容器。")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032521.png",alt:""}})]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032522.png",alt:""}})]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032523.png",alt:""}})]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032524.png",alt:""}})]),e._v(" "),t("p",[t("code",[e._v("place-content")]),e._v("属性是"),t("code",[e._v("align-content")]),e._v("属性和"),t("code",[e._v("justify-content")]),e._v("属性的合并简写形式。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("place-content: <align-content> <justify-content>\n")])])])]),e._v(" "),t("p",[e._v("下面是一个例子。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("place-content: space-around space-evenly;\n")])])])]),e._v(" "),t("p",[e._v("如果省略第二个值，浏览器就会假定第二个值等于第一个值。")]),e._v(" "),t("h3",{attrs:{id:"_3-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-8"}},[e._v("#")]),e._v(" 3.8")]),e._v(" "),t("p",[e._v("grid-auto-columns 属性，"),t("br"),e._v("\ngrid-auto-rows 属性")]),e._v(" "),t("p",[e._v("有时候，一些项目的指定位置，在现有网格的外部。比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目。")]),e._v(" "),t("p",[t("code",[e._v("grid-auto-columns")]),e._v("属性和"),t("code",[e._v("grid-auto-rows")]),e._v("属性用来设置，浏览器自动创建的多余网格的列宽和行高。它们的写法与"),t("code",[e._v("grid-template-columns")]),e._v("和"),t("code",[e._v("grid-template-rows")]),e._v("完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/sayuric/edit?css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("下面的例子"),t("OutboundLink")],1),e._v("里面，划分好的网格是3行 x 3列，但是，8号项目指定在第4行，9号项目指定在第5行。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".container {\n  display: grid;\n  grid-template-columns: 100px 100px 100px;\n  grid-template-rows: 100px 100px 100px;\n  grid-auto-rows: 50px; \n}\n")])])])]),e._v(" "),t("p",[e._v("上面代码指定新增的行高统一为50px（原始的行高为100px）。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032525.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_3-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-9"}},[e._v("#")]),e._v(" 3.9")]),e._v(" "),t("p",[e._v("grid-template 属性，"),t("br"),e._v("\ngrid 属性")]),e._v(" "),t("p",[t("code",[e._v("grid-template")]),e._v("属性是"),t("code",[e._v("grid-template-columns")]),e._v("、"),t("code",[e._v("grid-template-rows")]),e._v("和"),t("code",[e._v("grid-template-areas")]),e._v("这三个属性的合并简写形式。")]),e._v(" "),t("p",[t("code",[e._v("grid")]),e._v("属性是"),t("code",[e._v("grid-template-rows")]),e._v("、"),t("code",[e._v("grid-template-columns")]),e._v("、"),t("code",[e._v("grid-template-areas")]),e._v("、 "),t("code",[e._v("grid-auto-rows")]),e._v("、"),t("code",[e._v("grid-auto-columns")]),e._v("、"),t("code",[e._v("grid-auto-flow")]),e._v("这六个属性的合并简写形式。")]),e._v(" "),t("p",[e._v("从易读易写的角度考虑，还是建议不要合并属性，所以这里就不详细介绍这两个属性了。")]),e._v(" "),t("h2",{attrs:{id:"四、项目属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、项目属性"}},[e._v("#")]),e._v(" 四、项目属性")]),e._v(" "),t("p",[e._v("下面这些属性定义在项目上面。")]),e._v(" "),t("h3",{attrs:{id:"_4-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1"}},[e._v("#")]),e._v(" 4.1")]),e._v(" "),t("p",[e._v("grid-column-start 属性，"),t("br"),e._v("\ngrid-column-end 属性，"),t("br"),e._v("\ngrid-row-start 属性，"),t("br"),e._v("\ngrid-row-end 属性")]),e._v(" "),t("p",[e._v("项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[e._v("grid-column-start")]),e._v("属性：左边框所在的垂直网格线")]),e._v(" "),t("li",[t("code",[e._v("grid-column-end")]),e._v("属性：右边框所在的垂直网格线")]),e._v(" "),t("li",[t("code",[e._v("grid-row-start")]),e._v("属性：上边框所在的水平网格线")]),e._v(" "),t("li",[t("code",[e._v("grid-row-end")]),e._v("属性：下边框所在的水平网格线")])])]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item-1 {\n  grid-column-start: 2;\n  grid-column-end: 4;\n}\n")])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/yukobuf/edit?css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("上面代码"),t("OutboundLink")],1),e._v("指定，1号项目的左边框是第二根垂直网格线，右边框是第四根垂直网格线。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032526.png",alt:""}})]),e._v(" "),t("p",[e._v("上图中，只指定了1号项目的左右边框，没有指定上下边框，所以会采用默认位置，即上边框是第一根水平网格线，下边框是第二根水平网格线。")]),e._v(" "),t("p",[e._v("除了1号项目以外，其他项目都没有指定位置，由浏览器自动布局，这时它们的位置由容器的"),t("code",[e._v("grid-auto-flow")]),e._v("属性决定，这个属性的默认值是"),t("code",[e._v("row")]),e._v('，因此会"先行后列"进行排列。读者可以把这个属性的值分别改成'),t("code",[e._v("column")]),e._v("、"),t("code",[e._v("row dense")]),e._v("和"),t("code",[e._v("column dense")]),e._v("，看看其他项目的位置发生了怎样的变化。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/nagobey/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("下面的例子"),t("OutboundLink")],1),e._v("是指定四个边框位置的效果。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item-1 {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row-start: 2;\n  grid-row-end: 4;\n}\n")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032527.png",alt:""}})]),e._v(" "),t("p",[e._v("这四个属性的值，除了指定为第几个网格线，还可以指定为网格线的名字。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item-1 {\n  grid-column-start: header-start;\n  grid-column-end: header-end;\n}\n")])])])]),e._v(" "),t("p",[e._v("上面代码中，左边框和右边框的位置，都指定为网格线的名字。")]),e._v(" "),t("p",[e._v("这四个属性的值还可以使用"),t("code",[e._v("span")]),e._v('关键字，表示"跨越"，即左右边框（上下边框）之间跨越多少个网格。')]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item-1 {\n  grid-column-start: span 2;\n}\n")])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/hehumay/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("上面代码"),t("OutboundLink")],1),e._v("表示，1号项目的左边框距离右边框跨越2个网格。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032528.png",alt:""}})]),e._v(" "),t("p",[e._v("这与"),t("a",{attrs:{href:"https://jsbin.com/mujihib/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("下面的代码"),t("OutboundLink")],1),e._v("效果完全一样。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item-1 {\n  grid-column-end: span 2;\n}\n")])])])]),e._v(" "),t("p",[e._v("使用这四个属性，如果产生了项目的重叠，则使用"),t("code",[e._v("z-index")]),e._v("属性指定项目的重叠顺序。")]),e._v(" "),t("h3",{attrs:{id:"_4-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2"}},[e._v("#")]),e._v(" 4.2")]),e._v(" "),t("p",[e._v("grid-column 属性，"),t("br"),e._v("\ngrid-row 属性")]),e._v(" "),t("p",[t("code",[e._v("grid-column")]),e._v("属性是"),t("code",[e._v("grid-column-start")]),e._v("和"),t("code",[e._v("grid-column-end")]),e._v("的合并简写形式，"),t("code",[e._v("grid-row")]),e._v("属性是"),t("code",[e._v("grid-row-start")]),e._v("属性和"),t("code",[e._v("grid-row-end")]),e._v("的合并简写形式。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item {\n  grid-column: <start-line> / <end-line>;\n  grid-row: <start-line> / <end-line>;\n}\n")])])])]),e._v(" "),t("p",[e._v("下面是一个例子。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item-1 {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n}\n/* 等同于 */\n.item-1 {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row-start: 1;\n  grid-row-end: 2;\n}\n")])])])]),e._v(" "),t("p",[e._v("上面代码中，项目"),t("code",[e._v("item-1")]),e._v("占据第一行，从第一根列线到第三根列线。")]),e._v(" "),t("p",[e._v("这两个属性之中，也可以使用"),t("code",[e._v("span")]),e._v("关键字，表示跨越多少个网格。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item-1 {\n  background: #b03532;\n  grid-column: 1 / 3;\n  grid-row: 1 / 3;\n}\n/* 等同于 */\n.item-1 {\n  background: #b03532;\n  grid-column: 1 / span 2;\n  grid-row: 1 / span 2;\n}\n")])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/volugow/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("上面代码"),t("OutboundLink")],1),e._v("中，项目"),t("code",[e._v("item-1")]),e._v("占据的区域，包括第一行 + 第二行、第一列 + 第二列。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032529.png",alt:""}})]),e._v(" "),t("p",[e._v("斜杠以及后面的部分可以省略，默认跨越一个网格。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item-1 {\n  grid-column: 1;\n  grid-row: 1;\n}\n")])])])]),e._v(" "),t("p",[e._v("上面代码中，项目"),t("code",[e._v("item-1")]),e._v("占据左上角第一个网格。")]),e._v(" "),t("h3",{attrs:{id:"_4-3-grid-area-属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-grid-area-属性"}},[e._v("#")]),e._v(" 4.3 grid-area 属性")]),e._v(" "),t("p",[t("code",[e._v("grid-area")]),e._v("属性指定项目放在哪一个区域。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item-1 {\n  grid-area: e;\n}\n")])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsbin.com/qokexob/edit?css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("上面代码"),t("OutboundLink")],1),e._v("中，1号项目位于"),t("code",[e._v("e")]),e._v("区域，效果如下图。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032530.png",alt:""}})]),e._v(" "),t("p",[t("code",[e._v("grid-area")]),e._v("属性还可用作"),t("code",[e._v("grid-row-start")]),e._v("、"),t("code",[e._v("grid-column-start")]),e._v("、"),t("code",[e._v("grid-row-end")]),e._v("、"),t("code",[e._v("grid-column-end")]),e._v("的合并简写形式，直接指定项目的位置。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item {\n  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;\n}\n")])])])]),e._v(" "),t("p",[e._v("下面是一个"),t("a",{attrs:{href:"https://jsbin.com/duyafez/edit?css,output",target:"_blank",rel:"noopener noreferrer"}},[e._v("例子"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item-1 {\n  grid-area: 1 / 1 / 3 / 3;\n}\n")])])])]),e._v(" "),t("h3",{attrs:{id:"_4-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4"}},[e._v("#")]),e._v(" 4.4")]),e._v(" "),t("p",[e._v("justify-self 属性，"),t("br"),e._v("\nalign-self 属性，"),t("br"),e._v("\nplace-self 属性")]),e._v(" "),t("p",[t("code",[e._v("justify-self")]),e._v("属性设置单元格内容的水平位置（左中右），跟"),t("code",[e._v("justify-items")]),e._v("属性的用法完全一致，但只作用于单个项目。")]),e._v(" "),t("p",[t("code",[e._v("align-self")]),e._v("属性设置单元格内容的垂直位置（上中下），跟"),t("code",[e._v("align-items")]),e._v("属性的用法完全一致，也是只作用于单个项目。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item {\n  justify-self: start | end | center | stretch;\n  align-self: start | end | center | stretch;\n}\n")])])])]),e._v(" "),t("p",[e._v("这两个属性都可以取下面四个值。")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("start：对齐单元格的起始边缘。")]),e._v(" "),t("li",[e._v("end：对齐单元格的结束边缘。")]),e._v(" "),t("li",[e._v("center：单元格内部居中。")]),e._v(" "),t("li",[e._v("stretch：拉伸，占满单元格的整个宽度（默认值）。")])])]),e._v(" "),t("p",[e._v("下面是"),t("code",[e._v("justify-self: start")]),e._v("的例子。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".item-1  {\n  justify-self: start;\n}\n")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.beekka.com/blogimg/asset/201903/bg2019032532.png",alt:""}})]),e._v(" "),t("p",[t("code",[e._v("place-self")]),e._v("属性是"),t("code",[e._v("align-self")]),e._v("属性和"),t("code",[e._v("justify-self")]),e._v("属性的合并简写形式。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("place-self: <align-self> <justify-self>;\n")])])])]),e._v(" "),t("p",[e._v("下面是一个例子。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("place-self: center center;\n")])])])]),e._v(" "),t("p",[e._v("如果省略第二个值，"),t("code",[e._v("place-self")]),e._v("属性会认为这两个值相等。")])])}),[],!1,null,null,null);t.default=_.exports}}]);