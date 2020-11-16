import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }


  index() {
      return this.http.get(API_URL).map(r => r.json());
    }
  // API: GET /todos
  public getAllTodos(): Observable<Todo[]> {
   // will use this.http.get()
   return this.http
    .get(API_URL ) //+ '/todos'
    .map(response => {
      const todos = response.json();
      return todos.map((todo) => new Todo(todo));
    })
    .catch(this.handleError);
 }

  public createTodo(todo: Todo) {
    // will use this.http.post()
    return this.http
      .post(API_URL, todo) //+ '/todos'
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }
  public getTodoById(todoId: number) {
   // will use this.http.get()
   return this.http
      .get(API_URL + '/todos/' + todoId) //+ '/todos'
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
 }

  public updateTodo(todo: Todo) {
    // will use this.http.put()
    return this.http
      .put(API_URL + '/todos/' + todo.id, todo)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
