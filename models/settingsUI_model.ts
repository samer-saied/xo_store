import { QueryDocumentSnapshot, Timestamp } from "firebase/firestore";

export class SetingsUI {
  constructor(
    public id: string | null,
    public notificationTxt: string,
    public todayTxt: string,
    public todayDesc: string,
    public AdditionalTxt: string,
    public AdditionalDesc: string
  ) {
    this.id = id;
    this.notificationTxt = notificationTxt;
    this.todayTxt = todayTxt;
    this.todayDesc = todayDesc;
    this.AdditionalTxt = AdditionalTxt;
    this.AdditionalDesc = AdditionalDesc;
  }

  toString() {
    return "UI section informations";
  }
}

// Firestore data converter
export const setingsUIConverter: any = {
  toFirestore: (setingsUI: SetingsUI) => {
    return {
      //  id: Category.id ? Category.id : undefined,
      notificationTxt: setingsUI.notificationTxt,
      todayTxt: setingsUI.todayTxt,
      todayDesc: setingsUI.todayDesc,
      AdditionalTxt: setingsUI.AdditionalTxt,
      AdditionalDesc: setingsUI.AdditionalDesc,
    };
  },

  fromFirestore: (data: any, id: string) => {
    return new SetingsUI(
      id,
      data.notificationTxt,
      data.todayTxt,
      data.todayDesc,
      data.AdditionalTxt,
      data.AdditionalDesc
    );
  },
};
