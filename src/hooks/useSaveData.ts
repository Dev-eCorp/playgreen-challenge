import {
  doc,
  updateDoc,
  arrayUnion,
  getFirestore,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { auth } from "../../firebaseClient";

const useSaveData = () => {
  const firestore = getFirestore();

  const saveData = async (data: any) => {
    if (!auth.currentUser) {
      throw new Error("User not authenticated");
    }

    const userRef = doc(firestore, "users", auth.currentUser.uid);

    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      await updateDoc(userRef, {
        sportsData: arrayUnion(data),
      });
    } else {
      await setDoc(userRef, {
        sportsData: [data],
      });
    }
  };

  return saveData;
};

export default useSaveData;
