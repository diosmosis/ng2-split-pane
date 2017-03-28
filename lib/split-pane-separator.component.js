"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SplitSeparatorComponent = (function () {
    function SplitSeparatorComponent() {
        this.notifyWillChangeSize = new core_1.EventEmitter();
    }
    SplitSeparatorComponent.prototype.ngOnInit = function () {
    };
    SplitSeparatorComponent.prototype.onMousedown = function (event) {
        this.notifyWillChangeSize.emit(true);
        return false;
    };
    return SplitSeparatorComponent;
}());
SplitSeparatorComponent.propDecorators = {
    'notifyWillChangeSize': [{ type: core_1.Output },],
    'onMousedown': [{ type: core_1.HostListener, args: ['mousedown', ['$event'],] },],
};
exports.SplitSeparatorComponent = SplitSeparatorComponent;
//# sourceMappingURL=split-pane-separator.component.js.map