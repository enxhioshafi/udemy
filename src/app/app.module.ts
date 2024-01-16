import { BrowserModule } from '@angular/platform-browser';
import { NgModule, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { GameControlComponent } from './components/game/game-control/game-control.component';
import { OddComponent } from './components/game/odd/odd.component';
import { EvenComponent } from './components/game/even/even.component';
import { HeaderComponent } from './components/recipe-book/header/header.component';
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
import { RecipesBookComponent } from './components/recipe-book/recipe-book.component';
import { OnlyOddComponent } from './components/only-odd/only-odd.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { AccountComponent } from './components/accounts/account/account.component';
import { NewAccountComponent } from './components/accounts/new-account/new-account.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';
import { UsersComponent } from './components/users/users.component';
import { ActiveUsersComponent } from './components/users/active-users/active-users.component';
import { InactiveUsersComponent } from './components/users/inactive-users/inactive-users.component';
import { CounterService } from './services/counter.service';


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
    ServerElementComponent,
    RecipesBookComponent,
    OnlyOddComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    AccountComponent,
    NewAccountComponent,
    AccountsComponent,
    UsersComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AccountsService,LoggingService,CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
