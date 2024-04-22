import {
  handleDeleteOne,
  handleGetAll,
  handleGetOne,
  handlePostOne,
  handleUpdateOne,
} from "@/db/firebase_crud";
import { User, userConverter } from "@/models/user_model";

const usersModelName: String = "users";

async function GetAllUsers(): Promise<User[]> {
  try {
    const users: User[] = [];
    const querySnapshot = await handleGetAll(usersModelName, null);
    querySnapshot.forEach((doc) => {
      const currentUser = userConverter.fromFirestore(doc);
      users.push(currentUser);
    });
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function GetOneUser(id: string): Promise<User> {
  try {
    const querySnapshot = await handleGetOne(usersModelName, id);

    const currentUser = userConverter.fromFirestore(
      querySnapshot,
      null,
      true
    );

    return currentUser;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function AddOneUser(user: User) {
  try {
    await handlePostOne(usersModelName,user.id, userConverter.toFirestore(user));
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function UpdateOneUser(user: User) {
  let editedUser: User = {
    ...user,
    //, date: Timestamp.now()
  };
  try {
    await handleUpdateOne(
      usersModelName,
      user.id!,
      userConverter.toFirestore(editedUser)
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function DeleteOneUser(user: User) {
  try {
    await handleDeleteOne(usersModelName, user.id!);
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-throw the error for further handling
  }
}

export {
  GetAllUsers,
  GetOneUser,
  AddOneUser,
  UpdateOneUser,
  DeleteOneUser,
};
