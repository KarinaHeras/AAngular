import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { BackofficeProxyService } from '../backoffice/backoffice-proxy.service';
import { Post } from '../business/Model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostDetailService {
  readonly URL = 'http://localhost:3000';
  httpOptions = {
      headers: new HttpHeaders(
        {responseType: 'text'})

    };
  constructor(private proxy: BackofficeProxyService, private httpClient: HttpClient) { }



  private modals: any[] = [];

  getAll(): Observable < Post[] > {
      return this.httpClient.get<Post[]>(this.URL + '/posts/')
      .pipe(
        catchError(this.errorHandler)
      );
    }

  create(post): Observable < Post > {
      const httpOptions = { headers: new HttpHeaders({Authorization: 'Bearer ' +  localStorage.getItem('token')}) };
      console.log('estamos enviando esto desde el front', JSON.stringify(post));
      return this.httpClient.post<Post>(this.URL + '/posts/', post, httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
    }

  findById(id): Observable < Post > {
      return this.httpClient.get<Post>(this.URL + '/posts/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
    }

  update(id, post): Observable < Post > {
      const httpOptions = { headers: new HttpHeaders({Authorization: 'Bearer ' +  localStorage.getItem('token')}) };
      return this.httpClient.put<Post>(this.URL + '/posts/' + id, post, httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
    }

    // deletePost(post: Post | number): Observable<Post> {
    //   const httpOptions = {
    //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    //   };
    //   const id = typeof post === 'number' ? post : post._id;
    //   const url = `${this.URL}/${id}`;

    //   return this.httpClient.delete<Post>(this.URL, httpOptions).pipe(
    //     tap(_ => console.log(`deleted Post id=${id}`)),
    //     catchError(this.errorHandler<Post>('deletePost'))
    //   );
    // }
    // deletePost(id: string): Observable<Post> {
    //   return this.proxy.delete$(id).pipe(
    //          catchError(this.errorHandler)
    //        );

    // }

  deletePost(_id) {
      const httpOptions = { headers: new HttpHeaders({Authorization: 'Bearer ' +  localStorage.getItem('token')}) };
      return this.httpClient.delete<Post>(this.URL + '/posts/' + _id, httpOptions)
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
  getPublicPost(): Observable < string > {
    return this.httpClient.get(this.URL, {responseType: 'text'});
  }

  getProtectedPost(): Observable < string > {
    return this.httpClient.get(this.URL,
    {responseType: 'text'});
    }
  }