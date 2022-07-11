import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() task!: Task;
  faTimes = faTimes;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:any){
   this.onDeleteTask.emit(task)
  }

  onToggle(task:any){
    this.onToggleReminder.emit(task)
  }

}
