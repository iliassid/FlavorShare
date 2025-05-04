import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipedetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipedetails.component.html',
  styleUrl: './recipedetails.component.scss'
})
export class RecipedetailsComponent implements OnInit {
  recipe: Recipe | null = null;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  
    if (!id || isNaN(id)) {
      console.error('Invalid or missing ID in route');
      return;
    }
  
    this.recipeService.getOne(id).subscribe({
      next: (data: Recipe) => {
        this.recipe = data;
      },
      error: (err) => {
        console.error('Error fetching recipe:', err);
      }
    });
  }
}
