webpackJsonp([56,202],{

/***/ 1070:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h2", "查询模式"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "确定类目示例",
	    "description": "用户所查询的关键词，只会在『话题』、『问题』、『文章』这 3 种类目中出现。",
	    "src": "https://os.alipayobjects.com/rmsportal/fgQfkNakHrUiAun.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "不确定类目示例",
	    "description": "用户所查询的关键词，其所属的类目数量不确定，可能 4 个，可能 5 个，可能更多。",
	    "src": "https://os.alipayobjects.com/rmsportal/hUfCsXwnOsVlskl.png"
	  }]], ["p", "自动完成：用户输入时，下拉列表会随着输入的关键词显示匹配项。\n根据查询结果分类的多少，可以分为『确定类目』、『不确定类目』两种类型。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "实时搜索示例",
	    "description": "用户输入一个搜索值，系统随即显示查询结果。",
	    "src": "https://os.alipayobjects.com/rmsportal/OyJCVmOigyXKWCf.png"
	  }]], ["p", "实时搜索：随着用户输入，实时显示搜索结果。『自动完成』、『实时建议』的近亲。"], ["p", ["br"]], ["p", "微调搜索：随着用户调整搜索条件，实时调整搜索结构。具体可见：", ["a", {
	    "title": null,
	    "href": "/docs/pattern/advanced-search"
	  }, "『模式／高级搜索』"], "。"], ["p", ["br"]], ["hr"], ["h2", "反馈模式"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "实时预览示例",
	    "description": "根据用户的输入，提供关于密码强度和有效性的实时反馈。",
	    "src": "https://os.alipayobjects.com/rmsportal/jecYhRgfbHleGDJ.png"
	  }]], ["p", "实时预览：在用户提交输入之前，让他先行了解系统将如何处理他的输入。"], ["blockquote", ["p", "注：解决错误最好的办法，就是不让错误发生。而『实时预览』就是有效避免错误的好设计。"]], ["p", ["br"]], ["p", "渐进式展现：在必要的时候提供必要的提示，而不是一股脑儿显示所有提示，导致界面混乱，增加认知负担。案例详见", ["a", {
	    "title": null,
	    "href": "/docs/spec/stay#流程处理"
	  }, "『足不出户／渐进式展现』"], "。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "按钮加载示例",
	    "src": "https://os.alipayobjects.com/rmsportal/FBAZGqfeUnDlUtw.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "表格加载示例",
	    "src": "https://os.alipayobjects.com/rmsportal/FPXsINbTgsuSStI.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "富列表加载示例",
	    "src": "https://os.alipayobjects.com/rmsportal/WJqeUHzthTXaHnW.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "页面加载示例",
	    "src": "https://os.alipayobjects.com/rmsportal/qPWjexSmFfCiLVJ.png"
	  }]], ["p", "进度指示：当一个操作需要一定时间完成时，就需要即时告知进度，保持与用户的沟通。\n常见的进度指示：『按钮加载』、『表格加载』、『富列表加载』、『页面加载』。可根据操作的量级和重要性，展示不同类型的进度指示。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "点击刷新示例",
	    "src": "https://os.alipayobjects.com/rmsportal/DdmWqoqIFSCSAvq.png"
	  }]], ["p", "点击刷新：告知用户有新内容，并提供按钮等工具帮助用户查看新内容。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "定时示例",
	    "description": "新增的列表项『高亮』，持续几秒后恢复正常。",
	    "src": "https://os.alipayobjects.com/rmsportal/guiuShsfpJzxZQx.png"
	  }]], ["p", "定时刷新：无需用户介入，定时展示新内容。"]],
	  "meta": {
	    "category": "十大原则",
	    "order": 10,
	    "title": "即时反应",
	    "filename": "docs/spec/reaction.zh-CN.md"
	  },
	  "description": ["section", ["p", "『提供邀请』的强大体现在", ["code", "交互之前"], "给出反馈，解决易发现性问题；『巧用过渡』的有用体现在它能够在", ["code", "交互期间"], "为用户提供视觉反馈；『即时反应』的重要性体现在", ["code", "交互之后"], "立即给出反馈。"], ["p", "就像『牛顿第三定律』所描述作用力和反作用一样，用户进行了操作或者内部数据发生了变化，系统就应该立即有一个对应的反馈，同时输入量级越大、重要性越高，那么反馈量级越大、重要性越高。"], ["p", "虽然反馈太多（准确的说，错误的反馈太多）是一个问题，但是反馈太少甚至没有反馈的系统，则让人感觉迟钝和笨拙，用户体验更差。"], ["blockquote", ["p", ["strong", " 牛顿第三定律 "], " ：当两个物体互相作用时，彼此施加于对方的力，其大小相等、方向相反。——摘自《维基百科》"]]],
	  "toc": ["ul", ["li", ["a", {
	    "href": "#查询模式"
	  }, "查询模式"]], ["li", ["a", {
	    "href": "#反馈模式"
	  }, "反馈模式"]]]
	};

/***/ }

});