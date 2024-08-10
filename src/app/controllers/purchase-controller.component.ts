import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PurchaseService } from '../core/services/purchase.service';
import { IPurchaseValued } from '../core/interfaces/valued.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-purchase-controller',
  template: `<app-purchase-list  [purchaseForm]="purchaseForm" (onSavePurchase)="onSavePurchaseValued()"></app-purchase-list>`,
  styles: [
  ]
})
export class PurchaseControllerComponent implements OnInit {

  public purchaseForm: FormGroup;
  private subscription$ = new Subscription();

  constructor(
    private fb: FormBuilder,
    private purchaseService: PurchaseService,
  ) {
    this.buildForm();
  }

  private buildForm(): void {
    this.purchaseForm = this.fb.group({
      PurchaseId: 0,
      PurchaseDate: [new Date(), Validators.required],
      TotalAmount: 0,
      Valueds: [[]]
    });
  }

  ngOnInit(): void {
    this.loadPurchaseValuedList();
  }

  private loadPurchaseValuedList(): void {
    const subs = this.purchaseService.getPurchaseValuedList().subscribe({
      next: (resp) => console.log('resp :>> ', resp),
      error: (error) => console.log('error :>> ', error)
    });
    this.subscription$.add(subs);
  }

  onSavePurchaseValued() {
    const purchaseValued: IPurchaseValued = {
      PurchaseDate: '2024-05-12',
      PurchaseList: [{ ValuedType: 1, Quantity: 3, UnitPrice: 30 }],
      TotalAmount: 90
    }
    this.purchaseService.addPurchaseValued(purchaseValued).subscribe({
      next: (data) => console.log(data)
    })
  }

}
