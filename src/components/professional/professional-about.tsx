import { ProfessionalSection } from "@/components/professional/professional-section";
import type { Profile } from "@/types/portfolio";

type ProfessionalAboutProps = {
  readonly profile: Profile;
};

export function ProfessionalAbout({ profile }: ProfessionalAboutProps) {
  return (
    <ProfessionalSection
      className="pb-12 sm:pb-16"
      eyebrow="About"
      id="about"
      title="Engineering ideas into real products."
    >
      <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr]">
        <p className="max-w-2xl text-lg leading-8 text-[#666b73]">
          {profile.bio}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {profile.professionalAreas.map((area) => (
            <div
              className="rounded-2xl border border-[#1113181a] bg-white p-5 shadow-[0_16px_50px_rgba(17,19,24,0.04)]"
              key={area}
            >
              <p className="text-sm font-semibold text-[#111318]">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </ProfessionalSection>
  );
}
