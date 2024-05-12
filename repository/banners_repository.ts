import {
  handleDeleteOne,
  handleGetAll,
  handleGetOne,
  handlePostOne,
  handleUpdateOne,
} from "@/db/firebase_crud";
import { Banner, bannerConverter } from "@/models/banner_model";
import { orderBy } from "firebase/firestore";

const bannersModelName: String = "banners";

async function GetAllBanners(): Promise<Banner[]> {
  try {
    const banners: Banner[] = [];
    const querySnapshot = await handleGetAll(bannersModelName,  orderBy("date","desc"));

    querySnapshot.forEach((doc) => {
      const currentBanner = bannerConverter.fromFirestore(doc["query"], doc.id);
      banners.push(currentBanner);
    });
    return banners;
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function GetOneBanner(id: string): Promise<Banner> {
  try {
    const querySnapshot = await handleGetOne(bannersModelName, id);

    const currentBanner = bannerConverter.fromFirestore(querySnapshot!.data(),id);

    return currentBanner;
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function AddOneBanner(banner: Banner) {
  try {
    await handlePostOne(
      bannersModelName,
      null,
      bannerConverter.toFirestore(banner)
    );
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function UpdateOneBanner(banner: Banner) {
  let editedBanner: Banner = {
    ...banner,
    //, date: Timestamp.now()
  };
  try {
    await handleUpdateOne(
      bannersModelName,
      banner.id!,
      bannerConverter.toFirestore(editedBanner)
    );
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function DeleteOneBanner(banner: Banner) {
  try {
    await handleDeleteOne(bannersModelName, banner.id!);
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error; // Re-throw the error for further handling
  }
}

export {
  GetAllBanners,
  GetOneBanner,
  AddOneBanner,
  UpdateOneBanner,
  DeleteOneBanner,
};
