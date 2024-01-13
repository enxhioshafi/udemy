import { Component } from '@angular/core';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent {
  collapsed = true;
}
