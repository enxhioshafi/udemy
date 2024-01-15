import { Component } from '@angular/core';



@Component({
    selector: 'app-recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrl: './recipe-book.component.css'
})
export class RecipesBookComponent {
    loadedFeature = 'recipe';

    onNavigate(feature: string) {
        this.loadedFeature = feature;
    }

}