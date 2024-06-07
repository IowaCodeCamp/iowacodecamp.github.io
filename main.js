"use strict";
(self["webpackChunkladybird"] = self["webpackChunkladybird"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_services_base_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/services/base-modal.service */ 1556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



class AppComponent {
  constructor(vc, baseModalService) {
    this.vc = vc;
    this.baseModalService = baseModalService;
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.baseModalService.setViewContainer(this.vc);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_base_modal_service__WEBPACK_IMPORTED_MODULE_0__.BaseModalService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.module */ 8081);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ 448);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 7240);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);












class AppModule {
  constructor(platformId, appId) {
    this.platformId = platformId;
    this.appId = appId;
    const platform = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(platformId) ? "in the browser" : "on the server";
    console.log(`Running ${platform} with appId=${appId}`);
  }
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.APP_ID));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
    // Instrumentation must be imported after importing StoreModule (config is optional)
    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__.StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }), ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__.StoreDevtoolsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrModule]
  });
})();

/***/ }),

/***/ 8081:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreModule: () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _routing_app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing/app.routing */ 4358);
/* harmony import */ var _store_app_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/app.store */ 8801);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/toast.service */ 485);
/* harmony import */ var _services_base_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/base-modal.service */ 1556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







class CoreModule {
  constructor(core) {
    if (core) {
      throw new Error('CoreModule already instantiated!');
    }
  }
  static #_ = this.ɵfac = function CoreModule_Factory(t) {
    return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](CoreModule, 12));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: CoreModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService, _services_base_modal_service__WEBPACK_IMPORTED_MODULE_3__.BaseModalService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _routing_app_routing__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _store_app_store__WEBPACK_IMPORTED_MODULE_1__.AppStoreModule, _routing_app_routing__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _store_app_store__WEBPACK_IMPORTED_MODULE_1__.AppStoreModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _routing_app_routing__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _store_app_store__WEBPACK_IMPORTED_MODULE_1__.AppStoreModule],
    exports: [_routing_app_routing__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _store_app_store__WEBPACK_IMPORTED_MODULE_1__.AppStoreModule]
  });
})();

/***/ }),

/***/ 4358:
/*!*********************************************!*\
  !*** ./src/app/core/routing/app.routing.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [{
  path: '',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layout_layout_module_ts"), __webpack_require__.e("src_app_public_public_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../public/public.module */ 2772)).then(m => m.PublicModule)
}, {
  path: 'speakers',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layout_layout_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_speakers_speakers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../speakers/speakers.module */ 2574)).then(m => m.SpeakersModule)
}, {
  path: 'sponsors',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layout_layout_module_ts"), __webpack_require__.e("src_app_sponsors_sponsors_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../sponsors/sponsors.module */ 2690)).then(m => m.SponsorsModule)
}, {
  path: 'sessions',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layout_layout_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_sessions_sessions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../sessions/sessions.module */ 1025)).then(m => m.SessionsModule)
}, {
  path: 'schedule',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layout_layout_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_schedule_schedule_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../schedule/schedule.module */ 3585)).then(m => m.ScheduleModule)
}, {
  path: 'about',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layout_layout_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_about_about_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../about/about.module */ 8822)).then(m => m.AboutModule),
  data: {
    title: 'About'
  }
}, {
  path: 'contact',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layout_layout_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_contact_contact_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../contact/contact.module */ 915)).then(m => m.ContactModule),
  data: {
    title: 'Contact'
  }
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 1556:
/*!*****************************************************!*\
  !*** ./src/app/core/services/base-modal.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseModalService: () => (/* binding */ BaseModalService)
/* harmony export */ });
/* harmony import */ var _app_layout_components_modal_components_modal_overlay_modal_overlay_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/layout/components/modal-components/modal-overlay/modal-overlay.component */ 9562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class BaseModalService {
  constructor() {
    this.dialogMap = {};
  }
  open(component) {
    if (!this.overlayComponentRef) {
      this.overlayComponentRef = this.vc.createComponent(_app_layout_components_modal_components_modal_overlay_modal_overlay_component__WEBPACK_IMPORTED_MODULE_0__.ModalOverlayComponent);
    }
    const dialogRef = this.vc.createComponent(component);
    dialogRef.instance.id = 'dialog' + Object.keys(this.dialogMap).length;
    this.dialogMap[dialogRef.instance.id] = dialogRef;
    return dialogRef;
  }
  closeAll() {
    const keys = Object.keys(this.dialogMap);
    keys.forEach(key => {
      this.close(key);
    });
  }
  close(id) {
    this.dialogMap[id].destroy();
    delete this.dialogMap[id];
    if (Object.keys(this.dialogMap).length === 0 && this.overlayComponentRef) {
      this.overlayComponentRef?.destroy();
      this.overlayComponentRef = null;
    }
  }
  setViewContainer(vc) {
    this.vc = vc;
  }
  static #_ = this.ɵfac = function BaseModalService_Factory(t) {
    return new (t || BaseModalService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: BaseModalService,
    factory: BaseModalService.ɵfac
  });
}

