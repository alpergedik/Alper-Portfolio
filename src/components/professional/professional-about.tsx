import { ProfessionalSection } from "@/components/professional/professional-section";
import type { Profile } from "@/types/portfolio";

type ProfessionalAboutProps = {
  readonly profile: Profile;
};

export function ProfessionalAbout({ profile }: ProfessionalAboutProps) {
  return (
    <ProfessionalSection
      className="pt-10 pb-10 sm:pt-12 sm:pb-14"
      eyebrow="About"
      id="about"
      title="Engineering ideas into real products."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <p className="max-w-2xl text-lg leading-8 text-[#666b73]">
          {profile.bio}
        </p>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {profile.professionalAreas.map((area) => (
            <div
              className="rounded-2xl border border-[#1113181a] bg-white px-4 py-4 shadow-[0_12px_36px_rgba(17,19,24,0.035)]"
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
