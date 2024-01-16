import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveCounter=0;
  inactiveToActiveCounter=0;

  incrementActiveToInActive(){
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);

  }

  
  incrementInActiveToInActive(){
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active: ' + this.inactiveToActiveCounter);
  }

  constructor() { }
}
