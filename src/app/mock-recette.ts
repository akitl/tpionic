import { Ingredient} from './ingredient';
import { Recette} from './recette';


// Fake data Qui représente les recette que connais l'apli de base
export const RECETTES: Recette[] = [
     { nom: "Poulet au curry(Riz)", desc: "un délicieux poulet au curry sur un lit de pate", img: "pouletCurryRiz.jpg" , list:[ { nom: "curry", quantite: 1, unite: "flacon" },{ nom: "riz", quantite: 1, unite: "paquet" },{ nom: "poulet", quantite: 1, unite: "pcs" },{ nom: "poivron", quantite: 1, unite: "pcs" }]},
     { nom: "Poulet au curry(Pate)", desc: "un délicieux poulet au curry sur un lit de riz", img: "pouletCurryPate.jpg" , list:[ { nom: "curry", quantite: 1, unite: "flacon" },{ nom: "pate", quantite: 1, unite: "paquet" },{ nom: "poulet", quantite: 1, unite: "pcs" },{ nom: "poivron", quantite: 1, unite: "pcs" }]},
];



