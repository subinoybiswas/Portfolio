"use client";
import { useCallback, useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Image from "next/image";
import Link from "next/link";
import InstaLogo from "../../public/instagram-logo.png";
import GitHubLogo from "../../public/github-mark.png";
import LinkedInLogo from "../../public/linkedin (1).png";
import Project from "./project";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useScroll, animated } from "@react-spring/web";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import AboutMe from "./aboutme";
import GridLines from "react-gridlines";
export default function Main() {
  const [init, setInit] = useState(false);
  const particlesLoaded = (container) => {
    console.log(container);
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const { scrollYProgress } = useScroll();
  const ref = useRef();
  const projectRef = useRef();
  const meRef = useRef();
  const ScrollToProject = (x) => {
    if (x === 1) {
      ref.current.scrollTo(1);
    } else if (x === 2) {
      projectRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
    gtag("event", "button_click", {
      event_category: "Button",
      event_label: "project",
    });
  };
  const ScrollToMe = (x) => {
    if (x === 1) {
      ref.current.scrollTo(2);
    } else if (x === 2) {
      meRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
    gtag("event", "button_click", {
      event_category: "Button",
      event_label: "about_me",
    });
  };

  return (
    <div suppressHydrationWarning={true}>
      {isBrowser ? (
        <main>
          <Parallax className="select-none" pages={3} ref={ref}>
            <ParallaxLayer
              factor={4}
              speed={0.5}
              className="bg-gradient-to-bl
            from-[#000103] via-zinc-600/20 to-[#010610] flex flex-col  justify-center items-center p-24 text-center sm:w-auto w-screen z-[-2]"
            >
              {init && (
                <Particles
                  className="z-[-1] h-screen "
                  id="tsparticles"
                  particlesLoaded={particlesLoaded}
                  options={{
                    fpsLimit: 120,
                    interactivity: {
                      events: {
                        onClick: {
                          enable: true,
                          mode: "push",
                        },
                        onHover: {
                          enable: true,
                          mode: "attract",
                          parallax: { enable: false, force: 60, smooth: 10 },
                        },
                        resize: true,
                      },
                      modes: {
                        push: {
                          quantity: 4,
                        },
                        repulse: {
                          distance: 100,
                          duration: 0.4,
                        },
                        attract: { distance: 200, duration: 0.4, factor: 5 },
                      },
                    },
                    particles: {
                      color: {
                        value: "#ffffff",
                      },

                      move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                          default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                      },
                      number: {
                        density: {
                          enable: true,
                          area: 400,
                        },
                        value: 50,
                      },
                      opacity: {
                        value: 0.5,
                      },
                      shape: {
                        type: "circle",
                      },
                      size: {
                        value: { min: 1, max: 5 },
                      },
                    },
                    detectRetina: true,
                  }}
                />
              )}
            </ParallaxLayer>
            <ParallaxLayer
              speed={1}
              className="flex flex-col justify-center items-center p-24 text-center"
            >
              <div className="  flex  flex-row justify-center text-center sm:gap-4 gap-2 item-center sm:my-10 text-lg sm:text-lg text-zinc-600">
                <div
                  className="sm:hover:text-zinc-400 duration-500 active:text-zinc-400"
                  onClick={() => ScrollToProject(1)}
                >
                  Projects
                </div>
                <div
                  className="sm:hover:text-zinc-400 duration-500 active:text-zinc-400"
                  onClick={() => ScrollToMe(1)}
                >
                  Contact
                </div>
              </div>
              <div>
                <div
                  className="bg-clip-text text-transparent 
                bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.200),theme(colors.pink.500),theme(colors.purple.300),theme(colors.purple.200),theme(colors.purple.400))]
                bg-[length:200%_auto] animate-gradient pb-1 text-7xl sm:text-8xl "
                >
                  <div className="pb-2">Subinoy</div>
                </div>
              </div>

              <div className=" my-5 text-center sm:my-10 text-sm sm:text-md sm:w-auto w-[70vw] text-slate-500">
                <p>Your friendly neighbourhood developer</p>
              </div>
              <div className="flex flex-row gap-4 items-center justify-center">
                <Link
                  href="https://www.github.com/subinoybiswas"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={GitHubLogo}
                    alt="Instagram Link"
                    className="w-[25px] invert-[.25] sm:hover:invert-[.75] duration-500 active:invert-[.75]"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/heysubinoy/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={LinkedInLogo}
                    alt="LinkedIn Link"
                    className="w-[25px] invert-[.25] sm:hover:invert-[.75] duration-500 active:invert-[.75]"
                  />
                </Link>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1}>
              <div className="">
                <div className=" rounded-3xl  flex flex-col justify-center items-center ">
                  <div className="sm:text-5xl text-4xl my-4">Projects</div>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1.15}
              className="justify-center items-center"
            >
              <Project></Project>
              <div className="animate-bounce flex flex-col justify-center items-center pt-4">
                View More
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              className="bg-gradient-to-b from-transparent via-[#010740]/50 to-transparent z-[-1] rounded-3xl"
              speed={0.75}
            ></ParallaxLayer>

            <ParallaxLayer offset={2} speed={1.25}>
              <div className="">
                <div className=" rounded-3xl  flex flex-col justify-center items-center ">
                  <div
                    className="
                    bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  bg-clip-text text-transparent pb-1 text-3xl sm:text-5xl p-2 z-[100] font-outline-2 font-semibold
                    "
                  >
                    About Me
                  </div>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2.35} speed={0.75}>
              <div className="flex flex-col text-black text-5xl ml-[27vw]">
                <div>Hey👋 I&apos;m Subinoy</div>
                <div className="text-xl mt-9 ml-5">
                  <ul>
                    <li className="mb-5">🚀 FullStack Developer </li>
                    <li className="mb-5">✍️ Technical Content Writer </li>
                    <li className="mb-5">⚙️ Community Builder</li>
                  </ul>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2.25} className="ml-10">
              <AboutMe ></AboutMe>
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              className="bg-slate-800  rounded-3xl z-[-1]"
              speed={0.75}
            >
              <div class="h-full w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                <GridLines
                  className="grid-area h-[100%]  z-[-1] bg-white rounded-3xl "
                  cellWidth={25}
                  cellWidth2={25}
                  strokeWidth={0.25}
                  strokeWidth2={0.25}
                  lineColor={"rgb(30 41 59)"}
                  lineColor2={"rgb(30 41 59)"}
                ></GridLines>
              </div>
            </ParallaxLayer>
          </Parallax>
        </main>
      ) : (
        <main>
          <div
            className=" select-none bg-gradient-to-bl
    from-[#000103] via-zinc-600/20 to-[#010610] "
          >
            <div className="h-[100vh] flex flex-col  justify-center items-center p-24 text-center sm:w-auto w-screen">
              {init && (
                <Particles
                  className="z-[-1] "
                  id="tsparticles"
                  particlesLoaded={particlesLoaded}
                  options={{
                    fpsLimit: 120,
                    interactivity: {
                      events: {
                        onClick: {
                          enable: true,
                          mode: "push",
                        },
                        onHover: {
                          enable: true,
                          mode: "attract",
                          parallax: { enable: false, force: 60, smooth: 10 },
                        },
                        resize: true,
                      },
                      modes: {
                        push: {
                          quantity: 4,
                        },
                        repulse: {
                          distance: 100,
                          duration: 0.4,
                        },
                        attract: { distance: 200, duration: 0.4, factor: 5 },
                      },
                    },
                    particles: {
                      color: {
                        value: "#ffffff",
                      },

                      move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                          default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                      },
                      number: {
                        density: {
                          enable: true,
                          area: 400,
                        },
                        value: 100,
                      },
                      opacity: {
                        value: 0.5,
                      },
                      shape: {
                        type: "circle",
                      },
                      size: {
                        value: { min: 1, max: 5 },
                      },
                    },
                    detectRetina: true,
                  }}
                />
              )}
              <div className="  flex  flex-row justify-center text-center sm:gap-4 gap-2 item-center my-5 sm:my-10 text-lg sm:text-lg text-zinc-600">
                <a
                  className="sm:hover:text-zinc-400 duration-500 active:text-zinc-400"
                  onClick={() => ScrollToProject(2)}
                >
                  Projects
                </a>
                <a
                  className="sm:hover:text-zinc-400 duration-500 active:text-zinc-400"
                  onClick={() => ScrollToMe(2)}
                >
                  Contact
                </a>
              </div>
              <div>
                <div
                  className="bg-clip-text text-transparent 
bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.200),theme(colors.pink.500),theme(colors.purple.300),theme(colors.purple.200),theme(colors.purple.400))]
bg-[length:200%_auto] animate-gradient pb-1 text-7xl sm:text-8xl "
                >
                  Subinoy
                </div>
              </div>

              <div className=" my-5 sm:my-10 text-sm sm:text-md sm:w-auto w-[70vw] text-slate-500">
                <p>Your friendly neighbourhood developer</p>
              </div>
              <div className="flex flex-row gap-4">
                <Link
                  href="https://www.github.com/subinoybiswas"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={GitHubLogo}
                    alt="Instagram Link"
                    className="w-[25px] invert-[.25] sm:hover:invert-[.75] duration-500 active:invert-[.75]"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/heysubinoy/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={LinkedInLogo}
                    alt="LinkedIn Link"
                    className="w-[25px] invert-[.25] sm:hover:invert-[.75] duration-500 active:invert-[.75]"
                  />
                </Link>
              </div>
            </div>
            <div className="" ref={projectRef}>
              <div className="flex flex-col text-center items-center justify-center text-4xl mb-4">
                Projects
              </div>
              <Project></Project>
              <div className="animate-bounce flex flex-col justify-center items-center py-6">
                View More
              </div>
            </div>
            <div className="" ref={meRef}>
              <div class="h-full w-full rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                <GridLines
                  className="grid-area  z-[-1] bg-slate-100 rounded-3xl h-screen"
                  cellWidth={25}
                  cellWidth2={25}
                  strokeWidth={0.5}
                  strokeWidth2={0.5}
                  lineColor={"rgb(30 41 59)"}
                  lineColor2={"rgb(30 41 59)"}
                >
                  <div className="flex flex-col justify-center items-center gap-6">
                    <h1 className="text-black text-4xl m-4 font-semibold">
                      About Me
                    </h1>
                    <AboutMe className=""></AboutMe>
                    <div className="flex flex-col text-black text-4xl ">
                      <div>Hey👋 I&apos;m Subinoy</div>
                      <div className="text-xl pl-5  mt-5">
                        <ul>
                          <li className="mb-2">🚀 FullStack Developer </li>
                          <li className="mb-2">✍️ Technical Content Writer </li>
                          <li className="mb-2">⚙️ Community Builder</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </GridLines>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
