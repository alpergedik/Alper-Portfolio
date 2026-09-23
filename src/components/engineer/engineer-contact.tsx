import type { SiteConfig } from "@/types/portfolio";

type EngineerContactProps = {
  readonly siteConfig: SiteConfig;
};

export function EngineerContact({ siteConfig }: EngineerContactProps) {
  const github = siteConfig.socialLinks.find((link) => link.platform === "github");
  const linkedIn = siteConfig.socialLinks.find((link) => link.platform === "linkedin");
  const email = siteConfig.socialLinks.find((link) => link.platform === "email");

  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10" id="contact">
      <div className="mx-auto max-w-6xl rounded-[1.6rem] border border-[#23d5f5]/20 bg-[#0b1117] p-6 shadow-[0_26px_90px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[#23d5f5]">
              06 / Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#f1f7fa] sm:text-4xl">
              Have an idea?
              <br />
              Let&apos;s build something.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#8fa3ad]">
              Reach out by email or connect through Alper&apos;s public profiles.
            </p>
          </div>

          <div className="rounded-[1.35rem] border border-[#22323c] bg-[#05080b] p-5 font-mono text-sm text-[#cfe1e7]">
            <p className="text-[#61737d]">$ contact --profile</p>
            <p className="mt-3">
              name=<span className="text-[#23d5f5]">&quot;{siteConfig.owner.name}&quot;</span>
            </p>
            <p>
              role=<span className="text-[#23d5f5]">&quot;{siteConfig.owner.primaryTitle}&quot;</span>
            </p>
            <p>
              email=<span className="text-[#23d5f5]">&quot;{siteConfig.owner.email}&quot;</span>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {github ? (
            <a
              className="rounded-full border border-[#23d5f5]/35 px-5 py-3 text-sm font-semibold text-[#f1f7fa] transition hover:border-[#36d7f3] hover:bg-[#23d5f5]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#36d7f3]"
              href={github.href}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          ) : null}
          {linkedIn ? (
            <a
              className="rounded-full border border-[#22323c] px-5 py-3 text-sm font-semibold text-[#f1f7fa] transition hover:border-[#36d7f3] hover:bg-[#23d5f5]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#36d7f3]"
              href={linkedIn.href}
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          ) : null}
          {email ? (
            <a
              className="rounded-full border border-[#22323c] px-5 py-3 text-sm font-semibold text-[#f1f7fa] transition hover:border-[#36d7f3] hover:bg-[#23d5f5]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#36d7f3]"
              href={email.href}
            >
              Email
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
