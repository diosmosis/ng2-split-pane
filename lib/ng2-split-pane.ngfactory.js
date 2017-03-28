"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("@angular/core");
var import1 = require("./ng2-split-pane");
var import2 = require("@angular/common");
var SplitPaneModuleInjector = (function (_super) {
    __extends(SplitPaneModuleInjector, _super);
    function SplitPaneModuleInjector(parent) {
        return _super.call(this, parent, [], []) || this;
    }
    Object.defineProperty(SplitPaneModuleInjector.prototype, "_NgLocalization_2", {
        get: function () {
            if ((this.__NgLocalization_2 == null)) {
                (this.__NgLocalization_2 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID)));
            }
            return this.__NgLocalization_2;
        },
        enumerable: true,
        configurable: true
    });
    SplitPaneModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._SplitPaneModule_1 = new import1.SplitPaneModule();
        return this._SplitPaneModule_1;
    };
    SplitPaneModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import1.SplitPaneModule)) {
            return this._SplitPaneModule_1;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_2;
        }
        return notFoundResult;
    };
    SplitPaneModuleInjector.prototype.destroyInternal = function () {
    };
    return SplitPaneModuleInjector;
}(import0.ɵNgModuleInjector));
exports.SplitPaneModuleNgFactory = new import0.NgModuleFactory(SplitPaneModuleInjector, import1.SplitPaneModule);
//# sourceMappingURL=ng2-split-pane.ngfactory.js.map