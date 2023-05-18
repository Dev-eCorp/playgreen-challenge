import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseClient";

const useGetData = () => {
  const getData = async () => {
    try {
      if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          const userData = docSnap.data();
          const sportsData = userData?.sportsData ?? [];
          return sportsData;
        } else {
          console.log("No such document!");
        }
      } else {
        console.error("No user currently signed in.");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  return getData;
};

export default useGetData;
