webpackJsonp([1],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnotatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_absolute_drag_absolute_drag__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_document_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pdfjs_dist_build_pdf__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pdfjs_dist_build_pdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_pdfjs_dist_build_pdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pdf_annotate__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pdf_annotate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_pdf_annotate__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










//declare let global: any;
/// https://www.sitepoint.com/custom-pdf-rendering/
var AnnotatePage = (function () {
    function AnnotatePage(navCtrl, navParams, documentService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.documentService = documentService;
        this.DOCUMENT_ID = "blockusign/pdf1.txt"; // @TODO not being used, delete in furture
        this.UI = __WEBPACK_IMPORTED_MODULE_9_pdf_annotate___default.a;
        this.containerId = "pageContainer1";
        this.canvasId = "canvas1";
        this.selectedElement = null;
        this.prevElement = null;
        this.currentX = 0;
        this.currentY = 0;
        this.allowResize = false;
    }
    AnnotatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        $(".dropzone").unbind();
        //let pdfData = this.loadPDFData(); // loads pdf data from localStorage, make sure you uploaded it from home.js
        if (this.navParams.get("guid") && !this.documentService.currentDoc) {
            var guid_1 = this.navParams.get("guid");
            this.documentService.getDocumentsIndex(true).then(function (data) {
                _this.documentService.documentsList = data;
                _this.documentService.setCurrentDoc(guid_1);
                _this.getFile();
                // @todo in side menu highlight selected doc
            });
        }
        else {
            this.getFile();
        }
        this.yourName = blockstack.loadUserData().profile.name;
    };
    AnnotatePage.prototype.getFile = function () {
        var _this = this;
        blockstack.getFile(this.documentService.currentDoc.guid + ".pdf", { decrypt: true }).then(function (data) {
            _this.pdfBuffer = data;
            var pdfData = new Uint8Array(_this.pdfBuffer);
            _this.loadPdf(pdfData); // loads the pdf to the screen with the text layers
            //this.setupToolBar();
            //this.page1 = document.querySelector(`#${this.containerId} .annotationLayer`);
            //this.page2 = document.querySelector('#pageContainer2 .annotationLayer');
            //PDFJS.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
            //PDFAnnotate.setStoreAdapter(new PDFAnnotate.LocalStoreAdapter());
            // Promise.all([
            //   PDFAnnotate.getAnnotations(this.DOCUMENT_ID, 1),
            //   //PDFAnnotate.getAnnotations(this.DOCUMENT_ID, 2)
            // ]).then(([ann1, ann2]) => {
            //   let RENDER_OPTIONS = {
            //     documentId: this.DOCUMENT_ID,
            //     pdfDocument: pdfData,
            //     scale: 1,
            //     rotate: 0
            //   };
            //   PDFAnnotate.render(this.page1, mockViewport(this.page1), ann1);
            //   //PDFAnnotate.render(this.page2, mockViewport(this.page2), ann2);
            // });
        });
    };
    AnnotatePage.prototype.back = function () {
        //this.navCtrl.push(ListPage);
        //this.navCtrl.push("HomePage");
        //this.navCtrl.setRoot(HomePage);
        this.navCtrl.push("HomePage");
    };
    AnnotatePage.prototype.next = function () {
        this.navCtrl.push("EmailPage", {
            guid: this.documentService.currentDoc.guid
        });
    };
    AnnotatePage.prototype.clear = function () {
        this.vc.svgDrawer.cleanHTML();
        this.vc.svgDrawer.cleanDrawArea();
        this.vc.svgDrawer.updateMetrics();
        localStorage.removeItem('svg');
    };
    AnnotatePage.prototype.ionViewWillLeave = function () {
        //$(".dropzone").unbind();
    };
    AnnotatePage.prototype.loadPdf = function (pdfData) {
        var _this = this;
        var loadingTask = __WEBPACK_IMPORTED_MODULE_8_pdfjs_dist_build_pdf___default.a.getDocument({ data: pdfData });
        loadingTask.promise.then(function (pdf) {
            var pageNumber = 1;
            pdf.getPage(pageNumber).then(function (page) {
                console.log('Page loaded');
                var scale = 1;
                var viewport = page.getViewport(scale);
                // Prepare canvas using PDF page dimensions
                var canvas = document.getElementById('canvas1');
                var context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                // Render PDF page into canvas context
                var renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                var renderTask = page.render(renderContext)
                    .then(function () {
                    // Get text-fragments
                    return page.getTextContent();
                }).then(function (textContent) {
                    // Create div which will hold text-fragments
                    var textLayerDiv = document.createElement("div");
                    // Set it's class to textLayer which have required CSS styles
                    textLayerDiv.setAttribute("class", "textLayer");
                    // Append newly created div in `div#page-#{pdf_page_number}`
                    var div = document.getElementById("" + _this.containerId);
                    div.appendChild(textLayerDiv);
                    // Create new instance of TextLayerBuilder class
                    var textLayer = new TextLayerBuilder({
                        textLayerDiv: textLayerDiv,
                        pageIndex: page.pageIndex,
                        viewport: viewport
                    });
                    // Set text-fragments
                    textLayer.setTextContent(textContent);
                    // Render text-fragments
                    textLayer.render();
                    // load svg
                    _this.loadSvg(page);
                });
            });
        }, function (reason) {
            // PDF loading error
            console.error(reason);
        });
    };
    // loadPDFData() {
    //   let base64pdfData = localStorage.getItem("pdfStr");
    //   function base64ToUint8Array(base64) {
    //     let raw = atob(base64);
    //     let uint8Array = new Uint8Array(new ArrayBuffer(raw.length));
    //     for (var i = 0, len = raw.length; i < len; ++i) {
    //       uint8Array[i] = raw.charCodeAt(i);
    //     }
    //     return uint8Array;
    //   }
    //   return base64ToUint8Array(base64pdfData);
    // }
    // setupAnnotations(page, viewport, canvas, $annotationLayerDiv) {
    //   let canvasOffset = $(canvas).offset();
    //   let promise = page.getAnnotations().then((annotationsData) => {
    //     viewport = viewport.clone({
    //       dontFlip: true
    //     });
    //     for (let i = 0; i < annotationsData.length; i++) {
    //       let data = annotationsData[i];
    //       let annotation = PDFJS.Annotation.fromData(data);
    //       if (!annotation || !annotation.hasHtml()) {
    //         continue;
    //       }
    //       let element = annotation.getHtmlElement(page.commonObjs);
    //       data = annotation.getData();
    //       let rect = data.rect;
    //       let view = page.view;
    //       rect = PDFJS.Util.normalizeRect([
    //         rect[0],
    //         view[3] - rect[1] + view[1],
    //         rect[2],
    //         view[3] - rect[3] + view[1]
    //       ]);
    //       element.style.left = (canvasOffset.left + rect[0]) + 'px';
    //       element.style.top = (canvasOffset.top + rect[1]) + 'px';
    //       element.style.position = 'absolute';
    //       let transform = viewport.transform;
    //       let transformStr = 'matrix(' + transform.join(',') + ')';
    //       CustomStyle.setProp('transform', element, transformStr);
    //       let transformOriginStr = -rect[0] + 'px ' + -rect[1] + 'px';
    //       CustomStyle.setProp('transformOrigin', element, transformOriginStr);
    //       if (data.subtype === 'Link' && !data.url) {
    //         // In this example,  I do not handle the `Link` annotations without url.
    //         // If you want to handle those links, see `web/page_view.js`.
    //         continue;
    //       }
    //       $annotationLayerDiv.append(element);
    //       $annotationLayerDiv.append($("#signature"));
    //     }
    //   });
    //   return promise;
    // }
    // setActiveToolbarItem(type, button) {
    //   let active = document.querySelector('.toolbar button.active');
    //   if (active) {
    //     active.classList.remove('active');
    //   }
    //   if (button) {
    //     button.classList.add('active');
    //   }
    //   if (this.tooltype !== type) {
    //     localStorage.setItem(`${this.DOCUMENT_ID}/tooltype`, type);
    //   }
    //   this.tooltype = type;
    //   this.UI.UI.enableRect(type);
    // }
    // handleToolbarClick(e) {
    //   if (e.target.nodeName === 'BUTTON') {
    //     this.setActiveToolbarItem(e.target.getAttribute('data-tooltype'), e.target);
    //   }
    // }
    AnnotatePage.prototype.handleClearClick = function (e) {
        if (confirm('Are you sure you want to throw your work away?')) {
            //localStorage.removeItem(`${this.DOCUMENT_ID}/annotations`);
            this.page1.innerHTML = '';
        }
    };
    // setupToolBar() {
    //   this.tooltype = localStorage.getItem(`${this.DOCUMENT_ID}/tooltype`) || 'area';
    //   if (this.tooltype) {
    //     this.setActiveToolbarItem(this.tooltype, document.querySelector(`.toolbar button[data-tooltype=${this.tooltype}]`));
    //   }
    // }
    AnnotatePage.prototype.handleDragStart = function (e) {
        //log("handleDragStart");
        e.style.opacity = '0.4'; // this ==> e.target is the source node.
    };
    ;
    // set the overlay dimensionss
    AnnotatePage.prototype.overLay = function (page) {
        var dimensions = page.pageInfo.view[0] + " " + page.pageInfo.view[1] + " " + page.pageInfo.view[2] + " " + page.pageInfo.view[3];
        $("#svg-dropzone").css("width", "612");
        $("#svg-dropzone").css("height", "792");
        $("#svg-dropzone").attr("width", "612");
        $("#svg-dropzone").attr("height", "792");
        $("#svg-dropzone").attr("viewBox", dimensions);
    };
    AnnotatePage.prototype.saveSvg = function () {
        return __awaiter(this, void 0, void 0, function () {
            var svg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        svg = $(".dragOn-drawArea").html();
                        if (!svg) return [3 /*break*/, 2];
                        //localStorage.setItem("svg", svg);
                        return [4 /*yield*/, this.documentService.saveAnnotations(this.documentService.currentDoc.guid, svg)];
                    case 1:
                        //localStorage.setItem("svg", svg);
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AnnotatePage.prototype.loadSvg = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var json, innerHtml;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //let innerHtml = localStorage.getItem("svg");
                        // overlay
                        this.overLay(page);
                        return [4 /*yield*/, this.documentService.getAnnotations(this.documentService.currentDoc.guid)];
                    case 1:
                        json = _a.sent();
                        innerHtml = null;
                        if (json) {
                            innerHtml = json.annotations;
                        }
                        if (innerHtml) {
                            this.vc.svgDrawer.addHTML(innerHtml);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__directives_absolute_drag_absolute_drag__["a" /* AbsoluteDragDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__directives_absolute_drag_absolute_drag__["a" /* AbsoluteDragDirective */])
    ], AnnotatePage.prototype, "vc", void 0);
    AnnotatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-annotate',template:/*ion-inline-start:"/Users/Nick/Desktop/code/blockusign/BlockUSign.Ionic/src/pages/annotate/annotate.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Block-U-Sign</ion-title>\n  </ion-navbar>\n</ion-header> -->\n<ion-content>\n\n\n  <ion-grid>\n    <ion-row justify-content-start align-items-center>\n      <ion-col>\n        <div class="steps-wrapper">\n          <ul class="steps">\n            <li class="step" (click)="back()">\n              <div class="step-info">\n                <span class="step-name">Upload</span>\n              </div>\n            </li>\n            <li class="step active">\n              <div class="step-info">\n                <span class="step-name">Annotate</span>\n              </div>\n            </li>\n            <li class="step" (click)="next()">\n              <div class="step-info">\n                <span class="step-name">Email</span>\n              </div>\n            </li>\n            <li class="step">\n              <div class="step-info">\n                <span class="step-name">Sign</span>\n              </div>\n            </li>\n            <li class="step">\n              <div class="step-info">\n                <span class="step-name">Review</span>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <br/>\n        <br/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n  <div class="centerMe" style="padding-top: 85px">\n    <!-- <button ion-button class="clear" title="Clear" (click)="handleClearClick()">×</button> -->\n    <!-- <img class="draggable draggable-droppable" height="45px" draggable="true" src="./../../assets/imgs/sign.png" /> -->\n    <!-- <svg class="annotationLayer"  class="dropzone resizable" id="svg-dropzone" viewBox="0 0 612 792" width="800" height="600"> </svg>-->\n\n    <div class="page" id="pageContainer1" data-page-number="1" style="position: relative; overflow-x: auto; width: 100%; height:100%">\n\n      <div id="canvasWrapper" style="padding: 0px 0px 0px 0px; margin: 0px 0px 0px 0px;">\n        <!-- <canvas id="canvas1" width="612" height="792" style="padding: 0px 0px 0px 0px; margin: 0px 0px 0px 0px"></canvas> -->\n        <canvas id="canvas1" style="padding: 0px 0px 0px 0px; margin: 0px 0px 0px 0px"></canvas>\n      </div>\n      <svg id="svg-dropzone" class="dropzone resizable" draggable="true" xmlns="http://www.w3.org/2000/svg" style="position: absolute; \n                  left: 0px; \n                  top:0px;\n                  z-index: 200000;\n                  padding: 0px 0px 0px 0px; \n                  margin: 0px 0px 0px 0px;">\n\n      </svg>\n      <div class="textLayer"></div>\n    </div>\n  </div>\n  <svg class="annotationLayer" xmlns="http://www.w3.org/2000/svg">\n\n  </svg>\n\n  <ion-fab bottom right #fab>\n    <button ion-fab>\n      <ion-icon name="md-options"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <button ion-fab (click)="saveSvg()">Save</button>\n      <button ion-fab (click)="clear()">Clear</button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <!-- <ion-fab top left style="padding-top:120px;" (click)="saveSvg()" #fab>\n        <button ion-fab color="light" color="primary" (click)="saveSvg()">\n          Save\n        </button>\n    \n      </ion-fab>\n      <ion-fab top left style="padding-left:70px; padding-top:120px;" (click)="clear()" #fab>\n        <button ion-fab color="light" color="primary" (click)="clear()">\n          Clear\n        </button>\n      </ion-fab>-->\n\n\n \n  <ion-fab top left style="margin-top:130px;background-color:#36393E; opacity: .95;border-radius: 10px" #fab>\n    <ion-grid>\n      <ion-row justify-content-start align-items-center>\n        <ion-col col-auto>\n          <img id="sigImg" height="50px" absolute-drag class="draggable draggable-droppable" draggable="true" src="./../../assets/imgs/sign.png"\n          />\n        </ion-col>\n        <ion-col col-auto>\n          <svg xmlns="http://www.w3.org/2000/svg" id="signature" absolute-drag class="draggable draggable-droppable" draggable="true"\n            width="200" height="50" viewBox="0 0 200 50" style="clear:both; background:#ffeb8e; border: 1px solid red " opacity="1">\n\n            <text x="50%" y="50%" width="200" height="50" viewBox="0 0 200 50" alignment-baseline="middle" text-anchor="middle" fill="green"\n              font-family="Cedarville Cursive" font-weight="bold" style="font-size: 25px">\n              {{ yourName }}\n            </text>\n\n          </svg>\n        </ion-col>\n        <ion-col col-auto>\n          <img src="./../../assets/imgs/arrows.svg" height="35px">\n          <span style="color:#757575; font-family: Cedarville Cursive; font-size: 18px; font-weight: bold">drag</span>\n\n        </ion-col>\n        <ion-col col-auto style="padding-left: 50px;">\n\n          <input id="checkBox" type="checkbox">\n\n          <span style="padding-right: 4px;color:#757575;">Allow Resize</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/Nick/Desktop/code/blockusign/BlockUSign.Ionic/src/pages/annotate/annotate.html"*/,
            styles: ['annotate.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_document_service__["a" /* DocumentService */]])
    ], AnnotatePage);
    return AnnotatePage;
}());

