import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../shared/models/gallery.model';

@Component({
  selector: 'app-create-gallery',
  templateUrl: './create-gallery.component.html'
})
export class CreateGalleryComponent implements OnInit {

  public gallery: Gallery;

  constructor() { }

  ngOnInit() {
  }

  public submit(){

  }

}
