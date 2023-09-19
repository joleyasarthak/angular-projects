import { Component,EventEmitter,OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  @Output() addTask = new EventEmitter();
  text !: string;
  datetime !: string;
  reminder : boolean = true;  
  constructor () {}    
  ngOnInit() {}
  formSubmit(){
    if(!this.text){
      alert("Enter title please");
      return;
    }
    if(!this.datetime){
      alert("Enter Date and Time please");
      return;
    }
    const newTask = {
      text : this.text,
      day : this.datetime,
      reminder : this.reminder
    }
    this.addTask.emit(newTask);
    this.text = '';
    this.datetime = '';
  }
}
