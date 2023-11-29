/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  background: #fffff8;\\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif; }\\n\\n#app {\\n  display: grid;\\n  grid-auto-rows: minmax(150px, auto);\\n  /* grid-template-columns:  */\\n  height: 100vh;\\n  background: #f23557;\\n  color: #f0d43a;\\n  justify-content: center;\\n  grid-gap: 1em;\\n  font-size: 20px;\\n  font-family: 'Oswald', sans-serif; }\\n\\n.entry {\\n  background: rgba(59, 74, 107, 0.4); }\\n\\n#image {\\n  width: 100px; }\\n\\n.title {\\n  font-size: 30px; }\\n\\n/*  Basic Styling To Override Default For Basic HTML Elements */\\nlabel {\\n  display: block;\\n  font-size: 27px; }\\n\\ninput {\\n  display: block;\\n  height: 60px;\\n  width: 220px;\\n  background: #22b2da;\\n  color: #f0d43a;\\n  font-size: 20px;\\n  font-family: 'Oswald', sans-serif;\\n  border: none; }\\n\\nbutton {\\n  width: 200px;\\n  height: 100px;\\n  background: #3b4a6b;\\n  color: #f0d43a;\\n  font-size: 20px;\\n  font-family: 'Oswald', sans-serif;\\n  border: none;\\n  box-shadow: 2px 4px 5px #444;\\n  position: absolute;\\n  top: 80%;\\n  left: 87%;\\n  transform: translate(-50%, -50%); }\\n\\nh1 {\\n  font-size: 36px; }\\n\\ntextarea {\\n  background: #22b2da;\\n  color: #f0d43a;\\n  font-size: 20px;\\n  font-family: 'Oswald', sans-serif; }\\n\\n/* Reset style for HTML element on active to have no border*/\\ninput:focus,\\nselect:focus,\\ntextarea:focus,\\nbutton:focus {\\n  outline: none; }\\n\\n/* Style for Placeholder Text*/\\n::placeholder {\\n  /* Firefox, Chrome, Opera */\\n  color: #f0d43a;\\n  font-family: 'Oswald', sans-serif; }\\n\\n:-ms-input-placeholder {\\n  /* Internet Explorer 10-11 */\\n  color: #f0d43a;\\n  font-family: 'Oswald', sans-serif; }\\n\\n::-ms-input-placeholder {\\n  /* Microsoft Edge */\\n  color: #f0d43a;\\n  font-family: 'Oswald', sans-serif; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/client/client.js":
/*!******************************!*\
  !*** ./src/client/client.js ***!
  \******************************/
/*! exports provided: getGeonames, getWeatherBit, getPix, postData, updateUI, performAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/js/app.js */ \"./src/client/js/app.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getGeonames\", function() { return _client_js_app_js__WEBPACK_IMPORTED_MODULE_0__[\"getGeonames\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getWeatherBit\", function() { return _client_js_app_js__WEBPACK_IMPORTED_MODULE_0__[\"getWeatherBit\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getPix\", function() { return _client_js_app_js__WEBPACK_IMPORTED_MODULE_0__[\"getPix\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"postData\", function() { return _client_js_app_js__WEBPACK_IMPORTED_MODULE_0__[\"postData\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"updateUI\", function() { return _client_js_app_js__WEBPACK_IMPORTED_MODULE_0__[\"updateUI\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"performAction\", function() { return _client_js_app_js__WEBPACK_IMPORTED_MODULE_0__[\"performAction\"]; });\n\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/client/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_service_worker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/service-worker.js */ \"./src/client/js/service-worker.js\");\n/* harmony import */ var _js_service_worker_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_service_worker_js__WEBPACK_IMPORTED_MODULE_2__);\n//client.js\n\n\n\n\n\n\n\n\n\nalert (\"client.js exists\");\n\n\n\n//# sourceURL=webpack:///./src/client/client.js?");

