import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //providers: [TodoDataService]
})
export class AppComponent implements OnInit {


  apiStatus: string;
    constructor(private _http: Http) {}
    ngOnInit() {
      this._http.get('http://frozen-garden-74428.herokuapp.com/').subscribe(data => {
        this.apiStatus = data.json().data;
      });
    }
  // todos: Todo[] = [];
  //
  // constructor(
  //   private todoDataService: TodoDataService
  // ) {
  // }
  //
  // public ngOnInit() {
  //   this.todoDataService
  //     .getAllTodos()
  //     .subscribe(
  //       (todos) => {
  //         this.todos = todos;
  //       }
  //     );
  // }
  //
  // onAddTodo(todo) {
  //   this.todoDataService
  //     .addTodo(todo)
  //     .subscribe(
  //       (newTodo) => {
  //         this.todos = this.todos.concat(newTodo);
  //       }
  //     );
  // }
  //
  // onToggleTodoComplete(todo) {
  //   this.todoDataService
  //     .toggleTodoComplete(todo)
  //     .subscribe(
  //       (updatedTodo) => {
  //         todo = updatedTodo;
  //       }
  //     );
  // }
}
