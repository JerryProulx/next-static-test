webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/three.js":
/*!*****************************!*\
  !*** ./components/three.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thing */ "./components/thing.js");
var _jsxFileName = "/Users/proulxj/Desktop/Projects/next-static-test/components/three.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Three() {
  return __jsx(Canvas, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_thing__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Three);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next-page-transitions */ "./node_modules/next-page-transitions/lib/index.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");
/* harmony import */ var _components_three__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/three */ "./components/three.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-no-ssr */ "./node_modules/react-no-ssr/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_19__);








var _jsxFileName = "/Users/proulxj/Desktop/Projects/next-static-test/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;












var site = __webpack_require__(/*! ../data/site.json */ "./data/site.json");

var initState = __webpack_require__(/*! ../data/state.json */ "./data/state.json");

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp, _App);

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", initState);

    return _this;
  } // static async getInitialProps({ Component, router, ctx }) {
  //   let pageProps = {}
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }
  //   return { pageProps }
  // }


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "onExit",
    value: function onExit() {
      console.log('enter');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          router = _this$props.router;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-1891429417",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, site.title), __jsx("script", {
        src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
        integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
        crossOrigin: "anonymous",
        className: "jsx-1891429417",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), __jsx("script", {
        src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
        integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
        crossOrigin: "anonymous",
        className: "jsx-1891429417",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
        integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
        crossOrigin: "anonymous",
        className: "jsx-1891429417",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), __jsx("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
        integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
        crossOrigin: "anonymous",
        className: "jsx-1891429417",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx(react_no_ssr__WEBPACK_IMPORTED_MODULE_17___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_15__["Canvas"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(_components_three__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }))), __jsx(next_page_transitions__WEBPACK_IMPORTED_MODULE_14__["PageTransition"], {
        timeout: 500,
        classNames: "page-transition",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, this.state, {
        key: router.route,
        className: "jsx-1891429417" + " " + (this.state && this.state.className != null && this.state.className || pageProps && pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1891429417",
        __self: this
      }, ".page-transition-enter{opacity:0;}.page-transition-enter-active{opacity:1;-webkit-transition:opacity 300ms;transition:opacity 300ms;}.page-transition-exit{opacity:1;}.page-transition-exit-active{opacity:0;-webkit-transition:opacity 300ms;transition:opacity 300ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm91bHhqL0Rlc2t0b3AvUHJvamVjdHMvbmV4dC1zdGF0aWMtdGVzdC9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFMkIsQUFHdUIsQUFHQSxBQUlBLEFBR0EsVUFUWixBQUcyQixBQUkzQixBQUcyQiwwREFOM0IsQUFPQSIsImZpbGUiOiIvVXNlcnMvcHJvdWx4ai9EZXNrdG9wL1Byb2plY3RzL25leHQtc3RhdGljLXRlc3QvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcic7XG5pbXBvcnQgeyBQYWdlVHJhbnNpdGlvbiB9IGZyb20gJ25leHQtcGFnZS10cmFuc2l0aW9ucyc7XG5cbmltcG9ydCB7IENhbnZhcyB9IGZyb20gJ3JlYWN0LXRocmVlLWZpYmVyJ1xuaW1wb3J0IFRocmVlIGZyb20gJy4uL2NvbXBvbmVudHMvdGhyZWUnO1xuXG5pbXBvcnQgTm9TU1IgZnJvbSAncmVhY3Qtbm8tc3NyJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZXMuc2Nzc1wiXG5cbmNvbnN0IHNpdGUgPSByZXF1aXJlKCcuLi9kYXRhL3NpdGUuanNvbicpO1xuY29uc3QgaW5pdFN0YXRlID0gcmVxdWlyZSgnLi4vZGF0YS9zdGF0ZS5qc29uJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIC8vIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIHJvdXRlciwgY3R4IH0pIHtcbiAgLy8gICBsZXQgcGFnZVByb3BzID0ge31cblxuICAvLyAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gIC8vICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgLy8gICB9XG5cbiAgLy8gICByZXR1cm4geyBwYWdlUHJvcHMgfVxuICAvLyB9XG5cbiAgc3RhdGUgPSBpbml0U3RhdGU7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcblxuICB9XG5cbiAgb25FeGl0KCl7XG4gICAgY29uc29sZS5sb2coJ2VudGVyJylcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e3NpdGUudGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjQuMS5zbGltLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1KNnFhNDg0OWJsRTIrcG9UNFdueUtodjV2WkY1U3JQbzBpRWp3QnZLVTdpbUdGQVYwd3dqMXlZZm9SU0pvWituXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcG9wcGVyLmpzQDEuMTYuMC9kaXN0L3VtZC9wb3BwZXIubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVE2RTlSSHZiSXlaRkpvZnQrMm1KYkhhRVdsZGx2STlJT1l5NW4zelY5enpUdG1JM1Vrc2RRUlZ2b3hNZm9vQW9cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxuXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjQuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtVmtvbzh4NENHc08zK0hoeHY4VC9RNVBhWHRrS3R1NnVnNVRPZU5WNmdCaUZlV1BHRk45TXVoT2YyM1E5SWZqaFwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC40LjEvanMvYm9vdHN0cmFwLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC13ZlNERjJFNTBZMkQxdVVkajBPM3VNQkpuanVVRDRJaDdZd2FZZDFpcWZrdGowVW9kOEdDRXhsM09nOGlmd0I2XCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TmF2YmFyLz5cblxuICAgICAgICA8Tm9TU1I+XG4gICAgICAgIDxDYW52YXM+XG4gICAgICAgICAgPFRocmVlIC8+XG4gICAgICAgIDwvQ2FudmFzPlxuICAgICAgICA8L05vU1NSPlxuXG4gICAgICAgIDxQYWdlVHJhbnNpdGlvbiB0aW1lb3V0PXs1MDB9IGNsYXNzTmFtZXM9XCJwYWdlLXRyYW5zaXRpb25cIj5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IHsuLi50aGlzLnN0YXRlfSBrZXk9e3JvdXRlci5yb3V0ZX0vPlxuICAgICAgICA8L1BhZ2VUcmFuc2l0aW9uPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1hY3RpdmUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQtYWN0aXZlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Rm9vdGVyLz5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/proulxj/Desktop/Projects/next-static-test/pages/_app.js */"), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_11___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.f0998393a28ed124ed24.hot-update.js.map