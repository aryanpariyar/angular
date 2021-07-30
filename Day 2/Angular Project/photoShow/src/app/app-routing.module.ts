import { BlogComponent } from './MyComponent/blog/blog.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './MyComponent/services/services.component';
import { PhotoesComponent } from './MyComponent/photoes/photoes.component';
import { AddPhotoComponent } from './MyComponent/add-photo/add-photo.component';

const routes: Routes = [
  { path: 'photoes', component: PhotoesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'add-photo', component: AddPhotoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }