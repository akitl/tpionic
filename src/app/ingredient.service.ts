import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Ingredient } from './ingredient';
import { INGREDIENTS,INGREDIENTSDLF,INGREDIENTSLDC} from './mock-ingredient';
import { RECETTES } from './mock-recette';
import { NotificationService } from './notification.service';
import { Recette } from './recette';

@Injectable()
export class IngredientService {

  constructor(private notifcationService: NotificationService) { }


  // gesstion des ingedients
  ingredients : Ingredient[] = INGREDIENTS;
  ingredientsDansLeFrigo : Ingredient[] = INGREDIENTSDLF;
  ingredientsListDeCours: Ingredient[] = INGREDIENTSLDC;

  //permet de récupéré la liste des Ingredients connue par la base
  getIngredients(): Observable<Ingredient[]>  {
    return of(this.ingredients);
  }

  //permet de récupéré la liste des Ingredients présent dans le frigo
  getIngredientsDansLeFrigo(): Observable<Ingredient[]>  {
    return of(this.ingredientsDansLeFrigo);
  }

  //permet de savoire is un ingredient exsite dans la base par sont nom
  getIngredientByName(nom: string): boolean  {
    let bo: boolean = false;
    this.ingredients.forEach((ing,i)=>{
      if (ing.nom == nom){
      
        bo = true;
      }
    });
    
    return bo;
    
  }

  //permet de savoire is un ingredient exsite dans le frigo par sont nom
  getIngredientByNameDansLeFrigo(nom: string): boolean  {
    let bo: boolean = false;
    this.ingredientsDansLeFrigo.forEach((ing,i)=>{
      if (ing.nom == nom){
      
        bo = true;
      }
    });
    
    return bo;
    
  }

  //Retourne l'index d'un ingredient voulue dans le frigo ou  -1
  getIngredientByNameDansLeFrigoIndex(nom: string): number  {
    let bo: number = -1;
    this.ingredientsDansLeFrigo.forEach((ing,i)=>{
      if (ing.nom == nom){
      
        bo = i;
      }
    });
    
    return bo;
    
  }


  //ajoute un ingredient a la base
  addIngredients(ing:Ingredient):void {
    if (this.ingredients.indexOf(ing) >= 0){

    }else{
      this.ingredients.push(ing);
      this.notifcationService.add("ingredient : "+ing.nom+" ajouter a la base");
    }
  }

  // ajoute un ingredient dans le frigo
  addIngredientsDansLeFrigo(ing:Ingredient):void {
    if (this.ingredientsDansLeFrigo.indexOf(ing) >= 0){

    }else{
      this.ingredientsDansLeFrigo.push(ing);
      this.notifcationService.add("ingredient : "+ing.nom+" ajouter dans le frigo");
      if (!this.getIngredientByName(ing.nom)){
        ing.quantite = 0;
        ing.unite = "";
        this.addIngredients(ing);
      }
    }
  }

    // ajoute un ingredient dans le frigo
    addIngredientsDansLaList(ing:Ingredient):void {
      if (this.ingredientsListDeCours.indexOf(ing) >= 0){
  
      }else{
        this.ingredientsListDeCours.push(ing);
        this.notifcationService.add("ingredient : "+ing.nom+" ajouter dans la liste de course");
        if (!this.getIngredientByName(ing.nom)){
          ing.quantite = 0;
          ing.unite = "";
          this.addIngredients(ing);
        }
      }
    }
  


  //supprime un ingredient de la base 
  delIngredients(ing:Ingredient):void {
    this.ingredients.splice(this.ingredients.indexOf(ing),1);
  }

  //supprime un ingredient du frigo
  delIngredientsDansLeFringo(ing:Ingredient):void {
    this.ingredientsDansLeFrigo.splice(this.ingredientsDansLeFrigo.indexOf(ing),1);
  }

  delIngredientsDansLaList(ing:Ingredient):void {
    this.ingredientsListDeCours.splice(this.ingredientsListDeCours.indexOf(ing),1);
  }

// gestion des recettes 
  recettes : Recette[] = RECETTES;

  //permet de récupéré la liste des recettes
  getRecettes(): Observable<Recette[]>  {
    //this.notifcationService.add('IngredientService: fetched ingredient');
    return of(this.recettes);
  }

  //permet d'ajouter une recette 
  addRecette(rec:Recette):void {
    if (this.recettes.indexOf(rec) >= 0){

    }else{
      this.recettes.push(rec);
    }
  }

  //permet de supprimer une recette 
  delRecette(rec:Recette):void {
    this.recettes.splice(this.recettes.indexOf(rec),1);
  }

  //permet d'ajouter un ingredient dans une recette passer en paramettre
  addIngredientToRecette(rec:Recette,ing:Ingredient):void{
    this.recettes[this.recettes.indexOf(rec)].list.push(ing);
    if (!this.getIngredientByName(ing.nom)){
      ing.quantite = 0;
      ing.unite = "";
      this.addIngredients(ing);
    }

  }

  //permet d'incrementer la quantiter d'une ingredient existent 
  addIngredientQuantiteToRecette(rec:Recette,ing:Ingredient):void{
    this.recettes[this.recettes.indexOf(rec)].list[this.recettes[this.recettes.indexOf(rec)].list.indexOf(ing)].quantite = ing.quantite+1;

  }

    //permet de decrementer la quantiter d'une ingredient existent 
  delIngredientQuantiteToRecette(rec:Recette,ing:Ingredient):void{
    this.recettes[this.recettes.indexOf(rec)].list[this.recettes[this.recettes.indexOf(rec)].list.indexOf(ing)].quantite = ing.quantite-1;
    if(this.recettes[this.recettes.indexOf(rec)].list[this.recettes[this.recettes.indexOf(rec)].list.indexOf(ing)].quantite <= 0){
      this.recettes[this.recettes.indexOf(rec)].list.splice(this.recettes[this.recettes.indexOf(rec)].list.indexOf(ing),1);
    }
      }

      // gestion de liste de course 

      clearList(){
        this.ingredientsListDeCours.splice(0,this.ingredientsListDeCours.length);

        }
      //permet de recupére la liste de course 
      getListDeCourse(): Observable<Ingredient[]>  {
        //this.notifcationService.add('IngredientService: fetched ingredient');
        return of(this.ingredientsListDeCours);
      }
    
      notif(msg:string):void{
        this.notifcationService.add(msg);
      }

      realiserRec(rec:Recette): void {

        rec.list.forEach((ing,i)=>{
          if (this.ingredientsDansLeFrigo[this.getIngredientByNameDansLeFrigoIndex(ing.nom)].quantite == 1){
            this.delIngredientsDansLeFringo(ing);
          }else{
         this.ingredientsDansLeFrigo[this.getIngredientByNameDansLeFrigoIndex(ing.nom)].quantite =  this.ingredientsDansLeFrigo[this.getIngredientByNameDansLeFrigoIndex(ing.nom)].quantite - ing.quantite;
          }
        });

      }

}
