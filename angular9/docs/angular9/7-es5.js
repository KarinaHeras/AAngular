function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7], {
  /***/
  "../../proyectoStencilJs/stencilkurso/dist/esm/post-detail.entry.js":
  /*!***********************************************************************************************!*\
    !*** /Users/karinaheras/Desktop/proyectoStencilJs/stencilkurso/dist/esm/post-detail.entry.js ***!
    \***********************************************************************************************/

  /*! exports provided: post_detail */

  /***/
  function proyectoStencilJsStencilkursoDistEsmPostDetailEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "post_detail", function () {
      return PostDetail;
    });
    /* harmony import */


    var _index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-c9ee93b5.js */
    "../../proyectoStencilJs/stencilkurso/dist/esm/index-c9ee93b5.js");

    var postDetailCss = ":host{display:block}";

    var PostDetail = /*#__PURE__*/function () {
      function PostDetail(hostRef) {
        _classCallCheck(this, PostDetail);

        Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(PostDetail, [{
        key: "render",
        value: function render() {
          return Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "detail-post"
          }, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", {
            "class": "detail-post-id"
          }, this._id), Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h4", {
            "class": "detail-post-Title"
          }, this.titulo), Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", {
            "class": "post-cometario"
          }, " - ", this.comentario), Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", {
            "class": "detail-post-Author"
          }, this.nickname)));
        }
      }]);

      return PostDetail;
    }();

    PostDetail.style = postDetailCss;
    /***/
  }
}]);
//# sourceMappingURL=7-es5.js.map