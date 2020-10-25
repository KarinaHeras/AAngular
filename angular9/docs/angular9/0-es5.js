function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
  /***/
  "../../proyectoStencilJs/stencilkurso/dist/esm/button-post.entry.js":
  /*!***********************************************************************************************!*\
    !*** /Users/karinaheras/Desktop/proyectoStencilJs/stencilkurso/dist/esm/button-post.entry.js ***!
    \***********************************************************************************************/

  /*! exports provided: button_post */

  /***/
  function proyectoStencilJsStencilkursoDistEsmButtonPostEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "button_post", function () {
      return ButtonPost;
    });
    /* harmony import */


    var _index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-c9ee93b5.js */
    "../../proyectoStencilJs/stencilkurso/dist/esm/index-c9ee93b5.js");

    var buttonPostCss = "";

    var ButtonPost = /*#__PURE__*/function () {
      function ButtonPost(hostRef) {
        _classCallCheck(this, ButtonPost);

        Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.boton = Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "boton", 7);
      }

      _createClass(ButtonPost, [{
        key: "llamarBoton",
        value: function llamarBoton() {
          this.boton.emit();
        }
      }, {
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", null, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            "class": "btn",
            onClick: function onClick() {
              return _this.llamarBoton();
            }
          }));
        }
      }]);

      return ButtonPost;
    }();

    ButtonPost.style = buttonPostCss;
    /***/
  }
}]);
//# sourceMappingURL=0-es5.js.map