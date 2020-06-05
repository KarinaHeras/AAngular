import { Injectable } from '@angular/core';
import { PostService } from 'src/app/business/post/post.service';
import { Post } from '../app/business/Model/post.model';
import { Store } from '../store/store';
import { StoreService } from '../store/storeServi';



@Injectable({ providedIn: 'root' })

export class PostListStoreService extends Store<Post> {


  constructor(private service: PostService, private storeS: StoreService) {
        super();
    }


}
