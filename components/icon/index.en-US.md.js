webpackJsonp([163,202],{

/***/ 769:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _IconSet = __webpack_require__(231);

	var _IconSet2 = _interopRequireDefault(_IconSet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", ["p", "Meaningful vector graphics."], ["h2", "Icons naming convention"], ["p", "We provide semantic name for every icon, and naming rules are as follows:"], ["ul", ["li", ["p", "Scanning line icon has the similar name with its solid one，but it's distinguished by ", ["code", "-o"], ", for example, ", ["code", "question-circle"], "(a full circle) and ", ["code", "question-circle-o"], "(an empty circle);"]], ["li", ["p", "Naming sequence：", ["code", "[icon's name]-[shape, optional]-[Scanning line or not]-[direction, optional]"], "."]]], ["h2", "How To Use"], ["p", "Use tag ", ["icon"], " to create an icon and set its type in the type prop, for example:"], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>link<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>"
	  }, ["code", "<Icon type=\"link\" />"]], ["p", "Finally, it will be rendered as follow:"], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>i</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>anticon anticon-${type}<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>i</span><span class=\"token punctuation\" >></span></span>"
	  }, ["code", "<i class=\"anticon anticon-${type}\"></i>"]], ["h2", "Local deployment of icons font"], ["p", "By default, icon components uses ", ["a", {
	    "title": null,
	    "href": "http://iconfont.cn"
	  }, "iconfont.cn"], ", publicly available repository of a huge set of icons. In case you need to use a locally deployed version of the icon font, you can refer to ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont"
	  }, "this example"], "。"], ["h2", "List of icons"], ["blockquote", ["p", "Click the icon and copy the code。"]], ["h3", "Directional Icons"], function jsonmlReactLoader() {
	    return _react2.default.createElement(_IconSet2.default, { className: 'icons', catigory: 'direction' });
	  }, ["h3", "Suggested Icons"], function jsonmlReactLoader() {
	    return _react2.default.createElement(_IconSet2.default, { className: 'icons', catigory: 'suggestion' });
	  }, ["h3", "Other Icons"], function jsonmlReactLoader() {
	    return _react2.default.createElement(_IconSet2.default, { className: 'icons', catigory: 'other' });
	  }, ["h2", "Props"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "type"], ["td", "Type of ant design icons"], ["td", "string"], ["td", "-"]], ["tr", ["td", "spin"], ["td", "Rotate icon with animation"], ["td", "boolean"], ["td", "false"]]]], ["style", "\n.markdown .icons {\n  width: 100%;\n}\nul.anticons-list {\n  margin: 40px 0;\n  list-style: none;\n  overflow: hidden;\n}\nul.anticons-list li {\n  float: left;\n  width: 16.66%;\n  text-align: center;\n  list-style: none;\n  cursor: pointer;\n  height: 100px;\n  color: #555;\n  transition: all 0.2s ease;\n  position: relative;\n  margin: 3px 0;\n  border-radius: 4px;\n  background-color: #fff;\n  overflow: hidden;\n  padding: 10px 0 0 0;\n}\nul.anticons-list li:hover {\n  background-color: #eaf8fe;\n}\nul.anticons-list li.copied:hover {\n  color: rgba(255,255,255,0.2);\n}\nul.anticons-list li:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  content: \"Copied!\";\n  text-align: center;\n  line-height: 110px;\n  color: #108ee9;\n  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  opacity: 0;\n}\nul.anticons-list li.copied:after {\n  opacity: 1;\n  top: -10px;\n}\n.anticon {\n  font-size: 24px;\n  margin: 12px 0 16px;\n  transition: all .3s;\n}\nul.anticons-list li:hover .anticon {\n  transform: scale(1.4);\n}\n.anticon-class {\n  display: block;\n  text-align: center;\n  transform: scale(0.83);\n  font-family: \"Lucida Console\", Consolas;\n  white-space: nowrap;\n}\n"]],
	  "meta": {
	    "category": "Components",
	    "type": "General",
	    "title": "Icon",
	    "toc": false,
	    "filename": "components/icon/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#Icons-naming-convention"
	  }, "Icons naming convention"]], ["li", ["a", {
	    "href": "#How-To-Use"
	  }, "How To Use"]], ["li", ["a", {
	    "href": "#Local-deployment-of-icons-font"
	  }, "Local deployment of icons font"]], ["li", ["a", {
	    "href": "#List-of-icons"
	  }, "List of icons"]], ["li", ["a", {
	    "href": "#Props"
	  }, "Props"]]]
	};

/***/ }

});