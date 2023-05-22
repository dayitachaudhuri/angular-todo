import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent{
  
  todos:Todo[];
  localItem:string|null;
  show:Number;

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem==null){
      this.todos = [];
    }
    else{
      this.todos=JSON.parse(this.localItem);
    }
    this.show = 0;
  }

  todoDelete(event:Todo){
    const index = this.todos.indexOf(event);
    this.todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  newTodo(event:Todo){
    this.todos.push(event);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log(this.todos);
  }

  todoComplete(event:Todo){
    const index = this.todos.indexOf(event);
    this.todos[index].active= !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  showAll(){
    this.show = 0;
  }

  showActive(){
    this.show = 1;
  }

  showComplete(){
    this.show = 2;
  }

}
