import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../core/services/post/post.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IPost } from '../../../../core/models/post.interface';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ERRORS } from '../../../../core/constants/app.constants';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, MatChipsModule, MatProgressBarModule, MatProgressSpinnerModule
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {

  public posts: IPost[] = [];
  public loading: boolean = false;
  public message:string = '';

  constructor(private _postService: PostService) {
  }

  ngOnInit(): void {
    this._postService.getPosts().subscribe({
      next: (data: any) => {
        this.posts = data;
        this.loading = true;
      },
      error: (error: HttpErrorResponse) => {
        this.message = ERRORS.ERROR_LIST;
      },
    })
  }
}
