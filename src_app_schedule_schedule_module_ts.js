"use strict";
(self["webpackChunkladybird"] = self["webpackChunkladybird"] || []).push([["src_app_schedule_schedule_module_ts"],{

/***/ 5302:
/*!************************************************************************!*\
  !*** ./src/app/schedule/components/time-block/time-block.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeBlockComponent: () => (/* binding */ TimeBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _layout_components_accordion_button_accordion_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layout/components/accordion-button/accordion-button.component */ 110);
/* harmony import */ var _layout_components_hr_hr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layout/components/hr/hr.component */ 4079);
/* harmony import */ var _layout_components_session_session_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/components/session/session.component */ 6272);
/* harmony import */ var _layout_components_underlined_heading_underlined_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layout/components/underlined-heading/underlined-heading.component */ 1976);






function TimeBlockComponent_ng_container_4_ng_container_3_app_hr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-hr");
  }
}
function TimeBlockComponent_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-session", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TimeBlockComponent_ng_container_4_ng_container_3_app_hr_3_Template, 1, 0, "app-hr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const session_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("session", session_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r3 < ctx_r1.sessions.length - 1);
  }
}
function TimeBlockComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5)(2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TimeBlockComponent_ng_container_4_ng_container_3_Template, 4, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.sessions);
  }
}
class TimeBlockComponent {
  constructor(datePipe) {
    this.datePipe = datePipe;
    this.isOpen = true;
    this.sessions = [];
    this.heading = 'Group Heading';
  }
  ngOnInit() {
    this.heading = this.getConstructedHeading();
  }
  handleAccordionButtonClick() {
    this.isOpen = !this.isOpen;
  }
  transformDate(date) {
    return this.datePipe.transform(date, 'shortTime');
  }
  getConstructedHeading() {
    const start = new Date(this.getEarliestStartDate());
    const end = new Date(this.getLatestEndDate());
    return `${this.transformDate(start)} - ${this.transformDate(end)}`;
  }
  getEarliestStartDate() {
    const times = [];
    this.sessions.map(o => {
      times.push(Date.parse(o.startsAt));
    });
    return Math.min(...times);
  }
  getLatestEndDate() {
    const times = [];
    this.sessions.map(o => {
      times.push(Date.parse(o.endsAt));
    });
    return Math.max(...times);
  }
  static #_ = this.ɵfac = function TimeBlockComponent_Factory(t) {
    return new (t || TimeBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: TimeBlockComponent,
    selectors: [["app-time-block"]],
    inputs: {
      sessions: "sessions",
      heading: "heading"
    },
    decls: 5,
    vars: 3,
    consts: [[1, "border-2", "border-gray-light", "p-16", "relative"], [1, "flex", "justify-end", "mb-16"], [3, "isOpen", "clickEmitter"], ["alignment", "center", 3, "text"], [4, "ngIf"], [1, "max-w-800", "mx-auto", "pt-40", "pb-32"], [4, "ngFor", "ngForOf"], [3, "session"]],
    template: function TimeBlockComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "app-accordion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("clickEmitter", function TimeBlockComponent_Template_app_accordion_button_clickEmitter_2_listener() {
          return ctx.handleAccordionButtonClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-underlined-heading", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TimeBlockComponent_ng_container_4_Template, 4, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isOpen", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isOpen);
      }
    },
    dependencies: [_layout_components_accordion_button_accordion_button_component__WEBPACK_IMPORTED_MODULE_0__.AccordionButtonComponent, _layout_components_hr_hr_component__WEBPACK_IMPORTED_MODULE_1__.HRComponent, _layout_components_session_session_component__WEBPACK_IMPORTED_MODULE_2__.SessionComponent, _layout_components_underlined_heading_underlined_heading_component__WEBPACK_IMPORTED_MODULE_3__.UnderlinedHeadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7806:
/*!*********************************************************!*\
  !*** ./src/app/schedule/resolvers/schedule.resolver.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleDataResolver: () => (/* binding */ scheduleDataResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _assets_json_allSessionizeData_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/json/allSessionizeData.json */ 5669);


function scheduleDataResolver(route) {
  const transferState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.TransferState);
  const key = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.makeStateKey)("schedule");
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

/***/ 8913:
/*!******************************************************!*\
  !*** ./src/app/schedule/routing/schedule.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleRoutingModule: () => (/* binding */ ScheduleRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _views_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/schedule/schedule.component */ 9689);
