import { Component, HostBinding, input } from '@angular/core';
@Component({
  selector: 'app-calculator-button',
  imports: [],
  templateUrl: './calculator-button.html',
  styleUrl: './calculator-button.css',
  host: {
    class: 'border-r border-b border-indigo-400',
    // attribute: 'hola',
    // 'data-size': 'XL',
  },
  // encapsulation: ViewEncapsulation.None,
})
export class CalculatorButton {
  public isCommand = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  public isDoubleSize = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  // @HostBinding('class.is-command') get commandStyle() {
  //   return this.isCommand();
  // }

  @HostBinding('class') get DobleSizeStyle() {
    return this.isDoubleSize() ? 'w-2/4' : 'w-1/4';
  }
}
