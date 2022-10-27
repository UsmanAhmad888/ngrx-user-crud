import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as postModel from '../store/post/post.model';
import * as postSelector from '../store/post/post.selector';
import * as postAction from '../store/post/post.action';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  getpostList:Subscription;
  postList:postModel.Post[] = [];
  constructor(private store:Store<postModel.PostState>) { }

  ngOnInit() {
    this.store.dispatch(new postAction.GetPostListAction(""));  // empty string for now
    this.subscriptionInit();
  }
  subscriptionInit(){
    this.getpostList = this.store.select(postSelector.getPostList).subscribe(
      (posts:postModel.Post[])=>{
        console.log(posts);
        if(posts){
        this.postList =  posts;
        }
      }
    )
  }
}