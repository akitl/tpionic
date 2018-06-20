import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngredientListComponent } from './add-ingredient-list.component';

describe('AddIngredientListComponent', () => {
  let component: AddIngredientListComponent;
  let fixture: ComponentFixture<AddIngredientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIngredientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIngredientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
