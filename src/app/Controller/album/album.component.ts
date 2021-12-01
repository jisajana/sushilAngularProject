import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/Model/Album';
import { AlbumService } from 'src/app/Service/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albumList:Album[] = [];
  constructor(private service:AlbumService) { }

  ngOnInit(): void {
    this.service.getAlbumRecord()
    .subscribe ((data: Album[])=> (this.albumList =data));
  }

}
