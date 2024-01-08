"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const [isSuccess, setSuccess] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    const { user, error } = async () => await getUser();
    if (error) {
      push("/admin");
    }
    setSuccess(true);
  }, [push]);
  if (!isSuccess) {
    return <p>Loading...</p>;
  }
  return <main>{children}</main>;
}
async function getUser() {
  try {
    const { data } = await axios.get("/api/auth-user");
    console.log(data);
    return { user: data, error: null };
  } catch (e) {
    return { user: null, error: e };
  }
}