/***/ }),

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/*! exports provided: getGeonames, getWeatherBit, getPix, postData, updateUI, performAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGeonames\", function() { return getGeonames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeatherBit\", function() { return getWeatherBit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPix\", function() { return getPix; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postData\", function() { return postData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateUI\", function() { return updateUI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"performAction\", function() { return performAction; });\n/* harmony import */ var _eventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListener */ \"./src/client/js/eventListener.js\");\n//app.js\nif ('serviceWorker' in navigator) {\n\twindow.addEventListener('load', () => {\n\t  navigator.serviceWorker.register('service-worker.js')\n\t\t.then(registration => {\n\t\t  console.log('Service Worker registered:', registration);\n\t\t})\n\t\t.catch(error => {\n\t\t  console.log('Service Worker registration failed:', error);\n\t\t});\n\t});\n  }\n  \n//import { attachEventListeners } from './eventListener.js';\n\n/* Global Variables */\nlet geoapiKey = 'nadiasheikh396';\nlet weatherBitAPIKey = 'bcdf37b0236148beaf77a198ee3e7137';\nlet pixApiKey = '40738165-7810322547d1838e4eb2bf383';\n\n// Base URL for the OpenWeatherMap API\n\nlet geoBaseURL = 'http://api.geonames.org/searchJSON';\nlet weatherBitBaseURL = 'https://api.weatherbit.io/v2.0/';\nlet pixBaseURL = 'https://pixabay.com/api/';\n\nconst url = 'http://localhost:3000/data';\nlet maxRows = 1; \n\n\n//listener for the element with the id: generate, with a callback function to execute when it is clicked.\ndocument.getElementById('generate').addEventListener('click', performAction);\n\n\n\nconst getGeonames = async (geoBaseURL, city, key) => {\n\tconst res = await fetch(`${geoBaseURL}?q=${city}&maxRows=1&username=${key}`);\n\ttry {\n\t\tconst data = await res.json();\n\t\tconst latitude = data.geonames[0].lat;\n\t\tconst longitude = data.geonames[0].lng;\n\t\tconst country = data.geonames[0].countryName;\n\n\t\tconst geonamesData = {\n\t\t\tlatitude: latitude,\n\t\t\tlongitude: longitude,\n\t\t\tcountry: country\n\t\t};\n\t\t//console.log(geonamesData);\n\t\treturn geonamesData;\n\t} catch (error) {\n\t\tconsole.log(\"error\", error);\n\t\t// appropriately handle the error\n\t}\n};\n\n\nconst getWeatherBit = async (weatherBitBaseURL, latitude, longitude, apiKey) => {\n\n    // Format the date to YYYY-MM-DD\n\tconst currentDate = new Date();\n\tconst formattedDate = currentDate.toISOString().split('T')[0]; // Format the date to YYYY-MM-DD\n\n\t// Construct the URL for the API request\n\tconst forecastWeatherURL = `${weatherBitBaseURL}forecast/daily?lat=${latitude}&lon=${longitude}&key=${apiKey}&start_date=${formattedDate}&end_date=${formattedDate}`;\n\n\ttry {\n\t\t// Make the API request\n\t\tconst response = await fetch(forecastWeatherURL);\n\n\t\t// Parse the response as JSON\n\t\tconst data = await response.json();\n\n\t\t// Extract the relevant weather information\n\t\tconst temperature = data.data[0].temp;\n\t\tconst description = data.data[0].weather.description;\n\n\n\t\tconst weatherbitData = {\n\t\t\ttemperature: temperature,\n\t\t\tdescription: description\n\t\t};\n\t\tconsole.log(weatherbitData);\n\t\treturn weatherbitData;\n\n\t} catch (error) {\n\t\tconsole.log('Error:', error);\n\t\t// Handle any errors that occur during the API request\n\t\tthrow new Error('Failed to fetch weather data from Weatherbit API');\n\t}\n};\n\n\nconst getPix = async (pixBaseURL,searchQuery,maxRows, pixApiKey) => {\n\tconst res = await fetch(`${pixBaseURL}?q=${searchQuery}&maxRows=${maxRows}&key=${pixApiKey}`);\n   try {\n\t\tconst data = await res.json();\n\t\tconst imageURL = data.hits[0].webformatURL;\n\t\tconsole.log('Image URL:', imageURL);\n\t\treturn imageURL;\n\t} catch (error) {\n\t\tthrow new Error('Failed to fetch image data from Pixabay API');\n\t\t// appropriately handle the error\n\t}\n};\n\n\n\n// Helper function to format the date to YYYY-MM-DD\nconst formatDate = (date) => {\n\tconst year = date.getFullYear();\n\tconst month = String(date.getMonth() + 1).padStart(2, '0');\n\tconst day = String(date.getDate()).padStart(2, '0');\n\n\treturn `${year}-${month}-${day}`;\n};\n\nconst postData = async (url = '', data = {}) => {\n\n\tconst response = await fetch(\"http://localhost:3000/data\", {\n\t\tmethod: 'POST',\n\t\tcredentials: 'same-origin',\n\t\theaders: {\n\t\t\t'Content-Type': 'application/json',\n\t\t},\n\t\tbody: JSON.stringify(data),\n\t});\n\n\ttry {\n\t\tconsole.log(response)\n\t\tconst newData = await response.json();\n\t\tconsole.log(newData);\n\t\treturn newData;\n\t} catch (error) {\n\t\tconsole.log(\"error\", error);\n\t}\n}\n\n\nconst updateUI = async () => {\n\tconst request = await fetch('/data');\n\ttry {\n\t\tconst allData = await request.json();\n\t\tconsole.log(\"NADAI\");\n\t\tconsole.log(allData);\n\t\n\t\tdocument.getElementById('latitude').innerHTML = \"Latitude: \" + allData.latitude;\n\t\tdocument.getElementById('longitude').innerHTML = \"Longitude: \" + allData.longitude;\n\t\tdocument.getElementById('country').innerHTML = \"Country: \" + allData.country;\n\t\tdocument.getElementById('temperature').innerHTML = \"Celsius Temperature: \" + allData.temperature;\n\t\tdocument.getElementById('description').innerHTML = \"Weather Description: \" + allData.description;\n\t\tdocument.getElementById('image').innerHTML = \"City Image: \" + allData.imageURL;\n\n\t\n\t} catch (error) {\n\t\tconsole.log(\"error\", error);\n\t\t// Handle any errors\n\t}\n};\n\n\n//callback function to call async GET request with the parameters\n\n\n\n\nfunction performAction(e) {\n\tObject(_eventListener__WEBPACK_IMPORTED_MODULE_0__[\"attachEventListeners\"])();\n\n\tconst newCity = document.getElementById('city').value;\n\tlet resultsData = {};\n\n\tgetGeonames(geoBaseURL, newCity, geoapiKey)\n\t\t.then(geonamesData => {\n\t\t\tresultsData[\"latitude\"] = geonamesData.latitude;\n\t\t\tresultsData[\"longitude\"] = geonamesData.longitude;\n\t\t\tresultsData[\"country\"] = geonamesData.country;\n\n\t\t\treturn geonamesData; // Return geonamesData to the next .then() block\n\t\t})\n\t\t.then(geonamesData => {\n\t\t\t// Call getWeatherBit function with the required parameters\n\t\t\treturn getWeatherBit(weatherBitBaseURL, geonamesData.latitude, geonamesData.longitude, weatherBitAPIKey);\n\t\t\t\n\t\t})\n\t\t.then(weatherbitData => {\n\t\t\tresultsData[\"temperature\"] = weatherbitData.temperature;\n\t\t\tresultsData[\"description\"] = weatherbitData.description;\n\t\t\t\n\t\t\treturn getPix(pixBaseURL, newCity, maxRows, pixApiKey);\n\t\t  })\n\t\t.then(imageURL => {\n\t\t\tresultsData[\"imageURL\"] = imageURL;\n\t\t\t\n\t\t\t// Do something with the imageURL, such as displaying the image on the UI\n\t\t\tconsole.log('Image URL:', imageURL);\n\t\t\tconsole.log(\"printing results data\");\n\t\t\tconsole.log(resultsData);\n\t\t\tconst imageElement = document.getElementById('image');\n\t\t\timageElement.src = imageURL;\n\t\t\tpostData('/data', {\n\t\t\t\tlatitude: resultsData.latitude,\n\t\t\t\tlongitude: resultsData.longitude,\n\t\t\t\tcountry: resultsData.country,\n\t\t\t\ttemperature: resultsData.temperature,\n\t\t\t\tdescription: resultsData.description,\n\t\t\t\timageURL: resultsData.imageURL\n\t\t\t});\n\t\t  })\n\t\t// .then(updateUI)\n\t\t.then(() => {\n\t\t\t// Calculate remaining days and update UI\n\t\t\tconst tripDateInput = document.getElementById('tripDate');\n\t\t\tconst tripDate = tripDateInput.value;\n\n\t\t\tconst currentDate = new Date();\n\t\t\tconst selectedDate = new Date(tripDate);\n\t\t\tconst timeDifference = selectedDate.getTime() - currentDate.getTime();\n\t\t\tconst remainingDays = Math.ceil(timeDifference / (1000  *60*  60 * 24));\n\n\t\t\tconst countdownElement = document.getElementById('remainingDays');\n\t\t\tcountdownElement.textContent = `Your trip is in ${remainingDays} days!`;\n\t\t\t\n\t\t\tupdateUI();\n\t\t})\n\t\t\t\n\t\t.catch(error => {\n\t\t\tconsole.log(\"error\", error);\n\t\t});\n}\n\n\n\n\n//# sourceURL=webpack:///./src/client/js/app.js?");

