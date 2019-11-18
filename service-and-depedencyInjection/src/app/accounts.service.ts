import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';
@Injectable()
export class AccountService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Paijo',
          status: ' Hello there i\'\m using whatsapp'
        },
        {
          name: 'Paijo',
          status: 'Sorry i\'\m bussy now'
        }
      ];
      statusUpdated = new EventEmitter<string>();

      constructor(private loggingService: LoggingService) {}

      addAccount(nameOK: string, statusOk: string) {
        // this.accounts.push(name, status);
        this.accounts.push({name: nameOK, status: statusOk});
        this.loggingService.logStatusChange(statusOk);
      }

      updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
      }
}
