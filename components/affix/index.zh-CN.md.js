webpackJsonp([198,202],{

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "将页面元素钉在可视范围。"], ["h2", "何时使用"], ["p", "当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。"], ["p", "页面可视范围过小时，慎用此功能以免遮挡页面内容。"]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "固钉",
	    "type": "Navigation",
	    "title": "Affix",
	    "filename": "components/affix/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["table", ["thead", ["tr", ["th", "成员"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "offsetTop"], ["td", "距离窗口顶部达到指定偏移量后触发"], ["td", "Number"], ["td"]], ["tr", ["td", "offsetBottom"], ["td", "距离窗口底部达到指定偏移量后触发"], ["td", "Number"], ["td"]], ["tr", ["td", "target"], ["td", "设置 ", ["code", "Affix"], " 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数"], ["td", "Function"], ["td", "() => window"]], ["tr", ["td", "onChange"], ["td", "固定状态改变时触发的回调函数"], ["td", "Function(affixed)"], ["td", "无"]]]], ["p", ["strong", "注意："], ["code", "Affix"], " 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 ", ["code", "Affix"], " 为绝对定位："], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Affix</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> position<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'absolute'</span><span class=\"token punctuation\" >,</span> top<span class=\"token punctuation\" >:</span> y<span class=\"token punctuation\" >,</span> left<span class=\"token punctuation\" >:</span> x<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Affix</span><span class=\"token punctuation\" >></span></span>"
	  }, ["code", "<Affix style={{ position: 'absolute', top: y, left: x}}>\n  ...\n</Affix>"]]]
	};

/***/ }

});