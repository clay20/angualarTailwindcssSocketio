import { Injectable, computed, signal } from '@angular/core';
 interface Programdor{
  nombre:string,
  tecnologias:string[],
  edad:number
 }
@Injectable({
  providedIn: 'root'
})
export class ConputedService {
   #progrmadotor=signal<Programdor>({
     nombre:'Javier',
     tecnologias:['angular','react','vue'],
     edad:23
   })

   public nombre=computed(()=>this.#progrmadotor().nombre);
   public tec=computed(()=>this.#progrmadotor().tecnologias);
   public edad=computed(()=>this.#progrmadotor().edad);

  constructor() { 
    this.#progrmadotor.update(v=>({...v,tecnologias:['Android','vue'],edad:24}))
  }
}
