import Project from "@/app/project";
const tabs = [
  {
    title: "Favourites",
    value: "favourites",
    content: (
      <div className="w-full overflow-hidden flex flex-col h-full rounded-2xl  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 mb-2">
        <p className="p-5">Favourites</p>
        <Project />
      </div>
    ),
  },
  {
    title: "Fullstack",
    value: "fullstack",
    content: (
      <div className="w-full overflow-hidden flex flex-col h-full rounded-2xl  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 mb-2">
        <p className="p-5">Fullstack</p>
        <Project />
      </div>
    ),
  },
  {
    title: "Frontend",
    value: "frontend",
    content: (
      <div className="w-full overflow-hidden flex flex-col h-full rounded-2xl  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 mb-2">
        <p className="p-5">Frontend</p>
        <Project />
      </div>
    ),
  },
  {
    title: "Packages",
    value: "packages",
    content: (
      <div className="w-full overflow-hidden flex flex-col h-full rounded-2xl  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 mb-2">
        <p className="p-5">Packages</p>
        <Project />
      </div>
    ),
  },
  {
    title: "Others",
    value: "others",
    content: (
      <div className="w-full overflow-hidden flex flex-col h-full rounded-2xl  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 mb-2">
        <p className="p-5">Others</p>
        <Project />
      </div>
    ),
  },
];
export default tabs;
