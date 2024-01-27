import {
  handleDeleteOne,
  handleGetAll,
  handlePostOne,
  handleUpdateOne,
} from "@/db/firebase_crud";
import { Section, sectionConverter } from "@/models/section_model";

const sectionsModelName: String = "sections";

async function GetAllSections(): Promise<Section[]> {
  try {
    const sections: Section[] = [];
    const querySnapshot = await handleGetAll(
      sectionsModelName,
      null
      // where("country", ">=", "EGP 3900")
    );

    querySnapshot.forEach((doc) => {
      const currentSection = sectionConverter.fromFirestore(doc);
      sections.push(currentSection);
    });
    return sections;
  } catch (error) {
    console.error("Error fetching sections:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function AddOneSection(section: Section) {
  try {
    await handlePostOne(
      sectionsModelName,
      sectionConverter.toFirestore(section)
    );
  } catch (error) {
    console.error("Error fetching sections:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function UpdateOneSection(section: Section) {
  let editedSection: Section = {
    ...section,
    //, date: Timestamp.now()
  };
  try {
    await handleUpdateOne(
      sectionsModelName,
      section.id!,
      sectionConverter.toFirestore(editedSection)
    );
  } catch (error) {
    console.error("Error fetching sections:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function DeleteOneSection(section: Section) {
  try {
    await handleDeleteOne(sectionsModelName, section.id!);
  } catch (error) {
    console.error("Error fetching sections:", error);
    throw error; // Re-throw the error for further handling
  }
}

export { GetAllSections, AddOneSection, UpdateOneSection, DeleteOneSection };
