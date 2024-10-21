"use strict";
(self["webpackChunkladybird"] = self["webpackChunkladybird"] || []).push([["src_app_schedule_schedule_module_ts"],{

/***/ 4324:
/*!****************************************************************************!*\
  !*** ./src/app/schedule/components/room-session/room-session.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomSessionComponent: () => (/* binding */ RoomSessionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _layout_components_underlined_heading_underlined_heading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layout/components/underlined-heading/underlined-heading.component */ 1976);



function RoomSessionComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.speaker.profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.speaker.firstName, " ", ctx_r0.speaker.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.speaker.title, " ");
  }
}
// import { CategoryItem } from '@app/shared/interfaces/categoryItem';
class RoomSessionComponent {
  constructor(datePipe) {
    this.datePipe = datePipe;
    this.categories = [];
  }
  ngOnInit() {
    console.log("session: ", this.session);
  }
  getSessionTime() {
    const startDate = new Date(this.session.startsAt);
    const endDate = new Date(this.session.endsAt);
    const startFormatted = this.datePipe.transform(startDate, 'hh:mm a');
    const endFormatted = this.datePipe.transform(endDate, 'hh:mm a');
    return `${startFormatted} – ${endFormatted}`;
  }
  transformDate(date) {
    return this.datePipe.transform(date, 'shortTime');
  }
  static #_ = this.ɵfac = function RoomSessionComponent_Factory(t) {
    return new (t || RoomSessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RoomSessionComponent,
    selectors: [["app-room-session"]],
    inputs: {
      session: "session",
      categories: "categories",
      speaker: "speaker"
    },
    decls: 7,
    vars: 3,
    consts: [[1, "border-2", "border-gray-light", "p-16", "relative"], ["alignment", "center", 3, "text"], [1, "flex", "flex-col", "md:flex-row"], [1, "text-red", "h4", "pb-16"], [4, "ngIf"], [1, "flex", "items-center", "gap-16"], [1, "w-48", "h-48"], [1, "aspect-square", "object-contain", "rounded-full", 3, "src"], [1, "mb-4", "h5", "text-orange"], [1, "p"]],
    template: function RoomSessionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 0)(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-underlined-heading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RoomSessionComponent_ng_container_6_Template, 9, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", ctx.getSessionTime());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.session.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.speaker);
      }
    },
    dependencies: [_layout_components_underlined_heading_underlined_heading_component__WEBPACK_IMPORTED_MODULE_0__.UnderlinedHeadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _views_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/schedule/schedule.component */ 9689);
/* harmony import */ var _views_schedule_container_schedule_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/schedule-container/schedule-container.component */ 3795);
/* harmony import */ var _resolvers_schedule_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolvers/schedule.resolver */ 7806);
/* harmony import */ var _views_room_posters_room_posters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/room-posters/room-posters.component */ 589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);








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
  }, {
    path: 'room-posters',
    pathMatch: 'full',
    component: _views_room_posters_room_posters_component__WEBPACK_IMPORTED_MODULE_3__.RoomPostersComponent,
    resolve: {
      schedule: _resolvers_schedule_resolver__WEBPACK_IMPORTED_MODULE_2__.scheduleDataResolver
    }
  }]
}];
class ScheduleRoutingModule {
  static #_ = this.ɵfac = function ScheduleRoutingModule_Factory(t) {
    return new (t || ScheduleRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ScheduleRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ScheduleRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _routing_schedule_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing/schedule.routing */ 8913);
/* harmony import */ var _views_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/schedule/schedule.component */ 9689);
/* harmony import */ var _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/layout.module */ 4470);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ 6208);
/* harmony import */ var _components_time_block_time_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/time-block/time-block.component */ 5302);
/* harmony import */ var _views_schedule_container_schedule_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/schedule-container/schedule-container.component */ 3795);
/* harmony import */ var _views_room_posters_room_posters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/room-posters/room-posters.component */ 589);
/* harmony import */ var _components_room_session_room_session_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/room-session/room-session.component */ 4324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);










