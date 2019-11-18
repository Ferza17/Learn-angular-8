import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;

  constructor(private elRef: ElementRef, private rendered: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.rendered.setStyle(this.elRef.nativeElement, 'color', 'black');
  }

  // Reacting to event
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.rendered.setStyle(this.elRef.nativeElement, 'color', 'white');
    // Change backgroundColor in other way
    // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;

  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.rendered.setStyle(this.elRef.nativeElement, 'color', 'black');
    // Change backgroundColor in Another way
    // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;

  }
}
