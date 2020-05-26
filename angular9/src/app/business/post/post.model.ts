export interface Post {
  _id: string;
  author: string;
  nickname: string;
  title: string;
  content: string;
  user: number;
}

export interface User {
  id: number;
  rol: string;
}
