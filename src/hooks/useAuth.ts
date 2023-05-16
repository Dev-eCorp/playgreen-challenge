import { useState } from "react";
import { auth } from "../../firebaseClient";
import { signInWithEmailAndPassword } from "firebase/auth";

const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return { email, setEmail, password, setPassword, signIn };
};

export default useAuth;
