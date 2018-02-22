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
                this.galleries = galleries;
                // this.galleries = galleries.map((gallery) => {
                //     return new Gallery(
                //         gallery.id,
                //         gallery.name,
                //         gallery.description,
                //         gallery.images_url,
                //         gallery.user_id,
                //         gallery.user);
                // });
                o.next(this.galleries);
                return o.complete();
            });
        });
    }

    public getGalleryById(id: number) {
        return new Observable((o: Observer<any>) => {
            this.http.get('http://127.0.0.1:8000/api/galleries/' + id, {
                headers: this.authService.getRequestHeaders()
            }).subscribe((gallery: any) => {
                let newGallery = gallery;
                // let newGallery = new Gallery(
                //     gallery.id,
                //     gallery.name,
                //     gallery.description,
                //     gallery.images_url,
                //     gallery.user_id,
                //     gallery.user,
                // );
                o.next(newGallery);
                return o.complete();
            });
        });
    }

    public searchGalleriesByTerm(term) {
        return new Observable((o: Observer<any>) => {
            let params = new HttpParams();
            params = params.append('term', term);

            this.http.get('http://localhost:8000/api/galleries', {
                params: params,
                headers: this.authService.getRequestHeaders()
            }).subscribe((galleries: any[]) => {
                this.galleries = galleries;
                // this.galleries = galleries.map((gallery) => {
                //     return new Gallery(
                //         gallery.id,
                //         gallery.name,
                //         gallery.description,
                //         gallery.images_url,
                //         gallery.user_id,
                //         gallery.user);
                // });
                o.next(this.galleries);
                return o.complete();
            });
        });
    }

    public getGalleryByUserId(id: number) {
        return new Observable((o: Observer<any>) => {
            this.http.get('http://127.0.0.1:8000/api/authors/' + id, {
                headers: this.authService.getRequestHeaders()
            }).subscribe((galleries: any[]) => {
                this.galleries = galleries;
                // let newGallery = new Gallery(
                //     gallery.id,
                //     gallery.name,
                //     gallery.description,
                //     gallery.images_url,
                //     gallery.user_id,
                //     gallery.user,
                // );
                o.next(this.galleries);
                return o.complete();
            });
        });
    }


}
