import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _message: string = 'Este campo es requerido';

  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  };

  @Input() set message(value: string) {
    this._message = value;
    this.setMessage();
  };

  @Input() set valid(value: boolean) {
    // la clase hidden está definida en styles.css
    value? this.htmlElement.nativeElement.classList.add('hidden') : this.htmlElement.nativeElement.classList.remove('hidden');
  };

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
    this.setClass();    
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this._color;
  };

  setMessage() {
    this.htmlElement.nativeElement.innerText = this._message;
  }

  setClass() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }
}
