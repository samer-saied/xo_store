import { QueryDocumentSnapshot, Timestamp } from "@/node_modules2/firebase/firestore/dist/firestore";

export class Section {
  constructor(
    public id: string | null,
    public name: string,
    public icon: string,
    public primaryColor: string,
    public secandColor: string
  ) {}

  toString() {
    return this.name;
  }
}

// Firestore data converter
export const sectionConverter = {
  toFirestore: (Section: Section) => {
    return {
      //  id: Section.id ? Section.id : undefined,
      name: Section.name,
      icon: Section.icon,
      primaryColor: Section.primaryColor,
      secandColor: Section.secandColor,
    };
  },

  fromFirestore: (snapshot: QueryDocumentSnapshot, options?: any) => {
    const data = snapshot.data(options);
    return new Section(
      snapshot.id,
      data.name,
      data.icon,
      data.primaryColor,
      data.secandColor
    );
  },
};
