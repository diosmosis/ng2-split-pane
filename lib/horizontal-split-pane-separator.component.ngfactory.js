"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("@angular/core");
var import1 = require("./horizontal-split-pane-separator.component");
var styles_HorizontalSplitSeparatorComponent = ['[_nghost-%COMP%] {\n      height: 7px;\n      background-color: #fff;\n      border-top: 1px solid #ddd;\n      cursor: ns-resize;\n    }\n    [_nghost-%COMP%]:hover {\n      background-color: #fafafa;\n    }\n    .handle[_ngcontent-%COMP%] {\n      width: 35px;\n      height: 100%;\n      background-color: #eee;\n      margin: auto;\n    }'];
exports.RenderType_HorizontalSplitSeparatorComponent = import0.ɵcrt({
    encapsulation: 0,
    styles: styles_HorizontalSplitSeparatorComponent,
    data: {}
});
function View_HorizontalSplitSeparatorComponent_0(l) {
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
exports.View_HorizontalSplitSeparatorComponent_0 = View_HorizontalSplitSeparatorComponent_0;
function View_HorizontalSplitSeparatorComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'horizontal-split-separator', [], null, [[
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
        }, View_HorizontalSplitSeparatorComponent_0, exports.RenderType_HorizontalSplitSeparatorComponent)),
        import0.ɵdid(57344, null, 0, import1.HorizontalSplitSeparatorComponent, [], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
exports.HorizontalSplitSeparatorComponentNgFactory = import0.ɵccf('horizontal-split-separator', import1.HorizontalSplitSeparatorComponent, View_HorizontalSplitSeparatorComponent_Host_0, {}, { notifyWillChangeSize: 'notifyWillChangeSize' }, []);
//# sourceMappingURL=horizontal-split-pane-separator.component.ngfactory.js.map