import { QueryDocumentSnapshot, Timestamp } from "firebase/firestore";

export class Section {
  constructor(
    public id: string | null,
    public title: string,
    public icon: string,
    public primaryColor: string,
    public secandColor: string
  ) {}

  toString() {
    return this.title;
  }
}

// Firestore data converter
export const sectionConverter = {
  toFirestore: (Section: Section) => {
    return {
      title: Section.title,
      icon: Section.icon,
      primaryColor: Section.primaryColor,
      secandColor: Section.secandColor,
    };
  },

  fromFirestore: (data: any, id: any) => {
    return new Section(
      id,
      data.title,
      data.icon,
      data.primaryColor,
      data.secandColor
    );
  },
};
