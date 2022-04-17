import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports:[
          HttpClientTestingModule,
      ]
    })
    userService = TestBed.inject(UserService);

  } );

  it('should be created service', () => {
    expect(userService).toBeTruthy();
  });
 
  it('Create user', async () => {
    const expectedResult = {
      id: 23652,
      name: 'user name',
      description: null,
      step_counter: 0,
    };

    const spyCreate: jasmine.Spy =  spyOn(userService, "create").and.returnValue(of(expectedResult));

    userService.create(expectedResult).subscribe( result => {
      expect(result).toBe(expectedResult);
    })

    expect(spyCreate).toHaveBeenCalledWith(expectedResult);

  });

});
