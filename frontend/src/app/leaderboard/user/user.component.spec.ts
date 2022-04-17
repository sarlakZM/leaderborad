
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserComponent } from './user.component';
import { IUser } from '../../shared/model/user.model';
import { UserService } from '../../shared/service/user.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { metaReducers, reducers } from 'src/app/shared/store/reducers/';
import { effects } from 'src/app/shared/store/effects';



describe('User Component', () => {

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
        StoreModule.forRoot(reducers, {
            metaReducers,
          }),
        StoreModule.forFeature('appState', reducers),
        EffectsModule.forRoot(effects)
    
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // TeamService provided to the TestBed
    userService = TestBed.inject(UserService);
  });



  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Check getAll data (the first method)', async() => {

    spyOn(userService, "getAll").and.returnValue(of(USERS));
    userService.create(expectedResult).subscribe( result => {
      expect(result).toBe(expectedResult);
    })

  });

});
