import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IValueDataList, IValuedInfo } from 'src/app/shared/interfaces/valued-data.interface';
// Libs
import Swal from 'sweetalert2'

@Component({
  selector: 'app-valued-quantity',
  templateUrl: './valued-quantity.component.html',
  styleUrls: ['./valued-quantity.component.scss']
})
export class ValuedQuantityComponent implements OnInit {

  @Input() valuedTypeList: IValuedInfo[] = [];
  @Output() onAddValuedData = new EventEmitter<IValueDataList>();

  constructor() { }

  ngOnInit(): void {

  }



  openQuantityModal(valued: IValuedInfo, quantity: number = 0): void {
    console.log('valued :>> ', valued);
    console.log('quantity :>> ', quantity);
    Swal.fire({
      title: `${valued.ValuedName} <i class="${valued.Icon}"></i>`,
      // text: 'Ingrese la cantidad a comprar:',
      input: 'number',
      inputLabel: 'Ingrese la cantidad a comprar:',
      inputPlaceholder: '0',
      inputValue: quantity,
      inputValidator: (value) => {
        return +value ? null : 'Ingrese una cantidad valida!';
      },
      // showCancelButton: true,
      // cancelButtonText: 'Cancelar',
      showCloseButton: true,
      // icon: 'error',
      confirmButtonColor: '#40A9FF',
      confirmButtonText: `<i class="uil uil-check-circle"></i> Agregar`
    }).then((result) => {
      if (result.isConfirmed) {
        const valuedToList: IValueDataList = this.getValuedListModel(valued, +result.value);
        this.onAddValuedData.emit(valuedToList);
      }
    });
  }

  private getValuedListModel(valued: IValuedInfo, quantity: number): IValueDataList {
    const newValued: IValueDataList = {
      Name: valued.ValuedName,
      Type: valued.ValuedType,
      Quantity: quantity,
      UnitPrice: valued.ValuedPrice,
      Total: valued.ValuedPrice * quantity
    }
    return newValued;
  }


}