"use strict";
(self["webpackChunkladybird"] = self["webpackChunkladybird"] || []).push([["src_app_sponsors_sponsors_module_ts"],{

/***/ 1568:
/*!**************************************************************!*\
  !*** ./src/app/sponsors/resolvers/sponsors-info.resolver.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sponsorsInfoDataResolver: () => (/* binding */ sponsorsInfoDataResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _assets_json_sponsors_info_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/json/sponsors-info.json */ 6609);


function sponsorsInfoDataResolver(route) {
  const transferState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.TransferState);
  const key = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.makeStateKey)("sponsorsInfo");
  const storedData = transferState.get(key, null);
  if (storedData) {
    return storedData;
  } else {
    const response = new Promise(resolve => resolve(_assets_json_sponsors_info_json__WEBPACK_IMPORTED_MODULE_0__));
    return response.then(data => {
      transferState.set(key, data);
      return data;
    });
  }
}

/***/ }),

/***/ 1136:
/*!*********************************************************!*\
  !*** ./src/app/sponsors/resolvers/sponsors.resolver.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sponsorsDataResolver: () => (/* binding */ sponsorsDataResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _assets_json_sponsors_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/json/sponsors.json */ 6780);


function sponsorsDataResolver(route) {
  const transferState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.TransferState);
  const key = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.makeStateKey)("sponsors");
  const storedData = transferState.get(key, null);
  if (storedData) {
    return storedData;
  } else {
    const response = new Promise(resolve => resolve(_assets_json_sponsors_json__WEBPACK_IMPORTED_MODULE_0__));
    return response.then(data => {
      transferState.set(key, data);
      return data;
    });
  }
}

/***/ }),

/***/ 2768:
/*!******************************************************!*\
  !*** ./src/app/sponsors/routing/sponsors.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SponsorsRoutingModule: () => (/* binding */ SponsorsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _views_sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/sponsors/sponsors.component */ 6068);
/* harmony import */ var _views_sponsors_container_sponsors_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/sponsors-container/sponsors-container.component */ 6683);
/* harmony import */ var _resolvers_sponsors_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolvers/sponsors.resolver */ 1136);
/* harmony import */ var _views_info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/info/info.component */ 2970);
/* harmony import */ var _resolvers_sponsors_info_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resolvers/sponsors-info.resolver */ 1568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);









const routes = [{
  path: '',
  component: _views_sponsors_container_sponsors_container_component__WEBPACK_IMPORTED_MODULE_1__.SponsorsContainerComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    component: _views_sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_0__.SponsorsComponent,
    resolve: {
      sponsors: _resolvers_sponsors_resolver__WEBPACK_IMPORTED_MODULE_2__.sponsorsDataResolver
    }
  }, {
    path: 'info',
    pathMatch: 'full',
    component: _views_info_info_component__WEBPACK_IMPORTED_MODULE_3__.SponsorsInfoComponent,
    resolve: {
      sponsorsInfo: _resolvers_sponsors_info_resolver__WEBPACK_IMPORTED_MODULE_4__.sponsorsInfoDataResolver
    }
  }]
}];
class SponsorsRoutingModule {
  static #_ = this.ɵfac = function SponsorsRoutingModule_Factory(t) {
    return new (t || SponsorsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: SponsorsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SponsorsRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 2690:
/*!*********************************************!*\
  !*** ./src/app/sponsors/sponsors.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SponsorsModule: () => (/* binding */ SponsorsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _routing_sponsors_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing/sponsors.routing */ 2768);
/* harmony import */ var _views_sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/sponsors/sponsors.component */ 6068);
/* harmony import */ var _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/layout.module */ 4470);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ 6208);
/* harmony import */ var _views_sponsors_container_sponsors_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/sponsors-container/sponsors-container.component */ 6683);
/* harmony import */ var _views_info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/info/info.component */ 2970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);








class SponsorsModule {
  static #_ = this.ɵfac = function SponsorsModule_Factory(t) {
    return new (t || SponsorsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: SponsorsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_routing_sponsors_routing__WEBPACK_IMPORTED_MODULE_0__.SponsorsRoutingModule, _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SponsorsModule, {
    declarations: [_views_info_info_component__WEBPACK_IMPORTED_MODULE_5__.SponsorsInfoComponent, _views_sponsors_container_sponsors_container_component__WEBPACK_IMPORTED_MODULE_4__.SponsorsContainerComponent, _views_sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_1__.SponsorsComponent],
    imports: [_routing_sponsors_routing__WEBPACK_IMPORTED_MODULE_0__.SponsorsRoutingModule, _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 2970:
/*!*******************************************************!*\
  !*** ./src/app/sponsors/views/info/info.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SponsorsInfoComponent: () => (/* binding */ SponsorsInfoComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _layout_components_svg_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layout/components/svg-components/logo/logo.component */ 4789);
/* harmony import */ var _layout_components_underlined_heading_underlined_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/components/underlined-heading/underlined-heading.component */ 1976);
/* harmony import */ var _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layout/components/footer/footer.component */ 7114);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);







function SponsorsInfoComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "p")(2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", ctx_r0.data.contact_info.website, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.data.contact_info.website);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r0.data.contact_info.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.data.contact_info.email);
  }
}
function SponsorsInfoComponent_ng_container_11_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const prop_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", prop_r6.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](prop_r6.value);
  }
}
function SponsorsInfoComponent_ng_container_11_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const heading_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", heading_r7, " ");
  }
}
function SponsorsInfoComponent_ng_container_11_tr_14_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const benefit_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", benefit_r11, " ");
  }
}
function SponsorsInfoComponent_ng_container_11_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 24)(8, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SponsorsInfoComponent_ng_container_11_tr_14_li_9_Template, 2, 1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const level_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", level_r8.sponsor_level, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](level_r8.remaining);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](level_r8.cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", level_r8.benefits);
  }
}
function SponsorsInfoComponent_ng_container_11_section_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 26)(1, "div", 27)(2, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.data.callout_block.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.data.callout_block.copy);
  }
}
function SponsorsInfoComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 12)(2, "div", 13)(3, "table", 14)(4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SponsorsInfoComponent_ng_container_11_tr_5_Template, 5, 2, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "section", 12)(8, "div", 16)(9, "table", 17)(10, "thead")(11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SponsorsInfoComponent_ng_container_11_th_12_Template, 2, 1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SponsorsInfoComponent_ng_container_11_tr_14_Template, 10, 4, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, SponsorsInfoComponent_ng_container_11_section_15_Template, 6, 2, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 4, ctx_r1.data.general_info, ctx_r1.originalOrder));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.sponsorLevelColumnHeadings);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.data.sponsor_levels);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.data.callout_block);
  }
}
class SponsorsInfoComponent {
  constructor(activatedRoute) {
    this.activatedRoute = activatedRoute;
    this.sponsorLevelColumnHeadings = [];
    this.originalOrder = (a, b) => {
      return 0;
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.data = yield _this.activatedRoute.snapshot.data["sponsorsInfo"];
      _this.setSponsorLevelHeadings();
    })();
  }
  setSponsorLevelHeadings() {
    const firstObj = this.data.sponsor_levels[0];
    if (firstObj) {
      this.sponsorLevelColumnHeadings = Object.keys(firstObj).map(s => s.replace("_", ' '));
    }
  }
  static #_ = this.ɵfac = function SponsorsInfoComponent_Factory(t) {
    return new (t || SponsorsInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SponsorsInfoComponent,
    selectors: [["app-info"]],
    decls: 13,
    vars: 2,
    consts: [[1, "bg-gray-light", "px-16"], [1, "max-w-1024", "mx-auto"], [1, "flex", "justify-center", "gap-16", "flex-col", "sm:flex-row", "py-20", "w-full", "items-center"], [1, "w-92"], ["href", "/", "ng-reflect-router-link", "/", 1, "block"], ["class", "text-center sm:text-right sm:ml-auto", 4, "ngIf"], [1, "pt-60", "pb-40"], ["alignment", "center", "text", "Sponsorship Information"], [4, "ngIf"], [1, "text-center", "sm:text-right", "sm:ml-auto"], ["target", "_blank", 3, "href"], [3, "href"], [1, "mb-60", "px-16"], [1, "max-w-640", "mx-auto"], [1, "w-full", "text-left"], [4, "ngFor", "ngForOf"], [1, "max-w-1024", "mx-auto", "w-full", "overflow-x-auto"], [1, "w-full", "text-left", "min-w-[800px]"], ["class", "whitespace-nowrap align-top h5 text-white px-16 py-8 bg-red capitalize", 4, "ngFor", "ngForOf"], ["class", "bg-red py-72 px-16", 4, "ngIf"], [1, "align-top", "pr-16", "py-20", "border-b", "border-gray-medium", "capitalize"], [1, "align-top", "py-20", "border-b", "border-gray-medium"], [1, "whitespace-nowrap", "align-top", "h5", "text-white", "px-16", "py-8", "bg-red", "capitalize"], [1, "align-top", "whitespace-nowrap", "px-16", "py-20", "border-b", "border-gray-medium", "bg-gray-light"], [1, "align-top", "px-16", "py-20", "border-b", "border-gray-medium"], [1, "ul"], [1, "bg-red", "py-72", "px-16"], [1, "text-center", "text-white", "max-w-640", "mx-auto"], [1, "h3"], [1, "p", "py-20"]],
    template: function SponsorsInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "header", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SponsorsInfoComponent_div_7_Template, 7, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "main")(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-underlined-heading", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, SponsorsInfoComponent_ng_container_11_Template, 16, 7, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-footer");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.contact_info);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _layout_components_svg_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__.LogoComponent, _layout_components_underlined_heading_underlined_heading_component__WEBPACK_IMPORTED_MODULE_2__.UnderlinedHeadingComponent, _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.KeyValuePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6683:
