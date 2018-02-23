import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../shared/models/gallery.model';
import { GalleryService } from '../../shared/services/gallery.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-edit-gallery',
  templateUrl: './edit-gallery.component.html'
})
export class EditGalleryComponent implements OnInit {

  public gallery: Gallery = new Gallery();
  private params;

  constructor(private galleryService: GalleryService,
              private router: Router,
              public auth: AuthService,
              public route: ActivatedRoute) {

      this.route.params.subscribe((params: Params) => {
        this.params = params;
      });
    }


  public editGallery(){
    this.gallery.user_id=this.auth.user.id;
    this.gallery.id=this.params.id;
    this.galleryService.editGallery(this.gallery)
      .subscribe(() => {
        this.router.navigateByUrl('/galleries/'+this.gallery.id);
      });
    }
  
    public cancel(){
      this.router.navigateByUrl('/galleries/' + this.params.id);
    }

  ngOnInit() {
  }

}
