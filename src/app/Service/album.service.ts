import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../Model/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) {}
    getAlbumRecord(): Observable<Album[]>{
      return this.http.get<Album[]>(
        'https://jsonplaceholder.typicode.com/albums'
        );    
   }
}
