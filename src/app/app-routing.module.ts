import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MyGalleriesComponent } from './components/my-galleries/my-galleries.component';
import { CreateGalleryComponent } from './components/create-gallery/create-gallery.component';
import { AllGalleriesComponent } from './components/all-galleries/all-galleries.component';
import { SearchPageGalleryComponent } from './search/components/search-page-gallery/search-page-gallery.component';
import { SingleGalleryComponent } from './components/single-gallery/single-gallery.component';
import { GalleryResolver } from './shared/resolvers/gallery.resolver';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { UserResolver } from './shared/resolvers/user.resolver';
import { EditGalleryComponent } from './components/edit-gallery/edit-gallery.component';


const appRoutes: Routes = [
  {
    path: '',
    component: AllGalleriesComponent    
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'my-galleries',
    component: MyGalleriesComponent
  },
  {
    path: 'create',
    component: CreateGalleryComponent
  },
  {
    path: 'galleries/search/:term',
    component: SearchPageGalleryComponent
  },
  {
    path: 'galleries/:id',
    component: SingleGalleryComponent,
    resolve: {
      gallery: GalleryResolver
    }
  },
  {
    path: 'authors/:id',
    component: SingleUserComponent,
    resolve: {
      gallery: UserResolver
    }
  },
  {
    path: 'edit-gallery/:id',
    component: EditGalleryComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
