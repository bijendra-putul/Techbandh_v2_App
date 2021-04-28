(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verison-verison-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verison/verison.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verison/verison.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div style=\"height: 100vh;\">\r\n    <ion-card\r\n      style=\"\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        padding: 20px;\r\n      \"\r\n    >\r\n      <ion-row center>\r\n        Please update your app to latest version!.\r\n      </ion-row>\r\n      <ion-row style=\"margin-top: 20px;\">\r\n        <ion-button color=\"primary\" (click)=\"updateVesion()\">Update</ion-button>\r\n        <ion-button color=\"primary\" (click)=\"updatelater()\"\r\n          >Update Latter</ion-button\r\n        >\r\n      </ion-row>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/verison/verison.module.ts":
/*!*******************************************!*\
  !*** ./src/app/verison/verison.module.ts ***!
  \*******************************************/
/*! exports provided: VerisonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerisonPageModule", function() { return VerisonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _verison_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verison.page */ "./src/app/verison/verison.page.ts");







var routes = [
    {
        path: '',
        component: _verison_page__WEBPACK_IMPORTED_MODULE_6__["VerisonPage"]
    }
];
var VerisonPageModule = /** @class */ (function () {
    function VerisonPageModule() {
    }
    VerisonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_verison_page__WEBPACK_IMPORTED_MODULE_6__["VerisonPage"]]
        })
    ], VerisonPageModule);
    return VerisonPageModule;
}());



/***/ }),

/***/ "./src/app/verison/verison.page.scss":
/*!*******************************************!*\
  !*** ./src/app/verison/verison.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaXNvbi9EOlxcdGVjaGJhbmRodS9zcmNcXGFwcFxcdmVyaXNvblxcdmVyaXNvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3Zlcmlzb24vdmVyaXNvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0osbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3Zlcmlzb24vdmVyaXNvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxuXHJcbn0iLCJpb24tY29udGVudCBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/verison/verison.page.ts":
/*!*****************************************!*\
  !*** ./src/app/verison/verison.page.ts ***!
  \*****************************************/
/*! exports provided: VerisonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerisonPage", function() { return VerisonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/market/ngx */ "./node_modules/@ionic-native/market/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var VerisonPage = /** @class */ (function () {
    function VerisonPage(market, router, platform, navCtrl) {
        this.market = market;
        this.router = router;
        this.platform = platform;
        this.navCtrl = navCtrl;
    }
    VerisonPage.prototype.ngOnInit = function () { };
    VerisonPage.prototype.updateVesion = function () {
        //this.market.open("com.tech.bandhu");
        this.market.open("com.tech.bandhu");
        //this.iab.create('https://play.google.com/store/apps/details?id=com.tech.bandhu', "_system", "location=no");
    };
    VerisonPage.prototype.updatelater = function () {
        this.router.navigate(["welcome"]);
    };
    VerisonPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(601, function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.router.isActive("version", true) &&
                    this.router.url === "version") {
                    this.navCtrl.pop();
                }
                return [2 /*return*/];
            });
        }); });
    };
    VerisonPage.ctorParameters = function () { return [
        { type: _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_2__["Market"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    VerisonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-verison",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verison.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verison/verison.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verison.page.scss */ "./src/app/verison/verison.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_2__["Market"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], VerisonPage);
    return VerisonPage;
}());



/***/ })

}]);
//# sourceMappingURL=verison-verison-module.js.map