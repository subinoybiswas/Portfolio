import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { COOKIE_NAME } from "@/app/constants";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request) {
  const body = await request.json();
  const title = body.title || null;
  const ghlink = body.ghlink || null;
  const pinned = body.pinned || null;
  const content = body.content || null;
  const weblink = body.weblink || null;
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
    if (!title || !content) {
      throw Error("INVALID FIELDS");
    }
    const result = await sql`
      INSERT INTO Projects (title, content,githublink,weblink,pinned)
      VALUES (${title}, ${content},${ghlink ? ghlink : null},${
      weblink ? weblink : null
    },${pinned ? pinned : 0});
    `;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PUT(request) {
  const body = await request.json();
  const project_id = body.project_id || null;
  const title = body.title || null;
  const ghlink = body.ghlink || null;
  const pinned = body.pinned || null;
  const content = body.content || null;
  const weblink = body.weblink || null;
  const cookiestore = cookies();
  const token = cookiestore.get(COOKIE_NAME);
  if (!token || !project_id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { value } = token;
  const SECRET = process.env.JWT_SECRET || "";
  // console.log(petname, petowner, pinned);
  try {
    verify(value, SECRET);
    if (!title || !content) {
      throw Error("INVALID FIELDS");
    }
    const result = await sql`
    UPDATE Projects
    SET
      title = ${title},
      content = ${content},
      githublink = ${ghlink},
      weblink = ${weblink},
      pinned = ${pinned}
    WHERE project_id = ${project_id}
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request) {
  const body = await request.json();
  const project_id = body.project_id || null;
  const cookiestore = cookies();
  const token = cookiestore.get(COOKIE_NAME);
  if (!token || !project_id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { value } = token;
  const SECRET = process.env.JWT_SECRET || "";
  // console.log(petname, petowner, pinned);
  try {
    verify(value, SECRET);
    const result = await sql`
    DELETE FROM Projects
        WHERE project_id = ${project_id}
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
