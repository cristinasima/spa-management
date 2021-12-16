import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToDoListComponent } from './to-do-list.component';

describe('ToDoListComponent', () => {

  let component: ToDoListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ToDoListComponent
      ],
    }).compileComponents();
  });

  it('should render page title in a h2 tag', () => {
  });
});
