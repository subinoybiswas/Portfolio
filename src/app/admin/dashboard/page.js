"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function AdminDashboard() {
  const { push } = useRouter();
  const removeCookie = async () => {
    try {
      await axios
        .get("/api/auth-user")
        .then((response) => {
          if (response.status == 200) {
            console.log(response);
            push("/admin");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  return (
    <div>
      Hihi
      <button onClick={removeCookie}>Logout</button>
    </div>
  );
}
