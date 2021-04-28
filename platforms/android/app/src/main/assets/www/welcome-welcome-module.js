(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar style=\"line-height: 0px;\">\r\n    <ion-title>\r\n      <img src=\"../../assets/images/white_cp.svg\" style=\"height: 37px;\" />\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content color=\"phonenumber\" class=\"bggray\">\r\n  <ion-progress-bar\r\n    type=\"indeterminate\"\r\n    reversed=\"true\"\r\n    *ngIf=\"showProgress\"\r\n  ></ion-progress-bar>\r\n  <ion-card-header color=\"phonenumber\" class=\"phonenumber\">\r\n    <ion-card-title class=\"welcome-text\">Start Earning Money</ion-card-title>\r\n    <ion-card-subtitle class=\"verify-phone\"\r\n      >Login or Register with your Mobile Number</ion-card-subtitle\r\n    >\r\n    <ion-card-subtitle\r\n      class=\"bg-height\"\r\n      style=\"background:#472dc2\"\r\n    ></ion-card-subtitle>\r\n  </ion-card-header>\r\n</ion-content>\r\n<ion-content color=\"phonenumber\" class=\"bggray\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col> </ion-col>\r\n      <ion-col size=\"8\">\r\n        <form [formGroup]=\"contactForm\" (ngSubmit)=\"registerLoginbtn()\">\r\n          <ion-label class=\"phone-no\">Phone Number</ion-label>\r\n          <ion-item\r\n            color=\"phonenumber\"\r\n            class=\"inputbox-border ion-no-margin ion-no-padding\"\r\n            lines=\"none\"\r\n            style=\"margin-bottom:30px; border-bottom:2px solid #02f4ce;    height: 40px;\"\r\n          >\r\n            <ion-label\r\n              style=\"color:#9b9b9b !important;color: #9b9b9b !important;\r\n                  border-right: 1px  solid #a9a6a6;\r\n                  padding-right: 8px;\"\r\n              >+91</ion-label\r\n            >\r\n            <ion-input\r\n              type=\"tel\"\r\n              placeholder=\"Enter your number\"\r\n              formControlName=\"mobile\"\r\n              (keypress)=\"inputMobileno($event)\"\r\n              minlength=\"10\"\r\n              maxlength=\"10\"\r\n              style=\"color:#848181 !important;\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <div *ngIf=\"mobile.errors?.minlength \" class=\"mob-no\">\r\n            Mobile number should be 10 digits\r\n          </div>\r\n          <div\r\n            *ngIf=\"!mobile.errors?.minlength && mobile.errors?.pattern\"\r\n            class=\"mob-no\"\r\n          >\r\n            Please enter valid number.\r\n          </div>\r\n\r\n          <div class=\"enterotpsms\">\r\n            An OTP will be sent by SMS to entered number\r\n          </div>\r\n          <div\r\n            color=\"phonenumber\"\r\n            class=\"registerbutton\"\r\n            style=\"position:absolute;\"\r\n          >\r\n            <div class=\"login-div\">\r\n              <ion-button\r\n                shape=\"round\"\r\n                size=\"large\"\r\n                class=\"login-btn\"\r\n                [disabled]=\"!contactForm.valid\"\r\n                (click)=\"registerLoginbtn()\"\r\n                >Proceed</ion-button\r\n              >\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </ion-col>\r\n      <ion-col> </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-content *ngIf=\"showOtp\" class=\"enterotpcode\">\r\n  <h3>Please enter the OTP sent via SMS to</h3>\r\n  <h4>+91{{ registerData.phone }}</h4>\r\n  <h1>{{ otpnotFdata }}</h1>\r\n  <form [formGroup]=\"otpaddForm\" (ngSubmit)=\"verifyotp()\">\r\n    <div class=\"code-enter-box\">\r\n      <ion-grid class=\"inputbox-sms-otp\">\r\n        <ion-row>\r\n          <ion-col class=\"input-box\">\r\n            <ion-input\r\n              name=\"otp1\"\r\n              formControlName=\"otp1\"\r\n              class=\"otp-box\"\r\n              type=\"tel\"\r\n              [(ngModel)]=\"otpfirst\"\r\n              maxlength=\"1\"\r\n              #passcode1\r\n              (keyup)=\"onKeyUp($event,1)\"\r\n              style=\"--padding-left:0 !important;padding-left:0 !important\"\r\n            >\r\n            </ion-input>\r\n          </ion-col>\r\n\r\n          <ion-col col-1 class=\"input-box\">\r\n            <ion-input\r\n              name=\"otp2\"\r\n              formControlName=\"otp2\"\r\n              class=\"otp-box\"\r\n              maxlength=\"1\"\r\n              #passcode2\r\n              (keyup)=\"onKeyUp($event,2)\"\r\n              type=\"tel\"\r\n              [(ngModel)]=\"otpsecond\"\r\n            >\r\n            </ion-input>\r\n          </ion-col>\r\n\r\n          <ion-col col-1 class=\"input-box\">\r\n            <ion-input\r\n              name=\"otp3\"\r\n              formControlName=\"otp3\"\r\n              class=\"otp-box\"\r\n              maxlength=\"1\"\r\n              #passcode3\r\n              (keyup)=\"onKeyUp($event,3)\"\r\n              type=\"tel\"\r\n              [(ngModel)]=\"otpthird\"\r\n            >\r\n            </ion-input>\r\n          </ion-col>\r\n\r\n          <ion-col col-1 class=\"input-box\">\r\n            <ion-input\r\n              name=\"otp4\"\r\n              formControlName=\"otp4\"\r\n              class=\"otp-box\"\r\n              maxlength=\"1\"\r\n              #passcode4\r\n              (keyup)=\"onKeyUp($event,4)\"\r\n              type=\"tel\"\r\n              [(ngModel)]=\"otofourth\"\r\n            >\r\n            </ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <!-- <br />\r\n      <br />\r\n      <br />\r\n      <p *ngFor=\"let v of values\">{{v}}</p> -->\r\n    </div>\r\n    <ion-button [disabled]=\"!otpaddForm.valid\" (click)=\"verifyotp()\"\r\n      >Continue</ion-button\r\n    >\r\n  </form>\r\n  <div class=\"codenot-find\">\r\n    <h6>I didn't get a OTP</h6>\r\n    <ion-button\r\n      [disabled]=\"isDisabled\"\r\n      (click)=\"registerLoginbtn('resend')\"\r\n      shape=\"round\"\r\n      fill=\"outline\"\r\n      >Resend</ion-button\r\n    >   \r\n       <h2 class=\"resendwait\" *ngIf=\"isDisabled == true\">\r\n            Please wait \r\n            <ng-container  [counter]= \"counter\"\r\n            [interval]=\"interval\"      \r\n            (valueoutput)=\"valueoutput = $event\">\r\n              <h3 class=\"second-value\">{{ valueoutput }}</h3>\r\n             </ng-container>seconds\r\n            </h2>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/auto-focus.directive.ts":
/*!*****************************************!*\
  !*** ./src/app/auto-focus.directive.ts ***!
  \*****************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(el) {
        this.el = el;
    }
    AutofocusDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.el.nativeElement.focus();
        }, 500);
    };
    AutofocusDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AutofocusDirective.prototype, "appAutoFocus", void 0);
    AutofocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[autoFocus]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AutofocusDirective);
    return AutofocusDirective;
}());



/***/ }),

