import { QueryDocumentSnapshot, Timestamp } from "@/node_modules2/firebase/firestore/dist/firestore";

export class Category {
  constructor(
    public id: string | null,
    public sectionId: string,
    public title: string,
    public image: string,
    public date: Timestamp
  ) {}

  toString() {
    return this.title;
  }
}

// Firestore data converter
export const categoryConverter = {
  toFirestore: (Category: Category) => {
    return {
      //  id: Category.id ? Category.id : undefined,
      sectionId: Category.sectionId,
      title: Category.title,
      image: Category.image,
      date: Category.date,
    };
  },

  fromFirestore: (snapshot: QueryDocumentSnapshot, options?: any) => {
    const data = snapshot.data(options);
    return new Category(
      snapshot.id,
      data.sectionId,
      data.title,
      data.image,
      data.date
    );
  },
};
