(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../../proyectoStencilJs/stencilkurso/dist/esm/button-post.entry.js":
/*!***********************************************************************************************!*\
  !*** /Users/karinaheras/Desktop/proyectoStencilJs/stencilkurso/dist/esm/button-post.entry.js ***!
  \***********************************************************************************************/
/*! exports provided: button_post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "button_post", function() { return ButtonPost; });
/* harmony import */ var _index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c9ee93b5.js */ "../../proyectoStencilJs/stencilkurso/dist/esm/index-c9ee93b5.js");


const buttonPostCss = "";

class ButtonPost {
    constructor(hostRef) {
        Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.boton = Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "boton", 7);
    }
    llamarBoton() {
        this.boton.emit();
    }
    render() {
        return (Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", null, Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "btn", onClick: () => this.llamarBoton() })));
    }
}
ButtonPost.style = buttonPostCss;




/***/ })

}]);
//# sourceMappingURL=0-es2015.js.map