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
  getCountFromServer,
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

export interface CollectionCount {
  collectionTitle: String;
  count: number;
}

export async function CountInfo(collectionsName: String[]) {
  var counts: Array<CollectionCount> = [];
  try {
    for (let index = 0; index < collectionsName.length; index++) {
      const collectionRef = collection(db, `${collectionsName[index]}`);
      const snapshot = await getCountFromServer(collectionRef); // Optional: Add filters or other query criteria
      counts.push({
        collectionTitle: collectionsName[index],
        count: snapshot.data().count,
      });
    }
    return counts;
  } catch (error) {
    console.log(error);
  }
}
