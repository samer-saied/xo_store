import { QueryDocumentSnapshot, Timestamp } from "firebase/firestore";

export class Banner {
  constructor(
    public id: string | null,
    public title: string,
    public image: string,
    public descrption: string,
    public date: Timestamp,
    public refProductId: string
  ) {}

  toString() {
    return this.title;
  }
}

// Firestore data converter
export const bannerConverter = {
  toFirestore: (banner: Banner) => {
    return {
      //  id: Category.id ? Category.id : undefined,
      title: banner.title,
      image: banner.image,
      descrption: banner.descrption,
      date: banner.date,
      refProductId: banner.refProductId,
    };
  },

  fromFirestore: (snapshot: QueryDocumentSnapshot, options?: any) => {
    const data = snapshot.data(options);
    return new Banner(
      snapshot.id,
      data.title,
      data.image,
      data.descrption,
      data.date,
      data.refProductId
    );
  },
};
