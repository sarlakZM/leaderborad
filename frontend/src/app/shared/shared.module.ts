import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PipesGlobalModule } from './pipe/pipes-global.module';
import { ToastComponent } from './component/toast/toast.component';
import { AngularMaterialModule } from './angular-material.module';
import { DirectivesGlobalModule } from './directive/directive-global.module';


@NgModule({
  declarations: [
    ToastComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    PipesGlobalModule,
    DirectivesGlobalModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      tapToDismiss: false,
      preventDuplicates: false,
      maxOpened: 6,
      enableHtml: true,
      closeButton: true,
      toastComponent: ToastComponent,
    }),

  ],
  entryComponents:[
    ToastComponent
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    PipesGlobalModule,
    DirectivesGlobalModule,
  ],
  providers:[
    {
      provide: MAT_DIALOG_DATA,
      useValue: {} // Add any data you wish to test if it is passed/used correctly
    },
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class SharedModule {}
