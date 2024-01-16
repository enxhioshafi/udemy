import { Component, Input } from '@angular/core';
import { LoggingService } from '../../../services/logging.service';
import { AccountsService } from '../../../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;


  constructor(private loggingService: LoggingService, private accountService:AccountsService) {

  }


  onSetTo(status: string) {
   this.accountService.updateStatus(this.id,status);
  //  this.loggingService.logStatusChange(status);
  this.accountService.statusUpdated.emit(status)
  }
}
