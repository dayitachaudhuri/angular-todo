import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})

export class AddTodoComponent {
  @Output() newTodo: EventEmitter<Todo> = new EventEmitter();
  title: String;
  desc: String;

  onSubmit(){
    const todo = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true
    }
    console.log(todo)
    this.newTodo.emit(todo);
    console.log("New Todo has been triggered")
  }
}
