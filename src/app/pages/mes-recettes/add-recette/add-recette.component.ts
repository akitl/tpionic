import { Component, OnInit, EventEmitter,Output } from '@angular/core';

import { Recette } from '../../../recette';
import { Ingredient } from '../../../ingredient';

import { IngredientService } from '../../../ingredient.service';

@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.css']
})
export class AddRecetteComponent implements OnInit {

  ings: Ingredient[] = [];
  rec: Recette;
  addBo: boolean = false;
  ingAdd:Ingredient;
  constructor(private IngredientService: IngredientService) { }
  

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  addRecette() {
    
    this.IngredientService.addRecette(this.rec) 
        this.notifyParent.emit(false);
    
  }

  addIngquatite(ing): void{
    this.rec.list[this.rec.list.indexOf(ing)].quantite++;
  }

  delIngquatite(ing): void{
    this.rec.list[this.rec.list.indexOf(ing)].quantite--;
  }

  addIngBo(): void{
   this.addBo = true;
  }

  addIngredient(): void{
    this.addBo = false;
    if (this.rec.list.indexOf(this.ingAdd) == -1){
      this.rec.list.push(this.ingAdd);
    }else{
      this.IngredientService.notif("ingredient : "+this.ingAdd.nom+" Existe deja dans cette recette");
    }


  }


  ngOnInit() {
    this.rec = new Recette;
    this.rec.desc = "";
    this.rec.img = "";
    this.rec.list = this.ings;
    this.rec.nom = "";

    this.ingAdd = new Ingredient;
    this.ingAdd.nom = "";
    this.ingAdd.quantite = 0;
    this.ingAdd.unite = "";
  }

}
