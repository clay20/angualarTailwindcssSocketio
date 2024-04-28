import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-chance-detection',
  standalone: true,
  imports: [],
  templateUrl: './chance-detection.component.html',
  styleUrl: './chance-detection.component.css'
})
export default class ChanceDetectionComponent {
  constructor(api:ApiService){
    
  }
}
