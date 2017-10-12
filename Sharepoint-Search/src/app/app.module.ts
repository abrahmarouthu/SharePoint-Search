import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { TaskModule } from './DailyTasks/dailytask.module';
import { FarmModule } from './FarmStatus/farms.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      //{ path: 'tasks', component: TasksListComponent },
      //{ path: 'tasks/:id', component: TasksDetailComponent },
      //{ path: 'welcome', component: WelcomeComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    TaskModule,
    FarmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
