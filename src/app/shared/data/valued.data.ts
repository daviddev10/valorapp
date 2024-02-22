import { EValuedType } from "../enums/valued-types.enum";
import { IValuedInfo } from "../interfaces/valued-data.interface";

export const VALUED_TYPES: IValuedInfo[] = [
    {
        ValuedName: 'Certificado de nacimiento',
        ValuedType: EValuedType.Nacimiento,
        ValuedPrice: 33,
        Icon: 'uil uil-kid'
    },
    {
        ValuedName: 'Certificado de matrimonio',
        ValuedType: EValuedType.Matrimonio,
        ValuedPrice: 34,
        Icon: 'uil uil-heart-alt'
    },
    {
        ValuedName: 'Certificado de defunción',
        ValuedType: EValuedType.Defuncion,
        ValuedPrice: 34,
        Icon: 'uil uil-book-medical'
    },
    {
        ValuedName: 'Edicto matrimonial',
        ValuedType: EValuedType.Edicto,
        ValuedPrice: 17,
        Icon: 'uil uil-file-heart'
    },
    {
        ValuedName: 'Libreta de familia',
        ValuedType: EValuedType.LibretaFamilia,
        ValuedPrice: 27,
        Icon: 'uil uil-diary'
    },
    {
        ValuedName: 'Papeleta valorada',
        ValuedType: EValuedType.PapeletaValorada,
        ValuedPrice: 23,
        Icon: 'uil uil-file-landscape-alt'
    },
];