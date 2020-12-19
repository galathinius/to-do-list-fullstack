import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { toDoItem } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor(private httpClient: HttpClient) {}

  getNotes(): Observable<toDoItem[]> {
    const link: string = `http://localhost:3080/api/notes`;

    return this.httpClient.get<toDoItem[]>(link);
  }
}
