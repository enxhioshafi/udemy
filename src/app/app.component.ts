import { Component } from '@angular/core';
import { GameControlComponent } from './components/game/game-control/game-control.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {

  }
  redirectToHome() {
    this.router.navigate(['/home']);
  }

}
