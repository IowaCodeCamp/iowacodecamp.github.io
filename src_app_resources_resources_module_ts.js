"use strict";
(self["webpackChunkladybird"] = self["webpackChunkladybird"] || []).push([["src_app_resources_resources_module_ts"],{

/***/ 4806:
/*!***********************************************!*\
  !*** ./src/app/resources/resources.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourcesModule: () => (/* binding */ ResourcesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/layout/layout.module */ 4470);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/shared.module */ 6208);
/* harmony import */ var _views_resources_container_resources_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/resources-container/resources-container.component */ 7098);
/* harmony import */ var _views_resources_resources_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/resources/resources.component */ 8064);
/* harmony import */ var _routing_resources_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routing/resources.routing */ 8544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);







class ResourcesModule {
  static #_ = this.ɵfac = function ResourcesModule_Factory(t) {
    return new (t || ResourcesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ResourcesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_routing_resources_routing__WEBPACK_IMPORTED_MODULE_4__.ResourcesRoutingModule, _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ResourcesModule, {
    declarations: [_views_resources_resources_component__WEBPACK_IMPORTED_MODULE_3__.ResourcesComponent, _views_resources_container_resources_container_component__WEBPACK_IMPORTED_MODULE_2__.ResourcesContainerComponent],
    imports: [_routing_resources_routing__WEBPACK_IMPORTED_MODULE_4__.ResourcesRoutingModule, _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ }),

/***/ 8544:
/*!********************************************************!*\
  !*** ./src/app/resources/routing/resources.routing.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourcesRoutingModule: () => (/* binding */ ResourcesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _views_resources_container_resources_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/resources-container/resources-container.component */ 7098);
/* harmony import */ var _views_resources_resources_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/resources/resources.component */ 8064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);






const routes = [{
  path: '',
  component: _views_resources_container_resources_container_component__WEBPACK_IMPORTED_MODULE_0__.ResourcesContainerComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    component: _views_resources_resources_component__WEBPACK_IMPORTED_MODULE_1__.ResourcesComponent
    // resolve: {
    //   resources: resourcesDataResolver
    // }
  }]
}];

class ResourcesRoutingModule {
  static #_ = this.ɵfac = function ResourcesRoutingModule_Factory(t) {
    return new (t || ResourcesRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ResourcesRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ResourcesRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 7098:
/*!**************************************************************************************!*\
  !*** ./src/app/resources/views/resources-container/resources-container.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourcesContainerComponent: () => (/* binding */ ResourcesContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class ResourcesContainerComponent {
  constructor() {}
  static #_ = this.ɵfac = function ResourcesContainerComponent_Factory(t) {
    return new (t || ResourcesContainerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ResourcesContainerComponent,
    selectors: [["app-resources-container"]],
    decls: 1,
    vars: 0,
    template: function ResourcesContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8064:
/*!******************************************************************!*\
  !*** ./src/app/resources/views/resources/resources.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourcesComponent: () => (/* binding */ ResourcesComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app.config */ 7110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _layout_components_underlined_heading_underlined_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/components/underlined-heading/underlined-heading.component */ 1976);
/* harmony import */ var _layout_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layout/components/shell/shell.component */ 1279);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 8246);
/* harmony import */ var _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layout/components/footer/footer.component */ 7114);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);









