import Spotlight from "./spotlight";
import { SpotlightCard } from "./spotlight";
import { useEffect, useState } from "react";
import Skleton from "./skleton";
import Image from "next/image";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
export default function Project() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [imgLoading, setImgLoading] = useState(true);
  useEffect(() => {
    fetch("/api/get-projects", { method: "POST" })
      .then((res) => res.json())
      .then((rdata) => {
        setData(rdata.projects);
        setLoading(false);

        // console.log(data);
      });
  }, []);
  const maxProjects = isMobile ? 3 : 3;
  const sortedProjects = data
    ? data.slice().sort((a, b) => (b.pinned ? 1 : -1)) // Sort pinned projects first
    : [];

  const projectsToRender = sortedProjects.slice(0, maxProjects);

  return !isLoading ? (
    <div className="flex flex-col flex-wrap  xl:flex-row my-4 items-center justify-center">
      {projectsToRender.map((item) => (
        <Spotlight
          key={item.id}
          className="max-w-sm  mx-2  flex-wrap  lg:max-w-none group mb-4 "
        >
          <SpotlightCard>
            <div className="relative h-full bg-[#020817] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              {/* Radial gradient */}
              <div className="flex flex-col ">
                <div>
                  <Image
                    className={`${
                      imgLoading ? "animate-pulse bg-gray-200 blur-md" : ""
                    } mb-5 rounded-3xl`}
                    src={item.imagelink || ""}
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "16/9",
                      objectFit: "cover",
                    }}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Image"
                    onLoadingComplete={() => setImgLoading(false)}
                  ></Image>
                </div>
                {/* <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-[#0c0f3edd] rounded-full blur-[80px]"></div>
                </div> */}

                <div className="flex flex-col h-full items-center mb-10">
                  <div className="mb-5 sm:h-[125px] overflow-ellipsis">
                    <h2 className="text-xl text-slate-200 font-bold mb-1 ">
                      {item.title}
                    </h2>
                    <p className="text-sm text-slate-500">{item.content}</p>
                  </div>
                </div>
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
          </SpotlightCard>
        </Spotlight>
      ))}
    </div>
  ) : (
    <Skleton></Skleton>
  );
}