/***/ "./src/app/counter.dirctive.ts":
/*!*************************************!*\
  !*** ./src/app/counter.dirctive.ts ***!
  \*************************************/
/*! exports provided: CounterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterDirective", function() { return CounterDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CounterDirective = /** @class */ (function () {
    function CounterDirective() {
        var _this = this;
        this._counterSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._subscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this.valueoutput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._subscription = this._counterSource$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var interval = _a.interval, count = _a.count;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(count), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.valueoutput.emit(--count); }));
        })).subscribe();
    }
    CounterDirective.prototype.ngOnChanges = function () {
        this._counterSource$.next({ count: this.counter, interval: this.interval });
    };
    CounterDirective.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CounterDirective.prototype, "counter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CounterDirective.prototype, "interval", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CounterDirective.prototype, "valueoutput", void 0);
    CounterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[counter]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CounterDirective);
    return CounterDirective;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.module.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");
/* harmony import */ var _auto_focus_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auto-focus.directive */ "./src/app/auto-focus.directive.ts");
/* harmony import */ var _counter_dirctive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../counter.dirctive */ "./src/app/counter.dirctive.ts");










var routes = [
    {
        path: "",
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]
    }
];
var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"], _auto_focus_directive__WEBPACK_IMPORTED_MODULE_7__["AutofocusDirective"], _counter_dirctive__WEBPACK_IMPORTED_MODULE_8__["CounterDirective"]]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.page.scss":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bggray {\n  background: #f0f1f2;\n}\n\n.codenot-find {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n  position: relative;\n}\n\n.codenot-find h6 {\n  font-size: 14px;\n  margin-right: 10px;\n  margin: 0;\n  margin-right: 10px;\n}\n\n.codenot-find ion-button {\n  text-transform: capitalize;\n}\n\n.codenot-find .resendwait {\n  position: absolute;\n  top: 35px;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.codenot-find .second-value {\n  display: flex;\n  background: #5a43c8;\n  padding: 7px;\n  border-radius: 40px;\n  color: #fff;\n  width: 36px;\n  align-items: center;\n  justify-content: center;\n  margin: 3px 14px;\n}\n\n.phonenumber {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding-top: 15vh;\n}\n\n.phonenumber .welcome-text {\n  font-size: 26px;\n  font-weight: bold;\n  line-height: 40px;\n}\n\n.phonenumber .verify-phone {\n  font-size: 16px;\n  color: #000;\n}\n\n.phonenumber .bg-height {\n  height: 7px;\n  width: 90px;\n  margin-top: 15px;\n}\n\n.phone-no {\n  font-size: 14px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #472dc2;\n}\n\n.registerbutton {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding-right: 6px;\n}\n\n.registerbutton .register-btn {\n  font-size: 14px;\n  text-transform: capitalize;\n  border-radius: 40px;\n  height: 48px;\n  --box-shadow: none;\n  --background: none;\n  width: 100%;\n}\n\n.registerbutton .login-btn {\n  font-size: 14px;\n  text-transform: capitalize;\n  background-image: linear-gradient(#7d59e3, #472dc2);\n  border-radius: 40px;\n  height: 48px;\n  --box-shadow: none;\n  --background: none;\n  width: 100%;\n}\n\n.registerbutton .register-div {\n  width: 47%;\n}\n\n.registerbutton .login-div {\n  width: 63%;\n}\n\n.inputbox-border {\n  border-bottom: 2px solid #f0f1f2;\n}\n\n.inputbox-border .item-native {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n}\n\n.inputbox-border .sc-ion-input-md-h {\n  color: #cac6c6 !important;\n}\n\n.success {\n  color: green;\n}\n\n.errormob {\n  color: red;\n  position: absolute;\n  top: 70px;\n  font-size: 12px;\n}\n\n.enterotpcode {\n  text-align: center;\n  padding: 20px 20px;\n  top: 50px;\n  height: 100vh;\n  position: absolute;\n  z-index: 999;\n}\n\n.enterotpcode h3 {\n  font-size: 18px;\n  color: #2a2b2b;\n  margin-top: 40px;\n}\n\n.enterotpcode h4 {\n  font-size: 18px;\n  color: #472dc2;\n}\n\n.enterotpcode .otp-box {\n  border: 1px solid #472dc2;\n  height: 30px;\n  width: 40px;\n  margin: 0 5px;\n  padding-left: 0 !important;\n  padding-right: 10px !important;\n}\n\n.enterotpcode .code-enter-box {\n  display: flex;\n  margin: 20px 50px;\n  width: 250px;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n\n.mob-no {\n  top: 68px;\n  position: absolute;\n  color: red;\n  font-size: 14px;\n  background: #f0f1f2;\n  z-index: 999;\n  width: 100%;\n  height: 26px;\n}\n\n.enterotpsms {\n  font-size: 11.5px;\n  color: #676767;\n  position: absolute;\n  top: 71px;\n}\n\n.footer-nav {\n  display: none !important;\n}\n\n.inputbox-sms-otp ion-input {\n  border: 1px solid #9c9999;\n}\n\n.code-enter-box .native-input.sc-ion-input-md {\n  padding-left: 0 !important;\n}\n\n.input-box .native-input.sc-ion-input-md {\n  padding-left: 0 !important;\n}\n\n.native-input.sc-ion-input-md {\n  padding-left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9EOlxcdGVjaGJhbmRodS9zcmNcXGFwcFxcd2VsY29tZVxcd2VsY29tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUVBLG1CQUFBO0VBRUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEREU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURERTtFQUNFLDBCQUFBO0FDR0o7O0FEREU7RUFBZSxrQkFBQTtFQUNiLFNBQUE7RUFBWSxlQUFBO0VBQ1osYUFBQTtFQUNBLG1CQUFBO0VBQ0MsdUJBQUE7QUNLTDs7QURKSztFQUFpQixhQUFBO0VBQ2hCLG1CQUFBO0VBQXNCLFlBQUE7RUFDdEIsbUJBQUE7RUFBc0IsV0FBQTtFQUN0QixXQUFBO0VBQWMsbUJBQUE7RUFDYix1QkFBQTtFQUEwQixnQkFBQTtBQ1dqQzs7QURUQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ1lGOztBRFhFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNhSjs7QURWRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDWUo7O0FEVkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDWUo7O0FEVEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ1lGOztBRFZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNhRjs7QURYRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDYUo7O0FEWEU7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxtREFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDYUo7O0FEWEU7RUFDRSxVQUFBO0FDYUo7O0FEWEU7RUFDRSxVQUFBO0FDYUo7O0FEVEE7RUFDRSxnQ0FBQTtBQ1lGOztBRFhFO0VBQ0UscUNBQUE7VUFBQSxvQ0FBQTtBQ2FKOztBRFZBO0VBQ0UseUJBQUE7QUNhRjs7QURWQTtFQUNFLFlBQUE7QUNhRjs7QURYQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDY0Y7O0FEWkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNlRjs7QURkRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNnQko7O0FEZEU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ2dCSjs7QURkRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQ2dCSjs7QURkRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNnQko7O0FEYkE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDZ0JGOztBRGJBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDZ0JGOztBRGJBO0VBQ0Usd0JBQUE7QUNnQkY7O0FEYkU7RUFDRSx5QkFBQTtBQ2dCSjs7QURaRTtFQUNFLDBCQUFBO0FDZUo7O0FEVkU7RUFDRSwwQkFBQTtBQ2FKOztBRFZBO0VBQ0UsMEJBQUE7QUNhRiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdncmF5IHtcclxuICBiYWNrZ3JvdW5kOiAjZjBmMWYyO1xyXG59XHJcbi5jb2Rlbm90LWZpbmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoNiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG4gIC5yZXNlbmR3YWl0IHsgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxyXG4gICAgdG9wOiAzNXB4OyAgZm9udC1zaXplOiAyMHB4OyAgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyAgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjt9XHJcbiAgICAgLnNlY29uZC12YWx1ZSB7ICBkaXNwbGF5OiBmbGV4OyAgXHJcbiAgICAgIGJhY2tncm91bmQ6ICM1YTQzYzg7ICBwYWRkaW5nOiA3cHg7ICBcclxuICAgICAgYm9yZGVyLXJhZGl1czogNDBweDsgIGNvbG9yOiAjZmZmOyAgXHJcbiAgICAgIHdpZHRoOiAzNnB4OyAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIG1hcmdpbjogM3B4IDE0cHg7fVxyXG59XHJcbi5waG9uZW51bWJlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy10b3A6IDE1dmg7XHJcbiAgLndlbGNvbWUtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLnZlcmlmeS1waG9uZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLmJnLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbn1cclxuLnBob25lLW5vIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzQ3MmRjMjtcclxufVxyXG4ucmVnaXN0ZXJidXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcblxyXG4gIC5yZWdpc3Rlci1idG4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5sb2dpbi1idG4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzdkNTllMywgIzQ3MmRjMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1kaXYge1xyXG4gICAgd2lkdGg6IDQ3JTtcclxuICB9XHJcbiAgLmxvZ2luLWRpdiB7XHJcbiAgICB3aWR0aDogNjMlO1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0Ym94LWJvcmRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMGYxZjI7XHJcbiAgLml0ZW0tbmF0aXZlIHtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmlucHV0Ym94LWJvcmRlciAuc2MtaW9uLWlucHV0LW1kLWgge1xyXG4gIGNvbG9yOiAjY2FjNmM2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWNjZXNzIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuLmVycm9ybW9iIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5lbnRlcm90cGNvZGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzJhMmIyYjtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjNDcyZGMyO1xyXG4gIH1cclxuICAub3RwLWJveCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDcyZGMyO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb2RlLWVudGVyLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDUwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcbi5tb2Itbm8ge1xyXG4gIHRvcDogNjhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogI2YwZjFmMjtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4uZW50ZXJvdHBzbXMge1xyXG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcxcHg7XHJcbn1cclxuXHJcbi5mb290ZXItbmF2IHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlucHV0Ym94LXNtcy1vdHAge1xyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWM5OTk5O1xyXG4gIH1cclxufVxyXG4uY29kZS1lbnRlci1ib3gge1xyXG4gIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kIHtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0LWJveCB7XHJcbiAgLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG4iLCIuYmdncmF5IHtcbiAgYmFja2dyb3VuZDogI2YwZjFmMjtcbn1cblxuLmNvZGVub3QtZmluZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb2Rlbm90LWZpbmQgaDYge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY29kZW5vdC1maW5kIGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5jb2Rlbm90LWZpbmQgLnJlc2VuZHdhaXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb2Rlbm90LWZpbmQgLnNlY29uZC12YWx1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICM1YTQzYzg7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAzNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAzcHggMTRweDtcbn1cblxuLnBob25lbnVtYmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiAxNXZoO1xufVxuLnBob25lbnVtYmVyIC53ZWxjb21lLXRleHQge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cbi5waG9uZW51bWJlciAudmVyaWZ5LXBob25lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDtcbn1cbi5waG9uZW51bWJlciAuYmctaGVpZ2h0IHtcbiAgaGVpZ2h0OiA3cHg7XG4gIHdpZHRoOiA5MHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucGhvbmUtbm8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0NzJkYzI7XG59XG5cbi5yZWdpc3RlcmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xufVxuLnJlZ2lzdGVyYnV0dG9uIC5yZWdpc3Rlci1idG4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cbi5yZWdpc3RlcmJ1dHRvbiAubG9naW4tYnRuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM3ZDU5ZTMsICM0NzJkYzIpO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cbi5yZWdpc3RlcmJ1dHRvbiAucmVnaXN0ZXItZGl2IHtcbiAgd2lkdGg6IDQ3JTtcbn1cbi5yZWdpc3RlcmJ1dHRvbiAubG9naW4tZGl2IHtcbiAgd2lkdGg6IDYzJTtcbn1cblxuLmlucHV0Ym94LWJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjBmMWYyO1xufVxuLmlucHV0Ym94LWJvcmRlciAuaXRlbS1uYXRpdmUge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dGJveC1ib3JkZXIgLnNjLWlvbi1pbnB1dC1tZC1oIHtcbiAgY29sb3I6ICNjYWM2YzYgIWltcG9ydGFudDtcbn1cblxuLnN1Y2Nlc3Mge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5lcnJvcm1vYiB7XG4gIGNvbG9yOiByZWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3MHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5lbnRlcm90cGNvZGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5lbnRlcm90cGNvZGUgaDMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMmEyYjJiO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmVudGVyb3RwY29kZSBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0NzJkYzI7XG59XG4uZW50ZXJvdHBjb2RlIC5vdHAtYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ3MmRjMjtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luOiAwIDVweDtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cbi5lbnRlcm90cGNvZGUgLmNvZGUtZW50ZXItYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAyMHB4IDUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tb2Itbm8ge1xuICB0b3A6IDY4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZjBmMWYyO1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2cHg7XG59XG5cbi5lbnRlcm90cHNtcyB7XG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xuICBjb2xvcjogIzY3Njc2NztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcxcHg7XG59XG5cbi5mb290ZXItbmF2IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXRib3gtc21zLW90cCBpb24taW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWM5OTk5O1xufVxuXG4uY29kZS1lbnRlci1ib3ggLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmlucHV0LWJveCAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/welcome/welcome.page.ts":
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _restapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../restapi.service */ "./src/app/restapi.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _phone_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../phone-validator */ "./src/app/phone-validator.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/themeable-browser/ngx */ "./node_modules/@ionic-native/themeable-browser/ngx/index.js");










