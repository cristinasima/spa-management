import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToDoListComponent } from './pages';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    ToDoListComponent
  ]
})
export class MainPageModule { }
