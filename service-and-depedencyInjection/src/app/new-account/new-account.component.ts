import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // Providers
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();


  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // this.loggingService.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }

  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {
                this.accountService.statusUpdated.subscribe(
                  (status: string) => alert('New Status ' + status)
                );
               }

  ngOnInit() {
  }

}
