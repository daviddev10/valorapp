import { EValuedType } from "src/app/core/enums/valued.enum";

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