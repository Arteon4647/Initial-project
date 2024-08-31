import { Component } from '@angular/core';
import { UserAPIType, UserType } from '../user.types';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  constructor() {
    this.getAPIUsers();
  }

  isUsersListOpened: boolean = true;

  users: UserType[] = [
    { name: 'Artem', age: 26 },
    { name: 'Victoria', age: 23 },
    { name: 'Lev', age: 0.8 },
  ];

  apiUsers: UserAPIType[] = [];

  usersVariations = ["local", "api"];
  currentUserVariation = this.usersVariations.at(0);

  changeCurrentUsersVariation (variation: string) {
    this.currentUserVariation = variation;
  }

  async getAPIUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const apiUsers = await response.json();

    this.apiUsers = apiUsers;
  }

  toggleUsersListOpened() {
    this.isUsersListOpened = !this.isUsersListOpened;
  }
}
