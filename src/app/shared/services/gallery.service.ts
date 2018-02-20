import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Gallery } from '../models/gallery.model';
import { AuthService } from './auth.service';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class GalleryService {
  private galleries: Gallery[] = [];

  constructor(private http: HttpClient,
              private authService: AuthService
  ) { }

  public getGalleries() {
    return new Observable((o: Observer<any>) => {
        this.http.get('http://127.0.0.1:8000/api/galleries', {
            headers: this.authService.getRequestHeaders()
        }).subscribe((galleries: any[]) => {
            this.galleries = galleries.map((gallery) => {
                return new Gallery(
                    gallery.id,
                    gallery.name,
                    gallery.description,
                    gallery.images_url,
                    gallery.user_id);
            });
            o.next(this.galleries);
            return o.complete();
        });
    });
}

  public getGalleryById(id: number){
    return this.http.get('http://localhost:8000/api/galleries/' + id)
  }

  public searchGalleryByTerm(term){
    return this.http.get('http://localhost:8000/api/galleries');
  }

}
