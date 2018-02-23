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

  constructor(private galleryService: GalleryService,
              private auth: AuthService) { }

  ngOnInit() {
    // console.log('user id', this.auth.user.id);
    this.galleryService.getGalleryByUserId(this.auth.user.id).subscribe(data => {
      this.galleries = data;
  }, (err: HttpErrorResponse) => {
      alert(`Backend returned code ${err.status} with message: ${err.error}`);
  });
  }

}
