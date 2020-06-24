export interface PostDto {
  [x: string]: any;
  id?: string;
  title: string;
  content: string;
  nickname: string;
  nameAuthor?: string;
   idAuthor?: string;
  comments?: string;
}
