"use client";
import Spotlight from "../spotlight";
import { SpotlightCard } from "../spotlight";
import { useEffect, useState } from "react";
import Skleton from "../skleton";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function AllProjects() {
  const { push } = useRouter();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/get-projects", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setData(data.projects);
        setLoading(false);
        // console.log(data);
      });
  }, []);
  return (
    <div>
      <div className="flex flex-col  items-center justify-center content-center text-5xl  bg-gradient-to-r from-[#000103] via-zinc-600/20 to-[#010610]  min-h-screen">
        <div className="flex flex-row items-center ">
          <button className="text-2xl " onClick={() => push("/")}>
            {"<-"}
          </button>
          <div className="m-4  text-center">All Projects</div>
        </div>
        {!isLoading ? (
          <div className="flex flex-col flex-wrap  xl:flex-row my-4 items-center justify-center">
            {data.map((item) => (
              <Spotlight
                key={item.id}
                className="  px-2 flex-wrap  lg:max-w-none group mb-4 min-w-[250px]"
              >
                <SpotlightCard>
                  <div className="relative h-full  bg-[#0f172a] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 bg-[#090c3bdd] rounded-full blur-[80px]"></div>
                    </div>
                    <div className="flex flex-col h-full items-center text-center ">
                      <div className="mb-5 sm:h-[125px] overflow-ellipsis">
                        <h2 className="text-xl text-slate-200 font-bold mb-1 ">
                          {item.title}
                        </h2>
                        <p className="text-sm text-slate-500">{item.content}</p>
                      </div>
                      <div className="flex flex-row gap-2">
                        {item.githublink ? (
                          <a
                            className="inline-flex justify-center rounded-full items-center whitespace-nowrap bg-slate-400 hover:bg-slate-900 border border-slate-700 p-2 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                            href={item.githublink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src="/github-mark.svg"
                              alt="GitHub Link"
                              height="20"
                              width="20"
                            ></Image>
                          </a>
                        ) : (
                          <></>
                        )}

                        {item.weblink ? (
                          <a
                            className="inline-flex justify-center rounded-full items-center whitespace-nowrap bg-slate-400 hover:bg-slate-900 border border-slate-700 p-2 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                            href={item.weblink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src="/web.svg"
                              alt="Web Link"
                              height="20"
                              width="20"
                            ></Image>
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Spotlight>
            ))}
          </div>
        ) : (
          <Skleton></Skleton>
        )}
      </div>
    </div>
  );
}
