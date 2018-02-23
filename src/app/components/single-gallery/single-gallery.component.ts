import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GalleryService } from '../../shared/services/gallery.service';
import { Gallery } from '../../shared/models/gallery.model';
import { Comment } from '../../shared/models/comment.model';
import { HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-single-gallery',
  templateUrl: './single-gallery.component.html'
})
export class SingleGalleryComponent implements OnInit {

  public gallery: Gallery;
  public comments: Comment[];
  public comment: Comment = new Comment();
  private params;
  private textboxActive: boolean;

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService,
    private auth: AuthService,
    private router: Router) {

    this.textboxActive=true;

    this.route.params.subscribe((params: Params) => {
      this.params = params;
    });
    
    this.route.data
      .subscribe((data: { gallery: Gallery }) => {
        this.gallery = data.gallery;
        // console.log(this.route.params);
      });

      this.galleryService.getCommentsById(this.params.id).subscribe(
        data => {
        this.comments = data;
      },
      (err: HttpErrorResponse) => {
        alert(`Backend returned code ${err.status} with message: ${err.error}`);
      }
    );
  }

  addComment(){

    // console.log(this.auth.user);
    this.comment.user_id=this.auth.user.id;
    
    // this.comment.user_id=this.auth.user.id;
    this.comment.gallery_id=this.params.id;
    delete this.comment.id;

    this.galleryService.addComment(this.comment).subscribe((data) => {
        this.comments=data;
    });

    this.textboxActive= false;
  }

  deleteComment(c){
    let confirmation = confirm("Are you sure you want to delete this comment?");
    if (!confirmation) {
      return;
  } 
    this.galleryService.deleteComment(c).subscribe((data) => {
      this.comments=data;
      // this.router.navigateByUrl('/galleries/'+this.auth.user.id);
  });
  }

  deleteGallery(id){
    let confirmation = confirm("Are you sure you want to delete this gallery?");
    if (!confirmation) {
      return;
  } 
    this.galleryService.deleteGallery(id).subscribe((data) => {
      this.router.navigateByUrl('/my-galleries');
      this.comments=data;
  });
  }

  public ngOnInit() {
  }

}
