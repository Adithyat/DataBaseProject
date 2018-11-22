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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drinkers/drinkers.component */ "./src/app/drinkers/drinkers.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _modification_modification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modification/modification.component */ "./src/app/modification/modification.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bars'
    },
    {
        path: 'static',
        pathMatch: 'full',
        redirectTo: 'bars'
    },
    {
        path: 'bars',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    },
    {
        path: 'bars/:bar',
        pathMatch: 'full',
        component: _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__["BarDetailsComponent"]
    },
    {
        path: 'beers',
        pathMatch: 'full',
        component: _beers_beers_component__WEBPACK_IMPORTED_MODULE_5__["BeersComponent"]
    },
    {
        path: 'beers/:beer',
        pathMatch: 'full',
        component: _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_4__["BeerDetailsComponent"]
    },
    {
        path: 'beers',
        pathMatch: 'full',
        component: _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_6__["DrinkersComponent"]
    },
    {
        path: 'drinkers',
        pathMatch: 'full',
        component: _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_6__["DrinkersComponent"]
    },
    {
        path: 'drinkers/:drinker',
        pathMatch: 'full',
        component: _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_7__["DrinkerDetailsComponent"]
    },
    {
        path: 'modification',
        pathMatch: 'full',
        component: _modification_modification_component__WEBPACK_IMPORTED_MODULE_8__["ModificationComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Bar Beer Drinker</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/bars\">Bars</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/beers\">Beers</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/drinkers\">Drinkers</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link\" routerLink=\"/modification\">Modification</a>\n          </li>\n      </ul>\n    </div>\n  </nav>\n  \n  <router-outlet></router-outlet>"

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
        this.title = 'bar-beer-drinker-ui';
    }
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
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drinkers/drinkers.component */ "./src/app/drinkers/drinkers.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _modification_modification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modification/modification.component */ "./src/app/modification/modification.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"],
                _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_10__["BarDetailsComponent"],
                _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_11__["BeerDetailsComponent"],
                _beers_beers_component__WEBPACK_IMPORTED_MODULE_12__["BeersComponent"],
                _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_13__["DrinkersComponent"],
                _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_14__["DrinkerDetailsComponent"],
                _modification_modification_component__WEBPACK_IMPORTED_MODULE_15__["ModificationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__["InputTextareaModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-details/bar-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1kZXRhaWxzL2Jhci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">{{ barName }}</h1>\n        <p class=\"bar-details\" *ngIf=\"barDetails\">\n            {{ barDetails?.addr }} <span *ngIf=\"barDetails.addr && barDetails.city\">|</span> {{ barDetails?.city }}\n            <br>\n            {{ barDetails?.phone }}\n        </p>\n    </div>\n</div>\n\n<div class=\"container\">\n    <h2 class=\"text-center font-weight-light\">Stats</h2>\n    <br>\n    \n    <div class=\"container\">\n        <br>\n        <div id=\"bargraph1\"></div>\n       </div>\n    <div class=\"container\">\n        <br>\n        <div id=\"bargraph2\"></div>\n       </div>\n    <div class=\"container\">\n        <br>\n        <div id=\"bargraph3\"></div>\n       </div>\n       <div class=\"container\">\n        <br>\n    <div id=\"bargraph4\"></div>\n       </div>   \n    <div class=\"container\">\n        <br>\n        <div id=\"bargraph5\"></div>\n       </div>      \n</div>"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.ts ***!
  \******************************************************/
/*! exports provided: BarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarDetailsComponent", function() { return BarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarDetailsComponent = /** @class */ (function () {
    function BarDetailsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
            barService.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server. Please check the browser console.');
                }
            });
            barService.getTopSpenders(_this.barName).subscribe(function (data) {
                //
                var name = [];
                var totals = [];
                data.forEach(function (item) {
                    name.push(item.name);
                    totals.push(item.grand);
                });
                ;
                // use the line below to render the graph
                _this.renderChart1(name, totals);
            });
            barService.getTopSellers(_this.barName).subscribe(function (data) {
                var name = [];
                var totals = [];
                data.forEach(function (item) {
                    name.push(item.beer);
                    totals.push(item.quantity);
                });
                ;
                // use the line below to render the graph
                _this.renderChart2(name, totals);
            });
            barService.getTopSellers(_this.barName).subscribe(function (data) {
                var name = [];
                var totals = [];
                data.forEach(function (item) {
                    name.push(item.seller);
                    totals.push(item.quantity);
                });
                ;
                // use the line below to render the graph
                _this.renderChart3(name, totals);
            });
            barService.getBusyTime(_this.barName).subscribe(function (data) {
                var name = [];
                var totals = [];
                data.forEach(function (item) {
                    name.push(item.day);
                    totals.push(item.count);
                });
                ;
                // use the line below to render the graph
                _this.renderChart4(name, totals);
            });
            barService.getBusyWeek(_this.barName).subscribe(function (data) {
                var name = [];
                var totals = [];
                data.forEach(function (item) {
                    name.push(item.date);
                    totals.push(item.count);
                });
                ;
                // use the line below to render the graph
                _this.renderChart5(name, totals);
            });
        });
    }
    BarDetailsComponent.prototype.renderChart1 = function (drinkers, dtotals) {
        Highcharts.chart('bargraph1', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Spenders'
            },
            xAxis: {
                categories: drinkers,
                title: {
                    text: 'Drinkers'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Amount Spent'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: dtotals
                }]
        });
    };
    BarDetailsComponent.prototype.renderChart2 = function (beers, btotals) {
        Highcharts.chart('bargraph2', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Beers'
            },
            xAxis: {
                categories: beers,
                title: {
                    text: 'Beers'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Quantity Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: btotals
                }]
        });
    };
    BarDetailsComponent.prototype.renderChart3 = function (manf, mtotals) {
        Highcharts.chart('bargraph3', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Sellers'
            },
            xAxis: {
                categories: manf,
                title: {
                    text: 'Manufacturers'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Quantity Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: mtotals
                }]
        });
    };
    BarDetailsComponent.prototype.renderChart4 = function (days, atotals) {
        Highcharts.chart('bargraph4', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Busiest Days'
            },
            xAxis: {
                categories: days,
                title: {
                    text: 'Week Days'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Quantity Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: atotals
                }]
        });
    };
    BarDetailsComponent.prototype.renderChart5 = function (weeks, wtotals) {
        Highcharts.chart('bargraph5', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Busiest Weeks'
            },
            xAxis: {
                categories: weeks,
                title: {
                    text: 'Weeks'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Quantity Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: wtotals
                }]
        });
    };
    BarDetailsComponent.prototype.ngOnInit = function () {
    };
    BarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-details',
            template: __webpack_require__(/*! ./bar-details.component.html */ "./src/app/bar-details/bar-details.component.html"),
            styles: [__webpack_require__(/*! ./bar-details.component.css */ "./src/app/bar-details/bar-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BarDetailsComponent);
    return BarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bars.service.ts":
/*!*********************************!*\
  !*** ./src/app/bars.service.ts ***!
  \*********************************/
/*! exports provided: BarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsService", function() { return BarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsService = /** @class */ (function () {
    function BarsService(http) {
        this.http = http;
    }
    BarsService.prototype.getBars = function () {
        return this.http.get('/api/bar');
    };
    BarsService.prototype.getQ = function (title) {
        console.log(title);
        return this.http.get('/api/modification/' + title);
    };
    BarsService.prototype.getBar = function (bar) {
        return this.http.get('/api/bar/' + bar);
    };
    BarsService.prototype.getMenu = function (bar) {
        return this.http.get('/api/menu/' + bar);
    };
    BarsService.prototype.getTopSpenders = function (bar) {
        return this.http.get('/api/barspender/' + bar);
    };
    BarsService.prototype.getTopSellers = function (bar) {
        return this.http.get('/api/barseller/' + bar);
    };
    BarsService.prototype.getBusyTime = function (bar) {
        return this.http.get('/api/bartime/' + bar);
    };
    BarsService.prototype.getBusyWeek = function (bar) {
        return this.http.get('/api/barweek/' + bar);
    };
    BarsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BarsService);
    return BarsService;
}());



/***/ }),

