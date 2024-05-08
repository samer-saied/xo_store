import { QueryDocumentSnapshot, Timestamp } from "firebase/firestore";
import { Product, productConverter } from "./product_model";

export class Cart {
  public id: string | null;
  public userId: string;
  public products: Product[];
  public sales: number;
  public total: number;
  public netTotal: number;
  public description: string;
  public createdDate: number;
  public status: boolean;

  constructor(
    id: string,
    userId: string,
    products: Product[],
    sales: number,
    total: number,
    netTotal: number,
    description: string,
    createdDate: number,
    status: boolean
  ) {
    this.id = id;
    this.userId = userId;
    this.products = products;
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
      id: cart.id,
      userId: cart.userId,
      products: Array.from(cart.products, (product) =>
        productConverter.toFirestore(product)
      ),
      sales: cart.sales,
      email: cart.total,
      phone: cart.netTotal,
      description: cart.description,
      createdDate: cart.createdDate,
      status: cart.status,
    };
  },

  fromFirestore: (data: any, id: string) => {
    return new Cart(
      id,
      data.userId,
      data.products,
      data.sales,
      data.total,
      data.netTotal,
      data.description,
      data.createdDate,
      data.status
    );
  },
};
