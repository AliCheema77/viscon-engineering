import { client } from "./client";
import type { Project } from "@/content/projects";

const PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  "slug": slug.current,
  title,
  category,
  client,
  status,
  contractValue,
  projectValue,
  location,
  description,
  "images": images[].asset->url,
  featured,
  order
}`;

export async function getProjects(): Promise<Project[]> {
  const projects = await client.fetch<Project[]>(PROJECTS_QUERY);
  return projects.map((project) => ({
    ...project,
    images: project.images ?? [],
    contractValue: project.contractValue ?? undefined,
    projectValue: project.projectValue ?? undefined,
    description: project.description ?? undefined,
  }));
}