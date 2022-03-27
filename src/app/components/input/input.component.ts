import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:  InputComponent,
      multi: true,
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() type!: string;
  @Input() styles!: {};
  
  public value!: string;
  public onChange!: (value: string) => void;
  public onTouched!: () => void;

  constructor() {
    this.type = 'text';
  }

  ngOnInit(): void {

  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
