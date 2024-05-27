import { QueryDocumentSnapshot, Timestamp } from "firebase/firestore";

export class Banner {
  constructor(
    public id: string | null,
    public title: string,
    public image: string,
    public descrption: string,
    public btnTxt: string,
    public date: Timestamp,
    public refProductId: string,
    public state: boolean
  ) {}

  toString() {
    return this.title;
  }
}

// Firestore data converter
export const bannerConverter: any = {
  toFirestore: (banner: Banner) => {
    return {
      //  id: Category.id ? Category.id : undefined,
      title: banner.title,
      image: banner.image,
      descrption: banner.descrption,
      btnTxt: banner.btnTxt,
      date: banner.date,
      refProductId: banner.refProductId,
      state: banner.state,
    };
  },

  fromFirestore: (data: any, id: string) => {
    return new Banner(
      id,
      data.title,
      data.image,
      data.descrption,
      data.btnTxt,
      data.date,
      data.refProductId,
      data.state
    );
  },
};
