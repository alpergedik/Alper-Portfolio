import type { ReactNode } from "react";

type ProfessionalSectionProps = {
  readonly id?: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly copy?: string;
  readonly children: ReactNode;
  readonly className?: string;
};

export function ProfessionalSection({
  id,
  eyebrow,
  title,
  copy,
  children,
  className = "",
}: ProfessionalSectionProps) {
  return (
    <section className={`scroll-mt-24 py-12 sm:py-16 ${className}`} id={id}>
      <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3b6ef5]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[#111318] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {copy ? (
            <p className="mt-4 text-base leading-8 text-[#666b73] sm:text-lg">
              {copy}
            </p>
          ) : null}
        </div>
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}
