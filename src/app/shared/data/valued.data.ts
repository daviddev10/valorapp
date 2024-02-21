import { EValuedType } from "../enums/valued-types.enum";
import { IValuedInfo } from "../interfaces/valued-data.interface";

export const VALUED_TYPES: IValuedInfo[] = [
    {
        Title: 'Certificado de nacimiento',
        ValuedName: 'Nacimiento',
        ValuedType: EValuedType.Nacimiento,
        ValuedPrice: 30,
        Icon: 'uil uil-kid'
    },
    {
        Title: 'Certificado de matrimonio',
        ValuedName: 'Matrimonio',
        ValuedType: EValuedType.Matrimonio,
        ValuedPrice: 33,
        Icon: 'uil uil-heart-alt'
    },
    {
        Title: 'Certificado de defunción',
        ValuedName: 'Defunción',
        ValuedType: EValuedType.Defuncion,
        ValuedPrice: 30,
        Icon: 'uil uil-ambulance'
    },
];