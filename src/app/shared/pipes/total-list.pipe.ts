import { Pipe, PipeTransform } from '@angular/core';
import { IValueDataList } from '../interfaces/valued-data.interface';

@Pipe({
  name: 'totalList'
})
export class TotalListPipe implements PipeTransform {

  transform(valuedList: IValueDataList[]): number {
    const totalAmount = valuedList.reduce((acc, val) => val.Total + acc, 0);
    return totalAmount;
  }

}
