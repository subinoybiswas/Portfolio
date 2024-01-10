import Tilt from "react-parallax-tilt";
import Image from "next/image";
export default function AboutMe() {
  return (
    <Tilt className="h-[350px] w-[250px] bg-slate-600 rounded-2xl">
      <div className="h-full w-full rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 rotate-6 hover:rotate-12 hover:scale-105 transition duration-500">
        <div className="bg-slate-100  h-full w-full rounded-2xl">
          <Image
            src="/Me.jpg"
            alt="Subinoy Biswas"
            width={250}
            height={350}
            className="pt-2 px-2 rounded-2xl"
          ></Image>
          <div className="items-center justify-center text-center pt-2">
            <h1 className="text-slate-800 text-2xl">Subinoy Biswas</h1>
            <h2 className="text-slate-600 text-xl">Developer</h2>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
