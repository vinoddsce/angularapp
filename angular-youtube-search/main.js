(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <div class=\"page-header\">\n    <h2> YouTube Search Engine\n      <img style=\"float: right;\" *ngIf=\"loading\" src='assets/images/loading.gif' />\n    </h2>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"input-group input-group-lg col-sm-8 col-md-8\">\n      <app-search-box (loading)=\"loading = $event\" (results)=\"updateResults($event)\"></app-search-box>\n    </div>\n  </div>\n\n  <div class=\"row\" style=\"margin-top:20px\">\n    <p>{{message}}</p>\n    <app-search-result *ngFor=\"let result of results\" [result]=\"result\"></app-search-result>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.message = '';
    }
    AppComponent.prototype.updateResults = function (results) {
        this.results = results;
        if (this.results.length === 0) {
            this.message = 'Not found...';
        }
        else {
            this.message = 'Top 10 results:';
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _youtube_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./youtube/search-box/search-box.component */ "./src/app/youtube/search-box/search-box.component.ts");
/* harmony import */ var _youtube_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./youtube/search-result/search-result.component */ "./src/app/youtube/search-result/search-result.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _youtube_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_4__["SearchBoxComponent"],
                _youtube_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_5__["SearchResultComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/youtube-search.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/youtube-search.service.ts ***!
  \****************************************************/
/*! exports provided: YoutubeSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeSearchService", function() { return YoutubeSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _youtube_video_detail_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../youtube/video-detail.model */ "./src/app/youtube/video-detail.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YOUTUBE_API_KEY = 'AIzaSyAZnsT0Ye65X5STH9EBmG_XdWIjL_2HtpA';
var YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
var YoutubeSearchService = /** @class */ (function () {
    function YoutubeSearchService(http) {
        this.http = http;
    }
    YoutubeSearchService.prototype.search = function (query) {
        var params = [
            "q=" + query,
            "key=" + YOUTUBE_API_KEY,
            "part=snippet",
            "type=video",
            "maxResults=10"
        ].join('&');
        var queryUrl = YOUTUBE_API_URL + "?" + params;
        return this.http.get(queryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response['items'].map(function (item) {
                console.log(item);
                return new _youtube_video_detail_model__WEBPACK_IMPORTED_MODULE_3__["VideoDetail"]({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnailUrl: item.snippet.thumbnails.high.url
                });
            });
        }));
    };
    YoutubeSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], YoutubeSearchService);
    return YoutubeSearchService;
}());



/***/ }),

/***/ "./src/app/youtube/search-box/search-box.component.css":
/*!*************************************************************!*\
  !*** ./src/app/youtube/search-box/search-box.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/youtube/search-box/search-box.component.html":
/*!**************************************************************!*\
  !*** ./src/app/youtube/search-box/search-box.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" class=\"form-control\" placeholder=\"Search\" autofocus>"

/***/ }),

/***/ "./src/app/youtube/search-box/search-box.component.ts":
/*!************************************************************!*\
  !*** ./src/app/youtube/search-box/search-box.component.ts ***!
  \************************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_youtube_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/youtube-search.service */ "./src/app/services/youtube-search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent(youtube, el) {
        this.youtube = youtube;
        this.el = el;
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.results = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        // convert the `keyup` event into an observable stream
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.el.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.target.value; }), // extract the value of the input
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (text) { return text.length > 1; }), // filter out if empty
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), // only once every 500ms
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.loading.emit(true); }), // enable loading
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (query) { return _this.youtube.search(query); }), // search, discarding old events if new input comes in
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])()) // produces values only from the most recent inner sequence ignoring previous streams.
            .subscribe(// act on the return of the search
        function (// act on the return of the search
        _results) {
            _this.loading.emit(false);
            _this.results.emit(_results);
        }, function (err) {
            console.log(err);
            _this.loading.emit(false);
        }, function () {
            _this.loading.emit(false);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchBoxComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchBoxComponent.prototype, "results", void 0);
    SearchBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-box',
            template: __webpack_require__(/*! ./search-box.component.html */ "./src/app/youtube/search-box/search-box.component.html"),
            styles: [__webpack_require__(/*! ./search-box.component.css */ "./src/app/youtube/search-box/search-box.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_youtube_search_service__WEBPACK_IMPORTED_MODULE_3__["YoutubeSearchService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());



/***/ }),

/***/ "./src/app/youtube/search-result/search-result.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/youtube/search-result/search-result.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/youtube/search-result/search-result.component.html":
/*!********************************************************************!*\
  !*** ./src/app/youtube/search-result/search-result.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-6 col-md-4\">\n  <div class=\"thumbnail\">\n    <img src=\"{{result.thumbnailUrl}}\">\n    <div class=\"caption\">\n      <h4>{{result.title}}</h4>\n      <p>{{result.description}}</p>\n      <p><a href=\"{{result.videoUrl}}\" class=\"btn btn-default\" role=\"button\">\n          Watch</a>\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/youtube/search-result/search-result.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/youtube/search-result/search-result.component.ts ***!
  \******************************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_detail_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../video-detail.model */ "./src/app/youtube/video-detail.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent() {
    }
    SearchResultComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _video_detail_model__WEBPACK_IMPORTED_MODULE_1__["VideoDetail"])
    ], SearchResultComponent.prototype, "result", void 0);
    SearchResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-result',
            template: __webpack_require__(/*! ./search-result.component.html */ "./src/app/youtube/search-result/search-result.component.html"),
            styles: [__webpack_require__(/*! ./search-result.component.css */ "./src/app/youtube/search-result/search-result.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "./src/app/youtube/video-detail.model.ts":
/*!***********************************************!*\
  !*** ./src/app/youtube/video-detail.model.ts ***!
  \***********************************************/
/*! exports provided: VideoDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDetail", function() { return VideoDetail; });
var VideoDetail = /** @class */ (function () {
    function VideoDetail(obj) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.videoUrl = obj && obj.videoUrl || "https://www.youtube.com/watch?v=" + this.id;
    }
    return VideoDetail;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vinodkumar/Documents/Technologies/AngularSpring/angular-youtube-search/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map