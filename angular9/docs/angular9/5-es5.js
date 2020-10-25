function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5], {
  /***/
  "../../proyectoStencilJs/stencilkurso/dist/esm/my-component.entry.js":
  /*!************************************************************************************************!*\
    !*** /Users/karinaheras/Desktop/proyectoStencilJs/stencilkurso/dist/esm/my-component.entry.js ***!
    \************************************************************************************************/

  /*! exports provided: my_component */

  /***/
  function proyectoStencilJsStencilkursoDistEsmMyComponentEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "my_component", function () {
      return MyComponent;
    });
    /* harmony import */


    var _index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-c9ee93b5.js */
    "../../proyectoStencilJs/stencilkurso/dist/esm/index-c9ee93b5.js");

    function format(first, middle, last) {
      return (first || '') + (middle ? " ".concat(middle) : '') + (last ? " ".concat(last) : '');
    }

    var myComponentCss = ":host{display:block}";

    var MyComponent = /*#__PURE__*/function () {
      function MyComponent(hostRef) {
        _classCallCheck(this, MyComponent);

        Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(MyComponent, [{
        key: "getText",
        value: function getText() {
          return format(this.first, this.middle, this.last);
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Hello, World! I'm ", this.getText());
        }
      }]);

      return MyComponent;
    }();

    MyComponent.style = myComponentCss;
    /***/
  }
}]);
//# sourceMappingURL=5-es5.js.map