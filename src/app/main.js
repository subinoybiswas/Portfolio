"use client";
import { useCallback, useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Image from "next/image";
import Link from "next/link";

import GitHubLogo from "../../public/github-mark.png";
import LinkedInLogo from "../../public/linkedin (1).png";
import Project from "./project";
import tabs from "@/helpers/tabs";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useScroll, animated } from "@react-spring/web";
import { Tabs } from "@/components/ui/tabs-acc";
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
import { useRouter } from "next/navigation";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import content from "@/helpers/experiences";
export default function Main() {
  const { push } = useRouter();
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
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <div suppressHydrationWarning={true}>
      {isBrowser ? (
        <main>
          <Parallax className="select-none" pages={4} ref={ref}>
            <ParallaxLayer
              factor={5}
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
                    fpsLimit: 60,
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

            {/* <ParallaxLayer offset={1}>
              <div className=" rounded-t-3xl">
                <div className=" rounded-3xl  flex flex-col pl-20">
                  <div className="sm:text-5xl text-4xl my-10">PROJECTS</div>
                </div>
              </div>
            </ParallaxLayer> */}
            <ParallaxLayer offset={1} speed={0.5}>
              {" "}
              <StickyScroll content={content} />
            </ParallaxLayer>
            <ParallaxLayer offset={2} className="justify-center items-center ">
              {tabs && <Tabs tabs={tabs} />}
            </ParallaxLayer>

            <ParallaxLayer
              offset={3}
              className="bg-slate-800  rounded-3xl"
              speed={0.5}
            >
              <div class="h-full w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                <GridLines
                  className="grid-area h-[100%]  bg-[#080c17]  rounded-3xl "
                  cellWidth={25}
                  cellWidth2={25}
                  strokeWidth={0.25}
                  strokeWidth2={0.25}
                  lineColor={"rgba(229, 231, 235, 0.5)"}
                  lineColor2={"rgba(229, 231, 235, 0.5)"}
                >
                  <div className="flex flex-row gap-x-2 p-2 justify-end">
                    <SocialIcon url="https://www.github.com/subinoybiswas" />
                    <SocialIcon url="https://www.twitter.com/heysubinoy" />
                    <SocialIcon url="https://www.instagram.com/biswas.subinoy" />
                    <SocialIcon url="https://www.linkedin.com/in/heysubinoy/" />
                    <SocialIcon url="mailto:heysubinoy@gmail.com" />
                  </div>
                </GridLines>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={3.35} speed={0.75}>
              <div className="flex flex-row text-slate-400 text-3xl  md:text-4xl lg:text-5xl ml-[370px] gap-[80px]">
                <div>
                  <div style={{ display: "inline-block" }}>Hey👋 I&apos;m</div>
                  <div className="pl-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent font-outline-2 font-semibold pb-2 inline-block">
                    Subinoy
                  </div>

                  <div className=" text-lg md:text-xl mt-9 ml-5">
                    <ul>
                      <li className="mb-5">🚀 Full Stack Developer </li>
                      <li className="mb-5">✍️ Technical Content Writer </li>
                      <li className="mb-5">⚙️ Community Builder</li>
                      <li className="mb-5">🏆 3+ Hackathon Winner</li>
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
                      width: "450px",
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
                    camera-orbit="8.391deg 76.6deg 10.16m"
                    field-of-view="30deg"
                  ></model-viewer>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={3.25}
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
            <div className=" flex flex-col  justify-center  text-center items-center sm:w-auto w-screen">
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
                  <div
                    className="animate-bounce flex flex-col justify-center items-center pb-11 pt-1 text-2xl sm:hover:text-zinc-400 duration-500 active:text-zinc-400 text-zinc-600"
                    onClick={() => push("/Projects")}
                  >
                    View All
                  </div>
                </div>
                <div className="text-left flex-grow" ref={meRef}>
                  <div class="h-full w-full rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                    <GridLines
                      className="grid-area  z-[-1] bg-slate-100 rounded-3xl "
                      cellWidth={25}
                      cellWidth2={25}
                      strokeWidth={0.25}
                      strokeWidth2={0.25}
                      lineColor={"rgb(30 41 59)"}
                      lineColor2={"rgb(30 41 59)"}
                    >
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-9 pt-5">
                        <AboutMe className="p-10"></AboutMe>
                        <div className="flex flex-col text-black text-4xl  ">
                          <div className="flex flex-row flex-wrap gap-2 text-center justify-center">
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
                              <li className="mb-2">🚀 Full Stack Developer </li>
                              <li className="mb-2">
                                ✍️ Technical Content Writer
                              </li>
                              <li className="mb-2">⚙️ Community Builder</li>
                              <li className="mb-5">🏆 3+ Hackathon Winner</li>
                            </ul>
                            <a
                              href="/SubinoyResume.pdf"
                              download="subinoy-resume.pdf"
                              className="mb-5"
                            >
                              <button
                                type="button"
                                class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                              >
                                Download Resume
                              </button>
                            </a>
                            <model-viewer
                              src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
                              ar=""
                              ar-modes="webxr"
                              camera-controls=""
                              disable-zoom
                              disable-pan
                              disable-tap
                              tone-mapping="commerce"
                              interaction-prompt="none"
                              shadow-intensity="1"
                              ar-status="not-presenting"
                              autoplay=""
                              field-of-view="30deg"
                            ></model-viewer>
                            <div className="flex gap-x-2 my-4">
                              <SocialIcon url="https://www.github.com/subinoybiswas" />
                              <SocialIcon url="https://www.twitter.com/heysubinoy" />
                              <SocialIcon url="mailto:heysubinoy@gmail.com" />
                              <SocialIcon url="https://www.instagram.com/biswas.subinoy" />
                              <SocialIcon url="https://www.linkedin.com/in/heysubinoy/" />
                            </div>
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
