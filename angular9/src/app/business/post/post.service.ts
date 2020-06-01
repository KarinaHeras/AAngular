import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostService {

  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  getAll(): Observable<any>{
    return this.http.get(this.URL + '/all');
  }

  addPost(post: Post): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.URL + '/save', JSON.stringify(post), {headers});
  }

  deletePost(id: number): Observable<any>{
    return this.http.get(this.URL + '/delete/' + id);
  }
}

