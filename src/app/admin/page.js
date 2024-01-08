"use client";
import { useState } from "react";
import Spotlight from "@/app/spotlight";
import { SpotlightCard } from "@/app/spotlight";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function AdminPage() {
  const { push } = useRouter();
  const [err, setErr] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Access the username and password from formData
    setSubmitted(true);
    const { username, password } = formData;
    const payload = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setErr(true);
        throw new Error("Network response was not ok");
      }

      await response.json();

      push("/admin/dashboard");
    } catch {
      setErr(true);
      setSubmitted(false);
    }
  };
  return (
    <main className="flex flex-col content-center items-center justify-center  h-screen select-none">
      <Spotlight className=" max-w-sm  mx-2  flex-wrap  lg:max-w-none group mb-4">
        <SpotlightCard>
          <div className="relative h-full bg-[#1d1543] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
            {/* Radial gradient */}
            <div
              className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
              aria-hidden="true"
            >
              <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
            </div>
            <div className="flex flex-col h-full items-center text-center">
              {/* Image */}
              <div className="relative inline-flex">
                <div
                  className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-white"
                  aria-hidden="true"
                ></div>
              </div>
              {/* Text */}
              <div className="grow mb-5">
                <h2 className="text-xl text-slate-200 font-bold mb-1"></h2>
                <p className=" text-slate-200 text-3xl">Login</p>
              </div>

              <div className="flex flex-col gap-y-3 text-lg">
                <form
                  className="flex flex-col gap-y-3 text-lg"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="rounded-full text-slate-200 px-2 h-[2rem] border-solid border-slate-700 border-2 bg-inherit"
                    placeholder="Username"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    className="rounded-full text-slate-200 px-2 h-[2rem] border-solid border-slate-700 bg-inherit border-2"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <div>
                    <button
                      className=" my-2 inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                      href="#0"
                      onClick={handleSubmit}
                    >
                      {!submitted ? (
                        <>
                          <svg
                            className="fill-slate-500 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="14"
                          >
                            <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                          </svg>
                          <span>Submit</span>
                        </>
                      ) : (
                        <>
                          <Image
                            className="fill-slate-500 mr-2 animate-spin"
                            src="/loading.png"
                            width="16"
                            height="14"
                            alt="loading"
                          />
                          <span>Submit</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
                {err ? (
                  <div className="animate-shake animate-ease-linear animate-normal text-red-500">
                    Wrong Password
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </SpotlightCard>
      </Spotlight>
    </main>
  );
}
