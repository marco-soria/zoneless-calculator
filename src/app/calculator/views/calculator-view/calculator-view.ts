import { Component } from '@angular/core';
import { Calculator } from '../../components/calculator/calculator';

@Component({
  selector: 'app-calculator-view',
  imports: [Calculator],
  templateUrl: './calculator-view.html',
})
export default class CalculatorView {}
