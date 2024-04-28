import { Component, inject } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '@services/api.service';
import { UsersService } from '@services/users.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TitleComponent,CommonModule,RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export default class UsersComponent {
      service=inject(ApiService);
      serviceUser=inject(UsersService);
}