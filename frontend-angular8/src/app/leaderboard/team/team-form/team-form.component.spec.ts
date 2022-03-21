

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MatButtonModule, MatCardModule, MatDialogModule, MatDialogRef, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatProgressBarModule, MatSlideToggleModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MAT_DIALOG_DATA } from '@angular/material';

import { RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesGlobalModule } from 'src/app/shared/pipe/pipes-global.module';
import { ToastrModule } from 'ngx-toastr';
import { ToastComponent } from 'src/app/shared/component/toast/toast.component';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from 'src/app/app-routing.module'
import { TeamFormComponent } from './team-form.component';
import { TeamService } from 'src/app/shared/api/team.service';


describe('Team From(Dialog) Component', () => {
  let component: TeamFormComponent;
  let fixture: ComponentFixture<TeamFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFormComponent ],
      imports:[
        RouterTestingModule.withRoutes([]) ,
        CommonModule, 
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
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
        ReactiveFormsModule,
        MatTooltipModule,
        MatIconModule,
        MatDialogModule,
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

      providers:[
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
     let userService = fixture.debugElement.injector.get(TeamService);
    // let formBuilder = fixture.debugElement.injector.get(FormBuilder);
    // // let injector = fixture.debugElement.injector.get(Injector);
    // let dialogRef = fixture.debugElement.injector.get(MatDialogRef);
    // let data = fixture.debugElement.injector.get(MAT_DIALOG_DATA);
 
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

 

  it('Check the title of dialog team', () => {

    //Convert readonly property to writable
    const mock = <T extends {}, K extends keyof T>(object: T, property: K, value: T[K]) => {
        Object.defineProperty(object, property, { get: () => value });
    };
    mock(component, 'titleForm', 'Team')
    expect(component.titleForm).toEqual('Team');
  });

 
});
