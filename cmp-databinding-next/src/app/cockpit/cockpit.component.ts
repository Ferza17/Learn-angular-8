import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // Event Emiter @output would send your data to outside this class
  // tslint:disable-next-line:no-output-rename
  @Output('srCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // tslint:disable-next-line:no-output-rename
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // nameInput: HTMLInputElement is a HTML local element. to get this data u can use nameInput.value
  onAddServer(nameInput: HTMLInputElement) {
    console.log('serverContentInput', this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({
      serverName:  nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
