import { COOKIE_NAME } from "@/app/constants";
import { verify, sign } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function GET() {
  const response = NextResponse.next();

  // Clear authentication cookies:
  response.cookies.set(COOKIE_NAME, "", {
    path: "/",
    httpOnly: true,
    secure: true, // If applicable
    expires: new Date(0), // Optional: Force immediate expiration
  });

  return response;

}
