import { Injectable } from '@angular/core';
import { UserAPIType, UserType } from '../../user/user.types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  users: UserType[] = [
    { name: 'Artem', age: 26 },
    { name: 'Victoria', age: 23 },
    { name: 'Lev', age: 0.8 },
  ];

  apiUsers: UserAPIType[] = [];

  usersVariations = ['local', 'api'];
  currentUsersVariation = this.usersVariations.at(0);

  changeCurrentUsersVariation(variation: string) {
    this.currentUsersVariation = variation;
  }

  async getAPIUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const apiUsers = await response.json();

    console.log(apiUsers, 'apiUsers');

    this.apiUsers = apiUsers;
  }
}
