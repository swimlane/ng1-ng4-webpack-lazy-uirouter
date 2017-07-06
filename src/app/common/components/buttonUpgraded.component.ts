import { Directive, ElementRef, Injector, SimpleChanges, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'cool-button'
})
export class CoolButtonDirective extends UpgradeComponent {
  @Input() age;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('coolButton', elementRef, injector);
  }
}
