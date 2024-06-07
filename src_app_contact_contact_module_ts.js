"use strict";
(self["webpackChunkladybird"] = self["webpackChunkladybird"] || []).push([["src_app_contact_contact_module_ts"],{

/***/ 4107:
/*!*********************************************************!*\
  !*** ./src/app/contact/components/faq/faq.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FAQComponent: () => (/* binding */ FAQComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


const _c0 = function (a0, a1) {
  return {
    "text-red": a0,
    "text-orange": a1
  };
};
class FAQComponent {
  constructor() {
    this.question = 'Sample FAQ question';
    this.answer = 'Answer ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse';
    this.isEven = false;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FAQComponent_Factory(t) {
    return new (t || FAQComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FAQComponent,
    selectors: [["app-faq"]],
    inputs: {
      question: "question",
      answer: "answer",
      isEven: "isEven"
    },
    decls: 4,
    vars: 6,
    consts: [[1, "p", "bold", 3, "ngClass"]],
    template: function FAQComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.isEven === false, ctx.isEven === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.question, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.answer, "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6446:
/*!*************************************************************!*\
  !*** ./src/app/contact/components/hotel/hotel.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HotelComponent: () => (/* binding */ HotelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function HotelComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.description);
  }
}
function HotelComponent_ul_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", feature_r3, " ");
  }
}
function HotelComponent_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HotelComponent_ul_6_ng_container_1_Template, 3, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.features);
  }
}
class HotelComponent {
  constructor() {
    this.name = 'Hotel Name';
    this.description = 'Description ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse';
    this.url = 'https://www.google.com';
    this.features = ['Feature A', 'Feature B', 'Feature C'];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function HotelComponent_Factory(t) {
    return new (t || HotelComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HotelComponent,
    selectors: [["app-hotel"]],
    inputs: {
      name: "name",
      description: "description",
      url: "url",
      features: "features"
    },
    decls: 7,
    vars: 4,
    consts: [[1, "mb-12"], [1, "h5", "strong"], ["target", "_blank", 3, "href"], ["class", "prose", 4, "ngIf"], ["class", "ul", 4, "ngIf"], [1, "prose"], [1, "ul"], [4, "ngFor", "ngForOf"]],
    template: function HotelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "h3", 1)(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HotelComponent_div_5_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HotelComponent_ul_6_Template, 2, 1, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.features.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 915:
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactModule: () => (/* binding */ ContactModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _routing_contact_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing/contact.routing */ 8361);
/* harmony import */ var _views_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/contact/contact.component */ 7991);
/* harmony import */ var _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/layout.module */ 4470);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ 6208);
/* harmony import */ var _components_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hotel/hotel.component */ 6446);
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/faq/faq.component */ 4107);
/* harmony import */ var _views_contact_container_contact_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/contact-container/contact-container.component */ 7726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);









class ContactModule {
  static #_ = this.ɵfac = function ContactModule_Factory(t) {
    return new (t || ContactModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: ContactModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_routing_contact_routing__WEBPACK_IMPORTED_MODULE_0__.ContactRoutingModule, _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ContactModule, {
    declarations: [_views_contact_container_contact_container_component__WEBPACK_IMPORTED_MODULE_6__.ContactContainerComponent, _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__.FAQComponent, _views_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent, _components_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_4__.HotelComponent],
    imports: [_routing_contact_routing__WEBPACK_IMPORTED_MODULE_0__.ContactRoutingModule, _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 7916:
/*!*******************************************************!*\
  !*** ./src/app/contact/resolvers/contact.resolver.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactDataResolver: () => (/* binding */ contactDataResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _assets_json_organizers_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/json/organizers.json */ 736);


function contactDataResolver(route) {
  const transferState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.TransferState);
  const key = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.makeStateKey)("contact");
  const storedData = transferState.get(key, null);
  if (storedData) {
    return storedData;
  } else {
    const response = new Promise(resolve => resolve(_assets_json_organizers_json__WEBPACK_IMPORTED_MODULE_0__));
    return response.then(data => {
      transferState.set(key, data);
      return data;
    });
  }
}

/***/ }),

/***/ 8361:
/*!****************************************************!*\
  !*** ./src/app/contact/routing/contact.routing.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactRoutingModule: () => (/* binding */ ContactRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _views_contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/contact/contact.component */ 7991);