class ScheduleModule {
  static #_ = this.ɵfac = function ScheduleModule_Factory(t) {
    return new (t || ScheduleModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: ScheduleModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_routing_schedule_routing__WEBPACK_IMPORTED_MODULE_0__.ScheduleRoutingModule, _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ScheduleModule, {
    declarations: [_components_room_session_room_session_component__WEBPACK_IMPORTED_MODULE_7__.RoomSessionComponent, _views_room_posters_room_posters_component__WEBPACK_IMPORTED_MODULE_6__.RoomPostersComponent, _components_time_block_time_block_component__WEBPACK_IMPORTED_MODULE_4__.TimeBlockComponent, _views_schedule_container_schedule_container_component__WEBPACK_IMPORTED_MODULE_5__.ScheduleContainerComponent, _views_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_1__.ScheduleComponent],
    imports: [_routing_schedule_routing__WEBPACK_IMPORTED_MODULE_0__.ScheduleRoutingModule, _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 589:
/*!***********************************************************************!*\
  !*** ./src/app/schedule/views/room-posters/room-posters.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomPostersComponent: () => (/* binding */ RoomPostersComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _layout_components_svg_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layout/components/svg-components/logo/logo.component */ 4789);
/* harmony import */ var _layout_components_tag_tag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/components/tag/tag.component */ 4370);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_room_session_room_session_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/room-session/room-session.component */ 4324);







function RoomPostersComponent_ng_container_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-tag", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Sponsored by");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("alt", ctx_r3.getRoomSponsorFromId(group_r1.key) + " logo")("src", ctx_r3.getLogoFromSponsorName(ctx_r3.getRoomSponsorFromId(group_r1.key)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function RoomPostersComponent_ng_container_2_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-room-session", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const session_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("session", session_r6)("speaker", ctx_r4.getSpeaker(session_r6.speakers[0]))("categories", ctx_r4.getCategories(session_r6.categoryItems));
  }
}
function RoomPostersComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, RoomPostersComponent_ng_container_2_ng_container_8_Template, 5, 3, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7)(10, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, RoomPostersComponent_ng_container_2_ng_container_11_Template, 3, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getRoomNameFromId(group_r1.key), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.getRoomSponsorFromId(group_r1.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", group_r1.value);
  }
}
class RoomPostersComponent {
  constructor(activatedRoute) {
    this.activatedRoute = activatedRoute;
    this.isBrowser = false;
    this.sessionGroups = {};
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.allSessionizeData = yield _this.activatedRoute.snapshot.data["schedule"];
      _this.sessionGroups = _this.groupBy(_this.allSessionizeData.sessions, 'roomId');
    })();
  }
  getSpeaker(id) {
    return this.allSessionizeData.speakers.find(o => o.id === id);
  }
  getCategories(arr) {
    let retArr = [];
    // Levels
    for (let i = 0; i < arr.length; i += 1) {
      let category = this.allSessionizeData.categories[0].items.find(o => o.id === arr[i]);
      if (category) {
        retArr.push(String(category.name));
      }
    }
    // Tracks
    for (let i = 0; i < arr.length; i += 1) {
      let category = this.allSessionizeData.categories[1].items.find(o => o.id === arr[i]);
      if (category) {
        retArr.push(String(category.name));
      }
    }
    return retArr;
  }
  getRoomNameFromId(id) {
    if (!this.allSessionizeData) {
      return "";
    }
    const room = this.allSessionizeData.rooms.find(o => String(o.id) === id);
    const retVal = room.name.split("|")[0];
    return retVal ? retVal.trim() : "";
  }
  getRoomSponsorFromId(id) {
    if (!this.allSessionizeData) {
      return "";
    }
    const room = this.allSessionizeData.rooms.find(o => String(o.id) === id);
    const retVal = room.name.split("|")[1];
    return retVal ? retVal.replaceAll(/\s/g, "") : "";
  }
  getLogoFromSponsorName(name) {
    // warning: FRAGILE / hard-coded mapping
    const basePath = '/assets/images/sponsors/';
    let fileName = "";
    switch (name) {
      case "Delta3Consulting":
        fileName = "delta3.png";
        break;
      case "Innoventure":
        fileName = "innoventure.jpg";
        break;
      case "SourceAllies":
        fileName = "source-allies.png";
        break;
      case "ExecutiveResources":
        fileName = "executive-resources.png";
        break;
      case "FarReach":
        fileName = "far-reach.png";
        break;
      case "ColeConsulting":
        fileName = "cole-consulting.png";
        break;
      case "Turnberry":
        fileName = "turnberry.png";
        break;
      case "WeWriteCode":
        fileName = "wwc.png";
        break;
      default:
        break;
    }
    return basePath + fileName;
  }
  // lacking built-in Object.groupBy()
  groupBy(items, key) {
    return items.reduce((result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item]
    }), {});
  }
  static #_ = this.ɵfac = function RoomPostersComponent_Factory(t) {
    return new (t || RoomPostersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: RoomPostersComponent,
    selectors: [["app-room-posters"]],
    decls: 4,
    vars: 3,
    consts: [[4, "ngFor", "ngForOf"], [1, "break-inside-avoid", "overflow-hidden", "w-11in", "h-17in", "mx-auto"], [1, "p-32"], [1, "relative", "pt-12"], [1, "w-100", "absolute", "left-0", "top-0"], [1, "mb-16", "h2", "leading-none", "mx-auto", "text-red", "text-center"], [4, "ngIf"], [1, "pt-16"], [1, "flex", "items-center", "justify-center"], [3, "text"], [1, "flex", "items-center", "pt-16", "justify-center"], [1, "w-160", "h-auto", "block", 3, "alt", "src"], [3, "session", "speaker", "categories"]],
    template: function RoomPostersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, RoomPostersComponent_ng_container_2_Template, 12, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx.sessionGroups));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _layout_components_svg_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__.LogoComponent, _layout_components_tag_tag_component__WEBPACK_IMPORTED_MODULE_2__.TagComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _components_room_session_room_session_component__WEBPACK_IMPORTED_MODULE_3__.RoomSessionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.KeyValuePipe],
    encapsulation: 2
  });
}

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
      _this.allSessionizeData = yield _this.activatedRoute.snapshot.data["schedule"];
      _this.sessionGroups = _this.groupBy(_this.allSessionizeData.sessions, 'startsAt');
    })();
  }
  getRoomNameFromId(id) {
    const room = this.allSessionizeData.rooms.find(o => o.id === id);
    return room ? room.name : "";
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