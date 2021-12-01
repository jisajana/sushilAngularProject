import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './Controller/album/album.component';
import { FriendNameComponent } from './Controller/friend-name/friend-name.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'app-album', component: AlbumComponent},
  {path:'app-friend-name', component: FriendNameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
