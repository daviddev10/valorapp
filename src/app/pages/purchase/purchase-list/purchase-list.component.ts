import { Component, OnInit, ViewChild } from '@angular/core';
import { ValuedQuantityComponent } from 'src/app/components/valued-quantity/valued-quantity.component';
import { VALUED_TYPES } from 'src/app/shared/data/valued.data';
import { EValuedType } from 'src/app/shared/enums/valued-types.enum';
import { IValueDataList, IValuedInfo } from 'src/app/shared/interfaces/valued-data.interface';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {

  
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
