import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../Model/post.model';

@Injectable({providedIn: 'root'})
export class PostService {

  readonly URL = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.URL + '/posts/')
    .pipe(
      catchError(this.errorHandler)
    );
  }

  create(post): Observable<Post> {
    return this.httpClient.post<Post>(this.URL + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  find(id): Observable<Post> {
    return this.httpClient.get<Post>(this.URL + '/posts/' + id)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  update(id, post): Observable<Post> {
    return this.httpClient.put<Post>(this.URL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  delete(id){
    return this.httpClient.delete<Post>(this.URL + '/posts/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }


  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
