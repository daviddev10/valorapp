import { Pipe, PipeTransform } from '@angular/core';
import { IValueDataList, IValuedInfo } from '../interfaces/valued-data.interface';

@Pipe({
  name: 'valuedFilter'
})
export class ValuedFilterPipe implements PipeTransform {

  transform(valuedTypes: IValuedInfo[], valuedList: IValueDataList[]): IValuedInfo[] {
    const selectedTypes = valuedList.map(valued => valued.Type);
    const newValuedTypes = valuedTypes.filter(valued => !selectedTypes.includes(valued.ValuedType));
    return newValuedTypes;
  }

}
