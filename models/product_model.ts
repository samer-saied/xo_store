import { QueryDocumentSnapshot, Timestamp } from "firebase/firestore";

export class Product {
  constructor(
    public id: string | null,
    public categoryId: string,
    public sectionId: string,
    public title: string,
    public image: string,
    public prePrice: number,
    public currentPrice: number,
    public descrption: string,
    public details: string,
    public rate: number,
    public exclusive: boolean,
    public todayOffer: boolean,
    public date: String
  ) {}

  toString() {
    return this.title + ", " + this.details;
  }
}

// Firestore data converter
export const productConverter = {
  toFirestore: (product: Product) => {
    return {
      //  id: Category.id ? Category.id : undefined,
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
      date: product.date,
    };
  },

  fromFirestore: (snapshot: QueryDocumentSnapshot, options?: any) => {
    const data = snapshot.data(options);
    return new Product(
      snapshot.id,
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
      data.date
    );
  },
};
