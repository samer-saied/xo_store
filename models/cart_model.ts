import { QueryDocumentSnapshot, Timestamp } from "firebase/firestore";
import { Product, productConverter } from "./product_model";
import { CartItem, cartItemConverter } from "./cartItem_model";

export class Cart {
  public id: string | any;
  public userId: string;
  public items: CartItem[];
  public sales: number;
  public total: number;
  public netTotal: number;
  public description: string;
  public createdDate: number;
  public status: boolean;

  constructor(
    id: string | any,
    userId: string,
    items: CartItem[],
    sales: number,
    total: number,
    netTotal: number,
    description: string,
    createdDate: number,
    status: boolean
  ) {
    this.id = id;
    this.userId = userId;
    this.items = items;
    this.sales = sales;
    this.total = total;
    this.netTotal = netTotal;
    this.description = description;
    this.createdDate = createdDate;
    this.status = status;
  }

  toString() {
    return this.id;
  }
}

// Firestore data converter
export const cartConverter = {
  toFirestore: (cart: Cart) => {
    return {
      // id: cart.id,
      userId: cart.userId,
      items: Array.from(cart.items, (item) =>
        cartItemConverter.toFirestore(item)
      ),
      sales: cart.sales,
      total: cart.total,
      netTotal: cart.netTotal,
      description: cart.description,
      createdDate: cart.createdDate,
      status: cart.status,
    };
  },

  fromFirestore: (data: any, id: string) => {
    return new Cart(
      id,
      data.userId,
      data.items,
      data.sales,
      data.total,
      data.netTotal,
      data.description,
      data.createdDate,
      data.status
    );
  },
};
