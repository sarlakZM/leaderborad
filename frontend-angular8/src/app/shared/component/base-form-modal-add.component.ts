import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { ErrorUtils } from 'src/app/shared/support/error.utils';
import { BaseMultiService } from '../api/base-multi.service';
import { CapitalizePipe } from '../pipe/capitalize.pipe';


export abstract class BaseFormModalAddComponent <T, S extends BaseMultiService<T> = BaseMultiService<T>> implements OnInit {
  isLoading: boolean = false;
  resMessage: {[k: string]: any}  = {};
  formSumitAttempt: boolean = false;
  protected readonly notificationService: NotificationService;

  constructor(
              public formGroup: FormGroup,
              @Inject(Object) protected readonly entityService: S,
              injector: Injector,
              @Inject(String) public readonly titleForm: string,
              public readonly dialogRef: MatDialogRef<any>
              ) {        
                this.notificationService = injector.get(NotificationService); 
     }


  ngOnInit() { }

  
  isFieldValid(field: string) {
    return (  (!this.formGroup.get(field).valid  && 
               this.formGroup.get(field).errors  && 
                (this.formGroup.get(field).touched || this.formGroup.get(field).dirty) 
            ) ||
             (this.formGroup.get(field).untouched && this.formSumitAttempt));
  }

  async add():  Promise<void> {
    
      if(this.formGroup.invalid){
        return;
      }

      this.isLoading = false;
      let data  = this.formGroup.value;
      data.step_counter  = data.step_counter === true ? 1: 0 ;
      try {
        const title = this.titleForm;
        const messagePrefix =new CapitalizePipe().transform(title.toLowerCase());
        const result = await this.entityService.create(data);
        this.isLoading = true;
        if(result.hasOwnProperty('error')){
            this.resMessage = result['error']
        }else{
            this.notificationService.success(title, `${messagePrefix} successfully created.`);
            this.dialogRef.close(`${this.formGroup.value}`);
        }

      } catch (error) {
        this.isLoading = false;
        this.notificationService.error('An error occurred', ErrorUtils.getMessage(error));
      }

  }

  

}



