import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';
import { HomeComponent } from './pages/home/home.component';
import { NouveauprojetComponent } from './pages/nouveauprojet/nouveauprojet.component';


const routes: Routes = [
   {path: 'home',component:HomeComponent},
   {path: 'feed',component:FeedComponent},
   {path: 'nouveauprojet',component:NouveauprojetComponent}


   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
