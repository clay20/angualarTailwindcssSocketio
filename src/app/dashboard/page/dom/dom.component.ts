import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dom.component.html',
  styleUrl: './dom.component.css'
})
export class DomComponent {

 
  constructor(eleRef:ElementRef){
   let txtInput= eleRef.nativeElement
   console.log(txtInput);

  }
}
