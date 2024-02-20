import { Component } from '@angular/core';
import { IValueData } from './shared/interfaces/valued-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'valorapp';

  nzOffsetBottom = 10;

  valuedList: IValueData[] = [{
    Name: 'Nacimiento',
    Quantity: 15,
    UnitPrice: 33,
    Total: 495
  }];

  onBack() {

  }
}