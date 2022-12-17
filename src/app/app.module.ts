import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    OperatorsComponent,
    MoviesComponent,
    CardMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
