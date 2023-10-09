import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  studentName: string = '';
  todoList: string[] = [] ;
  addTodo(e: Event){
    this.todoList.push(this.studentName);
    this.studentName= ""
  }

  deleteTodo(id:Number){
    this.todoList = this.todoList.filter((todo,index) => {
      return id != index ;
    })
  }
}

