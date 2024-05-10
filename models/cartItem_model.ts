import { QueryDocumentSnapshot, Timestamp } from "firebase/firestore";
import { Product, productConverter } from "./product_model";

export class CartItem {
  public productId: string;
  public productName: string;
  public productImage: string;
  public quantity: number;
  public price: number;
  public prePrice: number;
  public details: string;

  constructor(
    productId: string,
    productName: string,
    productImage: string,
    quantity: number,
    price: number,
    prePrice: number,
    details: string
  ) {
    this.productId = productId;
    this.productName = productName;
    this.productImage = productImage;
    this.quantity = quantity;
    this.price = price;
    this.prePrice = prePrice;
    this.details = details;
  }

  toString() {
    return this.productName;
  }
}

// Firestore data converter
export const cartItemConverter = {
  toFirestore: (cartItem: CartItem) => {
    return {
      productId: cartItem.productId,
      productName: cartItem.productName,
      productImage: cartItem.productImage,
      quantity: cartItem.quantity,
      price: cartItem.price,
      prePrice: cartItem.prePrice,
      details: cartItem.details,
    };
  },

  fromFirestore: (data: any, id: string) => {
    return new CartItem(
      data.productId,
      data.productName,
      data.productImage,
      data.quantity,
      data.price,
      data.prePrice,
      data.details,
    );
  },
};
