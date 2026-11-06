"use strict";
(self["webpackChunkladybird"] = self["webpackChunkladybird"] || []).push([["src_app_schedule_schedule_module_ts"],{

/***/ 4287:
/*!**************************************************************************!*\
  !*** ./src/app/schedule/components/agenda-grid/agenda-grid.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgendaGridComponent: () => (/* binding */ AgendaGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _session_modal_session_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session-modal/session-modal.component */ 95);
/* harmony import */ var _app_core_services_base_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/base-modal.service */ 1556);






const _c0 = ["scroller"];
function AgendaGridComponent_col_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "col");
  }
}
function AgendaGridComponent_th_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const room_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", room_r8.sponsor, " ");
  }
}
function AgendaGridComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AgendaGridComponent_th_12_span_3_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const room_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](room_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", room_r8.sponsor);
  }
}
function AgendaGridComponent_tr_14_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AgendaGridComponent_tr_14_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AgendaGridComponent_tr_14_ng_container_10_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const slot_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00B7 ", slot_r11.serviceLocation, "");
  }
}
const _c1 = function (a0) {
  return {
    "outline outline-2 -outline-offset-2 outline-red": a0
  };
};
function AgendaGridComponent_tr_14_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 24)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AgendaGridComponent_tr_14_ng_container_10_ng_container_8_Template, 2, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const slot_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c1, slot_r11.startsAt === ctx_r14.nowSlotStart));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", ctx_r14.rooms.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](slot_r11.serviceLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" \u00B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 6, slot_r11.startsAt, "h:mm"), "\u2013", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 9, slot_r11.endsAt, "h:mm a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", slot_r11.serviceLocation);
  }
}
function AgendaGridComponent_tr_14_ng_template_11_td_0_button_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cell_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cell_r21.speakerNames, " ");
  }
}
function AgendaGridComponent_tr_14_ng_template_11_td_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AgendaGridComponent_tr_14_ng_template_11_td_0_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const cell_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.openSession(cell_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AgendaGridComponent_tr_14_ng_template_11_td_0_button_1_span_5_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r22 = ctx_r31.index;
    const cell_r21 = ctx_r31.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r23.rooms[i_r22].name, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cell_r21.session.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", cell_r21.speakerNames);
  }
}
function AgendaGridComponent_tr_14_ng_template_11_td_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a0) {
  return {
    "bg-red/5": a0
  };
};
function AgendaGridComponent_tr_14_ng_template_11_td_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AgendaGridComponent_tr_14_ng_template_11_td_0_button_1_Template, 6, 3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AgendaGridComponent_tr_14_ng_template_11_td_0_ng_template_2_Template, 2, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cell_r21 = ctx.$implicit;
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const slot_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, slot_r11.startsAt === ctx_r20.nowSlotStart));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", cell_r21)("ngIfElse", _r24);
  }
}
function AgendaGridComponent_tr_14_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AgendaGridComponent_tr_14_ng_template_11_td_0_Template, 4, 5, "td", 28);
  }
  if (rf & 2) {
    const slot_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", slot_r11.cells);
  }
}
function AgendaGridComponent_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 16)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AgendaGridComponent_tr_14_span_8_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AgendaGridComponent_tr_14_span_9_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AgendaGridComponent_tr_14_ng_container_10_Template, 9, 14, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AgendaGridComponent_tr_14_ng_template_11_Template, 1, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slot_r11 = ctx.$implicit;
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-slot", slot_r11.startsAt)("aria-current", slot_r11.startsAt === ctx_r3.nowSlotStart ? "time" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", slot_r11.startsAt === ctx_r3.nowSlotStart ? "bg-red text-white" : "bg-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 9, slot_r11.startsAt, "h:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 12, slot_r11.startsAt, "a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", slot_r11.startsAt === ctx_r3.nowSlotStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", slot_r11.startsAt === ctx_r3.nextSlotStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", slot_r11.isServiceSlot)("ngIfElse", _r15);
  }
}
function AgendaGridComponent_li_16_ng_container_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const slot_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00B7 ", slot_r34.serviceLocation, "");
  }
}
function AgendaGridComponent_li_16_ng_container_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
const _c3 = function (a0) {
  return {
    $implicit: a0
  };
};
function AgendaGridComponent_li_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 39)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AgendaGridComponent_li_16_ng_container_1_ng_container_10_Template, 2, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AgendaGridComponent_li_16_ng_container_1_ng_container_11_Template, 1, 0, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const slot_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", slot_r34.startsAt === ctx_r35.nowSlotStart ? "bg-red" : "bg-gray-dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 7, slot_r34.startsAt, "h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](slot_r34.serviceLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" until ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 10, slot_r34.endsAt, "h:mm a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", slot_r34.serviceLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c3, slot_r34));
  }
}
function AgendaGridComponent_li_16_ng_template_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function AgendaGridComponent_li_16_ng_template_2_ng_container_7_li_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cell_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cell_r44.speakerNames, " ");
  }
}
function AgendaGridComponent_li_16_ng_template_2_ng_container_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 44)(1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AgendaGridComponent_li_16_ng_template_2_ng_container_7_li_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
      const cell_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r49.openSession(cell_r44));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AgendaGridComponent_li_16_ng_template_2_ng_container_7_li_1_span_6_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r45 = ctx_r52.index;
    const cell_r44 = ctx_r52.$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r46.rooms[i_r45].name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cell_r44.session.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", cell_r44.speakerNames);
  }
}
function AgendaGridComponent_li_16_ng_template_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AgendaGridComponent_li_16_ng_template_2_ng_container_7_li_1_Template, 7, 3, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const cell_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", cell_r44);
  }
}
function AgendaGridComponent_li_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 41)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AgendaGridComponent_li_16_ng_template_2_ng_container_5_Template, 1, 0, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AgendaGridComponent_li_16_ng_template_2_ng_container_7_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slot_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", slot_r34.startsAt === ctx_r37.nowSlotStart ? "bg-red text-white" : "bg-gray-dark text-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 6, slot_r34.startsAt, "h:mm"), "\u2013", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 9, slot_r34.endsAt, "h:mm a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c3, slot_r34));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", slot_r34.cells);
  }
}
function AgendaGridComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AgendaGridComponent_li_16_ng_container_1_Template, 12, 15, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AgendaGridComponent_li_16_ng_template_2_Template, 8, 14, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slot_r34 = ctx.$implicit;
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-slot-stacked", slot_r34.startsAt)("aria-current", slot_r34.startsAt === ctx_r4.nowSlotStart ? "time" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", slot_r34.isServiceSlot)("ngIfElse", _r36);
  }
}
function AgendaGridComponent_ng_template_17_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AgendaGridComponent_ng_template_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AgendaGridComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AgendaGridComponent_ng_template_17_span_0_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AgendaGridComponent_ng_template_17_span_1_Template, 2, 0, "span", 49);
  }
  if (rf & 2) {
    const slot_r54 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", slot_r54.startsAt === ctx_r6.nowSlotStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", slot_r54.startsAt === ctx_r6.nextSlotStart);
  }
}
function unique(items) {
  return [...new Set(items)];
}
class AgendaGridComponent {
  constructor(platformId, modalService) {
    this.modalService = modalService;
    this.isBrowser = false;
    this.rooms = [];
    this.slots = [];
    this.nowSlotStart = null;
    this.nextSlotStart = null;
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(platformId);
  }
  ngOnInit() {
    if (this.isBrowser) {
      this.timer = setInterval(() => this.updateNow(), 60 * 1000);
    }
  }
  ngOnChanges() {
    this.build();
    this.updateNow();
  }
  ngAfterViewInit() {
    if (this.isBrowser) {
      // Defer so the rendered rows exist before measuring.
      setTimeout(() => this.scrollToCurrent());
    }
  }
  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  build() {
    if (!this.data?.sessions) {
      this.rooms = [];
      this.slots = [];
      return;
    }
    const sessions = this.data.sessions;
    const allRooms = this.data.rooms ?? [];
    const speakers = this.data.speakers ?? [];
    const talkRoomIds = new Set(sessions.filter(s => !s.isServiceSession).map(s => String(s.roomId)));
    this.rooms = allRooms.filter(r => talkRoomIds.has(String(r.id))).sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0)).map(r => {
      const [name, sponsor] = r.name.split('|').map(p => p.trim());
      return {
        id: String(r.id),
        name,
        sponsor: sponsor ?? ''
      };
    });
    const byStart = new Map();
    for (const s of sessions) {
      byStart.set(s.startsAt, [...(byStart.get(s.startsAt) ?? []), s]);
    }
    this.slots = [...byStart.keys()].sort().map(startsAt => {
      const group = byStart.get(startsAt);
      const endsAt = group.map(s => s.endsAt).sort().reverse()[0];
      const isServiceSlot = group.every(s => s.isServiceSession);
      return {
        startsAt,
        endsAt,
        isServiceSlot,
        serviceLabel: isServiceSlot ? unique(group.map(s => s.title)).join(' / ') : '',
        serviceLocation: isServiceSlot ? unique(group.map(s => this.roomName(allRooms, s.roomId))).join(', ') : '',
        cells: isServiceSlot ? [] : this.rooms.map(room => {
          const session = group.find(s => String(s.roomId) === room.id);
          if (!session) {
            return null;
          }
          const sessionSpeakers = this.speakersFor(speakers, session);
          return {
            session,
            roomName: room.name,
            speakers: sessionSpeakers,
            speakerNames: sessionSpeakers.map(sp => [sp.firstName, sp.lastName].filter(Boolean).join(' ')).join(', ')
          };
        })
      };
    });
  }
  updateNow() {
    if (!this.isBrowser) {
      return;
    }
    // Sessionize times have no offset, so they parse as the viewer's local time.
    const now = Date.now();
    const current = this.slots.filter(s => Date.parse(s.startsAt) <= now && now < Date.parse(s.endsAt));
    const upcoming = this.slots.find(s => Date.parse(s.startsAt) > now);
    // Prefer a talk slot over an overlapping service slot (e.g. welcome vs. break).
    this.nowSlotStart = (current.find(s => !s.isServiceSlot) ?? current[current.length - 1])?.startsAt ?? null;
    this.nextSlotStart = upcoming?.startsAt ?? null;
  }
  openSession(cell) {
    const modalRef = this.modalService.open(_session_modal_session_modal_component__WEBPACK_IMPORTED_MODULE_0__.SessionModalComponent);
    modalRef.instance.session = cell.session;
    modalRef.instance.speakers = cell.speakers;
    modalRef.instance.roomName = cell.roomName;
  }
  scrollToCurrent() {
    const container = this.scroller?.nativeElement;
    const gridVisible = !!container && container.offsetParent !== null;
    if (gridVisible) {
      // Wide grid: scroll inside its own box so the page itself doesn't jump.
      const target = this.nowSlotStart ?? this.nextSlotStart;
      const row = target && container.querySelector(`[data-slot="${target}"]`);
      const header = container.querySelector('thead');
      if (row) {
        container.scrollTop = row.offsetTop - (header?.offsetHeight ?? 0);
      }
      return;
    }
    // Stacked list scrolls with the page, so only jump there while the event is live.
    if (this.nowSlotStart) {
      const item = document.querySelector(`[data-slot-stacked="${this.nowSlotStart}"]`);
      if (item) {
        const fixedHeaderHeight = 80;
        window.scrollTo({
          top: item.getBoundingClientRect().top + window.scrollY - fixedHeaderHeight
        });
      }
    }
  }
  roomName(rooms, id) {
    const room = rooms.find(r => String(r.id) === String(id));
    return room ? room.name.split('|')[0].trim() : '';
  }
  speakersFor(speakers, session) {
    return session.speakers.map(id => speakers.find(sp => sp.id === id)).filter(sp => !!sp);
  }
  trackBySlot(_, slot) {
    return slot.startsAt;
  }
  static #_ = this.ɵfac = function AgendaGridComponent_Factory(t) {
    return new (t || AgendaGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_core_services_base_modal_service__WEBPACK_IMPORTED_MODULE_1__.BaseModalService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AgendaGridComponent,
    selectors: [["app-agenda-grid"]],
    viewQuery: function AgendaGridComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
      }
    },
    inputs: {
      data: "data"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 19,
    vars: 6,
    consts: [[1, "hidden", "lg:block", "relative", "overflow-y-auto", "overflow-x-hidden", "max-h-[80vh]", "border-2", "border-gray-light"], ["scroller", ""], [1, "table-fixed", "border-separate", "border-spacing-0", "w-full", "text-left"], [1, "sr-only"], [1, "w-72"], [4, "ngFor", "ngForOf"], ["scope", "col", 1, "sticky", "top-0", "z-mg", "bg-gray-dark", "text-white", "p-8", "text-12", "uppercase", "tracking-1", "align-bottom"], ["scope", "col", "class", "sticky top-0 z-bg bg-gray-dark text-white p-8 align-bottom", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "lg:hidden"], ["class", "mb-16", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["badge", ""], ["scope", "col", 1, "sticky", "top-0", "z-bg", "bg-gray-dark", "text-white", "p-8", "align-bottom"], [1, "block", "font-bold"], ["class", "block text-12 text-gray-medium font-normal", 4, "ngIf"], [1, "block", "text-12", "text-gray-medium", "font-normal"], ["scope", "row", 1, "p-8", "align-top", "border-b-2", "border-r-2", "border-gray-light", "whitespace-nowrap", 3, "ngClass"], [1, "block", "text-12", "font-normal"], ["class", "block mt-4 text-12 uppercase tracking-1", 4, "ngIf"], ["class", "block mt-4 text-12 uppercase tracking-1 text-red", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["talks", ""], [1, "block", "mt-4", "text-12", "uppercase", "tracking-1"], [1, "block", "mt-4", "text-12", "uppercase", "tracking-1", "text-red"], [1, "p-8", "align-top", "border-b-2", "border-gray-light", "bg-gray-light", 3, "ngClass"], [1, "font-bold"], [1, "text-12", "uppercase", "tracking-1"], [4, "ngIf"], ["class", "p-8 align-top border-b-2 border-r-2 border-gray-light break-words", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "p-8", "align-top", "border-b-2", "border-r-2", "border-gray-light", "break-words", 3, "ngClass"], ["type", "button", "class", "group block w-full text-left", 3, "click", 4, "ngIf", "ngIfElse"], ["empty", ""], ["type", "button", 1, "group", "block", "w-full", "text-left", 3, "click"], [1, "block", "text-red", "font-bold", "leading-tight", "group-hover:underline"], ["class", "block mt-4 text-12", 4, "ngIf"], [1, "block", "mt-4", "text-12"], ["aria-label", "No session", 1, "text-gray-medium"], [1, "mb-16"], ["stackedTalks", ""], [1, "p-12", "flex", "flex-wrap", "items-baseline", "gap-x-8", "text-white", 3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-12", "flex", "items-baseline", "gap-8", 3, "ngClass"], [1, "border-2", "border-t-0", "border-gray-light"], ["class", "border-b-2 border-gray-light last:border-b-0", 4, "ngIf"], [1, "border-b-2", "border-gray-light", "last:border-b-0"], ["type", "button", 1, "group", "block", "w-full", "p-12", "text-left", 3, "click"], [1, "block", "text-12", "uppercase", "tracking-1"], [1, "block", "text-red", "font-bold", "leading-tight", "mt-4", "group-hover:underline"], ["class", "ml-auto text-12 uppercase tracking-1 font-bold", 4, "ngIf"], ["class", "ml-auto text-12 uppercase tracking-1 font-bold text-orange", 4, "ngIf"], [1, "ml-auto", "text-12", "uppercase", "tracking-1", "font-bold"], [1, "ml-auto", "text-12", "uppercase", "tracking-1", "font-bold", "text-orange"]],
    template: function AgendaGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "table", 2)(3, "caption", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Schedule at a glance, by time and room");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "colgroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AgendaGridComponent_col_7_Template, 1, 0, "col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "thead")(9, "tr")(10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AgendaGridComponent_th_12_Template, 4, 2, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AgendaGridComponent_tr_14_Template, 13, 15, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ol", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AgendaGridComponent_li_16_Template, 4, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AgendaGridComponent_ng_template_17_Template, 2, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.rooms);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.rooms);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.slots)("ngForTrackBy", ctx.trackBySlot);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.slots)("ngForTrackBy", ctx.trackBySlot);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
    encapsulation: 2
  });
}

