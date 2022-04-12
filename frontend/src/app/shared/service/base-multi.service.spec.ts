import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BaseMultiService } from './base-multi.service';

describe('BaseMultiService', () => {
  let service: BaseMultiService<any>;

  beforeEach(() => {
      TestBed.configureTestingModule({
      imports:[
          HttpClientTestingModule,
          RouterTestingModule,
      ],
      providers: [
        BaseMultiService,
        {provide: 'urlSuffix', useValue: ''},
       ]
      });

      service = TestBed.inject<BaseMultiService<any>>(BaseMultiService);
   
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
