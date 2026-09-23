import { EngineerSection } from "@/components/engineer/engineer-section";
import type { Profile } from "@/types/portfolio";

type EngineerAboutProps = {
  readonly profile: Profile;
};

export function EngineerAbout({ profile }: EngineerAboutProps) {
  return (
    <EngineerSection
      id="about"
      label="01 / About"
      title="Engineering ideas into real products."
    >
      <div className="grid gap-7 lg:grid-cols-[0.94fr_1.06fr]">
        <p className="max-w-2xl text-lg leading-8 text-[#8fa3ad]">
          {profile.bio}
        </p>
        <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1117]/88 p-4 shadow-[0_18px_70px_rgba(0,0,0,0.2)] sm:p-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#23d5f5]">
            System_Profile
          </p>
          <div className="mt-4 grid gap-2.5">
            {profile.professionalAreas.map((area, index) => (
              <div
                className="flex items-center gap-4 rounded-xl border border-[#23d5f5]/14 bg-[#0e151c] px-4 py-3"
                key={area}
              >
                <span className="font-mono text-xs text-[#23d5f5]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-[#f1f7fa]">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </EngineerSection>
  );
}
