webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/scene.js":
/*!*****************************!*\
  !*** ./components/scene.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_orbitcontrols__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three-orbitcontrols */ "./node_modules/three-orbitcontrols/OrbitControls.js");
/* harmony import */ var three_orbitcontrols__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(three_orbitcontrols__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var three_obj_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three-obj-loader */ "./node_modules/three-obj-loader/dist/index.js");
/* harmony import */ var three_obj_loader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(three_obj_loader__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/jeremiproulx/Desktop/DEV/NEXTJS/test1/components/scene.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


 // import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader';


three_obj_loader__WEBPACK_IMPORTED_MODULE_8__(three__WEBPACK_IMPORTED_MODULE_6__); // var loader = new THREE.ObjectLoader();
// loader.load(
// 	// resource URL
// 	"models/json/example.json",
// 	// onLoad callback
// 	// Here the loaded data is assumed to be an object
// 	function ( obj ) {
// 		// Add the loaded object to the scene
// 		scene.add( obj );
// 	},
// 	// onProgress callback
// 	function ( xhr ) {
// 		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
// 	},
// 	// onError callback
// 	function ( err ) {
// 		console.error( 'An error happened' );
// 	}
// );

var Scene =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Scene, _Component);

  function Scene(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Scene);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Scene).call(this, props));
    _this.threecanvas = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    _this.THREE = three__WEBPACK_IMPORTED_MODULE_6__;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Scene, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // window.THREE = THREE; // THREE.NRRDLoader expects THREE to be a global object
      // require('three/examples/js/loaders/TextureLoader');
      var scene = new this.THREE.Scene();
      var camera = new this.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      var renderer = new this.THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.threecanvas.current.appendChild(renderer.domElement);
      var geometry = new this.THREE.BoxGeometry(1, 1, 1);
      var cube;
      var object;
      var controls = new three_orbitcontrols__WEBPACK_IMPORTED_MODULE_7___default.a(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.enableZoom = false;
      var loader = new this.THREE.TextureLoader(); // let mtlLoader = new MTLLoader();

      var objLoader = new this.THREE.OBJLoader();
      objLoader.load('/male02.obj', function (obj) {
        object = obj;
        object.position.y = -95;
        scene.add(object);
        animate();
      }); // objLoader.setMaterials(materials)
      // objLoader.load('/hand.obj', (object) => {
      //     scene.add(object)
      // })
      // mtlLoader.load('/hand.mtl', (materials) => {
      // materials.preload()
      // objLoader.setMaterials(materials)
      // objLoader.load('/hand.obj', (object) => {
      //     scene.add(object)
      // })
      // })

      loader.load('/logo.png', function (texture) {
        // in this example we create the material when the texture is loaded
        var material = new three__WEBPACK_IMPORTED_MODULE_6__["MeshBasicMaterial"]({
          map: texture
        });
        cube = new three__WEBPACK_IMPORTED_MODULE_6__["Mesh"](geometry, material);
        scene.add(cube);
      }); // var loader = new THREE.ObjectLoader();
      // loader.load('/hand.obj',function ( object ) {
      //         scene.add( object );
      //     }
      // );

      camera.position.z = 5;

      var animate = function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        object.translateZ(-10);
        renderer.render(scene, camera);
      };
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        id: "three-container",
        ref: this.threecanvas,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      });
    }
  }]);

  return Scene;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Scene);

/***/ })

})
//# sourceMappingURL=_app.js.de519f2331599d61eecb.hot-update.js.map