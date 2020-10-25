function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1], {
  /***/
  "../../proyectoStencilJs/stencilkurso/dist/esm/foo-ter.entry.js":
  /*!*******************************************************************************************!*\
    !*** /Users/karinaheras/Desktop/proyectoStencilJs/stencilkurso/dist/esm/foo-ter.entry.js ***!
    \*******************************************************************************************/

  /*! exports provided: foo_ter */

  /***/
  function proyectoStencilJsStencilkursoDistEsmFooTerEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "foo_ter", function () {
      return FooTer;
    });
    /* harmony import */


    var _index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-c9ee93b5.js */
    "../../proyectoStencilJs/stencilkurso/dist/esm/index-c9ee93b5.js");

    var fooTerCss = "li{text-decoration:none;color:rgb(62, 63, 65);padding:7px;margin:10px}footer{-ms-flex:1 1 auto;flex:1 1 auto}";

    var FooTer = /*#__PURE__*/function () {
      function FooTer(hostRef) {
        _classCallCheck(this, FooTer);

        Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(FooTer, [{
        key: "render",
        value: function render() {
          return Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer", {
            "class": "pv4 ph3 ph5-m ph6-l mid-gray"
          }, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", {
            "class": "f6 dib ph2 link mid-gray dim"
          }, this.nombre), Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", {
            "class": "f6 dib ph2 link mid-gray dim"
          }, this.copia), Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", {
            "class": "f6 dib ph2 link mid-gray dim"
          }, this.derechos), Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", {
            "class": "f6 dib ph2 link mid-gray dim"
          }, this.privado)))));
        }
      }]);

      return FooTer;
    }();

    FooTer.style = fooTerCss;
    /***/
  }
}]);
//# sourceMappingURL=1-es5.js.map