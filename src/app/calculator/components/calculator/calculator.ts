import { CalculatorService } from '@/calculator/services/calculator.service';
import { Component, computed, inject, viewChildren } from '@angular/core';
import { CalculatorButton } from '../calculator-button/calculator-button';

@Component({
  selector: 'app-calculator',
  imports: [CalculatorButton],
  templateUrl: './calculator.html',
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)',
  },
  // styles: `
  //   // .is-command {
  //   //   @apply bg-indigo-700 bg-opacity-20;
  //   // }
  // `,
})
export class Calculator {
  private calculatorService = inject(CalculatorService);

  public calculatorButtons = viewChildren(CalculatorButton);

  public resultText = computed(() => this.calculatorService.resultText());
  public subResultText = computed(() => this.calculatorService.subResultText());
  public lastOperator = computed(() => this.calculatorService.lastOperator());

  // get resultText() {
  //   return this.calculatorService.resultText();
  // }

  handleClick(key: string) {
    this.calculatorService.constructNumber(key);
  }

  // @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      X: '*',
      '/': '÷',
      Enter: '=',
    };

    const key = event.key;
    const keyValue = keyEquivalents[key] ?? key;

    this.handleClick(keyValue);

    this.calculatorButtons().forEach((button) => {
      button.keyboardPressedStyle(keyValue);
    });
  }
}
