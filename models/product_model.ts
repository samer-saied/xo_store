import { DocumentSnapshot, QueryDocumentSnapshot, Timestamp } from "firebase/firestore";

export class Product {
  public id: string | null;
  public categoryId: string;
  public sectionId: string;
  public title: string;
  public image: string;
  public prePrice: number;
  public currentPrice: number;
  public descrption: string;
  public details: string;
  public rate: number;
  public exclusive: boolean;
  public todayOffer: boolean;
  public status: boolean;
  public date: String;

  constructor(
    id: string | null,
    categoryId: string,
    sectionId: string,
    title: string,
    image: string,
    prePrice: number,
    currentPrice: number,
    descrption: string,
    details: string,
    rate: number,
    exclusive: boolean,
    todayOffer: boolean,
    status: boolean,
    date: String
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.sectionId = sectionId;
    this.title = title;
    this.image = image;
    this.prePrice = prePrice;
    this.currentPrice = currentPrice;
    this.descrption = descrption;
    this.details = details;
    this.rate = rate;
    this.exclusive = exclusive;
    this.todayOffer = todayOffer;
    this.status = status;
    this.date = date;
  }

  toString() {
    return this.title + ", " + this.details;
  }
}

// Firestore data converter
export const productConverter = {
  toFirestore: (product: Product) => {
    return {
      id: product.id ? product.id : null,
      categoryId: product.categoryId,
      sectionId: product.sectionId,
      title: product.title,
      image: product.image,
      prePrice: product.prePrice,
      currentPrice: product.currentPrice,
      descrption: product.descrption,
      details: product.details,
      rate: product.rate,
      exclusive: product.exclusive,
      todayOffer: product.todayOffer,
      status: product.status,
      date: product.date,
    };
  },

  fromFirestore: (data: any, id: string) => {
    return new Product(
      id,
      data.categoryId,
      data.sectionId,
      data.title,
      data.image,
      data.prePrice,
      data.currentPrice,
      data.descrption,
      data.details,
      data.rate,
      data.exclusive,
      data.todayOffer,
      data.status,
      data.date
    );
  },
};
