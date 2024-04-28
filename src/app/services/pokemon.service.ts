import { Injectable, computed, inject, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Pokemon, Result } from '../interface/pokemon';
interface State{
  species:Pokemon[];
  loading:boolean; 

}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private http =inject(HttpClient);
  #state=signal<State>({
    loading:true,
    species:[]
  })
  public species= computed(()=>this.#state().species);
  public loading= computed(()=>this.#state().loading);

  constructor() {
    this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .subscribe(res=>{
      console.log(res);
      // this.#state.set({
      //   loading:false,
      //   species:res
      // })
    })
   }


}
