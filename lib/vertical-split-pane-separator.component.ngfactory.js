"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("@angular/core");
var import1 = require("./vertical-split-pane-separator.component");
var styles_VerticalSplitSeparatorComponent = ['[_nghost-%COMP%] {\n      width: 7px;\n      background-color: #fff;\n      border-left: 1px solid #ddd;\n      cursor: ew-resize;\n      position: relative;\n    }\n    [_nghost-%COMP%]:hover {\n      background-color: #fafafa;\n    }\n\n    .handle[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 35px;\n      background-color: #eee;\n      position: absolute;\n      top: calc(50% - 17px);\n    }'];
exports.RenderType_VerticalSplitSeparatorComponent = import0.ɵcrt({
    encapsulation: 0,
    styles: styles_VerticalSplitSeparatorComponent,
    data: {}
});
function View_VerticalSplitSeparatorComponent_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'div', [[
                'class',
                'handle'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n  ']))
    ], null, null);
}
exports.View_VerticalSplitSeparatorComponent_0 = View_VerticalSplitSeparatorComponent_0;
function View_VerticalSplitSeparatorComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'vertical-split-separator', [], null, [[
                null,
                'mousedown'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('mousedown' === en)) {
                var pd_0 = (import0.ɵnov(v, 1).onMousedown($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_VerticalSplitSeparatorComponent_0, exports.RenderType_VerticalSplitSeparatorComponent)),
        import0.ɵdid(57344, null, 0, import1.VerticalSplitSeparatorComponent, [], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
exports.VerticalSplitSeparatorComponentNgFactory = import0.ɵccf('vertical-split-separator', import1.VerticalSplitSeparatorComponent, View_VerticalSplitSeparatorComponent_Host_0, {}, { notifyWillChangeSize: 'notifyWillChangeSize' }, []);
//# sourceMappingURL=vertical-split-pane-separator.component.ngfactory.js.map