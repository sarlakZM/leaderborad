import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MatButtonModule, MatCardModule, MatDialogModule, MatGridListModule, MatIconModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { PipesGlobalModule } from 'src/app/shared/pipe/pipes-global.module';
import { ToastrModule } from 'ngx-toastr';
import { ToastComponent } from 'src/app/shared/component/toast/toast.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule ,
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
        MatTableModule,
        MatTooltipModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatGridListModule,
        PipesGlobalModule,
        MatCardModule,

      ],
      
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('User Component created', () => {
    expect(component).toBeTruthy();
  });
});
