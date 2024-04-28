import { CommonModule } from '@angular/common';
import { Component, Pipe, inject } from '@angular/core';
import { ProductosService } from '@services/productos.service';
import { pipe } from 'rxjs';
import { MiPipePersonalizadoPipe } from '../../../mi-pipe-personalizado.pipe';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule,MiPipePersonalizadoPipe],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  public prod=inject(ProductosService);
  edad:number=24;
  fecha=new Date();
  programado={
    nombre:'elmer',
    edada:23
  }
  constructor(){
    console.log(this.prod);
  }
}