//# sourceMappingURL=annotate.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/annotate/annotate.module": [
		187
	],
	"../pages/email/email.module": [
		184
	],
	"../pages/home/home.module": [
		207
	],
	"../pages/review/review.module": [
		185
	],
	"../pages/sign/sign.module": [
		186
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 183;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPageModule", function() { return EmailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email__ = __webpack_require__(427);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmailPageModule = (function () {
    function EmailPageModule() {
    }
    EmailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__email__["a" /* EmailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__email__["a" /* EmailPage */]),
            ],
        })
    ], EmailPageModule);
    return EmailPageModule;
}());

//# sourceMappingURL=email.module.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPageModule", function() { return ReviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReviewPageModule = (function () {
    function ReviewPageModule() {
    }
    ReviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__review__["a" /* ReviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__review__["a" /* ReviewPage */]),
            ],
        })
    ], ReviewPageModule);
    return ReviewPageModule;
}());

//# sourceMappingURL=review.module.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignPageModule", function() { return SignPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignPageModule = (function () {
    function SignPageModule() {
    }
    SignPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign__["a" /* SignPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign__["a" /* SignPage */]),
            ],
        })
    ], SignPageModule);
    return SignPageModule;
}());

//# sourceMappingURL=sign.module.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotatePageModule", function() { return AnnotatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__annotate__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { AbsoluteDragDirective } from '../../directives/absolute-drag/absolute-drag';

var AnnotatePageModule = (function () {
    function AnnotatePageModule() {
    }
    AnnotatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__annotate__["a" /* AnnotatePage */]
                //AbsoluteDragDirective
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__annotate__["a" /* AnnotatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* DirectivesModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_1__annotate__["a" /* AnnotatePage */]
            ]
        })
    ], AnnotatePageModule);
    return AnnotatePageModule;
}());

//# sourceMappingURL=annotate.module.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsoluteDragDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AbsoluteDragDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var AbsoluteDragDirective = (function () {
    function AbsoluteDragDirective(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
    }
    AbsoluteDragDirective.prototype.ngAfterViewInit = function () {
        this.dragOn();
        // this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
        // this.renderer.setElementStyle(this.element.nativeElement, 'left', this.startLeft + 'px');
        // this.renderer.setElementStyle(this.element.nativeElement, 'top', this.startTop + 'px');
        // let hammer = new window['Hammer'](this.element.nativeElement);
        // hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
        // hammer.on('pan', (ev) => {
        //   this.handlePan(ev);
        // });
    };
    AbsoluteDragDirective.prototype.handlePan = function (ev) {
        var _this = this;
        var newLeft = ev.center.x;
        var newTop = ev.center.y;
        this.domCtrl.write(function () {
            _this.renderer.setElementStyle(_this.element.nativeElement, 'left', newLeft + 'px');
            _this.renderer.setElementStyle(_this.element.nativeElement, 'top', newTop + 'px');
        });
    };
    AbsoluteDragDirective.prototype.dragOn = function () {
        try {
            this.svgDrawer = dragOn(document.querySelector(".dropzone"), {
                listenTo: '.draggable'
            });
        }
        catch (e) { }
        // target elements with the "resizable" class
        // interact('.resizable')
        //   .resizable({
        //     // preserveAspectRatio: true,
        //     edges: {
        //       left: true,
        //       right: true,
        //       bottom: true,
        //       top: true
        //     }
        //   })
        //   .on('resizemove', (event) => {
        //     svgDrawer.updateMetrics();
        //     var target = event.target,
        //       x = (parseFloat(target.getAttribute('data-x')) || 0),
        //       y = (parseFloat(target.getAttribute('data-y')) || 0);
        //     // update the element's style
        //     target.style.width = event.rect.width + 'px';
        //     target.style.height = event.rect.height + 'px';
        //     // translate when resizing from top or left edges
        //     x += event.deltaRect.left;
        //     y += event.deltaRect.top;
        //     target.style.webkitTransform = target.style.transform =
        //       'translate(' + x + 'px,' + y + 'px)';
        //     target.setAttribute('data-x', x);
        //     target.setAttribute('data-y', y);
        //   });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('startLeft'),
        __metadata("design:type", Object)
    ], AbsoluteDragDirective.prototype, "startLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('startTop'),
        __metadata("design:type", Object)
    ], AbsoluteDragDirective.prototype, "startTop", void 0);
    AbsoluteDragDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[absolute-drag]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* DomController */]])
    ], AbsoluteDragDirective);
    return AbsoluteDragDirective;
}());

//# sourceMappingURL=absolute-drag.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__absolute_drag_absolute_drag__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__absolute_drag_absolute_drag__["a" /* AbsoluteDragDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__absolute_drag_absolute_drag__["a" /* AbsoluteDragDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__annotate_annotate__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdf_annotate__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdf_annotate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pdf_annotate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_document_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









