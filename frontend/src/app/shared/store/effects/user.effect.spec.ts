import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ReplaySubject } from "rxjs";
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';

import { effects } from ".";
import { IUser } from "../../model/user.model";
import { UserService } from "../../service/user.service";
import { SharedModule } from "../../shared.module";
import { ActionsUser } from "../actions/";
import { metaReducers, reducers } from "../reducers/";
import { UserEffects } from "./user.effect";


describe('Store: User Effects', () => {
  // let actions: Observable<Action>;
  let actions = new ReplaySubject();
  let userEffects: UserEffects;
  let userService: UserService;

  const expectedResult = {
    id: 23652,
    name: 'user name',
    description: null,
    step_counter: 1,
    team_id: 1
  };
  let TEAMS: IUser[] = [expectedResult];
  
  beforeEach((() => {
    TestBed.configureTestingModule({
    imports: [
      BrowserAnimationsModule,
      HttpClientTestingModule,
      RouterTestingModule,
      SharedModule,      
      EffectsModule.forRoot(effects),
      StoreModule.forRoot(reducers, {
        metaReducers,
      }),
      StoreModule.forFeature('appState', reducers),
    ],
    providers: [
      UserEffects,
      provideMockActions(() => actions),
    ]
    });

    userEffects = TestBed.inject(UserEffects);
    userService = TestBed.inject(UserService);

  }));

  it('should return a GetTeamsAction action, with the posts, on success', () => {    
      const action = ActionsUser.GetUsersAction({team_id: TEAMS[0].team_id});
      const outcome = ActionsUser.GetUsersActionSuccess({entities: TEAMS});

      actions.next(hot('-a', { a: action }));

      const response = cold('-a|', { a: TEAMS });
      spyOn(userService, "getAll").and.returnValue(response);

      const expected = cold('--b', { b: outcome });
      userEffects.GetUsersAction$.pipe(res => res).subscribe( res => {
        expect(res).toBeObservable(expected);
      })
  });

  it('should fail and return an action with the error', () => {
    const action = ActionsUser.GetUsersAction({team_id: TEAMS[0].team_id});
    const error = new Error('some error') as any;
    const outcome = ActionsUser.GetUsersActionFail({error: error})

    actions.next(hot('-a', { a: action }));

    const response = cold('-#|', {}, error);
    spyOn(userService, "getAll").and.returnValue(response);

    const expected = cold('--(b|)', { b: outcome });
    userEffects.GetUsersAction$.pipe(res => res).subscribe( res => {
      expect(res).toBeObservable(expected);
    });
      
  });

  it('should return a AddUserAction action, with the posts, on success', () => {    
    const action = ActionsUser.AddUserAction({ entity: TEAMS[0] });
    const outcome = ActionsUser.AddUserActionSuccess({ entity: TEAMS[0] })

    actions.next(hot('-a', { a: action }));

    const response = cold('-a|', { a: TEAMS[0] });
    spyOn(userService, "create").and.returnValue(response);

    const expected = cold('--b', { b: outcome });
    userEffects.AddUserAction$.pipe(res => res).subscribe( res => {
      expect(res).toBeObservable(expected);
    })   
  });
    

});

