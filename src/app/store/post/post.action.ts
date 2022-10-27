import { Action } from "@ngrx/store";
import * as model from "./post.model";

export const actionType = {
  GET_POST_LIST: "[Post] Get Post List",
  GET_POST_LIST_SUCCESS: "[Post] Get Post List success",
  GET_POST_LIST_FAIL: "[Post] Get Post List fail"
};
export class GetPostListAction implements Action {
  public readonly type = actionType.GET_POST_LIST;
  constructor(public payload: string) {}
}
export class GetPostListActionSuccess implements Action {
  public readonly type = actionType.GET_POST_LIST_SUCCESS;
  constructor(public payload: model.Post[]) {}
}
export class GetPostListActionFail implements Action {
  public readonly type = actionType.GET_POST_LIST_FAIL;
  constructor(public payload: any) {}
}
export type Actions = 
GetPostListAction |  
GetPostListActionFail |
GetPostListActionSuccess;

