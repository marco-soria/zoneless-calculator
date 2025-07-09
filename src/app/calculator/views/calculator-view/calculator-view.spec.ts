import CalculatorView from '@/calculator/views/calculator-view/calculator-view';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CalculatorView', () => {
  let fixture: ComponentFixture<CalculatorView>;
  let compiled: HTMLElement;
  let component: CalculatorView;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
      imports: [CalculatorView],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorView);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should contain app-calculator component', () => {
    expect(compiled.querySelector('app-calculator')).not.toBeNull();
  });

  it('should contain basic css classes', () => {
    const divElement = compiled.querySelector('div');
    const divClasses = divElement?.classList.value.split(' ');

    const shouldHave =
      'w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden'.split(
        ' '
      );

    shouldHave.forEach((className) => {
      expect(divClasses).toContain(className);
    });
  });
});
