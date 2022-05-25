import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ServerUrl } from '../url/server.url';

export abstract class BaseReadonlyMultiService<T>  {
  protected url: string;

  protected constructor(protected httpClient: HttpClient, urlSuffix: string) {
    this.url = `${ServerUrl.server}api/${urlSuffix}` ;
  }

  getAll(): Promise<T[]> {
    return this.httpClient.get<T[]>(this.url).toPromise();
  }

  getById(id: number): Promise<T> {
    return this.httpClient.get<T>(`${this.url}/${id}`).toPromise();
  }

  getAllUsersByTeamId(id: number): Promise<T[]> {
    return this.httpClient.get<T[]>(`${this.url}/team/${id}`).toPromise();
  }

  getTotalScore(id?:number): Promise<object>{
    let url = `${this.url}/score`;
    if(id){
      //get total score of a team by id
      url= `${url}/${id}/score`;
    }
    return this.httpClient.get<object>(url).toPromise();
  }

}

export abstract class BaseMultiService<T> extends BaseReadonlyMultiService<T>{
  protected constructor(@Inject(HttpClient) protected httpClient: HttpClient,
                        @Inject('urlSuffix') protected urlSuffix: string 
                        ) {
    super(httpClient, urlSuffix);
  }

  create(t: T): Promise<T> {
    return this.httpClient.post<T>(this.url, t).toPromise();
  }

  update(id: number, t: T): Promise<void> {
    return this.httpClient.put<void>(`${this.url}/${id}`, t).toPromise();
  }

  delete(id: number[]): Promise<void> {
    return this.httpClient.post<void>(`${this.url}/`, id).toPromise();
  }
  
}

