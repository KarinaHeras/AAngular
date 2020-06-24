
export interface Post {

  _id?: number;
  nameAuthor: string;
  nickname: string;
  title: string;
  content: string;
  comments?: string;
  // user: number;

  }



export interface User {
    username: string;
    password: string;
    role: string;
    _id: string;
}
