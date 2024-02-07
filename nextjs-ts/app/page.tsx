"use client";

import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Loading from "./loading";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleApplyClick = async () => {
    setIsLoading(true);
    try {
      // Call your endpoint
      const response = await fetch("/api/example?job_slug=<your-job-slug>", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      // Check response
      if (!response.ok) {
        throw new Error("Error making request");
      }

      // Redirect the user to the application portal
      window.location.href = response.url;
    } catch (error) {
      console.error("Error making request:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-10">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Make sure that you have set your&nbsp;
              <code className="font-mono font-bold">client_token</code>&nbsp;in
              your&nbsp;
              <code className="font-mono font-bold">.env</code>
              &nbsp;file first.
            </p>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://embloy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                By{" "}
                <Image
                  src="/embloy.svg"
                  alt="Embloy logo"
                  width={100}
                  height={24}
                  priority
                />
              </a>
            </div>
          </div>
          <div className="lg:mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left" />
          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-99FFFF-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-99FFFF-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#99FFFF] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#99FFFF]"
              src="/embloy.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>
          <div className="lg:mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left" />
          <div className="lg:mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left" />
          <button
            onClick={handleApplyClick}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-4xl font-semibold`}>
              Apply with EMBLOY{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
              You can change the job you will be directed to by editing the
              &nbsp;<code className="font-mono font-bold">job_slug</code>&nbsp;
              in &nbsp;<code className="font-mono font-bold">app/page.tsx</code>
              &nbsp;.
            </p>
          </button>
          <footer className="text-center text-gray-500 text-sm mt-8">
            <p>&copy; Copyright © 2024 Embloy, GbR. All rights reserved.</p>
          </footer>
        </>
      )}
    </main>
  );
};

export default Home;
