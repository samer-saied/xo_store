import { QueryDocumentSnapshot, Timestamp } from "firebase/firestore";

export class SetingsInfo {
  constructor(
    public id: string | null,
    public name: string,
    public about: string,
    public emails: string[],
    public socials: Map<string, string>[],
    public telephone: string[]
  ) {
    this.id = id;
    this.name = name;
    this.about = about;
    this.emails = emails;
    this.socials = socials;
    this.telephone = telephone;
  }

  toString() {
    return this.name;
  }
}

// Firestore data converter
export const setingsInfoConverter: any = {
  toFirestore: (setingsInfo: SetingsInfo) => {
    return {
      //  id: Category.id ? Category.id : undefined,
      name: setingsInfo.name,
      about: setingsInfo.about,
      email: setingsInfo.emails,
      social: setingsInfo.socials,
      telephone: setingsInfo.telephone,
    };
  },

  fromFirestore: (data: any, id: string) => {
    return new SetingsInfo(
      id,
      data.name,
      data.about,
      data.email,
      data.social,
      data.telephone
    );
  },
};
