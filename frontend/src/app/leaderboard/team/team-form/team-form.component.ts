import { ChangeDetectorRef, Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamService } from 'src/app/shared/service/team.service';
import { BaseFormModalAddComponent } from 'src/app/shared/component/base-form-modal-add.component';
import { ITeam } from 'src/app/shared/model/team.model';


@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent extends BaseFormModalAddComponent<ITeam>  {

  constructor(
              formBuilder: FormBuilder,
              teamService:TeamService,
              injector: Injector,
              dialogRef: MatDialogRef<TeamFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              ) {  

        super( 
         formBuilder.group({
            name!: [null, Validators.required],
            description!: [null],
            step_counter: 0,
        }),
        teamService, 
        injector, 
        data.titleForm, 
        dialogRef);    
     }
}



