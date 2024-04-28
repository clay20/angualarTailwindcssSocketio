import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  public menuItems=routes
  .map(routes=>routes.children?? [])
  .flat()
  .filter(r => r && r.path)
  .filter(r => !r.path?.includes(':'))

  
constructor(){
//   const dashboardR=routes
//   .map(routes=>routes.children?? [])
//   .flat()
//   .filter(r => r && r.path)
//   .filter(r => !r.path?.includes(':'))

  
// console.log(dashboardR);
  
   
}
}
