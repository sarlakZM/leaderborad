

import { Component, Inject, Injector} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSlideToggleChange } from '@angular/material';
import { UserService } from 'src/app/shared/api/user.service';
import { BaseFormModalAddComponent } from 'src/app/shared/component/base-form-modal-add.component';
import { IUser } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent extends BaseFormModalAddComponent<IUser>  {
  check_enable_step_counter: boolean = true;

  constructor(
              formBuilder: FormBuilder,
              private userService:UserService,
              injector: Injector,
              dialogRef: MatDialogRef<UserFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              ) {  
        
        super( 
         formBuilder.group({
            name: [null, Validators.required],
            description: [null],
            step_counter: true,
            team_id: data.team_id
        }),
        userService, 
        injector, 
        data.titleForm, 
        dialogRef);    
       
  }


  onChangeEnabledCounter(event: MatSlideToggleChange) {
    this.check_enable_step_counter = event.checked;
    this.formGroup.value.step_counter = this.check_enable_step_counter ? 1 : 0;
  }

}



