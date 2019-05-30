import { Component, OnInit } from '@angular/core';
import { PostsApi } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  lstPosts = [];

    constructor(private post: PostsApi) { }
    ngOnInit() {
      this.post.getPostsbyparameter()
      .subscribe(
        (data) => {
          this.lstPosts = data;
        }
      );
    }
}
