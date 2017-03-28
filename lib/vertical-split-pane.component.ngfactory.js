"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("@angular/core");
var import1 = require("./vertical-split-pane.component");
var import2 = require("./vertical-split-pane-separator.component.ngfactory");
var import3 = require("./vertical-split-pane-separator.component");
var styles_VerticalSplitPaneComponent = ['.v-outer[_ngcontent-%COMP%] {\n      height: 100%;\n      width: 100%;\n      display: flex;\n    }\n\n    .left-component[_ngcontent-%COMP%] {\n      width: calc(50% - 4px);\n    }\n\n    .right-component[_ngcontent-%COMP%] {\n      width: calc(50% - 4px);\n    }'];
exports.RenderType_VerticalSplitPaneComponent = import0.ɵcrt({
    encapsulation: 0,
    styles: styles_VerticalSplitPaneComponent,
    data: {}
});
function View_VerticalSplitPaneComponent_0(l) {
    return import0.ɵvid(0, [
        import0.ɵqud(201326592, 1, { primaryComponent: 0 }),
        import0.ɵqud(201326592, 2, { secondaryComponent: 0 }),
        import0.ɵqud(201326592, 3, { outerContainer: 0 }),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, [
            [
                3,
                0
            ],
            [
                'outer',
                1
            ]
        ], null, 15, 'div', [[
                'class',
                'v-outer'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, [
            [
                1,
                0
            ],
            [
                'primaryComponent',
                1
            ]
        ], null, 3, 'div', [[
                'class',
                'left-component'
            ]
        ], [[
                8,
                'hidden',
                0
            ]
        ], null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n      '])),
        import0.ɵncd(null, 0),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 2, 'vertical-split-separator', [], [[
                8,
                'hidden',
                0
            ]
        ], [
            [
                null,
                'notifyWillChangeSize'
            ],
            [
                null,
                'mousedown'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('mousedown' === en)) {
                var pd_0 = (import0.ɵnov(v, 12).onMousedown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('notifyWillChangeSize' === en)) {
                var pd_1 = (co.notifyWillChangeSize($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, import2.View_VerticalSplitSeparatorComponent_0, import2.RenderType_VerticalSplitSeparatorComponent)),
        import0.ɵdid(57344, [[
                'separator',
                4
            ]
        ], 0, import3.VerticalSplitSeparatorComponent, [], null, { notifyWillChangeSize: 'notifyWillChangeSize' }),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, [
            [
                2,
                0
            ],
            [
                'secondaryComponent',
                1
            ]
        ], null, 3, 'div', [[
                'class',
                'right-component'
            ]
        ], [[
                8,
                'hidden',
                0
            ]
        ], null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n      '])),
        import0.ɵncd(null, 1),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵted(null, ['\n  ']))
    ], function (ck, v) {
        ck(v, 12, 0);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.primaryToggledOff;
        ck(v, 6, 0, currVal_0);
        var currVal_1 = (co.primaryToggledOff || co.secondaryToggledOff);
        ck(v, 11, 0, currVal_1);
        var currVal_2 = co.secondaryToggledOff;
        ck(v, 15, 0, currVal_2);
    });
}
exports.View_VerticalSplitPaneComponent_0 = View_VerticalSplitPaneComponent_0;
function View_VerticalSplitPaneComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'vertical-split-pane', [], [[
                4,
                'height',
                null
            ]
        ], [
            [
                null,
                'mouseup'
            ],
            [
                null,
                'mousemove'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('mouseup' === en)) {
                var pd_0 = (import0.ɵnov(v, 1).onMouseup($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('mousemove' === en)) {
                var pd_1 = (import0.ɵnov(v, 1).onMousemove($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, View_VerticalSplitPaneComponent_0, exports.RenderType_VerticalSplitPaneComponent)),
        import0.ɵdid(2383872, null, 0, import1.VerticalSplitPaneComponent, [], null, null)
    ], null, function (ck, v) {
        var currVal_0 = import0.ɵnov(v, 1).hostHeight;
        ck(v, 0, 0, currVal_0);
    });
}
exports.VerticalSplitPaneComponentNgFactory = import0.ɵccf('vertical-split-pane', import1.VerticalSplitPaneComponent, View_VerticalSplitPaneComponent_Host_0, {
    initialRatio: 'primary-component-initialratio',
    primaryMinSize: 'primary-component-minsize',
    secondaryMinSize: 'secondary-component-minsize',
    primaryToggledOff: 'primary-component-toggled-off',
    secondaryToggledOff: 'secondary-component-toggled-off',
    localStorageKey: 'local-storage-key'
}, {
    notifySizeDidChange: 'on-change',
    notifyBeginResizing: 'on-begin-resizing',
    notifyEndedResizing: 'on-ended-resizing'
}, [
    '.split-pane-content-primary',
    '.split-pane-content-secondary'
]);
//# sourceMappingURL=vertical-split-pane.component.ngfactory.js.map