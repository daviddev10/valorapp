import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { ValuedListComponent } from './components/valued-list/valued-list.component';
import { ValuedQuantityComponent } from './components/valued-quantity/valued-quantity.component';
import { ValuedFilterPipe } from './shared/pipes/valued-filter.pipe';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { TotalListPipe } from './shared/pipes/total-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ValuedListComponent,
    ValuedQuantityComponent,
    ValuedFilterPipe,
    TotalListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NzButtonModule,
    NzTabsModule,
    NzIconModule,
    NzDividerModule,
    NzPageHeaderModule,
    NzDropDownModule,
    NzTableModule,
    NzTagModule,
    NzSpaceModule,
    NzEmptyModule,
    NzPopconfirmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
