import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { ConfirmationService, MessageService } from 'primeng/api/public_api';
import { Post } from '../post.model';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  posts: Post[];
  cols: any[];
  items: MenuItem[];
  displaySaveDialog = false;
  post: Post = {
    id: null,
    nameAuthor: null,
    nickname: null,
    title: null,
    content: null
  };

  selectedPost: Post = {
    id: null,
    nameAuthor: null,
    nickname: null,
    title: null,
    content: null
  };

  constructor(private postService: PostService, private messageService: MessageService, private confirmService: ConfirmationService ) { }

  getAll() {
    this.postService.getAll().subscribe(
      (result: any) => {
        const posts: Post[] = [];
        for (let i = 0; i < result.length; i++) {
          const post = result[i] as Post;
          posts.push(post);
        }
        this.posts = posts;
      },
      error => {
        console.log(error);
      }
    );
  }

  // modal para editar / si se envia una edicion le decimos que el post es igual al post selecionamos
  showSaveDialog(editar: boolean) {
    if (editar) {
      if (this.selectedPost != null && this.selectedPost.id != null) {
        this.post = this.selectedPost;
      }else{
        this.messageService.add({severity : 'warn', summary: 'Advertencia!', detail: 'Por favor seleccione un registro'});
        return;
      }
    } else {
     // this.post = new Posts();
    }
    this.displaySaveDialog = true;
  }

   addPost(){
     this.postService.addPost(this.post).subscribe(
      (result: any) => {
        const post = result as Post;
        this.validarPost(post);
        this.messageService.add({ severity: 'success', summary: 'Resultado', detail: 'Se guardó la post correctamente.' });
        this.displaySaveDialog = false;

       },
       error => {
         console.log(error);
     }
     );
   }

  deletePost(){
    if (this.selectedPost == null || this.selectedPost.id == null){
      this.messageService.add({severity : 'warn', summary: 'Advertencia!', detail: 'Por favor seleccione un post'});
      return;
    }
    this.confirmService.confirm({
      message: '¿Está seguro que desea eliminar el registro?',
      accept : () => {
        this.postService.deletePost(this.selectedPost.id).subscribe(
          (result: any) => {
            this.messageService.add({ severity: 'success', summary: 'Resultado', detail: 'Se eliminó la post con id ' + result.id + ' correctamente.' });
            this.deleteObject(result.id);
          }
        );
      }
    });
  }
// cuantos registros vamos a eliminar
  deleteObject(id: number){
   const index = this.posts.findIndex((e) => e.id);
   if (index != -1){
      this.posts.splice(index, 1);
    }
  }
// en caso de que el pos exista( buscamos en el array el mismo parametro)
  validarPost(post: Post){
    const index = this.posts.findIndex((e) => e.id == post.id);

    if (index != -1){
      this.posts[index] = post; // aqui actualizamos
    }else{
      this.posts.push(post); // aqui le agregamos el post

    }

  }

  ngOnInit() {
    this.getAll();
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'nameAuthor', header: 'Nombre' },
      { field: 'nickname', header: 'Nickname' },
      { field: 'title', header: 'Titulo' },
      { field: 'content', header: 'Comentario' },
    ];

    this.items = [
      {
        label: 'Nuevo',
        icon: 'pi pi-fw pi-plus',
        command: () => this.showSaveDialog(false)
      },
      {
        label: 'Editar',
        icon: 'pi pi-fw pi-pencil',
         command: () => this.showSaveDialog(true)
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-fw pi-times',
        command: () => this.deletePost()
      }
    ];

  }

}





