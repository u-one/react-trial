import { FieldValues } from 'react-hook-form'

export interface TrainModelForm extends FieldValues {
    trainModelId: number,
    category: string,
    series: string,
    name: string,
    productName: string,
    productType: number,
    maker: string,
    productCode: string,
    price: number,
    jan: number,
    obtainedPrice: number,
    obtainedPriceWithTax: number,
    obtainedPlace: string,
    obtainedDate: string,
    obtainedType: number,
    manageId: string,
    comment: string,
    tags: string

}