import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports:[
          HttpClientTestingModule,
      ]
    })
    userService = TestBed.get(UserService);

  } );

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  
  it('Create user instance', async () => {
    const expectedResult = {
      id: 23652,
      name: 'user name',
      description: null,
      step_counter: 0,
    };
    spyOn(userService, "create").and.returnValue(Promise.resolve(expectedResult));

    userService.create(expectedResult).then( result => {
      expect(result).toBe(expectedResult);

    })

  });

});
