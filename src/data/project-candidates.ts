import type { ProjectCandidate } from "@/types/portfolio";

export const projectCandidates = [
  {
    name: "SocialCoffee_App",
    repositoryUrl: "https://github.com/alpergedik/SocialCoffee_App",
    status: "needs-review",
  },
  {
    name: "bloom-focus",
    repositoryUrl: "https://github.com/alpergedik/bloom-focus",
    status: "needs-review",
  },
  {
    name: "RollingRush",
    repositoryUrl: "https://github.com/alpergedik/RollingRush",
    status: "needs-review",
  },
  {
    name: "GGJ26",
    repositoryUrl: "https://github.com/alpergedik/GGJ26",
    status: "needs-review",
  },
  {
    name: "FENG497-ParkinsonAIProject",
    repositoryUrl: "https://github.com/alpergedik/FENG497-ParkinsonAIProject",
    status: "needs-review",
  },
] as const satisfies readonly ProjectCandidate[];