const _c0 = ["discordLinkInput"];
function ResourcesComponent_ng_container_3_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Copied to Clipboard! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function ResourcesComponent_ng_container_3_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r4.discordLink, " ");
  }
}
function ResourcesComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "article", 7)(8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "app-underlined-heading", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Help us improve Iowa Code Camp by providing valuable feedback on sessions you attended.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 11)(15, "a", 12)(16, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Fill out an Evaluation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "li", 6)(19, "article", 7)(20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "app-underlined-heading", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " Quickly and easily access up-to-date session and speaker information using our Sessionize progressive web app. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 11)(27, "a", 15)(28, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Check Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "li", 6)(31, "article", 7)(32, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "app-underlined-heading", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " Network with other professionals, access exclusive resources, and get real-time support from our community! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 17)(39, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ResourcesComponent_ng_container_3_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.handleDiscordButtonClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, ResourcesComponent_ng_container_3_ng_container_41_Template, 2, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, ResourcesComponent_ng_container_3_ng_container_42_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Thank you for participating in the ", ctx_r0.year, " Iowa Code Camp! Below you'll find helpful resources to help your event experience and stay connected with updates! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", "Evaluate Sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", "Check Event Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", "Join Our Discord!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showCopiedMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.showCopiedMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r0.discordLink);
  }
}
function ResourcesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Check back soon for the ", ctx_r2.year, " attendee resources! ");
  }
}
class ResourcesComponent {
  constructor(activatedRoute) {
    this.activatedRoute = activatedRoute;
    this.year = _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig.year;
    this.showResources = _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig.showResources;
    this.discordLink = "https://discord.gg/ebkUh4Daey";
    this.isCopying = false;
    this.showCopiedMessage = false;
  }
  ngOnInit() {
    return (0,_home_runner_work_WebSite_WebSite_browser_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // this.resourcesData = await this.activatedRoute.snapshot.data["resources"];

  handleDiscordButtonClick() {
    if (!this.discordField) {
      return;
    }
    try {
      if (this.isCopying) {
        return;
      }
      this.isCopying = true;
      const text = this.discordField.nativeElement.value;
      navigator.clipboard.writeText(text);
      this.showCopiedMessage = true;
      setTimeout(() => {
        this.showCopiedMessage = false;
        this.isCopying = false;
      }, 1000);
    } catch (e) {
      console.log("Caught: ", e);
    }
  }
  static #_ = this.ɵfac = function ResourcesComponent_Factory(t) {
    return new (t || ResourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ResourcesComponent,
    selectors: [["app-resources"]],
    viewQuery: function ResourcesComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.discordField = _t.first);
      }
    },
    decls: 7,
    vars: 3,
    consts: [[3, "pageTitle"], [4, "ngIf", "ngIfElse"], ["pending", ""], [1, "max-w-640", "prose", "mx-auto", "mb-48"], [1, "mx-auto", "mb-60"], [1, "flex", "flex-col", "gap-60", "items-center", "lg:items-stretch", "lg:px-32", "lg:grid", "lg:grid-cols-3", "lg:gap-48", "text-center"], [1, "flex"], [1, "flex", "flex-col", "gap-16"], [1, "w-100", "mx-auto"], ["alt", "Google forms logo", "src", "assets/images/icon-google-forms.png", 1, "object-fit", "aspect-square"], ["alignment", "center", 3, "text"], [1, "mt-auto"], ["target", "_blank", "href", "https://forms.gle/BzUusvDegUh1puew9", 1, "block", "border-2", "text-center", "rounded-8", "px-16", "py-8", "rounded", "transition", "w-full", "bg-red-orange", "border-transparent"], [1, "strong", "text-white"], ["alt", "Sessionize logo", "src", "assets/images/icon-sessionize.png", 1, "object-fit", "aspect-square"], ["target", "_blank", "href", "https://iowa-code-camp-fall-2024.sessionize.com/", 1, "block", "border-2", "text-center", "rounded-8", "px-16", "py-8", "rounded", "transition", "w-full", "bg-red-orange", "border-transparent"], ["alt", "Discord logo", "src", "assets/images/icon-discord.png", 1, "object-fit", "aspect-square"], [1, "mt-auto", "relative"], ["type", "button", "title", "Click to copy link", 1, "block", "border-2", "text-center", "rounded-8", "px-16", "py-8", "rounded", "transition", "w-full", "bg-red-orange", "border-transparent", 3, "click"], [4, "ngIf"], ["type", "hidden", 1, "hidden", 3, "value"], ["discordLinkInput", ""], [1, "max-w-640", "mx-auto", "mb-60", "prose", "text-center"]],
    template: function ResourcesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "router-outlet")(1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-shell", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ResourcesComponent_ng_container_3_Template, 45, 7, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ResourcesComponent_ng_template_4_Template, 3, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-footer");
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageTitle", ctx.year + " Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showResources)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _layout_components_underlined_heading_underlined_heading_component__WEBPACK_IMPORTED_MODULE_2__.UnderlinedHeadingComponent, _layout_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_3__.ShellComponent, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
    encapsulation: 2
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_resources_resources_module_ts.js.map