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

  constructor(
    public route: ActivatedRoute,
    public galleryService: GalleryService,
    public auth: AuthService,) {

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
  }

  public ngOnInit() {
  }
}
