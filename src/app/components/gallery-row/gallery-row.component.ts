import { Component, OnInit, Input} from '@angular/core';
import { Gallery } from '../../shared/models/gallery.model';

@Component({
  selector: '[galleryRow]',
  templateUrl: './gallery-row.component.html'
})
export class GalleryRowComponent implements OnInit {

  private gallery: Gallery;

  @Input()
  set galleryRow(gallery: Gallery){
    this.gallery = gallery;
  }

  constructor() { }

  ngOnInit() {
  }

}
