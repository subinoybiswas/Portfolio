"use client";
import { useRouter } from "next/navigation";
import Projects from "./projects/page";
import { useEffect, useState } from "react";
export default function AdminDashboard() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/get-analytics", { method: "POST" })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        return res.json(); // Parse JSON data
      })
      .then((data) => {
        setData(data.metricData);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const { push } = useRouter();
  const logoutBtn = async () => {
    try {
      await fetch("/api/logout");
      push("/admin");
    } catch (e) {
      console.log(e);
    }
  };
  const projectsBtn = () => {
    push("dashboard/projects");
  };
  return (
    <div className="bg-slate-200 flex flex-row  sm:h-screen sm:w-screen select-none">
      <nav className="bg-sky-800 lg:flex lg:w-[25vw] lg:flex-col hidden gap-2 px-2  items-center h-screen ">
        <nav onClick={logoutBtn}>Logout</nav>
        <nav onClick={projectsBtn}>Projects</nav>
      </nav>
      <div className="flex-grow">
        <nav className="bg-sky-800 flex flex-row  gap-2 flex-wrap h-10 items-center ">
          <nav>Contacts</nav>
          <nav>Meow</nav>
        </nav>
        <div className="bg-black flex-grow items-center content-center p-2 rounded justify-center">
          {!loading ? (
            <div className="flex sm:flex-row flex-col gap-4 flex-wrap text-center items-center content-center justify-center flex-grow">
              {data.map((metric, index) => (
                <div
                  key={index}
                  className="bg-slate-700 min-h-48 content-center place-content-center rounded-xl sm:min-w-48 sm:max-w-none  min-w-[98%] overflow-hidden p-4"
                >
                  <div className="text-xl">{metric.fieldName}</div>
                  <div className="text-5xl  justify-center content-center flex-grow">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
