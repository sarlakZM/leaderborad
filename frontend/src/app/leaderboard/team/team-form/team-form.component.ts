
import { Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { ActionsTeam } from 'src/app/shared/store/actions/';
import { AppState } from 'src/app/shared/store/states/';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit, OnDestroy { 
  
  check_enable_step_counter: boolean = true;
  isLoading: boolean = false;
  titleForm: string = '';
  resMessage = { description : '', name: ''};
  subscription$! : Subscription;
  formGroup!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<TeamFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public store: Store<AppState>,
              ) {}

  ngOnInit() {
    this.titleForm = this.data['titleForm'],   
    this.createform();  
  }

  createform(){
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null],
      step_counter: 0,
    })
  }
 
  add(): void{
      
    if(this.formGroup.invalid){
      return;
    }
    Object.assign({}, this.formGroup.value);
    const data = { ...this.formGroup.value }; 
    data.step_counter  = data.step_counter === true ? 1: 0 ;
    this.store.dispatch(ActionsTeam.AddTeamAction({entity: data}));
    this.showResponse();

}

  onChangeEnabledCounter(event:any) {
    this.check_enable_step_counter = event.checked;
    this.formGroup.value.step_counter = this.check_enable_step_counter ? 1 : 0;
  }

  showResponse(){
    this.subscription$  = this.store.select(state => state.teams).subscribe({
      next: (teams: any) => { 
        this.isLoading = teams.isLoading;
        !this.isLoading && this.dialogRef.close(`${this.formGroup.value}`);
      },     
    })
  }

  ngOnDestroy(): void {
    this.subscription$ && this.subscription$.unsubscribe();
  }
}






