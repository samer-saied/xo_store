import { QueryDocumentSnapshot, Timestamp } from "firebase/firestore";

export class Banner {
  constructor(
    public id: string | null,
    public title: string,
    public image: string,
    public descrption: string,
    public date: Timestamp,
    public refProductId: string,
    public status: boolean
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
      status: banner.status,
    };
  },

  fromFirestore: (snapshot: any, options?: any, isSingle?:boolean) => {
    const data =isSingle ==true ?snapshot : snapshot.data(options);
    return new Banner(
      snapshot.id,
      data.title,
      data.image,
      data.descrption,
      data.date,
      data.refProductId,
      data.status
    );
  },
};
