// import { Injectable } from '@angular/core';
// import { Action, Selector, State, StateContext } from '@ngxs/store';
// import { tap } from 'rxjs/operators';
// import { Post } from 'src/app/business/post/post.model';
// import { PostService } from 'src/app/business/post/post.service';
// import { AddPost, DeletePost, GetPosts, SetSelectedPost, UpdatePost } from './posts.actions';




// export class PostsStateModel {
//   public posts: Post[];
//   public selectedPost: Post;
// }

// @State<PostsStateModel>({
//   name: 'posts',
//   defaults: {
//     posts: [],
//     selectedPost: null,
//   },
// })
// // aqui es para estrar un trozo del state
// @Injectable()
// export class PostsState {
//   constructor(private readonly postSvc: PostService) {}

//   // devuelve todos los post
//   @Selector()
//   public static getPostList({ posts }: PostsStateModel) {
//     return posts;
//   }

//   // los post seleccionados
//   @Selector()
//   public static getSelectedPost({ selectedPost }) {
//     return selectedPost;
//   }
// // con el decoration  action indicamos naque action aquin va llamar en este caso GetPost
// //
// @Action(GetPosts)
//   getPosts({ getState, setState }: StateContext<PostsStateModel>) {
//     return this.postSvc.getAll().pipe(
//       tap((posts) => {
//         const state = getState();
//         setState({ ...state, posts });
//       })
//     );
//   }
// // aqui lo destructuramosn pasando el payload
//   @Action(AddPost)
//   addPost(
//     { getState, patchState }: StateContext<PostsStateModel>,
//     { payload }: AddPost
//   ) {
//     return this.postSvc.addPost(payload).pipe(
//       tap((post) => {
//         const state = getState();
//         patchState({
//           posts: [...state.posts, post],
//         });
//       })
//     );
//   }

//   @Action(UpdatePost)
//   updatePost(
//     { getState, setState }: StateContext<PostsStateModel>,
//     { id, payload }: UpdatePost
//   ) {
//     return this.postSvc.UpdatePost(id, payload).pipe(
//       tap((post: Post) => {
//         const state = getState();
//         const newState = state.posts.filter((post) => post._id !== id);
//         setState({ ...state, posts: [...newState, post] });
//       })
//     );
//   }

//   @Action(DeletePost)
//   deletePost(
//     { getState, patchState }: StateContext<PostsStateModel>,
//     { id }: DeletePost
//   ) {
//     return this.postSvc.deletePost(id).pipe(
//       tap(() => {
//         const state = getState();
//         const newState = state.posts.filter((post) => post._id !== id);
//         patchState({
//           ...state.posts,
//           posts: [...newState],
//         });
//       })
//     );
//   }

//   // aqui es para cuando  hace click lo guarda
//   @Action(SetSelectedPost)
//   setSelectedPost(
//     { getState, setState }: StateContext<PostsStateModel>,
//     { payload }: SetSelectedPost
//   ) {
//     const state = getState();
//     setState({
//       ...state,
//       selectedPost: payload,
//     });
//   }
// }
