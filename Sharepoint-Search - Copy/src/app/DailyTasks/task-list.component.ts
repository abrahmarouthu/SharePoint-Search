import { Component, OnInit } from '@angular/core';

import { IDailyTasks } from './dailytasks';
import { TaskService } from './task.service';


@Component({
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TasksListComponent implements OnInit {
    pageTitle: string = 'Task List';
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredtasks = this.listFilter ? this.performFilter(this.listFilter) : this.tasks;
    }

    filteredtasks: IDailyTasks[];
    tasks: IDailyTasks[] = [];

    constructor(private _taskService: TaskService) {
    }

    performFilter(filterBy: string): IDailyTasks[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.tasks.filter((task: IDailyTasks) =>
              task.SCSFarmLabel.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        this._taskService.getTasks()
                .subscribe(tasks => {
                    this.tasks = tasks;
                    this.filteredtasks = this.tasks;
                },
                    error => this.errorMessage = <any>error);
    }
}
