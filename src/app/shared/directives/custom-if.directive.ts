import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf(condicion: boolean) {
    if (condicion) {
      this.viewContaier.createEmbeddedView(this.templateRef)
    } else {
      this.viewContaier.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContaier: ViewContainerRef) {}

}
