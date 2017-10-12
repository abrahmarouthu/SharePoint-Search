import { Component, OnInit } from '@angular/core';

import { IFarms } from './farms';
import { FarmService } from './farm.service';

@Component({
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {
  pageTitle: string = 'Farms';
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredfarms = this.listFilter ? this.performFilter(this.listFilter) : this.farms;
  }

  filteredfarms: IFarms[];
  farms: IFarms[] = [];

  constructor(private _taskService: FarmService) {
  }

  performFilter(filterBy: string): IFarms[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.farms.filter((farm: IFarms) =>
            farm.FarmLabel.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
      this._taskService.getFarms()
              .subscribe(farms => {
                  this.farms = farms;
                  this.filteredfarms = this.farms;
              },
                  error => this.errorMessage = <any>error);
  }

}
