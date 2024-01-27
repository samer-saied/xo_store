
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
}  from "firebase/firestore";

import { db } from "./firebase_init";

export async function handleGetAll(
  collectionName: String,
  filter: any | null
): Promise<QuerySnapshot> {
  const q = query(collection(db, `${collectionName}`), filter);
  const querySnapshot = await getDocs(q);
  return querySnapshot;
}

export async function handleGetOne(
  collectionName: String,
  collectionId: String
): Promise<DocumentData | undefined> {
  const docRef = doc(db, `${collectionName}`, `${collectionId}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return docSnap.data();
  }
}

export async function handlePostOne(collectionName: String, data: any) {
  await addDoc(collection(db, `${collectionName}`), data);
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
  await updateDoc(doc(db, `${collectionName}`, `${collectionID}`), updatedData);
}
