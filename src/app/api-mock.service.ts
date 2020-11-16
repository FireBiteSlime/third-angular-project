import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

  constructor(
  ) {
  }

  public getAllTodos(): Observable<Todo[]> {
    return Observable.of([
      new Todo({id: 1, text: 'Read article', isCompleted: false})
    ]);
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return Observable.of(
      new Todo({id: 1, text: 'Read article', isCompleted: false})
    );
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return Observable.of(
      new Todo({id: 1, text: 'Read article', isCompleted: false})
    );
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return Observable.of(
      new Todo({id: 1, text: 'Read article', isCompleted: false})
    );
  }
}
