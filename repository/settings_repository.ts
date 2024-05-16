import { handleGetOne, handleUpdateOne } from "@/db/firebase_crud";
import { SetingsInfo, setingsInfoConverter } from "@/models/settingsInfo_model";

const settingsModelName: String = "info";

async function GetOneSetingsInfo(id: string): Promise<SetingsInfo> {
  try {
    const querySnapshot = await handleGetOne(settingsModelName, id);

    const currentSetingsInfo = setingsInfoConverter.fromFirestore(
      querySnapshot!.data(),
      id
    );

    return currentSetingsInfo;
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function UpdateStoreInfo(infoData: SetingsInfo) {
  let editedSetingsInfo: SetingsInfo = {
    ...infoData,
  };
  try {
    await handleUpdateOne(
      settingsModelName,
      infoData.id!,
      setingsInfoConverter.toFirestore(editedSetingsInfo)
    );
  } catch (error) {
    console.error("Error fetching Store Info:", error);
    throw error; // Re-throw the error for further handling
  }
}

export { GetOneSetingsInfo, UpdateStoreInfo };
