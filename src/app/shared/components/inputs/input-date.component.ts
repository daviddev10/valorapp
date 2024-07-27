import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  template: `<nz-date-picker
              class="w-100"
              [formControl]="InputControl"
              (ngModelChange)="onChangeDate($event)">
             </nz-date-picker>`,
  styles: [
  ]
})
export class InputDateComponent implements OnInit {

  @Input() InputControl = new FormControl<string | null>(null);


  constructor() {
   }

  ngOnInit(): void {
  }

  onChangeDate(e: any) {
    console.log('e :>> ', e);
  }

}
