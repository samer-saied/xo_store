import { handleGetOne, handleUpdateOne } from "@/db/firebase_crud";
import { SetingsUI, setingsUIConverter } from "@/models/settingsUI_model";

const uiModelName: String = "info";

async function GetOneSetingsUI(id: string): Promise<SetingsUI> {
  try {
    const querySnapshot = await handleGetOne(uiModelName, id);
    // console.log(querySnapshot!.data());
    const currentSetingsUI = setingsUIConverter.fromFirestore(
      querySnapshot!.data(),
      id
    );

    return currentSetingsUI;
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function UpdateStoreUI(uiData: SetingsUI) {
  let editedSetingsUI: SetingsUI = {
    ...uiData,
  };
  try {
    await handleUpdateOne(
      uiModelName,
      uiData.id!,
      setingsUIConverter.toFirestore(editedSetingsUI)
    );
  } catch (error) {
    console.error("Error fetching Store Info:", error);
    throw error; // Re-throw the error for further handling
  }
}

export { GetOneSetingsUI, UpdateStoreUI };
