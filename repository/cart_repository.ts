import {
  handleDeleteOne,
  handleGetAll,
  handleGetOne,
  handlePostOne,
  handleUpdateOne,
} from "@/db/firebase_crud";
import { auth } from "@/db/firebase_init";
import { Cart, cartConverter } from "@/models/cart_model";
import { Product } from "@/models/product_model";
import { User, UserCredential, onAuthStateChanged } from "firebase/auth";
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

async function GetCurrentUserCart(user: User): Promise<Cart | null> {
  try {
    const querySnapshot = await handleGetAll(
      cartsModelName,
      and(where("userId", "==", user.uid), where("status", "==", false))
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

async function AddItemToCart(product: Product) {
  let tempCart: Cart | null;
  try {
    onAuthStateChanged(auth, (user) => {
      if (user == null) {
        return null;
      } else {
        GetCurrentUserCart(user).then((cart) => {
          tempCart = cart;
          tempCart?.products.push(product);
          handleUpdateOne(
            cartsModelName,
            cart!.id!,
            cartConverter.toFirestore(tempCart!)
          );
        });
      }
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
      if (user == null) {
        console.log("===========NULL============");

        return null;
      } else {
        GetCurrentUserCart(user).then((cart) => {
          let index = cart?.products.findIndex(
            (element, index) => {
              cart?.products[index].id === productId;
            }
            // (element) => element['productId'] === productId
          );

          let filteredList = cart!.products.slice(index! + 1); // Remove element with product id value
          tempCart = cart;
          tempCart!.products! = filteredList;

          handleUpdateOne(
            cartsModelName,
            cart!.id!,
            cartConverter.toFirestore(tempCart!)
          );
        });
      }
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
