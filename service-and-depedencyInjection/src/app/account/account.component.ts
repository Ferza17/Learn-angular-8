import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string }>();
  constructor(private loggingService: LoggingService,
              private AccountsService: AccountService ) { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A Server Status changed, new status : ', status);
    this.loggingService.logStatusChange(status);
    // this.AccountsService.updateStatus(this.id, status);
    this.AccountsService.statusUpdated.emit(status);
  }

}
