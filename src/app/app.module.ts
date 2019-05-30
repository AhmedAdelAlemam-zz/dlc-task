import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsApi } from './services/posts.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersApi } from './services/users.service';
import { ToDoApi } from './services/todos.service';


const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  { path: 'posts', component: PostsComponent},
  { path: 'users', component: UsersComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ PostsApi, UsersApi, ToDoApi ],
  bootstrap: [AppComponent]
})
export class AppModule { }
