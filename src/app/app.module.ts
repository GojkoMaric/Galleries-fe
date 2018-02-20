import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MyGalleriesComponent } from './components/my-galleries/my-galleries.component';
import { CreateGalleryComponent } from './components/create-gallery/create-gallery.component';
import { AllGalleriesComponent } from './components/all-galleries/all-galleries.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    MyGalleriesComponent,
    CreateGalleryComponent,
    AllGalleriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
