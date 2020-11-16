import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {

  constructor( private api: ApiService ) {
  }
  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  // Simulate GET /todos/:id
  getTodoById(todoId: number): Observable<Todo> {
    return this.api.getTodoById(todoId);
  }

  // Toggle complete
  toggleTodoComplete(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    return this.api.updateTodo(todo);
  }

}
