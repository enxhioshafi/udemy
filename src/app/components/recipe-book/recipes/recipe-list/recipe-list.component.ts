import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]=[
  new Recipe('A test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFkdFbQrIJ1_04QcvO8h_ap_uZZ_nsXAmrtk8vd5oRFzxyblJjQ8QRV2ChKgD98IhgPM&usqp=CAU'),
  new Recipe('A test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFkdFbQrIJ1_04QcvO8h_ap_uZZ_nsXAmrtk8vd5oRFzxyblJjQ8QRV2ChKgD98IhgPM&usqp=CAU')

];




constructor(){

}

ngOnInit(): void {
  
}
}
