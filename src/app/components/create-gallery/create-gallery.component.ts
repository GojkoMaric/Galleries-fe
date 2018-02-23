import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../shared/models/gallery.model';
import { GalleryService } from '../../shared/services/gallery.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-create-gallery',
  templateUrl: './create-gallery.component.html'
})
export class CreateGalleryComponent implements OnInit {

  public gallery: Gallery = new Gallery();

  constructor(private galleryService: GalleryService,
              private router: Router,
              public auth: AuthService) { }

  ngOnInit() {
    // let date=new Date();
    // console.log(date);
  }

  public createGallery(){
    this.gallery.user_id=this.auth.user.id;
    // this.gallery.created_at='01-01-01';
    // this.gallery.created_at=new Date();
    this.galleryService.addGallery(this.gallery)
    .subscribe(() => {
      this.router.navigateByUrl('/my-galleries');
    });

  }

  public cancel(){
    this.router.navigateByUrl('/my-galleries');
  }

}
