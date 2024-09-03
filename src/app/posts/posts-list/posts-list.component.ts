import { Component } from '@angular/core';
import { PostsService } from '../../service/posts-service/posts.service';
import { PostItemComponent } from '../post-item/post-item.component';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [PostItemComponent],
  providers: [PostsService],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  constructor(public postsService: PostsService) {
    postsService.getAPIPosts();
  }
}
