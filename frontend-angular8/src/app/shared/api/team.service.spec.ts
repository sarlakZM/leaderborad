import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ITeam } from '../model/team.model';

import { TeamService } from './team.service';

describe('TeamService', () => {
  let teamService: TeamService 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
          HttpClientTestingModule,
      ]
     });

     teamService= TestBed.get(TeamService);

  });

  it('should be created', () => {
    expect(teamService).toBeTruthy();
  });


  it('Create team instance', async () => {
    const expectedResult = {
      id: 23652,
      name: 'team name',
      description: null,
      step_counter: 0,
    };
    spyOn(teamService, "create").and.returnValue(Promise.resolve(expectedResult));

    teamService.create(expectedResult).then( result => {
      expect(result).toBe(expectedResult);

    })

  });

});
