import {
  handleDeleteOne,
  handleGetAll,
  handleGetOne,
  handlePostOne,
  handleUpdateOne,
} from "@/db/firebase_crud";
import { Product, productConverter } from "@/models/product_model";
import { where } from "firebase/firestore";

const productsModelName: String = "products";

async function GetAllProducts(): Promise<Product[]> {
  try {
    const products: Product[] = [];
    const querySnapshot = await handleGetAll(
      productsModelName,
      null
    );

    querySnapshot.forEach((doc) => {
      const currentProduct = productConverter.fromFirestore(doc);
      products.push(currentProduct);
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error for further handling
  }
}



async function GetTodayDealProducts(): Promise<Product[]> {
  try {
    const products: Product[] = [];
    const querySnapshot = await handleGetAll(
      productsModelName,
      where("todayOffer","==","true")
    );

    querySnapshot.forEach((doc) => {
      const currentProduct = productConverter.fromFirestore(doc);
      products.push(currentProduct);
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error for further handling
  }
}


async function GetExclusiveProducts(): Promise<Product[]> {
  try {
    const products: Product[] = [];
    const querySnapshot = await handleGetAll(
      productsModelName,
      where("exclusive","==","true")
    );

    querySnapshot.forEach((doc) => {
      const currentProduct = productConverter.fromFirestore(doc);
      products.push(currentProduct);
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function GetOneProduct(productId: String): Promise<Product | void> {
  try {
    const querySnapshot = await handleGetOne(
      productsModelName,
      productId
      // where("country", ">=", "EGP 3900")
    );
    const currentProduct = new Product(
      querySnapshot?.id,
      querySnapshot?.categoryId,
      querySnapshot?.sectionId,
      querySnapshot?.title,
      querySnapshot?.image,
      querySnapshot?.prePrice,
      querySnapshot?.currentPrice,
      querySnapshot?.descrption,
      querySnapshot?.details,
      querySnapshot?.rate,
      querySnapshot?.exclusive,
      querySnapshot?.todayOffer,
      querySnapshot?.date,
    );
     return currentProduct;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function AddOneProduct(product: Product) {
  try {
    await handlePostOne(
      productsModelName,
      productConverter.toFirestore(product)
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function UpdateOneProduct(product: Product) {
  let editedProduct: Product = {
    ...product,
    //, date: Timestamp.now()
  };
  try {
    await handleUpdateOne(
      productsModelName,
      product.id!,
      productConverter.toFirestore(editedProduct)
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function DeleteOneProduct(product: Product) {
  try {
    await handleDeleteOne(productsModelName, product.id!);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error for further handling
  }
}

export {
  GetAllProducts,
  AddOneProduct,
  UpdateOneProduct,
  DeleteOneProduct,
  GetOneProduct,
};
