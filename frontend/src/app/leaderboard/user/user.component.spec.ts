
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';

import { UserComponent } from './user.component';
import { IUser } from '../../shared/model/user.model';
import { UserService } from '../../shared/service/user.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { getTotalScoreReducerFeature } from 'src/app/shared/store/reducers';



describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;

  const expectedResult = {
    id: 23652,
    name: 'user name',
    description: null,
    step_counter: 1,
  };
  let USERS: IUser[] = [expectedResult];; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports:[
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        SharedModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(getTotalScoreReducerFeature),
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // TeamService provided to the TestBed
    userService = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Check getAll', () => {
    spyOn(userService, "getAll").and.returnValue(of(USERS));
    component.getAll();
    expect(component.dataSource).toBe(USERS);

  });

  it("Check getTotalScore through ngrx/store", () => {
    spyOn(userService, "getAll").and.returnValue(of(USERS));
    component.getAll();

    spyOn(userService, "getTotalScore").and.callThrough();
    component.getTotalScore(component.dataSource);
    
    expect(component.totalScore).toBe(1);
  });

});
