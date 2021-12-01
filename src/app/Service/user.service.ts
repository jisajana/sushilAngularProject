import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private myHttp: HttpClient) { }

  signup() : Observable<User> {
    console.log('signing up');
    //the below line would talk to Spring's controller -> UserController
    return this.myHttp.get<User>("http://localhost:8080/user/signup");
}

login() : Observable<User> {
  console.log('log in');
  //the below line would talk to Spring's controller -> UserController
  return this.myHttp.get<User>("http://localhost:8080/user/login");
}
}
