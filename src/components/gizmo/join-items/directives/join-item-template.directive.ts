import { Directive, Input } from '@angular/core';
import { JoinItemsComponent, JoinItemsComponentContext } from '../join-items.component';

/**
 * type check for `JoinItemsComponent` template
 */
@Directive({
  selector: 'ng-template[appJoinItemTemplate]'
})
export class JoinItemTemplateDirective<T = {}> {
  constructor() { }

  @Input()
  set appJoinItemTemplate(_: JoinItemsComponent<T>) {
  }

  static ngTemplateContextGuard<T>(_: JoinItemTemplateDirective<T>, ctx: unknown): ctx is JoinItemsComponentContext<T> {
    return true;
  }
}
