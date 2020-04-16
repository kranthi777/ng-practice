import { Ingredients } from './../shared/ingredients.model';


export class Recipe {
  public name:string;
  public desc:string;
  public img:string;
  public ingredients: Ingredients[];
  constructor(name:string,desc:string,img:string, ingredients){
    this.name = name;
    this.desc = desc;
    this.img = img;
    this.ingredients = ingredients;
  }
}