import React, { useEffect } from "react";
import LoginPage from "../components/LoginPage";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("auth");
    if (token) {
      router.replace("/home");
    }
  }, [router]);

  return <LoginPage />;
}
