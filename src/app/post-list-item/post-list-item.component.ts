import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() id: number;
  @Input() post: Post;

  constructor(private postsService: PostService) { }

  ngOnInit() {
  }

  onAddLoveIts(id: number) {
    this.postsService.addLoveIts(id);
  }

  onRemoveLoveIts(id: number) {
    this.postsService.removeLoveIts(id);
  }

  onDeletePost(post: Post) {
    this.postsService.deletePost(post);
  }

}
