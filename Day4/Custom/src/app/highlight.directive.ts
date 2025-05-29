import { BackgroundColor } from './../../../myApp/node_modules/@isaacs/cliui/node_modules/ansi-styles/index.d';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight='';

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHighlight||'yellow');
  }

   @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
   }

  private highlight(color:any){
    this.el.nativeElement.style.backgroundColor=color;
  }

}
