import { Component } from '@angular/core';
import { UserAPIType, UserType } from '../user.types';
import { UserCardComponent } from '../user-card/user-card.component';
import { UsersService } from '../../service/users-service/users.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  constructor(public usersService: UsersService) {
    this.usersService.getAPIUsers();
  }

  isUsersListOpened: boolean = true;

  toggleUsersListOpened() {
    this.isUsersListOpened = !this.isUsersListOpened;
  }
}
