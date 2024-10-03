"use strict";
(self["webpackChunkladybird"] = self["webpackChunkladybird"] || []).push([["src_app_sessions_sessions_module_ts"],{

/***/ 5859:
/*!*********************************************************!*\
  !*** ./src/app/sessions/resolvers/sessions.resolver.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sessionsDataResolver: () => (/* binding */ sessionsDataResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _assets_json_allSessionizeData_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/json/allSessionizeData.json */ 5669);


function sessionsDataResolver(route) {
  const transferState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.TransferState);
  const key = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.makeStateKey)("sessions");
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

/***/ 8836:
/*!******************************************************!*\
  !*** ./src/app/sessions/routing/sessions.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionsRoutingModule: () => (/* binding */ SessionsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _views_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/sessions/sessions.component */ 6221);
/* harmony import */ var _views_sessions_container_sessions_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/sessions-container/sessions-container.component */ 7009);
/* harmony import */ var _resolvers_sessions_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolvers/sessions.resolver */ 5859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  component: _views_sessions_container_sessions_container_component__WEBPACK_IMPORTED_MODULE_1__.SessionsContainerComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    component: _views_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_0__.SessionsComponent,
    resolve: {
      sessions: _resolvers_sessions_resolver__WEBPACK_IMPORTED_MODULE_2__.sessionsDataResolver
    }
  }]
}];
class SessionsRoutingModule {
  static #_ = this.ɵfac = function SessionsRoutingModule_Factory(t) {
    return new (t || SessionsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: SessionsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SessionsRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 1025:
/*!*********************************************!*\
  !*** ./src/app/sessions/sessions.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionsModule: () => (/* binding */ SessionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _routing_sessions_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing/sessions.routing */ 8836);
/* harmony import */ var _views_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/sessions/sessions.component */ 6221);
/* harmony import */ var _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/layout.module */ 4470);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ 6208);
/* harmony import */ var _views_sessions_container_sessions_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/sessions-container/sessions-container.component */ 7009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);







class SessionsModule {
  static #_ = this.ɵfac = function SessionsModule_Factory(t) {
    return new (t || SessionsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: SessionsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_routing_sessions_routing__WEBPACK_IMPORTED_MODULE_0__.SessionsRoutingModule, _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SessionsModule, {
    declarations: [_views_sessions_container_sessions_container_component__WEBPACK_IMPORTED_MODULE_4__.SessionsContainerComponent, _views_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_1__.SessionsComponent],
    imports: [_routing_sessions_routing__WEBPACK_IMPORTED_MODULE_0__.SessionsRoutingModule, _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 7009:
/*!***********************************************************************************!*\
  !*** ./src/app/sessions/views/sessions-container/sessions-container.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionsContainerComponent: () => (/* binding */ SessionsContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class SessionsContainerComponent {
  constructor() {}
  static #_ = this.ɵfac = function SessionsContainerComponent_Factory(t) {
    return new (t || SessionsContainerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SessionsContainerComponent,
    selectors: [["app-sessions-container"]],
    decls: 1,
    vars: 0,
    template: function SessionsContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6221:
/*!***************************************************************!*\
  !*** ./src/app/sessions/views/sessions/sessions.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionsComponent: () => (/* binding */ SessionsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _layout_components_hr_hr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layout/components/hr/hr.component */ 4079);
/* harmony import */ var _layout_components_session_session_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/components/session/session.component */ 6272);
/* harmony import */ var _layout_components_underlined_heading_underlined_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layout/components/underlined-heading/underlined-heading.component */ 1976);
/* harmony import */ var _layout_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layout/components/shell/shell.component */ 1279);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 8246);
/* harmony import */ var _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layout/components/footer/footer.component */ 7114);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);










function SessionsComponent_ng_template_4_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-session", 9)(2, "app-hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const session_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("session", session_r5);
  }
}
function SessionsComponent_ng_template_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SessionsComponent_ng_template_4_ng_container_1_li_1_Template, 3, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const session_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !session_r5.isServiceSession);
  }
}
function SessionsComponent_ng_template_4_ng_container_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-session", 9)(2, "app-hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const session_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("session", session_r9);
  }
}
function SessionsComponent_ng_template_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SessionsComponent_ng_template_4_ng_container_5_li_1_Template, 3, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const session_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", session_r9.isServiceSession);
  }
}
function SessionsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SessionsComponent_ng_template_4_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-underlined-heading", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SessionsComponent_ng_template_4_ng_container_5_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.sessions);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.sessions);
  }
}
function SessionsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No Sessions found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class SessionsComponent {
  constructor(activatedRoute) {
    this.activatedRoute = activatedRoute;
    this.levels = [];
    this.sessions = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const allSessionizeData = yield _this.activatedRoute.snapshot.data["sessions"];
      _this.sessions = allSessionizeData.sessions;
    })();
  }
  static #_ = this.ɵfac = function SessionsComponent_Factory(t) {
    return new (t || SessionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SessionsComponent,
    selectors: [["app-sessions"]],
    decls: 8,
    vars: 2,
    consts: [["pageTitle", "Sessions"], [1, "max-w-800", "mx-auto", "mb-60"], [3, "ngIf", "ngIfElse"], ["noSessions", ""], [1, "mb-60"], [4, "ngFor", "ngForOf"], [1, "mb-32"], ["alignment", "center", "text", "Service Sessions"], [4, "ngIf"], [3, "session"], [1, "text-center"]],
    template: function SessionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "router-outlet")(1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-shell", 0)(3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, SessionsComponent_ng_template_4_Template, 6, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SessionsComponent_ng_template_5_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-footer");
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sessions.length > 0)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _layout_components_hr_hr_component__WEBPACK_IMPORTED_MODULE_1__.HRComponent, _layout_components_session_session_component__WEBPACK_IMPORTED_MODULE_2__.SessionComponent, _layout_components_underlined_heading_underlined_heading_component__WEBPACK_IMPORTED_MODULE_3__.UnderlinedHeadingComponent, _layout_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_4__.ShellComponent, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf],
    encapsulation: 2
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_sessions_sessions_module_ts.js.map