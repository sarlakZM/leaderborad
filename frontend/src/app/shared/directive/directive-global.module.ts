import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './focus.directive';

/**
 * Global Module to use global directives in any where need in project without problem
 * You need add this module in *.module.ts file of component you need use global directives in there group of components.
 * @export null
 * @class DirectivesGlobalModule
 */
@NgModule({
  imports: [CommonModule],
  declarations: [AutofocusDirective],
  exports: [AutofocusDirective]
})
export class DirectivesGlobalModule {}
