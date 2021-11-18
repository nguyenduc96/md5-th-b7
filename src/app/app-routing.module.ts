import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelinesComponent} from './time-lines/timelines/timelines.component';
import {SongComponent} from './music/model/song/song.component';
import {PlayerComponent} from './music/model/player/player.component';



// const routes: Routes = [
//   {
//     path: 'timelines',
//     component: TimelinesComponent
//
//   }
// ];

const routes: Routes = [
  {
    path: 'youtube',
    component: SongComponent,
    children: [{
      path: ':id',
      component: PlayerComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
