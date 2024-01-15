import { Component } from '@angular/core';

@Component({
  selector: 'app-only-odd',
  templateUrl: './only-odd.component.html',
  styleUrl: './only-odd.component.css'
})
export class OnlyOddComponent {

  // numbers= [1,2,3,4,5];
  oddNumbers=[1,3,5];
  evenNumbers=[2,4];
  onlyOdd=false;
   value=10;
}
