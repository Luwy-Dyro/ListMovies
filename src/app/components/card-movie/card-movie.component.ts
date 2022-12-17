import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movies';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  @Input('movieCard') movie!: Movie 

  constructor(){}
  
  ngOnInit(): void {
      console.log(this.movie);
      
  }

  getImage(){


    // if(this.movie.Poster === 'N/A'){
    //   return 'https://via.placeholder.com/400x500'
    // }else{
    //   return this.movie.Poster
    // }

    // Optimizado
    return this.movie.Poster != 'N/A' ? this.movie.Poster : 'https://via.placeholder.com/400x500' 

  }




}
