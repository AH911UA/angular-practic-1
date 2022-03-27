import { Component, OnInit } from '@angular/core';
import { TodoType } from './todo/todo.component';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todos: TodoType [] | [];

  constructor() {
    this.todos = [];
  }

  ngOnInit(): void {
  }

}
