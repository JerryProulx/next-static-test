webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/thing.js":
/*!*****************************!*\
  !*** ./components/thing.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");
var _jsxFileName = "/Users/proulxj/Desktop/Projects/next-static-test/components/thing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Thing() {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["useFrame"])(function () {
    return ref.current.rotation.x = ref.current.rotation.y += 0.01;
  });
  return __jsx("mesh", {
    ref: ref,
    onClick: function onClick(e) {
      return console.log('click');
    },
    onPointerOver: function onPointerOver(e) {
      return console.log('hover');
    },
    onPointerOut: function onPointerOut(e) {
      return console.log('unhover');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("boxBufferGeometry", {
    attach: "geometry",
    args: [1, 1, 1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("meshNormalMaterial", {
    attach: "material",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Thing);

/***/ })

})
//# sourceMappingURL=_app.js.dd07285014f52cfc9a4c.hot-update.js.map