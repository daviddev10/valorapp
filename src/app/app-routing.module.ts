import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PurchaseListComponent } from './pages/purchase/purchase-list/purchase-list.component';
import { PurchaseControllerComponent } from './controllers/purchase-controller.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'ValorApp v1.2'
    }
  },
  {
    path: 'compras',
    component: PurchaseControllerComponent,
    data: {
      title: 'COMPRAS REALIZADAS'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
