/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './ng2-split-pane';
import * as import2 from '@angular/common';
class SplitPaneModuleInjector extends import0.ɵNgModuleInjector<import1.SplitPaneModule> {
  _CommonModule_0:import2.CommonModule;
  _SplitPaneModule_1:import1.SplitPaneModule;
  __NgLocalization_2:import2.NgLocaleLocalization;
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_2():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_2 == null)) { (this.__NgLocalization_2 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_2;
  }
  createInternal():import1.SplitPaneModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._SplitPaneModule_1 = new import1.SplitPaneModule();
    return this._SplitPaneModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.SplitPaneModule)) { return this._SplitPaneModule_1; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const SplitPaneModuleNgFactory:import0.NgModuleFactory<import1.SplitPaneModule> = new import0.NgModuleFactory<any>(SplitPaneModuleInjector,import1.SplitPaneModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2JlbmFrYV9tb29ydGhpL1Byb2plY3RzL25nMi1zcGxpdC1wYW5lL3NyYy9uZzItc3BsaXQtcGFuZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9iZW5ha2FfbW9vcnRoaS9Qcm9qZWN0cy9uZzItc3BsaXQtcGFuZS9zcmMvbmcyLXNwbGl0LXBhbmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
