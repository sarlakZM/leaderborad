import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatTableModule, 
        MatTooltipModule, 
        MatIconModule,
        MatDialogModule,
        MatTabsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        MatInputModule,
        MatProgressBarModule,
        MatSlideToggleModule,
        MatCardModule,
        MAT_DIALOG_DATA
      
        } from '@angular/material';
import { PipesGlobalModule } from './pipe/pipes-global.module';
import { ToastComponent } from './component/toast/toast.component';


@NgModule({
  declarations: [
    ToastComponent,
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      tapToDismiss: false,
      preventDuplicates: false,
      positionClass: 'toast-top-right',
      maxOpened: 6,
      enableHtml: true,
      closeButton: true,
      toastComponent: ToastComponent,
    }),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatGridListModule,
    PipesGlobalModule,
    MatInputModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatCardModule,
    
    
  ],
  entryComponents:[
    ToastComponent
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    PipesGlobalModule,
    MatGridListModule,
    MatInputModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatCardModule
    
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
