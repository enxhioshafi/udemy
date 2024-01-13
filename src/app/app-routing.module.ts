import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipe-book/recipes/recipes.component';
import { ShoppingListComponent } from './components/recipe-book/shopping-list/shopping-list.component';
import { MainGameComponent } from './components/game/main-game/main-game.component';



const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'recipe-book/recipes' , component: RecipesComponent },
  { path: 'recipe-book/shopping-list' , component: ShoppingListComponent },
  { path: 'game/main-game' , component: MainGameComponent },

  
  {path: '', pathMatch: 'full',  component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
