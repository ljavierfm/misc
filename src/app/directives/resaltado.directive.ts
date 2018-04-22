import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) {
    console.log("se llamada directiva resaltado");
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter')mouseEntro(){
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
  }

  private resaltar(color:string='yellow'){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
