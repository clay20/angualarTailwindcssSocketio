import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DrawComponent } from '../draw/draw.component';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [DrawComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit {
    room:any
  cookieValue?: string;
    constructor (private routes:ActivatedRoute,private cookie:CookieService){
     
    }

    ngOnInit(): void {
        this.room=this.routes.snapshot.paramMap.get('room');
        console.log(this.room);

        this.cookie.set('room', this.room);
        this.cookieValue = this.cookie.get('Test');
        
    }

}
