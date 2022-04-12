import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';

/**
 * Global Module to use global pipes in any where need in project without problem
 * You need add this module in *.module.ts file of component you need use global pipes in there group of components.
 * @export null
 * @class PipesGlobalModule
 */
@NgModule({
  imports: [CommonModule],
  declarations: [
    CapitalizePipe

  ],
  exports: [
    CapitalizePipe

  ]
})
export class PipesGlobalModule {}
