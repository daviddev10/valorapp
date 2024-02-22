import { EValuedType } from "../enums/valued-types.enum";

export interface IValueDataList {
    Name: string;
    Type: EValuedType;
    Quantity: number;
    UnitPrice: number;
    Total: number;
}

export interface IValuedInfo {
    ValuedName: string;
    ValuedType: EValuedType;
    ValuedPrice: number;
    Icon: string;
}