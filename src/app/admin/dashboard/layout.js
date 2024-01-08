"use client";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const [isSuccess, setSuccess] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("/api/auth-user")
          .then((response) => {
            if (response.status == 200) {
              setSuccess(true);
            }
          })
          .catch((error) => {
            push("/admin");
            alert("Not Signed In ", error);
            console.log(error);
          });
      } catch (error) {
        // Handle errors here if needed
        push("/admin");
        console.error("Error fetching user:", error);
      }
    };

    fetchData();
  }, [push]);
  if (!isSuccess) {
    return <p>Loading...</p>;
  }
  return <main>{children}</main>;
}
async function getUser() {
  try {
    await axios.get("/api/auth-user").then((response) => {
      console.log("Status Code:", response.status);
      console.log("Response Data:", response.d);
      const res = response.data;
      return res;
    });
  } catch (e) {
    const error = e;
    console.log(e);
    return null;
  }
}