//const $ = document.querySelectorAll.bind(document);
/// Pdf js basic example - https://jsfiddle.net/pdfjs/cq0asLqz/?utm_source=website&utm_medium=embed&utm_campaign=cq0asLqz
/// Annotations sample - http://jsfiddle.net/seikichi/RuDvz/2/
var HomePage = (function () {
    function HomePage(navCtrl, loadingCtrl, globalService, documentService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.globalService = globalService;
        this.documentService = documentService;
        this.alertCtrl = alertCtrl;
        this.isLoggedIn = false;
        this.loginState = "Login";
        this.fileName = "blockusign/pdf1.pdf";
    }
    HomePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.initCamera();
                this.ekUpload();
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.next = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__annotate_annotate__["a" /* AnnotatePage */]);
        //this.navCtrl.setRoot(ListPage);
    };
    HomePage.prototype.saveFile = function (fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var documentList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.documentService.addDocument(fileName, this.pdfBuffer)];
                    case 1:
                        documentList = _a.sent();
                        debugger;
                        this.next();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getFile = function () {
        var _this = this;
        blockstack.getFile(this.fileName, { decrypt: true }).then(function (data) {
            _this.pdfBuffer = data;
        });
    };
    HomePage.prototype.loadFile = function () {
        var _this = this;
        var fileInput = document.getElementById('file-upload');
        var firstFile = fileInput.files[0];
        var startByte = 0;
        var endByte = firstFile.size;
        var opt_startByte = startByte.toString();
        var opt_stopByte = endByte.toString();
        var files = document.getElementById('file-upload').files;
        if (!files.length) {
            alert('Please select a file!');
            return;
        }
        var file = files[0];
        var start = parseInt(opt_startByte) || 0;
        var stop = parseInt(opt_stopByte) || file.size - 1;
        var filename = "";
        var reader = new FileReader();
        // If we use onloadend, we need to check the readyState.
        reader.onloadend = function (evt) {
            if (evt.target.readyState == FileReader.DONE) {
                // document.getElementById('byte_content').textContent = evt.target.result;
                // document.getElementById('byte_range').textContent =
                //     ['Read bytes: ', start + 1, ' - ', stop + 1,
                //         ' of ', file.size, ' byte file'].join('');
            }
            filename = fileInput.files[0].name;
            _this.newDocModal(filename);
            //localStorage.setItem("FileName", filename);
        };
        var blob = file.slice(start, stop + 1);
        //reader.readAsBinaryString(blob);
        reader.onload = function (evt) {
            var arraybuffer = evt.target.result;
            _this.pdfBuffer = arraybuffer;
            //this.saveFile();
            var pdfData = new Uint8Array(arraybuffer);
            //this.savePdfAsString(pdfData);
            _this.createPdf(pdfData);
        };
        reader.readAsArrayBuffer(blob);
    };
    HomePage.prototype.createPdf = function (pdfData) {
        // Loaded via <script> tag, create shortcut to access PDF.js exports.
        var pdfjsLib = window['pdfjs-dist/build/pdf'];
        pdfjsLib.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
        __WEBPACK_IMPORTED_MODULE_4_pdf_annotate___default.a.setStoreAdapter(new __WEBPACK_IMPORTED_MODULE_4_pdf_annotate___default.a.LocalStoreAdapter());
        var loadingTask = pdfjsLib.getDocument({ data: pdfData });
        loadingTask.promise.then(function (pdf) {
            console.log('PDF loaded');
            var pageNumber = 1;
            pdf.getPage(pageNumber).then(function (page) {
                console.log('Page loaded');
                var scale = 1.5;
                var viewport = page.getViewport(scale);
                // Prepare canvas using PDF page dimensions
                var canvas = document.getElementById('the-canvas');
                var context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                // Render PDF page into canvas context
                var renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                var renderTask = page.render(renderContext);
                renderTask.then(function () {
                    console.log('Page rendered');
                });
            });
        }, function (reason) {
            // PDF loading error
            console.error(reason);
        });
    };
    HomePage.prototype.savePdfAsString = function (pdf) {
        this.largeuint8ArrToString(pdf, function (strPdf) {
            var base64StringPdf = btoa(strPdf);
            //localStorage.setItem("pdfStr", base64StringPdf);
        });
    };
    HomePage.prototype.getPdfFromString = function (base64PdfString) {
        // decode base64 string, remove space for IE compatibility
        var binary = atob(base64PdfString.replace(/\s/g, ''));
        var len = binary.length;
        var arraybuffer = new ArrayBuffer(len);
        var pdfData = new Uint8Array(arraybuffer);
    };
    HomePage.prototype.largeuint8ArrToString = function (uint8arr, callback) {
        var bb = new Blob([uint8arr]);
        var f = new FileReader();
        f.onload = function (e) {
            callback(e.target.result);
        };
        f.readAsBinaryString(bb);
    };
    // File Upload https://codepen.io/mattsince87/pen/yadZXv?editors=0010#0
    HomePage.prototype.ekUpload = function () {
        var self = this;
        function Init() {
            console.log("Upload Initialised");
            var fileSelect = document.getElementById('file-upload'), fileDrag = document.getElementById('file-drag'), submitButton = document.getElementById('submit-button');
            fileSelect.addEventListener('change', fileSelectHandler, false);
            // Is XHR2 available?
            var xhr = new XMLHttpRequest();
            if (xhr.upload) {
                // File Drop
                fileDrag.addEventListener('dragover', fileDragHover, false);
                fileDrag.addEventListener('dragleave', fileDragHover, false);
                fileDrag.addEventListener('drop', fileSelectHandler, false);
            }
        }
        function fileDragHover(e) {
            var fileDrag = document.getElementById('file-drag');
            e.stopPropagation();
            e.preventDefault();
            fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
        }
        function fileSelectHandler(e) {
            // Fetch FileList object
            var files = e.target.files || e.dataTransfer.files;
            // Cancel event and hover styling
            fileDragHover(e);
            // Process all File objects
            for (var i = 0, f; f = files[i]; i++) {
                // parseFile(f);
                self.loadFile();
                uploadFile(f);
            }
        }
        // Output
        function output(msg) {
            // Response
            var m = document.getElementById('messages');
            m.innerHTML = msg;
        }
        function setProgressMaxValue(e) {
            var pBar = document.getElementById('file-progress');
            if (e.lengthComputable) {
                pBar.max = e.total;
            }
        }
        function updateFileProgress(e) {
            var pBar = document.getElementById('file-progress');
            if (e.lengthComputable) {
                pBar.value = e.loaded;
            }
        }
        function uploadFile(file) {
            var xhr = new XMLHttpRequest(), fileInput = document.getElementById('class-roster-file'), pBar = document.getElementById('file-progress'), fileSizeLimit = 2048; // In MB
            if (xhr.upload) {
                // Check if file is less than x MB
                if (file.size <= fileSizeLimit * 1024 * 1024) {
                    // Progress bar
                    pBar.style.display = 'inline';
                    xhr.upload.addEventListener('loadstart', setProgressMaxValue, false);
                    xhr.upload.addEventListener('progress', updateFileProgress, false);
                    // File received / failed
                    xhr.onreadystatechange = function (e) {
                        if (xhr.readyState == 4) {
                            // Everything is good!
                            // progress.className = (xhr.status == 200 ? "success" : "failure");
                            // document.location.reload(true);
                        }
                    };
                    // Start upload
                    xhr.open('POST', document.getElementById('file-upload-form').action, true);
                    xhr.setRequestHeader('X-File-Name', file.name);
                    xhr.setRequestHeader('X-File-Size', file.size);
                    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
                    xhr.send(file);
                }
                else {
                    output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
                }
            }
        }
        // Check for the various File API support.
        if (window.File && window.FileList && window.FileReader) {
            Init();
        }
        else {
            document.getElementById('file-drag').style.display = 'none';
        }
    };
    HomePage.prototype.newDocModal = function (fileName) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Document Name',
            inputs: [
                {
                    name: 'fileName',
                    placeholder: '',
                    value: fileName
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        // save here
                        _this.saveFile(data.fileName);
                        if (true) {
                            // logged in!
                        }
                        else {
                            // invalid login
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.initCamera = function () {
        var _this = this;
        var mediaConfig = {
            video: true
        };
        var playStream = function (video, src) {
            video.src = src;
            video.play();
        };
        var process = function (video) {
            var mediaDevices = navigator.mediaDevices;
            mediaDevices.getUserMedia(mediaConfig).then(function (stream) { return playStream(video, window.URL.createObjectURL(stream)); }).catch(function (err) {
                // alert(err);
                alert("Not support get stream from camera!");
            });
        };
        var video = $("#video")[0];
        process(video);
        this.canvasCamera = $("#canvasCamera")[0];
        this.cameraContext = this.canvasCamera.getContext("2d");
        $("#snap").on('click', function () {
            _this.cameraContext.drawImage(video, 0, 0, 612, 792);
        });
        $("#downloadpdf").on('click', this.savePDF);
    };
    HomePage.prototype.savePDF = function () {
        try {
            this.canvasCamera = $("#canvasCamera")[0];
            var imgData = this.canvasCamera.toDataURL("image/jpeg", 1.0);
            var pdf = new jsPDF('p', 'mm', [297, 210]);
            pdf.addImage(imgData, 'JPEG', 5, 5);
            var namefile = prompt("insert name of file");
            pdf.save(namefile + ".pdf");
        }
        catch (e) {
            alert("Error description: " + e.message);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Nick/Desktop/code/blockusign/BlockUSign.Ionic/src/pages/home/home.html"*/'<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col width-100>\n        <div class="steps-wrapper">\n          <ul class="steps" >\n            <li class="step active">\n              <div class="step-info">\n                <span class="step-name">Upload</span>\n              </div>\n            </li>\n            <li class="step" (click)="next()">\n              <div class="step-info">\n                <span class="step-name">Annotate</span>\n              </div>\n            </li>\n            <li class="step">\n              <div class="step-info">\n                <span class="step-name">Email</span>\n              </div>\n            </li>\n            <li class="step">\n              <div class="step-info">\n                <span class="step-name">Sign</span>\n              </div>\n            </li>\n            <li class="step">\n              <div class="step-info">\n                <span class="step-name">Review</span>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <br/>\n        <br/>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col width-100>\n\n        <div class="centerMe">\n          <!-- Upload  -->\n          <form id="file-upload-form" class="uploader">\n            <input id="file-upload" type="file" name="fileUpload" accept=".pdf" />\n            <label for="file-upload" id="file-drag">\n              <img id="file-image" src="#" alt="Preview" class="hidden">\n              <div id="start">\n                <i class="fa fa-download" aria-hidden="true"></i>\n                <div>Select a PDF</div>\n                <div id="notimage" class="hidden">Please select an image</div>\n                <span id="file-upload-btn" class="btn btn-primary">Select a file</span>\n              </div>\n              <div id="response" class="hidden">\n                <div id="messages"></div>\n                <progress class="progress" id="file-progress" value="0">\n                  <span>0</span>%\n                </progress>\n              </div>\n            </label>\n          </form>\n\n          <!-- <label class="item item-input"> -->\n          <!-- <input type="file" id="files" name="file" (submit)="loadFile()" /> -->\n          <!-- </label> -->\n          <!-- <div class="preview-img">\n                          <img id="myImage" width="150" height="150" size="30" /> </div> -->\n          <!-- <span class="readBytesButtons">\n                                  <button data-startbyte="0" data-endbyte="4">1-5</button>\n                                  <button data-startbyte="5" data-endbyte="14">6-15</button>\n                                  <button data-startbyte="6" data-endbyte="7">7-8</button>\n                                  <button>entire file</button>\n                                </span> -->\n          <!-- <div id="byte_range"></div>\n                                <div id="byte_content"></div> -->\n\n          <!-- <button ion-button (click)="next()" style="margin-left: 50px; padding: 10px 10px 10px 10px; background: green; height: 45px;">\n            Next &nbsp;\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>  -->\n          <!-- <button ion-button (click)="saveFile()">Save File</button>\n                      <button ion-button (click)="getFile()">Get File</button> -->\n\n\n        \n        </div>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n        <ion-col>\n          \n        \n              \n            \n              <video id="video" width="612" height="792"></video>\n              <canvas id="canvasCamera" width="612" height="792"></canvas>\n          \n        </ion-col>\n      </ion-row>\n  \n\n   \n\n\n\n    <ion-row>\n      <ion-col>\n        <div class="centerMe">\n          <br/>\n          <canvas id="the-canvas"></canvas>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n  <ion-fab top left style="margin-top:130px;background-color:#36393E; opacity: .95;border-radius: 10px" #fab>\n\n    \n          <button id="snap">Snap Photo</button>\n          <button id="downloadpdf">Download as pdf</button>\n     \n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/Nick/Desktop/code/blockusign/BlockUSign.Ionic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_6__services_document_service__["a" /* DocumentService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalService = (function () {
    function GlobalService() {
        this.GaiUrl = "http://21312";
    }
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
}());

//# sourceMappingURL=global.service.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_models__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/*
  Generated class for the StorageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DocumentService = (function () {
    function DocumentService() {
        var _this = this;
        this.indexFileName = "blockusign/documents.index.json";
        console.log('Hello StorageServiceProvider Provider');
        this.documentsList = [];
        // @TODO - think about putting in checks here is documentsList is empty, 
        // or there could be a async race issue if they take too long to come back
        this.getDocumentsIndex(true).then(function (data) {
            _this.documentsList = data;
        });
    }
    DocumentService.prototype.getDocumentsIndex = function (refresh) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (!refresh) return [3 /*break*/, 3];
                        _a = this;
                        _c = (_b = JSON).parse;
                        return [4 /*yield*/, blockstack.getFile(this.indexFileName, { decrypt: true })];
                    case 1:
                        _a.documentsList = _c.apply(_b, [_g.sent()]);
                        if (!(this.documentsList == null)) return [3 /*break*/, 3];
                        _d = this;
                        _f = (_e = JSON).parse;
                        return [4 /*yield*/, blockstack.putFile(this.indexFileName, "[]", { encrypt: true })];
                    case 2:
                        _d.documentsList = _f.apply(_e, [_g.sent()]);
                        _g.label = 3;
                    case 3: return [2 /*return*/, this.documentsList];
                }
            });
        });
    };
    DocumentService.prototype.addDocument = function (fileName, fileBuffer) {
        return __awaiter(this, void 0, void 0, function () {
            var newDocument, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newDocument = new __WEBPACK_IMPORTED_MODULE_1__models_models__["a" /* Document */]();
                        newDocument.fileName = fileName;
                        this.documentsList.push(newDocument);
                        return [4 /*yield*/, blockstack.putFile(this.indexFileName, JSON.stringify(this.documentsList), { encrypt: true })];
                    case 1:
                        _a.sent();
                        this.docBuffer = fileBuffer;
                        this.currentDoc = newDocument;
                        return [4 /*yield*/, this.addDocumentBytes(newDocument.guid, fileBuffer)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, this.documentsList];
                }
            });
        });
    };
    DocumentService.prototype.removeDocument = function (document) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // remove item
                        this.documentsList = this.documentsList.remove(document);
                        return [4 /*yield*/, blockstack.putFile(this.indexFileName, JSON.stringify(this.documentsList), { encrypt: true })];
                    case 1:
                        _a.sent();
                        this.removeDocumentBytes(document.guid);
                        // remove binary file
                        return [2 /*return*/, this.documentsList];
                }
            });
        });
    };
    DocumentService.prototype.addDocumentBytes = function (guid, doc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, blockstack.putFile(guid + ".pdf", doc, { encrypt: true }).then(function (data) { })];
            });
        });
    };
    DocumentService.prototype.removeDocumentBytes = function (guid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, blockstack.putFile(guid + ".pdf", "", { encrypt: true }).then(function (data) { })];
            });
        });
    };
    DocumentService.prototype.saveAnnotations = function (guid, annotation) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        json = {
                            annotations: annotation
                        };
                        return [4 /*yield*/, blockstack.putFile(guid + ".annotations.json", JSON.stringify(json), { encrypt: true })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DocumentService.prototype.getAnnotations = function (guid) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        _c = (_b = JSON).parse;
                        return [4 /*yield*/, blockstack.getFile(guid + ".annotations.json", { decrypt: true })];
                    case 1:
                        _a.currentDocAnnotations = _c.apply(_b, [_d.sent()]);
                        return [2 /*return*/, this.currentDocAnnotations];
                }
            });
        });
    };
    DocumentService.prototype.setCurrentDoc = function (guid) {
        this.currentDoc = this.documentsList.find(function (x) { return x.guid == guid; });
    };
    DocumentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DocumentService);
    return DocumentService;
}());

