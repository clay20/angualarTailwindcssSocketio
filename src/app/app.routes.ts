import { Routes } from '@angular/router';
import UsersComponent from './dashboard/page/users/users.component';
import { DomComponent } from './dashboard/page/dom/dom.component';
import { PokemonComponent } from './dashboard/page/pokemon/pokemon.component';
import { ApiPokeComponent } from './dashboard/page/api-poke/api-poke.component';
import { ProductosComponent } from './dashboard/page/productos/productos.component';
import { RoomComponent } from './dashboard/page/room/room.component';
import { HomeComponent } from './dashboard/page/home/home.component';

export const routes: Routes = [
    {
        path:'dashboard',
        loadComponent:()=> import('./dashboard/dashboard.component'),
        children:[
            {
                path:'producto',
                title:'Producto',
                component:ProductosComponent
            },
            {
                path:'change',
                title: 'Change detention',
                loadComponent:()=>import('./dashboard/page/chance-detection/chance-detection.component'),
            },
            {
                path:'control-flow',
                title:'Control flow',
                loadComponent: ()=>import('./dashboard/page/control-flow/control-flow.component')
               , data:{Animation:'heroGroupPage'}
            }
            ,{
                path:'defere-options',
                title:'defere options',
                loadComponent: ()=>import('./dashboard/page/defere-options/defere-options.component')
            }
            ,{
                path:'defere-view',
                title:'defere view',
                loadComponent: ()=>import('./dashboard/page/defere-view/defere-view.component')
            }
            ,{
                path:'user/:id',
                title:'user',
                loadComponent: ()=>import('./dashboard/page/user/user.component')
            } 
            ,{
                path:'users',
                title:'users',
                component:UsersComponent,
                data:{Animation:'fade'}
            } 
            ,{
                path:'view-transition',
                title:'view-transition',
                loadComponent: ()=>import('./dashboard/page/view-transion/view-transion.component')
            } 
            ,{
                path:'view-transition1',
                title:'view-transition1',
                loadComponent: ()=>import('./dashboard/page/view-transion/view-transion.component1')
            } ,
            {
                path:'dom',
                title:'Dom',
                component:DomComponent
            }
            ,
            {
                path:'pokemon',
                title:'Pokemo',
                component:PokemonComponent
            } ,
            {
                path:'poke',
                title:'Poke',
                component:ApiPokeComponent
            },
            {
                path:'home',
                title:'home',
                component:HomeComponent
            },
            {
                path:'home/:room',
                title:'room',
                component:RoomComponent
            },
            {
                path:'', 
                redirectTo:'control-flow',
                pathMatch:'full'
            }
        
        ]
    },
    {
        path:'', 
        redirectTo:'/dashboard',
        pathMatch:'full'
    }
];