/***/ }),

/***/ "./src/client/js/eventListener.js":
/*!****************************************!*\
  !*** ./src/client/js/eventListener.js ***!
  \****************************************/
/*! exports provided: attachEventListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"attachEventListeners\", function() { return attachEventListeners; });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/client/js/app.js\");\n// // eventListener.js\n\n\n\nfunction attachEventListeners() {\n    document.getElementById('generate').addEventListener('click', _app__WEBPACK_IMPORTED_MODULE_0__[\"performAction\"]);\n  }\n\n//# sourceURL=webpack:///./src/client/js/eventListener.js?");

/***/ }),

/***/ "./src/client/js/service-worker.js":
/*!*****************************************!*\
  !*** ./src/client/js/service-worker.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("self.addEventListener('install', event => {\n    event.waitUntil(\n      caches.open('my-cache').then(cache => {\n        return cache.addAll([\n          '/',\n          '/index.html',\n          '/bundle.js',\n          // Add other files and assets you want to cache\n        ]);\n      })\n    );\n  });\n  \n  self.addEventListener('fetch', event => {\n    event.respondWith(\n      caches.match(event.request).then(response => {\n        return response || fetch(event.request);\n      })\n    );\n  });\n\n//# sourceURL=webpack:///./src/client/js/service-worker.js?");

/***/ }),

/***/ "./src/client/styles/style.scss":
/*!**************************************!*\
  !*** ./src/client/styles/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/client/styles/style.scss?");

/***/ })

/******/ });