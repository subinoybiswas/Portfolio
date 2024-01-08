import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const petname = request.petname;
  const petowner = request.petowner;
  const pinned = request.pinned;

  try {
    const result = await sql`
      INSERT INTO AUTH (name, owner, pinned)
      VALUES (${petname}, ${petowner}, ${pinned});
    `;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
