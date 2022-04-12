import { Inject, Injectable, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { BaseMultiService } from '../service/base-multi.service';
import { HandleErrorService } from '../service/handleError.service';
import { SystemMessage } from '../support/messages.helper';

@Injectable()
export abstract class BaseFormModalAddComponent <T, S extends BaseMultiService<T> = BaseMultiService<T>> implements OnInit {
  isLoading: boolean = false;
  resMessage = { description : '', name: ''};
  formSumitAttempt: boolean = false;
  protected readonly notificationService: NotificationService;
  protected subscription! : Subscription;

  constructor(
              @Inject(FormGroup) public readonly formGroup: any,
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

  add(): void{
    
      if(this.formGroup.invalid){
        return;
      }

      this.isLoading = false;
      let data  = this.formGroup.value;
      data.step_counter  = data.step_counter === true ? 1: 0 ;
      this.subscription = this.entityService.create(data).subscribe({
        next: (result: any) => { 
          result.hasOwnProperty('error') && (this.resMessage = result['error'])
          this.isLoading = true;
        },
        error: (error) => { 
          this.isLoading = false;
          this.handleErrorService(error);
        },
        complete: () => { 
          this.isLoading = true;
          const title = this.titleForm;
          this.notificationService.success(title, SystemMessage.addedSuccess);
          this.dialogRef.close(`${this.formGroup.value}`);
        }
      })
  }

  handleErrorService(error: any){
    let handleError = new HandleErrorService();
    let res = handleError.handleError(error)

    if (typeof res.result == 'string') {
      this.notificationService.error('An error occurred', res.result);
    }else{
      this.resMessage = res.result;
    }
  }
  
  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

}



