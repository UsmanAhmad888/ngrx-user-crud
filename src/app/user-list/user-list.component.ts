import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as userModel from '../store/user/user.model';
import { Subscription } from 'rxjs';
import * as userSelector from '../store/user/user.selector';
import * as userAction from '../store/user/user.action';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  getuserList:Subscription;
  userList:userModel.User[] = [];
  constructor(private store:Store<userModel.UserState>) { }

  ngOnInit() {
    this.store.dispatch(new userAction.GetUserListAction(""));  // empty string for now
    this.subscriptionInit();
  }
  subscriptionInit(){
    this.getuserList = this.store.select(userSelector.getUserList).subscribe(
      (users:userModel.User[])=>{
        if(users){
        this.userList =  users;
        }
      }
    )
  }

}
