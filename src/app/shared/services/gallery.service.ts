import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Gallery } from '../models/gallery.model';
import { AuthService } from './auth.service';

@Injectable()
export class GalleryService {

  constructor(private http: HttpClient,
              private authService: AuthService
  ) { }

  private galleries: Gallery[] = [];

  public getGalleries() {
    return this.http.get('http://127.0.0.1:8000/api/galleries');
  }

  public getGalleryById(id: number){
    return this.http.get('http://localhost:8000/api/galleries/' + id)
  }

  public searchGalleryByTerm(term){
    return this.http.get('http://localhost:8000/api/galleries');
  }

}
