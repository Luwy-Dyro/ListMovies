import { Component, OnInit } from '@angular/core';
import {  of, from, Observable } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit{

  myArray = [10,20,30];
  //private myArrayOf$: Observable<any> = 

  constructor(){

  }

  ngOnInit() {
    
  }



}
