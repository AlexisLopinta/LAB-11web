// task-filter.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  @Output() filterSelected = new EventEmitter<string>();

  applyFilter(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.filterSelected.emit(selectedValue);
  }
}
