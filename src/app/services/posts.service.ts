import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _postUrl = '../../assets/db.json';
  private _url = 'https://horlly-blog-api.herokuapp.com/api/posts';
  constructor(private _http: HttpClient) { }

  getPosts(){
    return this._http.get(this._url);
  }
}
