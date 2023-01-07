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
  @Input() defaultColor: string = 'primary';
  @Input() textColor: string = '#fff';

  backgroundColors = {
    primary: {
      default: '#3F4FA0',
      hover: '#394892',
      pressed: '#2D3872',
    },
    secondry: {
      default: '#ECEDF6',
      hover: '#D9DCEC',
      pressed: '#C5CAE3',
    },
  };

  basicButton = {
    background: this.getBackgroundColor('default'),
    borderRadius: '100px',
    color: this.textColor,
    border: this.getBackgroundColor('default'),
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

  buttonPressed: any;

  buttonFocused = {
    border: '4px dashed #1a2143',
  };

  buttonDisabled = {
    background: '#e4e4e4 ',
    border: '#e4e4e4',
    color: 'rgb(184, 176, 176) ',
  };

  buttonHover: any;

  buttonDisabledHover = {
    cursor: 'not-allowed',
  };

  @HostBinding('style') style: {} | undefined;

  ngOnInit(): void {
    this.basicButton.background = this.getBackgroundColor('default');
    this.basicButton.color = this.textColor;
    this.basicButton.border = this.getBackgroundColor('default');

    this.buttonHover = {
      background: this.getBackgroundColor('hover'),
    };

    this.buttonPressed = {
      background: this.getBackgroundColor('pressed'),
    };

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

  getBackgroundColor(option: string) {
    let output = '';
    if (option == 'default') {
      output =
        this.defaultColor == 'primary'
          ? this.backgroundColors.primary.default
          : this.backgroundColors.secondry.default;
    } else if (option == 'hover') {
      output =
        this.defaultColor == 'primary'
          ? this.backgroundColors.primary.hover
          : this.backgroundColors.secondry.hover;
    } else if (option == 'pressed') {
      output =
        this.defaultColor == 'primary'
          ? this.backgroundColors.primary.pressed
          : this.backgroundColors.secondry.pressed;
    }
    return output;
  }
}
