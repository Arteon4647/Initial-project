import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'users', component: UserListComponent },
  { path: 'todos', component: TodosListComponent },
  { path: 'posts', component: PostsListComponent },
];
