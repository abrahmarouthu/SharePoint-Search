import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TasksListComponent } from './task-list.component';
import { TaskService } from './task.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'tasks', component: TasksListComponent }
    ]),
    SharedModule
  ],
  declarations: [
    TasksListComponent
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
