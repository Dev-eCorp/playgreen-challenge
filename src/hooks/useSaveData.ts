import { doc, updateDoc, arrayUnion, getFirestore } from "firebase/firestore";
import { auth } from "../../firebaseClient";

const useSaveData = () => {
  const firestore = getFirestore();

  const saveData = async (data: any) => {
    if (!auth.currentUser) {
      throw new Error("User not authenticated");
    }

    const userRef = doc(firestore, "users", auth.currentUser.uid);

    await updateDoc(userRef, {
      sportsData: arrayUnion(data),
    });
  };

  return saveData;
};

export default useSaveData;
