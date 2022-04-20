import { Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/shared/store/states/';
import { ActionsUser } from 'src/app/shared/store/actions/';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnDestroy { 

  check_enable_step_counter: boolean = true;
  isLoading: boolean = false;
  titleForm: string = '';
  resMessage = { description : '', name: ''};
  subscription$! : Subscription;
  formGroup!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<UserFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public store: Store<AppState>,
              ) {
                this.titleForm = this.data['titleForm'],   
                this.createform();  
              }

  ngOnInit() {}

  createform(){
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null],
      step_counter: true,
      team_id: this.data.team_id
    })
  }
 
  add(): void{
      
    if(this.formGroup.invalid){
      return;
    }
    Object.assign({}, this.formGroup.value);
    const data = { ...this.formGroup.value }; 
    data.step_counter  = data.step_counter === true ? 1: 0 ;
    this.store.dispatch(ActionsUser.AddUserAction({entity: data}));
    this.showResponse();

}

  onChangeEnabledCounter(event:any) {
    this.check_enable_step_counter = event.checked;
    this.formGroup.value.step_counter = this.check_enable_step_counter ? 1 : 0;
  }

  showResponse(){
    this.subscription$  = this.store.select(state => state.users).subscribe({
      next: (users: any) => { 
        this.isLoading = users.isLoading;
        !this.isLoading && this.dialogRef.close(`${this.formGroup.value}`);
      },     
    })
  }

  ngOnDestroy(): void {
    this.subscription$ && this.subscription$.unsubscribe();
  }
}



