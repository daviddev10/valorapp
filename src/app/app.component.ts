import { Component, OnInit, ViewChild } from '@angular/core';
import { VALUED_TYPES } from './shared/data/valued.data';
import { IValueDataList, IValuedInfo } from './shared/interfaces/valued-data.interface';
import { EValuedType } from './shared/enums/valued-types.enum';
// Components
import { ValuedQuantityComponent } from './components/valued-quantity/valued-quantity.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  public tabs = [
    {
      name: 'Tab 1',
      icon: 'apple'
    },
    {
      name: 'Tab 2',
      icon: 'android'
    }
  ]

  constructor() { }


}