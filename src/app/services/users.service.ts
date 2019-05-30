import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class UsersApi {
    constructor(private httpClient: HttpClient) { }

    getPostsbyparameter(): Observable<any> {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    }
}
