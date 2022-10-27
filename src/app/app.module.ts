import { NgModule ,ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule, META_REDUCERS } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { UserService, UserEffect, reducer as userReducer } from "./store/user";
import { PostService, PostEffect, reducer as postReducer } from "./store/post";

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostListComponent } from './post-list/post-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { MyErrorHandler } from './my-error-handler';



@NgModule({
  imports:      [
     BrowserModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      AppRoutingModule,
      StoreModule.forRoot(userReducer),  
      StoreModule.forFeature("user", userReducer),
      StoreModule.forFeature("post", postReducer),
      EffectsModule.forRoot([]),
      EffectsModule.forFeature([UserEffect]),
      EffectsModule.forFeature([PostEffect])

  ],

  declarations: [ 
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    PostListComponent,
    CreatePostComponent 
  ],

  bootstrap:    [ AppComponent ],

  providers: [
    UserService,
    PostService,
     {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true
      },
      {
        provide: ErrorHandler, 
        useClass: MyErrorHandler
      }
    ]
})
export class AppModule { }
