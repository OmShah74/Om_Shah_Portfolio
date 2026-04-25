import { projects } from "@/data/portfolio";

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
