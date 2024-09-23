import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    PostsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
