function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
  /***/
  "../../proyectoStencilJs/stencilkurso/dist/esm/gk-holy.entry.js":
  /*!*******************************************************************************************!*\
    !*** /Users/karinaheras/Desktop/proyectoStencilJs/stencilkurso/dist/esm/gk-holy.entry.js ***!
    \*******************************************************************************************/

  /*! exports provided: gk_holy */

  /***/
  function proyectoStencilJsStencilkursoDistEsmGkHolyEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "gk_holy", function () {
      return GkHoly;
    });
    /* harmony import */


    var _index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-c9ee93b5.js */
    "../../proyectoStencilJs/stencilkurso/dist/esm/index-c9ee93b5.js");

    var gkHolyCss = "main{color:gainsboro;margin:0 auto;min-height:100vh;display:grid;grid-template-columns:100%;grid-template-rows:100px 50px 1fr 100px 200px;grid-template-areas:\"my-header my-header my-header\"\n  \"my-nav my-nav my-nav\"\n  \"my-section my-section my-section\"\n  \"my-aside my-aside my-aside\"\n  \"my-footer my-footer my-footer\"}header{grid-area:my-header;background-color:blueviolet}nav{grid-area:my-nav;background-color:cornflowerblue}aside{grid-area:my-aside;background-color:darkmagenta}section{grid-area:my-section;background-color:indigo}footer{grid-area:my-footer;background-color:darkorchid}@media (min-width: 600px) and (max-width: 1000px){main{grid-template-columns:200px 1fr 200px;grid-template-rows:150px 100px 1fr 100px;grid-template-areas:\"my-header my-header my-header\"\n    \"my-nav my-nav my-nav\"\n    \"my-aside my-section my-section\"\n    \"my-footer my-footer my-footer\"}}@media (min-width: 1001px){main{grid-template-columns:200px 1fr 200px;grid-template-rows:200px 1fr 100px;grid-template-areas:\"my-header my-header my-header\"\n    \"my-nav my-section my-aside\"\n    \"my-footer my-footer my-footer\"}}";

    var GkHoly = /*#__PURE__*/function () {
      function GkHoly(hostRef) {
        _classCallCheck(this, GkHoly);

        Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(GkHoly, [{
        key: "render",
        value: function render() {
          return Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("main", null, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("header", null, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "header"
          })), Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", null, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "nav"
          })), Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", null, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "section"
          })), Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("aside", null, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "aside"
          })), Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer", null, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "footer"
          })));
        }
      }]);

      return GkHoly;
    }();

    GkHoly.style = gkHolyCss;
    /***/
  }
}]);
//# sourceMappingURL=2-es5.js.map