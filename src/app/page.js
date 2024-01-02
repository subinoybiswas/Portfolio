"use client";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

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
    <main className=" select-none">
      <div
        className="bg-fixed bg-gradient-to-bl h-[100vh] 
        from-[#000103] via-zinc-600/20 to-[#010610] flex flex-col  justify-center items-center p-24 text-center sm:w-auto w-screen"
      >
        {init && (
          <Particles
            className="z-[-1]"
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
          <h1 className=" text-7xl sm:text-8xl">Subinoy</h1>
        </div>

        <div className=" my-5 sm:my-10 text-sm sm:text-md sm:w-auto w-[70vw] text-slate-500">
          <p>Your friendly neighbourhood developer</p>
        </div>
      </div>
      <div className=" rounded-3xl bg-black flex flex-col">
        suh sd sd fsd fixedsd fsdsfd fsd
        <div>dcflskhf</div>
        <div>dcflskhf</div>
        <div>dcflskhf</div>
        <div>dcflskhf</div>
        <div>dcflskhf</div>
        <div>dcflskhf</div>
        <div>dcflskhf</div>
        <div>dcflskhf</div>
        <div>dcflskhf</div>
        <div>dcflskhf</div>
        <div>dcflskhf</div>
      </div>
    </main>
  );
}
