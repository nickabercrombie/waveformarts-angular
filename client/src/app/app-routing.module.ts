import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorgradingComponent } from './components/colorgrading/colorgrading.component';
import { LandingComponent } from './components/landing/landing.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PostaudioComponent } from './components/postaudio/postaudio.component';
import { ProductionaudioComponent } from './components/productionaudio/productionaudio.component';
import { AddComponent } from './components/soundComponents/add/add.component';

const routes: Routes = [
  { path: '',                 component: LandingComponent },
  { path: 'productionaudio',  component: ProductionaudioComponent },
  { path: 'postaudio',        component: PostaudioComponent },
  { path: 'photo',            component: PhotoComponent },
  { path: 'colorgrading',     component: ColorgradingComponent },
  { path: 'store',            component: AddComponent   },
  //  keep ** at the bottom of this list!
  { path: '**',               component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
