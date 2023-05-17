import { useState, FormEvent } from "react";
import { auth } from "../../firebaseClient";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signIn = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Cookies.set("auth", "true");
      router.push("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return { email, setEmail, password, setPassword, signIn };
};

export default useAuth;
