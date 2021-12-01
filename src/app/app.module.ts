import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendComponent } from './Controller/friend/friend.component';
import { HttpClientModule } from '@angular/common/http';
import { FriendNameComponent } from './Controller/friend-name/friend-name.component';
import { UserComponent } from './Controller/user/user.component';
import { AlbumComponent } from './Controller/album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendComponent,
    FriendNameComponent,
    UserComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
