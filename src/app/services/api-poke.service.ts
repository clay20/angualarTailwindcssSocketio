import { Injectable, computed, inject, signal } from '@angular/core';
import { PokemonRes } from '../interface/martesPokemon';
import { HttpClient } from '@angular/common/http';
import { Result } from '../interface/pokemon';

interface state{
  poke:Result[],
  cargando:true
}



@Injectable({
  providedIn: 'root'
})
export class ApiPokeService {

  private http=inject(HttpClient);
   #state=signal<state>({
    poke:[],
    cargando:true
   })
   public poke= computed(()=>this.#state().poke)
   public cargando= computed(()=>this.#state().cargando)
   
  constructor() {
    this.http.get<PokemonRes>("https://pokeapi.co/api/v2/pokemon?limit=3&offset=0")
    .subscribe(res=>{
      console.log(res.results);
      this.#state.set({
        poke:res.results,
        cargando:true
      })
    });

   }
}
