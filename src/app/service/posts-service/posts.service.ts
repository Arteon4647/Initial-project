import { Injectable } from '@angular/core';
import { PostType } from '../../posts/posts.type';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  posts: PostType[] = [];

  async getAPIPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json();

    this.posts = posts;
  }
}
