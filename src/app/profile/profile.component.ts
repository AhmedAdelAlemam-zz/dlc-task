import { Component, OnInit } from '@angular/core';
import { ToDoApi } from '../services/todos.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  todos = [];

    constructor(private todo: ToDoApi) { }
    ngOnInit() {

      this.todo.getPostsbyparameter()
      .subscribe(
        (data) => {
          this.todos = data;
        }
      );
    }
}
