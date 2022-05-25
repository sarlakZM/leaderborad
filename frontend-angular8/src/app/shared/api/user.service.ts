import { Injectable } from '@angular/core';
import { BaseMultiService } from './base-multi.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseMultiService<IUser> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'users');
  }
  
}
