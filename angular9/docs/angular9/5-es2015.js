(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "../../proyectoStencilJs/stencilkurso/dist/esm/my-component.entry.js":
/*!************************************************************************************************!*\
  !*** /Users/karinaheras/Desktop/proyectoStencilJs/stencilkurso/dist/esm/my-component.entry.js ***!
  \************************************************************************************************/
/*! exports provided: my_component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "my_component", function() { return MyComponent; });
/* harmony import */ var _index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c9ee93b5.js */ "../../proyectoStencilJs/stencilkurso/dist/esm/index-c9ee93b5.js");


function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const myComponentCss = ":host{display:block}";

class MyComponent {
    constructor(hostRef) {
        Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return Object(_index_c9ee93b5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Hello, World! I'm ", this.getText());
    }
}
MyComponent.style = myComponentCss;




/***/ })

}]);
//# sourceMappingURL=5-es2015.js.map