/***/ "./src/app/beer-details/beer-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXItZGV0YWlscy9iZWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">{{ beerName }}</h1>\n\n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <div class=\"container\">\n        <br>\n        <div id=\"bargraph1\"></div>\n       </div>\n    <div class=\"container\">\n        <br>\n        <div id=\"bargraph2\"></div>\n       </div>\n    <div class=\"container\">\n        <br>\n        <div id=\"bargraph3\"></div>\n       </div>\n       <div class=\"container\">\n  </div>"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.ts ***!
  \********************************************************/
/*! exports provided: BeerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerDetailsComponent", function() { return BeerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerDetailsComponent = /** @class */ (function () {
    function BeerDetailsComponent(beerService, route) {
        var _this = this;
        this.beerService = beerService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.beerName = paramMap.get('beer');
            _this.beerService.getBarsSelling(_this.beerName).subscribe(function (data) {
                //
                var name = [];
                var totals = [];
                data.forEach(function (item) {
                    //console.log(data)
                    name.push(item.name);
                    //console.log(name)
                    totals.push(item.total);
                });
                // use the line below to render the graph
                _this.renderChart1(name, totals);
            });
            _this.beerService.getBeerConsumer(_this.beerName).subscribe(function (data) {
                var name = [];
                var totals = [];
                data.forEach(function (item) {
                    name.push(item.name);
                    totals.push(item.total);
                });
                ;
                // use the line below to render the graph
                _this.renderChart2(name, totals);
            });
            _this.beerService.getBeerDay(_this.beerName).subscribe(function (data) {
                var name = [];
                var totals = [];
                data.forEach(function (item) {
                    name.push(item.day);
                    totals.push(item.total);
                });
                ;
                // use the line below to render the graph
                _this.renderChart3(name, totals);
            });
        });
    }
    BeerDetailsComponent.prototype.renderChart1 = function (name, totals) {
        Highcharts.chart('bargraph1', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Bars that Sell the Most'
            },
            xAxis: {
                categories: name,
                title: {
                    text: 'Bars'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Amount Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: totals
                }]
        });
    };
    BeerDetailsComponent.prototype.renderChart2 = function (name, totals) {
        Highcharts.chart('bargraph2', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Drinkers Who are Biggest Consumers'
            },
            xAxis: {
                categories: name,
                title: {
                    text: 'Drinkers'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Amount Consumed'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: totals
                }]
        });
    };
    BeerDetailsComponent.prototype.renderChart3 = function (name, totals) {
        Highcharts.chart('bargraph3', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Most Popular Day'
            },
            xAxis: {
                categories: name,
                title: {
                    text: 'Day'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Amount Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: totals
                }]
        });
    };
    BeerDetailsComponent.prototype.ngOnInit = function () {
    };
    BeerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-details',
            template: __webpack_require__(/*! ./beer-details.component.html */ "./src/app/beer-details/beer-details.component.html"),
            styles: [__webpack_require__(/*! ./beer-details.component.css */ "./src/app/beer-details/beer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BeerDetailsComponent);
    return BeerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/beers.service.ts":
/*!**********************************!*\
  !*** ./src/app/beers.service.ts ***!
  \**********************************/
/*! exports provided: BeersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersService", function() { return BeersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersService = /** @class */ (function () {
    function BeersService(http) {
        this.http = http;
    }
    BeersService.prototype.getBeers = function () {
        return this.http.get('/api/beer');
    };
    BeersService.prototype.getBarsSelling = function (name) {
        return this.http.get('/api/beerselling/' + name);
    };
    BeersService.prototype.getBeerConsumer = function (name) {
        return this.http.get('/api/beerconsumer/' + name);
    };
    BeersService.prototype.getBeerDay = function (name) {
        return this.http.get('/api/beerday/' + name);
    };
    BeersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeersService);
    return BeersService;
}());



/***/ }),

