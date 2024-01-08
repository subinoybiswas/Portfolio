import { COOKIE_NAME, EXPIRE_AGE } from "@/app/constants";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import { resolve } from "styled-jsx/css";
export async function GET() {
  const cookiestore = cookies();
  const token = cookiestore.get(COOKIE_NAME);

  try {
    return new Promise((resolve) => {
      const serializedCookie = serialize(COOKIE_NAME, "Unauthorized", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 0,
        path: "/",
      });

      const response = {
        message: "Authenticated!",
      };

      resolve(
        new Response(JSON.stringify(response), {
          status: 200,
          headers: {
            "Set-Cookie": serializedCookie,
            "Content-Type": "application/json",
          },
        })
      );
    });
  } catch (e) {
    new Response(JSON.stringify({ error: e }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}
