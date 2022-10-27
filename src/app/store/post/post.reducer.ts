import * as model from "./post.model";
import * as actions from "./post.action";

const postInitialState = (function(): model.PostState {
  const state: model.PostState = {
    posts: []
  };
  return state;
})();

export function reducer(state = postInitialState, action: actions.Actions) {
  switch (action.type) {
    case actions.actionType.GET_POST_LIST_SUCCESS: {
      return Object.assign({}, state, { posts: action.payload });
    }
    default: {
      return state;
    }
  }
}
