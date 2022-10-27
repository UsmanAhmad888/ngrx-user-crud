import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as model from "./post.model";

export const getPostState = createFeatureSelector<model.PostState>("post");

export const getPostList = createSelector(
  getPostState,
  (state: model.PostState): model.Post[] => state.posts
);
