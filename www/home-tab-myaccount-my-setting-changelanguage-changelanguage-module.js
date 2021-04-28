(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-tab-myaccount-my-setting-changelanguage-changelanguage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-tab/myaccount/my-setting/changelanguage/changelanguage.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-tab/myaccount/my-setting/changelanguage/changelanguage.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>changelanguage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home-tab/myaccount/my-setting/changelanguage/changelanguage.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/home-tab/myaccount/my-setting/changelanguage/changelanguage.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ChangelanguagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelanguagePageModule", function() { return ChangelanguagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _changelanguage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changelanguage.page */ "./src/app/home-tab/myaccount/my-setting/changelanguage/changelanguage.page.ts");







var routes = [
    {
        path: '',
        component: _changelanguage_page__WEBPACK_IMPORTED_MODULE_6__["ChangelanguagePage"]
    }
];
var ChangelanguagePageModule = /** @class */ (function () {
    function ChangelanguagePageModule() {
    }
    ChangelanguagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_changelanguage_page__WEBPACK_IMPORTED_MODULE_6__["ChangelanguagePage"]]
        })
    ], ChangelanguagePageModule);
    return ChangelanguagePageModule;
}());



/***/ }),

/***/ "./src/app/home-tab/myaccount/my-setting/changelanguage/changelanguage.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/home-tab/myaccount/my-setting/changelanguage/changelanguage.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtdGFiL215YWNjb3VudC9teS1zZXR0aW5nL2NoYW5nZWxhbmd1YWdlL2NoYW5nZWxhbmd1YWdlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home-tab/myaccount/my-setting/changelanguage/changelanguage.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/home-tab/myaccount/my-setting/changelanguage/changelanguage.page.ts ***!
  \*************************************************************************************/
/*! exports provided: ChangelanguagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelanguagePage", function() { return ChangelanguagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangelanguagePage = /** @class */ (function () {
    function ChangelanguagePage() {
    }
    ChangelanguagePage.prototype.ngOnInit = function () {
    };
    ChangelanguagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changelanguage',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./changelanguage.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-tab/myaccount/my-setting/changelanguage/changelanguage.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./changelanguage.page.scss */ "./src/app/home-tab/myaccount/my-setting/changelanguage/changelanguage.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChangelanguagePage);
    return ChangelanguagePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-tab-myaccount-my-setting-changelanguage-changelanguage-module.js.map