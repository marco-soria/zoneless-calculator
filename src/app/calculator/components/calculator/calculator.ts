import { Component } from '@angular/core';
import { CalculatorButton } from '../calculator-button/calculator-button';

@Component({
  selector: 'app-calculator',
  imports: [CalculatorButton],
  templateUrl: './calculator.html',
})
export class Calculator {}
