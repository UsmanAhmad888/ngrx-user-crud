export interface Post{
  id :number;
  userid : number;
  title :string;
  body:string;
}
export interface PostState {
    posts:Post[]
}
