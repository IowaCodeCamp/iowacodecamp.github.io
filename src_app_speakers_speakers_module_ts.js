"use strict";
(self["webpackChunkladybird"] = self["webpackChunkladybird"] || []).push([["src_app_speakers_speakers_module_ts"],{

/***/ 7552:
/*!*********************************************************!*\
  !*** ./src/app/speakers/resolvers/speakers.resolver.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   speakersDataResolver: () => (/* binding */ speakersDataResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _assets_json_allSessionizeData_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/json/allSessionizeData.json */ 5669);


function speakersDataResolver(route) {
  const transferState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.TransferState);
  const key = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.makeStateKey)("speakers");
  const storedData = transferState.get(key, null);
  if (storedData) {
    return storedData;
  } else {
    const response = new Promise(resolve => resolve(_assets_json_allSessionizeData_json__WEBPACK_IMPORTED_MODULE_0__));
    return response.then(data => {
      transferState.set(key, data);
      return data;
    });
  }
}

/***/ }),

/***/ 1679:
/*!******************************************************!*\
  !*** ./src/app/speakers/routing/speakers.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeakersRoutingModule: () => (/* binding */ SpeakersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _views_speakers_speakers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/speakers/speakers.component */ 1585);
/* harmony import */ var _views_speakers_container_speakers_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/speakers-container/speakers-container.component */ 475);
/* harmony import */ var _resolvers_speakers_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolvers/speakers.resolver */ 7552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  component: _views_speakers_container_speakers_container_component__WEBPACK_IMPORTED_MODULE_1__.SpeakersContainerComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    component: _views_speakers_speakers_component__WEBPACK_IMPORTED_MODULE_0__.SpeakersComponent,
    resolve: {
      speakers: _resolvers_speakers_resolver__WEBPACK_IMPORTED_MODULE_2__.speakersDataResolver
    }
  }]
}];
class SpeakersRoutingModule {
  static #_ = this.ɵfac = function SpeakersRoutingModule_Factory(t) {
    return new (t || SpeakersRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: SpeakersRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SpeakersRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 2574:
/*!*********************************************!*\
  !*** ./src/app/speakers/speakers.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeakersModule: () => (/* binding */ SpeakersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _routing_speakers_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing/speakers.routing */ 1679);
/* harmony import */ var _views_speakers_speakers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/speakers/speakers.component */ 1585);
/* harmony import */ var _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/layout.module */ 4470);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ 6208);
/* harmony import */ var _views_speakers_container_speakers_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/speakers-container/speakers-container.component */ 475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);







class SpeakersModule {
  static #_ = this.ɵfac = function SpeakersModule_Factory(t) {
    return new (t || SpeakersModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: SpeakersModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_routing_speakers_routing__WEBPACK_IMPORTED_MODULE_0__.SpeakersRoutingModule, _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SpeakersModule, {
    declarations: [_views_speakers_speakers_component__WEBPACK_IMPORTED_MODULE_1__.SpeakersComponent, _views_speakers_container_speakers_container_component__WEBPACK_IMPORTED_MODULE_4__.SpeakersContainerComponent],
    imports: [_routing_speakers_routing__WEBPACK_IMPORTED_MODULE_0__.SpeakersRoutingModule, _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 475:
/*!***********************************************************************************!*\
  !*** ./src/app/speakers/views/speakers-container/speakers-container.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeakersContainerComponent: () => (/* binding */ SpeakersContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class SpeakersContainerComponent {
  constructor() {}
  static #_ = this.ɵfac = function SpeakersContainerComponent_Factory(t) {
    return new (t || SpeakersContainerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SpeakersContainerComponent,
    selectors: [["app-speakers-container"]],
    decls: 1,
    vars: 0,
    template: function SpeakersContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1585:
/*!***************************************************************!*\
  !*** ./src/app/speakers/views/speakers/speakers.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeakersComponent: () => (/* binding */ SpeakersComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _layout_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layout/components/shell/shell.component */ 1279);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 8246);
/* harmony import */ var _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layout/components/footer/footer.component */ 7114);






class SpeakersComponent {
  constructor(activatedRoute) {
    this.activatedRoute = activatedRoute;
    this.speakers = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const allSessionizeData = yield _this.activatedRoute.snapshot.data["speakers"];
      _this.speakers = allSessionizeData.speakers;
    })();
  }
  static #_ = this.ɵfac = function SpeakersComponent_Factory(t) {
    return new (t || SpeakersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SpeakersComponent,
    selectors: [["app-speakers"]],
    decls: 7,
    vars: 0,
    consts: [["pageTitle", "Speakers"], [1, "max-w-640", "mx-auto", "mb-60", "prose"]],
    template: function SpeakersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet")(1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-shell", 0)(3, "div", 1)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " A variety of speakers, from just starting out to well-known, professional speakers from around the midwest. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _layout_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_1__.ShellComponent, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
    encapsulation: 2
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_speakers_speakers_module_ts.js.map