import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {
   path : 'users',
    component : UserListComponent
  },
  {
    path : 'posts',
    component:PostListComponent
  }, 
  {
   path: 'createpost',
    component: CreatePostComponent
  },
  // {
  //   path : 'albums',
  //   loadChildren : './albums/albums.module#AlbumsModule'
  // }, 
  // {
  //   path : 'comments',
  //   loadChildren : './comments/comments.module#CommentsModule'
  // },
  // {
  //   path : 'todos',
  //   loadChildren : './todos/todos.module#TodosModule'
  // },
  {
    path : '', 
    component : UserListComponent,
    pathMatch : 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
