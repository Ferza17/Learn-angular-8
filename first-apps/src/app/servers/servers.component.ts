import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  // selector: '[app-servers]',
  // tslint:disable-next-line:component-selector
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _allowNewServer = false;
  // tslint:disable-next-line:variable-name
  private _serverCreationStatus = 'No Server was Created!';
  // tslint:disable-next-line:variable-name
  private _serverName = '';
  public serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  public get serverName() {
    return this._serverName;
  }
  public set serverName(value) {
    this._serverName = value;
  }
  public get serverCreationStatus() {
    return this._serverCreationStatus;
  }
  public set serverCreationStatus(value) {
    this._serverCreationStatus = value;
  }
  public get allowNewServer() {

    return this._allowNewServer;
  }
  public set allowNewServer(value) {
    this._allowNewServer = value;
  }

  constructor() {
    setTimeout(() => {
      return this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

}