/* harmony import */ var _views_contact_container_contact_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/contact-container/contact-container.component */ 7726);
/* harmony import */ var _resolvers_contact_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolvers/contact.resolver */ 7916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  component: _views_contact_container_contact_container_component__WEBPACK_IMPORTED_MODULE_1__.ContactContainerComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    component: _views_contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent,
    resolve: {
      contact: _resolvers_contact_resolver__WEBPACK_IMPORTED_MODULE_2__.contactDataResolver
    }
  }]
}];
class ContactRoutingModule {
  static #_ = this.ɵfac = function ContactRoutingModule_Factory(t) {
    return new (t || ContactRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ContactRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContactRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 7726:
/*!********************************************************************************!*\
  !*** ./src/app/contact/views/contact-container/contact-container.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactContainerComponent: () => (/* binding */ ContactContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class ContactContainerComponent {
  constructor() {}
  static #_ = this.ɵfac = function ContactContainerComponent_Factory(t) {
    return new (t || ContactContainerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactContainerComponent,
    selectors: [["app-speakers-container"]],
    decls: 1,
    vars: 0,
    template: function ContactContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7991:
/*!************************************************************!*\
  !*** ./src/app/contact/views/contact/contact.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _layout_components_sponsorship_doc_link_sponsorship_doc_link_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layout/components/sponsorship-doc-link/sponsorship-doc-link.component */ 9223);
/* harmony import */ var _layout_components_form_components_required_asterisk_required_asterisk_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/components/form-components/required-asterisk/required-asterisk.component */ 5377);
/* harmony import */ var _layout_components_form_components_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layout/components/form-components/textarea/textarea.component */ 5996);
/* harmony import */ var _layout_components_form_components_select_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layout/components/form-components/select/select.component */ 1739);
/* harmony import */ var _layout_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layout/components/button/button.component */ 6266);
/* harmony import */ var _layout_components_underlined_heading_underlined_heading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layout/components/underlined-heading/underlined-heading.component */ 1976);
/* harmony import */ var _layout_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layout/components/shell/shell.component */ 1279);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 8246);
/* harmony import */ var _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../layout/components/footer/footer.component */ 7114);
/* harmony import */ var _layout_components_form_components_input_group_input_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../layout/components/form-components/input-group/input-group.component */ 1764);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/faq/faq.component */ 4107);

















function ContactComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Please review our ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "app-sponsorship-doc-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
}
function ContactComponent_ng_container_60_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "app-faq", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const faq_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isEven", i_r5 % 2 === 0 ? true : false)("question", faq_r4.question)("answer", faq_r4.answer);
  }
}
function ContactComponent_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ContactComponent_ng_container_60_ng_container_2_Template, 3, 3, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.faqsPrior);
  }
}
function ContactComponent_ng_container_64_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "app-faq", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const faq_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isEven", i_r8 % 2 === 0 ? true : false)("question", faq_r7.question)("answer", faq_r7.answer);
  }
}
function ContactComponent_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ContactComponent_ng_container_64_ng_container_2_Template, 3, 3, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.faqsAtEvent);
  }
}
class ContactComponent {
  constructor(formBuilder, activatedRoute) {
    this.formBuilder = formBuilder;
    this.activatedRoute = activatedRoute;
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
      email: this.formBuilder.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
      subject: this.formBuilder.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
      message: this.formBuilder.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required)
    });
    this.mapURL = 'https://goo.gl/maps/rjdq3G6sKLZWrNbE7';
    this.subjectOptions = [{
      label: 'Speaking',
      value: 'speaking'
    }, {
      label: 'Sponsoring',
      value: 'sponsoring'
    }, {
      label: 'Volunteering',
      value: 'volunteering'
    }, {
      label: 'Other',
      value: 'other'
    }];
    this.hotels = [{
      name: 'AmericInn Lodge & Suites',
      description: '',
      url: 'https://www.wyndhamhotels.com/americinn/ankeny-iowa/americinn-lodge-and-suites-ankeny-des-moines/overview',
      features: ['20 rooms @ $84.99/night (normally $99.99/night)', 'Room Block Code: Iowa Code Camp', 'Free WiFi', 'Free hot breakfast', 'Indoor heated pool']
    }];
    this.faqsPrior = [{
      question: 'Can I register and buy a ticket at the event?',
      answer: 'Answer ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }, {
      question: 'Is there a dress code for the event?',
      answer: 'Answer ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }, {
      question: 'Do I need to bring my laptop to the event?',
      answer: 'Answer ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }, {
      question: 'Should I bring my wallet to the event?',
      answer: 'Answer ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }];
    this.faqsAtEvent = [{
      question: 'What parking arrangements are available at the venue?',
      answer: 'Answer ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }, {
      question: 'I booked at the preferred hotel. Are there any shuttles organized to transport me to the event?',
      answer: 'Answer ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }, {
      question: 'Where do I go to check in?',
      answer: 'Answer ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }, {
      question: 'Does the event venue have wi-fi?',
      answer: 'Answer ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }, {
      question: 'Where is the exhibition hall located?',
      answer: 'Answer ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }, {
      question: 'If I lose my ticket, where can I get a replacement?',
      answer: 'Answer ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }, {
      question: 'How do I download the event app?',
      answer: 'Answer ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }];
  }
  ngOnInit() {
    return (0,_home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // const allSessionizeData = await this.activatedRoute.snapshot.data["contact"];
  // this.sessions = allSessionizeData.sessions;

  handleSubjectChange(subject) {
    console.log('handleSubjectChange', subject);
  }
  submitForm() {
    console.log('submit form');
  }
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 66,
    vars: 18,
    consts: [["pageTitle", "Contact"], [1, "bg-gray-dark", "px-16", "py-48", "mb-60"], [1, "max-w-1024", "mx-auto", "text-white"], [1, "grid", "md:grid-cols-2", "gap-64"], [1, "col-span-1"], ["text", "Got Questions?", 3, "reverse"], [1, "mb-32"], [1, "text-right"], ["label", "Name", 3, "control", "required"], ["label", "Email", 3, "control", "required"], ["label", "Subject", 3, "control", "required", "options", "selectionChange"], [4, "ngIf"], ["label", "How can we help?", 3, "control", "required"], [1, "flex", "justify-end"], ["text", "Send Form", 3, "clickEmitter"], ["text", "Need Directions?", 3, "reverse"], ["target", "_blank", 1, "block", 3, "href"], ["src", "assets/images/ffa-enrichment-center.jpg", 1, "w-full", "h-auto"], [1, "not-italic"], ["target", "_blank", 1, "a", "text-orange", 3, "href"], [1, "mb-60"], ["text", "Hotels", 3, "alignment"], [1, "max-w-640", "prose", "mx-auto"], ["text", "FAQ", 3, "alignment"], [1, "max-w-1024", "mx-auto"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-32"], [1, "mb-32", "lede"], [1, "small"], [4, "ngFor", "ngForOf"], [3, "isEven", "question", "answer"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "router-outlet")(1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "app-shell", 0)(3, "section", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "app-underlined-heading", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 6)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Please fill out and send the form below and we will respond as soon as possible. Thanks! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "app-required-asterisk");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "Required field");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div")(17, "form")(18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "app-input-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "app-input-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 6)(23, "app-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectionChange", function ContactComponent_Template_app_select_selectionChange_23_listener($event) {
          return ctx.handleSubjectChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, ContactComponent_ng_container_24_Template, 4, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](26, "app-textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 13)(28, "app-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("clickEmitter", function ContactComponent_Template_app_button_clickEmitter_28_listener() {
          return ctx.submitForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](30, "app-underlined-heading", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 6)(32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, " There's a map for that. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 6)(35, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](36, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "address", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](38, " FFA Enrichment Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](40, " 1055 SW Prairie Trail Parkway");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, " Ankeny, Iowa 50023");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, " Google Map ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "section", 20)(47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](48, "app-underlined-heading", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "div", 22)(50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51, " There are many hotels that are good selections at the intersection of I-35 and SE Oralabor Rd. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "section", 20)(53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](54, "app-underlined-heading", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "div", 24)(56, "div", 25)(57, "div", 4)(58, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](59, "Prior to the Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](60, ContactComponent_ng_container_60_Template, 3, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "div", 4)(62, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](63, "At the Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](64, ContactComponent_ng_container_64_Template, 3, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](65, "app-footer");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("reverse", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.form.controls.name)("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.form.controls.email)("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.form.controls.subject)("required", true)("options", ctx.subjectOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.form.controls.subject.value === "sponsoring");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.form.controls.message)("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("reverse", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("href", ctx.mapURL, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("href", ctx.mapURL, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("alignment", "center");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("alignment", "center");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.faqsPrior.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.faqsAtEvent.length > 0);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterOutlet, _layout_components_sponsorship_doc_link_sponsorship_doc_link_component__WEBPACK_IMPORTED_MODULE_1__.SponsorshipDocLinkComponent, _layout_components_form_components_required_asterisk_required_asterisk_component__WEBPACK_IMPORTED_MODULE_2__.RequiredAsteriskComponent, _layout_components_form_components_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_3__.TextareaComponent, _layout_components_form_components_select_select_component__WEBPACK_IMPORTED_MODULE_4__.SelectComponent, _layout_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__.ButtonComponent, _layout_components_underlined_heading_underlined_heading_component__WEBPACK_IMPORTED_MODULE_6__.UnderlinedHeadingComponent, _layout_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_7__.ShellComponent, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__.HeaderComponent, _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__.FooterComponent, _layout_components_form_components_input_group_input_group_component__WEBPACK_IMPORTED_MODULE_10__.InputGroupComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_11__.FAQComponent],
    encapsulation: 2
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_contact_contact_module_ts.js.map