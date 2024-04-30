import { QueryDocumentSnapshot, Timestamp } from "firebase/firestore";
import { Cart } from "./cart_model";

export class User {
  public id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;
  public password: string;
  public createdDate: number;
  public status: boolean;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
    createdDate: number,
    status: boolean
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.createdDate = createdDate;
    this.status = status;
  }

  toString() {
    return this.firstName + this.lastName.toUpperCase();
  }
}

// Firestore data converter
export const userConverter = {
  toFirestore: (user: User) => {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      password: user.password,
      createdDate: user.createdDate,
      status: user.status,
    };
  },

  fromFirestore: (snapshot: any, options?: any) => {
    const data = snapshot.data(options);
    return new User(
      snapshot.id,
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.password,
      data.createdDate,
      data.status
    );
  },
};
