import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() value: string | undefined;
  @Input() type: string | undefined;
  @Input() disabled: boolean | undefined;
  @Input() styles: {} | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
