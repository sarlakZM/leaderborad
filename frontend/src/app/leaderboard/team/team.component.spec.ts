
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';

import { TeamComponent } from './team.component';
import { ITeam } from '../../shared/model/team.model';
import { TeamService } from '../../shared/service/team.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { getTotalScoreReducerFeature } from 'src/app/shared/store/reducers';


describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;
  let teamService: TeamService;
  const expectedResult = {
    id: 23652,
    name: 'team name',
    description: null,
    step_counter: 1,
  };
  let TEAMS: ITeam[] = [expectedResult];; 

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ TeamComponent ],
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

    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
     // TeamService provided to the TestBed
    teamService = TestBed.inject(TeamService);

  }));


  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  it('Check getAll data (the first method)', async() => {

    spyOn(teamService, "getAll").and.returnValue(of(TEAMS));
    teamService.create(expectedResult).subscribe( result => {
      expect(result).toBe(expectedResult);
    })

  });

  it("Check getAll", async() => {
      spyOn(teamService, "getAll").and.returnValue(of(TEAMS));
      component.getAll();
      expect(component.dataSource).toBe(TEAMS);

   });

   it("Check getTotalScore through ngrx/store", () => {
      spyOn(teamService, "getAll").and.returnValue(of(TEAMS));
      component.getAll();

      spyOn(teamService, "getTotalScore").and.callThrough();
      component.getTotalScore(component.dataSource);
    
      expect(component.totalScore).toBe(1);
    });

});