/***/ "./src/app/beers/beers.component.css":
/*!*******************************************!*\
  !*** ./src/app/beers/beers.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXJzL2JlZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/beers/beers.component.html":
/*!********************************************!*\
  !*** ./src/app/beers/beers.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Beers Page</h1>\n     \n  </div>\n</div>\n<br>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Beers</h2>\n  <p-table [value]=\"beers\" >\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Name</th>\n        <th>Manufacturer</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-beer>\n      <tr>\n        <td><a routerLink=\"/beers/{{ beer.name }}\">{{ beer.name }}</a></td>\n        <td>{{ beer.manf }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>"

/***/ }),

/***/ "./src/app/beers/beers.component.ts":
/*!******************************************!*\
  !*** ./src/app/beers/beers.component.ts ***!
  \******************************************/
/*! exports provided: BeersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersComponent", function() { return BeersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersComponent = /** @class */ (function () {
    function BeersComponent(beerService) {
        var _this = this;
        this.beerService = beerService;
        this.beerService.getBeers().subscribe(function (data) {
            _this.beers = data;
        });
    }
    BeersComponent.prototype.ngOnInit = function () {
    };
    BeersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beers',
            template: __webpack_require__(/*! ./beers.component.html */ "./src/app/beers/beers.component.html"),
            styles: [__webpack_require__(/*! ./beers.component.css */ "./src/app/beers/beers.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"]])
    ], BeersComponent);
    return BeersComponent;
}());