/***/ }),

/***/ 485:
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastService: () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 7240);


class ToastService {
  constructor(toast) {
    this.toast = toast;
  }
  showErrorToast(errorMessage) {
    this.toast.error(errorMessage, 'Error', {
      positionClass: 'toast-top-center'
    });
  }
  showSuccessToast(successMessage) {
    this.toast.success(successMessage, 'Success', {
      positionClass: 'toast-top-center'
    });
  }
  showInfoToast(infoMessage) {
    this.toast.info(infoMessage, 'info', {
      positionClass: 'toast-top-center'
    });
  }
  showWarningToast(warningMessage) {
    this.toast.warning(warningMessage, 'Warning', {
      positionClass: 'toast-top-center'
    });
  }
  static #_ = this.ɵfac = function ToastService_Factory(t) {
    return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ToastService,
    factory: ToastService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8801:
/*!*****************************************!*\
  !*** ./src/app/core/store/app.store.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppStoreModule: () => (/* binding */ AppStoreModule)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ 448);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/router-store */ 1794);
/* harmony import */ var _router_custom_serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router/custom-serializer */ 8202);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/data */ 8147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);













class AppStoreModule {
  static #_ = this.ɵfac = function AppStoreModule_Factory(t) {
    return new (t || AppStoreModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppStoreModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.StoreModule.forRoot({
      router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__.routerReducer
    }), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__.StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      serializer: _router_custom_serializer__WEBPACK_IMPORTED_MODULE_1__.CustomSerializer
    }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsModule.forRoot([]), _ngrx_data__WEBPACK_IMPORTED_MODULE_6__.EntityDataModule.forRoot({}), !src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__.StoreDevtoolsModule.instrument() : []]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppStoreModule, {
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.StoreRootModule, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__.StoreRouterConnectingModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsRootModule, _ngrx_data__WEBPACK_IMPORTED_MODULE_6__.EntityDataModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__.StoreDevtoolsModule]
  });
})();

/***/ }),

/***/ 8202:
/*!********************************************************!*\
  !*** ./src/app/core/store/router/custom-serializer.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomSerializer: () => (/* binding */ CustomSerializer)
/* harmony export */ });
class CustomSerializer {
  serialize(routerState) {
    let route = routerState.root;
    const paramMap = new Map(Object.keys(route.params).map(key => [key, route.params[key]]));
    while (route.firstChild) {
      route = route.firstChild;
      Object.keys(route.params).forEach(key => paramMap.set(key, route.params[key]));
    }
    const {
      url,
      root: {
        queryParams
      }
    } = routerState;
    const params = Object.fromEntries(paramMap);
    return {
      url,
      params,
      queryParams
    };
  }
}

/***/ }),

/***/ 9562:
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/components/modal-components/modal-overlay/modal-overlay.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalOverlayComponent: () => (/* binding */ ModalOverlayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_core_services_base_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/services/base-modal.service */ 1556);


class ModalOverlayComponent {
  constructor(viewContainerRef, baseModalService) {
    this.viewContainerRef = viewContainerRef;
    this.baseModalService = baseModalService;
  }
  handleButtonClick() {
    this.baseModalService.closeAll();
  }
  static #_ = this.ɵfac = function ModalOverlayComponent_Factory(t) {
    return new (t || ModalOverlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core_services_base_modal_service__WEBPACK_IMPORTED_MODULE_0__.BaseModalService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ModalOverlayComponent,
    selectors: [["app-modal-overlay"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 0,
    consts: [["type", "button", 1, "fixed", "inset-0", "bg-black", "bg-opacity-80", "z-modal-overlay", 3, "click"], [1, "sr-only"]],
    template: function ModalOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalOverlayComponent_Template_button_click_0_listener() {
          return ctx.handleButtonClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Close dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration production` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  apiUrl: 'http://localhost:81/api',
  tokenAuthority: 'http://localhost:5001'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map