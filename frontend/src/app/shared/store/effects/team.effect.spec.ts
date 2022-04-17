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
import { ITeam } from "../../model/team.model";
import { TeamService } from "../../service/team.service";
import { SharedModule } from "../../shared.module";
import { ActionsTeam } from "../actions/";
import { metaReducers, reducers } from "../reducers/";
import { TeamEffects } from "./team.effect";


describe('Store: Team Effects', () => {
  // let actions: Observable<Action>;
  let actions = new ReplaySubject();
  let teamEffects: TeamEffects;
  let teamService: TeamService;

  const expectedResult = {
    id: 23652,
    name: 'team name',
    description: null,
    step_counter: 1,
  };
  let TEAMS: ITeam[] = [expectedResult];
  
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
      TeamEffects,
      provideMockActions(() => actions),
    ]
    });

    teamEffects = TestBed.inject(TeamEffects);
    teamService = TestBed.inject(TeamService);

  }));

  it('should return a GetTeamsAction action, with the posts, on success', () => {    
      const action = ActionsTeam.GetTeamsAction();
      const outcome = ActionsTeam.GetTeamsActionSuccess({entities: TEAMS})
      actions.next(hot('-a', { a: action }));

      const response = cold('-a|', { a: TEAMS });
      spyOn(teamService, "getAll").and.returnValue(response);

      const expected = cold('--b', { b: outcome });
      teamEffects.GetTeamsAction$.pipe(res => res).subscribe( res => {
        expect(res).toBeObservable(expected);
      })
  });

  it('should fail and return an action with the error', () => {
    const action = ActionsTeam.GetTeamsAction();
    const error = new Error('some error') as any;
    const outcome = ActionsTeam.GetTeamsActionFail({error: error})

    actions.next(hot('-a', { a: action }));

    const response = cold('-#|', {}, error);
    spyOn(teamService, "getAll").and.returnValue(response);

    const expected = cold('--(b|)', { b: outcome });
    teamEffects.GetTeamsAction$.pipe(res => res).subscribe( res => {
      expect(res).toBeObservable(expected);
    });
      
  });

  it('should return a AddUserAction action, with the posts, on success', () => {    
    const action = ActionsTeam.AddTeamAction({ entity: TEAMS[0] });
    const outcome = ActionsTeam.AddTeamActionSuccess({ entity: TEAMS[0] })

    actions.next(hot('-a', { a: action }));

    const response = cold('-a|', { a: TEAMS[0] });
    spyOn(teamService, "create").and.returnValue(response);

    const expected = cold('--b', { b: outcome });
    teamEffects.AddUserAction$.pipe(res => res).subscribe( res => {
      expect(res).toBeObservable(expected);
    }) 
  });
    

});