/***/ }),

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

/***/ 95:
/*!******************************************************************************!*\
  !*** ./src/app/schedule/components/session-modal/session-modal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionModalComponent: () => (/* binding */ SessionModalComponent)
/* harmony export */ });
/* harmony import */ var _app_layout_components_modal_components_base_modal_base_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/layout/components/modal-components/base-modal/base-modal.component */ 1798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _layout_components_modal_components_modal_shell_modal_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layout/components/modal-components/modal-shell/modal-shell.component */ 9518);
/* harmony import */ var _layout_components_modal_components_modal_body_modal_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/components/modal-components/modal-body/modal-body.component */ 1804);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);





const _c0 = ["closeButton"];
function SessionModalComponent_ng_container_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00B7 ", ctx_r1.roomName, "");
  }
}
function SessionModalComponent_ng_container_0_p_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.session.description);
  }
}
function SessionModalComponent_ng_container_0_ul_21_li_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const speaker_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](speaker_r6.tagLine);
  }
}
function SessionModalComponent_ng_container_0_ul_21_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div")(3, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SessionModalComponent_ng_container_0_ul_21_li_1_p_5_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const speaker_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", speaker_r6.profilePicture || "/assets/images/persona.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", speaker_r6.firstName, " ", speaker_r6.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", speaker_r6.tagLine);
  }
}
function SessionModalComponent_ng_container_0_ul_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SessionModalComponent_ng_container_0_ul_21_li_1_Template, 6, 4, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.speakers);
  }
}
function SessionModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-modal-shell")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SessionModalComponent_ng_container_0_ng_container_9_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SessionModalComponent_ng_container_0_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "app-modal-body")(19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, SessionModalComponent_ng_container_0_p_20_Template, 2, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, SessionModalComponent_ng_container_0_ul_21_Template, 2, 1, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx_r0.id + "-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 8, ctx_r0.session.startsAt, "h:mm"), "\u2013", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 11, ctx_r0.session.endsAt, "h:mm a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.roomName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r0.id + "-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.session.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.session.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.speakers.length > 0);
  }
}
class SessionModalComponent extends _app_layout_components_modal_components_base_modal_base_modal_component__WEBPACK_IMPORTED_MODULE_0__.BaseModalComponent {
  constructor() {
    super(...arguments);
    this.speakers = [];
    this.roomName = '';
  }
  ngAfterViewInit() {
    this.closeButton?.nativeElement.focus();
  }
  onEscape() {
    this.close();
  }
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵSessionModalComponent_BaseFactory;
    return function SessionModalComponent_Factory(t) {
      return (ɵSessionModalComponent_BaseFactory || (ɵSessionModalComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SessionModalComponent)))(t || SessionModalComponent);
    };
  }();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SessionModalComponent,
    selectors: [["app-session-modal"]],
    viewQuery: function SessionModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.closeButton = _t.first);
      }
    },
    hostBindings: function SessionModalComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.escape", function SessionModalComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEscape();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], ["role", "dialog", "aria-modal", "true"], [1, "flex", "items-start", "gap-16", "p-16", "border-b-2", "border-gray-light"], [1, "flex-1"], [1, "text-12", "uppercase", "tracking-1", "mb-4"], [1, "h4", "text-red", "leading-tight", 3, "id"], ["type", "button", 1, "shrink-0", "w-40", "h-40", "flex", "items-center", "justify-center", "text-24", "leading-none", "hover:text-red", 3, "click"], ["closeButton", ""], ["aria-hidden", "true"], [1, "sr-only"], [1, "p-16"], ["class", "whitespace-pre-line", 4, "ngIf"], ["class", "pt-16 flex flex-col gap-16", 4, "ngIf"], [1, "whitespace-pre-line"], [1, "pt-16", "flex", "flex-col", "gap-16"], ["class", "flex items-center gap-12", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-12"], ["alt", "", 1, "w-48", "h-48", "shrink-0", "aspect-square", "object-cover", "rounded-full", 3, "src"], [1, "h5", "text-orange"], ["class", "text-12", 4, "ngIf"], [1, "text-12"]],
    template: function SessionModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SessionModalComponent_ng_container_0_Template, 22, 14, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.session);
      }
    },
    dependencies: [_layout_components_modal_components_modal_shell_modal_shell_component__WEBPACK_IMPORTED_MODULE_1__.ModalShellComponent, _layout_components_modal_components_modal_body_modal_body_component__WEBPACK_IMPORTED_MODULE_2__.ModalBodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _routing_schedule_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing/schedule.routing */ 8913);
