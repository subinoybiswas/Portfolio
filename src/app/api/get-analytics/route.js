import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { GoogleAuth } from "google-auth-library";
import { NextResponse } from "next/server";
import { COOKIE_NAME } from "@/app/constants";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
export const fetchCache = "force-no-store";
export async function POST(request) {
  const body = request;
  const cookiestore = cookies();
  const token = cookiestore.get(COOKIE_NAME);
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { value } = token;
  const SECRET = process.env.JWT_SECRET || "";
  try {
    verify(value, SECRET);
    const propertyId = process.env.PROPERTY_ID;
    const analyticsDataClient = new BetaAnalyticsDataClient({
      auth: new GoogleAuth({
        projectId: "yourprojectid",
        scopes: "https://www.googleapis.com/auth/analytics",
        credentials: {
          client_email: process.env.CLIENT_EMAIL,
          private_key: process.env.PRIVATE_KEY.split(/\\n/).join("\n"),
        },
      }),
    });
    if (!propertyId || !analyticsDataClient) {
      throw "ENV ERROR";
    }
    const resp = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: "2023-01-21",
          endDate: "today",
        },
      ],
      metrics: [
        {
          name: "totalUsers",
        },
        {
          name: "averageSessionDuration",
        },
        {
          name: "active7DayUsers",
        },

        {
          name: "activeUsers",
        },
        {
          name: "eventCount",
        },
        {
          name: "newUsers",
        },
      ],
    });
    const response = resp;
    const metricHeaders = response[0].metricHeaders;
    const metricValues = response[0].rows[0].metricValues;

    // Find the index of the "activeUsers" metric:
    const metricData = metricHeaders.map((header, index) => ({
      fieldName: header.name,
      value: metricValues[index].value,
    }));
    return NextResponse.json(
      { metricData },
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
