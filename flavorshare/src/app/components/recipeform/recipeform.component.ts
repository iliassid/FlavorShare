import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipeform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recipeform.component.html',
  styleUrls: ['./recipeform.component.scss']
})
export class RecipeformComponent implements OnInit {
  recipes: Recipe[] = [];

  title = '';
  photo = '';
  description = '';
  ingredients = '';
  prepareit = '';

  editing: Recipe | null = null;

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipeService.getALL().subscribe(data => (this.recipes = data));
  }

  submitForm() {
    const recipeData = {
      title: this.title,
      photo: this.photo,
      description: this.description,
      ingredients: this.ingredients,
      prepareit: this.prepareit
    };

    if (this.editing) {
      const updateRecipe: Recipe = { ...this.editing, ...recipeData };
      this.recipeService.update(updateRecipe).subscribe(() => {
        this.resetForm();
        this.loadRecipes();
        this.cancelEdit();  // Reset after edit
      });
    } else {
      this.recipeService.create(recipeData).subscribe(() => {
        this.resetForm();
        this.loadRecipes();
      });
    }
  }

  editRecipe(recipe: Recipe) {
    this.editing = recipe;
    this.title = recipe.title;
    this.photo = recipe.photo;
    this.description = recipe.description;
    this.ingredients = recipe.ingredients;
    this.prepareit = recipe.prepareit;
  }

  deleteRecipe(id: string) {  // Change id type to string
    if (confirm('Are you sure you want to delete this recipe?')) {
      this.recipeService.delete(id).subscribe(() => this.loadRecipes());
    }
  }

  cancelEdit() {
    this.editing = null;
    this.resetForm();
  }

  resetForm() {
    this.title = '';
    this.photo = '';
    this.description = '';
    this.ingredients = '';
    this.prepareit = '';
  }

  viewDetails(recipe: Recipe) {
    console.log('Navigating to details with ID:', recipe.id);
    this.router.navigate(['/details', recipe.id]);
  }
}