/* harmony import */ var _views_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/schedule/schedule.component */ 9689);
/* harmony import */ var _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/layout.module */ 4470);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ 6208);
/* harmony import */ var _components_time_block_time_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/time-block/time-block.component */ 5302);
/* harmony import */ var _views_schedule_container_schedule_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/schedule-container/schedule-container.component */ 3795);
/* harmony import */ var _views_room_posters_room_posters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/room-posters/room-posters.component */ 589);
/* harmony import */ var _components_room_session_room_session_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/room-session/room-session.component */ 4324);
/* harmony import */ var _components_agenda_grid_agenda_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/agenda-grid/agenda-grid.component */ 4287);
/* harmony import */ var _components_session_modal_session_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/session-modal/session-modal.component */ 95);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);












class ScheduleModule {
  static #_ = this.ɵfac = function ScheduleModule_Factory(t) {
    return new (t || ScheduleModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: ScheduleModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_routing_schedule_routing__WEBPACK_IMPORTED_MODULE_0__.ScheduleRoutingModule, _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ScheduleModule, {
    declarations: [_components_agenda_grid_agenda_grid_component__WEBPACK_IMPORTED_MODULE_8__.AgendaGridComponent, _components_session_modal_session_modal_component__WEBPACK_IMPORTED_MODULE_9__.SessionModalComponent, _components_room_session_room_session_component__WEBPACK_IMPORTED_MODULE_7__.RoomSessionComponent, _views_room_posters_room_posters_component__WEBPACK_IMPORTED_MODULE_6__.RoomPostersComponent, _components_time_block_time_block_component__WEBPACK_IMPORTED_MODULE_4__.TimeBlockComponent, _views_schedule_container_schedule_container_component__WEBPACK_IMPORTED_MODULE_5__.ScheduleContainerComponent, _views_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_1__.ScheduleComponent],
    imports: [_routing_schedule_routing__WEBPACK_IMPORTED_MODULE_0__.ScheduleRoutingModule, _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
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
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app.config */ 7110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _layout_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/components/shell/shell.component */ 1279);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 8246);
/* harmony import */ var _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layout/components/footer/footer.component */ 7114);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_agenda_grid_agenda_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/agenda-grid/agenda-grid.component */ 4287);
/* harmony import */ var _components_time_block_time_block_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/time-block/time-block.component */ 5302);










