import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RecipelistComponent } from './components/recipelist/recipelist.component';
import { RecipedetailsComponent } from './components/recipedetails/recipedetails.component';
import { RecipeformComponent } from './components/recipeform/recipeform.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "recipelist", component: RecipelistComponent},
    {path: "recipedetails", component: RecipedetailsComponent},
    {path: "recipeform", component: RecipeformComponent}
];