//# sourceMappingURL=document.service.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_document_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var OptionsPopoverPage = (function () {
    function OptionsPopoverPage(viewCtrl, documentService, toastCtrl) {
        this.viewCtrl = viewCtrl;
        this.documentService = documentService;
        this.toastCtrl = toastCtrl;
        this.doc = this.viewCtrl.data.selectedDoc;
    }
    OptionsPopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    OptionsPopoverPage.prototype.documentRemove = function (selectedDocument) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.documentService.removeDocument(this.doc)];
                    case 1:
                        _a.sent();
                        toast = this.toastCtrl.create({
                            message: 'Document deleted!',
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                        this.viewCtrl.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    OptionsPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n     <br/>\n      <ion-list style=\"\">\n        <button ion-item (click)=\"documentRemove()\">Delete</button>\n        <button ion-item (click)=\"close()\">Documentation</button>\n      </ion-list>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_document_service__["a" /* DocumentService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], OptionsPopoverPage);
    return OptionsPopoverPage;
}());

//# sourceMappingURL=options.popover.page.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(402);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__options_popover_page__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_directives_module__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_annotate_annotate_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sign_sign_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_email_email_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_review_review_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_coin_service__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_global_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_cryptocompare_service__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_slack_service__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_document_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//import { HomePage } from './../pages/home/home';
//import { AnnotatePage } from './../pages/annotate/annotate';





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__options_popover_page__["a" /* OptionsPopoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                    preloadModules: true
                }, {
                    links: [
                        { loadChildren: '../pages/email/email.module#EmailPageModule', name: 'EmailPage', segment: 'email/:guid', priority: 'low', defaultHistory: ['AnnotatePage', 'HomePage'] },
                        { loadChildren: '../pages/review/review.module#ReviewPageModule', name: 'ReviewPage', segment: 'review/:guid', priority: 'low', defaultHistory: ['SignPage', 'EmailPage', 'AnnotatePage', 'HomePage'] },
                        { loadChildren: '../pages/sign/sign.module#SignPageModule', name: 'SignPage', segment: 'sign/:guid', priority: 'low', defaultHistory: ['EmailPage', 'AnnotatePage', 'HomePage'] },
                        { loadChildren: '../pages/annotate/annotate.module#AnnotatePageModule', name: 'AnnotatePage', segment: 'annotate/:guid', priority: 'low', defaultHistory: ['HomePage'] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home_module__["HomeModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_annotate_annotate_module__["AnnotatePageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_sign_sign_module__["SignPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_email_email_module__["EmailPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_review_review_module__["ReviewPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__options_popover_page__["a" /* OptionsPopoverPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__services_coin_service__["a" /* CoinService */],
                __WEBPACK_IMPORTED_MODULE_17__services_cryptocompare_service__["a" /* CryptoCompareService */],
                __WEBPACK_IMPORTED_MODULE_18__services_slack_service__["a" /* SlackService */],
                __WEBPACK_IMPORTED_MODULE_16__services_global_service__["a" /* GlobalService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__services_document_service__["a" /* DocumentService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_document_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailPage = (function () {
    function EmailPage(navCtrl, navParams, documentService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.documentService = documentService;
        if (this.navParams.get("guid") && !this.documentService.currentDoc) {
            var guid_1 = this.navParams.get("guid");
            this.documentService.getDocumentsIndex(true).then(function (data) {
                _this.documentService.documentsList = data;
                _this.documentService.setCurrentDoc(guid_1);
                //this.getFile();
                // @todo in side menu highlight selected doc
            });
        }
        else {
            //this.getFile();
        }
    }
    EmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignPage');
        this.lookup();
    };
    EmailPage.prototype.next = function () {
        this.navCtrl.push("SignPage", {
            guid: this.documentService.currentDoc.guid
        });
    };
    EmailPage.prototype.back = function () {
        this.navCtrl.push("AnnotatePage", {
            guid: this.documentService.currentDoc.guid
        });
    };
    EmailPage.prototype.getUrl = function () {
        return window.location.href;
    };
    EmailPage.prototype.lookup = function () {
        blockstack.lookupProfile("blockusign1.id")
            .then(function (profile) {
            var data = profile;
        })
            .catch(function (error) {
            console.log('could not resolve profile');
        });
    };
    EmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-email',template:/*ion-inline-start:"/Users/Nick/Desktop/code/blockusign/BlockUSign.Ionic/src/pages/email/email.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>sign</ion-title>\n  </ion-navbar>\n</ion-header> -->\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col width-100>\n        <div class="steps-wrapper">\n          <ul class="steps">\n            <!-- <li class="step completed" (click)="back()"> -->\n            <li class="step" (click)="back()">\n              <div class="step-info">\n                <span class="step-name">Upload</span>\n              </div>\n            </li>\n            <li class="step" (click)="back()">\n              <div class="step-info">\n                <span class="step-name">Annotate</span>\n              </div>\n            </li>\n            <li class="step active">\n              <div class="step-info">\n                <span class="step-name">Email</span>\n              </div>\n            </li>\n            <li class="step" (click)="next()">\n              <div class="step-info">\n                <span class="step-name">Sign</span>\n              </div>\n            </li>\n            <li class="step">\n              <div class="step-info">\n                <span class="step-name">Review</span>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <br/>\n        <br/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-card>\n\n    <ion-card-header>\n      Work In Progress\n    </ion-card-header>\n\n    <ion-card-content>\n      <img src="./../../assets/imgs/bugcode.jpg"  style="max-width: 300px;"/>\n      <br />\n      <p>\n        Want this feature faster? Considering donating here: BTC - <ion-input value="1Jw3xsPzmYus3ke4XYXAHHyzpxD1sjQVta" style="font-size: large"></ion-input>\n      </p>\n\n      <p>\n        <br/>\n        The email feature will be enabled in the next release. For now, copy and paste this link to sign. Right now, only you can\n        sign the document. The next release will allow you to send this document to somebody else to sign using <a href="https://blockstack.org/tutorials/multi-player-storage" target="_blank">Blockstacks\n          muli-player storage.</a>\n        <br/>\n      </p>\n\n\n      <ion-input [value]="getUrl()" style="font-size: large"></ion-input>\n\n\n\n\n      <ion-input [value]="getUrl()" style="font-size: large"></ion-input>\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/Nick/Desktop/code/blockusign/BlockUSign.Ionic/src/pages/email/email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_document_service__["a" /* DocumentService */]])
    ], EmailPage);
    return EmailPage;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Document; });
