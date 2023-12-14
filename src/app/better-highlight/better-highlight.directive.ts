import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string = 'black'

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
    this.backgroundColor = this.highlightColor
    this.color = 'white'
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black')
    this.backgroundColor = this.defaultColor
    this.color = 'black'
  }

}
