import { GitHubCalendar } from "react-github-calendar";
import { ExternalLink, Github } from "lucide-react";
import wakatimeLogo from "../assets/wakatime.svg";

export const GitHubActivity = () => {
  return (
    <section
      id="activity"
      className="section-padding relative w-full max-w-[90rem] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="space-y-16 relative z-10">
        <div className="space-y-4">
          <h2 className="font-serif italic text-5xl md:text-7xl font-light text-zinc-100 tracking-tight">
            Engineering{" "}
            <span className="text-zinc-500 not-italic">Activity</span>
          </h2>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">
            Building consistently and shipping projects.
          </p>
        </div>

        <div className="w-full glass-card rounded-[2rem] border-zinc-800/50 p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col gap-6 2xl:flex-row 2xl:items-stretch">
            <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-950/35 p-5 sm:p-7 lg:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-100">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500">
                      GitHub
                    </p>
                    <h3 className="text-lg font-medium text-zinc-100">
                      Contribution Calendar
                    </h3>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <GitHubCalendar
                  username="maneeq166"
                  colorScheme="dark"
                  blockSize={14}
                  blockMargin={4}
                  fontSize={12}
                  className="github-activity-calendar w-full text-zinc-500"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 2xl:w-52 2xl:shrink-0 2xl:grid-cols-1">
              <a
                href="https://github.com/maneeq166"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-32 flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-950/35 p-5 transition-all hover:border-blue-500/40 hover:bg-zinc-900/70"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
                    GitHub
                  </div>
                  <Github className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-zinc-100" />
                </div>
                <div className="mt-6 flex items-center justify-between gap-4 text-zinc-100">
                  <span>Follow Profile</span>
                  <ExternalLink className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>

              <a
                href="https://wakatime.com/@aneeq"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-32 flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-950/35 p-5 transition-all hover:border-blue-500/40 hover:bg-zinc-900/70"
              >
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
                  WakaTime
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 text-zinc-100">
                  <span>View Stats</span>
                  <img
                    src={wakatimeLogo}
                    alt="WakaTime"
                    className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
