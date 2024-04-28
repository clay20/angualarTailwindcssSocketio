
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A'|'B'|'F'|'M';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [TitleComponent,CommonModule,FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {

   valor:string='';
    public showSignal=signal(false);
    public grade= signal<Grade>('M');
    updateSigna(){
      this.showSignal.update(v=>!v);
    }
}
