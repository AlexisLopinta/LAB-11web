import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { name: string, completed: boolean }[] = [];
  filteredTasks: { name: string, completed: boolean }[] = [];

  applyFilter(selectedFilter: string) {
    if (selectedFilter === 'all') {
      this.filteredTasks = this.tasks;
    } else if (selectedFilter === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (selectedFilter === 'uncompleted') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    }
  }

  addTask(taskName: string) {
    this.tasks.push({ name: taskName, completed: false });
  }
}
