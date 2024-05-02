import {
  handleDeleteOne,
  handleGetAll,
  handleGetOne,
  handlePostOne,
  handleUpdateOne,
} from "@/db/firebase_crud";
import { Product, productConverter } from "@/models/product_model";
import { DocumentData, limit, orderBy, where } from "firebase/firestore";

const productsModelName: String = "products";

async function GetAllProducts(): Promise<Product[]> {
  try {
    const products: Product[] = [];
    const querySnapshot = await handleGetAll(productsModelName, []);

    querySnapshot.forEach((doc) => {
      const currentProduct = productConverter.fromFirestore(doc.query, doc.id);
      products.push(currentProduct);
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function GetProductsByCategory(categoryId: String): Promise<Product[]> {
  try {
    const products: Product[] = [];
    const querySnapshot = await handleGetAll(
      productsModelName,
     [ where("categoryId", "==", categoryId)]
    );

    querySnapshot.forEach((doc) => {
      const currentProduct = productConverter.fromFirestore(doc.query, doc.id);
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
    [  where("todayOffer", "==", true)]
    );

    querySnapshot.forEach((doc) => {
      const currentProduct = productConverter.fromFirestore(doc.query, doc.id);
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
     [ where("exclusive", "==", true)]
    );

    querySnapshot.forEach((doc) => {
      const currentProduct = productConverter.fromFirestore(doc.query, doc.id);
      products.push(currentProduct);
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function GetMoreProducts(): Promise<Product[]> {
  try {
    const products: Product[] = [];
    const querySnapshot = await handleGetAll(productsModelName, [
      orderBy("name", "desc"),
      limit(3),
    ]);

    querySnapshot.forEach((doc) => {
      const currentProduct = productConverter.fromFirestore(doc.query, doc.id);
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
    const querySnapshot: DocumentData | undefined = await handleGetOne(
      productsModelName,
      productId
      // where("country", ">=", "EGP 3900")
    );

    return productConverter.fromFirestore(
      querySnapshot!.data(),
      querySnapshot!.id
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function AddOneProduct(product: Product) {
  try {
    await handlePostOne(
      productsModelName,
      null,
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
  GetTodayDealProducts,
  GetExclusiveProducts,
  GetMoreProducts,
  GetProductsByCategory,
};
