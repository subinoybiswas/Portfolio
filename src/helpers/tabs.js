import Project from "@/app/project";
const tabs = [
  {
    title: "Favourites",
    value: "favourites",
    content: (
      <div className="w-full overflow-hidden flex flex-col h-full rounded-2xl  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 mb-2">
        <p className="p-5">Favourites</p>
        <Project type={0} />
      </div>
    ),
  },
  {
    title: "Fullstack",
    value: "fullstack",
    content: (
      <div className="w-full overflow-hidden flex flex-col h-full rounded-2xl  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 mb-2">
        <p className="p-5">Fullstack</p>
        <Project type={1} />
      </div>
    ),
  },
  {
    title: "Frontend",
    value: "frontend",
    content: (
      <div className="w-full overflow-hidden flex flex-col h-full rounded-2xl  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 mb-2">
        <p className="p-5">Frontend</p>
        <Project type={2} />
      </div>
    ),
  },
  {
    title: "Packages",
    value: "packages",
    content: (
      <div className="w-full overflow-hidden flex flex-col h-full rounded-2xl  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 mb-2">
        <p className="p-5">Packages</p>
        <Project type={3} />
      </div>
    ),
  },
//   {
//     title: "Others",
//     value: "others",
//     content: (
//       <div className="w-full overflow-hidden flex flex-col h-full rounded-2xl  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 mb-2">
//         <p className="p-5">Others</p>
//         <Project type={4} />
//       </div>
//     ),
//   },
];
export default tabs;
