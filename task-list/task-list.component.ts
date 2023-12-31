import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { name: string, completed: boolean }[] = [];

  toggleTaskStatus(task: { name: string, completed: boolean }) {
    task.completed = !task.completed;
  }
  
}
