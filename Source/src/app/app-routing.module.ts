import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'session-detail/:id', loadChildren: './session-detail/session-detail.module#SessionDetailPageModule' },
  { path: 'session-picture', loadChildren: './session-picture/session-picture.module#SessionPicturePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
