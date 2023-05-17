import { NextRequest, NextResponse } from "next/server";
import Cookies from "js-cookie";

export function middleware(req: NextRequest) {
  const token = Cookies.get("token");
  if (!token) {
    return NextResponse.redirect("/");
  }

  return NextResponse.next();
}
