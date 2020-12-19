import { Component, OnInit } from '@angular/core';
import { toDoItem } from '../../interfaces';
import { ToDoService } from '../../services/toDo/to-do.service';

@Component({
  selector: 'app-whole-list',
  templateUrl: './whole-list.component.html',
  styleUrls: ['./whole-list.component.css'],
})
export class WholeListComponent implements OnInit {
  public toDos: toDoItem[] = [];
  constructor(private ToDoS: ToDoService) {}

  ngOnInit(): void {
    this.ToDoS.getNotes().subscribe((notes) => {
      this.toDos = notes;
    });
  }
}
