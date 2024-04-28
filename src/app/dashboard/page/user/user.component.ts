import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { TitleComponent } from "../../../shared/title/title.component";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [TitleComponent,CommonModule]
})
export default class UserComponent {
  public saludar=inject(ApiService);

 constructor(asd:ApiService){
      let saludarf=asd.saludar();
      console.log(this.saludar.saludar())
 }
}
