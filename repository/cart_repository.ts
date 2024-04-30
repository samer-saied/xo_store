import {
  handleDeleteOne,
  handleGetAll,
  handleGetOne,
  handlePostOne,
  handleUpdateOne,
} from "@/db/firebase_crud";
import { auth } from "@/db/firebase_init";
import { Cart, cartConverter } from "@/models/cart_model";
import { onAuthStateChanged } from "firebase/auth";
import { and, updateDoc, where } from "firebase/firestore";

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

async function GetCurrentUserCart(userId: string): Promise<Cart | null> {
  try {
    const querySnapshot = await handleGetAll(
      cartsModelName,
      and(where("userId", "==", userId), where("status", "==", false))
    );
    if (querySnapshot.length > 0) {
      const currentCart = cartConverter.fromFirestore(
        querySnapshot[0].query,
        querySnapshot[0].id
      );
      return currentCart;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching carts:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function AddItemToCart(productId: string) {
  let tempCart: Cart | null;
  try {
    onAuthStateChanged(auth, (user) => {
      GetCurrentUserCart(user!.uid).then((cart) => {
        tempCart = cart;
        tempCart?.products.push(productId);
        handleUpdateOne(
          cartsModelName,
          cart!.id!,
          cartConverter.toFirestore(tempCart!)
        );
      });
    });
  } catch (error) {
    console.error("Error fetching carts:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function DeleteItemToCart(productId: string) {
  let tempCart: Cart | null;
  try {
    onAuthStateChanged(auth, (user) => {
      GetCurrentUserCart(user!.uid).then((cart) => {
        let filteredList = cart!.products.filter(
          (element) => element !== productId
        ); // Remove element with product id value
        tempCart = cart;
        tempCart!.products! = filteredList;

        handleUpdateOne(
          cartsModelName,
          cart!.id!,
          cartConverter.toFirestore(tempCart!)
        );
      });
    });
  } catch (error) {
    console.error("Error fetching carts:", error);
    throw error; // Re-throw the error for further handling
  }
}

// async function UpdateOneCart(cart: Cart) {
//   let editedCart: Cart = {
//     ...cart,
//     //, date: Timestamp.now()
//   };
//   try {
//     await handleUpdateOne(
//       cartsModelName,
//       cart.id!,
//       cartConverter.toFirestore(editedCart)
//     );
//   } catch (error) {
//     console.error("Error fetching carts:", error);
//     throw error; // Re-throw the error for further handling
//   }
// }

// async function DeleteOneCart(cart: Cart) {
//   try {
//     await handleDeleteOne(cartsModelName, cart.id!);
//   } catch (error) {
//     console.error("Error fetching carts:", error);
//     throw error; // Re-throw the error for further handling
//   }
// }

export {
  // GetAllCarts,
  GetCurrentUserCart,
  AddItemToCart,
  DeleteItemToCart,
  // UpdateOneCart,
  // DeleteOneCart,
};
