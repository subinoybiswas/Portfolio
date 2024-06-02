import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export const fetchCache = "force-no-store";
export async function POST(request) {
  const body = request.body;
  try {
    const { rows: projects } = await sql`SELECT * FROM Projects`;

    return NextResponse.json(
      { projects },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
