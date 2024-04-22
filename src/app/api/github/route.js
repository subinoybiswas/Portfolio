import { Octokit } from "@octokit/rest";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { GoogleAuth } from "google-auth-library";
import { NextResponse } from "next/server";
import { COOKIE_NAME } from "@/app/constants";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
export const fetchCache = "force-no-store";

export async function POST(request) {
  const cookiestore = cookies();
  const token = cookiestore.get(COOKIE_NAME);
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { value } = token;
  const SECRET = process.env.JWT_SECRET || "";
  try {
    verify(value, SECRET);
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const { data } = await octokit.request(
      "/repos/subinoybiswas/Portfolio/commits"
    );
    return NextResponse.json(
      { data },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
    // console.log(decodedKey)
    // Using a default constructor instructs the client to use the credentials
    // specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
  } catch (e) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }

  // Runs a report with multiple metrics.
}
