import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { FeedComponent } from './pages/feed/feed.component';
import { NouveauprojetComponent } from './pages/nouveauprojet/nouveauprojet.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    NouveauprojetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AuthModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
