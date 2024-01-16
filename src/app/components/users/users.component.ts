import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers: [UsersService,CounterService]
})
export class UsersComponent {

}
