import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../../shared/services/gallery.service';
import { Gallery } from '../../../shared/models/gallery.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search-page-gallery',
  templateUrl: './search-page-gallery.component.html'
})
export class SearchPageGalleryComponent implements OnInit {

  private galleries: Gallery[];
  private term;

  constructor(private galleryService: GalleryService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
        this.galleryService.searchGalleriesByTerm(params.term).subscribe(data => {
            this.galleries = data;
            this.term = params.term;
        });
    });
  }


}
