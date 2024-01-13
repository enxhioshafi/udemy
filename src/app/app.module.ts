import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { GameControlComponent } from './components/game/game-control/game-control.component';
import { OddComponent } from './components/game/odd/odd.component';
import { EvenComponent } from './components/game/even/even.component';
import { HeaderComponent } from './components/game/header/header.component';
import { RecipesComponent } from './components/recipe-book/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipe-book/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './components/recipe-book/recipes/recipe-list/recipe-list.component';
import { ShoppingEditComponent } from './components/recipe-book/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './components/recipe-book/shopping-list/shopping-list.component';
import { RecipeItemComponent } from './components/recipe-book/recipes/recipe-list/recipe-item/recipe-item.component';
import { HomeComponent } from './components/home/home.component';
import { HomeHeaderComponent } from './components/home/home-header/home-header.component';
import { MainGameComponent } from './components/game/main-game/main-game.component';
import { AddServerComponent } from './components/add-server/add-server.component';
import { CockpitComponent } from './components/add-server/cockpit/cockpit.component';
import { ServerElementComponent } from './components/add-server/server-element/server-element.component';






@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    RecipeItemComponent,
    HomeComponent,
    HomeHeaderComponent,
    MainGameComponent,
    AddServerComponent,
    CockpitComponent,
    ServerElementComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
