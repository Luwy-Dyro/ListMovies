import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit{
  
  
  ngOnInit(): void {
    this.firtsObervable()  
  }

  firtsObervable(){

    const observable = new Observable(suscrib => {

      let count = 0;

      setInterval(() => {
        suscrib.next(count)
        count += 1;

      },1000   )

    }) 

    console.log("Before de ejecutar");
    
    const subscription = observable.subscribe(
      {
         next: value => console.log('valor =>' + value),
         complete: () => console.info('Completado')
      }
            
    )

    console.log("after de ejecutar");


    setTimeout(() => {

      subscription.unsubscribe()

    }, 4000 )


  }


}
