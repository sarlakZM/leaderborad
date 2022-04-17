
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from 'src/app/shared/shared.module';
import { TeamFormComponent } from './team-form.component';
import { TeamService } from 'src/app/shared/service/team.service';
import { ITeam } from 'src/app/shared/model/team.model';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from 'src/app/shared/store/reducers/';
import { effects } from 'src/app/shared/store/effects';
import { EffectsModule } from '@ngrx/effects';


describe('Team From(Dialog) Component', () => {
  let component: TeamFormComponent;
  let fixture: ComponentFixture<TeamFormComponent>;
  let teamService: TeamService;

  beforeEach( (() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFormComponent ],
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
    teamService = TestBed.inject(TeamService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  it('Check the title of dialog team', () => {

    // Convert readonly property to writable
    const mock = <T extends {}, K extends keyof T>(object: T, property: K, value: T[K]) => {
        Object.defineProperty(object, property, { get: () => value });
    };
    mock(component, 'titleForm', 'Team')
    expect(component.titleForm).toEqual('Team');
  });

  it("Check add team ", async() => {
    const item:ITeam = {
      id: 23652,
      name: 'team name',
      description: null,
      step_counter: 1,
    };

    let spyCreate: jasmine.Spy;
    spyCreate= spyOn(component, 'add').and.callThrough();
    component.add();
    expect(spyCreate).toHaveBeenCalled();

  });
 
});
