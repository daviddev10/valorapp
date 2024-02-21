import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EValuedType } from 'src/app/shared/enums/valued-types.enum';
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



  openQuantityModal(valued: IValuedInfo) {
    console.log('valued :>> ', valued);
    Swal.fire({
      title: `${valued.Title} <i class="${valued.Icon}"></i>`,
      // text: 'Ingrese la cantidad a comprar:',
      input: 'number',
      inputLabel: 'Ingrese la cantidad a comprar:',
      inputPlaceholder: '0',
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
      console.log('result :>> ', result);
    });
  }


}