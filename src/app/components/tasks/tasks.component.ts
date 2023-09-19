import { Component,Input,OnInit } from '@angular/core';
import {Task} from '../../models/Task'
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks : Task[] = [];
  taskID: number = 0;
  constructor (private taskService: TaskService) {
    
  }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>{this.tasks = tasks});
  }
  deleteTask(taskID:number){
    this.taskService.deleteTasks(taskID).subscribe((tasks)=>{this.tasks = tasks; this.ngOnInit()});
  }
  toggleTask(task:Task){
    task.reminder = !task.reminder;
    this.taskService.toggleTasks(task).subscribe((tasks)=>{this.tasks = tasks; this.ngOnInit()});
  }
  addNewTask(task:Task){
    this.taskService.addTask(task).subscribe((tasks)=>{this.tasks = tasks; this.ngOnInit()});
  }
}
