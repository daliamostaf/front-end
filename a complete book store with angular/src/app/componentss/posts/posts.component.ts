import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/Modelss/posts';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts:Posts[]=[];
 constructor(public postsService:PostsService){}
  ngOnInit(): void {
    this.postsService.getAllTodos().subscribe(
      {
      next:(data)=>{
        this.posts=data;
      },
      error:(err)=>{
        console.log(err);
        
      }
    
    }
    )
  }
}
