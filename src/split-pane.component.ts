import { Component, ViewChild, ElementRef, HostListener, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'split-pane',
  host: {'style': 'height: 100%'}
})
export abstract class SplitPaneComponent {

  @ViewChild('primaryComponent') protected primaryComponent: ElementRef;
  @ViewChild('secondaryComponent') protected secondaryComponent: ElementRef;

  @Input('primary-component-minsize') protected primaryMinSize: number = 0;
  @Input('secondary-component-minsize') protected secondaryMinSize: number = 0;
  @Input('local-storage-key') private localStorageKey: string = null;

  private dividerSize: number = 8.0;
  protected isResizing: boolean = false;

  ngAfterViewInit() {
    if (this.localStorageKey != null) {
      let ratioStr = localStorage.getItem(this.localStorageKey);
      if (ratioStr != null) {
        let ratio: number = JSON.parse(ratioStr);
        let size = ratio * this.getTotalSize();
        this.applySizeChange(size);
      }
    }
  }

  protected abstract getTotalSize(): number;
  protected abstract getPrimarySize(): number;
  protected abstract getSecondarySize(): number;
  protected abstract dividerPosition(size: number);

  protected getAvailableSize(): number {
    return this.getTotalSize() - this.dividerSize;
  }

  protected applySizeChange(size: number) {
    if (size != 0) {
      let primarySize = this.checkValidBounds(size, this.primaryMinSize, this.getAvailableSize() - this.secondaryMinSize);
      // console.debug("current: " + this.getPrimarySize()
      //           + " want to be: " + size
      //           + " min: " + this.primaryMinSize
      //           + " max: " + (this.getTotalSize() - this.secondaryMinSize)
      //           + " constrained to: " + primarySize
      //         );
      this.dividerPosition(primarySize);
    }
  }

  private notifyWillChangeSize(resizing: boolean) {
    this.isResizing = resizing;
    this.primaryComponent.nativeElement.style.cursor = "ns-resize";
    this.secondaryComponent.nativeElement.style.cursor = "ns-resize";
  }

  private checkValidBounds(newSize: number, minSize: number, maxSize: number): number {
    return newSize >= minSize 
            ? (newSize <= maxSize) 
                ? newSize 
                : maxSize 
            : minSize;
  }

  private stopResizing() {
    this.isResizing = false;
    this.primaryComponent.nativeElement.style.cursor = "auto";
    this.secondaryComponent.nativeElement.style.cursor = "auto";

    if (this.localStorageKey != null) {
      let ratio = this.getPrimarySize() / (this.getTotalSize());
      localStorage.setItem(this.localStorageKey, JSON.stringify(ratio));
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseup(event) {
    this.stopResizing()
    return false;
  }
}