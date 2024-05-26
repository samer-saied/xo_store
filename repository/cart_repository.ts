import {
  handleDeleteOne,
  handleGetAll,
  handleGetOne,
  handlePostOne,
  handleUpdateOne,
} from "@/db/firebase_crud";
import { auth } from "@/db/firebase_init";
import { CartItem } from "@/models/cartItem_model";
import { Cart, cartConverter } from "@/models/cart_model";
import { Product, productConverter } from "@/models/product_model";
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

async function GetCurrentUserCart(user: User): Promise<Cart> {
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
      var newCart: Cart = new Cart(
        null,
        user.uid,
        [],
        0,
        0,
        0,
        "",
        Date.now(),
        false
      );
      handlePostOne(
        cartsModelName,
        user.uid,
        cartConverter.toFirestore(newCart)
      );

      return newCart;
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
        GetCurrentUserCart(user).then(async (cart) => {
          tempCart = cart;
          tempCart?.items.push(
            new CartItem(
              product.id!,
              product.title,
              product.image,
              1,
              +product.currentPrice,
              +product.prePrice,
              "Player Id"
            )
          );

          tempCart.sales += product.prePrice - product.currentPrice;
          tempCart.netTotal += product.currentPrice;
          tempCart.total += product.prePrice;
          await handleUpdateOne(
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

async function DeleteItemToCart(index: number): Promise<boolean> {
  if (auth.currentUser?.uid) {
    let cart: Cart = await GetCurrentUserCart(auth.currentUser);
    let newCart: Cart = cart;
    let newItems: CartItem[] = [];
    if (cart.items.length == 0) {
      newCart = new Cart(
        cart!.id,
        cart!.userId,
        newItems,
        0,
        0,
        0,
        cart!.description,
        cart!.createdDate,
        cart!.status
      );
    } else {
      cart.items.forEach((item, listIndex) => {
        if (listIndex === index) {
          newCart.netTotal -= +item.price;
          newCart.total -= +item.prePrice;
          newCart.sales -= +item.prePrice - +item.price;
        } else {
          newItems.push(item);
        }
      });

      newCart = new Cart(
        cart!.id,
        cart!.userId,
        newItems,
        +cart!.sales,
        +cart!.total,
        cart!.netTotal,
        cart!.description,
        cart!.createdDate,
        cart!.status
      );
    }

    await handleUpdateOne(
      cartsModelName,
      cart.id,
      cartConverter.toFirestore(newCart)
    );
    return true;
  } else {
    return false;
  }
}

export {
  // GetAllCarts,
  GetCurrentUserCart,
  AddItemToCart,
  DeleteItemToCart,
  // UpdateOneCart,
  // DeleteOneCart,
};
