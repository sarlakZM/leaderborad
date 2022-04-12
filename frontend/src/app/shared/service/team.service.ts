import { Injectable } from '@angular/core';
import { BaseMultiService } from './base-multi.service';
import { HttpClient } from '@angular/common/http';
import { ITeam } from '../model/team.model';


@Injectable({
  providedIn: 'root',
})
export class TeamService extends BaseMultiService<ITeam> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'teams');
  }
}
