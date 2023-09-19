import { Component, EventEmitter, Input,Output } from '@angular/core';
import {Task} from '../../models/Task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task !: Task;
  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggleTask = new EventEmitter<Task>();
  onDelete(taskID:number) : void {
    this.deleteTask.emit(taskID);
  }
  onToggle(task:Task) : void{
    this.toggleTask.emit(task);
  }
}
