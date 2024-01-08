"use client";
import { useEffect } from "react";
import { initGA, logPageView } from "@/app/analytics";
import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("./main.js"), { ssr: false });
export default function Home() {
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log the initial page view

    // Add additional tracking logic as needed
  }, []);
  return <NoSSR></NoSSR>;
}
