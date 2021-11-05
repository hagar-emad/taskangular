import { BasicData } from "./basicData.model";
import { Category } from "./categorry.model";
import { PaymentType } from "./payment-type.model";
import { Tag } from "./tag.model";

export interface Product{
  id?:number;

  basicData:BasicData[];
  price:number;
  paymentTypeMethods:PaymentType[];
  category: Category;
  tags?:Tag[];
  discount?:number | null;
  imgUrl:string[];
}
