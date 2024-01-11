import { QueryDocumentSnapshot, Timestamp } from "firebase/firestore";

export class Category {
  constructor(
    public id: string | null,
    public name: string,
    public state: string,
    public country: string,
    public date: Timestamp
  ) {}

  toString() {
    return this.name + ", " + this.state + ", " + this.country;
  }
}

// Firestore data converter
export const categoryConverter = {
  toFirestore: (Category: Category) => {
    return {
    //  id: Category.id ? Category.id : undefined,
      name: Category.name,
      state: Category.state,
      country: Category.country,
      date: Category.date,
    };
  },

  fromFirestore: (snapshot: QueryDocumentSnapshot, options?: any) => {
    const data = snapshot.data(options);
    return new Category(
      snapshot.id,
      data.name,
      data.state,
      data.country,
      data.date
    );
  },
};
