import { Component ,inject} from '@angular/core';
import { ApiPokeService } from '@services/api-poke.service';

@Component({
  selector: 'app-api-poke',
  standalone: true,
  imports: [],
  templateUrl: './api-poke.component.html',
  styleUrl: './api-poke.component.css'
})
export class ApiPokeComponent {

 public apiPoke=inject(ApiPokeService)

constructor(){
  
}
}
