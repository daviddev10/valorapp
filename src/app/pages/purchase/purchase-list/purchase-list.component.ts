import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { ValuedQuantityComponent } from 'src/app/components/valued-quantity/valued-quantity.component';
import { EValuedType } from 'src/app/core/enums/valued.enum';
import { VALUED_TYPES } from 'src/app/shared/data/valued.data';
import { IValueDataList, IValuedInfo } from 'src/app/shared/interfaces/valued-data.interface';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {


  @Input() purchaseForm: FormGroup;
  @Output() onSavePurchase = new EventEmitter();


  @ViewChild('quantityComp') quantityComp!: ValuedQuantityComponent;

  valuedTypes: IValuedInfo[] = [];
  valuedDataList: IValueDataList[] = [];

  public isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.loadValuedList();
  }

  private loadValuedList() {
    this.valuedTypes = VALUED_TYPES;
  }

  onAddValuedToList(valued: IValueDataList): void {
    console.log('valued :>> ', valued);
    const valuedList = [...this.valuedDataList];
    const valuedIndex = valuedList.findIndex(data => data.Type === valued.Type);
    if (valuedIndex >= 0) { // Editar valorado
      valuedList[valuedIndex] = valued;
      this.valuedDataList = valuedList;
    } else { // Nuevo valorado
      this.valuedDataList = valuedList.concat([valued]);
    }
  }

  public onEditValued(valued: IValueDataList): void {
    const valuedType = this.valuedTypes.find(type => type.ValuedType === valued.Type);
    if (valuedType) {
      this.quantityComp.openQuantityModal(valuedType, valued.Quantity);
    }
  }

  onRemoveValued(valuedType: EValuedType): void {
    const newValueList = this.valuedDataList.filter(valued => valued.Type !== valuedType);
    this.valuedDataList = newValueList;
  }

  openNewPurchaseModal() {
    this.isVisible = true
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {
    this.isVisible = false;
  }

  get PurchaseDate() { return this.purchaseForm.get('PurchaseDate') as FormControl }

  listOfColumns: ColumnItem[] = [
    {
      name: 'Fecha',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim', byDefault: true }
      ],
      filterFn: (list: string[], item: DataItem) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Age',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.age - b.age,
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'Address',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.address.length - b.address.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    }
  ];
  listOfData: DataItem[] = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park'
    }
  ];

}

interface DataItem {
  name: string;
  age: number;
  address: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}