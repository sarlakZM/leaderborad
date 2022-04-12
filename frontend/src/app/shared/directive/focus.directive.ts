import { Directive, ElementRef, AfterViewInit, OnInit } from '@angular/core';

/**
 * Auto focus on input or other elemet directive use in html templates
 * Example:
 * <... vrAutofocus ...>
 * debug unsupport focus with material
 * new and fastest way with less code
 * @export
 * @class AutofocusDirective
 * @implements {AfterViewInit}
 */
@Directive({
  selector: '[vrAutofocus]'
})
export class AutofocusDirective implements AfterViewInit, OnInit {
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    setTimeout( () => {
      this.el.nativeElement.focus();
    });
  }

  ngAfterViewInit(): void {
    setTimeout( () => {
      this.el.nativeElement.focus();
    });
  }
}
