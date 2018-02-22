import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../../shared/services/gallery.service';
import { Gallery } from '../../shared/models/gallery.model';


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html'
})
export class SingleUserComponent implements OnInit {

  public galleries: Gallery[];
  public userId;

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService) {
  }

  public ngOnInit() {
    this.galleryService.getGalleryByUserId(7).subscribe(data => {
      this.galleries = data;
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
