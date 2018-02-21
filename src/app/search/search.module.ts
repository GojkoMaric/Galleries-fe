import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchPageGalleryComponent } from './components/search-page-gallery/search-page-gallery.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    SearchInputComponent,
    SearchPageGalleryComponent
  ],
  exports: [
    SearchInputComponent,
    SearchPageGalleryComponent
  ]
})
export class SearchModule { }
