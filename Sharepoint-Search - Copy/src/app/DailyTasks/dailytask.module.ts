import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TasksListComponent } from './task-list.component';
import { TaskService } from './task.service';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'tasks', component: TasksListComponent }
    ]),
    FormsModule,
    BrowserModule
  ],
  declarations: [
    TasksListComponent
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
