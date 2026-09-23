import type { ReactNode } from "react";
import type { Profile } from "@/types/portfolio";

type EngineerTerminalProps = {
  readonly profile: Profile;
};

export function EngineerTerminal({ profile }: EngineerTerminalProps) {
  return (
    <aside
      aria-label="Engineer terminal profile summary"
      className="rounded-[1.5rem] border border-[#23d5f5]/18 bg-[#081018]/95 p-4 shadow-[0_24px_90px_rgba(0,0,0,0.32),0_0_50px_rgba(35,213,245,0.08)]"
    >
      <div className="overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#0b1117]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#23d5f5]" />
          <span className="ml-3 font-mono text-xs text-[#61737d]">
            alper@portfolio:~
          </span>
        </div>
        <div className="space-y-6 p-5 font-mono text-sm leading-7 sm:p-6">
          <TerminalBlock command="whoami">
            <p className="text-[#f1f7fa]">{profile.name}</p>
            <p>{profile.primaryTitle}</p>
            <p>{profile.secondaryTitle}</p>
          </TerminalBlock>
          <TerminalBlock command="focus">
            <ul className="space-y-1">
              {profile.professionalAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </TerminalBlock>
          <span
            aria-hidden="true"
            className="inline-block h-4 w-2 bg-[#23d5f5] motion-safe:animate-pulse"
          />
        </div>
      </div>
    </aside>
  );
}

function TerminalBlock({
  command,
  children,
}: {
  readonly command: string;
  readonly children: ReactNode;
}) {
  return (
    <div>
      <p className="text-[#23d5f5]">&gt; {command}</p>
      <div className="mt-2 text-[#8fa3ad]">{children}</div>
    </div>
  );
}
