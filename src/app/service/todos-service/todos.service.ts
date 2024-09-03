import { Injectable } from '@angular/core';
import { TodoType } from '../../todos/todos.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  todos: TodoType[] = [];

  async getAPITodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json()

    this.todos = todos;
  }
}
