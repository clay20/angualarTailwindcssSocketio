import { Injectable, signal } from '@angular/core';
import { User } from '../interface/req.response';


type Progr={
    nombre:string,
    casado:boolean
}

interface State{
  users:User[];
  loading:boolean; 

}
@Injectable({
  providedIn: 'root'
})

export class ApiService{

  #state=signal<State>({
    loading:true,
    users:[]
  })
   public dias={
    lunes:'monday',
    martes:'Tuesday',
    miercoles:'wetnesday'
   }
   edad:number[]=[23,43,4,5,45,65,65,4]
 
  constructor() {
    console.log("Cargando data");
   }
  
   saludar():string{
    return "Hola amigos como estas me llamo eslmer  es  es un servicio";
   }

}   
