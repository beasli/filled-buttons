import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appFilledButtons]',
})
export class FilledButtonsDirective implements OnInit {
  @Input() isDisabled: any;
  @Input() size: string = 'default';
  defaultColor: string = '#3f4fa0';

  basicButton = {
    background: this.defaultColor,
    borderRadius: '100px',
    color: '#fff',
  };

  buttonDefault = {
    width: '125px',
    height: '48px',
    fontSize: '12px',
    padding: '8px 24px',
  };

  buttonLarge = {
    width: '180px',
    height: '60px',
    fontSize: '18px',
    padding: '8px 24px',
  };

  buttonSmall = {
    width: '100px',
    height: '36px',
    fontSize: '10px',
    padding: '2px',
  };

  buttonPressed = {
    background: '#2d3872 ',
  };

  buttonFocused = {
    border: '4px dashed #1a2143',
  };

  buttonDisabled = {
    background: '#e4e4e4 ',
    border: '#e4e4e4',
    color: 'rgb(184, 176, 176) ',
  };

  buttonHover = {
    background: '#394892',
  };

  buttonDisabledHover = {
    cursor: 'not-allowed',
  };

  @HostBinding('style') style: {} | undefined;

  ngOnInit(): void {
    this.style = {
      ...this.basicButton,
      ...this.setSize(),
    };
    if (this.isDisabled) {
      this.style = { ...this.style, ...this.setSize(), ...this.buttonDisabled };
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.isDisabled) {
      this.style = { ...this.style, ...this.buttonHover };
    } else {
      this.style = { ...this.style, ...this.buttonDisabledHover };
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (!this.isDisabled) {
      this.style = {
        ...this.basicButton,
        ...this.setSize(),
      };
    }
  }

  @HostListener('mousedown') onMouseDown() {
    if (!this.isDisabled) this.style = { ...this.style, ...this.buttonPressed };
  }

  @HostListener('mouseup') onMouseUp() {
    if (!this.isDisabled)
      this.style = {
        ...this.basicButton,
        ...this.setSize(),
      };
  }

  @HostListener('focusin') onFocus() {
    if (!this.isDisabled) this.style = { ...this.style, ...this.buttonFocused };
  }

  @HostListener('focusout') onBlur() {
    if (!this.isDisabled)
      this.style = {
        ...this.basicButton,
        ...this.setSize(),
      };
  }

  setSize() {
    let size = this.buttonDefault;
    if (this.size == 'large') {
      size = this.buttonLarge;
    } else if (this.size == 'small') {
      size = this.buttonSmall;
    }

    return size;
  }
}
