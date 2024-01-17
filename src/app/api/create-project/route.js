import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { COOKIE_NAME } from "@/app/constants";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request) {
  const body = await request.json();
  const petname = body.petname;
  const petowner = body.petowner;
  const pinned = body.pinned;
  const cookiestore = cookies();
  const token = cookiestore.get(COOKIE_NAME);
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { value } = token;
  const SECRET = process.env.JWT_SECRET || "";
  // console.log(petname, petowner, pinned);
  try {
    verify(value, SECRET);
    if (!petname || !petowner || !pinned) {
      throw Error("INVALID FIELDS");
    }
    const result = await sql`
      INSERT INTO Pets (name, owner, pinned)
      VALUES (${petname}, ${petowner}, ${pinned});
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
