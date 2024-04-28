import { Injectable, computed, inject, signal } from '@angular/core';
import { Productos } from '../interface/productos';
import { HttpClient } from '@angular/common/http';

 interface estate{
  prod:Productos[]

 }
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private http=inject(HttpClient);
  #prod=signal<estate>({
    prod:[]
  })

  public producto= computed(()=>this.#prod().prod);

  constructor() {
    this.http.get<Productos[]>("https://fakestoreapi.com/products")
    .subscribe(res=>{
  
      this.#prod.set({
        prod:res
      })
     
    })
   }
}
