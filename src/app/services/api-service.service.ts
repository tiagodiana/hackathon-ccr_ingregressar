import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl: string;

  constructor(private http: HttpClient)
  {
    this.apiUrl = environment.apiUrl;
  }

  /*GET*/
  public get(key: string): Observable<any>
  {
    return this.http.get(`${this.apiUrl}/${key}`).pipe(take(1));
  }

  /*SET POST*/
  public set(key: string, body: any): Observable<any>
  {
    return this.http.post(`${this.apiUrl}/${key}/add`, body).pipe(take(1));
  }

  /*LOGIN*/
  public login(body: any): Observable<any>
  {
    return this.http.post(`${this.apiUrl}/auth/login`, body).pipe(take(1));
  }

}
