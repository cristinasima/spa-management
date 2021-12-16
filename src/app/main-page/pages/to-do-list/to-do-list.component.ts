import { Component } from '@angular/core';
import {HttpConfigService} from "../../../services/http-config.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.less']
})
export class ToDoListComponent {

  toDoList: Array<any>;
  formGroup: FormGroup;
  itemAdded: boolean;


  constructor(private httpConfigService: HttpConfigService, formBuilder: FormBuilder) {
    this.toDoList = [];
    this.itemAdded = false;
    this.formGroup = formBuilder.group({
      label: ['', [Validators.required]],
    })
    this.getList();
  }


  getList() {
    this.httpConfigService.getList()
      .subscribe((response: any) => {
        this.toDoList = response.toDoList
      });
  }


  addItem(label: string) {

    //item is added only to local list
    if (label) {
      const newItem = {
        label: label,
        id: this.randomInteger(0, 100000),
        completed: false
      }
      this.toDoList.push(newItem);
    }

    this.itemAdded = true;
    this.formGroup.reset();

    //TODO add element to server;
  }


  deleteItem(index: number) {
    //item is deleted only from local list
    this.toDoList.splice(index, 1);
  }


  private randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
