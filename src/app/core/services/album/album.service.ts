import { Injectable } from '@angular/core';
import { IAlbum } from '../../models/album.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.dev';
import { ENDPOINTS } from '../../constants/endpoints.constants';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = environment.apiImg;
  constructor(private http: HttpClient) { }
  getPosts(): Observable<IAlbum> {
    return this.http.get<IAlbum>(`${this.apiUrl}/${ENDPOINTS.ALBUMS}?page=4&limit=10`);
  }
}
