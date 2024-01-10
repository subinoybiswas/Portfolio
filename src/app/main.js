"use client";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Image from "next/image";
import Link from "next/link";
import InstaLogo from "../../public/instagram-logo.png";
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
import Script from "next/script";
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

  return (
    <div suppressHydrationWarning={true}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6NQ6P5JBNG" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-6NQ6P5JBNG');
        `}
      </Script>
      {isBrowser ? (
        <main>
          <Parallax className="select-none" pages={3}>
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
                <a className="sm:hover:text-zinc-400 duration-500 active:text-zinc-400">
                  Projects
                </a>
                <a className="sm:hover:text-zinc-400 duration-500 active:text-zinc-400">
                  Contact
                </a>
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
                  href="https://www.instagram.com/biswas.subinoy"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={InstaLogo}
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
                  <div className="sm:text-5xl text-4xl my-4 text-black">Projects</div>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2.25}>
              <AboutMe></AboutMe>
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              className="bg-slate-800  rounded-3xl z-[-1]"
              speed={0.75}
            >
              <GridLines
                className="grid-area h-[100%] z-[-1] bg-slate-100 rounded-3xl "
                cellWidth={25}
                cellWidth2={25}
                strokeWidth={0.5}
                strokeWidth2={0.5}
               
                lineColor={"rgb(30 41 59)"}
                lineColor2={"rgb(30 41 59)"}
              >
                <h1>Gridlines demo</h1>
              </GridLines>
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
                <a className="sm:hover:text-zinc-400 duration-500 active:text-zinc-400">
                  Projects
                </a>
                <a className="sm:hover:text-zinc-400 duration-500 active:text-zinc-400">
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
                  href="https://www.instagram.com/biswas.subinoy"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={InstaLogo}
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
            <div className="">
              <div className="flex flex-col text-center items-center justify-center text-4xl mb-4">
                Projects
              </div>
              <Project></Project>
              <div className="animate-bounce flex flex-col justify-center items-center py-6">
                View More
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
