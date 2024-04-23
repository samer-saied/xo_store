import { QueryDocumentSnapshot, Timestamp } from "firebase/firestore";

export class Cart {
  public id: string | null;
  public products: string[];
  public sales: number;
  public total: number;
  public netTotal: number;
  public description: string;
  public createdDate: number;
  public status: boolean;

  constructor(
    id: string ,
    products: string[],
    sales: number,
    total: number,
    netTotal: number,
    description: string,
    createdDate: number,
    status: boolean
  ) {
    this.id = id;
    this.products = products;
    this.sales = sales;
    this.total = total;
    this.netTotal = netTotal;
    this.description = description;
    this.createdDate = createdDate;
    this.status = status;
  }

  toString() {
    return this.id ;
  }
}

// Firestore data converter
export const cartConverter = {
  toFirestore: (cart: Cart) => {
    return {
      id: cart.id,
      products: cart.products,
      sales: cart.sales,
      email: cart.total,
      phone: cart.netTotal,
      description: cart.description,
      createdDate: cart.createdDate,
      status: cart.status,
    };
  },

  fromFirestore: (snapshot: any, options?: any, isSingle?: boolean) => {
    const data = isSingle == true ? snapshot : snapshot.data(options);
    if( data){
      return new Cart(
        snapshot.id,
        data.products,
        data.sales,
        data.total,
        data.netTotal,
        data.description,
        data.createdDate,
        data.status
      );
    }else{
      return null;
    }
    
  },
};
