import { Component } from '@angular/core';
import { IAlbum } from '../../../../core/models/album.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { AlbumService } from '../../../../core/services/album/album.service';
import { ERRORS, URL_IMG } from '../../../../core/constants/app.constants';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    MatProgressSpinnerModule
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  public albums: IAlbum[] = [];
  public loading: boolean = false;
  public message:string = '';

  constructor(private _albumService: AlbumService) {
  }

  ngOnInit(): void {
    this._albumService.getPosts().subscribe({
      next: (data: any) => {
        for (const item of data) {
          item.src = `${URL_IMG}${item.id}/800/300`;
          item.alt = item.author;
        }
        this.albums = data;
        this.loading = true;
      },
      error: (error: HttpErrorResponse) => {
        this.message = ERRORS.ERROR_LIST;
      },
    })
  }
}
