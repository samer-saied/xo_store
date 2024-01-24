import { QueryDocumentSnapshot, Timestamp } from "firebase/firestore";

export class Section {
  constructor(
    public id: string | null,
    public name: string,
    public icon: string,
    public primraryColor: string,
    public secandColor: string
  ) {}

  toString() {
    return this.name;
  }
}

// Firestore data converter
export const categoryConverter = {
  toFirestore: (Section: Section) => {
    return {
      //  id: Section.id ? Section.id : undefined,
      name: Section.name,
      icon: Section.icon,
      primraryColor: Section.primraryColor,
      secandColor: Section.secandColor,
    };
  },

  fromFirestore: (snapshot: QueryDocumentSnapshot, options?: any) => {
    const data = snapshot.data(options);
    return new Section(
      snapshot.id,
      data.name,
      data.icon,
      data.primraryColor,
      data.secandColor
    );
  },
};
