export class Posts{
  constructor( id: '', nameAuthor: '',
               nickname: '', title: '', content: ''){
                 this.id = id;
                 this.nameAuthor = nameAuthor;
                 this.nickname = nickname;
                 this.title = title;
                 this.content = content;


  }

  id: string;
nameAuthor: string;
nickname: string;
title: string;
content: string;
comments ?: string;
  // user: number;


  }



export interface User {
  _id: number;
  rol: string;
}


