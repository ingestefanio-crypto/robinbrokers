"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [deskOpen, setDeskOpen] = useState(false);

  const [tasks, setTasks] = useState({
    like: false,
    repost: false,
    follow: false,
  });

  const [displayText, setDisplayText] = useState("");

  const terminalText =
    "> ROBINBROKERS SYSTEM ONLINE\n" +
    "> 2,222 BROKERS DETECTED\n" +
    "> 150 FIRST SEATS AVAILABLE\n" +
    "> WAITING FOR NEW BROKERS";

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setDisplayText(terminalText.slice(0, index));
      index++;

      if (index > terminalText.length) {
        clearInterval(typing);
      }
    }, 45);

    return () => clearInterval(typing);
  }, []);

  const allCompleted =
    tasks.like && tasks.repost && tasks.follow;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">

        {/* HERO IMAGE */}
        <img
          src="/hero.png"
          alt="Robinbrokers trading desk"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />

        {/* LEFT DARK FADE */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />

        {/* NAVBAR */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 md:px-12">

          <div className="text-sm font-bold tracking-[0.3em]">
            ROBINBROKERS
          </div>

          {/* VISUAL ONLY */}
          <div className="border border-white/40 bg-black/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
            Connect Wallet
          </div>

        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex min-h-screen items-center px-8 md:px-20">
          <div className="max-w-2xl">

            {/* TERMINAL */}
            <div className="font-mono">

              <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-green-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                ROBINHOOD // BROKER NETWORK
              </div>

              <pre className="whitespace-pre-wrap text-lg leading-8 text-green-400 md:text-xl">
                {displayText}
                <span className="animate-pulse">█</span>
              </pre>

            </div>

            {/* ENTER BUTTON */}
            <button
              onClick={() => setDeskOpen(true)}
              className="mt-10 border border-green-400 bg-green-400 px-10 py-4 font-mono text-sm font-bold uppercase tracking-[0.25em] text-black transition hover:bg-transparent hover:text-green-400"
            >
              Enter the Desk
            </button>

            {/* STATUS */}
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.4em] text-green-900">
              SYSTEM INITIALIZING...
            </p>

          </div>
        </div>

        {/* TASK MODAL */}
        {deskOpen && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/80 px-6 backdrop-blur-sm">

            <div className="w-full max-w-md border border-green-400/30 bg-[#050805] p-8 shadow-2xl">

              <div className="flex items-center justify-between">

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-green-400">
                    ROBINBROKERS
                  </p>

                  <h2 className="mt-3 font-mono text-2xl font-bold">
                    ENTER THE DESK
                  </h2>
                </div>

                <button
                  onClick={() => setDeskOpen(false)}
                  className="font-mono text-gray-500 hover:text-green-400"
                >
                  ✕
                </button>

              </div>

              <p className="mt-4 font-mono text-sm leading-6 text-gray-500">
                Complete the tasks below to claim your first seat.
              </p>

              {/* LIKE */}
              <a
                href="https://x.com/Robinbrokersapp/status/2106760141697585440?s=20"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  setTasks({ ...tasks, like: true })
                }
                className="mt-8 flex items-center justify-between border border-green-400/10 p-4 font-mono transition hover:border-green-400/50"
              >
                <span>LIKE THE POST</span>

                <span className="text-xs text-green-400">
                  {tasks.like ? "✓ DONE" : "OPEN"}
                </span>
              </a>

              {/* REPOST */}
              <a
                href="https://x.com/Robinbrokersapp/status/2106760141697585440?s=20"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  setTasks({ ...tasks, repost: true })
                }
                className="mt-3 flex items-center justify-between border border-green-400/10 p-4 font-mono transition hover:border-green-400/50"
              >
                <span>REPOST THE POST</span>

                <span className="text-xs text-green-400">
                  {tasks.repost ? "✓ DONE" : "OPEN"}
                </span>
              </a>

              {/* FOLLOW */}
              <a
                href="https://x.com/Robinbrokersapp"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  setTasks({ ...tasks, follow: true })
                }
                className="mt-3 flex items-center justify-between border border-green-400/10 p-4 font-mono transition hover:border-green-400/50"
              >
                <span>FOLLOW @ROBINBROKERSAPP</span>

                <span className="text-xs text-green-400">
                  {tasks.follow ? "✓ DONE" : "OPEN"}
                </span>
              </a>

              {/* COMPLETED */}
              {allCompleted && (
                <button className="mt-6 w-full bg-green-400 px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-black">
                  TASKS COMPLETED
                </button>
              )}

            </div>
          </div>
        )}

      </section>
    </main>
  );
}