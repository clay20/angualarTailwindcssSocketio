import { Component } from '@angular/core';

@Component({
  selector: 'app-view-transion',
  standalone: true,
  imports: [],
  template:`
<p>view-transion 2</p>
<section class="flex justify-end" style="width: 140vh;">
    <img 
    src="../../../../assets/chica.jpg" 
    alt="jpg" 
    width="400" 
    height="400"
    style="view-transition-name: chica1;"
    class="rounded">
    <div class="bg-green-500 w-24 h-20 flex align-bottom"
    style="view-transition-name: caja;">fsfsdf</div>
</section>
  `
})
export default class ViewTransionComponent {

}
