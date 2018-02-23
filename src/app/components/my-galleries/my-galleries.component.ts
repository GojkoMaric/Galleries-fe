import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../shared/services/gallery.service';
import { Gallery } from '../../shared/models/gallery.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from "../../shared/services/auth.service";


@Component({
  selector: 'app-my-galleries',
  templateUrl: './my-galleries.component.html'
})
export class MyGalleriesComponent implements OnInit {

  private galleries: Gallery[]=[];
  private take = 10;
  public hasMore = true;

  constructor(private galleryService: GalleryService,
              private auth: AuthService) { }

  ngOnInit() {
    // console.log('user id', this.auth.user.id);
    this.galleryService.getGalleryByUserId(this.auth.user.id, this.take).subscribe(data => {
      this.galleries = data;
  }, (err: HttpErrorResponse) => {
      alert(`Backend returned code ${err.status} with message: ${err.error}`);
  });
  }

    public loadMore(){
        this.take+=10;
        this.hasMore = this.galleries.length > this.take-1;
        this.galleryService.getGalleryByUserId(this.auth.user.id, this.take).subscribe(data => {
            this.galleries = data;
        }, (err: HttpErrorResponse) => {
            alert(`Backend returned code ${err.status} with message: ${err.error}`);
        });
    }

}
