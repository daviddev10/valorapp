import { EValuedType } from "../enums/valued.enum";

export interface IPurchaseValuedList extends IPurchaseValued {
    Id: string;
}

export interface IPurchaseValued {
    PurchaseDate: string;
    PurchaseList: IPurchaseValuedDetail[];
    TotalAmount: number;
}

export interface IPurchaseValuedDetail {
    ValuedType: EValuedType;
    Quantity: number;
    UnitPrice: number;
}