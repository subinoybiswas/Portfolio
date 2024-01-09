import Tilt from "react-parallax-tilt";
export default function AboutMe() {
  return (
    <Tilt className="h-[350px] w-[250px] bg-slate-600 rounded-2xl ml-9">
      <div className="bg-slate-200 rotate-6 hover:rotate-12 h-[350px] w-[250px] border-black">
        <h1>React Parallax Tilt 1 👀</h1>
      </div>
      <div className="bg-slate-200 hover:rotate-[-12] ">
        <h1>React Parallax Tilt 👀</h1>
      </div>
    </Tilt>
  );
}
