"use client";
import { useRouter } from "next/navigation";
import Projects from "./projects/page";
export default function AdminDashboard() {
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
        <div className="bg-black flex-grow items-center content-center p-2 rounded">
          <div className="flex sm:flex-row flex-col gap-4 flex-wrap text-center items-center content-center justify-center flex-grow">
            <div className="rounded-xl h-[100px] lg:w-[250px] md:w-[47vw] sm:w-[47vw] w-[70vw] bg-slate-700 p-4">
              Hi
            </div>
            <div className="rounded-xl h-[100px] lg:w-[250px] md:w-[47vw] sm:w-[47vw] w-[70vw] bg-slate-700 p-4">
              Hi
            </div>
            <div className="rounded-xl h-[100px] lg:w-[250px] md:w-[47vw] sm:w-[47vw] w-[70vw] bg-slate-700 p-4">
              Hi
            </div>
            <div className="rounded-xl h-[100px] lg:w-[250px] md:w-[47vw] sm:w-[47vw] w-[70vw] bg-slate-700 p-4">
              Hi
            </div>
            <div className="rounded-xl h-[100px] lg:w-[250px] md:w-[47vw] sm:w-[47vw] w-[70vw] bg-slate-700 p-4">
              Hi
            </div>
            <div className="rounded-xl h-[100px] lg:w-[250px] md:w-[47vw] sm:w-[47vw] w-[70vw] bg-slate-700 p-4">
              Hi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
