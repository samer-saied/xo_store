import { DocumentData, DocumentReference, QueryDocumentSnapshot, Timestamp } from "firebase/firestore";

export class Category {
  constructor(
    public id: string | null,
    public sectionId: DocumentReference,
    public title: string,
    public image: string,
    public primaryColor: string,
    public secandColor: string,
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
      primaryColor: Category.primaryColor,
      secandColor: Category.secandColor,
      date: Category.date,
    };
  },

  fromFirestore: (snapshot: any, options?: any,isSingle?: boolean) => {
    const data =isSingle ? snapshot: snapshot.data(options);
    return new Category(
      snapshot.id,
      data.sectionId,
      data.title,
      data.image,
      data.primaryColor,
      data.secandColor,
      data.date
    );
  },
};
