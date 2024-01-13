import { Component } from '@angular/core';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router){}

  serverElements=[{type:'server', name:'Testserver',content:'Just a test'}];

  
}
