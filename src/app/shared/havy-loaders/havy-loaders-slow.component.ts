import { Component } from '@angular/core';

@Component({
  selector: 'app-havy-loaders-slow',
  standalone: true,
  imports: [],
  template:`<h1>Hola mundo</h1>`
})
export class HavyLoadersSlowComponent {
       constructor(){
            const start= Date.now();
            while (Date.now()-start<3000) {
              
            }        
       }
}
