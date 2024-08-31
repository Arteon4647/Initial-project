import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { UserListComponent } from './user/user-list/user-list.component';

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'users', component: UserListComponent },
];
