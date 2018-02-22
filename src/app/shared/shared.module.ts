import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService } from './services/gallery.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http/src/client';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { GalleryRowComponent } from '../components/gallery-row/gallery-row.component';
import { RouterModule, Routes } from '@angular/router';
import { GalleryResolver } from './resolvers/gallery.resolver';
import { UserResolver } from './resolvers/user.resolver';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    GalleryService,
    AuthService,
    GalleryResolver,
    UserResolver,
  ],
  declarations: [
    GalleryRowComponent
  ],
  exports: [
    GalleryRowComponent
  ]
})
export class SharedModule { }
