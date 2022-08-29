(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{289:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"十九、表单脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十九、表单脚本"}},[t._v("#")]),t._v(" 十九、表单脚本")]),t._v(" "),s("p",[t._v("表单表现为一个 form 标签，里面包含许多诸如 input 的表单控件，可以进行提交。")]),t._v(" "),s("h3",{attrs:{id:"表单基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单基础"}},[t._v("#")]),t._v(" 表单基础")]),t._v(" "),s("p",[t._v("form 标签是 HTMLFormElement 类型，继承自 HTMLElement 类型，故他有普通标签的属性，也有自己的属性。")]),t._v(" "),s("ul",[s("li",[t._v("acceptCharset"),s("br"),t._v("\n服务器可以接收的字符集，等价于 HTML 的 accept-charset 属性。")]),t._v(" "),s("li",[t._v("action"),s("br"),t._v("\n请求的 URL，等价于 HTML 的 action 属性。")]),t._v(" "),s("li",[t._v("elements"),s("br"),t._v("\n表单中所有控件的 HTMLCollection。")]),t._v(" "),s("li",[t._v("enctype"),s("br"),t._v("\n请求的编码类型，等价于 HTML 的 enctype 属性。")]),t._v(" "),s("li",[t._v("length"),s("br"),t._v("\n表单中控件的数量。")]),t._v(" "),s("li",[t._v("method"),s("br"),t._v('\nHTTP 请求的方法类型，通常是"get"或"post"，等价于 HTML 的 method 属性。')]),t._v(" "),s("li",[t._v("name"),s("br"),t._v("\n表单的名字，等价于 HTML 的 name 属性。")]),t._v(" "),s("li",[t._v("reset()"),s("br"),t._v("\n把表单字段重置为各自的默认值。")]),t._v(" "),s("li",[t._v("submit()"),s("br"),t._v("\n提交表单。")]),t._v(" "),s("li",[t._v("target"),s("br"),t._v("\n用于发送请求和接收响应的窗口的名字，等价于 HTML 的 target 属性。")])]),t._v(" "),s("h4",{attrs:{id:"获取表单元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取表单元素"}},[t._v("#")]),t._v(" 获取表单元素")]),t._v(" "),s("p",[t._v("可以直接使用 document.getElementBy[Id/Name/TagName] 获取，也可以使用 document.forms 获取所有表单元素")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 取得页面中的第一个表单")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" firstForm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 取得 name 属性为"form2"的表单')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myForm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"form2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"提交表单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交表单"}},[t._v("#")]),t._v(" 提交表单")]),t._v(" "),s("p",[t._v("input|button[type='submit'] 和 input[type='image'][src=xxx] 都表现为一个按钮，可以进行提交表单。")]),t._v(" "),s("p",[t._v("当有提交按钮，且表单控件处于焦点时，按回车键也会触发提交表单。")]),t._v(" "),s("p",[t._v("textarea 控件例外，按回车键会换行。且没有提交按钮的表单在按回车键时不会提交。")]),t._v(" "),s("p",[t._v("表单在向服务器发送请求之前触发 submit 事件，可用于取消或验证表单。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 通用提交按钮 --\x3e")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Submit Form"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 自定义提交按钮 --\x3e")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Submit Form"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 图片按钮 --\x3e")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("graphic.gif"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"重置表单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重置表单"}},[t._v("#")]),t._v(" 重置表单")]),t._v(" "),s("p",[t._v("input|button[type='reset'] 都表现为一个按钮，可以进行重置表单。")]),t._v(" "),s("h4",{attrs:{id:"表单字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单字段"}},[t._v("#")]),t._v(" 表单字段")]),t._v(" "),s("p",[t._v("表单字段的属性")]),t._v(" "),s("ul",[s("li",[t._v("disabled"),s("br"),t._v("\n布尔值，表示表单字段是否禁用。")]),t._v(" "),s("li",[t._v("form"),s("br"),t._v("\n指针，指向表单字段所属的表单。这个属性是只读的。")]),t._v(" "),s("li",[t._v("name"),s("br"),t._v("\n字符串，这个字段的名字。")]),t._v(" "),s("li",[t._v("readOnly"),s("br"),t._v("\n布尔值，表示这个字段是否只读。")]),t._v(" "),s("li",[t._v("tabIndex"),s("br"),t._v("\n数值，表示这个字段在按 Tab 键时的切换顺序。")]),t._v(" "),s("li",[t._v("type"),s("br"),t._v('\n字符串，表示字段类型，如"checkbox"、"radio"等。')]),t._v(" "),s("li",[t._v("value"),s("br"),t._v("\n要提交给服务器的字段值。对文件输入字段来说，这个属性是只读的，仅包含计算机上\n某个文件的路径。")])]),t._v(" "),s("h5",{attrs:{id:"表单字段的公共方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单字段的公共方法"}},[t._v("#")]),t._v(" 表单字段的公共方法")]),t._v(" "),s("p",[t._v("focus 和 blur。")]),t._v(" "),s("p",[t._v("focus() 方法把浏览器焦点设置到表单字段，这意味着该字段会变成活动字段并可以响应键盘事件。")]),t._v(" "),s("p",[t._v("focus() 的反向操作是 blur()，其用于从元素上移除焦点")]),t._v(" "),s("h3",{attrs:{id:"文本框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文本框"}},[t._v("#")]),t._v(" 文本框")]),t._v(" "),s("p",[t._v("文本框为 input 和 textarea。")]),t._v(" "),s("h4",{attrs:{id:"选择文本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择文本"}},[t._v("#")]),t._v(" 选择文本")]),t._v(" "),s("p",[t._v("文本框有 select() 方法，用于选中文本框的文本。且当选中文本框的文本时，会触发 select 事件。")]),t._v(" "),s("h4",{attrs:{id:"获取所选文本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取所选文本"}},[t._v("#")]),t._v(" 获取所选文本")]),t._v(" "),s("p",[t._v("文本框有额外的属性 selectionStart 和 selectionEnd，用于截取选中的文本。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectionStart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectionEnd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"获取部分文本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取部分文本"}},[t._v("#")]),t._v(" 获取部分文本")]),t._v(" "),s("p",[t._v("setSelectionRange(start,end)\n从下标 0 开始，不含 end 下标，会触发 select 事件，选中部分文本。")]),t._v(" "),s("h3",{attrs:{id:"输入过滤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入过滤"}},[t._v("#")]),t._v(" 输入过滤")]),t._v(" "),s("p",[t._v("当某些情况时，我们希望用户按下键盘时，输入框不响应。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("keypress\n即在按下键盘时，在 keypress 事件中进行处理，调用 "),s("code",[t._v("event.preventDefault()")]),t._v(" 使得有些输入不做响应。")])]),t._v(" "),s("li",[s("p",[t._v("剪切板"),s("br"),t._v("\n即有复制、剪切、黏贴时触发的事件：")]),t._v(" "),s("ul",[s("li",[t._v("beforecopy：复制操作发生前触发，无法阻止 copy 事件。")]),t._v(" "),s("li",[t._v("copy：复制操作发生时触发。")]),t._v(" "),s("li",[t._v("beforecut：剪切操作发生前触发，无法阻止 cut 事件。")]),t._v(" "),s("li",[t._v("cut：剪切操作发生时触发。")]),t._v(" "),s("li",[t._v("beforepaste：粘贴操作发生前触发，无法阻止 paste 事件。")]),t._v(" "),s("li",[t._v("paste：粘贴操作发生时触发。")])])])]),t._v(" "),s("p",[t._v("还可以直接获取剪贴板对象 clipboardData，通过 getData(MIME)、setData(MIME,text:String) 和 clearData 设置剪贴板的内容。")]),t._v(" "),s("h3",{attrs:{id:"自动切换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动切换"}},[t._v("#")]),t._v(" 自动切换")]),t._v(" "),s("p",[t._v("在某些情况时，我们希望在输入足够长的文本后，自动切换表单控件。")]),t._v(" "),s("p",[t._v("在每个文本框输入到最大允许字符数时，自动把焦点切换到下一个文本框。")]),t._v(" "),s("h3",{attrs:{id:"表单约束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单约束"}},[t._v("#")]),t._v(" 表单约束")]),t._v(" "),s("p",[t._v("表单控件添加了属性使其更多约束，在某些约束不满足的情况下，无法提交表单。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("required\n表示必填，否则无法提交表单。")])]),t._v(" "),s("li",[s("p",[t._v("更多输入类型\n即 type 新增了 mail 和 url")])])]),t._v(" "),s("h3",{attrs:{id:"选择框编辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择框编辑"}},[t._v("#")]),t._v(" 选择框编辑")]),t._v(" "),s("p",[t._v("即 select 和 option 标签，拥有表单标签的属性和方法，额外还有自己的方法和属性：")]),t._v(" "),s("ul",[s("li",[t._v("add(newOpt,relOpt) 添加新的 option，relOpt 表示在参考选项，新选项插在 relOpt 之前")]),t._v(" "),s("li",[t._v("multiple 多选")]),t._v(" "),s("li",[t._v("options 选择表单的所有选项")]),t._v(" "),s("li",[t._v("remove(index) 移除某个 index")]),t._v(" "),s("li",[t._v("selectedIndex 选中 option 的索引，若无选中则为 -1，若是多选的，也只会返回选中的第一项的索引，修改时移除所有已选项。")]),t._v(" "),s("li",[t._v("size 显示几行，超过出现滚动条")]),t._v(" "),s("li",[t._v('type 属性可能是 "select-one" 或 "select-multiple"')])]),t._v(" "),s("p",[t._v("option 标签也有几个属性：")]),t._v(" "),s("ul",[s("li",[t._v("index 在众多 option 的排序")]),t._v(" "),s("li",[t._v("label 标签")]),t._v(" "),s("li",[t._v("selected 是否选中了当前选项，多选时不影响其他的选项")]),t._v(" "),s("li",[t._v("text 选项的文本。")]),t._v(" "),s("li",[t._v("value 选项的值")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" selectbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 选项文本")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" selectedOption "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" selectbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("selectbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectedIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取单项选择框的选项")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Selected index: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("selectedOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Selected text: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("selectedOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Selected value: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("selectedOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"添加选项框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加选项框"}},[t._v("#")]),t._v(" 添加选项框")]),t._v(" "),s("p",[t._v("通过 document 和构造 Option 函数的方式创建 option 标签。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" option "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" option "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'option'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\noption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\noption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"移除选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移除选项"}},[t._v("#")]),t._v(" 移除选项")]),t._v(" "),s("ul",[s("li",[t._v("removeChild")]),t._v(" "),s("li",[t._v("remove")]),t._v(" "),s("li",[t._v("selectbox.options[0] = null")])]),t._v(" "),s("h4",{attrs:{id:"移动和重新排列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动和重新排列"}},[t._v("#")]),t._v(" 移动和重新排列")]),t._v(" "),s("h3",{attrs:{id:"表单序列化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单序列化"}},[t._v("#")]),t._v(" 表单序列化")]),t._v(" "),s("p",[t._v("结合表单字段的 type 属性连同其 name 属性和 value 属性来进行序\n列化")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("serialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("form")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" parts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" optValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" field "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" form"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表单中的所有项")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'select-one'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'select-multiple'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有 name 属性")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" option "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selected"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasAttribute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若 option 有 value 属性则选择 value 否则是 text")]),t._v("\n                                optValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                                optValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("specified "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                            parts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("optValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字段集")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件输入")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'submit'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提交按钮")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reset'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重置按钮")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义按钮")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这些直接忽略")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'radio'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单选按钮")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'checkbox'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 复选框")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("checked"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不包含没有名字的表单字段")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    parts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" parts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"富文本编辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#富文本编辑"}},[t._v("#")]),t._v(" 富文本编辑")]),t._v(" "),s("p",[t._v("PS：富文本应该使用富文本编辑器的插件，本节只当了解。")]),t._v(" "),s("p",[t._v("插入 iframe 元素，在文档 onload 事件中，将 iframe 的 designMode 属性设为 'on'，就可以在页面进行输入了。")]),t._v(" "),s("p",[t._v("本质上是插入了一个完整的 html 文档，修改的是 body 元素。")]),t._v(" "),s("p",[t._v("designMode 的取值为 'on' 和 'off'，默认为 'off'。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("richedit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v(" \n window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"load"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n frames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"richedit"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("designMode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"设置-contenteditable-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-contenteditable-属性"}},[t._v("#")]),t._v(" 设置 contenteditable 属性")]),t._v(" "),s("p",[t._v('"true"表示开启，"false"表示关闭，"inherit"表示继承父元素的设置。')]),t._v(" "),s("p",[t._v("任何元素都可以设置。")]),t._v(" "),s("h4",{attrs:{id:"与富文本交互"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与富文本交互"}},[t._v("#")]),t._v(" 与富文本交互")]),t._v(" "),s("p",[t._v("即使用 JS 将富文本变得比较丰富，例如文本加粗，用户做不到。")]),t._v(" "),s("p",[t._v("常使用 document.execCommand()")]),t._v(" "),s("p",[t._v("参数为要执行的命令、表示浏览器是否为命令提供用户界面的布尔值、和执行命令必需的值。")]),t._v(" "),s("p",[t._v("第二个参数一般是为 false。")]),t._v(" "),s("h4",{attrs:{id:"富文本选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#富文本选择"}},[t._v("#")]),t._v(" 富文本选择")]),t._v(" "),s("p",[t._v("在 iframe 中调用 getSelection 方法，返回一个 Selection 对象，拥有许多属性。")]),t._v(" "),s("h4",{attrs:{id:"提交富文本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交富文本"}},[t._v("#")]),t._v(" 提交富文本")]),t._v(" "),s("p",[t._v("因为富文本和")])])}),[],!1,null,null,null);s.default=e.exports}}]);