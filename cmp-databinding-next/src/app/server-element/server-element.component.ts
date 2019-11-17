import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None for disable angular style encapsulation
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  // Get Data from parrent Component with alias name @Input can bind data from outside this class
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };
  @Input() name: string;
  constructor() {
    console.log('constructor called !');
   }
  @ViewChild('heading', {static: true}) header: ElementRef;
  // Access #contentParagraph on Parent Component
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
   ngOnChanges(changes: SimpleChanges ) {
     console.log('ngOnChanges called', changes);
   }

  ngOnInit() {
    console.log('ngOnInit called !');
    console.log('textContent : ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph', this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
    console.log('textContent : ' + this.header.nativeElement.textContent);

  }
  ngAfterViewChecked() {
    console.log('AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('onDestory !');
  }
}