/* unused harmony export Annotation */
var Document = (function () {
    function Document() {
        this.guid = window.guid();
        this.createdAt = Date.now();
        this.updatedAt = Date.now();
        this.hasAnnotations = false;
        this.step = 1;
        this.isCompleted = false;
    }
    return Document;
}());

var Annotation = (function () {
    function Annotation() {
    }
    return Annotation;
}());

// // Index of documents for searching
// // blockusign/documents.index.json
// [
//     {
//         "guid": "guid",
//         "fileName": "blockusign/nicktee.id/one.pdf", 
//         "createdAt": "", 
//         "updatedAt": "", 
//         "owner": ["nicktee.id", ""], 
//         "signer": ["nicktee.id"], 
//         "hasAnnotations": true,
//         "step": 5,
//         "isCompleted": true
//     },
//     {
//         "guid": "guid",
//         "fileName": "blockusign/nicktee.id/two.pdf", 
//         "createdAt": "", 
//         "updatedAt": "", 
//         "owner": ["nicktee.id", ""], 
//         "signer": ["nicktee.id"], 
//         "hasAnnotations": true,
//         "step": 1,
//         "isCompleted": false
//     }
// ]
// // documents
// // blockusign/guid.pdf
// // documents metadata and annotations
// // blockusign/guid.json
// {
//     annotations: "<img></img><img></img>"
// }
//# sourceMappingURL=models.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_document_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReviewPage = (function () {
    function ReviewPage(navCtrl, navParams, documentService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.documentService = documentService;
        if (this.navParams.get("guid") && !this.documentService.currentDoc) {
            var guid_1 = this.navParams.get("guid");
            this.documentService.getDocumentsIndex(true).then(function (data) {
                _this.documentService.documentsList = data;
                _this.documentService.setCurrentDoc(guid_1);
                //this.getFile();
                // @todo in side menu highlight selected doc
            });
        }
        else {
            //this.getFile();
        }
    }
    ReviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignPage');
    };
    ReviewPage.prototype.back = function () {
        this.navCtrl.push("SignPage", {
            guid: this.documentService.currentDoc.guid
        });
    };
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-review',template:/*ion-inline-start:"/Users/Nick/Desktop/code/blockusign/BlockUSign.Ionic/src/pages/review/review.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>sign</ion-title>\n  </ion-navbar>\n</ion-header> -->\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col width-100>\n        <div class="steps-wrapper">\n          <ul class="steps">\n            <!-- <li class="step completed" (click)="back()"> -->\n            <li class="step" (click)="back()">\n              <div class="step-info">\n                <span class="step-name">Upload</span>\n              </div>\n            </li>\n            <li class="step">\n              <div class="step-info">\n                <span class="step-name">Annotate</span>\n              </div>\n            </li>\n            <li class="step" >\n              <div class="step-info">\n                <span class="step-name">Email</span>\n              </div>\n            </li>\n            <li class="step" (click)="back()">\n              <div class="step-info">\n                <span class="step-name">Sign</span>\n              </div>\n            </li>\n            <li class="step active">\n              <div class="step-info">\n                <span class="step-name">Review</span>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <br/>\n        <br/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-card>\n\n      <ion-card-header>\n        Work In Progress\n      </ion-card-header>\n  \n      <ion-card-content>\n        <img src="./../../assets/imgs/bugcode.jpg"  style="max-width: 300px;"/>\n        <br />\n        <p>\n          Want this feature faster? Considering donating here: BTC - <ion-input value="1Jw3xsPzmYus3ke4XYXAHHyzpxD1sjQVta" style="font-size: large"></ion-input>\n        </p>\n  \n\n      </ion-card-content>\n  \n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Nick/Desktop/code/blockusign/BlockUSign.Ionic/src/pages/review/review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_document_service__["a" /* DocumentService */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_document_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignPage = (function () {
    function SignPage(navCtrl, navParams, documentService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.documentService = documentService;
        if (this.navParams.get("guid") && !this.documentService.currentDoc) {
            var guid_1 = this.navParams.get("guid");
            this.documentService.getDocumentsIndex(true).then(function (data) {
                _this.documentService.documentsList = data;
                _this.documentService.setCurrentDoc(guid_1);
                //this.getFile();
                // @todo in side menu highlight selected doc
            });
        }
        else {
            //this.getFile();
        }
    }
    SignPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignPage');
        this.name = blockstack.loadUserData().profile.name;
    };
    SignPage.prototype.next = function () {
        this.navCtrl.push("ReviewPage", {
            guid: this.documentService.currentDoc.guid
        });
    };
    SignPage.prototype.back = function () {
        this.navCtrl.push("EmailPage", {
            guid: this.documentService.currentDoc.guid
        });
    };
    SignPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign',template:/*ion-inline-start:"/Users/Nick/Desktop/code/blockusign/BlockUSign.Ionic/src/pages/sign/sign.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>sign</ion-title>\n  </ion-navbar>\n</ion-header> -->\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col width-100>\n        <div class="steps-wrapper">\n          <ul class="steps">\n            <!-- <li class="step completed" (click)="back()"> -->\n            <li class="step" (click)="back()">\n              <div class="step-info">\n                <span class="step-name">Upload</span>\n              </div>\n            </li>\n            <li class="step">\n              <div class="step-info">\n                <span class="step-name">Annotate</span>\n              </div>\n            </li>\n            <li class="step" (click)="back()">\n              <div class="step-info">\n                <span class="step-name">Email</span>\n              </div>\n            </li>\n            <li class="step active" >\n              <div class="step-info">\n                <span class="step-name">Sign</span>\n              </div>\n            </li>\n            <li class="step" (click)="next()">\n              <div class="step-info">\n                <span class="step-name">Review</span>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <br/>\n        <br/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <h1 style="font-family: \'Cedarville Cursive\', cursive;">{{ name }} </h1>\n\n\n  <ion-card>\n\n     \n      <ion-card-header>\n        Work In Progress\n      </ion-card-header>\n  \n      <ion-card-content>\n        <img src="./../../assets/imgs/officespace.jpg"  style="max-width: 300px;"/>\n        <br />\n        <p>\n          Want this feature faster? Considering donating here: BTC - <ion-input value="1Jw3xsPzmYus3ke4XYXAHHyzpxD1sjQVta" style="font-size: large"></ion-input>\n        </p>\n  \n        <p>\n          <br/>\n            The signing feature will be enabled in the next release using <a href="https://blockstack.org/tutorials/multi-player-storage" target="_blank">Blockstacks\n            muli-player storage.</a>\n          <br/>\n        </p>\n  \n\n  \n  \n      </ion-card-content>\n  \n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Nick/Desktop/code/blockusign/BlockUSign.Ionic/src/pages/sign/sign.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_document_service__["a" /* DocumentService */]])
    ], SignPage);
    return SignPage;
}());

//# sourceMappingURL=sign.js.map

/***/ }),