/*!***********************************************************************************!*\
  !*** ./src/app/sponsors/views/sponsors-container/sponsors-container.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SponsorsContainerComponent: () => (/* binding */ SponsorsContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class SponsorsContainerComponent {
  constructor() {}
  static #_ = this.ɵfac = function SponsorsContainerComponent_Factory(t) {
    return new (t || SponsorsContainerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SponsorsContainerComponent,
    selectors: [["app-sponsors-container"]],
    decls: 1,
    vars: 0,
    template: function SponsorsContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6068:
/*!***************************************************************!*\
  !*** ./src/app/sponsors/views/sponsors/sponsors.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SponsorsComponent: () => (/* binding */ SponsorsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _layout_components_sponsorship_doc_link_sponsorship_doc_link_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layout/components/sponsorship-doc-link/sponsorship-doc-link.component */ 9223);
/* harmony import */ var _layout_components_hr_hr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/components/hr/hr.component */ 4079);
/* harmony import */ var _layout_components_sponsor_sponsor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layout/components/sponsor/sponsor.component */ 8823);
/* harmony import */ var _layout_components_underlined_heading_underlined_heading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layout/components/underlined-heading/underlined-heading.component */ 1976);
/* harmony import */ var _layout_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layout/components/shell/shell.component */ 1279);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 8246);
/* harmony import */ var _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layout/components/footer/footer.component */ 7114);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);











function SponsorsComponent_ng_container_14_ng_template_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-sponsor", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const sponsor_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("sponsor", sponsor_r8);
  }
}
function SponsorsComponent_ng_container_14_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SponsorsComponent_ng_container_14_ng_template_4_ng_container_1_Template, 3, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", level_r1.sponsors);
  }
}
function SponsorsComponent_ng_container_14_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " No sponsors have signed up for this sponsorship level yet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SponsorsComponent_ng_container_14_app_hr_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-hr");
  }
}
function SponsorsComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-underlined-heading", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SponsorsComponent_ng_container_14_ng_template_4_Template, 2, 1, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, SponsorsComponent_ng_container_14_ng_template_5_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, SponsorsComponent_ng_container_14_app_hr_7_Template, 1, 0, "app-hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](6);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", level_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", level_r1.sponsors.length > 0)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r2 < ctx_r0.sponsorData.length - 1);
  }
}
class SponsorsComponent {
  constructor(activatedRoute) {
    this.activatedRoute = activatedRoute;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.sponsorData = yield _this.activatedRoute.snapshot.data["sponsors"];
    })();
  }
  static #_ = this.ɵfac = function SponsorsComponent_Factory(t) {
    return new (t || SponsorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: SponsorsComponent,
    selectors: [["app-sponsors"]],
    decls: 16,
    vars: 2,
    consts: [["pageTitle", "Sponsors"], [1, "max-w-640", "prose", "mx-auto", "mb-48"], ["href", "#", 1, "a", "text-orange", 3, "routerLink"], [1, "max-w-1024", "mx-auto", "mb-60"], [4, "ngFor", "ngForOf"], ["alignment", "center", 3, "text"], [1, "py-16"], [3, "ngIf", "ngIfElse"], ["noSponsors", ""], [4, "ngIf"], [1, "flex", "flex-wrap", "justify-center", "gap-32"], [3, "sponsor"], [1, "p", "text-center"]],
    template: function SponsorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "router-outlet")(1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "app-shell", 0)(3, "div", 1)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Iowa Code Camp is funded only by the good will of the community and our sponsors. Make sure you drop by the sponsor booths between sessions to win prizes and meet some pretty awesome supporters! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "If you're interested in becoming a sponsor, please review our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-sponsorship-doc-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, SponsorsComponent_ng_container_14_Template, 8, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "app-footer");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", "/contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.sponsorData);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _layout_components_sponsorship_doc_link_sponsorship_doc_link_component__WEBPACK_IMPORTED_MODULE_1__.SponsorshipDocLinkComponent, _layout_components_hr_hr_component__WEBPACK_IMPORTED_MODULE_2__.HRComponent, _layout_components_sponsor_sponsor_component__WEBPACK_IMPORTED_MODULE_3__.SponsorComponent, _layout_components_underlined_heading_underlined_heading_component__WEBPACK_IMPORTED_MODULE_4__.UnderlinedHeadingComponent, _layout_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_5__.ShellComponent, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6609:
