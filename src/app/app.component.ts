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
export class AppComponent implements OnInit {

  @ViewChild('quantityComp') quantityComp!: ValuedQuantityComponent;

  valuedTypes: IValuedInfo[] = [];
  valuedDataList: IValueDataList[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadValuedList();
  }

  private loadValuedList() {
    this.valuedTypes = VALUED_TYPES;
  }

  onAddValuedToList(valued: IValueDataList): void {
    const valuedList = [...this.valuedDataList];
    const valuedIndex = valuedList.findIndex(data => data.Type === valued.Type);
    if (valuedIndex >= 0) { // Editar valorado
      valuedList[valuedIndex] = valued;
      this.valuedDataList = valuedList;
    } else { // Nuevo valorado
      this.valuedDataList = valuedList.concat([valued]);
    }
  }

  onEditValued(valued: IValueDataList) {
    const valuedType = this.valuedTypes.find(type => type.ValuedType === valued.Type);
    if (valuedType) {
      this.quantityComp.openQuantityModal(valuedType, valued.Quantity);
    }
  }

  onRemoveValued(valuedType: EValuedType): void {
    const newValueList = this.valuedDataList.filter(valued => valued.Type !== valuedType);
    this.valuedDataList = newValueList;
  }
}