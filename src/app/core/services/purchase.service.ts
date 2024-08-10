import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
// Firestore
import { CollectionReference, Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { IPurchaseValued, IPurchaseValuedList } from '../interfaces/valued.interface';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private purchaseCollection: CollectionReference<any>;
  collectionName: string = 'purchases';

  constructor(private readonly firestore: Firestore) {
    this.purchaseCollection = collection(this.firestore, this.collectionName);
  }

  public getPurchaseValuedList(): Observable<IPurchaseValuedList[]> {
    return collectionData<IPurchaseValuedList>(this.purchaseCollection, { idField: 'Id' });
  }

  public addPurchaseValued(purchaseValued: IPurchaseValued): Observable<string> {
    const purchaseData = addDoc(this.purchaseCollection, purchaseValued).then(resp => resp.id);
    return from(purchaseData);
  }
}
