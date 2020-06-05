import { PostListComponent } from '../post/post-list/post-list.component';

export interface postModelDto {
  id?: string;
  nickname: string;
  author: string;
  title: string;
  content: string;
  comments: PostListComponent[];
}
