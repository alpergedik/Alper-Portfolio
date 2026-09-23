import type { ReactNode } from "react";

type EngineerSectionProps = {
  readonly id?: string;
  readonly label: string;
  readonly title: string;
  readonly copy?: string;
  readonly children: ReactNode;
};

export function EngineerSection({
  id,
  label,
  title,
  copy,
  children,
}: EngineerSectionProps) {
  return (
    <section className="scroll-mt-24 py-12 sm:py-16" id={id}>
      <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#23d5f5]">
            {label}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#f1f7fa] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {copy ? (
            <p className="mt-4 text-base leading-8 text-[#8fa3ad] sm:text-lg">
              {copy}
            </p>
          ) : null}
        </div>
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}
