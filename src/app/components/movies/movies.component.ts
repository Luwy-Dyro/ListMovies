import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movies';
import { debounceTime, distinct, filter, fromEvent, map, Subscription, switchMap, tap, Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[]  = []

  @ViewChild('movieSearchInput', {static: true}) movieSearchInputChild!: ElementRef 
  
  //Crear un Pipe Async para desuscribir
  movies$!: Observable<Movie[]>

  //2da opcion de Unsuscribe
  //movieSuscription!: Subscription

  constructor(private servMovie: MovieService ){

  }

  // ngAfterViewInit(): void {
  //   fromEvent(this.movieSearchInputChild.nativeElement, 'keyup').pipe(
      
  //     ).subscribe()
  // }

  ngOnInit(): void {
  
    this.movies$ = fromEvent<Event>(this.movieSearchInputChild.nativeElement, 'keyup').pipe(
      map((event: Event) => {
        const searchTerm = (event.target as HTMLInputElement).value
        return searchTerm
      }),  
      filter((searchTerm: string) => searchTerm.length > 2),
      debounceTime(500),
      ///distinct(),   //Borrar un caracter y al regresar no recarga, no llama al http
      switchMap((searchTerm: string) => this.servMovie.getMovies(searchTerm) ),  //SwitchMap - ejecuta el servicio / Ayuda a cancelar la petición anteriore y comienz lanueva
      // tap((searchTerm: string) => console.log(searchTerm))
    )   
    //Se quita que que el pipe async se suscribe solo
    // .subscribe((respMovies: Movie[]) =>{
    //   ///this.getMovies(searchTerm)
    //   this.movies = respMovies !== undefined ? respMovies : []
    // }) 
  }

  //2da opcion de Unsuscribe
  // ngOnDestroy(): void {
  //   this.movieSuscription.unsubscribe()
  // }





  //3er método
  // getMovies(searchTerm: string){

  //   this.servMovie.getMovies(searchTerm) 
  //         .subscribe(respMovies =>{
  //             console.log(respMovies);
  
  //             this.movies = respMovies !== undefined ? respMovies : []

  //         })

  // }

  // getMovies(textTerm: string){
  //   //console.log(textTerm);  
  //   this.servMovie.getMovies(textTerm) 
  //       .subscribe(respMovies =>{
  //           console.log(respMovies);

  //           this.movies = respMovies !== undefined ? respMovies : []
  //           // if(respMovies === undefined){
  //           //   this.movies = []
  //           // }else{
              
  //           //   this.movies = respMovies
  //           // }
  //       })

  // }

  // Con Event
  // getMovies(searchTerm: string){
    //const searchTerm = (event.target as HTMLInputElement).value
    //console.log(searchTerm);
  
  




}
