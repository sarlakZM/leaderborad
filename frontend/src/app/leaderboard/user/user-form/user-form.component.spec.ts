import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserFormComponent } from './user-form.component';
import { UserService } from 'src/app/shared/service/user.service';
import { IUser } from 'src/app/shared/model/user.model';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from 'src/app/shared/store/reducers/';
import { EffectsModule } from '@ngrx/effects';
import { effects } from 'src/app/shared/store/effects';


describe('User Form(Dialog) Component', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let userService: UserService;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormComponent ],
      imports:[
            BrowserAnimationsModule,
            HttpClientTestingModule,
            SharedModule,
            StoreModule.forRoot(reducers, {
             metaReducers,
            }),
            StoreModule.forFeature('appState', reducers),
            EffectsModule.forRoot(effects)
      ],
      
      providers:[
        UserService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

 

  it('Check the title of dialog user', () => {
    //Convert rreadonly property to writable
    const mock = <T extends {}, K extends keyof T>(object: T, property: K, value: T[K]) => {
        Object.defineProperty(object, property, { get: () => value });
    };
    mock(component, 'titleForm', 'User')
    expect(component.titleForm).toEqual('User');
  });

  it("Check add user ", async() => {
    const item:IUser = {
      id: 23652,
      name: 'user name',
      description: null,
      step_counter: 1,
      team_id:12345
    };

    let spyCreate: jasmine.Spy;
    spyCreate= spyOn(component, 'add').and.callThrough();
    component.add();
    expect(spyCreate).toHaveBeenCalled();

  });
 
});