/* harmony import */ var _views_schedule_container_schedule_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/schedule-container/schedule-container.component */ 3795);
/* harmony import */ var _resolvers_schedule_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolvers/schedule.resolver */ 7806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  component: _views_schedule_container_schedule_container_component__WEBPACK_IMPORTED_MODULE_1__.ScheduleContainerComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    component: _views_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_0__.ScheduleComponent,
    resolve: {
      schedule: _resolvers_schedule_resolver__WEBPACK_IMPORTED_MODULE_2__.scheduleDataResolver
    }
  }]
}];
class ScheduleRoutingModule {
  static #_ = this.ɵfac = function ScheduleRoutingModule_Factory(t) {
    return new (t || ScheduleRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ScheduleRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ScheduleRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 3585:
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleModule: () => (/* binding */ ScheduleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _routing_schedule_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing/schedule.routing */ 8913);
/* harmony import */ var _views_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/schedule/schedule.component */ 9689);
/* harmony import */ var _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/layout.module */ 4470);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ 6208);
/* harmony import */ var _components_time_block_time_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/time-block/time-block.component */ 5302);
/* harmony import */ var _views_schedule_container_schedule_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/schedule-container/schedule-container.component */ 3795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);








class ScheduleModule {
  static #_ = this.ɵfac = function ScheduleModule_Factory(t) {
    return new (t || ScheduleModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: ScheduleModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_routing_schedule_routing__WEBPACK_IMPORTED_MODULE_0__.ScheduleRoutingModule, _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ScheduleModule, {
    declarations: [_components_time_block_time_block_component__WEBPACK_IMPORTED_MODULE_4__.TimeBlockComponent, _views_schedule_container_schedule_container_component__WEBPACK_IMPORTED_MODULE_5__.ScheduleContainerComponent, _views_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_1__.ScheduleComponent],
    imports: [_routing_schedule_routing__WEBPACK_IMPORTED_MODULE_0__.ScheduleRoutingModule, _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 3795:
/*!***********************************************************************************!*\
  !*** ./src/app/schedule/views/schedule-container/schedule-container.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleContainerComponent: () => (/* binding */ ScheduleContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class ScheduleContainerComponent {
  constructor() {}
  static #_ = this.ɵfac = function ScheduleContainerComponent_Factory(t) {
    return new (t || ScheduleContainerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ScheduleContainerComponent,
    selectors: [["app-schedule-container"]],
    decls: 1,
    vars: 0,
    template: function ScheduleContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 9689:
/*!***************************************************************!*\
  !*** ./src/app/schedule/views/schedule/schedule.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleComponent: () => (/* binding */ ScheduleComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _layout_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layout/components/shell/shell.component */ 1279);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 8246);
/* harmony import */ var _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layout/components/footer/footer.component */ 7114);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_time_block_time_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/time-block/time-block.component */ 5302);








function ScheduleComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-time-block", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sessions", group_r1.value);
  }
}
class ScheduleComponent {
  constructor(activatedRoute) {
    this.activatedRoute = activatedRoute;
    this.isBrowser = false;
    this.jsonFile = 'allSessionizeData.json';
    this.sessionGroups = {};
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const allSessionizeData = yield _this.activatedRoute.snapshot.data["schedule"];
      _this.sessionGroups = _this.groupBy(allSessionizeData.sessions, 'startsAt');
    })();
  }
  // lacking built-in Object.groupBy()
  groupBy(items, key) {
    return items.reduce((result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item]
    }), {});
  }
  static #_ = this.ɵfac = function ScheduleComponent_Factory(t) {
    return new (t || ScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ScheduleComponent,
    selectors: [["app-schedule"]],
    decls: 12,
    vars: 3,
    consts: [["pageTitle", "Schedule"], [1, "max-w-640", "mx-auto", "mb-60"], [1, "prose"], [1, "max-w-1024", "mx-auto", "mb-60"], [4, "ngFor", "ngForOf"], [1, "mb-32"], [3, "sessions"]],
    template: function ScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "router-outlet")(1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "app-shell", 0)(3, "div", 1)(4, "div", 2)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Drop by the sponsor booths between sessions to win prizes and meet some pretty awesome supporters! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3)(8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ScheduleComponent_ng_container_9_Template, 3, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "app-footer");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 1, ctx.sessionGroups));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _layout_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_1__.ShellComponent, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _components_time_block_time_block_component__WEBPACK_IMPORTED_MODULE_4__.TimeBlockComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.KeyValuePipe],
    encapsulation: 2
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_schedule_schedule_module_ts.js.map