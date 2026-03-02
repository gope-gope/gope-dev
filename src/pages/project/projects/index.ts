import type { Project } from "@/types/project";
import fxStablecoinDex from "./fx-stablecoin-dex";
import liquidRestakingProtocol from "./liquid-restaking-protocol";
import onlineLearningPlatform from "./online-learning-platform";
import professionalCertificationApp from "./professional-certification-app";
import otherProjects from "./other-projects";

const projects: Project[] = [
  fxStablecoinDex,
  liquidRestakingProtocol,
  onlineLearningPlatform,
  professionalCertificationApp,
  otherProjects,
];

const projectById: Record<string, Project> = Object.fromEntries(
  projects.map((p) => [p.id, p]),
);

export const projectIds = projects.map((p) => p.id);

export function getProject(id: string | undefined): Project | undefined {
  if (!id) return undefined;
  return projectById[id];
}

export { projects };
