import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { Effect, EffectsModule, Actions } from "@ngrx/effects";
import { Observable } from "rxjs";
import { switchMap, catchError, map } from "rxjs/operators";
import * as actions from "./user.action";
import { UserService } from "./user.service";
@Injectable()
export class UserEffect {
  constructor(private actions$: Actions, private ser: UserService) {}
  @Effect()
  getUserList$: Observable<Action> = this.actions$
    .ofType(actions.actionType.GET_USER_LIST)
    .pipe(switchMap((action: actions.GetUserListAction) => {
        return this.ser.getUserList().pipe(
            map(rep=>{
                return new actions.GetUserListActionSuccess(rep);
            }),
            catchError(err=>{
                throw err;
                })
    )}));
}
