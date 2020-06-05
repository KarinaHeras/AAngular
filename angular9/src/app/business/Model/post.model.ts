
export interface Post {

  _id: string;
  nameAuthor: string;
  nickname: string;
  title: string;
  content: string;
  comments?: string;
  // user: number;


  }



export interface User {
  id: number;
  rol: string;
}
