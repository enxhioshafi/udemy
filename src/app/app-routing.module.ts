import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainGameComponent } from './components/game/main-game/main-game.component';
import { AddServerComponent } from './components/add-server/add-server.component';
import { RecipesBookComponent } from './components/recipe-book/recipe-book.component';
import { OnlyOddComponent } from './components/only-odd/only-odd.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { UsersComponent } from './components/users/users.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipe-book', component: RecipesBookComponent },
  { path: 'game/main-game', component: MainGameComponent },
  { path: 'add-server', component: AddServerComponent },
  { path: 'onlyodd', component: OnlyOddComponent },
  { path: 'account', component: AccountsComponent },
  { path: 'users', component: UsersComponent },
  


  { path: '', pathMatch: 'full', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
