import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { sql } from "@vercel/postgres";
import { COOKIE_NAME,MAX_AGE } from "@/app/constants";
import bcrypt from "bcrypt";


export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    const result = await sql`
      SELECT password FROM auth WHERE username=${username};
    `;

    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const hashedPassword = result.rows[0].password;

    return new Promise((resolve) => {
      bcrypt.compare(password, hashedPassword, function (err, result) {
        if (result) {
          const secret = process.env.JWT_SECRET || "";

          const token = sign(
            {
              username,
            },
            secret,
            {
              expiresIn: MAX_AGE,
            }
          );

          const serializedCookie = serialize(COOKIE_NAME, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: MAX_AGE,
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
        } else {
          resolve(
            new Response(JSON.stringify({ error: "Wrong Password" }), {
              status: 401,
              headers: { "Content-Type": "application/json" },
            })
          );
        }
      });
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
