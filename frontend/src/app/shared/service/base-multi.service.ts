import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export abstract class BaseReadonlyMultiService<T>  {
  protected url: string;

  protected constructor(protected httpClient: HttpClient, urlSuffix: string) {
    this.url = `${environment.apiPrefix}${urlSuffix}` ;
  }

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.url).pipe(map(response => response));
  }

  getById(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.url}/${id}`).pipe(map(response => response));
  }

  getAllUsersByTeamId(id: number): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.url}/team/${id}`).pipe(map(response => response));
  }

  getTotalScore(id?:number): Observable<number>{
    let url = `${this.url}/score`;
    if(id){
      //get total score of a team by id
      url= `${url}/${id}/score`;
    }
    return this.httpClient.get<number>(url).pipe(map(response => response));
  }

}

@Injectable()
export abstract class BaseMultiService<T> extends BaseReadonlyMultiService<T>{
  protected constructor(httpClient: HttpClient,                         
                        @Inject('urlSuffix') protected urlSuffix: string 
  ) {
    super(httpClient, urlSuffix);
  }

  create(t: T): Observable<T> {
    return this.httpClient.post<T>(this.url, t).pipe(map(response => response));
  }

  update(id: number, t: T): Observable<Object> {
    return this.httpClient.put(`${this.url}/${id}`, t).pipe(map(response => response));
  }

  delete(id: number[]): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${id}`).pipe(map(response => response));

  }

}
