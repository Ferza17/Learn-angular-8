import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.elementRef.nativeElement.style.color = 'white';
    }
}
