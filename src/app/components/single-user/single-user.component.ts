import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GalleryService } from '../../shared/services/gallery.service';
import { Gallery } from '../../shared/models/gallery.model';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html'
})
export class SingleUserComponent implements OnInit {

  public galleries: Gallery[];
  public params;
  private take = 10;
  public hasMore = true;

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService) {

      this.route.params.subscribe((params: Params) => {
        this.params = params;
    });
  }

  public ngOnInit() {
    this.galleryService.getGalleryByUserId(this.params.id, this.take).subscribe(data => {
      this.galleries = data;
    },
    (err: HttpErrorResponse) => {
        alert(`Backend returned code ${err.status} with message: ${err.error}`);
    });
  }

  public loadMore(){
    this.take+=10;
    this.hasMore = this.galleries.length > this.take-1;
    this.galleryService.getGalleryByUserId(this.params.id, this.take).subscribe(data => {
        this.galleries = data;
    }, (err: HttpErrorResponse) => {
        alert(`Backend returned code ${err.status} with message: ${err.error}`);
    });
  }

// all-galleries
// public ngOnInit() {
//   this.galleryService.getGalleries().subscribe(data => {
//       this.galleries = data;
//       console.log(this.galleries);
//   }, (err: HttpErrorResponse) => {
//       alert(`Backend returned code ${err.status} with message: ${err.error}`);
//   });
// }

// single-Gallery
// this.route.data
//       .subscribe((data: { gallery: Gallery }) => {
//           this.gallery = data.gallery;
//       });
//   }

}
