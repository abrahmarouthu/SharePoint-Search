import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FarmListComponent } from './farm-list.component';
import { FarmService } from './farm.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'farms', component: FarmListComponent }
    ]),
    SharedModule
  ],
  declarations: [
    FarmListComponent
  ],
  providers: [
    FarmService
  ]
})
export class FarmModule { }
