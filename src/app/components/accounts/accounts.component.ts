import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class AccountsComponent  implements OnInit{

accounts:{name:string, status:string}[]=[];

constructor(private accountService: AccountsService){}

  ngOnInit() {
    this.accounts=this.accountService.accounts;
  }

}
