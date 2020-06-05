// import { PostDto } from 'src/app/business/post/post.dto';
// // aqui manejamos estas acciones cuando mi aplicacion carge ejecuta el trigger de mi aplicacion aqui
// // nos devuelve una array de post
// export class GetPosts {
//   static readonly type = '[Posts] Get';
// }
// // añadimos un post
// export class AddPost {
//   static readonly type = '[Posts] Add';
//   constructor(public payload: PostDto) {}
// }
// // le pasamos un id aqui modificicamos el post
// export class UpdatePost {
//   static readonly type = '[Posts] Update';
//   constructor(public id: string, public payload: PostDto) {}
// }
// // eliminamos un post
// export class DeletePost {
//   static readonly type = '[Posts] Delete';
//   constructor(public id: string) {}
// }

// // esta accion es cuando el usuario haga click lo almacemos aqui en state
// export class SetSelectedPost {
//   static readonly type = '[Posts] Set';
//   constructor(public payload: PostDto) {}
// }