/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItZGV0YWlscy9kcmlua2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">{{ drinkerName }}</h1>\n    </div>\n</div>\n\n<div class=\"container\">\n    <h2 class=\"text-center font-weight-light\">Stats</h2>\n    <br>\n    <div class=\"container\">\n        <br>\n        <div id=\"bargraph1\"></div>\n       </div>\n    <div class=\"container\">\n        <br>\n        <div id=\"bargraph2\"></div>\n       </div>\n    <div class=\"container\">\n        <p-table [value]=\"drinkerInfo\">\n            <ng-template pTemplate=\"header\">\n                <tr>\n                    <th>Bar</th>\n                    <th>Bill ID</th>\n                    <th>Item Name</th>\n                    <th>Quantity</th>\n                    <th>Date</th>\n                    <th>Time</th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-td>\n                <tr>\n                    <td><a routerLink=\"/bars/{{ td.bar }}\">{{ td.bar }}</a></td>\n                    <td>{{ td.bill }}</td>\n                    <td>{{ td.item }}</td>\n                    <td>{{ td.quantity }}</td>\n                    <td>{{ td.date }}</td>\n                    <td>{{ td.time }}</td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.ts ***!
  \**************************************************************/
/*! exports provided: DrinkerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerDetailsComponent", function() { return DrinkerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrinkerDetailsComponent = /** @class */ (function () {
    function DrinkerDetailsComponent(drinkerService, route) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.drinkerName = paramMap.get('drinker');
            drinkerService.getDrinker(_this.drinkerName).subscribe(function (data) {
                _this.drinkerDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server. Please check the browser console.');
                }
            });
            drinkerService.getDrinkerTrans(_this.drinkerName).subscribe(function (data) {
                console.log(data);
                _this.drinkerInfo = data;
            });
            drinkerService.getDrinkerBills(_this.drinkerName).subscribe(function (data) {
                //
                var name = [];
                var totals = [];
                data.forEach(function (item) {
                    name.push(item.bar);
                    totals.push(item.total);
                });
                ;
                // use the line below to render the graph
                _this.renderChart1(name, totals);
            });
            drinkerService.getDrinkerLikes(_this.drinkerName).subscribe(function (data) {
                //
                var name = [];
                var totals = [];
                data.forEach(function (item) {
                    name.push(item.beer);
                    totals.push(item.total);
                });
                ;
                // use the line below to render the graph
                _this.renderChart2(name, totals);
            });
        });
    }
    DrinkerDetailsComponent.prototype.renderChart1 = function (name, totals) {
        Highcharts.chart('bargraph1', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Spending in different Bars'
            },
            xAxis: {
                categories: name,
                title: {
                    text: 'Bars'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Amount Spent'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: totals
                }]
        });
    };
    DrinkerDetailsComponent.prototype.renderChart2 = function (name, totals) {
        Highcharts.chart('bargraph2', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Most Ordered Beers'
            },
            xAxis: {
                categories: name,
                title: {
                    text: 'Beer'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Amount'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: totals
                }]
        });
    };
    DrinkerDetailsComponent.prototype.ngOnInit = function () {
    };
    DrinkerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-details',
            template: __webpack_require__(/*! ./drinker-details.component.html */ "./src/app/drinker-details/drinker-details.component.html"),
            styles: [__webpack_require__(/*! ./drinker-details.component.css */ "./src/app/drinker-details/drinker-details.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_2__["DrinkersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DrinkerDetailsComponent);
    return DrinkerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/drinkers.service.ts":
/*!*************************************!*\
  !*** ./src/app/drinkers.service.ts ***!
  \*************************************/
/*! exports provided: DrinkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkersService", function() { return DrinkersService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkersService = /** @class */ (function () {
    function DrinkersService(http) {
        this.http = http;
    }
    DrinkersService.prototype.getDrinkers = function () {
        return this.http.get('/api/drinker');
    };
    DrinkersService.prototype.getDrinker = function (name) {
        return this.http.get('/api/drinker/' + name);
    };
    DrinkersService.prototype.getDrinkerTrans = function (name) {
        return this.http.get('/api/drinkertran/' + name);
    };
    DrinkersService.prototype.getDrinkerBills = function (name) {
        return this.http.get('/api/drinkerbill/' + name);
    };
    DrinkersService.prototype.getDrinkerLikes = function (name) {
        return this.http.get('/api/likes/' + name);
    };
    DrinkersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DrinkersService);
    return DrinkersService;
}());



/***/ }),