/***/ 453:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 474:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 258,
	"./af.js": 258,
	"./ar": 259,
	"./ar-dz": 260,
	"./ar-dz.js": 260,
	"./ar-kw": 261,
	"./ar-kw.js": 261,
	"./ar-ly": 262,
	"./ar-ly.js": 262,
	"./ar-ma": 263,
	"./ar-ma.js": 263,
	"./ar-sa": 264,
	"./ar-sa.js": 264,
	"./ar-tn": 265,
	"./ar-tn.js": 265,
	"./ar.js": 259,
	"./az": 266,
	"./az.js": 266,
	"./be": 267,
	"./be.js": 267,
	"./bg": 268,
	"./bg.js": 268,
	"./bm": 269,
	"./bm.js": 269,
	"./bn": 270,
	"./bn.js": 270,
	"./bo": 271,
	"./bo.js": 271,
	"./br": 272,
	"./br.js": 272,
	"./bs": 273,
	"./bs.js": 273,
	"./ca": 274,
	"./ca.js": 274,
	"./cs": 275,
	"./cs.js": 275,
	"./cv": 276,
	"./cv.js": 276,
	"./cy": 277,
	"./cy.js": 277,
	"./da": 278,
	"./da.js": 278,
	"./de": 279,
	"./de-at": 280,
	"./de-at.js": 280,
	"./de-ch": 281,
	"./de-ch.js": 281,
	"./de.js": 279,
	"./dv": 282,
	"./dv.js": 282,
	"./el": 283,
	"./el.js": 283,
	"./en-au": 284,
	"./en-au.js": 284,
	"./en-ca": 285,
	"./en-ca.js": 285,
	"./en-gb": 286,
	"./en-gb.js": 286,
	"./en-ie": 287,
	"./en-ie.js": 287,
	"./en-nz": 288,
	"./en-nz.js": 288,
	"./eo": 289,
	"./eo.js": 289,
	"./es": 290,
	"./es-do": 291,
	"./es-do.js": 291,
	"./es-us": 292,
	"./es-us.js": 292,
	"./es.js": 290,
	"./et": 293,
	"./et.js": 293,
	"./eu": 294,
	"./eu.js": 294,
	"./fa": 295,
	"./fa.js": 295,
	"./fi": 296,
	"./fi.js": 296,
	"./fo": 297,
	"./fo.js": 297,
	"./fr": 298,
	"./fr-ca": 299,
	"./fr-ca.js": 299,
	"./fr-ch": 300,
	"./fr-ch.js": 300,
	"./fr.js": 298,
	"./fy": 301,
	"./fy.js": 301,
	"./gd": 302,
	"./gd.js": 302,
	"./gl": 303,
	"./gl.js": 303,
	"./gom-latn": 304,
	"./gom-latn.js": 304,
	"./gu": 305,
	"./gu.js": 305,
	"./he": 306,
	"./he.js": 306,
	"./hi": 307,
	"./hi.js": 307,
	"./hr": 308,
	"./hr.js": 308,
	"./hu": 309,
	"./hu.js": 309,
	"./hy-am": 310,
	"./hy-am.js": 310,
	"./id": 311,
	"./id.js": 311,
	"./is": 312,
	"./is.js": 312,
	"./it": 313,
	"./it.js": 313,
	"./ja": 314,
	"./ja.js": 314,
	"./jv": 315,
	"./jv.js": 315,
	"./ka": 316,
	"./ka.js": 316,
	"./kk": 317,
	"./kk.js": 317,
	"./km": 318,
	"./km.js": 318,
	"./kn": 319,
	"./kn.js": 319,
	"./ko": 320,
	"./ko.js": 320,
	"./ky": 321,
	"./ky.js": 321,
	"./lb": 322,
	"./lb.js": 322,
	"./lo": 323,
	"./lo.js": 323,
	"./lt": 324,
	"./lt.js": 324,
	"./lv": 325,
	"./lv.js": 325,
	"./me": 326,
	"./me.js": 326,
	"./mi": 327,
	"./mi.js": 327,
	"./mk": 328,
	"./mk.js": 328,
	"./ml": 329,
	"./ml.js": 329,
	"./mr": 330,
	"./mr.js": 330,
	"./ms": 331,
	"./ms-my": 332,
	"./ms-my.js": 332,
	"./ms.js": 331,
	"./mt": 333,
	"./mt.js": 333,
	"./my": 334,
	"./my.js": 334,
	"./nb": 335,
	"./nb.js": 335,
	"./ne": 336,
	"./ne.js": 336,
	"./nl": 337,
	"./nl-be": 338,
	"./nl-be.js": 338,
	"./nl.js": 337,
	"./nn": 339,
	"./nn.js": 339,
	"./pa-in": 340,
	"./pa-in.js": 340,
	"./pl": 341,
	"./pl.js": 341,
	"./pt": 342,
	"./pt-br": 343,
	"./pt-br.js": 343,
	"./pt.js": 342,
	"./ro": 344,
	"./ro.js": 344,
	"./ru": 345,
	"./ru.js": 345,
	"./sd": 346,
	"./sd.js": 346,
	"./se": 347,
	"./se.js": 347,
	"./si": 348,
	"./si.js": 348,
	"./sk": 349,
	"./sk.js": 349,
	"./sl": 350,
	"./sl.js": 350,
	"./sq": 351,
	"./sq.js": 351,
	"./sr": 352,
	"./sr-cyrl": 353,
	"./sr-cyrl.js": 353,
	"./sr.js": 352,
	"./ss": 354,
	"./ss.js": 354,
	"./sv": 355,
	"./sv.js": 355,
	"./sw": 356,
	"./sw.js": 356,
	"./ta": 357,
	"./ta.js": 357,
	"./te": 358,
	"./te.js": 358,
	"./tet": 359,
	"./tet.js": 359,
	"./th": 360,
	"./th.js": 360,
	"./tl-ph": 361,
	"./tl-ph.js": 361,
	"./tlh": 362,
	"./tlh.js": 362,
	"./tr": 363,
	"./tr.js": 363,
	"./tzl": 364,
	"./tzl.js": 364,
	"./tzm": 365,
	"./tzm-latn": 366,
	"./tzm-latn.js": 366,
	"./tzm.js": 365,
	"./uk": 367,
	"./uk.js": 367,
	"./ur": 368,
	"./ur.js": 368,
	"./uz": 369,
	"./uz-latn": 370,
	"./uz-latn.js": 370,
	"./uz.js": 369,
	"./vi": 371,
	"./vi.js": 371,
	"./x-pseudo": 372,
	"./x-pseudo.js": 372,
	"./yo": 373,
	"./yo.js": 373,
	"./zh-cn": 374,
	"./zh-cn.js": 374,
	"./zh-hk": 375,
	"./zh-hk.js": 375,
	"./zh-tw": 376,
	"./zh-tw.js": 376
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 559;

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_annotate_annotate__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_document_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__options_popover_page__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var $ = document.querySelectorAll.bind(document);

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, loadingCtrl, alertCtrl, documentService, popoverCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.documentService = documentService;
        this.popoverCtrl = popoverCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.isLoggedIn = false;
        this.loginState = "Login";
        this.fileName = "blockusign/pdf1.pdf";
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: '1). Upload PDF', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: '2). Annotate PDF', component: __WEBPACK_IMPORTED_MODULE_5__pages_annotate_annotate__["a" /* AnnotatePage */] }
        ];
        // global vars
        if (window.location.host.includes("localhost")) {
            window.apiUrl = "http://localhost:5000";
        }
        else {
            window.apiUrl = "";
        }
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.showProfile();
            _this.setupDiscordMenu();
        });
    };
    // openPage(page) {
    //   // Reset the content nav to have just this page
    //   // we wouldn't want the back button to show in this scenario
    //   this.nav.setRoot(page.component);
    // }
    MyApp.prototype.login = function () {
        var origin = window.location.origin;
        blockstack.redirectToSignIn(origin, origin + '/manifest.json', ['store_write', 'publish_data']);
    };
    MyApp.prototype.next = function () {
        if (this.nav.getActive().name == "AnnotatePage") {
            this.nav.pop();
        }
        this.nav.push("AnnotatePage", {
            guid: this.documentService.currentDoc.guid
        });
    };
    MyApp.prototype.home = function () {
        this.nav.setRoot("HomePage");
        this.clearActive();
    };
    MyApp.prototype.logout = function () {
        blockstack.signUserOut(window.location.origin);
    };
    MyApp.prototype.showProfile = function () {
        var _this = this;
        if (blockstack.isUserSignedIn()) {
            var profile = blockstack.loadUserData();
            this.name = profile.username;
            this.isLoggedIn = true;
            this.avatar = profile.profile.image[0].contentUrl;
            this.loginState = "[Logout]";
            this.documentService.getDocumentsIndex(true).then(function (data) {
                _this.documentsList = data;
            });
        }
        else if (blockstack.isSignInPending()) {
            blockstack.handlePendingSignIn().then(function (userData) {
                window.location = window.location.origin;
                this.documentsGetList();
            });
        }
        else {
            if (localStorage.getItem('signUp') !== 'true') {
                window.location.href = "signup.html";
            }
            else {
                localStorage.setItem('signUp', 'true');
                this.login();
            }
        }
    };
    MyApp.prototype.setupDiscordMenu = function () {
        $(".focusable, .button").forEach(function (el) {
            // blur only on mouse click
            // for accessibility, keep focus when keyboard focused
            el.addEventListener("mousedown", function (e) { return e.preventDefault(); });
            el.setAttribute("tabindex", "0");
        });
        $(".server").forEach(function (el) {
            el.addEventListener("click", function () {
                var activeServer = $(".server.active")[0];
                activeServer.classList.remove("active");
                activeServer.removeAttribute("aria-selected");
                el.classList.add("active");
                el.setAttribute("aria-selected", true);
            });
        });
        $(".channel-text").forEach(function (el) {
            el.addEventListener("click", function () {
                $(".channel-text.active")[0].classList.remove("active");
                el.classList.add("active");
            });
        });
        // focus/blur on channel header click
        $(".channels-header")[0].addEventListener("click", function (e) {
            e.preventDefault();
            var focused = document.activeElement === e.target;
            focused ? e.target.blur() : e.target.focus();
        });
    };
    MyApp.prototype.documentSelected = function (e, selectedDocument) {
        this.documentService.currentDoc = selectedDocument;
        this.next();
    };
    MyApp.prototype.documentsGetList = function () {
        var _this = this;
        this.documentService.getDocumentsIndex(true).then(function (data) {
            _this.documentsList = data;
        });
    };
    MyApp.prototype.presentPopover = function (myEvent, item) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__options_popover_page__["a" /* OptionsPopoverPage */], { selectedDoc: item });
        popover.present({
            ev: myEvent,
        });
    };
    MyApp.prototype.clearActive = function () {
        $(".channel-text").forEach(function (el) {
            try {
                $(".channel-text.active")[0].classList.remove("active");
            }
            catch (e) { }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Nick/Desktop/code/blockusign/BlockUSign.Ionic/src/app/app.html"*/'<!-- <ion-menu [content]="content" scroll="false" >\n  \n\n  <ion-content scroll="false">\n    <ion-list scroll="false">\n      <button scroll="false" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu> -->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-split-pane >\n  <ion-menu [content]="content" >\n      <div class="discord" style="height: 100%; width: 300px; color:whitesmoke">\n        <!-- https://codepen.io/thesbros/pen/vxpMPp -->\n        <main class="container">\n          <aside class="servers">\n            <div class="servers-collection">\n              <div class="server focusable server-friends" role="button" aria-label="Friends unread">\n                <div class="server-icon">\n                  <svg>\n                    <use xlink:href="#icon-friends" />\n                  </svg>\n                </div>\n              </div>\n            </div>\n\n          \n            <div class="servers-collection">\n              <div class="server focusable active" role="button" aria-label="My Server" aria-selected="true">\n                <div class="server-icon">\n                 <!-- <img src="https://discordapp.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png" /> -->\n                  <img class="avatar" alt="Avatar" [src]="avatar" />\n                </div>\n              </div>\n            </div>\n          </aside>\n\n\n\n\n          <aside class="channels">\n            <header class="channels-header focusable" (click)="home()">\n\n              <!-- <img src="./assets/imgs/blockusign.png" height="45px" width="45px" /> -->\n              <img src="./assets/imgs/blockusignLogoSvg.svg" height="45px" width="45px" class="blockusign-logo" />\n              <img src="./assets/imgs/blockusignTextLoRes.png" width="120px" style="padding-left: 12px; padding-top: 10px" />\n             \n              \n            \n\n\n\n              <h3 role="header" class="channels-header-name" style="padding-right: 10px;"></h3> \n              <!-- <button ion-button style="padding: 10px 10px 10px 10px; background: green; height: 45px;"> NEW + </button> -->\n              <svg role="button" aria-label="Dropdown" class="channels-header-dropdown">\n                <use xlink:href="#icon-dropdown" />\n              </svg>\n\n             \n\n\n            </header>\n\n            <section class="channels-list">\n\n              <header class="channels-list-header focusable" (click)="home()">\n                <span>Documents</span>\n              </header>\n              \n              <ul class="channels-list-text" >\n                <div *ngFor="let item of documentsList">\n                    <li [ngClass]="(item == documentService.currentDoc) ? \'channel focusable channel-text active\' : \'channel focusable channel-text\'"   >\n                        <!-- <span class="channel-name">blockusign nda.pdf</span> -->\n                        <span (click)="documentSelected($event, item)">\n                          {{ item.fileName }}\n                        </span>\n                        <!-- <button class="button" role="button" aria-label="Invite" >\n                            <ion-icon md="md-trash" (click)="documentRemove(item)"></ion-icon>\n                        </button> -->\n                        <!-- <button class="button" role="button" aria-label="settings">\n                          <svg>\n                            <use xlink:href="#icon-channel-settings" />\n                          </svg>\n                        </button> -->\n                        <button ion-button icon-only  style="padding-left: 10px; background: transparent" (click)="presentPopover($event, item)">\n                                <ion-icon name="more"></ion-icon>\n                        </button>\n                      </li>\n                </div>\n                \n\n                <!-- <li class="channel focusable channel-text active">\n                  <span>my photo release form.pdf</span>\n                  <button class="button" role="button" aria-label="Invite">\n                    <svg>\n                      <use xlink:href="#icon-invite" />\n                    </svg>\n                  </button>\n                  <button class="button" role="button" aria-label="settings">\n                    <svg>\n                      <use xlink:href="#icon-channel-settings" />\n                    </svg>\n                  </button>\n                </li>\n\n                <li class="channel focusable channel-text">\n                  <span>may lease.pdf</span>\n                  <button class="button" role="button" aria-label="Invite">\n                    <svg>\n                      <use xlink:href="#icon-invite" />\n                    </svg>\n                  </button>\n                  <button class="button" role="button" aria-label="settings">\n                    <svg>\n                      <use xlink:href="#icon-channel-settings" />\n                    </svg>\n                  </button>\n                </li>\n\n                <li class="channel focusable channel-text">\n                  <span >escrow agreement.pdf</span>\n                  <button class="button" role="button" aria-label="Invite">\n                    <svg>\n                      <use xlink:href="#icon-invite" />\n                    </svg>\n                  </button>\n                  <button class="button" role="button" aria-label="settings">\n                    <svg>\n                      <use xlink:href="#icon-channel-settings" />\n                    </svg>\n                  </button>\n                </li> -->\n\n              </ul>\n\n\n\n              <header class="channels-list-header focusable">\n                <span>Templates</span>\n              </header>\n\n              <ul class="channels-list-text">\n                <li class="channel focusable channel-text ">\n                  <span class="channel-name">COMING SOON</span>\n                </li>\n              </ul>\n\n              <header class="channels-list-header focusable">\n                <span>Analytics</span>\n              </header>\n              <ul class="channels-list-text">\n                <li class="channel focusable channel-text ">\n                  <span class="channel-name">COMING SOON</span>\n                </li>\n              </ul>\n            </section>\n\n\n\n            <footer class="channels-footer">\n              <!-- <img class="avatar" alt="Avatar" src="https://discordapp.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png" /> -->\n              <img class="avatar" alt="Avatar" [src]="avatar" />\n              <div class="channels-footer-details">\n                <span class="username">\n                  <a (click)="logout()" style="float:right">{{name}} {{ loginState }} </a>\n                </span>\n                <!-- <span class="tag">#0001</span> -->\n              </div>\n              <!-- <div class="channels-footer-controls button-group">\n                        <button role="button" aria-label="Mute" class="button button-mute"><svg><use xlink:href="#icon-mute" /></svg></button>\n                        <button role="button" aria-label="Deafen" class="button button-deafen"><svg><use xlink:href="#icon-deafen" /></svg></button>\n                        <button role="button" aria-label="Settings" class="button button-settings"><svg><use xlink:href="#icon-settings" /></svg></button>\n                      </div> -->\n            </footer>\n          </aside>\n\n\n        </main>\n      </div>\n   \n  </ion-menu>\n  <ion-nav [root]="rootPage" main #content swipeBackEnabled="false">\n    <!-- content injected here -->\n  </ion-nav>\n  <ion-fab left top menuToggle>\n    <button ion-fab color="light" color="primary">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-split-pane>\n\n<!-- ICONS -->\n<div style="visibility: hidden">\n  <svg id="icon-friends" viewBox="-289 382 32 27.1"><style id="style3">.st0{fill:#FFFFFF;} .st1{opacity:0.6;}</style><g id="g4145" fill="#fff"><path id="path5" d="M-273 409.1c-4.1 0-6.8-.6-7.9-1.7-.5-.6-.6-1.1-.6-1.3 0-.7.1-2.9.6-3.8.1-.3.5-1 4.5-2.4-1.6-1.4-2.6-4-2.6-7.1 0-4.2 2.3-7 5.9-7.1h.1c3.6.1 5.9 2.8 5.9 7.1 0 3.1-1 5.7-2.6 7.1 4 1.4 4.4 2.1 4.5 2.4.4.9.5 3.1.6 3.8 0 .2 0 .7-.6 1.3-1.1 1.1-3.7 1.7-7.8 1.7zm0-2c5.1 0 6.2-.9 6.4-1.1-.1-1.1-.2-2.3-.3-2.7-.6-.4-2.9-1.3-4.8-1.9l-.7-.2-.1-2 .7-.3c1.7-.6 2.8-3.1 2.8-6.1 0-3.1-1.5-5-3.9-5.1-2.5 0-4 2-4 5.1 0 3 1.1 5.5 2.8 6.1l.7.3-.1 2-.7.2c-1.9.6-4.2 1.5-4.8 1.9-.1.4-.3 1.6-.3 2.7.1.2 1.3 1.1 6.3 1.1z" class="st0"/><g id="g7" class="st1" opacity=".6"><path id="path9" d="M-257 402.4c0-.7-.1-2.9-.6-3.8-.1-.3-.5-1-4.5-2.4 1.6-1.4 2.6-4 2.6-7.1 0-4.2-2.3-7-5.9-7.1h-.1c-1.9 0-3.5.8-4.5 2.2.6.3 1.2.6 1.8 1 .7-.8 1.6-1.3 2.8-1.3 2.4 0 3.9 2 3.9 5.1 0 3-1.1 5.5-2.8 6.1l-.7.3.1 2 .7.2c1.9.6 4.3 1.5 4.8 1.9.1.4.3 1.6.3 2.7-.2.2-1 .8-3.8 1 .1.6.2 1.2.2 2 2.5-.2 4.2-.8 5-1.6.7-.5.7-1 .7-1.2z" class="st0"/><path id="path11" d="M-287 402.3c.1-1.1.2-2.3.3-2.7.6-.4 2.9-1.3 4.8-1.9l.7-.2.1-2-.7-.3c-1.6-.6-2.8-3.1-2.8-6.1 0-3.1 1.5-5 4-5.1 1.2 0 2.1.5 2.8 1.3.5-.4 1.1-.8 1.8-1-1-1.4-2.6-2.2-4.5-2.2h-.1c-3.6 0-5.9 2.8-5.9 7.1 0 3.1 1 5.7 2.6 7.1-4 1.4-4.4 2.1-4.5 2.4-.4.9-.5 3.1-.6 3.8 0 .2 0 .7.6 1.3.8.9 2.5 1.4 5.1 1.6 0-.7.1-1.4.2-2-2.9-.3-3.7-.9-3.9-1.1z" class="st0"/></g></g></svg>\n\n  <svg id="icon-mute" viewBox="0 0 16 16"><path fill="#5D6063" d="M12.5,8v1c0,2.2-1.8,4-4,4h-1c-2.2,0-4-1.8-4-4V8h-1v1 c0,2.8,2.2,5,5,5v1H7c-0.3,0-0.5,0.2-0.5,0.5C6.5,15.8,6.7,16,7,16h2c0.3,0,0.5-0.2,0.5-0.5C9.5,15.2,9.3,15,9,15H8.5v-1 c2.8,0,5-2.2,5-5V8H12.5z M8,12c1.9,0,3.5-1.6,3.5-3.5v-5C11.5,1.6,9.9,0,8,0C6.1,0,4.5,1.6,4.5,3.5v5C4.5,10.4,6.1,12,8,12z M5.5,3.5C5.5,2.1,6.6,1,8,1c1.4,0,2.5,1.1,2.5,2.5v5C10.5,9.9,9.4,11,8,11c-1.4,0-2.5-1.1-2.5-2.5V3.5z"/></svg>\n  \n  <svg id="icon-deafen" viewBox="0 0 16 16"><path fill="#5D6063" d="M15.9,9C16,8.7,16,8.3,16,8c0-4.4-3.6-8-8-8C3.6,0,0,3.6,0,8 c0,0.3,0,0.7,0.1,1h0C0,9.2,0,9.3,0,9.5v4C0,14.3,0.7,15,1.5,15h2C4.3,15,5,14.3,5,13.5v-4C5,8.7,4.3,8,3.5,8h-2 C1.3,8,1.2,8,1,8.1C1,8.1,1,8,1,8c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7c0,0,0,0.1,0,0.1C14.8,8,14.7,8,14.5,8h-2C11.7,8,11,8.7,11,9.5 v4c0,0.8,0.7,1.5,1.5,1.5h2c0.8,0,1.5-0.7,1.5-1.5v-4C16,9.3,16,9.2,15.9,9L15.9,9z M1.5,9h2C3.8,9,4,9.2,4,9.5v4 C4,13.8,3.8,14,3.5,14h-2C1.2,14,1,13.8,1,13.5v-4C1,9.2,1.2,9,1.5,9z M15,13.5c0,0.3-0.2,0.5-0.5,0.5h-2c-0.3,0-0.5-0.2-0.5-0.5 v-4C12,9.2,12.2,9,12.5,9h2C14.8,9,15,9.2,15,9.5V13.5z"/></svg>\n  \n  <svg id="icon-settings" viewBox="0 0 16 16"><path fill="#5D6063" d="M8,5C6.3,5,5,6.3,5,8c0,1.7,1.3,3,3,3c1.7,0,3-1.3,3-3 C11,6.3,9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C10,9.1,9.1,10,8,10z M16,8c0-1-0.8-1.9-1.8-2 c-0.1-0.3-0.3-0.7-0.4-1c0.7-0.8,0.6-1.9-0.1-2.7c-0.7-0.7-1.9-0.8-2.7-0.1c-0.3-0.2-0.6-0.3-1-0.4C9.9,0.8,9,0,8,0 C7,0,6.1,0.8,6,1.8C5.7,1.9,5.3,2.1,5,2.2C4.2,1.6,3.1,1.6,2.3,2.3C1.6,3.1,1.6,4.2,2.2,5C2.1,5.3,1.9,5.7,1.8,6C0.8,6.1,0,7,0,8 c0,1,0.8,1.9,1.8,2c0.1,0.3,0.3,0.7,0.4,1c-0.7,0.8-0.6,1.9,0.1,2.7c0.7,0.7,1.9,0.8,2.7,0.1c0.3,0.2,0.6,0.3,1,0.4 C6.1,15.2,7,16,8,16c1,0,1.9-0.8,2-1.8c0.3-0.1,0.7-0.3,1-0.4c0.8,0.7,1.9,0.6,2.7-0.1c0.7-0.7,0.8-1.9,0.1-2.7 c0.2-0.3,0.3-0.6,0.4-1C15.2,9.9,16,9,16,8z M13.4,9c-0.1,0.8-0.5,1.5-0.9,2.1l0.4,0.4c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0 l-0.4-0.4C10.5,13,9.8,13.3,9,13.4V14c0,0.6-0.4,1-1,1c-0.6,0-1-0.4-1-1v-0.6c-0.8-0.1-1.5-0.5-2.1-0.9l-0.4,0.4 c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l0.4-0.4C3,10.5,2.7,9.8,2.6,9H2C1.4,9,1,8.6,1,8c0-0.6,0.4-1,1-1h0.6 C2.7,6.2,3,5.5,3.5,4.9L3.1,4.5c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l0.4,0.4C5.5,3,6.2,2.7,7,2.6V2c0-0.6,0.4-1,1-1 c0.6,0,1,0.4,1,1v0.6c0.8,0.1,1.5,0.5,2.1,0.9l0.4-0.4c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-0.4,0.4C13,5.5,13.3,6.2,13.4,7 H14c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1H13.4z"/></svg>\n  \n  <svg id="icon-dropdown" viewBox="0 0 18 18"><style>.dd{stroke:#ABADAF;stroke-width:2px;stroke-dashoffset:1;stroke-dasharray:inherit}</style><path class="dd" stroke="#FFF" d="M4.5 4.5l9 9" stroke-linecap="round"></path><path class="dd" stroke="#FFF" d="M13.5 4.5l-9 9" stroke-linecap="round"></path></svg>\n  \n  <svg id="icon-invite" viewBox="0 0 16 16"><path fill="#fff" d="M6.3,3.4L8,1.7v9.8C8,11.8,8.2,12,8.5,12C8.8,12,9,11.8,9,11.5V1.7l1.7,1.7c0.2,0.2,0.5,0.2,0.7,0c0.2-0.2,0.2-0.5,0-0.7L8.9,0.2c0,0,0,0,0-0.1C8.8,0,8.6,0,8.5,0c0,0,0,0,0,0c0,0,0,0,0,0C8.4,0,8.2,0,8.1,0.1c0,0,0,0,0,0.1L5.6,2.7c-0.2,0.2-0.2,0.5,0,0.7C5.8,3.5,6.1,3.5,6.3,3.4z M14,4h-1.5v1h1C13.8,5,14,5.2,14,5.5v9c0,0.3-0.2,0.5-0.5,0.5h-10C3.2,15,3,14.8,3,14.5v-9C3,5.2,3.2,5,3.5,5h1V4H3C2.4,4,2,4.4,2,5v10c0,0.6,0.4,1,1,1h11c0.6,0,1-0.4,1-1V5C15,4.4,14.6,4,14,4z"/></svg>\n  \n  <svg id="icon-channel-settings" viewBox="0 0 16 16"><path fill="#fff" d="M8,5C6.3,5,5,6.3,5,8c0,1.7,1.3,3,3,3c1.7,0,3-1.3,3-3 C11,6.3,9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C10,9.1,9.1,10,8,10z M16,8c0-1-0.8-1.9-1.8-2 c-0.1-0.3-0.3-0.7-0.4-1c0.7-0.8,0.6-1.9-0.1-2.7c-0.7-0.7-1.9-0.8-2.7-0.1c-0.3-0.2-0.6-0.3-1-0.4C9.9,0.8,9,0,8,0 C7,0,6.1,0.8,6,1.8C5.7,1.9,5.3,2.1,5,2.2C4.2,1.6,3.1,1.6,2.3,2.3C1.6,3.1,1.6,4.2,2.2,5C2.1,5.3,1.9,5.7,1.8,6C0.8,6.1,0,7,0,8 c0,1,0.8,1.9,1.8,2c0.1,0.3,0.3,0.7,0.4,1c-0.7,0.8-0.6,1.9,0.1,2.7c0.7,0.7,1.9,0.8,2.7,0.1c0.3,0.2,0.6,0.3,1,0.4 C6.1,15.2,7,16,8,16c1,0,1.9-0.8,2-1.8c0.3-0.1,0.7-0.3,1-0.4c0.8,0.7,1.9,0.6,2.7-0.1c0.7-0.7,0.8-1.9,0.1-2.7 c0.2-0.3,0.3-0.6,0.4-1C15.2,9.9,16,9,16,8z M13.4,9c-0.1,0.8-0.5,1.5-0.9,2.1l0.4,0.4c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0 l-0.4-0.4C10.5,13,9.8,13.3,9,13.4V14c0,0.6-0.4,1-1,1c-0.6,0-1-0.4-1-1v-0.6c-0.8-0.1-1.5-0.5-2.1-0.9l-0.4,0.4 c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l0.4-0.4C3,10.5,2.7,9.8,2.6,9H2C1.4,9,1,8.6,1,8c0-0.6,0.4-1,1-1h0.6 C2.7,6.2,3,5.5,3.5,4.9L3.1,4.5c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l0.4,0.4C5.5,3,6.2,2.7,7,2.6V2c0-0.6,0.4-1,1-1 c0.6,0,1,0.4,1,1v0.6c0.8,0.1,1.5,0.5,2.1,0.9l0.4-0.4c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-0.4,0.4C13,5.5,13.3,6.2,13.4,7 H14c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1H13.4z"/></svg>\n</div>\n'/*ion-inline-end:"/Users/Nick/Desktop/code/blockusign/BlockUSign.Ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__services_document_service__["a" /* DocumentService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CoinService = (function () {
    function CoinService(http) {
        this.http = http;
        this.baseUrl = "https://min-api.cryptocompare.com/data/histohour?fsym=";
        this.coin = "IOT";
        this.symbol = "IOT";
        this.params = "&tsym=USD&limit=60&aggregate=3&e=CCCAGG";
        this.url = "";
    }
    CoinService.prototype.getCoin = function (coin) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.coin = coin;
                        this.url = this.baseUrl + this.coin + this.params;
                        return [4 /*yield*/, this.http.get(this.url).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    CoinService.prototype.getAllCoins = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get("https://min-api.cryptocompare.com/data/all/coinlist").toPromise()];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, resp];
                }
            });
        });
    };
    CoinService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CoinService);
    return CoinService;
}());

