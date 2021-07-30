import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoesComponent } from './MyComponent/photoes/photoes.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './MyComponent/about/about.component';
import { ServicesComponent } from './MyComponent/services/services.component';
import { BlogComponent } from './MyComponent/blog/blog.component';
import { AddPhotoComponent } from './MyComponent/add-photo/add-photo.component';
import { ViewPhotoDetailsComponent } from './MyComponent/view-photo-details/view-photo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoesComponent,
    AboutComponent,
    ServicesComponent,
    BlogComponent,
    AddPhotoComponent,
    ViewPhotoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
