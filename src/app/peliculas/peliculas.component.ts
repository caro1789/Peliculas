import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas: any[] = [];
  query: string = '';

  constructor(private peliculasService: PeliculasService) {

  }

  ngOnInit() {
    this.peliculas = this.peliculasService.getPeliculas();
  }
  buscarPeliculas() {
    this.peliculas = this.peliculasService.buscarPeliculas(this.query);
  }

}
