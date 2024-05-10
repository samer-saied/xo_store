import {
  collection,
  query,
  getDocs,
  doc,
  getDoc,
  DocumentData,
  QuerySnapshot,
  addDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  where,
  QueryDocumentSnapshot,
} from "firebase/firestore";

import { db } from "./firebase_init";

export async function handleGetAll(
  collectionName: String,
  filter: any | null
): Promise<{ id: string; query: DocumentData }[]> {
  const q = query(collection(db, `${collectionName}`), filter);
  const querySnapshot = await getDocs(q);
  let tempList = [];
  for (var doc of querySnapshot.docs) {
    tempList.push({
      id: doc.id,
      query: doc.data(),
    });
  }

  return tempList;
}

export async function handleGetOne(
  collectionName: String,
  collectionId: String
): Promise<DocumentData | undefined> {
  const docRef = doc(db, `${collectionName}`, `${collectionId}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return docSnap.data();
  }
}

// export async function handleGetOneByfilter(
//   collectionName: String,
//   userId: String
// ): Promise<DocumentData | undefined> {
//   const q = query(
//     collection(db, `${collectionName}`),
//     where("userId", "==", userId)
//   ); // Build query with equality comparison

//   try {
//     const querySnapshot = await getDocs(q);
//     const data = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return []; // Handle errors gracefully, consider returning an empty array or error object
//   }
// }

export async function handlePostOne(
  collectionName: String,
  collectionId: String | null,
  data: any
) {
  if (collectionId == null) {
    await addDoc(collection(db, `${collectionName}`), data);
  } else {
    const docRef = doc(collection(db, `${collectionName}`), `${collectionId}`);
    await setDoc(docRef, data);
  }
}

export async function handleDeleteOne(
  collectionName: String,
  collectionID: String
) {
  await deleteDoc(doc(db, `${collectionName}`, `${collectionID}`));
}

export async function handleUpdateOne(
  collectionName: String,
  collectionID: any,
  updatedData: any
) {
  try {
    await updateDoc(
      doc(db, `${collectionName}`, `${collectionID}`),
      updatedData
    );
  } catch (error) {
    console.log(error);
  }
}
