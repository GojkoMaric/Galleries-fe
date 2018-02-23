import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../shared/services/gallery.service';
import { Gallery } from '../../shared/models/gallery.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-all-galleries',
  templateUrl: './all-galleries.component.html'
})
export class AllGalleriesComponent implements OnInit {

  private galleries: Gallery[]=[];
  private take = 10;
  public hasMore = true;
  constructor(private galleryService: GalleryService) { }

  public ngOnInit() {
    this.galleryService.getGalleries(this.take).subscribe(data => {
        this.galleries = data;
    }, (err: HttpErrorResponse) => {
        alert(`Backend returned code ${err.status} with message: ${err.error}`);
    });
}

public loadMore(){
    this.take+=10;
    this.galleryService.getGalleries(this.take).subscribe(data => {
        this.galleries = data;
        this.hasMore = this.galleries.length > this.take-1;
        // console.log(this.galleries.length, 'length');
        // console.log(this.take, 'take');
    }, (err: HttpErrorResponse) => {
        alert(`Backend returned code ${err.status} with message: ${err.error}`);
    });
    
}


}
