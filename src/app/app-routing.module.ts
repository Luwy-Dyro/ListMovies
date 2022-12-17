import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './components/observables/observables.component';

const routes: Routes = [

  { path: '', component:ObservablesComponent  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
