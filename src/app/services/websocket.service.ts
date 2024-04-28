import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService extends Socket{
  @Output() outEven: EventEmitter<any> = new EventEmitter();
  @Output() callback: EventEmitter<any> = new EventEmitter();
  constructor(private cookie:CookieService) {
    super({
      url: 'http://localhost:5020',
      options: {
        query: {
          
          nameRoon:cookie.get('room')
          
        
          
        }
      }
    });

    this.listen();
  }
    listen=()=>{
      this.ioSocket.on('evento',(res: any)=>this.callback.emit(res))
 
    }

  

    emitEvent = (payload = {}) => {
      this.ioSocket.emit('evento', payload)
     

    }
}
