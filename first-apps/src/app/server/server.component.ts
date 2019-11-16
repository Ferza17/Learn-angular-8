import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
      .online {
          color: white;
      }
    `]
})
export class ServerComponent {
    // tslint:disable-next-line:variable-name
    private _serverId;
    // tslint:disable-next-line:variable-name
     serverStatus;

    public get serverId() {
        return this._serverId;
    }
    public set serverId(value) {
        this._serverId = value;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
}
