import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  date = new Date();
  
  // setTimeout(() => {
  //   this.title = String(i) ;

  // }, 2000);
}
