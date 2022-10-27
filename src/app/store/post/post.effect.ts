import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { Effect, EffectsModule, Actions } from "@ngrx/effects";
import { Observable } from "rxjs";
import { switchMap, catchError, map } from "rxjs/operators";
import * as actions from "./post.action";
import { PostService } from "./post.service";
@Injectable()
export class PostEffect {
  constructor(private actions$: Actions, private ser: PostService) {}
  @Effect()
  getPostList$: Observable<Action> = this.actions$
    .ofType(actions.actionType.GET_POST_LIST)
    .pipe(switchMap((action: actions.GetPostListAction) => {
        return this.ser.getPostList().pipe(
            map(rep=>{              
                return new actions.GetPostListActionSuccess(rep);
            }),
            catchError(err=>{
                throw err;
                })
    )}));
}