/*!********************************************!*\
  !*** ./src/assets/json/sponsors-info.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"contact_info":{"website":"www.iowacodecamp.com","email":"sponsors@iowacodecamp.com"},"general_info":{"about":"We\'ve hosted free software development conferences since 2008. Our events are funded only by the good will of the community and sponsors like you!","audience":"Computer software industry in Iowa and surrounding states.","attendees":"Averages 240 attendees, primarily computer software developers who are engaged in self improvement and their careers.","reach":"Email list of 2,000 recipients, made up almost completely of those that have attended an event in the past.","general":["All sponsors will be conveyed leading up to and throughout the event in various ways. Your logo will appear on the Iowa Code Camp website, promotional materials, handouts, and social media."]},"callout_block":{"heading":"Swag For Your Bag","copy":"We are always interested in having swag from our sponsors to either put in the attendees\' bag or to set out for them to pick up. If you have items you would like to distribute, please let us know."},"sponsor_levels":[{"sponsor_level":"Event Sponsor","remaining":"0","cost":"$3,500","benefits":["The overall Iowa Code Camp is promoted as \'sponsored by\' your organization.","Exclusive opportunity to provide name badges and lanyards for all attendees.","Exclusive invitation for 4 to the speaker dinner.","Dedicated banner with your logo and ICC branding.","All benefits of the Table Sponsor","Prominent logo placement among sponsors."]},{"sponsor_level":"After Party Sponsor","remaining":"1","cost":"$2,500","benefits":["After party promoted with the name of your organization.","Exclusive invitation for 8 to the speaker dinner.","Dedicated banner with your logo and ICC branding.","The opportunity to exclusively distribute swag at after party.","All benefits of the Table Sponsor","Prominent logo placement among sponsors."]},{"sponsor_level":"Lunch Sponsor","remaining":"1","cost":"$2,500","benefits":["Lunch is promoted as \'sponsored by\' your organization","Example: \'Lunch sponsored by ABC Company\'","You can display organization signage at the lunch event.","All benefits of the Table Sponsor","Prominent logo placement among sponsors."]},{"sponsor_level":"Registration Desk Sponsor","remaining":"0","cost":"$2,000","benefits":["Exclusive access to support the registration desk the day of the event.","Exclusive invitation for 2 to the speaker dinner.","All benefits of the Table Sponsor","Prominent logo placement among sponsors."]},{"sponsor_level":"Speaker Dinner Sponsor","remaining":"1","cost":"$2,000","benefits":["Speaker Dinner is promoted as \'sponsored by\' your organization.","Exclusive invitation for 8 to the speaker dinner.","Dedicated banner with your logo and ICC branding.","All benefits of the Table Sponsor","Prominent logo placement among sponsors."]},{"sponsor_level":"Breakfast Sponsor","remaining":"1","cost":"$1,500","benefits":["Breakfast promoted as \'sponsored by\' your organization","Dedicated banner with your logo and ICC branding.","Prominent logo placement among sponsors."]},{"sponsor_level":"Table Sponsor","remaining":"6","cost":"$1,500","benefits":["A table and black tablecloth at the event to use how you see fit.","Room for a backdrop banner","Room for a tall roll up banner","Opportunity to participate in Sponsor Bingo. (encourages attendees to visit all tables)"]},{"sponsor_level":"Room Sponsor","remaining":"7","cost":"$500","benefits":["A room named after your organization during the event.","Opportunity to introduce your company and speakers in your room throughout the day.","Dedicated banner with your logo, ICC branding, and the rooms schedule."]},{"sponsor_level":"Keynote Sponsor","remaining":"0","cost":"TBD","benefits":["Exclusive opportunity to provide, introduce, and interview a keynote speaker.","Must have a software development focus.","Dedicated banner with your logo and ICC branding."]},{"sponsor_level":"Supporters","remaining":"Unlimited","cost":"$500 or more","benefits":["When giving away donated door prizes, sponsor is named as the donator."]}]}');

/***/ }),

/***/ 6780:
/*!***************************************!*\
  !*** ./src/assets/json/sponsors.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Event Sponsor","sponsors":[{"url":"https://www.wewritecode.com","name":"We Write Code","logoURL":"/assets/images/sponsors/wwc.png"}]},{"name":"After Party Sponsor","sponsors":[]},{"name":"Registration Desk Sponsor","sponsors":[{"url":"https://www.qci.com","name":"QCI","logoURL":"/assets/images/sponsors/qci.jpeg"}]},{"name":"Speaker Dinner Sponsor","sponsors":[]},{"name":"Lunch Sponsor","sponsors":[]},{"name":"Breakfast Sponsor","sponsors":[]},{"name":"Room / Table Sponsors","sponsors":[]},{"name":"Keynote Sponsor","sponsors":[]},{"name":"Supporters","sponsors":[]}]');

/***/ })

}]);
//# sourceMappingURL=src_app_sponsors_sponsors_module_ts.js.map