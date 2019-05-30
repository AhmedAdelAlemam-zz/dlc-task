import { Component, OnInit } from '@angular/core';
import { UsersApi } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];
    constructor(private user: UsersApi) { }
    ngOnInit() {
      this.user.getPostsbyparameter()
      .subscribe(
        (data) => {
          this.users = data;
        }
      );
    }
}
