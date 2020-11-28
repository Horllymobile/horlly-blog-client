import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private __postUrl = '../../assets/db.json';

  constructor(private __http: HttpClient) { }

  getPosts(){
    return this.__http.get(this.__postUrl);
  }
}