//import { EventLoggerProvider } from "../event-logger";
var WelcomePage = /** @class */ (function () {
    function WelcomePage(router, restapiService, alertController, toastController, loadingController, iab, navCtrl, themeableBrowser, platform, 
    //public logger: EventLoggerProvider,  
    rd, elementRef) {
        this.router = router;
        this.restapiService = restapiService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.themeableBrowser = themeableBrowser;
        this.platform = platform;
        this.rd = rd;
        this.elementRef = elementRef;
        this.values = [];
        this.pushes = [];
        this.registerLoginError = "";
        this.showOtp = false;
        this.showProgress = false;
        this.registerData = {
            phone: 0,
            otp: 0,
            language: 1
        };
        this.shouldDisable = false;
        this.isDisabled = false;
        this.counter = 30;
        this.interval = 1000;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _phone_validator__WEBPACK_IMPORTED_MODULE_5__["phoneNumberValidator"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[6-9]\d{9}$/)
            ])
        });
        this.otpaddForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            otp1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _phone_validator__WEBPACK_IMPORTED_MODULE_5__["phoneNumberValidator"]]),
            otp2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _phone_validator__WEBPACK_IMPORTED_MODULE_5__["phoneNumberValidator"]]),
            otp3: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _phone_validator__WEBPACK_IMPORTED_MODULE_5__["phoneNumberValidator"]]),
            otp4: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _phone_validator__WEBPACK_IMPORTED_MODULE_5__["phoneNumberValidator"]])
        });
        this.ngAfterViewInit();
    }
    Object.defineProperty(WelcomePage.prototype, "mobile", {
        get: function () {
            return this.contactForm.get("mobile");
        },
        enumerable: true,
        configurable: true
    });
    WelcomePage.prototype.onKeyUp = function (event, index) {
        console.log(event);
        if (event.target.value.length != 1) {
            this.setFocus(index - 2);
        }
        else {
            this.values.push(event.target.value);
            this.setFocus(index);
        }
        event.stopPropagation();
    };
    WelcomePage.prototype.submit = function (e) {
        this.showSuccessfulLoginAlert();
        this.values = [];
        this.passcode1.value = "";
        this.passcode2.value = "";
        this.passcode3.value = "";
        this.passcode4.value = "";
        e.stopPropagation();
    };
    WelcomePage.prototype.setFocus = function (index) {
        switch (index) {
            case 0:
                this.passcode1.setFocus();
                break;
            case 1:
                this.passcode2.setFocus();
                break;
            case 2:
                this.passcode3.setFocus();
                break;
            case 3:
                this.passcode4.setFocus();
                break;
        }
    };
    WelcomePage.prototype.showInvalidLoginAlert = function () { };
    WelcomePage.prototype.showSuccessfulLoginAlert = function () { };
    WelcomePage.prototype.ngOnInit = function () { };
    WelcomePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(601, function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.router.isActive("welcome", true) &&
                    this.router.url === "welcome") {
                    this.navCtrl.pop();
                }
                return [2 /*return*/];
            });
        }); });
    };
    WelcomePage.prototype.moveFocus = function (nextElement) {
        if (nextElement) {
            nextElement.setFocus();
            //this.backButtonSubscription.setFocus();
            // nextElement.setFocus();
        }
    };
    WelcomePage.prototype.revert = function () {
        this.contactForm.reset();
        this.otpaddForm.reset();
    };
    // tslint:disable-next-line:ban-types
    WelcomePage.prototype.registerLoginbtn = function (resend) {
        var _this = this;
        this.showProgress = true;
        this.isDisabled = true;
        this.registerData.phone = this.contactForm.value.mobile;
        this.restapiService
            .post_data("register", this.registerData)
            .subscribe(function (res) {
            _this.registerLogin = res;
            console.log(_this.registerLogin);
            _this.showProgress = false;
            if (_this.registerLogin.status) {
                _this.receviotp = _this.registerLogin.data.otp;
                _this.showOtp = true;
                _this.receviotp = _this.registerLogin.data.otp;
            }
            else {
                _this.registerLoginError = _this.registerLogin.success_msg;
                _this.presentAlert();
                setTimeout(function () {
                    _this.goToBrowser(_this.registerLogin.data);
                }, 3000);
            }
            if (resend) {
                _this.presentToast();
            }
        });
        setTimeout(function () {
            _this.isDisabled = false;
        }, 30000);
    };
    WelcomePage.prototype.goToBrowser = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, browser;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            statusbar: {
                                color: "#ffffffff"
                            },
                            toolbar: {
                                height: 44,
                                color: "#4030A3"
                            },
                            title: {
                                color: "#ffffffff",
                                showPageTitle: true
                            },
                            backButton: {
                                image: "back",
                                imagePressed: "back_pressed",
                                align: "left",
                                event: "backPressed"
                            },
                            backButtonCanClose: true
                        };
                        return [4 /*yield*/, this.themeableBrowser.create(url, "_blank", options)];
                    case 1:
                        browser = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // payment(url) {
    //   this.browser = this.iab
    //     .create(url)
    //     .on("loadstop")
    //     .subscribe((ev: InAppBrowserEvent) => {
    //       if (ev.url == "https://www.techjockey.com/tech-bandhu/order/failure") {
    //         console.log("payment failed");
    //         this.failed = true;
    //         this.closeBrowser();
    //       } else if (
    //         ev.url == "https://www.techjockey.com/tech-bandhu/order/success"
    //       ) {
    //         console.log("payment success");
    //         this.success = true;
    //       }
    //     });
    // }
    // closeBrowser() {
    //   this.browser.close();
    // }
    WelcomePage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "Verification code sent!",
                            position: "bottom",
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    WelcomePage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "You are not Registered Yet",
                            subHeader: "Redirecting you ...",
                            message: "Please register to start Earning money.",
                            cssClass: "registered-login"
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WelcomePage.prototype.prsentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            position: "bottom",
                            message: this.wrong_otp,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    WelcomePage.prototype.verifyotp = function () {
        var _this = this;
        this.registerData.otp =
            this.otpaddForm.value.otp1 +
                this.otpaddForm.value.otp2 +
                this.otpaddForm.value.otp3 +
                this.otpaddForm.value.otp4;
        if (this.registerData.otp == this.receviotp) {
            this.restapiService
                .post_data("verify_otp", this.registerData)
                .subscribe(function (res) {
                _this.verfyOtp = res;
                _this.rcpi = localStorage.getItem("cpartner_id");
                if (_this.rcpi) {
                    localStorage.removeItem("cpartner_id");
                    localStorage.removeItem("name");
                    localStorage.removeItem("phone");
                    localStorage.removeItem("profile_image");
                }
                if (_this.verfyOtp.status) {
                    console.log(_this.verfyOtp);
                    localStorage.setItem("cpartner_id", _this.verfyOtp.data.cpartner_id);
                    localStorage.setItem("name", _this.verfyOtp.data.name);
                    localStorage.setItem("phone", _this.verfyOtp.data.phone);
                    localStorage.setItem("profile_image", _this.verfyOtp.data.profile_img);
                    sessionStorage.setItem('cpartner_id', _this.verfyOtp.data.cpartner_id);
                    sessionStorage.setItem('name', _this.verfyOtp.data.name);
                    sessionStorage.setItem('phone', _this.verfyOtp.data.phone);
                    _this.router.navigate(["home-tab/main-home"]);
                    _this.showOtp = false;
                }
            });
        }
        else {
            this.receviotp = "Invalid OTP. Please enter correct OTP";
            this.wrong_otp = this.receviotp;
            this.prsentToast();
        }
    };
    WelcomePage.prototype.otpnotfound = function () { };
    WelcomePage.prototype.inputMobileno = function (event) {
        //this.registerLoginError = "";
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    WelcomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _restapi_service__WEBPACK_IMPORTED_MODULE_3__["RestapiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
        { type: _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["ThemeableBrowser"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("passcode1", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WelcomePage.prototype, "passcode1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("passcode2", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WelcomePage.prototype, "passcode2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("passcode3", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WelcomePage.prototype, "passcode3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("passcode4", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WelcomePage.prototype, "passcode4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("submitButton", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WelcomePage.prototype, "submitButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("timeLeft", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WelcomePage.prototype, "timeLeft", void 0);
    WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-welcome",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.page.scss */ "./src/app/welcome/welcome.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _restapi_service__WEBPACK_IMPORTED_MODULE_3__["RestapiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["ThemeableBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], WelcomePage);
    return WelcomePage;
}());



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-module.js.map