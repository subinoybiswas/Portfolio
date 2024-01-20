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
import "@google/model-viewer";
import AboutMe from "./aboutme";
import GridLines from "react-gridlines";
import { SocialIcon } from "react-social-icons";
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
                  About
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
              offset={2}
              className="bg-slate-800  rounded-3xl "
              speed={0.75}
            >
              <div class="h-full w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                <GridLines
                  className="grid-area h-[100%]  bg-white rounded-3xl "
                  cellWidth={25}
                  cellWidth2={25}
                  strokeWidth={0.25}
                  strokeWidth2={0.25}
                  lineColor={"rgb(30 41 59)"}
                  lineColor2={"rgb(30 41 59)"}
                >
                  <div className="flex flex-row gap-x-2 p-2 justify-end">
                    <SocialIcon url="www.github.com/subinoybiswas" />
                    <SocialIcon url="www.twitter.com/heysubinoy" />
                    <SocialIcon url="www.instagram.com/biswas.subinoy" />
                    <SocialIcon url="mailto:heysubinoy@gmail.com" />
                  </div>
                </GridLines>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={2.35} speed={0.75}>
              <div className="flex flex-row text-black text-5xl ml-[360px] gap-[80px]">
                <div>
                  <div className="flex flex-row content-center ">
                    Hey👋 I&apos;m
                    <div
                      className="pl-2
                  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  bg-clip-text text-transparent  font-outline-2 font-semibold
                  pb-2"
                    >
                      Subinoy
                    </div>
                  </div>
                  <div className="text-xl mt-9 ml-5">
                    <ul>
                      <li className="mb-5">🚀 FullStack Developer </li>
                      <li className="mb-5">✍️ Technical Content Writer </li>
                      <li className="mb-5">⚙️ Community Builder</li>
                    </ul>
                    <a
                      href="/SubinoyResume.pdf"
                      download="subinoy-resume.pdf"
                      className="mt-5"
                    >
                      <button
                        type="button"
                        class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        Download Resume
                      </button>
                    </a>
                  </div>
                </div>
                <div className="lg:flex  hidden">
                  <model-viewer
                    style={{
                      width: "400px",
                      height: "350px",
                      marginBottom: "20px",
                    }}
                    src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
                    ar=""
                    ar-modes="webxr scene-viewer quick-look"
                    camera-controls=""
                    disable-zoom
                    disable-pan
                    disable-tap
                    tone-mapping="commerce"
                    interaction-prompt="none"
                    shadow-intensity="1"
                    ar-status="not-presenting"
                    autoplay=""
                  ></model-viewer>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={2.25}
              className="ml-10 "
              style={{ width: "270px" }}
            >
              <div className="flex flex-col w-[270px] items-center  ">
                <AboutMe></AboutMe>
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
            <div className=" flex flex-col  justify-center items-center  text-center sm:w-auto w-screen">
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
              <div className=" mt-[35vh] flex  flex-row justify-center text-center sm:gap-4 gap-2 item-center my-5 sm:my-10 text-lg sm:text-lg text-zinc-600">
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
                  About
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
              <div className="p-0 m-0">
                <div className="w-screen mt-[30vh]" ref={projectRef}>
                  <div className="flex flex-col text-center items-center justify-center text-4xl mb-4">
                    Projects
                  </div>
                  <Project></Project>
                  <div className="animate-bounce flex flex-col justify-center items-center py-6">
                    View More
                  </div>
                </div>
                <div className="text-left flex-grow" ref={meRef}>
                  <div class="h-full w-full rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                    <GridLines
                      className="grid-area  z-[-1] bg-slate-100 rounded-3xl h-screen"
                      cellWidth={25}
                      cellWidth2={25}
                      strokeWidth={0.25}
                      strokeWidth2={0.25}
                      lineColor={"rgb(30 41 59)"}
                      lineColor2={"rgb(30 41 59)"}
                    >
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-5">
                        <AboutMe className="pt-10"></AboutMe>
                        <div className="flex flex-col text-black text-4xl ">
                          <div className="flex flex-row flex-wrap gap-2">
                            <div>Hey👋 I&apos;m</div>
                            <div
                              className="
                        bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  bg-clip-text text-transparent  font-outline-2 font-semibold
                        pb-1"
                            >
                              Subinoy
                            </div>
                          </div>
                          <div className="text-xl pl-5  mt-5">
                            <ul>
                              <li className="mb-2">🚀 FullStack Developer </li>
                              <li className="mb-2">
                                ✍️ Technical Content Writer{" "}
                              </li>
                              <li className="mb-2">⚙️ Community Builder</li>
                            </ul>
                            <a
                              href="/SubinoyResume.pdf"
                              download="subinoy-resume.pdf"
                            >
                              <button
                                type="button"
                                class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                              >
                                Download Resume
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </GridLines>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
