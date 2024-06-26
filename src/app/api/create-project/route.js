import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { COOKIE_NAME } from "@/app/constants";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request) {
  const body = await request.json();
  const title = body.title || null;
  const githublink = body.githublink || null;
  const pinned = body.pinned || null;
  const content = body.content || null;
  const weblink = body.weblink || null;
  const imagelink = body.imagelink || null;
  const tags = body.tags || null;
  const type = body.type || null;
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
      INSERT INTO Projects (title, content,githublink,weblink,imagelink,pinned,tags,type)
      VALUES (${title}, ${content}, ${githublink ? githublink : null}, ${
      weblink ? weblink : null
    }, ${imagelink ? imagelink : null}, ${pinned ? pinned : 0}, ${
      tags ? tags : null
    }, ${type ? type : null});
    `;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
