(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["learn-learn-module"],{

/***/ "./src/app/home-tab/learn/learn.module.ts":
/*!************************************************!*\
  !*** ./src/app/home-tab/learn/learn.module.ts ***!
  \************************************************/
/*! exports provided: LearnPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnPageModule", function() { return LearnPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _learn_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./learn.page */ "./src/app/home-tab/learn/learn.page.ts");







var routes = [
    {
        path: "",
        component: _learn_page__WEBPACK_IMPORTED_MODULE_6__["LearnPage"]
    }
];
var LearnPageModule = /** @class */ (function () {
    function LearnPageModule() {
    }
    LearnPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_learn_page__WEBPACK_IMPORTED_MODULE_6__["LearnPage"]]
        })
    ], LearnPageModule);
    return LearnPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=learn-learn-module.js.map