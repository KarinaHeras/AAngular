import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthProxyService {

  constructor(private httpClient: HttpClient) { }

  // login(username: string, password: string): Observable<TokenDTO> {
  //   return this.httpClient.post<TokenDTO>('http://localhost:3000/auth',
  //         {username, password});
  // }

}
