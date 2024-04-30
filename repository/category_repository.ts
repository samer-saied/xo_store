import {
  handleDeleteOne,
  handleGetAll,
  handleGetOne,
  handlePostOne,
  handleUpdateOne,
} from "@/db/firebase_crud";
import { Category, categoryConverter } from "@/models/category_model";
import { sectionConverter } from "@/models/section_model";
import { Timestamp, where } from "firebase/firestore";

const categoriesModelName: String = "categories";

async function GetAllCategories(): Promise<Category[]> {
  try {
    const categories: Category[] = [];
    const querySnapshot = await handleGetAll(
      categoriesModelName,
      null
      // where("country", ">=", "EGP 3900")
    );

    querySnapshot.forEach((doc) => {
      const currentCategory = categoryConverter.fromFirestore(
        doc.query,
        doc.id
      );
      categories.push(currentCategory);
    });
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function GetOneCategory(id: string): Promise<Category> {
  try {
    const querySnapshot = await handleGetOne(categoriesModelName, id);

    const currentCategory = categoryConverter.fromFirestore(querySnapshot!, id);

    return currentCategory;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function GetCategoriesBySections(sectionId: String): Promise<Category[]> {
  try {
    const catrgories: Category[] = [];

    const querySnapshot = await handleGetAll(
      categoriesModelName,
      where("sectionId", "==", sectionId)
    );

    querySnapshot.forEach((doc) => {
      const currentCategory = categoryConverter.fromFirestore(
        doc.query,
        doc.id
      );
      catrgories.push(currentCategory);
    });
    return catrgories;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function AddOneCategory(category: Category) {
  try {
    await handlePostOne(
      categoriesModelName,
      null,
      categoryConverter.toFirestore(category)
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function UpdateOneCategory(category: Category) {
  let editedCategory: Category = { ...category, date: Timestamp.now() };
  try {
    await handleUpdateOne(
      categoriesModelName,
      category.id!,
      categoryConverter.toFirestore(editedCategory)
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function DeleteOneCategory(category: Category) {
  try {
    await handleDeleteOne(categoriesModelName, category.id!);
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Re-throw the error for further handling
  }
}

export {
  GetAllCategories,
  GetOneCategory,
  AddOneCategory,
  UpdateOneCategory,
  DeleteOneCategory,
  GetCategoriesBySections,
};
