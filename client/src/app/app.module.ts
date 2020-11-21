import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { UserComponent } from './components/user/user.component';
import { MessageComponent } from './components/message/message.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { AddComponent } from './components/soundComponents/add/add.component';
import { EditComponent } from './components/soundComponents/edit/edit.component';
import { TableComponent } from './components/soundComponents/table/table.component';
import { InfoComponent } from './components/soundComponents/info/info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ProductionaudioComponent } from './components/productionaudio/productionaudio.component';
import { PostaudioComponent } from './components/postaudio/postaudio.component';
import { PhotoComponent } from './components/photo/photo.component';
import { ColorgradingComponent } from './components/colorgrading/colorgrading.component';
import { MusicComponent } from './components/music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    UserComponent,
    MessageComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    CartComponent,
    AddComponent,
    EditComponent,
    TableComponent,
    InfoComponent,
    TestimonialsComponent,
    ProductionaudioComponent,
    PostaudioComponent,
    PhotoComponent,
    ColorgradingComponent,
    MusicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
