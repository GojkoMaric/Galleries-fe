import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../shared/models/gallery.model';
import { GalleryService } from '../../shared/services/gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-gallery',
  templateUrl: './create-gallery.component.html'
})
export class CreateGalleryComponent implements OnInit {

  public gallery: Gallery;

  constructor(private galleryService: GalleryService,
              private router: Router) { }

  ngOnInit() {
  }

  public submit(){
    this.galleryService.addGallery(this.gallery)
    .subscribe(() => {
      this.router.navigateByUrl('/');
    });

  }

}
