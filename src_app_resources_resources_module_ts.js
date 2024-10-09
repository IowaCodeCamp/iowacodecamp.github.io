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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _layout_components_underlined_heading_underlined_heading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layout/components/underlined-heading/underlined-heading.component */ 1976);
/* harmony import */ var _layout_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/components/shell/shell.component */ 1279);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 8246);
/* harmony import */ var _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layout/components/footer/footer.component */ 7114);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);








const _c0 = ["discordLinkInput"];
function ResourcesComponent_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Copied to Clipboard! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function ResourcesComponent_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.discordLink, " ");
  }
}
class ResourcesComponent {
  constructor(activatedRoute) {
    this.activatedRoute = activatedRoute;
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
    return new (t || ResourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ResourcesComponent,
    selectors: [["app-resources"]],
    viewQuery: function ResourcesComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.discordField = _t.first);
      }
    },
    decls: 48,
    vars: 6,
    consts: [["pageTitle", "2024 Resources"], [1, "max-w-640", "prose", "mx-auto", "mb-48"], [1, "mx-auto", "mb-60"], [1, "flex", "flex-col", "gap-60", "items-center", "lg:items-stretch", "lg:px-32", "lg:grid", "lg:grid-cols-3", "lg:gap-48", "text-center"], [1, "flex"], [1, "flex", "flex-col", "gap-16"], [1, "w-100", "mx-auto"], ["alt", "Google forms logo", "src", "assets/images/icon-google-forms.png", 1, "object-fit", "aspect-square"], ["alignment", "center", 3, "text"], [1, "mt-auto"], ["target", "_blank", 1, "cursor-not-allowed", "bg-black/60", "opacity-20", "block", "border-2", "text-center", "rounded-8", "px-16", "py-8", "rounded", "transition", "w-full", "border-transparent"], [1, "strong", "text-white"], ["alt", "Sessionize logo", "src", "assets/images/icon-sessionize.png", 1, "object-fit", "aspect-square"], ["target", "_blank", "href", "https://iowa-code-camp-fall-2024.sessionize.com/", 1, "block", "border-2", "text-center", "rounded-8", "px-16", "py-8", "rounded", "transition", "w-full", "bg-red-orange", "border-transparent"], ["alt", "Discord logo", "src", "assets/images/icon-discord.png", 1, "object-fit", "aspect-square"], [1, "mt-auto", "relative"], ["type", "button", "title", "Click to copy link", 1, "block", "border-2", "text-center", "rounded-8", "px-16", "py-8", "rounded", "transition", "w-full", "bg-red-orange", "border-transparent", 3, "click"], [4, "ngIf"], ["type", "hidden", 1, "hidden", 3, "value"], ["discordLinkInput", ""]],
    template: function ResourcesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "router-outlet")(1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "app-shell", 0)(3, "div", 1)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Thank you for participating in the 2024 Iowa Code Camp! Below you'll find helpful resources to help your event experience and stay connected with updates! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2)(7, "ul", 3)(8, "li", 4)(9, "article", 5)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-underlined-heading", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Help us improve Iowa Code Camp by providing valuable feedback on sessions you attended.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 9)(17, "div", 10)(18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Fill out an Evaluation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "li", 4)(21, "article", 5)(22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "app-underlined-heading", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Quickly and easily access up-to-date session and speaker information using our Sessionize progressive web app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 9)(29, "a", 13)(30, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Check Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "li", 4)(33, "article", 5)(34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "app-underlined-heading", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Network with other professionals, access exclusive resources, and get real-time support from our community! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 15)(41, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResourcesComponent_Template_button_click_41_listener() {
          return ctx.handleDiscordButtonClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, ResourcesComponent_ng_container_43_Template, 2, 0, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, ResourcesComponent_ng_container_44_Template, 2, 1, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "app-footer");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", "Evaluate Sessions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", "Check Event Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", "Join Our Discord!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showCopiedMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showCopiedMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.discordLink);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _layout_components_underlined_heading_underlined_heading_component__WEBPACK_IMPORTED_MODULE_1__.UnderlinedHeadingComponent, _layout_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_2__.ShellComponent, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
    encapsulation: 2
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_resources_resources_module_ts.js.map