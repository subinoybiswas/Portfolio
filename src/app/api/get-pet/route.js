import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Execute the SQL query to fetch data from the Pets table
    const { rows: pets } = await sql`SELECT * FROM Pets WHERE Pinned ='1';`;

    // Return a successful response with the fetched data
    return NextResponse.json({ pets }, { status: 200 });
  } catch (error) {
    // Return an error response if there's an issue with the query execution
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
