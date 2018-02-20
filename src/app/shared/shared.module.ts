import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService } from './services/gallery.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http/src/client';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GalleryService,
    AuthService
  ],
  declarations: []
})
export class SharedModule { }
