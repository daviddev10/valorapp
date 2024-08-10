import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EValuedType } from 'src/app/core/enums/valued.enum';
import { IValueDataList } from 'src/app/shared/interfaces/valued-data.interface';

@Component({
  selector: 'app-valued-list',
  templateUrl: './valued-list.component.html',
  styleUrls: ['./valued-list.component.scss']
})
export class ValuedListComponent implements OnInit {

  @Input() valuedList: IValueDataList[] = [];
  @Output() onEditValuedRow = new EventEmitter<IValueDataList>();
  @Output() onRemoveValued = new EventEmitter<EValuedType>();

  constructor() { }

  ngOnInit(): void {
  }

}