function ScheduleComponent_ng_container_3_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-agenda-grid", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx_r3.allSessionizeData);
  }
}
function ScheduleComponent_ng_container_3_ng_template_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-time-block", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sessions", group_r7.value);
  }
}
function ScheduleComponent_ng_container_3_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ScheduleComponent_ng_container_3_ng_template_12_ng_container_2_Template, 3, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, ctx_r5.sessionGroups));
  }
}
function ScheduleComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 3)(2, "div", 4)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Drop by the sponsor booths between sessions to win prizes and meet some pretty awesome supporters! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScheduleComponent_ng_container_3_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.setView("glance"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " At a glance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScheduleComponent_ng_container_3_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.setView("detailed"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Detailed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ScheduleComponent_ng_container_3_ng_container_11_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ScheduleComponent_ng_container_3_ng_template_12_Template, 4, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r0.view === "glance" ? "bg-red text-white" : "bg-white text-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-pressed", ctx_r0.view === "glance");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r0.view === "detailed" ? "bg-red text-white" : "bg-white text-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-pressed", ctx_r0.view === "detailed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.view === "glance")("ngIfElse", _r4);
  }
}
function ScheduleComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Check back soon for the ", ctx_r2.year, " schedule! ");
  }
}
class ScheduleComponent {
  constructor(activatedRoute, router) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.year = _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig.year;
    this.showSchedule = _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig.showSchedule;
    this.isBrowser = false;
    this.jsonFile = 'allSessionizeData.json';
    this.sessionGroups = {};
    this.view = 'glance';
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.querySub = _this.activatedRoute.queryParamMap.subscribe(params => {
        _this.view = params.get('view') === 'detailed' ? 'detailed' : 'glance';
      });
      _this.allSessionizeData = yield _this.activatedRoute.snapshot.data["schedule"];
      _this.sessionGroups = _this.groupBy(_this.allSessionizeData.sessions, 'startsAt');
    })();
  }
  ngOnDestroy() {
    this.querySub?.unsubscribe();
  }
  setView(view) {
    // Keep the choice in the URL so it survives refreshes and can be shared.
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        view: view === 'glance' ? null : view
      },
      replaceUrl: true
    });
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
    return new (t || ScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ScheduleComponent,
    selectors: [["app-schedule"]],
    decls: 7,
    vars: 3,
    consts: [[3, "pageTitle"], [4, "ngIf", "ngIfElse"], ["pending", ""], [1, "max-w-640", "mx-auto", "mb-60"], [1, "prose"], [1, "max-w-1280", "mx-auto", "mb-24", "flex", "justify-center"], ["role", "group", "aria-label", "Schedule view", 1, "inline-flex", "border-2", "border-red"], ["type", "button", 1, "px-16", "py-8", "font-bold", "uppercase", "tracking-1", "text-12", 3, "ngClass", "click"], ["detailed", ""], [1, "max-w-1280", "mx-auto", "mb-60"], [3, "data"], [1, "max-w-1024", "mx-auto", "mb-60"], [4, "ngFor", "ngForOf"], [1, "mb-32"], [3, "sessions"], [1, "max-w-640", "mx-auto", "mb-60", "prose", "text-center"]],
    template: function ScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "router-outlet")(1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-shell", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ScheduleComponent_ng_container_3_Template, 14, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ScheduleComponent_ng_template_4_Template, 3, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-footer");
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageTitle", ctx.year + " Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showSchedule)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _layout_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_2__.ShellComponent, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _components_agenda_grid_agenda_grid_component__WEBPACK_IMPORTED_MODULE_5__.AgendaGridComponent, _components_time_block_time_block_component__WEBPACK_IMPORTED_MODULE_6__.TimeBlockComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.KeyValuePipe],
    encapsulation: 2
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_schedule_schedule_module_ts.js.map