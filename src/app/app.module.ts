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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { PurchaseListComponent } from './pages/purchase/purchase-list/purchase-list.component';
import { NavigationMenuComponent } from './layout/navigation-menu/navigation-menu.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HomeComponent } from './pages/home/home.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { InputDateComponent } from './shared/components/inputs/input-date.component';
import { ReactiveFormsModule } from '@angular/forms';
import { es_ES, NZ_I18N } from 'ng-zorro-antd/i18n';
import es from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';

registerLocaleData(es);
@NgModule({
  declarations: [
    AppComponent,
    ValuedListComponent,
    ValuedQuantityComponent,
    ValuedFilterPipe,
    TotalListPipe,
    AppHeaderComponent,
    PurchaseListComponent,
    NavigationMenuComponent,
    HomeComponent,
    InputDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
    NzPopconfirmModule,
    NzCardModule,
    NzDatePickerModule,
    NzAvatarModule,
    NzProgressModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
