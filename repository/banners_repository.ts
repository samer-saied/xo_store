import {
  handleDeleteOne,
  handleGetAll,
  handlePostOne,
  handleUpdateOne,
} from "@/db/firebase_crud";
import { Banner, bannerConverter } from "@/models/banner_model";
import { Timestamp } from "firebase/firestore";

const bannersModelName: String = "banners";

async function GetAllBanners(): Promise<Banner[]> {
  try {
    const banners: Banner[] = [];
    const querySnapshot = await handleGetAll(
      bannersModelName,
      null
      // where("country", ">=", "EGP 3900")
    );

    querySnapshot.forEach((doc) => {
      const currentBanner = bannerConverter.fromFirestore(doc);
      banners.push(currentBanner);
    });
    return banners;
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function AddOneBanner(banner: Banner) {
  try {
    await handlePostOne(
      bannersModelName,
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

export { GetAllBanners, AddOneBanner, UpdateOneBanner, DeleteOneBanner };
