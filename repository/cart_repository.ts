import {
  handleDeleteOne,
  handleGetAll,
  handleGetOne,
  handlePostOne,
  handleUpdateOne,
} from "@/db/firebase_crud";
import { Cart, cartConverter } from "@/models/cart_model";

const cartsModelName: String = "carts";

// async function GetAllCarts(): Promise<Cart[]> {
//   try {
//     const carts: Cart[] = [];
//     const querySnapshot = await handleGetAll(cartsModelName, null);
//     querySnapshot.forEach((doc) => {
//       const currentCart = cartConverter.fromFirestore(doc);
//       carts.push(currentCart);
//     });
//     return carts;
//   } catch (error) {
//     console.error("Error fetching carts:", error);
//     throw error; // Re-throw the error for further handling
//   }
// }

async function GetOneCart(userId: string): Promise<Cart> {
  try {
    const querySnapshot = await handleGetOne(cartsModelName, userId);

    const currentCart = cartConverter.fromFirestore(
      querySnapshot,
      null,
      true
    );

    return currentCart!;
  } catch (error) {
    console.error("Error fetching carts:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function AddOneCart(cart: Cart) {
  try {
    await handlePostOne(cartsModelName,cart.id, cartConverter.toFirestore(cart));
  } catch (error) {
    console.error("Error fetching carts:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function UpdateOneCart(cart: Cart) {
  let editedCart: Cart = {
    ...cart,
    //, date: Timestamp.now()
  };
  try {
    await handleUpdateOne(
      cartsModelName,
      cart.id!,
      cartConverter.toFirestore(editedCart)
    );
  } catch (error) {
    console.error("Error fetching carts:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function DeleteOneCart(cart: Cart) {
  try {
    await handleDeleteOne(cartsModelName, cart.id!);
  } catch (error) {
    console.error("Error fetching carts:", error);
    throw error; // Re-throw the error for further handling
  }
}

export {
  // GetAllCarts,
  GetOneCart,
  AddOneCart,
  UpdateOneCart,
  DeleteOneCart,
};
