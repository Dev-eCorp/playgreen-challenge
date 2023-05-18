import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseClient";
import Cookies from "js-cookie";

const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      await signOut(auth);
      Cookies.remove("auth");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
};

export default useLogout;
