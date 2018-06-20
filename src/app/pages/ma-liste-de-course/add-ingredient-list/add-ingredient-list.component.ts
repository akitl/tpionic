import { Component, OnInit, Output,  EventEmitter  } from '@angular/core';

import { Ingredient} from '../../../ingredient';

import { IngredientService } from '../../../ingredient.service';
@Component({
  selector: 'app-add-ingredient-list',
  templateUrl: './add-ingredient-list.component.html',
  styleUrls: ['./add-ingredient-list.component.css']
})
export class AddIngredientListComponent implements OnInit {

  addDetailBool: boolean;
  ing: Ingredient;

  constructor(private IngredientService: IngredientService) { }

  ngOnInit() {
    this.ing = new Ingredient();
    this.ing.nom = "nom";
    this.ing.quantite = 0;
    this.ing.unite = "";
  }

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  addIngredient() {
    
    this.IngredientService.addIngredientsDansLaList(this.ing) 
        this.notifyParent.emit(false);
    
  }

}

