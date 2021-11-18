import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './time-lines/timelines/timelines.component';
import { SongComponent } from './music/model/song/song.component';
import { PlayerComponent } from './music/model/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    SongComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
