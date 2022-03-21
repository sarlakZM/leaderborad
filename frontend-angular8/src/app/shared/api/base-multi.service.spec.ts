import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BaseMultiService } from './base-multi.service';

describe('BaseMultiService', () => {
  
  beforeEach(() => {
      TestBed.configureTestingModule({
      imports:[
          HttpClientTestingModule,
          RouterTestingModule,
      ],
      providers: [
        BaseMultiService,
        {provide: 'urlSuffix', useValue: ''}]
      });


  });

  it('should be created', () => {
    const service: BaseMultiService<any> = TestBed.get(BaseMultiService);
    expect(service).toBeTruthy();
  });
});
