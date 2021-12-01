import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FriendName } from '../Model/FriendName';

@Injectable({
  providedIn: 'root',
})
export class FriendNameService {
  constructor(private myHttp: HttpClient) {}

  getAllFriendsNameFromSpring(): Observable<FriendName[]> {
    console.log('getting all friends from spring');
    //the below line would talk to Spring's controller -> FriendController
    return this.myHttp.get<FriendName[]>(
      'http://localhost:8080/name/getAllName'
    );
  }

  getFriendNameFromSpring(): Observable<FriendName> {
    console.log('getting one friends from spring');
    //the below line would talk to Spring's controller -> FriendController
    return this.myHttp.get<FriendName>('http://localhost:8080/name/getName');
  }
}