/***/ "./src/app/drinkers/drinkers.component.css":
/*!*************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXJzL2RyaW5rZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/drinkers/drinkers.component.html":
/*!**************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Drinker Page</h1>\n  \n    </div>\n  </div>\n  \n  <div class=\"container\">\n  \n      <p-table [value]=\"drinkers\" >\n        <ng-template pTemplate=\"header\">\n            <tr>\n              <th>Name</th>\n              <th>Address</th>\n              <th>State</th>\n              <th>City</th>\n              <th>Phone</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-drinker>\n            <tr>\n              <td>\n                <a routerLink=\"/drinkers/{{ drinker.name }}\">\n                  {{ drinker.name }}\n                </a>\n              </td>\n              <td>{{ drinker.address }}</td>\n              <td>{{ drinker.state }}</td>\n              <td>{{ drinker.city }}</td>\n              <td>{{ drinker.phone }}</td>\n            </tr>\n        </ng-template>\n      </p-table>\n    </div>\n  \n    <br><br>"

/***/ }),

/***/ "./src/app/drinkers/drinkers.component.ts":
/*!************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.ts ***!
  \************************************************/
/*! exports provided: DrinkersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkersComponent", function() { return DrinkersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkersComponent = /** @class */ (function () {
    function DrinkersComponent(drinkerService) {
        this.drinkerService = drinkerService;
        this.getDrinkers();
    }
    DrinkersComponent.prototype.ngOnInit = function () {
    };
    DrinkersComponent.prototype.getDrinkers = function () {
        var _this = this;
        this.drinkerService.getDrinkers().subscribe(function (data) {
            _this.drinkers = data;
        }, function (error) {
            alert('Could not retrieve a list of bars');
        });
    };
    DrinkersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinkers',
            template: __webpack_require__(/*! ./drinkers.component.html */ "./src/app/drinkers/drinkers.component.html"),
            styles: [__webpack_require__(/*! ./drinkers.component.css */ "./src/app/drinkers/drinkers.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_1__["DrinkersService"]])
    ], DrinkersComponent);
    return DrinkersComponent;
}());



/***/ }),

/***/ "./src/app/modification/modification.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modification/modification.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmaWNhdGlvbi9tb2RpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modification/modification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modification/modification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Modification Page</h1>\n\n  </div>\n</div>\n<div class=\"container\">\n    <input type=\"text\"  #titleInput>\n</div>\n<div class=\"container\">\n  \n  <button type=\"submit\" (click) = 'addTodo(titleInput.value)'>Submit</button>\n</div>\n<div class=\"container\">\n    <p>{{ out }}</p>\n  </div>"

/***/ }),

/***/ "./src/app/modification/modification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modification/modification.component.ts ***!
  \********************************************************/
/*! exports provided: ModificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationComponent", function() { return ModificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModificationComponent = /** @class */ (function () {
    function ModificationComponent(barService, route) {
        this.barService = barService;
        this.route = route;
        barService.getQ('select * from manfs').subscribe();
    }
    ModificationComponent.prototype.addTodo = function (title) {
        var _this = this;
        this.input = title;
        this.barService.getQ(this.input).subscribe(function (data) {
            console.log(_this.input);
            _this.out = data;
        });
    };
    ModificationComponent.prototype.ngOnInit = function () {
    };
    ModificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modification',
            template: __webpack_require__(/*! ./modification.component.html */ "./src/app/modification/modification.component.html"),
            styles: [__webpack_require__(/*! ./modification.component.css */ "./src/app/modification/modification.component.css")],
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ModificationComponent);
    return ModificationComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Bar Page</h1>\n\n  </div>\n</div>\n\n<div class=\"container\">\n\n    <p-table [value]=\"bars\" >\n      <ng-template pTemplate=\"header\">\n          <tr>\n            <th>Name</th>\n            <th>Licence</th>\n            <th>Address</th>\n            <th>State</th>\n            <th>City</th>\n            <th>Phone</th>\n          </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-bar>\n          <tr>\n            <td>\n              <a routerLink=\"/bars/{{ bar.name }}\">\n                {{ bar.name }}\n              </a>\n            </td>\n            <td>{{ bar.license }}</td>\n            <td>{{ bar.address }}</td>\n            <td>{{ bar.state }}</td>\n            <td>{{ bar.city }}</td>\n            <td>{{ bar.phone }}</td>\n          </tr>\n      </ng-template>\n    </p-table>\n  </div>\n\n  <br><br>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(barService) {
        this.barService = barService;
        this.getBars();
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert('Could not retrieve a list of bars');
        });
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Adithya\Desktop\DB_inst\application\bar-beer-drinker-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map