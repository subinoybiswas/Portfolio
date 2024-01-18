import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await db.connect();
    const { rows: projects } = await client.query("SELECT * FROM Projects");
    client.release(); // Release the client back to the pool

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
