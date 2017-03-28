import { ElementRef } from '@angular/core';
import { SplitPaneComponent } from './split-pane.component';
export declare class HorizontalSplitPaneComponent extends SplitPaneComponent {
    protected outerContainer: ElementRef;
    test: number;
    protected getTotalSize(): number;
    protected getPrimarySize(): number;
    protected getSecondarySize(): number;
    protected dividerPosition(size: number): void;
    onMousemove(event: MouseEvent): boolean;
}
