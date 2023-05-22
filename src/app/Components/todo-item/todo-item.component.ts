import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent {
  @Input() todo:Todo;
  @Input() i:Number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoComplete: EventEmitter<Todo> = new EventEmitter();

  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("Delete has been triggered");
  }

  onCheckboxClick(todo:Todo){
    this.todoComplete.emit(todo);
    console.log("Checkbox has been triggered");
  }

  faTrashcan = faTrashCan;
  faPenToSquare = faPenToSquare;
}
