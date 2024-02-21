import { Component, OnInit } from '@angular/core';
import { VALUED_TYPES } from './shared/data/valued.data';
import { IValueDataList, IValuedInfo } from './shared/interfaces/valued-data.interface';
import { EValuedType } from './shared/enums/valued-types.enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  valuedTypes: IValuedInfo[] = [];
  valuedDataList: IValueDataList[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadValuedList();
  }

  private loadValuedList() {
    this.valuedTypes = VALUED_TYPES;
    this.valuedDataList = [{
      Name: 'Nacimiento',
      Type: EValuedType.Nacimiento,
      Quantity: 15,
      UnitPrice: 30,
      Total: 450
    }];
  }
}