import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TeamService } from './team.service';

describe('TeamService', () => {
  let teamService: TeamService 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
          HttpClientTestingModule,
      ]
     });

     teamService= TestBed.inject(TeamService);

  });

  it('should be created service', () => {
    expect(teamService).toBeTruthy();
  });


  it('Create team', async () => {
    const expectedResult = {
      id: 23652,
      name: 'team name',
      description: null,
      step_counter: 0,
    };

    const spyCreate: jasmine.Spy =  spyOn(teamService, "create").and.returnValue(of(expectedResult));

    teamService.create(expectedResult).subscribe( result => {
      expect(result).toBe(expectedResult);
    })

    expect(spyCreate).toHaveBeenCalledWith(expectedResult);

  });

});
