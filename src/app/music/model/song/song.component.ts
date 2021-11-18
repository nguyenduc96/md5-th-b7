import { Component, OnInit } from '@angular/core';
import {Song} from '../../song';
import {SongService} from '../../service/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  playlist: Song[] = [];

  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.playlist = this.songService.playlist;
  }

}
