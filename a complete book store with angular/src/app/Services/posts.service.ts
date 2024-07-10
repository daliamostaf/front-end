import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Posts } from '../Modelss/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {         //q4

  constructor(public httpClient:HttpClient) { }

  getAllTodos():Observable<Posts[]>{

    return this.httpClient.get<Posts[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
