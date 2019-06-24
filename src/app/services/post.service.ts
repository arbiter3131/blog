import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  posts = [new Post('Mon premier post', this.lorem, 0),
  new Post('Mon deuxième post', this.lorem, 0),
  new Post('Encore un post', this.lorem, 0)];

  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  addLoveIts(id: number) {
    const post = this.posts[id];
    post.loveIts++;
    this.posts.splice(id, 1, post);
    this.emitPosts();
  }

  removeLoveIts(id: number) {
    const post = this.posts[id];
    post.loveIts--;
    this.posts.splice(id, 1, post);
    this.emitPosts();
  }

  addNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  deletePost(post: Post) {
    const index = this.posts.findIndex(
      (postToBeDeleted) => {
        if (postToBeDeleted === post) {
          return true;
        }
      }
    );
    this.posts.splice(index, 1);
    this.emitPosts();
  }

}
