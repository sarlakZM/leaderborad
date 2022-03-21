import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MatButtonModule, MatCardModule, MatDialogModule, MatGridListModule, MatIconModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { PipesGlobalModule } from '../../shared/pipe/pipes-global.module';
import { ToastrModule } from 'ngx-toastr';
import { ToastComponent } from '../../shared/component/toast/toast.component';
import { IUser } from '../../shared/model/user.model';
import { UserService } from '../../shared/api/user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserComponent;

  const expectedResult = {
    id: 23652,
    name: 'user name',
    description: null,
    step_counter: 0,
  };
  let USERS: IUser[] = [expectedResult];; 

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

    // TeamService provided to the TestBed
    userService = TestBed.get(UserService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Check getAll data', async() => {

    spyOn(userService, 'getAll').and.returnValues(Promise.resolve(USERS));

    await expectAsync(component.getAll()).toBeResolved(Promise.resolve(USERS))
  });
});
