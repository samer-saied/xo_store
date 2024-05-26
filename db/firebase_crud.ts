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
  let counts: Array<CollectionCount> = [];
  try {
    collectionsName.forEach((oneCollectionName: String, index: number) => {
      const collectionRef = collection(db, `${oneCollectionName}`);
      getCountFromServer(collectionRef) // Optional: Add filters or other query criteria
        .then((snapshot) => {
          counts.push({
            collectionTitle: oneCollectionName,
            count: snapshot.data().count,
          });
        });
    });
    return counts;
    // const collectionRef = collection(db, `${collectionName}`);
    // const q = query(collectionRef); // Optional: Add filters or other query criteria
    // const snapshot = await getDocs(q);
    // return snapshot.size; // Get the count directly from the snapshot
  } catch (error) {
    console.log(error);
    return [];
  }
}
