import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipeform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recipeform.component.html',
  styleUrl: './recipeform.component.scss'
})
export class RecipeformComponent {

}
