function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6], {
  /***/
  "../../proyectoStencilJs/stencilkurso/dist/esm/post-card.entry.js":
  /*!*********************************************************************************************!*\
    !*** /Users/karinaheras/Desktop/proyectoStencilJs/stencilkurso/dist/esm/post-card.entry.js ***!
    \*********************************************************************************************/

  /*! exports provided: post_card */

  /***/
  function proyectoStencilJsStencilkursoDistEsmPostCardEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "post_card", function () {
      return PostCard;
    });
    /* harmony import */


    var _index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-c9ee93b5.js */
    "../../proyectoStencilJs/stencilkurso/dist/esm/index-c9ee93b5.js");

    var postCardCss = "\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  margin: 0;\n  font: 16px / 1.414 Verdana, Arial, sans-serif;\n}\n\na {\n  $color: #212121;\n  text-decoration: none;\n  color: $color;\n  -webkit-transition: color .25s;\n  transition: color .25s;\n\n  &:focus,\n  &:hover {\n    color: lighten($color, 25%);\n  }\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  display: -ms-flexbox;\n  display: flex;\n  list-style-type: none;\n}\n\n/* //- Set the grid layout -// */\n.grid {\n  display: grid;\n  grid-template-areas: 'header'  'main' ;\n  grid-template-columns: 1fr;\n  grid-template-rows: minmax(-webkit-min-content, -webkit-max-content) auto minmax(-webkit-min-content, -webkit-max-content);\n  grid-template-rows: minmax(min-content, max-content) auto minmax(min-content, max-content);\n\n  margin-right: auto;\n  margin-left: auto;\n  max-width: remy(1170px);\n  min-height: 100vh;\n\n  @media screen and (min-width: 768px) {\n    grid-template-areas: 'header header' 'main' 'footer footer';\n    grid-template-columns: 1fr 4fr;\n  }\n}\n\n/* //- Define template areas -// */\n\n\nmain {\n  grid-area: main;\n}\n\n\n\n/* //- Header -// */\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 18px;\n    font-weight: 700;\n    text-align: center;\n    text-transform: uppercase;\n  }\n\n\n\n  h2 {\n    @media screen and (max-width: 767px) {\n      display: none;\n    }\n\n    margin-bottom: $spacing-small;\n    font-size: 14px;\n  }\n\n\n\n  @media screen and (max-width: 767px) {\n    hr {\n      display: none;\n    }\n\n\n  }\n\n  @media screen and (min-width: 768px) {\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n\n\n}\n\n/* //- Main area -// */\nmain {\n  display: grid;\n  grid-template-columns: 100%;\n  grid-row-gap: $spacing-big;\n\n  @media screen and (min-width: 480px) {\n    grid-template-columns: auto auto;\n    grid-column-gap: $spacing;\n  }\n\n  @media screen and (min-width: 992px) {\n    grid-template-columns: auto auto auto;\n  }\n\n  @media screen and (min-width: 1200px) {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n\n/* //- Cards -// */\n.card {\n  display: -ms-flexbox;\n  display: flex;\n  padding: 1em;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  padding: $spacing;\n  background-color: #fff;\n  -webkit-box-shadow: 0 20px 20px rgba(0, 0, 0, .08);\n  box-shadow: 0 20px 20px rgba(0, 0, 0, .08);\n  -webkit-transition: all 250ms cubic-bezier(.02, .01, .47, 1);\n  transition: all 250ms cubic-bezier(.02, .01, .47, 1);\n\n  &:focus,\n  &:hover {\n    -webkit-box-shadow: 0 30px 30px rgba(0, 0, 0, .16);\n    box-shadow: 0 30px 30px rgba(0, 0, 0, .16);\n    -webkit-transform: translate(0, -10px);\n    transform: translate(0, -10px);\n  }\n\n  a {\n    margin-top: auto;\n    /* //Push link to the bottom of the card */\n  }\n}\n\n.card__heading {\n  margin-top: 0;\n  font-size: remy(18px);\n}\n\n.card__excerpt {\n  font-size: remy(14px);\n}\n\nbtn {\n  width: 20px;\n  height: 15px;\n  border-radius: 22.5px;\n  color: white;\n  font-size: 14px;\n  border: none;\n  background-color:rgba(10, 213, 231, 0.8);\n  -webkit-box-shadow: -3px 3px 3px 1px rgba(46, 45, 45, 0.25);\n  box-shadow: -3px 3px 3px 1px rgba(46, 45, 45, 0.25);\n  margin: 10px;\n}\n\nbtn:hover {\n  width: 123px;\n  height: 36px;\n  background-color: rgb(49, 102, 146);\n  border: solid silver 1px;\n  -webkit-box-shadow: -3px 3px 1px 1px rgb(0,0,0,0.25);\n  box-shadow: -3px 3px 1px 1px rgb(0,0,0,0.25);\n  -webkit-transition: width ease 0.3s, heigth ease 0.3s, -webkit-box-shadow ease 0.5s;\n  transition: width ease 0.3s, heigth ease 0.3s, -webkit-box-shadow ease 0.5s;\n  transition: box-shadow ease 0.5s, width ease 0.3s, heigth ease 0.3s;\n  transition: box-shadow ease 0.5s, width ease 0.3s, heigth ease 0.3s, -webkit-box-shadow ease 0.5s;\n  cursor: pointer;\n}\n";

    var PostCard = /*#__PURE__*/function () {
      function PostCard(hostRef) {
        _classCallCheck(this, PostCard);

        Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.boton = Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "boton", 7);
      }

      _createClass(PostCard, [{
        key: "llamarBoton",
        value: function llamarBoton() {
          this.boton.emit();
        }
      }, {
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("main", null, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("header", null, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "header"
          })), Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", null, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "section"
          }), Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("article", {
            "class": "card"
          }, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", {
            "class": "card__excerpt"
          }, this._id), Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", {
            "class": "card__heading"
          }, this.titulo), Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", {
            "class": "card__excerpt"
          }, this.contenido, " "), Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", {
            "class": "card__excerpt"
          }, this.nombre, " "), Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            "class": "btn",
            onClick: function onClick() {
              return _this.llamarBoton();
            }
          }, "Detalles"))));
        }
      }]);

      return PostCard;
    }();

    PostCard.style = postCardCss;
    /***/
  }
}]);
//# sourceMappingURL=6-es5.js.map