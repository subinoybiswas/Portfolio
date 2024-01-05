"use client";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Image from "next/image";
import Link from "next/link";
import InstaLogo from "../../public/instagram-logo.png";
import LinkedInLogo from "../../public/linkedin (1).png";
import Project from "./project";

export default function Home() {
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
  return (
    <main className=" select-none ">
      <div
        className="bg-fixed bg-gradient-to-bl h-[100vh] 
        from-[#000103] via-zinc-600/20 to-[#010610] flex flex-col  justify-center items-center p-24 text-center sm:w-auto w-screen"
      >
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
        <Project></Project>
      </div>
    </main>
  );
}
