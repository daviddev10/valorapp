import { Component, Input, OnInit } from '@angular/core';
import { IValueData } from 'src/app/shared/interfaces/valued-data.interface';

@Component({
  selector: 'app-valued-list',
  templateUrl: './valued-list.component.html',
  styleUrls: ['./valued-list.component.scss']
})
export class ValuedListComponent implements OnInit {

  @Input() valuedList: IValueData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
