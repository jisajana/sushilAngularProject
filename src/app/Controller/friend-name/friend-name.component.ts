import { Component, OnInit } from '@angular/core';
import { FriendName } from '../../Model/FriendName';
import { FriendNameService } from '../../Service/friendNameSercice';

@Component({
  selector: 'app-friend-name',
  templateUrl: './friend-name.component.html',
  styleUrls: ['./friend-name.component.css'],
})
export class FriendNameComponent implements OnInit {
  constructor(private fs: FriendNameService) {}

  theFriend: FriendName = new FriendName();
  allFriends: FriendName[] | undefined;

  myOneFriend: FriendName | undefined;

  ngOnInit(): void {}
  showAllFriends() {
    //invoked on button
    console.log('showing all the friends on button click');
    this.fs.getAllFriendsNameFromSpring().subscribe(
      (
        data: FriendName[] //srping data is pushed into this data variable
      ) => {
        this.allFriends = data; //assign data to allFriends so that html can fetch it in tr td tags
      },
      (err) => {
        console.log(err);
      }
    );
  }

  showFriend() {
    console.log('Adding a friend');

    this.fs.getFriendNameFromSpring().subscribe(
      (
        data: FriendName //srping data is pushed into this data variable
      ) => {
        this.myOneFriend = data; //assign data to allFriends so that html can fetch it in tr td tags
        console.log('getting another friends from spring');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
