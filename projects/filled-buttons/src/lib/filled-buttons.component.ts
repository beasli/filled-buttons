import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'shubham-button',
  templateUrl: './filled-buttons.component.html',
  styleUrls: ['./filled-buttons.component.css'],
})
export class FilledButtonsComponent {
  @Input() label: string = '';
  @Input()
  isDisabled!: boolean;
  @Input() size: string = 'default';
  isPressed: boolean;
  isFocused: boolean;

  constructor() {
    this.isFocused = false;
    this.isPressed = false;
  }

  @HostListener('mousedown') onMouseDown() {
    if (!this.isDisabled) this.isPressed = true;
  }

  @HostListener('mouseup') onMouseUp() {
    this.isPressed = false;
  }

  @HostListener('focusin') onFocus() {
    if (!this.isDisabled) this.isFocused = true;
  }

  @HostListener('focusout') onBlur() {
    this.isFocused = false;
  }
}
