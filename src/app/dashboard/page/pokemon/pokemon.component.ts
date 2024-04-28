import { Component, computed, inject } from '@angular/core';
import { ConputedService } from '@services/conputed.service';
import { PokemonService } from '@services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})


export class PokemonComponent {

 
  constructor(pokemo:PokemonService){
        console.log(pokemo.species())
  }

  programador=inject(ConputedService);

}
