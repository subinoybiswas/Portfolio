"use client";

import Link from "next/link";

export default function DashboardLayout({ children }) {
 
  return (
    <main>
      <header>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </header>
      {children}
    </main>
  );
}
