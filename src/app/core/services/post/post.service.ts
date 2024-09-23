import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.dev';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../../constants/endpoints.constants';
import { IPost } from '../../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = environment.apiPost;
  constructor(private http: HttpClient) { }
  getPosts(): Observable<IPost> {
    return this.http.get<IPost>(`${this.apiUrl}/${ENDPOINTS.POSTS}`);
  }
}
