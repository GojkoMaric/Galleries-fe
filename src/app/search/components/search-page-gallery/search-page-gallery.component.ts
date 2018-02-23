import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../../shared/services/gallery.service';
import { Gallery } from '../../../shared/models/gallery.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-search-page-gallery',
  templateUrl: './search-page-gallery.component.html'
})
export class SearchPageGalleryComponent implements OnInit {

  private galleries: Gallery[]=[];
  private term;
  private take = 10;

  constructor(private galleryService: GalleryService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
        this.galleryService.searchGalleriesByTerm(params.term, this.take).subscribe(data => {
          this.galleries = data;
          this.term = params.term;
        });
    });
  }

  public loadMore(){
    this.take+=10;
    this.route.params.subscribe(params => {
      this.galleryService.searchGalleriesByTerm(params.term, this.take).subscribe(data => {
        this.galleries = data;
        this.term = params.term;
      });
    });
  }
}