//# sourceMappingURL=coin.service.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoCompareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CryptoCompareService = (function () {
    function CryptoCompareService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.baseUrl = "https://www.cryptocompare.com/api/data";
        this.apiUrl = window.apiUrl; //http://localhost:5000 http://popbot2.azurewebsites.net
        this.currency = "BTC";
        this.aggregate = "1";
    }
    CryptoCompareService.prototype.getTopCoins = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, coinRefResponse, coinsRef, topCoins;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://api.coinmarketcap.com/v1/ticker/?limit=377";
                        return [4 /*yield*/, this.http.get(url).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, this.http.get("https://min-api.cryptocompare.com/data/all/coinlist").toPromise()];
                    case 2:
                        coinRefResponse = _a.sent();
                        coinsRef = coinRefResponse.json().Data;
                        topCoins = {};
                        response.json().forEach(function (element) {
                            var coinData = coinsRef[element.symbol];
                            if (coinData) {
                                coinData.rank = element.rank;
                                topCoins[element.symbol] = coinData;
                            }
                            else {
                                console.error("Cannot find " + element.symbol);
                            }
                        });
                        return [2 /*return*/, topCoins];
                }
            });
        });
    };
    CryptoCompareService.prototype.getSocialStats = function (coinId, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var api, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!coinId)
                            coinId = 306304;
                        if (!limit)
                            limit = 337;
                        api = "/socialstatshistohour/?aggregate=1&id=" + coinId + "&limit=" + limit;
                        this.url = this.baseUrl + api;
                        return [4 /*yield*/, this.http.get(this.url).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    CryptoCompareService.prototype.getCoins = function (coinLimit, histPriceLimit, socialLimit, currency, aggregate) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.currency = currency;
                        this.aggregate = aggregate;
                        if (!coinLimit)
                            coinLimit = 10;
                        if (!histPriceLimit)
                            histPriceLimit = 24;
                        if (!socialLimit)
                            socialLimit = 24;
                        return [4 /*yield*/, this.http.get(this.apiUrl + "/api/coins?coinLimit=" + coinLimit + "&histPriceLimit=" + histPriceLimit + "&socialLimit=" + socialLimit + "&currency=" + this.currency + "&aggregate=" + this.aggregate).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CryptoCompareService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */]])
    ], CryptoCompareService);
    return CryptoCompareService;
}());

//# sourceMappingURL=cryptocompare.service.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var SlackService = (function () {
    function SlackService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.baseUrl = window.apiUrl + "/api/slack"; //"https://hooks.slack.com/services/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";
    }
    SlackService.prototype.sendAlert = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.baseUrl + "/" + msg).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SlackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */]])
    ], SlackService);
    return SlackService;
}());

//# sourceMappingURL=slack.service.js.map

/***/ })

},[378]);
//# sourceMappingURL=main.js.map